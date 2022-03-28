'''
## Aliyun ROS VPC Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as VPC from '@alicloud/ros-cdk-vpc';
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

from ._jsii import *

import ros_cdk_core


class AnycastEIP(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.AnycastEIP",
):
    '''A ROS resource type:  ``ALIYUN::VPC::AnycastEIP``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["AnycastEIPProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::AnycastEIP``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAnycastId")
    def attr_anycast_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AnycastId: Anycast EIP instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAnycastId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute IpAddress: Anycase IP address.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: Anycast EIP instance name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: Order ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))


class AnycastEIPAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.AnycastEIPAssociation",
):
    '''A ROS resource type:  ``ALIYUN::VPC::AnycastEIPAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AnycastEIPAssociationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::AnycastEIPAssociation``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAnycastId")
    def attr_anycast_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AnycastId: Anycast EIP instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAnycastId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBindInstanceId")
    def attr_bind_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute BindInstanceId: The ID of the cloud resource instance to be bound.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBindInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBindInstanceRegionId")
    def attr_bind_instance_region_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBindInstanceRegionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBindInstanceType")
    def attr_bind_instance_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute BindInstanceType: The cloud resource instance type to be bound.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBindInstanceType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "anycast_id": "anycastId",
        "bind_instance_id": "bindInstanceId",
        "bind_instance_region_id": "bindInstanceRegionId",
        "bind_instance_type": "bindInstanceType",
    },
)
class AnycastEIPAssociationProps:
    def __init__(
        self,
        *,
        anycast_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        bind_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        bind_instance_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        bind_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::AnycastEIPAssociation``.

        :param anycast_id: Property anycastId: Anycast EIP instance ID.
        :param bind_instance_id: Property bindInstanceId: The ID of the cloud resource instance to be bound.
        :param bind_instance_region_id: Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
        :param bind_instance_type: Property bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "anycast_id": anycast_id,
            "bind_instance_id": bind_instance_id,
            "bind_instance_region_id": bind_instance_region_id,
            "bind_instance_type": bind_instance_type,
        }

    @builtins.property
    def anycast_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property anycastId: Anycast EIP instance ID.'''
        result = self._values.get("anycast_id")
        assert result is not None, "Required property 'anycast_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bind_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bindInstanceId: The ID of the cloud resource instance to be bound.'''
        result = self._values.get("bind_instance_id")
        assert result is not None, "Required property 'bind_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bind_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.'''
        result = self._values.get("bind_instance_region_id")
        assert result is not None, "Required property 'bind_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bind_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bindInstanceType: The cloud resource instance type to be bound.

        Valid value: SlbInstance, SLB instance of private network type.
        '''
        result = self._values.get("bind_instance_type")
        assert result is not None, "Required property 'bind_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AnycastEIPAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.AnycastEIPProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "name": "name",
        "service_location": "serviceLocation",
    },
)
class AnycastEIPProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_location: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::AnycastEIP``.

        :param description: Property description: Anycast EIP instance description.
        :param instance_charge_type: Property instanceChargeType: Anycast EIP instance charge type.
        :param internet_charge_type: Property internetChargeType: Anycast EIP instance access public network billing method.
        :param name: Property name: Anycast EIP instance name.
        :param service_location: Property serviceLocation: Anycast EIP instance access area.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if name is not None:
            self._values["name"] = name
        if service_location is not None:
            self._values["service_location"] = service_location

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Anycast EIP instance description.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceChargeType: Anycast EIP instance charge type.'''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetChargeType: Anycast EIP instance access public network billing method.'''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: Anycast EIP instance name.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_location(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serviceLocation: Anycast EIP instance access area.'''
        result = self._values.get("service_location")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AnycastEIPProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BgpGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.BgpGroup",
):
    '''A ROS resource type:  ``ALIYUN::VPC::BgpGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BgpGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::BgpGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBgpGroupId")
    def attr_bgp_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute BgpGroupId: The ID of the BGP group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBgpGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: The name of the BGP group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.BgpGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "peer_asn": "peerAsn",
        "router_id": "routerId",
        "auth_key": "authKey",
        "description": "description",
        "is_fake_asn": "isFakeAsn",
        "local_asn": "localAsn",
        "name": "name",
    },
)
class BgpGroupProps:
    def __init__(
        self,
        *,
        peer_asn: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        router_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auth_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        is_fake_asn: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        local_asn: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::BgpGroup``.

        :param peer_asn: Property peerAsn: The AS number of the BGP peer.
        :param router_id: Property routerId: The ID of the VBR.
        :param auth_key: Property authKey: The authentication key of the BGP group.
        :param description: Property description: The description of the BGP group. The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
        :param is_fake_asn: Property isFakeAsn: A router that runs BGP typically belongs to only one AS. In some cases, for example, the AS needs to be migrated or is merged with another AS, a new AS number replaces the original one.
        :param local_asn: Property localAsn: The AS number on the Alibaba Cloud side.
        :param name: Property name: The name of the BGP group. The name must be 2 to 128 characters in length and can contain digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:// or https://.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "peer_asn": peer_asn,
            "router_id": router_id,
        }
        if auth_key is not None:
            self._values["auth_key"] = auth_key
        if description is not None:
            self._values["description"] = description
        if is_fake_asn is not None:
            self._values["is_fake_asn"] = is_fake_asn
        if local_asn is not None:
            self._values["local_asn"] = local_asn
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def peer_asn(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property peerAsn: The AS number of the BGP peer.'''
        result = self._values.get("peer_asn")
        assert result is not None, "Required property 'peer_asn' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property routerId: The ID of the VBR.'''
        result = self._values.get("router_id")
        assert result is not None, "Required property 'router_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auth_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property authKey: The authentication key of the BGP group.'''
        result = self._values.get("auth_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the BGP group.

        The description must be 2 to 256 characters in length.
        It must start with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_fake_asn(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property isFakeAsn: A router that runs BGP typically belongs to only one AS.

        In some cases, for example,
        the AS needs to be migrated or is merged with another AS, a new AS number replaces
        the original one.
        '''
        result = self._values.get("is_fake_asn")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def local_asn(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property localAsn: The AS number on the Alibaba Cloud side.'''
        result = self._values.get("local_asn")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the BGP group.

        The name must be 2 to 128 characters in length and can
        contain digits, periods (.), underscores (_), and hyphens (-). The name must start
        with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BgpGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BgpNetwork(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.BgpNetwork",
):
    '''A ROS resource type:  ``ALIYUN::VPC::BgpNetwork``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BgpNetworkProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::BgpNetwork``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDstCidrBlock")
    def attr_dst_cidr_block(self) -> ros_cdk_core.IResolvable:
        '''Attribute DstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect to a data center.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDstCidrBlock"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouterId")
    def attr_router_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouterId: The ID of the vRouter associated with the router interface.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouterId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.BgpNetworkProps",
    jsii_struct_bases=[],
    name_mapping={"dst_cidr_block": "dstCidrBlock", "router_id": "routerId"},
)
class BgpNetworkProps:
    def __init__(
        self,
        *,
        dst_cidr_block: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        router_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::BgpNetwork``.

        :param dst_cidr_block: Property dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect to a data center.
        :param router_id: Property routerId: The ID of the vRouter associated with the router interface.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "dst_cidr_block": dst_cidr_block,
            "router_id": router_id,
        }

    @builtins.property
    def dst_cidr_block(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect to a data center.'''
        result = self._values.get("dst_cidr_block")
        assert result is not None, "Required property 'dst_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property routerId: The ID of the vRouter associated with the router interface.'''
        result = self._values.get("router_id")
        assert result is not None, "Required property 'router_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BgpNetworkProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BgpPeer(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.BgpPeer",
):
    '''A ROS resource type:  ``ALIYUN::VPC::BgpPeer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BgpPeerProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::BgpPeer``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBgpPeerId")
    def attr_bgp_peer_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute BgpPeerId: The ID of the BGP peer.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBgpPeerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.BgpPeerProps",
    jsii_struct_bases=[],
    name_mapping={
        "bgp_group_id": "bgpGroupId",
        "enable_bfd": "enableBfd",
        "peer_ip_address": "peerIpAddress",
    },
)
class BgpPeerProps:
    def __init__(
        self,
        *,
        bgp_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        enable_bfd: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        peer_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::BgpPeer``.

        :param bgp_group_id: Property bgpGroupId: The ID of the BGP group.
        :param enable_bfd: Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature. Valid values: true: enables BFD. false: disables BFD.
        :param peer_ip_address: Property peerIpAddress: The IP address of the BGP peer.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bgp_group_id": bgp_group_id,
        }
        if enable_bfd is not None:
            self._values["enable_bfd"] = enable_bfd
        if peer_ip_address is not None:
            self._values["peer_ip_address"] = peer_ip_address

    @builtins.property
    def bgp_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bgpGroupId: The ID of the BGP group.'''
        result = self._values.get("bgp_group_id")
        assert result is not None, "Required property 'bgp_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def enable_bfd(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.

        Valid values:
        true: enables BFD.
        false: disables BFD.
        '''
        result = self._values.get("enable_bfd")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def peer_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property peerIpAddress: The IP address of the BGP peer.'''
        result = self._values.get("peer_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BgpPeerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CommonBandwidthPackage(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.CommonBandwidthPackage",
):
    '''A ROS resource type:  ``ALIYUN::VPC::CommonBandwidthPackage``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CommonBandwidthPackageProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::CommonBandwidthPackage``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidthPackageId"))


class CommonBandwidthPackageIp(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.CommonBandwidthPackageIp",
):
    '''A ROS resource type:  ``ALIYUN::VPC::CommonBandwidthPackageIp``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CommonBandwidthPackageIpProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::CommonBandwidthPackageIp``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllocationIds")
    def attr_allocation_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute AllocationIds: All eip allocation ids of common bandwidth package.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllocationIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpAddresses")
    def attr_ip_addresses(self) -> ros_cdk_core.IResolvable:
        '''Attribute IpAddresses: All eip addresses of common bandwidth package.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpAddresses"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.CommonBandwidthPackageIpProps",
    jsii_struct_bases=[],
    name_mapping={"bandwidth_package_id": "bandwidthPackageId", "eips": "eips"},
)
class CommonBandwidthPackageIpProps:
    def __init__(
        self,
        *,
        bandwidth_package_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        eips: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosCommonBandwidthPackageIp.EipsProperty"]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::CommonBandwidthPackageIp``.

        :param bandwidth_package_id: Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        :param eips: Property eips: List of eip associated with the Internet Shared Bandwidth instance.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth_package_id": bandwidth_package_id,
            "eips": eips,
        }

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.'''
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def eips(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCommonBandwidthPackageIp.EipsProperty"]]]:
        '''Property eips: List of eip associated with the Internet Shared Bandwidth instance.'''
        result = self._values.get("eips")
        assert result is not None, "Required property 'eips' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCommonBandwidthPackageIp.EipsProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CommonBandwidthPackageIpProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.CommonBandwidthPackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "description": "description",
        "internet_charge_type": "internetChargeType",
        "isp": "isp",
        "name": "name",
        "ratio": "ratio",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "zone": "zone",
    },
)
class CommonBandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        isp: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ratio: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosCommonBandwidthPackage.TagsProperty"]] = None,
        zone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::CommonBandwidthPackage``.

        :param bandwidth: Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
        :param description: Property description: The description of the Internet Shared Bandwidth instance. The description must be 2 to 256 characters in length. It must start with a letter, and cannot start with http:// or https://.
        :param internet_charge_type: Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values: PayByBandwidth (default): Billed by bandwidth. PayBy95: Charged at Enhanced 95.
        :param isp: Property isp: Line type of EIP, value: BGP (multi-line).
        :param name: Property name: The name of the Internet Shared Bandwidth instance. The name must be 2 to 128 characters in length and can contain letters, numbers, periods (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot start with http:// or https://.
        :param ratio: Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100. Note This parameter is only supported on the China site.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param zone: Property zone: Zone Id.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
        }
        if description is not None:
            self._values["description"] = description
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if isp is not None:
            self._values["isp"] = isp
        if name is not None:
            self._values["name"] = name
        if ratio is not None:
            self._values["ratio"] = ratio
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if zone is not None:
            self._values["zone"] = zone

    @builtins.property
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance.

        Unit: Mbit/s.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the Internet Shared Bandwidth instance.

        The description must be 2 to 256 characters in length. It must start with a letter,
        and cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetChargeType: The billing model of the Internet Shared Bandwidth instance.

        Allowed values:
        PayByBandwidth (default): Billed by bandwidth.
        PayBy95: Charged at Enhanced 95.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property isp: Line type of EIP, value: BGP (multi-line).'''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the Internet Shared Bandwidth instance.

        The name must be 2 to 128 characters in length and can contain letters, numbers, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
        start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance.

        Default to 100.
        Note This parameter is only supported on the China site.
        '''
        result = self._values.get("ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosCommonBandwidthPackage.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosCommonBandwidthPackage.TagsProperty"]], result)

    @builtins.property
    def zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zone: Zone Id.'''
        result = self._values.get("zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CommonBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CustomerGateway(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.CustomerGateway",
):
    '''A ROS resource type:  ``ALIYUN::VPC::CustomerGateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CustomerGatewayProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::CustomerGateway``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCustomerGatewayId")
    def attr_customer_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CustomerGatewayId: The ID of the user gateway.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCustomerGatewayId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.CustomerGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "ip_address": "ipAddress",
        "description": "description",
        "name": "name",
    },
)
class CustomerGatewayProps:
    def __init__(
        self,
        *,
        ip_address: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::CustomerGateway``.

        :param ip_address: Property ipAddress: The IP address of the user gateway.
        :param description: Property description: Description of the user gateway. The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        :param name: Property name: The name of the user gateway. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ip_address": ip_address,
        }
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def ip_address(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ipAddress: The IP address of the user gateway.'''
        result = self._values.get("ip_address")
        assert result is not None, "Required property 'ip_address' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the user gateway.

        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the user gateway.

        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomerGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DhcpOptionsSet(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.DhcpOptionsSet",
):
    '''A ROS resource type:  ``ALIYUN::VPC::DhcpOptionsSet``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["DhcpOptionsSetProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::DhcpOptionsSet``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDhcpOptionsSetId")
    def attr_dhcp_options_set_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DhcpOptionsSetId: The ID of the DHCP options set that is created.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDhcpOptionsSetId"))


class DhcpOptionsSetAttachment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.DhcpOptionsSetAttachment",
):
    '''A ROS resource type:  ``ALIYUN::VPC::DhcpOptionsSetAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DhcpOptionsSetAttachmentProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::DhcpOptionsSetAttachment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDhcpOptionsSetId")
    def attr_dhcp_options_set_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DhcpOptionsSetId: The ID of the DHCP options set.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDhcpOptionsSetId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: The ID of the VPC network.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.DhcpOptionsSetAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"dhcp_options_set_id": "dhcpOptionsSetId", "vpc_id": "vpcId"},
)
class DhcpOptionsSetAttachmentProps:
    def __init__(
        self,
        *,
        dhcp_options_set_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::DhcpOptionsSetAttachment``.

        :param dhcp_options_set_id: Property dhcpOptionsSetId: The ID of the DHCP options set.
        :param vpc_id: Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "dhcp_options_set_id": dhcp_options_set_id,
            "vpc_id": vpc_id,
        }

    @builtins.property
    def dhcp_options_set_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property dhcpOptionsSetId: The ID of the DHCP options set.'''
        result = self._values.get("dhcp_options_set_id")
        assert result is not None, "Required property 'dhcp_options_set_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DhcpOptionsSetAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.DhcpOptionsSetProps",
    jsii_struct_bases=[],
    name_mapping={
        "dhcp_options_set_description": "dhcpOptionsSetDescription",
        "dhcp_options_set_name": "dhcpOptionsSetName",
        "domain_name": "domainName",
        "domain_name_servers": "domainNameServers",
    },
)
class DhcpOptionsSetProps:
    def __init__(
        self,
        *,
        dhcp_options_set_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dhcp_options_set_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        domain_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        domain_name_servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::DhcpOptionsSet``.

        :param dhcp_options_set_description: Property dhcpOptionsSetDescription: The description of the DHCP options set. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        :param dhcp_options_set_name: Property dhcpOptionsSetName: The name of the DHCP options set. The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
        :param domain_name: Property domainName: The root domain, for example, example.com. After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
        :param domain_name_servers: Property domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if dhcp_options_set_description is not None:
            self._values["dhcp_options_set_description"] = dhcp_options_set_description
        if dhcp_options_set_name is not None:
            self._values["dhcp_options_set_name"] = dhcp_options_set_name
        if domain_name is not None:
            self._values["domain_name"] = domain_name
        if domain_name_servers is not None:
            self._values["domain_name_servers"] = domain_name_servers

    @builtins.property
    def dhcp_options_set_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dhcpOptionsSetDescription: The description of the DHCP options set.

        The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        '''
        result = self._values.get("dhcp_options_set_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dhcp_options_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property dhcpOptionsSetName: The name of the DHCP options set.

        The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
        '''
        result = self._values.get("dhcp_options_set_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property domainName: The root domain, for example, example.com. After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.'''
        result = self._values.get("domain_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def domain_name_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property domainNameServers: The DNS server IP addresses.

        Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
        '''
        result = self._values.get("domain_name_servers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DhcpOptionsSetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EIPAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.EIPAssociation",
):
    '''A ROS resource type:  ``ALIYUN::VPC::EIPAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "EIPAssociationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::EIPAssociation``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.

        Returned only for VPC elastic IP addresses.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllocationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEipAddress")
    def attr_eip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute EipAddress: IP address of created EIP.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEipAddress"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.EIPAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "allocation_id": "allocationId",
        "instance_id": "instanceId",
        "mode": "mode",
        "private_ip_address": "privateIpAddress",
    },
)
class EIPAssociationProps:
    def __init__(
        self,
        *,
        allocation_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::EIPAssociation``.

        :param allocation_id: Property allocationId: EIP instance id to bind.
        :param instance_id: Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
        :param mode: Property mode: The mode of association. Valid values: NAT(Default): NAT mode. BINDED: Cut-through mode. MULTI_BINDED: Multi-EIP to ENI mode. This is required only when the value of InstanceType is NetworkInterface.
        :param private_ip_address: Property privateIpAddress: An IP address in the CIDR block of the VSwitch. If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "allocation_id": allocation_id,
            "instance_id": instance_id,
        }
        if mode is not None:
            self._values["mode"] = mode
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address

    @builtins.property
    def allocation_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property allocationId: EIP instance id to bind.'''
        result = self._values.get("allocation_id")
        assert result is not None, "Required property 'allocation_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property mode: The mode of association.

        Valid values:
        NAT(Default): NAT mode.
        BINDED: Cut-through mode.
        MULTI_BINDED: Multi-EIP to ENI mode.
        This is required only when the value of InstanceType is NetworkInterface.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property privateIpAddress: An IP address in the CIDR block of the VSwitch.

        If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EIPAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EIPPro(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.EIPPro",
):
    '''A ROS resource type:  ``ALIYUN::VPC::EIPPro``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["EIPProProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::EIPPro``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.

        Returned only for VPC elastic IP addresses.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllocationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEipAddress")
    def attr_eip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute EipAddress: IP address of created EIP.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEipAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIsp")
    def attr_isp(self) -> ros_cdk_core.IResolvable:
        '''Attribute ISP: The line type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIsp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: Order ID of prepaid EIP instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.EIPProProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "bandwidth": "bandwidth",
        "deletion_protection": "deletionProtection",
        "description": "description",
        "instance_charge_type": "instanceChargeType",
        "instance_id": "instanceId",
        "internet_charge_type": "internetChargeType",
        "ip_address": "ipAddress",
        "isp": "isp",
        "name": "name",
        "netmode": "netmode",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class EIPProProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        isp: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        netmode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosEIPPro.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::EIPPro``.

        :param auto_pay: Property autoPay: Automatic Payment. Default is false.
        :param bandwidth: Property bandwidth: Bandwidth for the output network. Default is 5MB.
        :param deletion_protection: Property deletionProtection: Whether to enable deletion protection. Default to False.
        :param description: Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http:// or https://.
        :param instance_charge_type: Property instanceChargeType: The resource charge type. Default value is Postpaid
        :param instance_id: Property instanceId: The ID of the requested EIP.
        :param internet_charge_type: Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        :param ip_address: Property ipAddress: The IP address of the requested EIP.
        :param isp: Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values: BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China. BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
        :param name: Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http:// or https://
        :param netmode: Property netmode: The network type. Valid value: public (public network).
        :param period: Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
        :param pricing_cycle: Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if description is not None:
            self._values["description"] = description
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if ip_address is not None:
            self._values["ip_address"] = ip_address
        if isp is not None:
            self._values["isp"] = isp
        if name is not None:
            self._values["name"] = name
        if netmode is not None:
            self._values["netmode"] = netmode
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Automatic Payment.

        Default is false.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property bandwidth: Bandwidth for the output network.

        Default is 5MB.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionProtection: Whether to enable deletion protection.

        Default to False.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Optional.

        The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceChargeType: The resource charge type.

        Default value is Postpaid
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceId: The ID of the requested EIP.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetChargeType: The network charge type.

        Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property ipAddress: The IP address of the requested EIP.'''
        result = self._values.get("ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property isp: The line type.

        You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
        BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
        BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
        '''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the EIP.

        The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def netmode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property netmode: The network type.

        Valid value: public (public network).
        '''
        result = self._values.get("netmode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: Prepaid time period.

        While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
        While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: Price cycle of the resource.

        This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosEIPPro.TagsProperty"]]:
        '''Property tags: Tags to attach to eip.

        Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosEIPPro.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EIPProProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.EIPProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "bandwidth": "bandwidth",
        "deletion_protection": "deletionProtection",
        "description": "description",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "isp": "isp",
        "name": "name",
        "netmode": "netmode",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class EIPProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        isp: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        netmode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosEIP.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::EIP``.

        :param auto_pay: Property autoPay: Automatic Payment. Default is false.
        :param bandwidth: Property bandwidth: Bandwidth for the output network. Default is 5MB.
        :param deletion_protection: Property deletionProtection: Whether to enable deletion protection. Default to False.
        :param description: Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http:// or https://.
        :param instance_charge_type: Property instanceChargeType: The resource charge type. Default value is Postpaid
        :param internet_charge_type: Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        :param isp: Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values: BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China. BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
        :param name: Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http:// or https://
        :param netmode: Property netmode: The network type. Valid value: public (public network).
        :param period: Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
        :param pricing_cycle: Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if description is not None:
            self._values["description"] = description
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if isp is not None:
            self._values["isp"] = isp
        if name is not None:
            self._values["name"] = name
        if netmode is not None:
            self._values["netmode"] = netmode
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Automatic Payment.

        Default is false.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property bandwidth: Bandwidth for the output network.

        Default is 5MB.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionProtection: Whether to enable deletion protection.

        Default to False.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Optional.

        The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceChargeType: The resource charge type.

        Default value is Postpaid
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetChargeType: The network charge type.

        Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property isp: The line type.

        You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
        BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
        BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
        '''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the EIP.

        The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def netmode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property netmode: The network type.

        Valid value: public (public network).
        '''
        result = self._values.get("netmode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: Prepaid time period.

        While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
        While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: Price cycle of the resource.

        This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosEIP.TagsProperty"]]:
        '''Property tags: Tags to attach to eip.

        Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosEIP.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EIPProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class EIPSegment(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.EIPSegment",
):
    '''A ROS resource type:  ``ALIYUN::VPC::EIPSegment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "EIPSegmentProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::EIPSegment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEipAddresses")
    def attr_eip_addresses(self) -> ros_cdk_core.IResolvable:
        '''Attribute EipAddresses: List of EIP addresses.

        like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEipAddresses"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEipSegmentInstanceId")
    def attr_eip_segment_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEipSegmentInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.EIPSegmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "eip_mask": "eipMask",
        "bandwidth": "bandwidth",
        "internet_charge_type": "internetChargeType",
        "netmode": "netmode",
        "resource_group_id": "resourceGroupId",
    },
)
class EIPSegmentProps:
    def __init__(
        self,
        *,
        eip_mask: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        netmode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::EIPSegment``.

        :param eip_mask: Property eipMask: The mask of the contiguous EIP group. Valid values: 28: 16 contiguous EIPs are allocated for one call. 27: 32 contiguous EIPs are allocated for one call. 26: 64 contiguous EIPs are allocated for one call. 25: 128 contiguous EIPs are allocated for one call. 24: 256 contiguous EIPs are allocated for one call. Note The actual number of assigned EIPs may be less than the expected number because one, three, or four EIPs may be reserved.
        :param bandwidth: Property bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.
        :param internet_charge_type: Property internetChargeType: The metering method of the contiguous EIPs. Valid values: PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value. PayByTraffic: Fees are charged based on data transfer. Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
        :param netmode: Property netmode: The network type. Valid values: public: the Internet. This is the default value. After contiguous EIPs are associated with cloud resources, the cloud resources can access the Internet by using the EIPs. hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the cloud resources can access the hybrid cloud by using the EIPs. Note This network type is available only to users who are added to the whitelist. To use this network type, contact your customer manager.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the EIPs belong.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "eip_mask": eip_mask,
        }
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if netmode is not None:
            self._values["netmode"] = netmode
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def eip_mask(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property eipMask: The mask of the contiguous EIP group.

        Valid values:
        28: 16 contiguous EIPs are allocated for one call.
        27: 32 contiguous EIPs are allocated for one call.
        26: 64 contiguous EIPs are allocated for one call.
        25: 128 contiguous EIPs are allocated for one call.
        24: 256 contiguous EIPs are allocated for one call.
        Note The actual number of assigned EIPs may be less than the expected number because one,
        three, or four EIPs may be reserved.
        '''
        result = self._values.get("eip_mask")
        assert result is not None, "Required property 'eip_mask' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property bandwidth: The maximum bandwidth of the contiguous EIPs.

        Unit: Mbit/s. Default value: 5.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetChargeType: The metering method of the contiguous EIPs.

        Valid values:
        PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
        PayByTraffic: Fees are charged based on data transfer.
        Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def netmode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property netmode: The network type.

        Valid values:
        public: the Internet. This is the default value. After contiguous EIPs are associated with
        cloud resources, the cloud resources can access the Internet by using the EIPs.
        hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
        cloud resources can access the hybrid cloud by using the EIPs.
        Note This network type is available only to users who are added to the whitelist. To use
        this network type, contact your customer manager.
        '''
        result = self._values.get("netmode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the EIPs belong.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EIPSegmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Eip(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.Eip",
):
    '''A ROS resource type:  ``ALIYUN::VPC::EIP``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional[EIPProps] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::EIP``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.

        Returned only for VPC elastic IP addresses.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllocationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEipAddress")
    def attr_eip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute EipAddress: IP address of created EIP.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEipAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIsp")
    def attr_isp(self) -> ros_cdk_core.IResolvable:
        '''Attribute Isp: The line type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIsp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: Order ID of prepaid EIP instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))


class FlowLog(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.FlowLog",
):
    '''A ROS resource type:  ``ALIYUN::VPC::FlowLog``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "FlowLogProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::FlowLog``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''Attribute Description: The Description of flow log.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFlowLogId")
    def attr_flow_log_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute FlowLogId: The flow log ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFlowLogId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFlowLogName")
    def attr_flow_log_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute FlowLogName: The flow log name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFlowLogName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogStoreName")
    def attr_log_store_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute LogStoreName: The log store name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogStoreName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ProjectName: The project name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceId: The resource id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceType: The resource type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTrafficType")
    def attr_traffic_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute TrafficType: The traffic type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTrafficType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.FlowLogProps",
    jsii_struct_bases=[],
    name_mapping={
        "log_store_name": "logStoreName",
        "project_name": "projectName",
        "resource_id": "resourceId",
        "resource_type": "resourceType",
        "traffic_type": "trafficType",
        "description": "description",
        "flow_log_name": "flowLogName",
    },
)
class FlowLogProps:
    def __init__(
        self,
        *,
        log_store_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        traffic_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        flow_log_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::FlowLog``.

        :param log_store_name: Property logStoreName: The log store name.
        :param project_name: Property projectName: The project name.
        :param resource_id: Property resourceId: The resource id.
        :param resource_type: Property resourceType: The resource type.
        :param traffic_type: Property trafficType: The traffic type.
        :param description: Property description: The Description of flow log.
        :param flow_log_name: Property flowLogName: The flow log name.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "log_store_name": log_store_name,
            "project_name": project_name,
            "resource_id": resource_id,
            "resource_type": resource_type,
            "traffic_type": traffic_type,
        }
        if description is not None:
            self._values["description"] = description
        if flow_log_name is not None:
            self._values["flow_log_name"] = flow_log_name

    @builtins.property
    def log_store_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property logStoreName: The log store name.'''
        result = self._values.get("log_store_name")
        assert result is not None, "Required property 'log_store_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property projectName: The project name.'''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property resourceId: The resource id.'''
        result = self._values.get("resource_id")
        assert result is not None, "Required property 'resource_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property resourceType: The resource type.'''
        result = self._values.get("resource_type")
        assert result is not None, "Required property 'resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def traffic_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property trafficType: The traffic type.'''
        result = self._values.get("traffic_type")
        assert result is not None, "Required property 'traffic_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The Description of flow log.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def flow_log_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property flowLogName: The flow log name.'''
        result = self._values.get("flow_log_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FlowLogProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class GrantInstanceToCen(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.GrantInstanceToCen",
):
    '''A ROS resource type:  ``ALIYUN::VPC::GrantInstanceToCen``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "GrantInstanceToCenProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::GrantInstanceToCen``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CenId: The ID of the CEN instance to be authorized.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the network instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.GrantInstanceToCenProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "cen_owner_id": "cenOwnerId",
        "instance_id": "instanceId",
        "instance_type": "instanceType",
    },
)
class GrantInstanceToCenProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_owner_id: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::GrantInstanceToCen``.

        :param cen_id: Property cenId: The ID of the CEN instance to be authorized.
        :param cen_owner_id: Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
        :param instance_id: Property instanceId: The ID of the network instance.
        :param instance_type: Property instanceType: The type of the network instance. Valid values: VPC: Virtual Private Cloud (VPC). VBR: Virtual Border Router (VBR). CCN: Cloud Connect Network (CCN).
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "cen_owner_id": cen_owner_id,
            "instance_id": instance_id,
            "instance_type": instance_type,
        }

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cenId: The ID of the CEN instance to be authorized.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_owner_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property cenOwnerId: The UID of the account to which the target CEN instance belongs.'''
        result = self._values.get("cen_owner_id")
        assert result is not None, "Required property 'cen_owner_id' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The ID of the network instance.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceType: The type of the network instance.

        Valid values:
        VPC: Virtual Private Cloud (VPC).
        VBR: Virtual Border Router (VBR).
        CCN: Cloud Connect Network (CCN).
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "GrantInstanceToCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class IpsecServer(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.IpsecServer",
):
    '''A ROS resource type:  ``ALIYUN::VPC::IpsecServer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "IpsecServerProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::IpsecServer``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpsecServerId")
    def attr_ipsec_server_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute IpsecServerId: IPsec server ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpsecServerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpsecServerName")
    def attr_ipsec_server_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute IpsecServerName: IPsec server name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpsecServerName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.IpsecServerProps",
    jsii_struct_bases=[],
    name_mapping={
        "client_ip_pool": "clientIpPool",
        "local_subnet": "localSubnet",
        "vpn_gateway_id": "vpnGatewayId",
        "effect_immediately": "effectImmediately",
        "ike_config": "ikeConfig",
        "ipsec_config": "ipsecConfig",
        "ipsec_server_name": "ipsecServerName",
        "psk": "psk",
        "psk_enabled": "pskEnabled",
    },
)
class IpsecServerProps:
    def __init__(
        self,
        *,
        client_ip_pool: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        local_subnet: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpn_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        effect_immediately: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ike_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IkeConfigProperty"]] = None,
        ipsec_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IpsecConfigProperty"]] = None,
        ipsec_server_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        psk: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        psk_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::IpsecServer``.

        :param client_ip_pool: Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
        :param local_subnet: Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
        :param vpn_gateway_id: Property vpnGatewayId: VPN gateway instance ID.
        :param effect_immediately: Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately. false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
        :param ike_config: Property ikeConfig: Negotiation parameter configuration in the first phase.
        :param ipsec_config: Property ipsecConfig: Negotiation parameter configuration in the second phase.
        :param ipsec_server_name: Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
        :param psk: Property psk: Pre-Shared key. Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
        :param psk_enabled: Property pskEnabled: Whether to enable the pre-shared key authentication method. Only the value is true, which means that the pre-shared key authentication mode is enabled.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "client_ip_pool": client_ip_pool,
            "local_subnet": local_subnet,
            "vpn_gateway_id": vpn_gateway_id,
        }
        if effect_immediately is not None:
            self._values["effect_immediately"] = effect_immediately
        if ike_config is not None:
            self._values["ike_config"] = ike_config
        if ipsec_config is not None:
            self._values["ipsec_config"] = ipsec_config
        if ipsec_server_name is not None:
            self._values["ipsec_server_name"] = ipsec_server_name
        if psk is not None:
            self._values["psk"] = psk
        if psk_enabled is not None:
            self._values["psk_enabled"] = psk_enabled

    @builtins.property
    def client_ip_pool(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client.

        Note: The client network segment cannot conflict with the VPC side network segment.
        '''
        result = self._values.get("client_ip_pool")
        assert result is not None, "Required property 'client_ip_pool' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def local_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment.

        Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
        '''
        result = self._values.get("local_subnet")
        assert result is not None, "Required property 'local_subnet' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpnGatewayId: VPN gateway instance ID.'''
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def effect_immediately(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.

        false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
        '''
        result = self._values.get("effect_immediately")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ike_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IkeConfigProperty"]]:
        '''Property ikeConfig: Negotiation parameter configuration in the first phase.'''
        result = self._values.get("ike_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IkeConfigProperty"]], result)

    @builtins.property
    def ipsec_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IpsecConfigProperty"]]:
        '''Property ipsecConfig: Negotiation parameter configuration in the second phase.'''
        result = self._values.get("ipsec_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IpsecConfigProperty"]], result)

    @builtins.property
    def ipsec_server_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character.

        It can contain digits, underscores (_), and hyphens (-).
        '''
        result = self._values.get("ipsec_server_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def psk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property psk: Pre-Shared key.

        Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
        '''
        result = self._values.get("psk")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def psk_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property pskEnabled: Whether to enable the pre-shared key authentication method.

        Only the value is true, which means that the pre-shared key authentication mode is enabled.
        '''
        result = self._values.get("psk_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "IpsecServerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Ipv6Gateway(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.Ipv6Gateway",
):
    '''A ROS resource type:  ``ALIYUN::VPC::Ipv6Gateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "Ipv6GatewayProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::Ipv6Gateway``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpv6GatewayId")
    def attr_ipv6_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute Ipv6GatewayId: ID IPv6 gateway.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpv6GatewayId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.Ipv6GatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "description": "description",
        "name": "name",
        "spec": "spec",
        "tags": "tags",
    },
)
class Ipv6GatewayProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosIpv6Gateway.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::Ipv6Gateway``.

        :param vpc_id: Property vpcId: To open VPC ID IPv6 gateway.
        :param description: Property description: Description of IPv6 gateway. Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
        :param name: Property name: Name of the IPv6 gateway. Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
        :param spec: Property spec: Specifications IPv6 gateway, the value: Small (default): Free. Medium: Enterprise Edition. Large: Enterprise Enhanced Edition. Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if spec is not None:
            self._values["spec"] = spec
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: To open VPC ID IPv6 gateway.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of IPv6 gateway.

        Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: Name of the IPv6 gateway.

        Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property spec: Specifications IPv6 gateway, the value: Small (default): Free.

        Medium: Enterprise Edition.
        Large: Enterprise Enhanced Edition.
        Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
        '''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosIpv6Gateway.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosIpv6Gateway.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Ipv6GatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Ipv6InternetBandwidth(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.Ipv6InternetBandwidth",
):
    '''A ROS resource type:  ``ALIYUN::VPC::Ipv6InternetBandwidth``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "Ipv6InternetBandwidthProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::Ipv6InternetBandwidth``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetBandwidthId")
    def attr_internet_bandwidth_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InternetBandwidthId: Purchase of public network bandwidth.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetBandwidthId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.Ipv6InternetBandwidthProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "ipv6_address_id": "ipv6AddressId",
        "ipv6_gateway_id": "ipv6GatewayId",
        "internet_charge_type": "internetChargeType",
        "tags": "tags",
    },
)
class Ipv6InternetBandwidthProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ipv6_address_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ipv6_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosIpv6InternetBandwidth.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::Ipv6InternetBandwidth``.

        :param bandwidth: Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000. When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000. When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications. Small (default free version), the public network bandwidth range 1-500. Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000. Large (Enterprise Edition), the public network bandwidth range 1-2000.
        :param ipv6_address_id: Property ipv6AddressId: ID of IPv6 address.
        :param ipv6_gateway_id: Property ipv6GatewayId: ID of IPv6 gateway.
        :param internet_charge_type: Property internetChargeType: IPv6 public network bandwidth billing, value: PayByTraffic: by using the traffic accounting. PayByBandwidth (default): Bandwidth billing.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
            "ipv6_address_id": ipv6_address_id,
            "ipv6_gateway_id": ipv6_gateway_id,
        }
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.

        When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
        When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
        Small (default free version), the public network bandwidth range 1-500.
        Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
        Large (Enterprise Edition), the public network bandwidth range 1-2000.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ipv6_address_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ipv6AddressId: ID of IPv6 address.'''
        result = self._values.get("ipv6_address_id")
        assert result is not None, "Required property 'ipv6_address_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ipv6_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property ipv6GatewayId: ID of IPv6 gateway.'''
        result = self._values.get("ipv6_gateway_id")
        assert result is not None, "Required property 'ipv6_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetChargeType: IPv6 public network bandwidth billing, value: PayByTraffic: by using the traffic accounting.

        PayByBandwidth (default): Bandwidth billing.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosIpv6InternetBandwidth.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosIpv6InternetBandwidth.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Ipv6InternetBandwidthProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NatGateway(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.NatGateway",
):
    '''A ROS resource type:  ``ALIYUN::VPC::NatGateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "NatGatewayProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::NatGateway``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrForwardTableId")
    def attr_forward_table_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ForwardTableId: The forward table id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrForwardTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNatGatewayId")
    def attr_nat_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute NatGatewayId: The Id of created NAT gateway.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNatGatewayId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSNatTableId")
    def attr_s_nat_table_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SNatTableId: The SNAT table id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSNatTableId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.NatGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "auto_pay": "autoPay",
        "deletion_force": "deletionForce",
        "deletion_protection": "deletionProtection",
        "description": "description",
        "duration": "duration",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "nat_gateway_name": "natGatewayName",
        "nat_type": "natType",
        "network_type": "networkType",
        "pricing_cycle": "pricingCycle",
        "tags": "tags",
    },
)
class NatGatewayProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        nat_gateway_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        nat_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosNatGateway.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::NatGateway``.

        :param vpc_id: Property vpcId: The VPC id to create NAT gateway.
        :param v_switch_id: Property vSwitchId: The VSwitch id to create NAT gateway.
        :param auto_pay: Property autoPay: Specifies whether to enable automatic payment. Default is false.
        :param deletion_force: Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
        :param deletion_protection: Property deletionProtection: Whether to enable deletion protection. Default to False.
        :param description: Property description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
        :param duration: Property duration: The subscription duration. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
        :param instance_charge_type: Property instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
        :param internet_charge_type: Property internetChargeType: The billing method for the NAT gateway. Valid values: PayBySpec: billed on a pay-by-specification basis.
        :param nat_gateway_name: Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
        :param nat_type: Property natType: The type of the NAT gateway. Valid values: - Enhanced: enhanced NAT gateway.
        :param network_type: Property networkType: The type of the created NAT gateway. Internet: public network NAT gateway. Intranet: VPC NAT gateway.
        :param pricing_cycle: Property pricingCycle: Price cycle of the resource. This property has no default value.
        :param tags: Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if description is not None:
            self._values["description"] = description
        if duration is not None:
            self._values["duration"] = duration
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if nat_gateway_name is not None:
            self._values["nat_gateway_name"] = nat_gateway_name
        if nat_type is not None:
            self._values["nat_type"] = nat_type
        if network_type is not None:
            self._values["network_type"] = network_type
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The VPC id to create NAT gateway.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: The VSwitch id to create NAT gateway.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Specifies whether to enable automatic payment.

        Default is false.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.

        Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionProtection: Whether to enable deletion protection.

        Default to False.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the NAT gateway, [2, 256] characters.

        Do not fill or empty, the default is empty.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property duration: The subscription duration.

        While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceChargeType: The billing method.

        The default value is PostPaid (which means pay-as-you-go).
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetChargeType: The billing method for the NAT gateway.

        Valid values:
        PayBySpec: billed on a pay-by-specification basis.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def nat_gateway_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.'''
        result = self._values.get("nat_gateway_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def nat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property natType: The type of the NAT gateway.

        Valid values:

        - Enhanced: enhanced NAT gateway.
        '''
        result = self._values.get("nat_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property networkType: The type of the created NAT gateway.

        Internet: public network NAT gateway.
        Intranet: VPC NAT gateway.
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: Price cycle of the resource.

        This property has no default value.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosNatGateway.TagsProperty"]]:
        '''Property tags: Tags to attach to natgateway.

        Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosNatGateway.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NatGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class NetworkAcl(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.NetworkAcl",
):
    '''A ROS resource type:  ``ALIYUN::VPC::NetworkAcl``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "NetworkAclProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::NetworkAcl``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkAclEntryName")
    def attr_network_acl_entry_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute NetworkAclEntryName: The name of the inbound rule.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkAclEntryName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkAclId")
    def attr_network_acl_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute NetworkAclId: The ID of the network ACL.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkAclId"))


class NetworkAclAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.NetworkAclAssociation",
):
    '''A ROS resource type:  ``ALIYUN::VPC::NetworkAclAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "NetworkAclAssociationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::NetworkAclAssociation``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkAclId")
    def attr_network_acl_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute NetworkAclId: The ID of the network ACL.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkAclId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.NetworkAclAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"network_acl_id": "networkAclId", "resources": "resources"},
)
class NetworkAclAssociationProps:
    def __init__(
        self,
        *,
        network_acl_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resources: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAclAssociation.ResourcesProperty"]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::NetworkAclAssociation``.

        :param network_acl_id: Property networkAclId: The ID of the network ACL.
        :param resources: Property resources: The list of resources that need to be associated with network ACL.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "network_acl_id": network_acl_id,
            "resources": resources,
        }

    @builtins.property
    def network_acl_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property networkAclId: The ID of the network ACL.'''
        result = self._values.get("network_acl_id")
        assert result is not None, "Required property 'network_acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAclAssociation.ResourcesProperty"]]]:
        '''Property resources: The list of resources that need to be associated with network ACL.'''
        result = self._values.get("resources")
        assert result is not None, "Required property 'resources' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAclAssociation.ResourcesProperty"]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NetworkAclAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.NetworkAclProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "description": "description",
        "egress_acl_entries": "egressAclEntries",
        "ingress_acl_entries": "ingressAclEntries",
        "network_acl_name": "networkAclName",
    },
)
class NetworkAclProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        egress_acl_entries: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.EgressAclEntriesProperty"]]]] = None,
        ingress_acl_entries: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.IngressAclEntriesProperty"]]]] = None,
        network_acl_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::NetworkAcl``.

        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
        :param description: Property description: The description of the network ACL. The description must be 2 to 256 characters in length. The description must start with a letter but cannot start with http:// or https://.
        :param egress_acl_entries: Property egressAclEntries: The list of egress network ACL entries.
        :param ingress_acl_entries: Property ingressAclEntries: The list of ingress network ACL entries.
        :param network_acl_name: Property networkAclName: The name of the network ACL. The name must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter and cannot start with http:// or https://.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if egress_acl_entries is not None:
            self._values["egress_acl_entries"] = egress_acl_entries
        if ingress_acl_entries is not None:
            self._values["ingress_acl_entries"] = ingress_acl_entries
        if network_acl_name is not None:
            self._values["network_acl_name"] = network_acl_name

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the network ACL.

        The description must be 2 to 256 characters in length. The description must start
        with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def egress_acl_entries(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.EgressAclEntriesProperty"]]]]:
        '''Property egressAclEntries: The list of egress network ACL entries.'''
        result = self._values.get("egress_acl_entries")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.EgressAclEntriesProperty"]]]], result)

    @builtins.property
    def ingress_acl_entries(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.IngressAclEntriesProperty"]]]]:
        '''Property ingressAclEntries: The list of ingress network ACL entries.'''
        result = self._values.get("ingress_acl_entries")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.IngressAclEntriesProperty"]]]], result)

    @builtins.property
    def network_acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property networkAclName: The name of the network ACL.

        The name must be 2 to 128 characters in length and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
        start with http:// or https://.
        '''
        result = self._values.get("network_acl_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NetworkAclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PeeringRouterInterfaceBinding(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBinding",
):
    '''A ROS resource type:  ``ALIYUN::VPC::PeeringRouterInterfaceBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PeeringRouterInterfaceBindingProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::PeeringRouterInterfaceBinding``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouterInterfaceId: The RouterInterface ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouterInterfaceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "opposite_interface_id": "oppositeInterfaceId",
        "router_interface_id": "routerInterfaceId",
        "opposite_interface_owner_id": "oppositeInterfaceOwnerId",
        "opposite_router_id": "oppositeRouterId",
    },
)
class PeeringRouterInterfaceBindingProps:
    def __init__(
        self,
        *,
        opposite_interface_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        router_interface_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        opposite_interface_owner_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_router_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::PeeringRouterInterfaceBinding``.

        :param opposite_interface_id: Property oppositeInterfaceId: The connection peer RouterInterface ID.
        :param router_interface_id: Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
        :param opposite_interface_owner_id: Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
        :param opposite_router_id: Property oppositeRouterId: Router ID of the connection peer RouterInterface.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "opposite_interface_id": opposite_interface_id,
            "router_interface_id": router_interface_id,
        }
        if opposite_interface_owner_id is not None:
            self._values["opposite_interface_owner_id"] = opposite_interface_owner_id
        if opposite_router_id is not None:
            self._values["opposite_router_id"] = opposite_router_id

    @builtins.property
    def opposite_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property oppositeInterfaceId: The connection peer RouterInterface ID.'''
        result = self._values.get("opposite_interface_id")
        assert result is not None, "Required property 'opposite_interface_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def router_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.'''
        result = self._values.get("router_interface_id")
        assert result is not None, "Required property 'router_interface_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def opposite_interface_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.'''
        result = self._values.get("opposite_interface_owner_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property oppositeRouterId: Router ID of the connection peer RouterInterface.'''
        result = self._values.get("opposite_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PeeringRouterInterfaceBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class PeeringRouterInterfaceConnection(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.PeeringRouterInterfaceConnection",
):
    '''A ROS resource type:  ``ALIYUN::VPC::PeeringRouterInterfaceConnection``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "PeeringRouterInterfaceConnectionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::PeeringRouterInterfaceConnection``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOppositeInterfaceId")
    def attr_opposite_interface_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OppositeInterfaceId: The receiver RouterInterface ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOppositeInterfaceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouterInterfaceId: The initiator RouterInterface ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouterInterfaceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.PeeringRouterInterfaceConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "opposite_interface_id": "oppositeInterfaceId",
        "router_interface_id": "routerInterfaceId",
    },
)
class PeeringRouterInterfaceConnectionProps:
    def __init__(
        self,
        *,
        opposite_interface_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        router_interface_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::PeeringRouterInterfaceConnection``.

        :param opposite_interface_id: Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
        :param router_interface_id: Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "opposite_interface_id": opposite_interface_id,
            "router_interface_id": router_interface_id,
        }

    @builtins.property
    def opposite_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.'''
        result = self._values.get("opposite_interface_id")
        assert result is not None, "Required property 'opposite_interface_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def router_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.'''
        result = self._values.get("router_interface_id")
        assert result is not None, "Required property 'router_interface_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PeeringRouterInterfaceConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAnycastEIP(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosAnycastEIP",
):
    '''A ROS template type:  ``ALIYUN::VPC::AnycastEIP``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAnycastEIPProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::AnycastEIP``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAnycastId")
    def attr_anycast_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AnycastId: Anycast EIP instance ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAnycastId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IpAddress: Anycase IP address
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: Anycast EIP instance name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: Order ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Anycast EIP instance description
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: Anycast EIP instance charge type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetChargeType: Anycast EIP instance access public network billing method
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name: Anycast EIP instance name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceLocation")
    def service_location(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceLocation: Anycast EIP instance access area
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serviceLocation"))

    @service_location.setter
    def service_location(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "serviceLocation", value)


class RosAnycastEIPAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosAnycastEIPAssociation",
):
    '''A ROS template type:  ``ALIYUN::VPC::AnycastEIPAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAnycastEIPAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::AnycastEIPAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAnycastId")
    def attr_anycast_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AnycastId: Anycast EIP instance ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAnycastId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBindInstanceId")
    def attr_bind_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BindInstanceId: The ID of the cloud resource instance to be bound.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBindInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBindInstanceRegionId")
    def attr_bind_instance_region_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBindInstanceRegionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBindInstanceType")
    def attr_bind_instance_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BindInstanceType: The cloud resource instance type to be bound.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBindInstanceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="anycastId")
    def anycast_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: anycastId: Anycast EIP instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "anycastId"))

    @anycast_id.setter
    def anycast_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "anycastId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bindInstanceId")
    def bind_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bindInstanceId: The ID of the cloud resource instance to be bound.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bindInstanceId"))

    @bind_instance_id.setter
    def bind_instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bindInstanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bindInstanceRegionId")
    def bind_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bindInstanceRegionId"))

    @bind_instance_region_id.setter
    def bind_instance_region_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bindInstanceRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bindInstanceType")
    def bind_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bindInstanceType"))

    @bind_instance_type.setter
    def bind_instance_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bindInstanceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosAnycastEIPAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "anycast_id": "anycastId",
        "bind_instance_id": "bindInstanceId",
        "bind_instance_region_id": "bindInstanceRegionId",
        "bind_instance_type": "bindInstanceType",
    },
)
class RosAnycastEIPAssociationProps:
    def __init__(
        self,
        *,
        anycast_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        bind_instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        bind_instance_region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        bind_instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::AnycastEIPAssociation``.

        :param anycast_id: 
        :param bind_instance_id: 
        :param bind_instance_region_id: 
        :param bind_instance_type: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "anycast_id": anycast_id,
            "bind_instance_id": bind_instance_id,
            "bind_instance_region_id": bind_instance_region_id,
            "bind_instance_type": bind_instance_type,
        }

    @builtins.property
    def anycast_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: anycastId: Anycast EIP instance ID.
        '''
        result = self._values.get("anycast_id")
        assert result is not None, "Required property 'anycast_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bind_instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bindInstanceId: The ID of the cloud resource instance to be bound.
        '''
        result = self._values.get("bind_instance_id")
        assert result is not None, "Required property 'bind_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bind_instance_region_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
        '''
        result = self._values.get("bind_instance_region_id")
        assert result is not None, "Required property 'bind_instance_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bind_instance_type(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
        '''
        result = self._values.get("bind_instance_type")
        assert result is not None, "Required property 'bind_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAnycastEIPAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosAnycastEIPProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "name": "name",
        "service_location": "serviceLocation",
    },
)
class RosAnycastEIPProps:
    def __init__(
        self,
        *,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        service_location: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::AnycastEIP``.

        :param description: 
        :param instance_charge_type: 
        :param internet_charge_type: 
        :param name: 
        :param service_location: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if name is not None:
            self._values["name"] = name
        if service_location is not None:
            self._values["service_location"] = service_location

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Anycast EIP instance description
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: Anycast EIP instance charge type
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetChargeType: Anycast EIP instance access public network billing method
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name: Anycast EIP instance name
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def service_location(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serviceLocation: Anycast EIP instance access area
        '''
        result = self._values.get("service_location")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAnycastEIPProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBgpGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosBgpGroup",
):
    '''A ROS template type:  ``ALIYUN::VPC::BgpGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBgpGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::BgpGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBgpGroupId")
    def attr_bgp_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BgpGroupId: The ID of the BGP group.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBgpGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: The name of the BGP group.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="peerAsn")
    def peer_asn(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: peerAsn: The AS number of the BGP peer.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "peerAsn"))

    @peer_asn.setter
    def peer_asn(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "peerAsn", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routerId")
    def router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routerId: The ID of the VBR.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "routerId"))

    @router_id.setter
    def router_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "routerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="authKey")
    def auth_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authKey: The authentication key of the BGP group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "authKey"))

    @auth_key.setter
    def auth_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "authKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the BGP group. The description must be 2 to 256 characters in length.
        It must start with a letter but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isFakeAsn")
    def is_fake_asn(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isFakeAsn: A router that runs BGP typically belongs to only one AS. In some cases, for example,
        the AS needs to be migrated or is merged with another AS, a new AS number replaces
        the original one.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "isFakeAsn"))

    @is_fake_asn.setter
    def is_fake_asn(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isFakeAsn", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localAsn")
    def local_asn(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: localAsn: The AS number on the Alibaba Cloud side.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "localAsn"))

    @local_asn.setter
    def local_asn(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "localAsn", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the BGP group. The name must be 2 to 128 characters in length and can
        contain digits, periods (.), underscores (_), and hyphens (-). The name must start
        with a letter but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosBgpGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "peer_asn": "peerAsn",
        "router_id": "routerId",
        "auth_key": "authKey",
        "description": "description",
        "is_fake_asn": "isFakeAsn",
        "local_asn": "localAsn",
        "name": "name",
    },
)
class RosBgpGroupProps:
    def __init__(
        self,
        *,
        peer_asn: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        router_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auth_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        is_fake_asn: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        local_asn: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::BgpGroup``.

        :param peer_asn: 
        :param router_id: 
        :param auth_key: 
        :param description: 
        :param is_fake_asn: 
        :param local_asn: 
        :param name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "peer_asn": peer_asn,
            "router_id": router_id,
        }
        if auth_key is not None:
            self._values["auth_key"] = auth_key
        if description is not None:
            self._values["description"] = description
        if is_fake_asn is not None:
            self._values["is_fake_asn"] = is_fake_asn
        if local_asn is not None:
            self._values["local_asn"] = local_asn
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def peer_asn(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: peerAsn: The AS number of the BGP peer.
        '''
        result = self._values.get("peer_asn")
        assert result is not None, "Required property 'peer_asn' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routerId: The ID of the VBR.
        '''
        result = self._values.get("router_id")
        assert result is not None, "Required property 'router_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auth_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authKey: The authentication key of the BGP group.
        '''
        result = self._values.get("auth_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the BGP group. The description must be 2 to 256 characters in length.
        It must start with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def is_fake_asn(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isFakeAsn: A router that runs BGP typically belongs to only one AS. In some cases, for example,
        the AS needs to be migrated or is merged with another AS, a new AS number replaces
        the original one.
        '''
        result = self._values.get("is_fake_asn")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def local_asn(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: localAsn: The AS number on the Alibaba Cloud side.
        '''
        result = self._values.get("local_asn")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the BGP group. The name must be 2 to 128 characters in length and can
        contain digits, periods (.), underscores (_), and hyphens (-). The name must start
        with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBgpGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBgpNetwork(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosBgpNetwork",
):
    '''A ROS template type:  ``ALIYUN::VPC::BgpNetwork``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBgpNetworkProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::BgpNetwork``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDstCidrBlock")
    def attr_dst_cidr_block(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        DstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
        to a data center.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDstCidrBlock"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouterId")
    def attr_router_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouterId: The ID of the vRouter associated with the router interface.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouterId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dstCidrBlock")
    def dst_cidr_block(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
        to a data center.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dstCidrBlock"))

    @dst_cidr_block.setter
    def dst_cidr_block(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dstCidrBlock", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routerId")
    def router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routerId: The ID of the vRouter associated with the router interface.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "routerId"))

    @router_id.setter
    def router_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "routerId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosBgpNetworkProps",
    jsii_struct_bases=[],
    name_mapping={"dst_cidr_block": "dstCidrBlock", "router_id": "routerId"},
)
class RosBgpNetworkProps:
    def __init__(
        self,
        *,
        dst_cidr_block: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        router_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::BgpNetwork``.

        :param dst_cidr_block: 
        :param router_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "dst_cidr_block": dst_cidr_block,
            "router_id": router_id,
        }

    @builtins.property
    def dst_cidr_block(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
        to a data center.
        '''
        result = self._values.get("dst_cidr_block")
        assert result is not None, "Required property 'dst_cidr_block' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routerId: The ID of the vRouter associated with the router interface.
        '''
        result = self._values.get("router_id")
        assert result is not None, "Required property 'router_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBgpNetworkProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBgpPeer(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosBgpPeer",
):
    '''A ROS template type:  ``ALIYUN::VPC::BgpPeer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBgpPeerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::BgpPeer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBgpPeerId")
    def attr_bgp_peer_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BgpPeerId: The ID of the BGP peer.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBgpPeerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bgpGroupId")
    def bgp_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bgpGroupId: The ID of the BGP group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bgpGroupId"))

    @bgp_group_id.setter
    def bgp_group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bgpGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableBfd")
    def enable_bfd(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
        Valid values:
        true: enables BFD.
        false: disables BFD.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableBfd"))

    @enable_bfd.setter
    def enable_bfd(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableBfd", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="peerIpAddress")
    def peer_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: peerIpAddress: The IP address of the BGP peer.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "peerIpAddress"))

    @peer_ip_address.setter
    def peer_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "peerIpAddress", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosBgpPeerProps",
    jsii_struct_bases=[],
    name_mapping={
        "bgp_group_id": "bgpGroupId",
        "enable_bfd": "enableBfd",
        "peer_ip_address": "peerIpAddress",
    },
)
class RosBgpPeerProps:
    def __init__(
        self,
        *,
        bgp_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        enable_bfd: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        peer_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::BgpPeer``.

        :param bgp_group_id: 
        :param enable_bfd: 
        :param peer_ip_address: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bgp_group_id": bgp_group_id,
        }
        if enable_bfd is not None:
            self._values["enable_bfd"] = enable_bfd
        if peer_ip_address is not None:
            self._values["peer_ip_address"] = peer_ip_address

    @builtins.property
    def bgp_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bgpGroupId: The ID of the BGP group.
        '''
        result = self._values.get("bgp_group_id")
        assert result is not None, "Required property 'bgp_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def enable_bfd(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
        Valid values:
        true: enables BFD.
        false: disables BFD.
        '''
        result = self._values.get("enable_bfd")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def peer_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: peerIpAddress: The IP address of the BGP peer.
        '''
        result = self._values.get("peer_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBgpPeerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCommonBandwidthPackage(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage",
):
    '''A ROS template type:  ``ALIYUN::VPC::CommonBandwidthPackage``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCommonBandwidthPackageProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::CommonBandwidthPackage``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidthPackageId")
    def attr_bandwidth_package_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidthPackageId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the Internet Shared Bandwidth instance.
        The description must be 2 to 256 characters in length. It must start with a letter,
        and cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
        PayByBandwidth (default): Billed by bandwidth.
        PayBy95: Charged at Enhanced 95.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isp")
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: isp: Line type of EIP, value: BGP (multi-line).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "isp"))

    @isp.setter
    def isp(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the Internet Shared Bandwidth instance.
        The name must be 2 to 128 characters in length and can contain letters, numbers, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
        start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ratio")
    def ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
        Note This parameter is only supported on the China site.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "ratio"))

    @ratio.setter
    def ratio(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ratio", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosCommonBandwidthPackage.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosCommonBandwidthPackage.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosCommonBandwidthPackage.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zone")
    def zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zone: Zone Id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zone"))

    @zone.setter
    def zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zone", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackage.TagsProperty",
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


class RosCommonBandwidthPackageIp(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp",
):
    '''A ROS template type:  ``ALIYUN::VPC::CommonBandwidthPackageIp``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCommonBandwidthPackageIpProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::CommonBandwidthPackageIp``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllocationIds")
    def attr_allocation_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AllocationIds: All eip allocation ids of common bandwidth package.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllocationIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpAddresses")
    def attr_ip_addresses(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IpAddresses: All eip addresses of common bandwidth package.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpAddresses"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidthPackageId")
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bandwidthPackageId"))

    @bandwidth_package_id.setter
    def bandwidth_package_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bandwidthPackageId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="eips")
    def eips(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCommonBandwidthPackageIp.EipsProperty"]]]:
        '''
        :Property: eips: List of eip associated with the Internet Shared Bandwidth instance.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCommonBandwidthPackageIp.EipsProperty"]]], jsii.get(self, "eips"))

    @eips.setter
    def eips(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosCommonBandwidthPackageIp.EipsProperty"]]],
    ) -> None:
        jsii.set(self, "eips", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIp.EipsProperty",
        jsii_struct_bases=[],
        name_mapping={"allocation_id": "allocationId", "bandwidth": "bandwidth"},
    )
    class EipsProperty:
        def __init__(
            self,
            *,
            allocation_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param allocation_id: 
            :param bandwidth: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "allocation_id": allocation_id,
            }
            if bandwidth is not None:
                self._values["bandwidth"] = bandwidth

        @builtins.property
        def allocation_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: allocationId: The ID of the EIP instance.
            '''
            result = self._values.get("allocation_id")
            assert result is not None, "Required property 'allocation_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def bandwidth(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            bandwidth: The maximum allocatable bandwidth value in Mbps within the shared bandwidth.
            0 which means no limit.
            Default to no limit.
            '''
            result = self._values.get("bandwidth")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EipsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageIpProps",
    jsii_struct_bases=[],
    name_mapping={"bandwidth_package_id": "bandwidthPackageId", "eips": "eips"},
)
class RosCommonBandwidthPackageIpProps:
    def __init__(
        self,
        *,
        bandwidth_package_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        eips: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosCommonBandwidthPackageIp.EipsProperty]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::CommonBandwidthPackageIp``.

        :param bandwidth_package_id: 
        :param eips: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth_package_id": bandwidth_package_id,
            "eips": eips,
        }

    @builtins.property
    def bandwidth_package_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
        '''
        result = self._values.get("bandwidth_package_id")
        assert result is not None, "Required property 'bandwidth_package_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def eips(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCommonBandwidthPackageIp.EipsProperty]]]:
        '''
        :Property: eips: List of eip associated with the Internet Shared Bandwidth instance.
        '''
        result = self._values.get("eips")
        assert result is not None, "Required property 'eips' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosCommonBandwidthPackageIp.EipsProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCommonBandwidthPackageIpProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosCommonBandwidthPackageProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "description": "description",
        "internet_charge_type": "internetChargeType",
        "isp": "isp",
        "name": "name",
        "ratio": "ratio",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "zone": "zone",
    },
)
class RosCommonBandwidthPackageProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        isp: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ratio: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosCommonBandwidthPackage.TagsProperty]] = None,
        zone: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::CommonBandwidthPackage``.

        :param bandwidth: 
        :param description: 
        :param internet_charge_type: 
        :param isp: 
        :param name: 
        :param ratio: 
        :param resource_group_id: 
        :param tags: 
        :param zone: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
        }
        if description is not None:
            self._values["description"] = description
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if isp is not None:
            self._values["isp"] = isp
        if name is not None:
            self._values["name"] = name
        if ratio is not None:
            self._values["ratio"] = ratio
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if zone is not None:
            self._values["zone"] = zone

    @builtins.property
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the Internet Shared Bandwidth instance.
        The description must be 2 to 256 characters in length. It must start with a letter,
        and cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
        PayByBandwidth (default): Billed by bandwidth.
        PayBy95: Charged at Enhanced 95.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: isp: Line type of EIP, value: BGP (multi-line).
        '''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the Internet Shared Bandwidth instance.
        The name must be 2 to 128 characters in length and can contain letters, numbers, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
        start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ratio(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
        Note This parameter is only supported on the China site.
        '''
        result = self._values.get("ratio")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosCommonBandwidthPackage.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosCommonBandwidthPackage.TagsProperty]], result)

    @builtins.property
    def zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zone: Zone Id.
        '''
        result = self._values.get("zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCommonBandwidthPackageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomerGateway(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosCustomerGateway",
):
    '''A ROS template type:  ``ALIYUN::VPC::CustomerGateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCustomerGatewayProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::CustomerGateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCustomerGatewayId")
    def attr_customer_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CustomerGatewayId: The ID of the user gateway.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCustomerGatewayId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ipAddress")
    def ip_address(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ipAddress: The IP address of the user gateway.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ipAddress"))

    @ip_address.setter
    def ip_address(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ipAddress", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: Description of the user gateway.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the user gateway.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosCustomerGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "ip_address": "ipAddress",
        "description": "description",
        "name": "name",
    },
)
class RosCustomerGatewayProps:
    def __init__(
        self,
        *,
        ip_address: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::CustomerGateway``.

        :param ip_address: 
        :param description: 
        :param name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ip_address": ip_address,
        }
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def ip_address(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ipAddress: The IP address of the user gateway.
        '''
        result = self._values.get("ip_address")
        assert result is not None, "Required property 'ip_address' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: Description of the user gateway.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the user gateway.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomerGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDhcpOptionsSet(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosDhcpOptionsSet",
):
    '''A ROS template type:  ``ALIYUN::VPC::DhcpOptionsSet``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDhcpOptionsSetProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::DhcpOptionsSet``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDhcpOptionsSetId")
    def attr_dhcp_options_set_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DhcpOptionsSetId: The ID of the DHCP options set that is created.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDhcpOptionsSetId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dhcpOptionsSetDescription")
    def dhcp_options_set_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dhcpOptionsSetDescription: The description of the DHCP options set.
        The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dhcpOptionsSetDescription"))

    @dhcp_options_set_description.setter
    def dhcp_options_set_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dhcpOptionsSetDescription", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dhcpOptionsSetName")
    def dhcp_options_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dhcpOptionsSetName: The name of the DHCP options set.
        The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "dhcpOptionsSetName"))

    @dhcp_options_set_name.setter
    def dhcp_options_set_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "dhcpOptionsSetName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        domainName: The root domain, for example, example.com.
        After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domainNameServers")
    def domain_name_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "domainNameServers"))

    @domain_name_servers.setter
    def domain_name_servers(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "domainNameServers", value)


class RosDhcpOptionsSetAttachment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosDhcpOptionsSetAttachment",
):
    '''A ROS template type:  ``ALIYUN::VPC::DhcpOptionsSetAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDhcpOptionsSetAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::DhcpOptionsSetAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDhcpOptionsSetId")
    def attr_dhcp_options_set_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DhcpOptionsSetId: The ID of the DHCP options set.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDhcpOptionsSetId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VPC network.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="dhcpOptionsSetId")
    def dhcp_options_set_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dhcpOptionsSetId: The ID of the DHCP options set.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "dhcpOptionsSetId"))

    @dhcp_options_set_id.setter
    def dhcp_options_set_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "dhcpOptionsSetId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosDhcpOptionsSetAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={"dhcp_options_set_id": "dhcpOptionsSetId", "vpc_id": "vpcId"},
)
class RosDhcpOptionsSetAttachmentProps:
    def __init__(
        self,
        *,
        dhcp_options_set_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::DhcpOptionsSetAttachment``.

        :param dhcp_options_set_id: 
        :param vpc_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "dhcp_options_set_id": dhcp_options_set_id,
            "vpc_id": vpc_id,
        }

    @builtins.property
    def dhcp_options_set_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: dhcpOptionsSetId: The ID of the DHCP options set.
        '''
        result = self._values.get("dhcp_options_set_id")
        assert result is not None, "Required property 'dhcp_options_set_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDhcpOptionsSetAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosDhcpOptionsSetProps",
    jsii_struct_bases=[],
    name_mapping={
        "dhcp_options_set_description": "dhcpOptionsSetDescription",
        "dhcp_options_set_name": "dhcpOptionsSetName",
        "domain_name": "domainName",
        "domain_name_servers": "domainNameServers",
    },
)
class RosDhcpOptionsSetProps:
    def __init__(
        self,
        *,
        dhcp_options_set_description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dhcp_options_set_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        domain_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        domain_name_servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::DhcpOptionsSet``.

        :param dhcp_options_set_description: 
        :param dhcp_options_set_name: 
        :param domain_name: 
        :param domain_name_servers: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if dhcp_options_set_description is not None:
            self._values["dhcp_options_set_description"] = dhcp_options_set_description
        if dhcp_options_set_name is not None:
            self._values["dhcp_options_set_name"] = dhcp_options_set_name
        if domain_name is not None:
            self._values["domain_name"] = domain_name
        if domain_name_servers is not None:
            self._values["domain_name_servers"] = domain_name_servers

    @builtins.property
    def dhcp_options_set_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dhcpOptionsSetDescription: The description of the DHCP options set.
        The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        '''
        result = self._values.get("dhcp_options_set_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dhcp_options_set_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        dhcpOptionsSetName: The name of the DHCP options set.
        The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
        '''
        result = self._values.get("dhcp_options_set_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        domainName: The root domain, for example, example.com.
        After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
        '''
        result = self._values.get("domain_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def domain_name_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
        '''
        result = self._values.get("domain_name_servers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDhcpOptionsSetProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEIP(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosEIP",
):
    '''A ROS template type:  ``ALIYUN::VPC::EIP``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosEIPProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::EIP``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllocationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEipAddress")
    def attr_eip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EipAddress: IP address of created EIP.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEipAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIsp")
    def attr_isp(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Isp: The line type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIsp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: Order ID of prepaid EIP instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: Automatic Payment. Default is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidth: Bandwidth for the output network. Default is 5MB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionProtection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: The resource charge type. Default value is Postpaid
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isp")
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
        BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
        BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "isp"))

    @isp.setter
    def isp(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="netmode")
    def netmode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: netmode: The network type. Valid value: public (public network).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "netmode"))

    @netmode.setter
    def netmode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "netmode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
        While choose pay by year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosEIP.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosEIP.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(self, value: typing.Optional[typing.List["RosEIP.TagsProperty"]]) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosEIP.TagsProperty",
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


class RosEIPAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosEIPAssociation",
):
    '''A ROS template type:  ``ALIYUN::VPC::EIPAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosEIPAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::EIPAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllocationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEipAddress")
    def attr_eip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EipAddress: IP address of created EIP.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEipAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="allocationId")
    def allocation_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: allocationId: EIP instance id to bind.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "allocationId"))

    @allocation_id.setter
    def allocation_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "allocationId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="mode")
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        mode: The mode of association. Valid values:
        NAT(Default): NAT mode.
        BINDED: Cut-through mode.
        MULTI_BINDED: Multi-EIP to ENI mode.
        This is required only when the value of InstanceType is NetworkInterface.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "mode"))

    @mode.setter
    def mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "mode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        privateIpAddress: An IP address in the CIDR block of the VSwitch.
        If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "privateIpAddress", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosEIPAssociationProps",
    jsii_struct_bases=[],
    name_mapping={
        "allocation_id": "allocationId",
        "instance_id": "instanceId",
        "mode": "mode",
        "private_ip_address": "privateIpAddress",
    },
)
class RosEIPAssociationProps:
    def __init__(
        self,
        *,
        allocation_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::EIPAssociation``.

        :param allocation_id: 
        :param instance_id: 
        :param mode: 
        :param private_ip_address: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "allocation_id": allocation_id,
            "instance_id": instance_id,
        }
        if mode is not None:
            self._values["mode"] = mode
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address

    @builtins.property
    def allocation_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: allocationId: EIP instance id to bind.
        '''
        result = self._values.get("allocation_id")
        assert result is not None, "Required property 'allocation_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        mode: The mode of association. Valid values:
        NAT(Default): NAT mode.
        BINDED: Cut-through mode.
        MULTI_BINDED: Multi-EIP to ENI mode.
        This is required only when the value of InstanceType is NetworkInterface.
        '''
        result = self._values.get("mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        privateIpAddress: An IP address in the CIDR block of the VSwitch.
        If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEIPAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEIPPro(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosEIPPro",
):
    '''A ROS template type:  ``ALIYUN::VPC::EIPPro``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosEIPProProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::EIPPro``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAllocationId")
    def attr_allocation_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAllocationId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEipAddress")
    def attr_eip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EipAddress: IP address of created EIP.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEipAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIsp")
    def attr_isp(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ISP: The line type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIsp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: Order ID of prepaid EIP instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: Automatic Payment. Default is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidth: Bandwidth for the output network. Default is 5MB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionProtection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: The resource charge type. Default value is Postpaid
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceId: The ID of the requested EIP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ipAddress")
    def ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: ipAddress: The IP address of the requested EIP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "ipAddress"))

    @ip_address.setter
    def ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ipAddress", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isp")
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
        BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
        BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "isp"))

    @isp.setter
    def isp(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "isp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="netmode")
    def netmode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: netmode: The network type. Valid value: public (public network).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "netmode"))

    @netmode.setter
    def netmode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "netmode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
        While choose pay by year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosEIPPro.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosEIPPro.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosEIPPro.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosEIPPro.TagsProperty",
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
    jsii_type="@alicloud/ros-cdk-vpc.RosEIPProProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "bandwidth": "bandwidth",
        "deletion_protection": "deletionProtection",
        "description": "description",
        "instance_charge_type": "instanceChargeType",
        "instance_id": "instanceId",
        "internet_charge_type": "internetChargeType",
        "ip_address": "ipAddress",
        "isp": "isp",
        "name": "name",
        "netmode": "netmode",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosEIPProProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ip_address: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        isp: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        netmode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosEIPPro.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::EIPPro``.

        :param auto_pay: 
        :param bandwidth: 
        :param deletion_protection: 
        :param description: 
        :param instance_charge_type: 
        :param instance_id: 
        :param internet_charge_type: 
        :param ip_address: 
        :param isp: 
        :param name: 
        :param netmode: 
        :param period: 
        :param pricing_cycle: 
        :param resource_group_id: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if description is not None:
            self._values["description"] = description
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_id is not None:
            self._values["instance_id"] = instance_id
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if ip_address is not None:
            self._values["ip_address"] = ip_address
        if isp is not None:
            self._values["isp"] = isp
        if name is not None:
            self._values["name"] = name
        if netmode is not None:
            self._values["netmode"] = netmode
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: Automatic Payment. Default is false.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidth: Bandwidth for the output network. Default is 5MB.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: The resource charge type. Default value is Postpaid
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceId: The ID of the requested EIP.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: ipAddress: The IP address of the requested EIP.
        '''
        result = self._values.get("ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
        BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
        BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
        '''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def netmode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: netmode: The network type. Valid value: public (public network).
        '''
        result = self._values.get("netmode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
        While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosEIPPro.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosEIPPro.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEIPProProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosEIPProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_pay": "autoPay",
        "bandwidth": "bandwidth",
        "deletion_protection": "deletionProtection",
        "description": "description",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "isp": "isp",
        "name": "name",
        "netmode": "netmode",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosEIPProps:
    def __init__(
        self,
        *,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        isp: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        netmode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosEIP.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::EIP``.

        :param auto_pay: 
        :param bandwidth: 
        :param deletion_protection: 
        :param description: 
        :param instance_charge_type: 
        :param internet_charge_type: 
        :param isp: 
        :param name: 
        :param netmode: 
        :param period: 
        :param pricing_cycle: 
        :param resource_group_id: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if description is not None:
            self._values["description"] = description
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if isp is not None:
            self._values["isp"] = isp
        if name is not None:
            self._values["name"] = name
        if netmode is not None:
            self._values["netmode"] = netmode
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: Automatic Payment. Default is false.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidth: Bandwidth for the output network. Default is 5MB.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: The resource charge type. Default value is Postpaid
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def isp(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
        BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
        BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
        '''
        result = self._values.get("isp")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def netmode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: netmode: The network type. Valid value: public (public network).
        '''
        result = self._values.get("netmode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
        While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosEIP.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosEIP.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEIPProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEIPSegment(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosEIPSegment",
):
    '''A ROS template type:  ``ALIYUN::VPC::EIPSegment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosEIPSegmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::EIPSegment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEipAddresses")
    def attr_eip_addresses(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EipAddresses: List of EIP addresses. like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEipAddresses"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEipSegmentInstanceId")
    def attr_eip_segment_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EipSegmentInstanceId: The ID of the contiguous EIP group.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEipSegmentInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="eipMask")
    def eip_mask(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        eipMask: The mask of the contiguous EIP group. Valid values:
        28: 16 contiguous EIPs are allocated for one call.
        27: 32 contiguous EIPs are allocated for one call.
        26: 64 contiguous EIPs are allocated for one call.
        25: 128 contiguous EIPs are allocated for one call.
        24: 256 contiguous EIPs are allocated for one call.
        Note The actual number of assigned EIPs may be less than the expected number because one,
        three, or four EIPs may be reserved.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "eipMask"))

    @eip_mask.setter
    def eip_mask(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "eipMask", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        internetChargeType: The metering method of the contiguous EIPs. Valid values:
        PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
        PayByTraffic: Fees are charged based on data transfer.
        Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="netmode")
    def netmode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        netmode: The network type. Valid values:
        public: the Internet. This is the default value. After contiguous EIPs are associated with
        cloud resources, the cloud resources can access the Internet by using the EIPs.
        hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
        cloud resources can access the hybrid cloud by using the EIPs.
        Note This network type is available only to users who are added to the whitelist. To use
        this network type, contact your customer manager.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "netmode"))

    @netmode.setter
    def netmode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "netmode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the EIPs belong.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosEIPSegmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "eip_mask": "eipMask",
        "bandwidth": "bandwidth",
        "internet_charge_type": "internetChargeType",
        "netmode": "netmode",
        "resource_group_id": "resourceGroupId",
    },
)
class RosEIPSegmentProps:
    def __init__(
        self,
        *,
        eip_mask: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        netmode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::EIPSegment``.

        :param eip_mask: 
        :param bandwidth: 
        :param internet_charge_type: 
        :param netmode: 
        :param resource_group_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "eip_mask": eip_mask,
        }
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if netmode is not None:
            self._values["netmode"] = netmode
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id

    @builtins.property
    def eip_mask(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        eipMask: The mask of the contiguous EIP group. Valid values:
        28: 16 contiguous EIPs are allocated for one call.
        27: 32 contiguous EIPs are allocated for one call.
        26: 64 contiguous EIPs are allocated for one call.
        25: 128 contiguous EIPs are allocated for one call.
        24: 256 contiguous EIPs are allocated for one call.
        Note The actual number of assigned EIPs may be less than the expected number because one,
        three, or four EIPs may be reserved.
        '''
        result = self._values.get("eip_mask")
        assert result is not None, "Required property 'eip_mask' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        internetChargeType: The metering method of the contiguous EIPs. Valid values:
        PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
        PayByTraffic: Fees are charged based on data transfer.
        Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def netmode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        netmode: The network type. Valid values:
        public: the Internet. This is the default value. After contiguous EIPs are associated with
        cloud resources, the cloud resources can access the Internet by using the EIPs.
        hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
        cloud resources can access the hybrid cloud by using the EIPs.
        Note This network type is available only to users who are added to the whitelist. To use
        this network type, contact your customer manager.
        '''
        result = self._values.get("netmode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the EIPs belong.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEIPSegmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFlowLog(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosFlowLog",
):
    '''A ROS template type:  ``ALIYUN::VPC::FlowLog``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosFlowLogProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::FlowLog``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Description: The Description of flow log.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFlowLogId")
    def attr_flow_log_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FlowLogId: The flow log ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFlowLogId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFlowLogName")
    def attr_flow_log_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FlowLogName: The flow log name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFlowLogName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogStoreName")
    def attr_log_store_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LogStoreName: The log store name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogStoreName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProjectName")
    def attr_project_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ProjectName: The project name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProjectName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceId")
    def attr_resource_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceId: The resource id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceType")
    def attr_resource_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceType: The resource type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTrafficType")
    def attr_traffic_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: TrafficType: The traffic type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTrafficType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logStoreName")
    def log_store_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: logStoreName: The log store name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "logStoreName"))

    @log_store_name.setter
    def log_store_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "logStoreName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="projectName")
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: projectName: The project name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "projectName"))

    @project_name.setter
    def project_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "projectName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceId")
    def resource_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resourceId: The resource id.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "resourceId"))

    @resource_id.setter
    def resource_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "resourceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceType")
    def resource_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resourceType: The resource type.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "resourceType"))

    @resource_type.setter
    def resource_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "resourceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="trafficType")
    def traffic_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: trafficType: The traffic type.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "trafficType"))

    @traffic_type.setter
    def traffic_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "trafficType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The Description of flow log.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="flowLogName")
    def flow_log_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: flowLogName: The flow log name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "flowLogName"))

    @flow_log_name.setter
    def flow_log_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "flowLogName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosFlowLogProps",
    jsii_struct_bases=[],
    name_mapping={
        "log_store_name": "logStoreName",
        "project_name": "projectName",
        "resource_id": "resourceId",
        "resource_type": "resourceType",
        "traffic_type": "trafficType",
        "description": "description",
        "flow_log_name": "flowLogName",
    },
)
class RosFlowLogProps:
    def __init__(
        self,
        *,
        log_store_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        project_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resource_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        traffic_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        flow_log_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::FlowLog``.

        :param log_store_name: 
        :param project_name: 
        :param resource_id: 
        :param resource_type: 
        :param traffic_type: 
        :param description: 
        :param flow_log_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "log_store_name": log_store_name,
            "project_name": project_name,
            "resource_id": resource_id,
            "resource_type": resource_type,
            "traffic_type": traffic_type,
        }
        if description is not None:
            self._values["description"] = description
        if flow_log_name is not None:
            self._values["flow_log_name"] = flow_log_name

    @builtins.property
    def log_store_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: logStoreName: The log store name.
        '''
        result = self._values.get("log_store_name")
        assert result is not None, "Required property 'log_store_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def project_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: projectName: The project name.
        '''
        result = self._values.get("project_name")
        assert result is not None, "Required property 'project_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resourceId: The resource id.
        '''
        result = self._values.get("resource_id")
        assert result is not None, "Required property 'resource_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resource_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: resourceType: The resource type.
        '''
        result = self._values.get("resource_type")
        assert result is not None, "Required property 'resource_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def traffic_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: trafficType: The traffic type.
        '''
        result = self._values.get("traffic_type")
        assert result is not None, "Required property 'traffic_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The Description of flow log.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def flow_log_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: flowLogName: The flow log name.
        '''
        result = self._values.get("flow_log_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFlowLogProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosGrantInstanceToCen(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosGrantInstanceToCen",
):
    '''A ROS template type:  ``ALIYUN::VPC::GrantInstanceToCen``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosGrantInstanceToCenProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::GrantInstanceToCen``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCenId")
    def attr_cen_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CenId: The ID of the CEN instance to be authorized.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCenId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of the network instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance to be authorized.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cenOwnerId")
    def cen_owner_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: cenOwnerId: The UID of the account to which the target CEN instance belongs.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "cenOwnerId"))

    @cen_owner_id.setter
    def cen_owner_id(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cenOwnerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of the network instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceType")
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceType: The type of the network instance. Valid values:
        VPC: Virtual Private Cloud (VPC).
        VBR: Virtual Border Router (VBR).
        CCN: Cloud Connect Network (CCN).
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosGrantInstanceToCenProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "cen_owner_id": "cenOwnerId",
        "instance_id": "instanceId",
        "instance_type": "instanceType",
    },
)
class RosGrantInstanceToCenProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cen_owner_id: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::GrantInstanceToCen``.

        :param cen_id: 
        :param cen_owner_id: 
        :param instance_id: 
        :param instance_type: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "cen_id": cen_id,
            "cen_owner_id": cen_owner_id,
            "instance_id": instance_id,
            "instance_type": instance_type,
        }

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance to be authorized.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cen_owner_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: cenOwnerId: The UID of the account to which the target CEN instance belongs.
        '''
        result = self._values.get("cen_owner_id")
        assert result is not None, "Required property 'cen_owner_id' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: The ID of the network instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceType: The type of the network instance. Valid values:
        VPC: Virtual Private Cloud (VPC).
        VBR: Virtual Border Router (VBR).
        CCN: Cloud Connect Network (CCN).
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosGrantInstanceToCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIpsecServer(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosIpsecServer",
):
    '''A ROS template type:  ``ALIYUN::VPC::IpsecServer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosIpsecServerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::IpsecServer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpsecServerId")
    def attr_ipsec_server_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IpsecServerId: IPsec server ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpsecServerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpsecServerName")
    def attr_ipsec_server_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IpsecServerName: IPsec server name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpsecServerName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clientIpPool")
    def client_ip_pool(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clientIpPool"))

    @client_ip_pool.setter
    def client_ip_pool(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clientIpPool", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localSubnet")
    def local_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "localSubnet"))

    @local_subnet.setter
    def local_subnet(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "localSubnet", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpnGatewayId")
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpnGatewayId: VPN gateway instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpnGatewayId"))

    @vpn_gateway_id.setter
    def vpn_gateway_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpnGatewayId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="effectImmediately")
    def effect_immediately(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
        false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "effectImmediately"))

    @effect_immediately.setter
    def effect_immediately(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "effectImmediately", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ikeConfig")
    def ike_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IkeConfigProperty"]]:
        '''
        :Property: ikeConfig: Negotiation parameter configuration in the first phase.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IkeConfigProperty"]], jsii.get(self, "ikeConfig"))

    @ike_config.setter
    def ike_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IkeConfigProperty"]],
    ) -> None:
        jsii.set(self, "ikeConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ipsecConfig")
    def ipsec_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IpsecConfigProperty"]]:
        '''
        :Property: ipsecConfig: Negotiation parameter configuration in the second phase.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IpsecConfigProperty"]], jsii.get(self, "ipsecConfig"))

    @ipsec_config.setter
    def ipsec_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosIpsecServer.IpsecConfigProperty"]],
    ) -> None:
        jsii.set(self, "ipsecConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ipsecServerName")
    def ipsec_server_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "ipsecServerName"))

    @ipsec_server_name.setter
    def ipsec_server_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ipsecServerName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="psk")
    def psk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: psk: Pre-Shared key. Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "psk"))

    @psk.setter
    def psk(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "psk", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pskEnabled")
    def psk_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: pskEnabled: Whether to enable the pre-shared key authentication method. Only the value is true, which means that the pre-shared key authentication mode is enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "pskEnabled"))

    @psk_enabled.setter
    def psk_enabled(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pskEnabled", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosIpsecServer.IkeConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ike_auth_alg": "ikeAuthAlg",
            "ike_enc_alg": "ikeEncAlg",
            "ike_lifetime": "ikeLifetime",
            "ike_mode": "ikeMode",
            "ike_pfs": "ikePfs",
            "ike_version": "ikeVersion",
            "local_id": "localId",
            "remote_id": "remoteId",
        },
    )
    class IkeConfigProperty:
        def __init__(
            self,
            *,
            ike_auth_alg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ike_enc_alg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ike_lifetime: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ike_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ike_pfs: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ike_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            local_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            remote_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param ike_auth_alg: 
            :param ike_enc_alg: 
            :param ike_lifetime: 
            :param ike_mode: 
            :param ike_pfs: 
            :param ike_version: 
            :param local_id: 
            :param remote_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if ike_auth_alg is not None:
                self._values["ike_auth_alg"] = ike_auth_alg
            if ike_enc_alg is not None:
                self._values["ike_enc_alg"] = ike_enc_alg
            if ike_lifetime is not None:
                self._values["ike_lifetime"] = ike_lifetime
            if ike_mode is not None:
                self._values["ike_mode"] = ike_mode
            if ike_pfs is not None:
                self._values["ike_pfs"] = ike_pfs
            if ike_version is not None:
                self._values["ike_version"] = ike_version
            if local_id is not None:
                self._values["local_id"] = local_id
            if remote_id is not None:
                self._values["remote_id"] = remote_id

        @builtins.property
        def ike_auth_alg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikeAuthAlg: The authentication algorithm negotiated in the first phase. Default value: sha1.
            '''
            result = self._values.get("ike_auth_alg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ike_enc_alg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikeEncAlg: Encryption algorithm negotiated in the first stage. Default value: aes.
            '''
            result = self._values.get("ike_enc_alg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ike_lifetime(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikeLifetime: The life cycle of the SA negotiated in the first phase. Default value: 86400, in seconds.
            '''
            result = self._values.get("ike_lifetime")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ike_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikeMode: Negotiation mode of the IKE version. Default value: main.
            '''
            result = self._values.get("ike_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ike_pfs(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikePfs: The Diffie-Hellman key exchange algorithm used in the first stage of negotiation. Default value: group2.
            '''
            result = self._values.get("ike_pfs")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ike_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikeVersion: The version of the IKE protocol. Value: ikev1 or ikev2, default value: ikev2.
            '''
            result = self._values.get("ike_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def local_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: localId: IPsec server ID. Support FQDN and IP address format, the default value is the VPN gateway public network IP address.
            '''
            result = self._values.get("local_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def remote_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: remoteId: Peer ID. Support FQDN and IP address format, the default value is empty.
            '''
            result = self._values.get("remote_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IkeConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosIpsecServer.IpsecConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ipsec_auth_alg": "ipsecAuthAlg",
            "ipsec_enc_alg": "ipsecEncAlg",
            "ipsec_lifetime": "ipsecLifetime",
            "ipsec_pfs": "ipsecPfs",
        },
    )
    class IpsecConfigProperty:
        def __init__(
            self,
            *,
            ipsec_auth_alg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ipsec_enc_alg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ipsec_lifetime: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ipsec_pfs: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param ipsec_auth_alg: 
            :param ipsec_enc_alg: 
            :param ipsec_lifetime: 
            :param ipsec_pfs: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if ipsec_auth_alg is not None:
                self._values["ipsec_auth_alg"] = ipsec_auth_alg
            if ipsec_enc_alg is not None:
                self._values["ipsec_enc_alg"] = ipsec_enc_alg
            if ipsec_lifetime is not None:
                self._values["ipsec_lifetime"] = ipsec_lifetime
            if ipsec_pfs is not None:
                self._values["ipsec_pfs"] = ipsec_pfs

        @builtins.property
        def ipsec_auth_alg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ipsecAuthAlg: The authentication algorithm negotiated in the second phase. Default value: sha1.
            '''
            result = self._values.get("ipsec_auth_alg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ipsec_enc_alg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ipsecEncAlg: Encryption algorithm negotiated in the second stage. Default value: aes.
            '''
            result = self._values.get("ipsec_enc_alg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ipsec_lifetime(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: ipsecLifetime: The lifetime of the SA negotiated in the second stage. Default value: 86400, in seconds.
            '''
            result = self._values.get("ipsec_lifetime")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ipsec_pfs(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ipsecPfs: The Diffie-Hellman key exchange algorithm used in the second phase of negotiation. Default value: group2.
            '''
            result = self._values.get("ipsec_pfs")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IpsecConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosIpsecServerProps",
    jsii_struct_bases=[],
    name_mapping={
        "client_ip_pool": "clientIpPool",
        "local_subnet": "localSubnet",
        "vpn_gateway_id": "vpnGatewayId",
        "effect_immediately": "effectImmediately",
        "ike_config": "ikeConfig",
        "ipsec_config": "ipsecConfig",
        "ipsec_server_name": "ipsecServerName",
        "psk": "psk",
        "psk_enabled": "pskEnabled",
    },
)
class RosIpsecServerProps:
    def __init__(
        self,
        *,
        client_ip_pool: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        local_subnet: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpn_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        effect_immediately: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        ike_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosIpsecServer.IkeConfigProperty]] = None,
        ipsec_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosIpsecServer.IpsecConfigProperty]] = None,
        ipsec_server_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        psk: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        psk_enabled: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::IpsecServer``.

        :param client_ip_pool: 
        :param local_subnet: 
        :param vpn_gateway_id: 
        :param effect_immediately: 
        :param ike_config: 
        :param ipsec_config: 
        :param ipsec_server_name: 
        :param psk: 
        :param psk_enabled: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "client_ip_pool": client_ip_pool,
            "local_subnet": local_subnet,
            "vpn_gateway_id": vpn_gateway_id,
        }
        if effect_immediately is not None:
            self._values["effect_immediately"] = effect_immediately
        if ike_config is not None:
            self._values["ike_config"] = ike_config
        if ipsec_config is not None:
            self._values["ipsec_config"] = ipsec_config
        if ipsec_server_name is not None:
            self._values["ipsec_server_name"] = ipsec_server_name
        if psk is not None:
            self._values["psk"] = psk
        if psk_enabled is not None:
            self._values["psk_enabled"] = psk_enabled

    @builtins.property
    def client_ip_pool(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
        '''
        result = self._values.get("client_ip_pool")
        assert result is not None, "Required property 'client_ip_pool' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def local_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
        '''
        result = self._values.get("local_subnet")
        assert result is not None, "Required property 'local_subnet' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpnGatewayId: VPN gateway instance ID.
        '''
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def effect_immediately(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        effectImmediately: true: Apply the new configuration and trigger a reconnection immediately.
        false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
        '''
        result = self._values.get("effect_immediately")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ike_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosIpsecServer.IkeConfigProperty]]:
        '''
        :Property: ikeConfig: Negotiation parameter configuration in the first phase.
        '''
        result = self._values.get("ike_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosIpsecServer.IkeConfigProperty]], result)

    @builtins.property
    def ipsec_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosIpsecServer.IpsecConfigProperty]]:
        '''
        :Property: ipsecConfig: Negotiation parameter configuration in the second phase.
        '''
        result = self._values.get("ipsec_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosIpsecServer.IpsecConfigProperty]], result)

    @builtins.property
    def ipsec_server_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
        '''
        result = self._values.get("ipsec_server_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def psk(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: psk: Pre-Shared key. Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
        '''
        result = self._values.get("psk")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def psk_enabled(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: pskEnabled: Whether to enable the pre-shared key authentication method. Only the value is true, which means that the pre-shared key authentication mode is enabled.
        '''
        result = self._values.get("psk_enabled")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIpsecServerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIpv6Gateway(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosIpv6Gateway",
):
    '''A ROS template type:  ``ALIYUN::VPC::Ipv6Gateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosIpv6GatewayProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::Ipv6Gateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpv6GatewayId")
    def attr_ipv6_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Ipv6GatewayId: ID IPv6 gateway.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpv6GatewayId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: To open VPC ID IPv6 gateway.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: Description of IPv6 gateway.
        Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: Name of the IPv6 gateway.
        Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="spec")
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        spec: Specifications IPv6 gateway, the value:
        Small (default): Free.
        Medium: Enterprise Edition.
        Large: Enterprise Enhanced Edition.
        Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "spec"))

    @spec.setter
    def spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "spec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosIpv6Gateway.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosIpv6Gateway.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosIpv6Gateway.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosIpv6Gateway.TagsProperty",
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
    jsii_type="@alicloud/ros-cdk-vpc.RosIpv6GatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "description": "description",
        "name": "name",
        "spec": "spec",
        "tags": "tags",
    },
)
class RosIpv6GatewayProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosIpv6Gateway.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::Ipv6Gateway``.

        :param vpc_id: 
        :param description: 
        :param name: 
        :param spec: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name
        if spec is not None:
            self._values["spec"] = spec
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: To open VPC ID IPv6 gateway.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: Description of IPv6 gateway.
        Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: Name of the IPv6 gateway.
        Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        spec: Specifications IPv6 gateway, the value:
        Small (default): Free.
        Medium: Enterprise Edition.
        Large: Enterprise Enhanced Edition.
        Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
        '''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosIpv6Gateway.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosIpv6Gateway.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIpv6GatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosIpv6InternetBandwidth(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosIpv6InternetBandwidth",
):
    '''A ROS template type:  ``ALIYUN::VPC::Ipv6InternetBandwidth``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosIpv6InternetBandwidthProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::Ipv6InternetBandwidth``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetBandwidthId")
    def attr_internet_bandwidth_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InternetBandwidthId: Purchase of public network bandwidth.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetBandwidthId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
        When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
        When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
        Small (default free version), the public network bandwidth range 1-500.
        Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
        Large (Enterprise Edition), the public network bandwidth range 1-2000.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ipv6AddressId")
    def ipv6_address_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ipv6AddressId: ID of IPv6 address.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ipv6AddressId"))

    @ipv6_address_id.setter
    def ipv6_address_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ipv6AddressId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ipv6GatewayId")
    def ipv6_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ipv6GatewayId: ID of IPv6 gateway.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "ipv6GatewayId"))

    @ipv6_gateway_id.setter
    def ipv6_gateway_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "ipv6GatewayId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        internetChargeType: IPv6 public network bandwidth billing, value:
        PayByTraffic: by using the traffic accounting.
        PayByBandwidth (default): Bandwidth billing.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(
        self,
    ) -> typing.Optional[typing.List["RosIpv6InternetBandwidth.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosIpv6InternetBandwidth.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosIpv6InternetBandwidth.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosIpv6InternetBandwidth.TagsProperty",
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
    jsii_type="@alicloud/ros-cdk-vpc.RosIpv6InternetBandwidthProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "ipv6_address_id": "ipv6AddressId",
        "ipv6_gateway_id": "ipv6GatewayId",
        "internet_charge_type": "internetChargeType",
        "tags": "tags",
    },
)
class RosIpv6InternetBandwidthProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ipv6_address_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ipv6_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosIpv6InternetBandwidth.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::Ipv6InternetBandwidth``.

        :param bandwidth: 
        :param ipv6_address_id: 
        :param ipv6_gateway_id: 
        :param internet_charge_type: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
            "ipv6_address_id": ipv6_address_id,
            "ipv6_gateway_id": ipv6_gateway_id,
        }
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
        When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
        When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
        Small (default free version), the public network bandwidth range 1-500.
        Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
        Large (Enterprise Edition), the public network bandwidth range 1-2000.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ipv6_address_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ipv6AddressId: ID of IPv6 address.
        '''
        result = self._values.get("ipv6_address_id")
        assert result is not None, "Required property 'ipv6_address_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ipv6_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: ipv6GatewayId: ID of IPv6 gateway.
        '''
        result = self._values.get("ipv6_gateway_id")
        assert result is not None, "Required property 'ipv6_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        internetChargeType: IPv6 public network bandwidth billing, value:
        PayByTraffic: by using the traffic accounting.
        PayByBandwidth (default): Bandwidth billing.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(
        self,
    ) -> typing.Optional[typing.List[RosIpv6InternetBandwidth.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosIpv6InternetBandwidth.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosIpv6InternetBandwidthProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNatGateway(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosNatGateway",
):
    '''A ROS template type:  ``ALIYUN::VPC::NatGateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosNatGatewayProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::NatGateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrForwardTableId")
    def attr_forward_table_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ForwardTableId: The forward table id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrForwardTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNatGatewayId")
    def attr_nat_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NatGatewayId: The Id of created NAT gateway.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNatGatewayId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSNatTableId")
    def attr_s_nat_table_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SNatTableId: The SNAT table id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSNatTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The VPC id to create NAT gateway.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The VSwitch id to create NAT gateway.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: Specifies whether to enable automatic payment. Default is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionProtection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: duration: The subscription duration. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        internetChargeType: The billing method for the NAT gateway. Valid values:
        PayBySpec: billed on a pay-by-specification basis.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="natGatewayName")
    def nat_gateway_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "natGatewayName"))

    @nat_gateway_name.setter
    def nat_gateway_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "natGatewayName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="natType")
    def nat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        natType: The type of the NAT gateway. Valid values:

        - Enhanced: enhanced NAT gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "natType"))

    @nat_type.setter
    def nat_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "natType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="networkType")
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        networkType: The type of the created NAT gateway.
        Internet: public network NAT gateway.
        Intranet: VPC NAT gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "networkType"))

    @network_type.setter
    def network_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "networkType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: Price cycle of the resource. This property has no default value.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosNatGateway.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosNatGateway.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosNatGateway.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosNatGateway.TagsProperty",
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
    jsii_type="@alicloud/ros-cdk-vpc.RosNatGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "auto_pay": "autoPay",
        "deletion_force": "deletionForce",
        "deletion_protection": "deletionProtection",
        "description": "description",
        "duration": "duration",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "nat_gateway_name": "natGatewayName",
        "nat_type": "natType",
        "network_type": "networkType",
        "pricing_cycle": "pricingCycle",
        "tags": "tags",
    },
)
class RosNatGatewayProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        nat_gateway_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        nat_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        network_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosNatGateway.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::NatGateway``.

        :param vpc_id: 
        :param v_switch_id: 
        :param auto_pay: 
        :param deletion_force: 
        :param deletion_protection: 
        :param description: 
        :param duration: 
        :param instance_charge_type: 
        :param internet_charge_type: 
        :param nat_gateway_name: 
        :param nat_type: 
        :param network_type: 
        :param pricing_cycle: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if description is not None:
            self._values["description"] = description
        if duration is not None:
            self._values["duration"] = duration
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if nat_gateway_name is not None:
            self._values["nat_gateway_name"] = nat_gateway_name
        if nat_type is not None:
            self._values["nat_type"] = nat_type
        if network_type is not None:
            self._values["network_type"] = network_type
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The VPC id to create NAT gateway.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The VSwitch id to create NAT gateway.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoPay: Specifies whether to enable automatic payment. Default is false.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        deletionProtection: Whether to enable deletion protection.
        Default to False.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: duration: The subscription duration. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        internetChargeType: The billing method for the NAT gateway. Valid values:
        PayBySpec: billed on a pay-by-specification basis.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def nat_gateway_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        result = self._values.get("nat_gateway_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def nat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        natType: The type of the NAT gateway. Valid values:

        - Enhanced: enhanced NAT gateway.
        '''
        result = self._values.get("nat_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def network_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        networkType: The type of the created NAT gateway.
        Internet: public network NAT gateway.
        Intranet: VPC NAT gateway.
        '''
        result = self._values.get("network_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: Price cycle of the resource. This property has no default value.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosNatGateway.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosNatGateway.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNatGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNetworkAcl(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosNetworkAcl",
):
    '''A ROS template type:  ``ALIYUN::VPC::NetworkAcl``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosNetworkAclProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::NetworkAcl``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkAclEntryName")
    def attr_network_acl_entry_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NetworkAclEntryName: The name of the inbound rule.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkAclEntryName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkAclId")
    def attr_network_acl_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NetworkAclId: The ID of the network ACL.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkAclId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the network ACL.
        The description must be 2 to 256 characters in length. The description must start
        with a letter but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="egressAclEntries")
    def egress_acl_entries(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.EgressAclEntriesProperty"]]]]:
        '''
        :Property: egressAclEntries: The list of egress network ACL entries.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.EgressAclEntriesProperty"]]]], jsii.get(self, "egressAclEntries"))

    @egress_acl_entries.setter
    def egress_acl_entries(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.EgressAclEntriesProperty"]]]],
    ) -> None:
        jsii.set(self, "egressAclEntries", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ingressAclEntries")
    def ingress_acl_entries(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.IngressAclEntriesProperty"]]]]:
        '''
        :Property: ingressAclEntries: The list of ingress network ACL entries.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.IngressAclEntriesProperty"]]]], jsii.get(self, "ingressAclEntries"))

    @ingress_acl_entries.setter
    def ingress_acl_entries(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAcl.IngressAclEntriesProperty"]]]],
    ) -> None:
        jsii.set(self, "ingressAclEntries", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="networkAclName")
    def network_acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        networkAclName: The name of the network ACL.
        The name must be 2 to 128 characters in length and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
        start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "networkAclName"))

    @network_acl_name.setter
    def network_acl_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "networkAclName", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosNetworkAcl.EgressAclEntriesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "policy": "policy",
            "port": "port",
            "protocol": "protocol",
            "description": "description",
            "destination_cidr_ip": "destinationCidrIp",
            "entry_type": "entryType",
            "network_acl_entry_name": "networkAclEntryName",
        },
    )
    class EgressAclEntriesProperty:
        def __init__(
            self,
            *,
            policy: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            port: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            destination_cidr_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            entry_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            network_acl_entry_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param policy: 
            :param port: 
            :param protocol: 
            :param description: 
            :param destination_cidr_ip: 
            :param entry_type: 
            :param network_acl_entry_name: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "policy": policy,
                "port": port,
                "protocol": protocol,
            }
            if description is not None:
                self._values["description"] = description
            if destination_cidr_ip is not None:
                self._values["destination_cidr_ip"] = destination_cidr_ip
            if entry_type is not None:
                self._values["entry_type"] = entry_type
            if network_acl_entry_name is not None:
                self._values["network_acl_entry_name"] = network_acl_entry_name

        @builtins.property
        def policy(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            policy: The authorization policy. Valid values:
            accept: access permissions granted.
            drop: access permissions denied.
            '''
            result = self._values.get("policy")
            assert result is not None, "Required property 'policy' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def port(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            protocol: The transport layer protocols. Valid values:
            icmp
            gre
            tcp
            udp
            all: All protocols are supported.
            '''
            result = self._values.get("protocol")
            assert result is not None, "Required property 'protocol' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: The description of the egress entry.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def destination_cidr_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: destinationCidrIp: Destination address network segment.
            '''
            result = self._values.get("destination_cidr_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def entry_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            entryType: The type of the rule. Valid values:
            custom : custom rules.
            system : system rules.
            '''
            result = self._values.get("entry_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def network_acl_entry_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: networkAclEntryName: The name of the egress entry.
            '''
            result = self._values.get("network_acl_entry_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EgressAclEntriesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosNetworkAcl.IngressAclEntriesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "policy": "policy",
            "port": "port",
            "protocol": "protocol",
            "description": "description",
            "entry_type": "entryType",
            "network_acl_entry_name": "networkAclEntryName",
            "source_cidr_ip": "sourceCidrIp",
        },
    )
    class IngressAclEntriesProperty:
        def __init__(
            self,
            *,
            policy: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            port: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            entry_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            network_acl_entry_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            source_cidr_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param policy: 
            :param port: 
            :param protocol: 
            :param description: 
            :param entry_type: 
            :param network_acl_entry_name: 
            :param source_cidr_ip: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "policy": policy,
                "port": port,
                "protocol": protocol,
            }
            if description is not None:
                self._values["description"] = description
            if entry_type is not None:
                self._values["entry_type"] = entry_type
            if network_acl_entry_name is not None:
                self._values["network_acl_entry_name"] = network_acl_entry_name
            if source_cidr_ip is not None:
                self._values["source_cidr_ip"] = source_cidr_ip

        @builtins.property
        def policy(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            policy: The authorization policy. Valid values:
            accept: access permissions granted.
            drop: access permissions denied.
            '''
            result = self._values.get("policy")
            assert result is not None, "Required property 'policy' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def port(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            protocol: The transport layer protocols. Valid values:
            icmp
            gre
            tcp
            udp
            all: All protocols are supported.
            '''
            result = self._values.get("protocol")
            assert result is not None, "Required property 'protocol' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: The description of the ingress entry.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def entry_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            entryType: The type of the rule. Valid values:
            custom : custom rules.
            system : system rules.
            '''
            result = self._values.get("entry_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def network_acl_entry_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: networkAclEntryName: The name of the ingress entry.
            '''
            result = self._values.get("network_acl_entry_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def source_cidr_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: sourceCidrIp: Source address network segment.
            '''
            result = self._values.get("source_cidr_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IngressAclEntriesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosNetworkAclAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosNetworkAclAssociation",
):
    '''A ROS template type:  ``ALIYUN::VPC::NetworkAclAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosNetworkAclAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::NetworkAclAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkAclId")
    def attr_network_acl_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NetworkAclId: The ID of the network ACL.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkAclId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="networkAclId")
    def network_acl_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: networkAclId: The ID of the network ACL.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "networkAclId"))

    @network_acl_id.setter
    def network_acl_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "networkAclId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resources")
    def resources(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAclAssociation.ResourcesProperty"]]]:
        '''
        :Property: resources: The list of resources that need to be associated with network ACL.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAclAssociation.ResourcesProperty"]]], jsii.get(self, "resources"))

    @resources.setter
    def resources(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosNetworkAclAssociation.ResourcesProperty"]]],
    ) -> None:
        jsii.set(self, "resources", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosNetworkAclAssociation.ResourcesProperty",
        jsii_struct_bases=[],
        name_mapping={"resource_id": "resourceId", "resource_type": "resourceType"},
    )
    class ResourcesProperty:
        def __init__(
            self,
            *,
            resource_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            resource_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param resource_id: 
            :param resource_type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "resource_id": resource_id,
            }
            if resource_type is not None:
                self._values["resource_type"] = resource_type

        @builtins.property
        def resource_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: resourceId: The ID of the associated resource.
            '''
            result = self._values.get("resource_id")
            assert result is not None, "Required property 'resource_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def resource_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: resourceType: The type of the associated resource. Valid value: VSwitch.
            '''
            result = self._values.get("resource_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ResourcesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosNetworkAclAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"network_acl_id": "networkAclId", "resources": "resources"},
)
class RosNetworkAclAssociationProps:
    def __init__(
        self,
        *,
        network_acl_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        resources: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosNetworkAclAssociation.ResourcesProperty]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::NetworkAclAssociation``.

        :param network_acl_id: 
        :param resources: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "network_acl_id": network_acl_id,
            "resources": resources,
        }

    @builtins.property
    def network_acl_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: networkAclId: The ID of the network ACL.
        '''
        result = self._values.get("network_acl_id")
        assert result is not None, "Required property 'network_acl_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def resources(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosNetworkAclAssociation.ResourcesProperty]]]:
        '''
        :Property: resources: The list of resources that need to be associated with network ACL.
        '''
        result = self._values.get("resources")
        assert result is not None, "Required property 'resources' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosNetworkAclAssociation.ResourcesProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNetworkAclAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosNetworkAclProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "description": "description",
        "egress_acl_entries": "egressAclEntries",
        "ingress_acl_entries": "ingressAclEntries",
        "network_acl_name": "networkAclName",
    },
)
class RosNetworkAclProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        egress_acl_entries: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosNetworkAcl.EgressAclEntriesProperty]]]] = None,
        ingress_acl_entries: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosNetworkAcl.IngressAclEntriesProperty]]]] = None,
        network_acl_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::NetworkAcl``.

        :param vpc_id: 
        :param description: 
        :param egress_acl_entries: 
        :param ingress_acl_entries: 
        :param network_acl_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if egress_acl_entries is not None:
            self._values["egress_acl_entries"] = egress_acl_entries
        if ingress_acl_entries is not None:
            self._values["ingress_acl_entries"] = ingress_acl_entries
        if network_acl_name is not None:
            self._values["network_acl_name"] = network_acl_name

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the network ACL.
        The description must be 2 to 256 characters in length. The description must start
        with a letter but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def egress_acl_entries(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosNetworkAcl.EgressAclEntriesProperty]]]]:
        '''
        :Property: egressAclEntries: The list of egress network ACL entries.
        '''
        result = self._values.get("egress_acl_entries")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosNetworkAcl.EgressAclEntriesProperty]]]], result)

    @builtins.property
    def ingress_acl_entries(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosNetworkAcl.IngressAclEntriesProperty]]]]:
        '''
        :Property: ingressAclEntries: The list of ingress network ACL entries.
        '''
        result = self._values.get("ingress_acl_entries")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosNetworkAcl.IngressAclEntriesProperty]]]], result)

    @builtins.property
    def network_acl_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        networkAclName: The name of the network ACL.
        The name must be 2 to 128 characters in length and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
        start with http:// or https://.
        '''
        result = self._values.get("network_acl_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNetworkAclProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPeeringRouterInterfaceBinding(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBinding",
):
    '''A ROS template type:  ``ALIYUN::VPC::PeeringRouterInterfaceBinding``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPeeringRouterInterfaceBindingProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::PeeringRouterInterfaceBinding``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouterInterfaceId: The RouterInterface ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouterInterfaceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeInterfaceId")
    def opposite_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: oppositeInterfaceId: The connection peer RouterInterface ID.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "oppositeInterfaceId"))

    @opposite_interface_id.setter
    def opposite_interface_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "oppositeInterfaceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routerInterfaceId")
    def router_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "routerInterfaceId"))

    @router_interface_id.setter
    def router_interface_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "routerInterfaceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeInterfaceOwnerId")
    def opposite_interface_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "oppositeInterfaceOwnerId"))

    @opposite_interface_owner_id.setter
    def opposite_interface_owner_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "oppositeInterfaceOwnerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeRouterId")
    def opposite_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeRouterId: Router ID of the connection peer RouterInterface.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "oppositeRouterId"))

    @opposite_router_id.setter
    def opposite_router_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "oppositeRouterId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBindingProps",
    jsii_struct_bases=[],
    name_mapping={
        "opposite_interface_id": "oppositeInterfaceId",
        "router_interface_id": "routerInterfaceId",
        "opposite_interface_owner_id": "oppositeInterfaceOwnerId",
        "opposite_router_id": "oppositeRouterId",
    },
)
class RosPeeringRouterInterfaceBindingProps:
    def __init__(
        self,
        *,
        opposite_interface_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        router_interface_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        opposite_interface_owner_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_router_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::PeeringRouterInterfaceBinding``.

        :param opposite_interface_id: 
        :param router_interface_id: 
        :param opposite_interface_owner_id: 
        :param opposite_router_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "opposite_interface_id": opposite_interface_id,
            "router_interface_id": router_interface_id,
        }
        if opposite_interface_owner_id is not None:
            self._values["opposite_interface_owner_id"] = opposite_interface_owner_id
        if opposite_router_id is not None:
            self._values["opposite_router_id"] = opposite_router_id

    @builtins.property
    def opposite_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: oppositeInterfaceId: The connection peer RouterInterface ID.
        '''
        result = self._values.get("opposite_interface_id")
        assert result is not None, "Required property 'opposite_interface_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def router_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
        '''
        result = self._values.get("router_interface_id")
        assert result is not None, "Required property 'router_interface_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def opposite_interface_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
        '''
        result = self._values.get("opposite_interface_owner_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeRouterId: Router ID of the connection peer RouterInterface.
        '''
        result = self._values.get("opposite_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPeeringRouterInterfaceBindingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPeeringRouterInterfaceConnection(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceConnection",
):
    '''A ROS template type:  ``ALIYUN::VPC::PeeringRouterInterfaceConnection``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosPeeringRouterInterfaceConnectionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::PeeringRouterInterfaceConnection``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOppositeInterfaceId")
    def attr_opposite_interface_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OppositeInterfaceId: The receiver RouterInterface ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOppositeInterfaceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouterInterfaceId: The initiator RouterInterface ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouterInterfaceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeInterfaceId")
    def opposite_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "oppositeInterfaceId"))

    @opposite_interface_id.setter
    def opposite_interface_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "oppositeInterfaceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routerInterfaceId")
    def router_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "routerInterfaceId"))

    @router_interface_id.setter
    def router_interface_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "routerInterfaceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "opposite_interface_id": "oppositeInterfaceId",
        "router_interface_id": "routerInterfaceId",
    },
)
class RosPeeringRouterInterfaceConnectionProps:
    def __init__(
        self,
        *,
        opposite_interface_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        router_interface_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::PeeringRouterInterfaceConnection``.

        :param opposite_interface_id: 
        :param router_interface_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "opposite_interface_id": opposite_interface_id,
            "router_interface_id": router_interface_id,
        }

    @builtins.property
    def opposite_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
        '''
        result = self._values.get("opposite_interface_id")
        assert result is not None, "Required property 'opposite_interface_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def router_interface_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
        '''
        result = self._values.get("router_interface_id")
        assert result is not None, "Required property 'router_interface_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPeeringRouterInterfaceConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRouteTable(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosRouteTable",
):
    '''A ROS template type:  ``ALIYUN::VPC::RouteTable``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRouteTableProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::RouteTable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteTableId: The ID of the route table.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTableName")
    def attr_route_table_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteTableName: The name of the route table.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTableName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTableType")
    def attr_route_table_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteTableType: The type of the route table.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTableType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: The ID of the VRouter to which the route table belongs.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchIds: A list of VSwitches under the VPC.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC to which the custom route table belongs.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the route table.
        The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routeTableName")
    def route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        routeTableName: The name of the route table.
        The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "routeTableName"))

    @route_table_name.setter
    def route_table_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "routeTableName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosRouteTable.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosRouteTable.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosRouteTable.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosRouteTable.TagsProperty",
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


class RosRouteTableAssociation(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosRouteTableAssociation",
):
    '''A ROS template type:  ``ALIYUN::VPC::RouteTableAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRouteTableAssociationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::RouteTableAssociation``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteTableId: The ID of the route table.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchId: The VSwitch ID which the route table associated with.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routeTableId")
    def route_table_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routeTableId: The ID of the route table.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "routeTableId"))

    @route_table_id.setter
    def route_table_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "routeTableId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosRouteTableAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"route_table_id": "routeTableId", "v_switch_id": "vSwitchId"},
)
class RosRouteTableAssociationProps:
    def __init__(
        self,
        *,
        route_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::RouteTableAssociation``.

        :param route_table_id: 
        :param v_switch_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "route_table_id": route_table_id,
            "v_switch_id": v_switch_id,
        }

    @builtins.property
    def route_table_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routeTableId: The ID of the route table.
        '''
        result = self._values.get("route_table_id")
        assert result is not None, "Required property 'route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The ID of the VSwitch.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouteTableAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosRouteTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "description": "description",
        "route_table_name": "routeTableName",
        "tags": "tags",
    },
)
class RosRouteTableProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        route_table_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosRouteTable.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::RouteTable``.

        :param vpc_id: 
        :param description: 
        :param route_table_name: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if route_table_name is not None:
            self._values["route_table_name"] = route_table_name
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC to which the custom route table belongs.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the route table.
        The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        routeTableName: The name of the route table.
        The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
        '''
        result = self._values.get("route_table_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosRouteTable.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosRouteTable.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouteTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRouterInterface(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosRouterInterface",
):
    '''A ROS template type:  ``ALIYUN::VPC::RouterInterface``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRouterInterfaceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::RouterInterface``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouterInterfaceId: The ID of created RouterInterface.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouterInterfaceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="role")
    def role(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "role"))

    @role.setter
    def role(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "role", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routerId")
    def router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routerId: The router ID to create RouterInterface.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "routerId"))

    @router_id.setter
    def router_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "routerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="accessPointId")
    def access_point_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "accessPointId"))

    @access_point_id.setter
    def access_point_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "accessPointId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Indicates whether automatic payment is enabled. Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckSourceIp")
    def health_check_source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckSourceIp"))

    @health_check_source_ip.setter
    def health_check_source_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "healthCheckSourceIp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckTargetIp")
    def health_check_target_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "healthCheckTargetIp"))

    @health_check_target_ip.setter
    def health_check_target_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "healthCheckTargetIp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeAccessPointId")
    def opposite_access_point_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "oppositeAccessPointId"))

    @opposite_access_point_id.setter
    def opposite_access_point_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "oppositeAccessPointId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeInterfaceId")
    def opposite_interface_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeInterfaceId: The ID of the peer router interface.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "oppositeInterfaceId"))

    @opposite_interface_id.setter
    def opposite_interface_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "oppositeInterfaceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeInterfaceOwnerId")
    def opposite_interface_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "oppositeInterfaceOwnerId"))

    @opposite_interface_owner_id.setter
    def opposite_interface_owner_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "oppositeInterfaceOwnerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeRegionId")
    def opposite_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "oppositeRegionId"))

    @opposite_region_id.setter
    def opposite_region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "oppositeRegionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeRouterId")
    def opposite_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeRouterId: The router ID of the connection peer RouterInterface.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "oppositeRouterId"))

    @opposite_router_id.setter
    def opposite_router_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "oppositeRouterId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="oppositeRouterType")
    def opposite_router_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "oppositeRouterType"))

    @opposite_router_type.setter
    def opposite_router_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "oppositeRouterType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routerType")
    def router_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: routerType: Router type. Now support 'VRouter|VBR'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "routerType"))

    @router_type.setter
    def router_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "routerType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="spec")
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "spec"))

    @spec.setter
    def spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "spec", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosRouterInterfaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "role": "role",
        "router_id": "routerId",
        "access_point_id": "accessPointId",
        "auto_pay": "autoPay",
        "description": "description",
        "health_check_source_ip": "healthCheckSourceIp",
        "health_check_target_ip": "healthCheckTargetIp",
        "instance_charge_type": "instanceChargeType",
        "name": "name",
        "opposite_access_point_id": "oppositeAccessPointId",
        "opposite_interface_id": "oppositeInterfaceId",
        "opposite_interface_owner_id": "oppositeInterfaceOwnerId",
        "opposite_region_id": "oppositeRegionId",
        "opposite_router_id": "oppositeRouterId",
        "opposite_router_type": "oppositeRouterType",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "router_type": "routerType",
        "spec": "spec",
    },
)
class RosRouterInterfaceProps:
    def __init__(
        self,
        *,
        role: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        router_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        access_point_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_source_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_target_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_access_point_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_interface_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_interface_owner_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_router_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_router_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        router_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::RouterInterface``.

        :param role: 
        :param router_id: 
        :param access_point_id: 
        :param auto_pay: 
        :param description: 
        :param health_check_source_ip: 
        :param health_check_target_ip: 
        :param instance_charge_type: 
        :param name: 
        :param opposite_access_point_id: 
        :param opposite_interface_id: 
        :param opposite_interface_owner_id: 
        :param opposite_region_id: 
        :param opposite_router_id: 
        :param opposite_router_type: 
        :param period: 
        :param pricing_cycle: 
        :param router_type: 
        :param spec: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "role": role,
            "router_id": router_id,
        }
        if access_point_id is not None:
            self._values["access_point_id"] = access_point_id
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if description is not None:
            self._values["description"] = description
        if health_check_source_ip is not None:
            self._values["health_check_source_ip"] = health_check_source_ip
        if health_check_target_ip is not None:
            self._values["health_check_target_ip"] = health_check_target_ip
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if name is not None:
            self._values["name"] = name
        if opposite_access_point_id is not None:
            self._values["opposite_access_point_id"] = opposite_access_point_id
        if opposite_interface_id is not None:
            self._values["opposite_interface_id"] = opposite_interface_id
        if opposite_interface_owner_id is not None:
            self._values["opposite_interface_owner_id"] = opposite_interface_owner_id
        if opposite_region_id is not None:
            self._values["opposite_region_id"] = opposite_region_id
        if opposite_router_id is not None:
            self._values["opposite_router_id"] = opposite_router_id
        if opposite_router_type is not None:
            self._values["opposite_router_type"] = opposite_router_type
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if router_type is not None:
            self._values["router_type"] = router_type
        if spec is not None:
            self._values["spec"] = spec

    @builtins.property
    def role(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
        '''
        result = self._values.get("role")
        assert result is not None, "Required property 'role' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routerId: The router ID to create RouterInterface.
        '''
        result = self._values.get("router_id")
        assert result is not None, "Required property 'router_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def access_point_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
        '''
        result = self._values.get("access_point_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Indicates whether automatic payment is enabled. Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        '''
        result = self._values.get("health_check_source_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_target_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        '''
        result = self._values.get("health_check_target_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_access_point_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
        '''
        result = self._values.get("opposite_access_point_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_interface_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeInterfaceId: The ID of the peer router interface.
        '''
        result = self._values.get("opposite_interface_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_interface_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
        '''
        result = self._values.get("opposite_interface_owner_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
        '''
        result = self._values.get("opposite_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeRouterId: The router ID of the connection peer RouterInterface.
        '''
        result = self._values.get("opposite_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_router_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
        '''
        result = self._values.get("opposite_router_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def router_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: routerType: Router type. Now support 'VRouter|VBR'
        '''
        result = self._values.get("router_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
        '''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRouterInterfaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSnatEntry(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosSnatEntry",
):
    '''A ROS template type:  ``ALIYUN::VPC::SnatEntry``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSnatEntryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::SnatEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSnatEntryIds")
    def attr_snat_entry_ids(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SnatEntryIds: The IDS of the SNAT entry.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSnatEntryIds"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="snatIp")
    def snat_ip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: snatIp: The public IP address. Separate multiple EIPs with commas.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "snatIp"))

    @snat_ip.setter
    def snat_ip(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "snatIp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="snatTableId")
    def snat_table_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: snatTableId: The ID of the SNAT table.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "snatTableId"))

    @snat_table_id.setter
    def snat_table_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "snatTableId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="snatEntryName")
    def snat_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "snatEntryName"))

    @snat_entry_name.setter
    def snat_entry_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "snatEntryName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceCidr")
    def source_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sourceCidr"))

    @source_cidr.setter
    def source_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sourceCidr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceVSwitchIds")
    def source_v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: sourceVSwitchIds: The ID of the VSwitch to access the Internet.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "sourceVSwitchIds"))

    @source_v_switch_ids.setter
    def source_v_switch_ids(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sourceVSwitchIds", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosSnatEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "snat_ip": "snatIp",
        "snat_table_id": "snatTableId",
        "snat_entry_name": "snatEntryName",
        "source_cidr": "sourceCidr",
        "source_v_switch_ids": "sourceVSwitchIds",
    },
)
class RosSnatEntryProps:
    def __init__(
        self,
        *,
        snat_ip: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        snat_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        snat_entry_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source_v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::SnatEntry``.

        :param snat_ip: 
        :param snat_table_id: 
        :param snat_entry_name: 
        :param source_cidr: 
        :param source_v_switch_ids: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "snat_ip": snat_ip,
            "snat_table_id": snat_table_id,
        }
        if snat_entry_name is not None:
            self._values["snat_entry_name"] = snat_entry_name
        if source_cidr is not None:
            self._values["source_cidr"] = source_cidr
        if source_v_switch_ids is not None:
            self._values["source_v_switch_ids"] = source_v_switch_ids

    @builtins.property
    def snat_ip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: snatIp: The public IP address. Separate multiple EIPs with commas.
        '''
        result = self._values.get("snat_ip")
        assert result is not None, "Required property 'snat_ip' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def snat_table_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: snatTableId: The ID of the SNAT table.
        '''
        result = self._values.get("snat_table_id")
        assert result is not None, "Required property 'snat_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def snat_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        '''
        result = self._values.get("snat_entry_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        '''
        result = self._values.get("source_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: sourceVSwitchIds: The ID of the VSwitch to access the Internet.
        '''
        result = self._values.get("source_v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSnatEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSslVpnClientCert(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosSslVpnClientCert",
):
    '''A ROS template type:  ``ALIYUN::VPC::SslVpnClientCert``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSslVpnClientCertProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::SslVpnClientCert``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSslVpnClientCertId")
    def attr_ssl_vpn_client_cert_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SslVpnClientCertId: The ID of the client certificate.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSslVpnClientCertId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sslVpnServerId")
    def ssl_vpn_server_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sslVpnServerId: ID of the SSL-VPN server.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sslVpnServerId"))

    @ssl_vpn_server_id.setter
    def ssl_vpn_server_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sslVpnServerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the client certificate.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosSslVpnClientCertProps",
    jsii_struct_bases=[],
    name_mapping={"ssl_vpn_server_id": "sslVpnServerId", "name": "name"},
)
class RosSslVpnClientCertProps:
    def __init__(
        self,
        *,
        ssl_vpn_server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::SslVpnClientCert``.

        :param ssl_vpn_server_id: 
        :param name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ssl_vpn_server_id": ssl_vpn_server_id,
        }
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def ssl_vpn_server_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sslVpnServerId: ID of the SSL-VPN server.
        '''
        result = self._values.get("ssl_vpn_server_id")
        assert result is not None, "Required property 'ssl_vpn_server_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the client certificate.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSslVpnClientCertProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSslVpnServer(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosSslVpnServer",
):
    '''A ROS template type:  ``ALIYUN::VPC::SslVpnServer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosSslVpnServerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::SslVpnServer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSslVpnServerId")
    def attr_ssl_vpn_server_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SslVpnServerId: ID of the SSL-VPN server.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSslVpnServerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clientIpPool")
    def client_ip_pool(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
        When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        The network segment cannot conflict with the LocalSubnet address segment.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "clientIpPool"))

    @client_ip_pool.setter
    def client_ip_pool(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "clientIpPool", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localSubnet")
    def local_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
        The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "localSubnet"))

    @local_subnet.setter
    def local_subnet(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "localSubnet", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpnGatewayId")
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpnGatewayId: ID of the VPN gateway.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpnGatewayId"))

    @vpn_gateway_id.setter
    def vpn_gateway_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpnGatewayId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cipher")
    def cipher(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cipher: The encryption algorithm used by SSL-VPN. Value:
        AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "cipher"))

    @cipher.setter
    def cipher(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cipher", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="compress")
    def compress(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: compress: Whether it is compressed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "compress"))

    @compress.setter
    def compress(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "compress", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        But it can't start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="port")
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
        22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "port"))

    @port.setter
    def port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "port", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="proto")
    def proto(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "proto"))

    @proto.setter
    def proto(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "proto", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosSslVpnServerProps",
    jsii_struct_bases=[],
    name_mapping={
        "client_ip_pool": "clientIpPool",
        "local_subnet": "localSubnet",
        "vpn_gateway_id": "vpnGatewayId",
        "cipher": "cipher",
        "compress": "compress",
        "name": "name",
        "port": "port",
        "proto": "proto",
    },
)
class RosSslVpnServerProps:
    def __init__(
        self,
        *,
        client_ip_pool: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        local_subnet: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpn_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cipher: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        compress: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        proto: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::SslVpnServer``.

        :param client_ip_pool: 
        :param local_subnet: 
        :param vpn_gateway_id: 
        :param cipher: 
        :param compress: 
        :param name: 
        :param port: 
        :param proto: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "client_ip_pool": client_ip_pool,
            "local_subnet": local_subnet,
            "vpn_gateway_id": vpn_gateway_id,
        }
        if cipher is not None:
            self._values["cipher"] = cipher
        if compress is not None:
            self._values["compress"] = compress
        if name is not None:
            self._values["name"] = name
        if port is not None:
            self._values["port"] = port
        if proto is not None:
            self._values["proto"] = proto

    @builtins.property
    def client_ip_pool(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
        When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        The network segment cannot conflict with the LocalSubnet address segment.
        '''
        result = self._values.get("client_ip_pool")
        assert result is not None, "Required property 'client_ip_pool' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def local_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
        The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
        '''
        result = self._values.get("local_subnet")
        assert result is not None, "Required property 'local_subnet' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpnGatewayId: ID of the VPN gateway.
        '''
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cipher(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        cipher: The encryption algorithm used by SSL-VPN. Value:
        AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        '''
        result = self._values.get("cipher")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def compress(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: compress: Whether it is compressed.
        '''
        result = self._values.get("compress")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        But it can't start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
        22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        '''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def proto(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
        '''
        result = self._values.get("proto")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSslVpnServerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVirtualBorderRouter(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosVirtualBorderRouter",
):
    '''A ROS template type:  ``ALIYUN::VPC::VirtualBorderRouter``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVirtualBorderRouterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::VirtualBorderRouter``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: The name of the VBR.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteTableId: The ID of the route table of the VBR.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrId")
    def attr_vbr_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VbrId: The ID of the VBR.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVlanInterfaceId")
    def attr_vlan_interface_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VlanInterfaceId: The ID of the VBR interface.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVlanInterfaceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localGatewayIp")
    def local_gateway_ip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "localGatewayIp"))

    @local_gateway_ip.setter
    def local_gateway_ip(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "localGatewayIp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="peerGatewayIp")
    def peer_gateway_ip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        peerGatewayIp: The IP address of the peer router interface of the VBR.
        Only the owner of the VBR can set or modify the value.
        This parameter is required when you create a VBR for the owner of the physical connection.
        You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "peerGatewayIp"))

    @peer_gateway_ip.setter
    def peer_gateway_ip(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "peerGatewayIp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="peeringSubnetMask")
    def peering_subnet_mask(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the
        user side.
        The two IP addresses must fall within the same subnet.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "peeringSubnetMask"))

    @peering_subnet_mask.setter
    def peering_subnet_mask(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "peeringSubnetMask", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="physicalConnectionId")
    def physical_connection_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: physicalConnectionId: The ID of the physical connection.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "physicalConnectionId"))

    @physical_connection_id.setter
    def physical_connection_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "physicalConnectionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vlanId")
    def vlan_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        vlanId: The VLAN ID of the VBR. Valid values: 0 to 2999.
        Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
        two VBRs of the same physical connection must be different.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "vlanId"))

    @vlan_id.setter
    def vlan_id(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vlanId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="circuitCode")
    def circuit_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical
        connection.
        Note Only the owner of the physical connection can set this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "circuitCode"))

    @circuit_code.setter
    def circuit_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "circuitCode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the VBR.
        The description must be 2 to 256 characters in length. It must start with a letter
        but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the VBR.
        The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
        underscores (_), and hyphens (-). The name cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosVirtualBorderRouterProps",
    jsii_struct_bases=[],
    name_mapping={
        "local_gateway_ip": "localGatewayIp",
        "peer_gateway_ip": "peerGatewayIp",
        "peering_subnet_mask": "peeringSubnetMask",
        "physical_connection_id": "physicalConnectionId",
        "vlan_id": "vlanId",
        "circuit_code": "circuitCode",
        "description": "description",
        "name": "name",
    },
)
class RosVirtualBorderRouterProps:
    def __init__(
        self,
        *,
        local_gateway_ip: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        peer_gateway_ip: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        peering_subnet_mask: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        physical_connection_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vlan_id: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        circuit_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::VirtualBorderRouter``.

        :param local_gateway_ip: 
        :param peer_gateway_ip: 
        :param peering_subnet_mask: 
        :param physical_connection_id: 
        :param vlan_id: 
        :param circuit_code: 
        :param description: 
        :param name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "local_gateway_ip": local_gateway_ip,
            "peer_gateway_ip": peer_gateway_ip,
            "peering_subnet_mask": peering_subnet_mask,
            "physical_connection_id": physical_connection_id,
            "vlan_id": vlan_id,
        }
        if circuit_code is not None:
            self._values["circuit_code"] = circuit_code
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def local_gateway_ip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
        '''
        result = self._values.get("local_gateway_ip")
        assert result is not None, "Required property 'local_gateway_ip' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def peer_gateway_ip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        peerGatewayIp: The IP address of the peer router interface of the VBR.
        Only the owner of the VBR can set or modify the value.
        This parameter is required when you create a VBR for the owner of the physical connection.
        You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
        '''
        result = self._values.get("peer_gateway_ip")
        assert result is not None, "Required property 'peer_gateway_ip' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def peering_subnet_mask(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the
        user side.
        The two IP addresses must fall within the same subnet.
        '''
        result = self._values.get("peering_subnet_mask")
        assert result is not None, "Required property 'peering_subnet_mask' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def physical_connection_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: physicalConnectionId: The ID of the physical connection.
        '''
        result = self._values.get("physical_connection_id")
        assert result is not None, "Required property 'physical_connection_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vlan_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        vlanId: The VLAN ID of the VBR. Valid values: 0 to 2999.
        Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
        two VBRs of the same physical connection must be different.
        '''
        result = self._values.get("vlan_id")
        assert result is not None, "Required property 'vlan_id' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def circuit_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical
        connection.
        Note Only the owner of the physical connection can set this parameter.
        '''
        result = self._values.get("circuit_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: The description of the VBR.
        The description must be 2 to 256 characters in length. It must start with a letter
        but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the VBR.
        The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
        underscores (_), and hyphens (-). The name cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVirtualBorderRouterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpnConnection(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnConnection",
):
    '''A ROS template type:  ``ALIYUN::VPC::VpnConnection``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVpnConnectionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::VpnConnection``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPeerVpnConnectionConfig")
    def attr_peer_vpn_connection_config(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PeerVpnConnectionConfig: Peer vpc connection config.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPeerVpnConnectionConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Status: Status of the IPsec connection.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpnConnectionId")
    def attr_vpn_connection_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpnConnectionId: ID of the IPsec connection.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpnConnectionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="customerGatewayId")
    def customer_gateway_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: customerGatewayId: The ID of the user gateway.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "customerGatewayId"))

    @customer_gateway_id.setter
    def customer_gateway_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "customerGatewayId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localSubnet")
    def local_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
        Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "localSubnet"))

    @local_subnet.setter
    def local_subnet(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "localSubnet", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="remoteSubnet")
    def remote_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
        Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "remoteSubnet"))

    @remote_subnet.setter
    def remote_subnet(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "remoteSubnet", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpnGatewayId")
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpnGatewayId: ID of the VPN gateway.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpnGatewayId"))

    @vpn_gateway_id.setter
    def vpn_gateway_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpnGatewayId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="effectImmediately")
    def effect_immediately(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
        True: Negotiate immediately after the configuration is complete.
        False (default): Negotiate when traffic enters.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "effectImmediately"))

    @effect_immediately.setter
    def effect_immediately(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "effectImmediately", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheckConfig")
    def health_check_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.HealthCheckConfigProperty"]]:
        '''
        :Property: healthCheckConfig: Whether to enable the health check configuration.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.HealthCheckConfigProperty"]], jsii.get(self, "healthCheckConfig"))

    @health_check_config.setter
    def health_check_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.HealthCheckConfigProperty"]],
    ) -> None:
        jsii.set(self, "healthCheckConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ikeConfig")
    def ike_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.IkeConfigProperty"]]:
        '''
        :Property: ikeConfig: Configuration information for the first phase of negotiation.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.IkeConfigProperty"]], jsii.get(self, "ikeConfig"))

    @ike_config.setter
    def ike_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.IkeConfigProperty"]],
    ) -> None:
        jsii.set(self, "ikeConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ipsecConfig")
    def ipsec_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.IpsecConfigProperty"]]:
        '''
        :Property: ipsecConfig: Configuration information for the second phase negotiation.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.IpsecConfigProperty"]], jsii.get(self, "ipsecConfig"))

    @ipsec_config.setter
    def ipsec_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosVpnConnection.IpsecConfigProperty"]],
    ) -> None:
        jsii.set(self, "ipsecConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the IPsec connection.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosVpnConnection.HealthCheckConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "dip": "dip",
            "enable": "enable",
            "interval": "interval",
            "retry": "retry",
            "sip": "sip",
        },
    )
    class HealthCheckConfigProperty:
        def __init__(
            self,
            *,
            dip: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            retry: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            sip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param dip: 
            :param enable: 
            :param interval: 
            :param retry: 
            :param sip: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if dip is not None:
                self._values["dip"] = dip
            if enable is not None:
                self._values["enable"] = enable
            if interval is not None:
                self._values["interval"] = interval
            if retry is not None:
                self._values["retry"] = retry
            if sip is not None:
                self._values["sip"] = sip

        @builtins.property
        def dip(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: dip:
            '''
            result = self._values.get("dip")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def enable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property: enable:
            '''
            result = self._values.get("enable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def interval(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: interval:
            '''
            result = self._values.get("interval")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def retry(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: retry:
            '''
            result = self._values.get("retry")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: sip:
            '''
            result = self._values.get("sip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HealthCheckConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosVpnConnection.IkeConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ike_auth_alg": "ikeAuthAlg",
            "ike_enc_alg": "ikeEncAlg",
            "ike_lifetime": "ikeLifetime",
            "ike_mode": "ikeMode",
            "ike_pfs": "ikePfs",
            "ike_version": "ikeVersion",
            "local_id_i_psec": "localIdIPsec",
            "psk": "psk",
            "remote_id": "remoteId",
        },
    )
    class IkeConfigProperty:
        def __init__(
            self,
            *,
            ike_auth_alg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ike_enc_alg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ike_lifetime: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ike_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ike_pfs: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ike_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            local_id_i_psec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            psk: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            remote_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param ike_auth_alg: 
            :param ike_enc_alg: 
            :param ike_lifetime: 
            :param ike_mode: 
            :param ike_pfs: 
            :param ike_version: 
            :param local_id_i_psec: 
            :param psk: 
            :param remote_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if ike_auth_alg is not None:
                self._values["ike_auth_alg"] = ike_auth_alg
            if ike_enc_alg is not None:
                self._values["ike_enc_alg"] = ike_enc_alg
            if ike_lifetime is not None:
                self._values["ike_lifetime"] = ike_lifetime
            if ike_mode is not None:
                self._values["ike_mode"] = ike_mode
            if ike_pfs is not None:
                self._values["ike_pfs"] = ike_pfs
            if ike_version is not None:
                self._values["ike_version"] = ike_version
            if local_id_i_psec is not None:
                self._values["local_id_i_psec"] = local_id_i_psec
            if psk is not None:
                self._values["psk"] = psk
            if remote_id is not None:
                self._values["remote_id"] = remote_id

        @builtins.property
        def ike_auth_alg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikeAuthAlg: The authentication algorithm negotiated in the first phase, the value is md5|sha1, and the default value is md5.
            '''
            result = self._values.get("ike_auth_alg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ike_enc_alg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikeEncAlg: The encryption algorithm negotiated in the first phase, value: aes|aes192|aes256|des|3des, default value: aes.
            '''
            result = self._values.get("ike_enc_alg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ike_lifetime(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikeLifetime: The life cycle of the SA negotiated in the first phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
            '''
            result = self._values.get("ike_lifetime")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ike_mode(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikeMode: Negotiation mode for IKE V1. Value: main|aggressive, default: main.
            '''
            result = self._values.get("ike_mode")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ike_pfs(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikePfs: Diffie-Hellman key exchange algorithm used in the first phase negotiation. Value: group1|group2|group5|group14|group24, default value: group2.
            '''
            result = self._values.get("ike_pfs")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ike_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ikeVersion: The version of the IKE protocol. Value: ikev1|ikev2, default: ikev1.
            '''
            result = self._values.get("ike_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def local_id_i_psec(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: localIdIPsec: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
            '''
            result = self._values.get("local_id_i_psec")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def psk(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: psk: Used for identity authentication between the IPsec VPN gateway and the user gateway. It is generated randomly by default, or you can specify the key manually. The length is limited to 100 characters.
            '''
            result = self._values.get("psk")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def remote_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: remoteId: ID of the user gateway. The length is limited to 100 characters. The default value is the public IP address of the user gateway.
            '''
            result = self._values.get("remote_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IkeConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosVpnConnection.IpsecConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "ipsec_auth_alg": "ipsecAuthAlg",
            "ipsec_enc_alg": "ipsecEncAlg",
            "ipsec_lifetime": "ipsecLifetime",
            "ipsec_pfs": "ipsecPfs",
        },
    )
    class IpsecConfigProperty:
        def __init__(
            self,
            *,
            ipsec_auth_alg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ipsec_enc_alg: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            ipsec_lifetime: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            ipsec_pfs: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param ipsec_auth_alg: 
            :param ipsec_enc_alg: 
            :param ipsec_lifetime: 
            :param ipsec_pfs: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if ipsec_auth_alg is not None:
                self._values["ipsec_auth_alg"] = ipsec_auth_alg
            if ipsec_enc_alg is not None:
                self._values["ipsec_enc_alg"] = ipsec_enc_alg
            if ipsec_lifetime is not None:
                self._values["ipsec_lifetime"] = ipsec_lifetime
            if ipsec_pfs is not None:
                self._values["ipsec_pfs"] = ipsec_pfs

        @builtins.property
        def ipsec_auth_alg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ipsecAuthAlg: Authentication algorithm negotiated in the second phase. Value: md5|sha1, default value: md5.
            '''
            result = self._values.get("ipsec_auth_alg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ipsec_enc_alg(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ipsecEncAlg: Encryption algorithm negotiated in the second phase. Value: aes|aes192|aes256|des|3des, default value: aes.
            '''
            result = self._values.get("ipsec_enc_alg")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ipsec_lifetime(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
            '''
            result = self._values.get("ipsec_lifetime")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def ipsec_pfs(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: ipsecPfs: Forwards all protocol packets. The Diffie-Hellman key exchange algorithm used in the first phase negotiation, the value: group1|group2|group5|group14|group24, default value: group2.
            '''
            result = self._values.get("ipsec_pfs")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IpsecConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "customer_gateway_id": "customerGatewayId",
        "local_subnet": "localSubnet",
        "remote_subnet": "remoteSubnet",
        "vpn_gateway_id": "vpnGatewayId",
        "effect_immediately": "effectImmediately",
        "health_check_config": "healthCheckConfig",
        "ike_config": "ikeConfig",
        "ipsec_config": "ipsecConfig",
        "name": "name",
    },
)
class RosVpnConnectionProps:
    def __init__(
        self,
        *,
        customer_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        local_subnet: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        remote_subnet: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpn_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        effect_immediately: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        health_check_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.HealthCheckConfigProperty]] = None,
        ike_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IkeConfigProperty]] = None,
        ipsec_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IpsecConfigProperty]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::VpnConnection``.

        :param customer_gateway_id: 
        :param local_subnet: 
        :param remote_subnet: 
        :param vpn_gateway_id: 
        :param effect_immediately: 
        :param health_check_config: 
        :param ike_config: 
        :param ipsec_config: 
        :param name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "customer_gateway_id": customer_gateway_id,
            "local_subnet": local_subnet,
            "remote_subnet": remote_subnet,
            "vpn_gateway_id": vpn_gateway_id,
        }
        if effect_immediately is not None:
            self._values["effect_immediately"] = effect_immediately
        if health_check_config is not None:
            self._values["health_check_config"] = health_check_config
        if ike_config is not None:
            self._values["ike_config"] = ike_config
        if ipsec_config is not None:
            self._values["ipsec_config"] = ipsec_config
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def customer_gateway_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: customerGatewayId: The ID of the user gateway.
        '''
        result = self._values.get("customer_gateway_id")
        assert result is not None, "Required property 'customer_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def local_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
        Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        '''
        result = self._values.get("local_subnet")
        assert result is not None, "Required property 'local_subnet' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def remote_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
        Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        '''
        result = self._values.get("remote_subnet")
        assert result is not None, "Required property 'remote_subnet' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpnGatewayId: ID of the VPN gateway.
        '''
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def effect_immediately(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
        True: Negotiate immediately after the configuration is complete.
        False (default): Negotiate when traffic enters.
        '''
        result = self._values.get("effect_immediately")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.HealthCheckConfigProperty]]:
        '''
        :Property: healthCheckConfig: Whether to enable the health check configuration.
        '''
        result = self._values.get("health_check_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.HealthCheckConfigProperty]], result)

    @builtins.property
    def ike_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IkeConfigProperty]]:
        '''
        :Property: ikeConfig: Configuration information for the first phase of negotiation.
        '''
        result = self._values.get("ike_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IkeConfigProperty]], result)

    @builtins.property
    def ipsec_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IpsecConfigProperty]]:
        '''
        :Property: ipsecConfig: Configuration information for the second phase negotiation.
        '''
        result = self._values.get("ipsec_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IpsecConfigProperty]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: The name of the IPsec connection.
        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpnConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpnGateway(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnGateway",
):
    '''A ROS template type:  ``ALIYUN::VPC::VpnGateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVpnGatewayProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::VpnGateway``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetIp")
    def attr_internet_ip(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InternetIp: The public IP address of the VPN gateway.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: The order ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Spec: The specification of the VPN gateway.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSpec"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSslMaxConnections")
    def attr_ssl_max_connections(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSslMaxConnections"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpnGatewayId")
    def attr_vpn_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpnGatewayId: ID of the VPN gateway.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpnGatewayId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
        Value: 5|10|20|50|100|200.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VPC ID to which the VPN gateway belongs.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
        true: Automatically pays the bill for the VPN gateway.
        false (default): Does not automatically pay the bill for the VPN gateway.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: Description of the VPN gateway.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableIpsec")
    def enable_ipsec(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
        True (default): Enables the IPsec-VPN feature.
        False: The IPsec-VPN function is not enabled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableIpsec"))

    @enable_ipsec.setter
    def enable_ipsec(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableIpsec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableSsl")
    def enable_ssl(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
        True: Enable SSL-VPN.
        False (default): Does not enable SSL-VPN.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enableSsl"))

    @enable_ssl.setter
    def enable_ssl(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enableSsl", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        instanceChargeType: Accounting type of the VPN gateway, the value is:
        PREPAY, POSTPAY
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "instanceChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
        The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: Purchase time, value: 1~9|12|24|36.
        When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sslConnections")
    def ssl_connections(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: sslConnections: The maximum number of clients allowed to connect at the same time.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "sslConnections"))

    @ssl_connections.setter
    def ssl_connections(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "sslConnections", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosVpnGateway.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosVpnGateway.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosVpnGateway.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vSwitchId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-vpc.RosVpnGateway.TagsProperty",
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
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "vpc_id": "vpcId",
        "auto_pay": "autoPay",
        "description": "description",
        "enable_ipsec": "enableIpsec",
        "enable_ssl": "enableSsl",
        "instance_charge_type": "instanceChargeType",
        "name": "name",
        "period": "period",
        "ssl_connections": "sslConnections",
        "tags": "tags",
        "v_switch_id": "vSwitchId",
    },
)
class RosVpnGatewayProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable_ipsec: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_ssl: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ssl_connections: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosVpnGateway.TagsProperty]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::VpnGateway``.

        :param bandwidth: 
        :param vpc_id: 
        :param auto_pay: 
        :param description: 
        :param enable_ipsec: 
        :param enable_ssl: 
        :param instance_charge_type: 
        :param name: 
        :param period: 
        :param ssl_connections: 
        :param tags: 
        :param v_switch_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
            "vpc_id": vpc_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if description is not None:
            self._values["description"] = description
        if enable_ipsec is not None:
            self._values["enable_ipsec"] = enable_ipsec
        if enable_ssl is not None:
            self._values["enable_ssl"] = enable_ssl
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if name is not None:
            self._values["name"] = name
        if period is not None:
            self._values["period"] = period
        if ssl_connections is not None:
            self._values["ssl_connections"] = ssl_connections
        if tags is not None:
            self._values["tags"] = tags
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
        Value: 5|10|20|50|100|200.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: VPC ID to which the VPN gateway belongs.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
        true: Automatically pays the bill for the VPN gateway.
        false (default): Does not automatically pay the bill for the VPN gateway.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        description: Description of the VPN gateway.
        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_ipsec(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
        True (default): Enables the IPsec-VPN feature.
        False: The IPsec-VPN function is not enabled.
        '''
        result = self._values.get("enable_ipsec")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_ssl(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
        True: Enable SSL-VPN.
        False (default): Does not enable SSL-VPN.
        '''
        result = self._values.get("enable_ssl")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        instanceChargeType: Accounting type of the VPN gateway, the value is:
        PREPAY, POSTPAY
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
        The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        period: Purchase time, value: 1~9|12|24|36.
        When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_connections(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: sslConnections: The maximum number of clients allowed to connect at the same time.
        '''
        result = self._values.get("ssl_connections")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosVpnGateway.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosVpnGateway.TagsProperty]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpnGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpnPbrRouteEntry(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnPbrRouteEntry",
):
    '''A ROS template type:  ``ALIYUN::VPC::VpnPbrRouteEntry``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVpnPbrRouteEntryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::VpnPbrRouteEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNextHop")
    def attr_next_hop(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NextHop: The next hop of the destination route entry.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNextHop"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteDest")
    def attr_route_dest(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteDest: The destination CIDR block of the destination route.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteDest"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteSource")
    def attr_route_source(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteSource: The destination CIDR block of the policy-based route.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteSource"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpnGatewayId")
    def attr_vpn_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpnGatewayId: The ID of the VPN Gateway.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpnGatewayId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="nextHop")
    def next_hop(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: nextHop: The next hop of the destination route entry.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "nextHop"))

    @next_hop.setter
    def next_hop(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "nextHop", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="publishVpc")
    def publish_vpc(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property:

        publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
        true: Publish the destination route to the VPC.
        false: Do not publish the destination route to the VPC.
        '''
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], jsii.get(self, "publishVpc"))

    @publish_vpc.setter
    def publish_vpc(
        self,
        value: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "publishVpc", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routeDest")
    def route_dest(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routeDest: The destination CIDR block of the destination route.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "routeDest"))

    @route_dest.setter
    def route_dest(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "routeDest", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routeSource")
    def route_source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routeSource: The source CIDR block of the policy-based route.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "routeSource"))

    @route_source.setter
    def route_source(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "routeSource", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpnGatewayId")
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpnGatewayId: The ID of the VPN Gateway.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpnGatewayId"))

    @vpn_gateway_id.setter
    def vpn_gateway_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpnGatewayId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="weight")
    def weight(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: weight: The weight of the destination route. Valid values: 0|100.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "weight"))

    @weight.setter
    def weight(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "weight", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the VPN destination route.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="overlayMode")
    def overlay_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: overlayMode: The overlay mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "overlayMode"))

    @overlay_mode.setter
    def overlay_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "overlayMode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnPbrRouteEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "next_hop": "nextHop",
        "publish_vpc": "publishVpc",
        "route_dest": "routeDest",
        "route_source": "routeSource",
        "vpn_gateway_id": "vpnGatewayId",
        "weight": "weight",
        "description": "description",
        "overlay_mode": "overlayMode",
    },
)
class RosVpnPbrRouteEntryProps:
    def __init__(
        self,
        *,
        next_hop: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        publish_vpc: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        route_dest: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        route_source: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpn_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        weight: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        overlay_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::VpnPbrRouteEntry``.

        :param next_hop: 
        :param publish_vpc: 
        :param route_dest: 
        :param route_source: 
        :param vpn_gateway_id: 
        :param weight: 
        :param description: 
        :param overlay_mode: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "next_hop": next_hop,
            "publish_vpc": publish_vpc,
            "route_dest": route_dest,
            "route_source": route_source,
            "vpn_gateway_id": vpn_gateway_id,
            "weight": weight,
        }
        if description is not None:
            self._values["description"] = description
        if overlay_mode is not None:
            self._values["overlay_mode"] = overlay_mode

    @builtins.property
    def next_hop(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: nextHop: The next hop of the destination route entry.
        '''
        result = self._values.get("next_hop")
        assert result is not None, "Required property 'next_hop' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def publish_vpc(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property:

        publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
        true: Publish the destination route to the VPC.
        false: Do not publish the destination route to the VPC.
        '''
        result = self._values.get("publish_vpc")
        assert result is not None, "Required property 'publish_vpc' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def route_dest(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routeDest: The destination CIDR block of the destination route.
        '''
        result = self._values.get("route_dest")
        assert result is not None, "Required property 'route_dest' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def route_source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routeSource: The source CIDR block of the policy-based route.
        '''
        result = self._values.get("route_source")
        assert result is not None, "Required property 'route_source' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpnGatewayId: The ID of the VPN Gateway.
        '''
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def weight(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: weight: The weight of the destination route. Valid values: 0|100.
        '''
        result = self._values.get("weight")
        assert result is not None, "Required property 'weight' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the VPN destination route.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def overlay_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: overlayMode: The overlay mode.
        '''
        result = self._values.get("overlay_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpnPbrRouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpnRouteEntry(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnRouteEntry",
):
    '''A ROS template type:  ``ALIYUN::VPC::VpnRouteEntry``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVpnRouteEntryProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::VpnRouteEntry``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNextHop")
    def attr_next_hop(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NextHop: The next hop of the destination route entry.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNextHop"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteDest")
    def attr_route_dest(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RouteDest: The destination CIDR block of the destination route.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteDest"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpnGatewayId")
    def attr_vpn_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpnGatewayId: The ID of the VPN Gateway.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpnGatewayId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="nextHop")
    def next_hop(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: nextHop: The next hop of the destination route entry.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "nextHop"))

    @next_hop.setter
    def next_hop(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "nextHop", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="publishVpc")
    def publish_vpc(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property:

        publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
        true: Publish the destination route to the VPC.
        false: Do not publish the destination route to the VPC.
        '''
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], jsii.get(self, "publishVpc"))

    @publish_vpc.setter
    def publish_vpc(
        self,
        value: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "publishVpc", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="routeDest")
    def route_dest(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routeDest: The destination CIDR block of the destination route.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "routeDest"))

    @route_dest.setter
    def route_dest(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "routeDest", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpnGatewayId")
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpnGatewayId: The ID of the VPN Gateway.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpnGatewayId"))

    @vpn_gateway_id.setter
    def vpn_gateway_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpnGatewayId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="weight")
    def weight(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: weight: The weight of the destination route. Valid values: 0|100.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "weight"))

    @weight.setter
    def weight(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "weight", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the VPN destination route.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="overlayMode")
    def overlay_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: overlayMode: The overlay mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "overlayMode"))

    @overlay_mode.setter
    def overlay_mode(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "overlayMode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RosVpnRouteEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "next_hop": "nextHop",
        "publish_vpc": "publishVpc",
        "route_dest": "routeDest",
        "vpn_gateway_id": "vpnGatewayId",
        "weight": "weight",
        "description": "description",
        "overlay_mode": "overlayMode",
    },
)
class RosVpnRouteEntryProps:
    def __init__(
        self,
        *,
        next_hop: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        publish_vpc: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        route_dest: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpn_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        weight: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        overlay_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::VpnRouteEntry``.

        :param next_hop: 
        :param publish_vpc: 
        :param route_dest: 
        :param vpn_gateway_id: 
        :param weight: 
        :param description: 
        :param overlay_mode: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "next_hop": next_hop,
            "publish_vpc": publish_vpc,
            "route_dest": route_dest,
            "vpn_gateway_id": vpn_gateway_id,
            "weight": weight,
        }
        if description is not None:
            self._values["description"] = description
        if overlay_mode is not None:
            self._values["overlay_mode"] = overlay_mode

    @builtins.property
    def next_hop(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: nextHop: The next hop of the destination route entry.
        '''
        result = self._values.get("next_hop")
        assert result is not None, "Required property 'next_hop' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def publish_vpc(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''
        :Property:

        publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
        true: Publish the destination route to the VPC.
        false: Do not publish the destination route to the VPC.
        '''
        result = self._values.get("publish_vpc")
        assert result is not None, "Required property 'publish_vpc' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def route_dest(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: routeDest: The destination CIDR block of the destination route.
        '''
        result = self._values.get("route_dest")
        assert result is not None, "Required property 'route_dest' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpnGatewayId: The ID of the VPN Gateway.
        '''
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def weight(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: weight: The weight of the destination route. Valid values: 0|100.
        '''
        result = self._values.get("weight")
        assert result is not None, "Required property 'weight' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the VPN destination route.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def overlay_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: overlayMode: The overlay mode.
        '''
        result = self._values.get("overlay_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpnRouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RouteTable(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RouteTable",
):
    '''A ROS resource type:  ``ALIYUN::VPC::RouteTable``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RouteTableProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::RouteTable``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteTableId: The ID of the route table.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTableName")
    def attr_route_table_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteTableName: The name of the route table.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTableName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTableType")
    def attr_route_table_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteTableType: The type of the route table.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTableType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: The ID of the VRouter to which the route table belongs.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchIds: A list of VSwitches under the VPC.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchIds"))


class RouteTableAssociation(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RouteTableAssociation",
):
    '''A ROS resource type:  ``ALIYUN::VPC::RouteTableAssociation``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RouteTableAssociationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::RouteTableAssociation``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteTableId: The ID of the route table.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchId: The VSwitch ID which the route table associated with.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RouteTableAssociationProps",
    jsii_struct_bases=[],
    name_mapping={"route_table_id": "routeTableId", "v_switch_id": "vSwitchId"},
)
class RouteTableAssociationProps:
    def __init__(
        self,
        *,
        route_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::RouteTableAssociation``.

        :param route_table_id: Property routeTableId: The ID of the route table.
        :param v_switch_id: Property vSwitchId: The ID of the VSwitch.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "route_table_id": route_table_id,
            "v_switch_id": v_switch_id,
        }

    @builtins.property
    def route_table_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property routeTableId: The ID of the route table.'''
        result = self._values.get("route_table_id")
        assert result is not None, "Required property 'route_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: The ID of the VSwitch.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouteTableAssociationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RouteTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "vpc_id": "vpcId",
        "description": "description",
        "route_table_name": "routeTableName",
        "tags": "tags",
    },
)
class RouteTableProps:
    def __init__(
        self,
        *,
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        route_table_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosRouteTable.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::RouteTable``.

        :param vpc_id: Property vpcId: The ID of the VPC to which the custom route table belongs.
        :param description: Property description: The description of the route table. The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
        :param route_table_name: Property routeTableName: The name of the route table. The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
        :param tags: Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpc_id": vpc_id,
        }
        if description is not None:
            self._values["description"] = description
        if route_table_name is not None:
            self._values["route_table_name"] = route_table_name
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The ID of the VPC to which the custom route table belongs.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the route table.

        The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def route_table_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property routeTableName: The name of the route table.

        The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
        '''
        result = self._values.get("route_table_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosRouteTable.TagsProperty]]:
        '''Property tags: Tags to attach to routetable.

        Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosRouteTable.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouteTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RouterInterface(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.RouterInterface",
):
    '''A ROS resource type:  ``ALIYUN::VPC::RouterInterface``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RouterInterfaceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::RouterInterface``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouterInterfaceId")
    def attr_router_interface_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouterInterfaceId: The ID of created RouterInterface.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouterInterfaceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.RouterInterfaceProps",
    jsii_struct_bases=[],
    name_mapping={
        "role": "role",
        "router_id": "routerId",
        "access_point_id": "accessPointId",
        "auto_pay": "autoPay",
        "description": "description",
        "health_check_source_ip": "healthCheckSourceIp",
        "health_check_target_ip": "healthCheckTargetIp",
        "instance_charge_type": "instanceChargeType",
        "name": "name",
        "opposite_access_point_id": "oppositeAccessPointId",
        "opposite_interface_id": "oppositeInterfaceId",
        "opposite_interface_owner_id": "oppositeInterfaceOwnerId",
        "opposite_region_id": "oppositeRegionId",
        "opposite_router_id": "oppositeRouterId",
        "opposite_router_type": "oppositeRouterType",
        "period": "period",
        "pricing_cycle": "pricingCycle",
        "router_type": "routerType",
        "spec": "spec",
    },
)
class RouterInterfaceProps:
    def __init__(
        self,
        *,
        role: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        router_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        access_point_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_source_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check_target_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_access_point_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_interface_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_interface_owner_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_router_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        opposite_router_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        router_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::RouterInterface``.

        :param role: Property role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
        :param router_id: Property routerId: The router ID to create RouterInterface.
        :param access_point_id: Property accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
        :param auto_pay: Property autoPay: Indicates whether automatic payment is enabled. Valid values: false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
        :param description: Property description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
        :param health_check_source_ip: Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        :param health_check_target_ip: Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        :param instance_charge_type: Property instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
        :param name: Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
        :param opposite_access_point_id: Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
        :param opposite_interface_id: Property oppositeInterfaceId: The ID of the peer router interface.
        :param opposite_interface_owner_id: Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
        :param opposite_region_id: Property oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
        :param opposite_router_id: Property oppositeRouterId: The router ID of the connection peer RouterInterface.
        :param opposite_router_type: Property oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
        :param period: Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        :param pricing_cycle: Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
        :param router_type: Property routerType: Router type. Now support 'VRouter|VBR'
        :param spec: Property spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "role": role,
            "router_id": router_id,
        }
        if access_point_id is not None:
            self._values["access_point_id"] = access_point_id
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if description is not None:
            self._values["description"] = description
        if health_check_source_ip is not None:
            self._values["health_check_source_ip"] = health_check_source_ip
        if health_check_target_ip is not None:
            self._values["health_check_target_ip"] = health_check_target_ip
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if name is not None:
            self._values["name"] = name
        if opposite_access_point_id is not None:
            self._values["opposite_access_point_id"] = opposite_access_point_id
        if opposite_interface_id is not None:
            self._values["opposite_interface_id"] = opposite_interface_id
        if opposite_interface_owner_id is not None:
            self._values["opposite_interface_owner_id"] = opposite_interface_owner_id
        if opposite_region_id is not None:
            self._values["opposite_region_id"] = opposite_region_id
        if opposite_router_id is not None:
            self._values["opposite_router_id"] = opposite_router_id
        if opposite_router_type is not None:
            self._values["opposite_router_type"] = opposite_router_type
        if period is not None:
            self._values["period"] = period
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if router_type is not None:
            self._values["router_type"] = router_type
        if spec is not None:
            self._values["spec"] = spec

    @builtins.property
    def role(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property role: RouterInterface role.

        Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
        '''
        result = self._values.get("role")
        assert result is not None, "Required property 'role' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def router_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property routerId: The router ID to create RouterInterface.'''
        result = self._values.get("router_id")
        assert result is not None, "Required property 'router_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def access_point_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property accessPointId: Access point ID.

        If 'RouterType' is specified as 'VBR', the value is required.
        '''
        result = self._values.get("access_point_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Indicates whether automatic payment is enabled.

        Valid values:
        false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        true: Automatic payment is enabled. The payment is automatically made.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Custom description of the RouterInterface, [2, 256] characters.

        Don't fill or empty, the default is empty.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_source_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.

        It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        '''
        result = self._values.get("health_check_source_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_target_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.

        It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        '''
        result = self._values.get("health_check_target_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceChargeType: The billing method of the router interface.

        Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.'''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_access_point_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.

        If 'OppositeRouterType' is specified as 'VBR', the value is required.
        '''
        result = self._values.get("opposite_access_point_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_interface_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property oppositeInterfaceId: The ID of the peer router interface.'''
        result = self._values.get("opposite_interface_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_interface_owner_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.

        The default value is current user Id.
        '''
        result = self._values.get("opposite_interface_owner_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property oppositeRegionId: The region where the connection peer RouterInterface locates.

        The default value is region where stack is created.
        '''
        result = self._values.get("opposite_region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_router_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property oppositeRouterId: The router ID of the connection peer RouterInterface.'''
        result = self._values.get("opposite_router_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def opposite_router_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property oppositeRouterType: Router type of the connection peer router.

        Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
        '''
        result = self._values.get("opposite_router_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: Prepaid time period.

        It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: Unit of the payment cycle.

        It could be Month (default) or Year.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def router_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property routerType: Router type.

        Now support 'VRouter|VBR'
        '''
        result = self._values.get("router_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property spec: RouterInterface specification.

        If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
        '''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RouterInterfaceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SnatEntry(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.SnatEntry",
):
    '''A ROS resource type:  ``ALIYUN::VPC::SnatEntry``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SnatEntryProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::SnatEntry``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSnatEntryIds")
    def attr_snat_entry_ids(self) -> ros_cdk_core.IResolvable:
        '''Attribute SnatEntryIds: The IDS of the SNAT entry.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSnatEntryIds"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.SnatEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "snat_ip": "snatIp",
        "snat_table_id": "snatTableId",
        "snat_entry_name": "snatEntryName",
        "source_cidr": "sourceCidr",
        "source_v_switch_ids": "sourceVSwitchIds",
    },
)
class SnatEntryProps:
    def __init__(
        self,
        *,
        snat_ip: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        snat_table_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        snat_entry_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source_cidr: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        source_v_switch_ids: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::SnatEntry``.

        :param snat_ip: Property snatIp: The public IP address. Separate multiple EIPs with commas.
        :param snat_table_id: Property snatTableId: The ID of the SNAT table.
        :param snat_entry_name: Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
        :param source_cidr: Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        :param source_v_switch_ids: Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "snat_ip": snat_ip,
            "snat_table_id": snat_table_id,
        }
        if snat_entry_name is not None:
            self._values["snat_entry_name"] = snat_entry_name
        if source_cidr is not None:
            self._values["source_cidr"] = source_cidr
        if source_v_switch_ids is not None:
            self._values["source_v_switch_ids"] = source_v_switch_ids

    @builtins.property
    def snat_ip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property snatIp: The public IP address.

        Separate multiple EIPs with commas.
        '''
        result = self._values.get("snat_ip")
        assert result is not None, "Required property 'snat_ip' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def snat_table_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property snatTableId: The ID of the SNAT table.'''
        result = self._values.get("snat_table_id")
        assert result is not None, "Required property 'snat_table_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def snat_entry_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.'''
        result = self._values.get("snat_entry_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sourceCidr: Specifies the network segment of the switch.

        For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
        '''
        result = self._values.get("source_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_v_switch_ids(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.'''
        result = self._values.get("source_v_switch_ids")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SnatEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SslVpnClientCert(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.SslVpnClientCert",
):
    '''A ROS resource type:  ``ALIYUN::VPC::SslVpnClientCert``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SslVpnClientCertProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::SslVpnClientCert``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSslVpnClientCertId")
    def attr_ssl_vpn_client_cert_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SslVpnClientCertId: The ID of the client certificate.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSslVpnClientCertId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.SslVpnClientCertProps",
    jsii_struct_bases=[],
    name_mapping={"ssl_vpn_server_id": "sslVpnServerId", "name": "name"},
)
class SslVpnClientCertProps:
    def __init__(
        self,
        *,
        ssl_vpn_server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::SslVpnClientCert``.

        :param ssl_vpn_server_id: Property sslVpnServerId: ID of the SSL-VPN server.
        :param name: Property name: The name of the client certificate. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "ssl_vpn_server_id": ssl_vpn_server_id,
        }
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def ssl_vpn_server_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sslVpnServerId: ID of the SSL-VPN server.'''
        result = self._values.get("ssl_vpn_server_id")
        assert result is not None, "Required property 'ssl_vpn_server_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the client certificate.

        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SslVpnClientCertProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SslVpnServer(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.SslVpnServer",
):
    '''A ROS resource type:  ``ALIYUN::VPC::SslVpnServer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "SslVpnServerProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::SslVpnServer``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSslVpnServerId")
    def attr_ssl_vpn_server_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SslVpnServerId: ID of the SSL-VPN server.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSslVpnServerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.SslVpnServerProps",
    jsii_struct_bases=[],
    name_mapping={
        "client_ip_pool": "clientIpPool",
        "local_subnet": "localSubnet",
        "vpn_gateway_id": "vpnGatewayId",
        "cipher": "cipher",
        "compress": "compress",
        "name": "name",
        "port": "port",
        "proto": "proto",
    },
)
class SslVpnServerProps:
    def __init__(
        self,
        *,
        client_ip_pool: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        local_subnet: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpn_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        cipher: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        compress: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        proto: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::SslVpnServer``.

        :param client_ip_pool: Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client. When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment. The network segment cannot conflict with the LocalSubnet address segment.
        :param local_subnet: Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection. The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
        :param vpn_gateway_id: Property vpnGatewayId: ID of the VPN gateway.
        :param cipher: Property cipher: The encryption algorithm used by SSL-VPN. Value: AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        :param compress: Property compress: Whether it is compressed.
        :param name: Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        :param port: Property port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports: 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        :param proto: Property proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "client_ip_pool": client_ip_pool,
            "local_subnet": local_subnet,
            "vpn_gateway_id": vpn_gateway_id,
        }
        if cipher is not None:
            self._values["cipher"] = cipher
        if compress is not None:
            self._values["compress"] = compress
        if name is not None:
            self._values["name"] = name
        if port is not None:
            self._values["port"] = port
        if proto is not None:
            self._values["proto"] = proto

    @builtins.property
    def client_ip_pool(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC.

        It does not refer to the existing intranet segment of the client.
        When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
        The network segment cannot conflict with the LocalSubnet address segment.
        '''
        result = self._values.get("client_ip_pool")
        assert result is not None, "Required property 'client_ip_pool' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def local_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.

        The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
        '''
        result = self._values.get("local_subnet")
        assert result is not None, "Required property 'local_subnet' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpnGatewayId: ID of the VPN gateway.'''
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def cipher(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property cipher: The encryption algorithm used by SSL-VPN.

        Value:
        AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
        '''
        result = self._values.get("cipher")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def compress(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property compress: Whether it is compressed.'''
        result = self._values.get("compress")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the SSL-VPN server.

        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
        But it can't start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property port: The port used by the SSL-VPN server.

        The default value is 1194. Cannot use the following ports:
        22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
        '''
        result = self._values.get("port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def proto(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property proto: The protocol used by the SSL-VPN server.

        Allowed values: UDP (default) | TCP.
        '''
        result = self._values.get("proto")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SslVpnServerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VirtualBorderRouter(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.VirtualBorderRouter",
):
    '''A ROS resource type:  ``ALIYUN::VPC::VirtualBorderRouter``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VirtualBorderRouterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::VirtualBorderRouter``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: The name of the VBR.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteTableId")
    def attr_route_table_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteTableId: The ID of the route table of the VBR.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteTableId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVbrId")
    def attr_vbr_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VbrId: The ID of the VBR.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVbrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVlanInterfaceId")
    def attr_vlan_interface_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VlanInterfaceId: The ID of the VBR interface.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVlanInterfaceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.VirtualBorderRouterProps",
    jsii_struct_bases=[],
    name_mapping={
        "local_gateway_ip": "localGatewayIp",
        "peer_gateway_ip": "peerGatewayIp",
        "peering_subnet_mask": "peeringSubnetMask",
        "physical_connection_id": "physicalConnectionId",
        "vlan_id": "vlanId",
        "circuit_code": "circuitCode",
        "description": "description",
        "name": "name",
    },
)
class VirtualBorderRouterProps:
    def __init__(
        self,
        *,
        local_gateway_ip: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        peer_gateway_ip: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        peering_subnet_mask: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        physical_connection_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vlan_id: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        circuit_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::VirtualBorderRouter``.

        :param local_gateway_ip: Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
        :param peer_gateway_ip: Property peerGatewayIp: The IP address of the peer router interface of the VBR. Only the owner of the VBR can set or modify the value. This parameter is required when you create a VBR for the owner of the physical connection. You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
        :param peering_subnet_mask: Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the user side. The two IP addresses must fall within the same subnet.
        :param physical_connection_id: Property physicalConnectionId: The ID of the physical connection.
        :param vlan_id: Property vlanId: The VLAN ID of the VBR. Valid values: 0 to 2999. Note Only the owner of the physical connection can set this parameter. The VLAN IDs of two VBRs of the same physical connection must be different.
        :param circuit_code: Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical connection. Note Only the owner of the physical connection can set this parameter.
        :param description: Property description: The description of the VBR. The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
        :param name: Property name: The name of the VBR. The name must be 2 to 128 characters in length, and can contain, digits, periods (.), underscores (_), and hyphens (-). The name cannot start with http:// or https://.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "local_gateway_ip": local_gateway_ip,
            "peer_gateway_ip": peer_gateway_ip,
            "peering_subnet_mask": peering_subnet_mask,
            "physical_connection_id": physical_connection_id,
            "vlan_id": vlan_id,
        }
        if circuit_code is not None:
            self._values["circuit_code"] = circuit_code
        if description is not None:
            self._values["description"] = description
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def local_gateway_ip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.'''
        result = self._values.get("local_gateway_ip")
        assert result is not None, "Required property 'local_gateway_ip' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def peer_gateway_ip(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property peerGatewayIp: The IP address of the peer router interface of the VBR.

        Only the owner of the VBR can set or modify the value.
        This parameter is required when you create a VBR for the owner of the physical connection.
        You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
        '''
        result = self._values.get("peer_gateway_ip")
        assert result is not None, "Required property 'peer_gateway_ip' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def peering_subnet_mask(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the user side.

        The two IP addresses must fall within the same subnet.
        '''
        result = self._values.get("peering_subnet_mask")
        assert result is not None, "Required property 'peering_subnet_mask' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def physical_connection_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property physicalConnectionId: The ID of the physical connection.'''
        result = self._values.get("physical_connection_id")
        assert result is not None, "Required property 'physical_connection_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vlan_id(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property vlanId: The VLAN ID of the VBR.

        Valid values: 0 to 2999.
        Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
        two VBRs of the same physical connection must be different.
        '''
        result = self._values.get("vlan_id")
        assert result is not None, "Required property 'vlan_id' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def circuit_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical connection.

        Note Only the owner of the physical connection can set this parameter.
        '''
        result = self._values.get("circuit_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the VBR.

        The description must be 2 to 256 characters in length. It must start with a letter
        but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the VBR.

        The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
        underscores (_), and hyphens (-). The name cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VirtualBorderRouterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpnConnection(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.VpnConnection",
):
    '''A ROS resource type:  ``ALIYUN::VPC::VpnConnection``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VpnConnectionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::VpnConnection``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPeerVpnConnectionConfig")
    def attr_peer_vpn_connection_config(self) -> ros_cdk_core.IResolvable:
        '''Attribute PeerVpnConnectionConfig: Peer vpc connection config.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPeerVpnConnectionConfig"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrStatus")
    def attr_status(self) -> ros_cdk_core.IResolvable:
        '''Attribute Status: Status of the IPsec connection.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrStatus"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpnConnectionId")
    def attr_vpn_connection_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpnConnectionId: ID of the IPsec connection.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpnConnectionId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.VpnConnectionProps",
    jsii_struct_bases=[],
    name_mapping={
        "customer_gateway_id": "customerGatewayId",
        "local_subnet": "localSubnet",
        "remote_subnet": "remoteSubnet",
        "vpn_gateway_id": "vpnGatewayId",
        "effect_immediately": "effectImmediately",
        "health_check_config": "healthCheckConfig",
        "ike_config": "ikeConfig",
        "ipsec_config": "ipsecConfig",
        "name": "name",
    },
)
class VpnConnectionProps:
    def __init__(
        self,
        *,
        customer_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        local_subnet: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        remote_subnet: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpn_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        effect_immediately: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        health_check_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.HealthCheckConfigProperty]] = None,
        ike_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IkeConfigProperty]] = None,
        ipsec_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IpsecConfigProperty]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::VpnConnection``.

        :param customer_gateway_id: Property customerGatewayId: The ID of the user gateway.
        :param local_subnet: Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation. Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        :param remote_subnet: Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation. Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        :param vpn_gateway_id: Property vpnGatewayId: ID of the VPN gateway.
        :param effect_immediately: Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value: True: Negotiate immediately after the configuration is complete. False (default): Negotiate when traffic enters.
        :param health_check_config: Property healthCheckConfig: Whether to enable the health check configuration.
        :param ike_config: Property ikeConfig: Configuration information for the first phase of negotiation.
        :param ipsec_config: Property ipsecConfig: Configuration information for the second phase negotiation.
        :param name: Property name: The name of the IPsec connection. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "customer_gateway_id": customer_gateway_id,
            "local_subnet": local_subnet,
            "remote_subnet": remote_subnet,
            "vpn_gateway_id": vpn_gateway_id,
        }
        if effect_immediately is not None:
            self._values["effect_immediately"] = effect_immediately
        if health_check_config is not None:
            self._values["health_check_config"] = health_check_config
        if ike_config is not None:
            self._values["ike_config"] = ike_config
        if ipsec_config is not None:
            self._values["ipsec_config"] = ipsec_config
        if name is not None:
            self._values["name"] = name

    @builtins.property
    def customer_gateway_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property customerGatewayId: The ID of the user gateway.'''
        result = self._values.get("customer_gateway_id")
        assert result is not None, "Required property 'customer_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def local_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.

        Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
        '''
        result = self._values.get("local_subnet")
        assert result is not None, "Required property 'local_subnet' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def remote_subnet(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.

        Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
        '''
        result = self._values.get("remote_subnet")
        assert result is not None, "Required property 'remote_subnet' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpnGatewayId: ID of the VPN gateway.'''
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def effect_immediately(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation.

        Value:
        True: Negotiate immediately after the configuration is complete.
        False (default): Negotiate when traffic enters.
        '''
        result = self._values.get("effect_immediately")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.HealthCheckConfigProperty]]:
        '''Property healthCheckConfig: Whether to enable the health check configuration.'''
        result = self._values.get("health_check_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.HealthCheckConfigProperty]], result)

    @builtins.property
    def ike_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IkeConfigProperty]]:
        '''Property ikeConfig: Configuration information for the first phase of negotiation.'''
        result = self._values.get("ike_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IkeConfigProperty]], result)

    @builtins.property
    def ipsec_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IpsecConfigProperty]]:
        '''Property ipsecConfig: Configuration information for the second phase negotiation.'''
        result = self._values.get("ipsec_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosVpnConnection.IpsecConfigProperty]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: The name of the IPsec connection.

        The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpnConnectionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpnGateway(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.VpnGateway",
):
    '''A ROS resource type:  ``ALIYUN::VPC::VpnGateway``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VpnGatewayProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::VpnGateway``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInternetIp")
    def attr_internet_ip(self) -> ros_cdk_core.IResolvable:
        '''Attribute InternetIp: The public IP address of the VPN gateway.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInternetIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: The order ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSpec")
    def attr_spec(self) -> ros_cdk_core.IResolvable:
        '''Attribute Spec: The specification of the VPN gateway.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSpec"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSslMaxConnections")
    def attr_ssl_max_connections(self) -> ros_cdk_core.IResolvable:
        '''Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSslMaxConnections"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpnGatewayId")
    def attr_vpn_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpnGatewayId: ID of the VPN gateway.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpnGatewayId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.VpnGatewayProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "vpc_id": "vpcId",
        "auto_pay": "autoPay",
        "description": "description",
        "enable_ipsec": "enableIpsec",
        "enable_ssl": "enableSsl",
        "instance_charge_type": "instanceChargeType",
        "name": "name",
        "period": "period",
        "ssl_connections": "sslConnections",
        "tags": "tags",
        "v_switch_id": "vSwitchId",
    },
)
class VpnGatewayProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable_ipsec: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        enable_ssl: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ssl_connections: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosVpnGateway.TagsProperty]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::VpnGateway``.

        :param bandwidth: Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps. Value: 5|10|20|50|100|200.
        :param vpc_id: Property vpcId: VPC ID to which the VPN gateway belongs.
        :param auto_pay: Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value: true: Automatically pays the bill for the VPN gateway. false (default): Does not automatically pay the bill for the VPN gateway.
        :param description: Property description: Description of the VPN gateway. The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        :param enable_ipsec: Property enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value: True (default): Enables the IPsec-VPN feature. False: The IPsec-VPN function is not enabled.
        :param enable_ssl: Property enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value: True: Enable SSL-VPN. False (default): Does not enable SSL-VPN.
        :param instance_charge_type: Property instanceChargeType: Accounting type of the VPN gateway, the value is: PREPAY, POSTPAY.
        :param name: Property name: Name of the VPN gateway. The default value is the ID of the VPN gateway. The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
        :param period: Property period: Purchase time, value: 1~9|12|24|36. When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
        :param ssl_connections: Property sslConnections: The maximum number of clients allowed to connect at the same time.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        :param v_switch_id: Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "bandwidth": bandwidth,
            "vpc_id": vpc_id,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if description is not None:
            self._values["description"] = description
        if enable_ipsec is not None:
            self._values["enable_ipsec"] = enable_ipsec
        if enable_ssl is not None:
            self._values["enable_ssl"] = enable_ssl
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if name is not None:
            self._values["name"] = name
        if period is not None:
            self._values["period"] = period
        if ssl_connections is not None:
            self._values["ssl_connections"] = ssl_connections
        if tags is not None:
            self._values["tags"] = tags
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.

        Value: 5|10|20|50|100|200.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: VPC ID to which the VPN gateway belongs.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value: true: Automatically pays the bill for the VPN gateway.

        false (default): Does not automatically pay the bill for the VPN gateway.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the VPN gateway.

        The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_ipsec(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableIpsec: Whether to enable IPsec-VPN.

        The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
        True (default): Enables the IPsec-VPN feature.
        False: The IPsec-VPN function is not enabled.
        '''
        result = self._values.get("enable_ipsec")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable_ssl(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enableSsl: Enable the SSL-VPN function.

        Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
        True: Enable SSL-VPN.
        False (default): Does not enable SSL-VPN.
        '''
        result = self._values.get("enable_ssl")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property instanceChargeType: Accounting type of the VPN gateway, the value is: PREPAY, POSTPAY.'''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property name: Name of the VPN gateway.

        The default value is the ID of the VPN gateway.
        The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
        '''
        result = self._values.get("name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property period: Purchase time, value: 1~9|12|24|36.

        When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ssl_connections(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property sslConnections: The maximum number of clients allowed to connect at the same time.'''
        result = self._values.get("ssl_connections")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosVpnGateway.TagsProperty]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosVpnGateway.TagsProperty]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpnGatewayProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpnPbrRouteEntry(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.VpnPbrRouteEntry",
):
    '''A ROS resource type:  ``ALIYUN::VPC::VpnPbrRouteEntry``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VpnPbrRouteEntryProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::VpnPbrRouteEntry``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNextHop")
    def attr_next_hop(self) -> ros_cdk_core.IResolvable:
        '''Attribute NextHop: The next hop of the destination route entry.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNextHop"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteDest")
    def attr_route_dest(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteDest: The destination CIDR block of the destination route.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteDest"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteSource")
    def attr_route_source(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteSource: The destination CIDR block of the policy-based route.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteSource"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpnGatewayId")
    def attr_vpn_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpnGatewayId: The ID of the VPN Gateway.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpnGatewayId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.VpnPbrRouteEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "next_hop": "nextHop",
        "publish_vpc": "publishVpc",
        "route_dest": "routeDest",
        "route_source": "routeSource",
        "vpn_gateway_id": "vpnGatewayId",
        "weight": "weight",
        "description": "description",
        "overlay_mode": "overlayMode",
    },
)
class VpnPbrRouteEntryProps:
    def __init__(
        self,
        *,
        next_hop: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        publish_vpc: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        route_dest: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        route_source: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpn_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        weight: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        overlay_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::VpnPbrRouteEntry``.

        :param next_hop: Property nextHop: The next hop of the destination route entry.
        :param publish_vpc: Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values: true: Publish the destination route to the VPC. false: Do not publish the destination route to the VPC.
        :param route_dest: Property routeDest: The destination CIDR block of the destination route.
        :param route_source: Property routeSource: The source CIDR block of the policy-based route.
        :param vpn_gateway_id: Property vpnGatewayId: The ID of the VPN Gateway.
        :param weight: Property weight: The weight of the destination route. Valid values: 0|100.
        :param description: Property description: The description of the VPN destination route.
        :param overlay_mode: Property overlayMode: The overlay mode.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "next_hop": next_hop,
            "publish_vpc": publish_vpc,
            "route_dest": route_dest,
            "route_source": route_source,
            "vpn_gateway_id": vpn_gateway_id,
            "weight": weight,
        }
        if description is not None:
            self._values["description"] = description
        if overlay_mode is not None:
            self._values["overlay_mode"] = overlay_mode

    @builtins.property
    def next_hop(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property nextHop: The next hop of the destination route entry.'''
        result = self._values.get("next_hop")
        assert result is not None, "Required property 'next_hop' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def publish_vpc(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''Property publishVpc: Indicates whether to publish the destination route to the VPC.

        Valid values:
        true: Publish the destination route to the VPC.
        false: Do not publish the destination route to the VPC.
        '''
        result = self._values.get("publish_vpc")
        assert result is not None, "Required property 'publish_vpc' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def route_dest(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property routeDest: The destination CIDR block of the destination route.'''
        result = self._values.get("route_dest")
        assert result is not None, "Required property 'route_dest' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def route_source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property routeSource: The source CIDR block of the policy-based route.'''
        result = self._values.get("route_source")
        assert result is not None, "Required property 'route_source' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpnGatewayId: The ID of the VPN Gateway.'''
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def weight(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property weight: The weight of the destination route.

        Valid values: 0|100.
        '''
        result = self._values.get("weight")
        assert result is not None, "Required property 'weight' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the VPN destination route.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def overlay_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property overlayMode: The overlay mode.'''
        result = self._values.get("overlay_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpnPbrRouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpnRouteEntry(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-vpc.VpnRouteEntry",
):
    '''A ROS resource type:  ``ALIYUN::VPC::VpnRouteEntry``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VpnRouteEntryProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::VPC::VpnRouteEntry``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNextHop")
    def attr_next_hop(self) -> ros_cdk_core.IResolvable:
        '''Attribute NextHop: The next hop of the destination route entry.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNextHop"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRouteDest")
    def attr_route_dest(self) -> ros_cdk_core.IResolvable:
        '''Attribute RouteDest: The destination CIDR block of the destination route.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRouteDest"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpnGatewayId")
    def attr_vpn_gateway_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpnGatewayId: The ID of the VPN Gateway.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpnGatewayId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-vpc.VpnRouteEntryProps",
    jsii_struct_bases=[],
    name_mapping={
        "next_hop": "nextHop",
        "publish_vpc": "publishVpc",
        "route_dest": "routeDest",
        "vpn_gateway_id": "vpnGatewayId",
        "weight": "weight",
        "description": "description",
        "overlay_mode": "overlayMode",
    },
)
class VpnRouteEntryProps:
    def __init__(
        self,
        *,
        next_hop: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        publish_vpc: typing.Union[builtins.bool, ros_cdk_core.IResolvable],
        route_dest: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpn_gateway_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        weight: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        overlay_mode: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::VPC::VpnRouteEntry``.

        :param next_hop: Property nextHop: The next hop of the destination route entry.
        :param publish_vpc: Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values: true: Publish the destination route to the VPC. false: Do not publish the destination route to the VPC.
        :param route_dest: Property routeDest: The destination CIDR block of the destination route.
        :param vpn_gateway_id: Property vpnGatewayId: The ID of the VPN Gateway.
        :param weight: Property weight: The weight of the destination route. Valid values: 0|100.
        :param description: Property description: The description of the VPN destination route.
        :param overlay_mode: Property overlayMode: The overlay mode.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "next_hop": next_hop,
            "publish_vpc": publish_vpc,
            "route_dest": route_dest,
            "vpn_gateway_id": vpn_gateway_id,
            "weight": weight,
        }
        if description is not None:
            self._values["description"] = description
        if overlay_mode is not None:
            self._values["overlay_mode"] = overlay_mode

    @builtins.property
    def next_hop(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property nextHop: The next hop of the destination route entry.'''
        result = self._values.get("next_hop")
        assert result is not None, "Required property 'next_hop' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def publish_vpc(self) -> typing.Union[builtins.bool, ros_cdk_core.IResolvable]:
        '''Property publishVpc: Indicates whether to publish the destination route to the VPC.

        Valid values:
        true: Publish the destination route to the VPC.
        false: Do not publish the destination route to the VPC.
        '''
        result = self._values.get("publish_vpc")
        assert result is not None, "Required property 'publish_vpc' is missing"
        return typing.cast(typing.Union[builtins.bool, ros_cdk_core.IResolvable], result)

    @builtins.property
    def route_dest(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property routeDest: The destination CIDR block of the destination route.'''
        result = self._values.get("route_dest")
        assert result is not None, "Required property 'route_dest' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpn_gateway_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpnGatewayId: The ID of the VPN Gateway.'''
        result = self._values.get("vpn_gateway_id")
        assert result is not None, "Required property 'vpn_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def weight(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property weight: The weight of the destination route.

        Valid values: 0|100.
        '''
        result = self._values.get("weight")
        assert result is not None, "Required property 'weight' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the VPN destination route.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def overlay_mode(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property overlayMode: The overlay mode.'''
        result = self._values.get("overlay_mode")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpnRouteEntryProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AnycastEIP",
    "AnycastEIPAssociation",
    "AnycastEIPAssociationProps",
    "AnycastEIPProps",
    "BgpGroup",
    "BgpGroupProps",
    "BgpNetwork",
    "BgpNetworkProps",
    "BgpPeer",
    "BgpPeerProps",
    "CommonBandwidthPackage",
    "CommonBandwidthPackageIp",
    "CommonBandwidthPackageIpProps",
    "CommonBandwidthPackageProps",
    "CustomerGateway",
    "CustomerGatewayProps",
    "DhcpOptionsSet",
    "DhcpOptionsSetAttachment",
    "DhcpOptionsSetAttachmentProps",
    "DhcpOptionsSetProps",
    "EIPAssociation",
    "EIPAssociationProps",
    "EIPPro",
    "EIPProProps",
    "EIPProps",
    "EIPSegment",
    "EIPSegmentProps",
    "Eip",
    "FlowLog",
    "FlowLogProps",
    "GrantInstanceToCen",
    "GrantInstanceToCenProps",
    "IpsecServer",
    "IpsecServerProps",
    "Ipv6Gateway",
    "Ipv6GatewayProps",
    "Ipv6InternetBandwidth",
    "Ipv6InternetBandwidthProps",
    "NatGateway",
    "NatGatewayProps",
    "NetworkAcl",
    "NetworkAclAssociation",
    "NetworkAclAssociationProps",
    "NetworkAclProps",
    "PeeringRouterInterfaceBinding",
    "PeeringRouterInterfaceBindingProps",
    "PeeringRouterInterfaceConnection",
    "PeeringRouterInterfaceConnectionProps",
    "RosAnycastEIP",
    "RosAnycastEIPAssociation",
    "RosAnycastEIPAssociationProps",
    "RosAnycastEIPProps",
    "RosBgpGroup",
    "RosBgpGroupProps",
    "RosBgpNetwork",
    "RosBgpNetworkProps",
    "RosBgpPeer",
    "RosBgpPeerProps",
    "RosCommonBandwidthPackage",
    "RosCommonBandwidthPackageIp",
    "RosCommonBandwidthPackageIpProps",
    "RosCommonBandwidthPackageProps",
    "RosCustomerGateway",
    "RosCustomerGatewayProps",
    "RosDhcpOptionsSet",
    "RosDhcpOptionsSetAttachment",
    "RosDhcpOptionsSetAttachmentProps",
    "RosDhcpOptionsSetProps",
    "RosEIP",
    "RosEIPAssociation",
    "RosEIPAssociationProps",
    "RosEIPPro",
    "RosEIPProProps",
    "RosEIPProps",
    "RosEIPSegment",
    "RosEIPSegmentProps",
    "RosFlowLog",
    "RosFlowLogProps",
    "RosGrantInstanceToCen",
    "RosGrantInstanceToCenProps",
    "RosIpsecServer",
    "RosIpsecServerProps",
    "RosIpv6Gateway",
    "RosIpv6GatewayProps",
    "RosIpv6InternetBandwidth",
    "RosIpv6InternetBandwidthProps",
    "RosNatGateway",
    "RosNatGatewayProps",
    "RosNetworkAcl",
    "RosNetworkAclAssociation",
    "RosNetworkAclAssociationProps",
    "RosNetworkAclProps",
    "RosPeeringRouterInterfaceBinding",
    "RosPeeringRouterInterfaceBindingProps",
    "RosPeeringRouterInterfaceConnection",
    "RosPeeringRouterInterfaceConnectionProps",
    "RosRouteTable",
    "RosRouteTableAssociation",
    "RosRouteTableAssociationProps",
    "RosRouteTableProps",
    "RosRouterInterface",
    "RosRouterInterfaceProps",
    "RosSnatEntry",
    "RosSnatEntryProps",
    "RosSslVpnClientCert",
    "RosSslVpnClientCertProps",
    "RosSslVpnServer",
    "RosSslVpnServerProps",
    "RosVirtualBorderRouter",
    "RosVirtualBorderRouterProps",
    "RosVpnConnection",
    "RosVpnConnectionProps",
    "RosVpnGateway",
    "RosVpnGatewayProps",
    "RosVpnPbrRouteEntry",
    "RosVpnPbrRouteEntryProps",
    "RosVpnRouteEntry",
    "RosVpnRouteEntryProps",
    "RouteTable",
    "RouteTableAssociation",
    "RouteTableAssociationProps",
    "RouteTableProps",
    "RouterInterface",
    "RouterInterfaceProps",
    "SnatEntry",
    "SnatEntryProps",
    "SslVpnClientCert",
    "SslVpnClientCertProps",
    "SslVpnServer",
    "SslVpnServerProps",
    "VirtualBorderRouter",
    "VirtualBorderRouterProps",
    "VpnConnection",
    "VpnConnectionProps",
    "VpnGateway",
    "VpnGatewayProps",
    "VpnPbrRouteEntry",
    "VpnPbrRouteEntryProps",
    "VpnRouteEntry",
    "VpnRouteEntryProps",
]

publication.publish()
