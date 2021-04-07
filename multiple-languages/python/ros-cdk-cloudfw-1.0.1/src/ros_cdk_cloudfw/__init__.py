'''
## Aliyun ROS CLOUDFW Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_cloudfw as CLOUDFW
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


class AddressBook(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.AddressBook",
):
    '''A ROS resource type:  ``ALIYUN::CLOUDFW::AddressBook``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AddressBookProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CLOUDFW::AddressBook``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(AddressBook, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrGroupUuid")
    def attr_group_uuid(self) -> ros_cdk_core.IResolvable:
        '''Attribute GroupUuid: After a successful return to the address book to add unique identification ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupUuid"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.AddressBookProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "group_name": "groupName",
        "group_type": "groupType",
        "address_list": "addressList",
        "auto_add_tag_ecs": "autoAddTagEcs",
        "region_id": "regionId",
        "tag_list": "tagList",
        "tag_relation": "tagRelation",
    },
)
class AddressBookProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        address_list: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_add_tag_ecs: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tag_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosAddressBook.TagListProperty"]]]] = None,
        tag_relation: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CLOUDFW::AddressBook``.

        :param description: Property description: Address book description.
        :param group_name: Property groupName: Name Address book.
        :param group_type: Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book.
        :param address_list: Property addressList: Address list of the address book, between multiple addresses separated by commas. Note: When GroupType ip, it must be set to port or domain. When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24 When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200 When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
        :param auto_add_tag_ecs: Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
        :param region_id: Property regionId: Region ID. Default to cn-hangzhou.
        :param tag_list: Property tagList:.
        :param tag_relation: Property tagRelation: The relationship between the labels to be matched more ECS. and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book. or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "description": description,
            "group_name": group_name,
            "group_type": group_type,
        }
        if address_list is not None:
            self._values["address_list"] = address_list
        if auto_add_tag_ecs is not None:
            self._values["auto_add_tag_ecs"] = auto_add_tag_ecs
        if region_id is not None:
            self._values["region_id"] = region_id
        if tag_list is not None:
            self._values["tag_list"] = tag_list
        if tag_relation is not None:
            self._values["tag_relation"] = tag_relation

    @builtins.property
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property description: Address book description.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupName: Name Address book.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book.'''
        result = self._values.get("group_type")
        assert result is not None, "Required property 'group_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def address_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property addressList: Address list of the address book, between multiple addresses separated by commas.

        Note: When GroupType ip, it must be set to port or domain.
        When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
        When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
        When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
        '''
        result = self._values.get("address_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_add_tag_ecs(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book.

        Default to false.
        '''
        result = self._values.get("auto_add_tag_ecs")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property regionId: Region ID.

        Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAddressBook.TagListProperty"]]]]:
        '''Property tagList:.'''
        result = self._values.get("tag_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAddressBook.TagListProperty"]]]], result)

    @builtins.property
    def tag_relation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property tagRelation: The relationship between the labels to be matched more ECS.

        and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
        or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
        '''
        result = self._values.get("tag_relation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AddressBookProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ControlPolicy(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.ControlPolicy",
):
    '''A ROS resource type:  ``ALIYUN::CLOUDFW::ControlPolicy``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ControlPolicyProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CLOUDFW::ControlPolicy``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(ControlPolicy, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(self) -> ros_cdk_core.IResolvable:
        '''Attribute AclUuid: Security access control ID that uniquely identifies the policy.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclUuid"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.ControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_action": "aclAction",
        "application_name": "applicationName",
        "description": "description",
        "destination": "destination",
        "destination_type": "destinationType",
        "direction": "direction",
        "new_order": "newOrder",
        "proto": "proto",
        "source": "source",
        "source_type": "sourceType",
        "dest_port": "destPort",
        "dest_port_group": "destPortGroup",
        "dest_port_type": "destPortType",
        "region_id": "regionId",
    },
)
class ControlPolicyProps:
    def __init__(
        self,
        *,
        acl_action: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        destination: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        destination_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        direction: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        new_order: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        proto: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        dest_port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CLOUDFW::ControlPolicy``.

        :param acl_action: Property aclAction: Traffic access control policy set by the cloud of a firewall. accept: Release drop: rejected log: Observation
        :param application_name: Property applicationName: Application types supported by the security policy. The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL NOTE ANY indicates that the policy is applied to all types of applications.
        :param description: Property description: Security access control policy description information.
        :param destination: Property destination: Security Access Control destination address policy. When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24 When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
        :param destination_type: Property destinationType: Security Access Control destination address type of policy. net: Destination network segment (CIDR) group: destination address book domain: The purpose domain location: The purpose area
        :param direction: Property direction: Security access control traffic direction policies. in: internal and external traffic access control out: within the flow of external access control
        :param new_order: Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority. Description -1 indicates the lowest priority.
        :param proto: Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type. Allowed values: ANY, TCP, UDP, ICMP
        :param source: Property source: Security access control source address policy. When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24 When SourceType as a group, Source name for the source address book. For example: db_group When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        :param source_type: Property sourceType: Security access control source address type of policy. net: Source segment (CIDR) group: source address book location: the source area
        :param dest_port: Property destPort: Security access control policy access traffic destination port. Note When DestPortType to port, set the item.
        :param dest_port_group: Property destPortGroup: Security access control policy access traffic destination port address book name. Description DestPortType is group, set the item.
        :param dest_port_type: Property destPortType: Security access control policy access destination port traffic type. port: Port group: port address book
        :param region_id: Property regionId: Region ID. Default to cn-hangzhou.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "acl_action": acl_action,
            "application_name": application_name,
            "description": description,
            "destination": destination,
            "destination_type": destination_type,
            "direction": direction,
            "new_order": new_order,
            "proto": proto,
            "source": source,
            "source_type": source_type,
        }
        if dest_port is not None:
            self._values["dest_port"] = dest_port
        if dest_port_group is not None:
            self._values["dest_port_group"] = dest_port_group
        if dest_port_type is not None:
            self._values["dest_port_type"] = dest_port_type
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def acl_action(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property aclAction: Traffic access control policy set by the cloud of a firewall.

        accept: Release
        drop: rejected
        log: Observation
        '''
        result = self._values.get("acl_action")
        assert result is not None, "Required property 'acl_action' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def application_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property applicationName: Application types supported by the security policy.

        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        NOTE ANY indicates that the policy is applied to all types of applications.
        '''
        result = self._values.get("application_name")
        assert result is not None, "Required property 'application_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property description: Security access control policy description information.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def destination(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property destination: Security Access Control destination address policy.

        When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
        When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
        When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
        When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
        '''
        result = self._values.get("destination")
        assert result is not None, "Required property 'destination' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def destination_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property destinationType: Security Access Control destination address type of policy.

        net: Destination network segment (CIDR)
        group: destination address book
        domain: The purpose domain
        location: The purpose area
        '''
        result = self._values.get("destination_type")
        assert result is not None, "Required property 'destination_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def direction(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property direction: Security access control traffic direction policies.

        in: internal and external traffic access control
        out: within the flow of external access control
        '''
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def new_order(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property newOrder: Security access control priority policy in force.

        Priority number increments sequentially from 1, lower the priority number, the higher the priority.
        Description -1 indicates the lowest priority.
        '''
        result = self._values.get("new_order")
        assert result is not None, "Required property 'new_order' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def proto(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property proto: The type of security protocol for traffic access in the security access control policy.

        Can be set to ANY when you are not sure of the specific protocol type.
        Allowed values: ANY, TCP, UDP, ICMP
        '''
        result = self._values.get("proto")
        assert result is not None, "Required property 'proto' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property source: Security access control source address policy.

        When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
        When SourceType as a group, Source name for the source address book. For example: db_group
        When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceType: Security access control source address type of policy.

        net: Source segment (CIDR)
        group: source address book
        location: the source area
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property destPort: Security access control policy access traffic destination port.

        Note When DestPortType to port, set the item.
        '''
        result = self._values.get("dest_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property destPortGroup: Security access control policy access traffic destination port address book name.

        Description DestPortType is group, set the item.
        '''
        result = self._values.get("dest_port_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dest_port_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property destPortType: Security access control policy access destination port traffic type.

        port: Port
        group: port address book
        '''
        result = self._values.get("dest_port_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property regionId: Region ID.

        Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAddressBook(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosAddressBook",
):
    '''A ROS template type:  ``ALIYUN::CLOUDFW::AddressBook``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAddressBookProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CLOUDFW::AddressBook``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RosAddressBook, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrGroupUuid")
    def attr_group_uuid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: GroupUuid: After a successful return to the address book to add unique identification ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrGroupUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: description: Address book description.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupName")
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Name Address book.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="groupType")
    def group_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        groupType: Type the address book, the optional values ​​are:
        ip: IP Address Book
        domain: domain name address book
        port: Port Address Book
        tag: ECS label address book
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "groupType"))

    @group_type.setter
    def group_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "groupType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="addressList")
    def address_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        addressList: Address list of the address book, between multiple addresses separated by commas.
        Note: When GroupType ip, it must be set to port or domain.
        When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
        When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
        When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "addressList"))

    @address_list.setter
    def address_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "addressList", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoAddTagEcs")
    def auto_add_tag_ecs(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoAddTagEcs"))

    @auto_add_tag_ecs.setter
    def auto_add_tag_ecs(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoAddTagEcs", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to cn-hangzhou.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "regionId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tagList")
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAddressBook.TagListProperty"]]]]:
        '''
        :Property: tagList:
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAddressBook.TagListProperty"]]]], jsii.get(self, "tagList"))

    @tag_list.setter
    def tag_list(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAddressBook.TagListProperty"]]]],
    ) -> None:
        jsii.set(self, "tagList", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tagRelation")
    def tag_relation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        tagRelation: The relationship between the labels to be matched more ECS.
        and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
        or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "tagRelation"))

    @tag_relation.setter
    def tag_relation(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "tagRelation", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cloudfw.RosAddressBook.TagListProperty",
        jsii_struct_bases=[],
        name_mapping={"tag_key": "tagKey", "tag_value": "tagValue"},
    )
    class TagListProperty:
        def __init__(
            self,
            *,
            tag_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            tag_value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param tag_key: 
            :param tag_value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if tag_key is not None:
                self._values["tag_key"] = tag_key
            if tag_value is not None:
                self._values["tag_value"] = tag_value

        @builtins.property
        def tag_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: tagKey: ECS labels to be matched Key.
            '''
            result = self._values.get("tag_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def tag_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: tagValue: ECS tag value to be matched.
            '''
            result = self._values.get("tag_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosAddressBookProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "group_name": "groupName",
        "group_type": "groupType",
        "address_list": "addressList",
        "auto_add_tag_ecs": "autoAddTagEcs",
        "region_id": "regionId",
        "tag_list": "tagList",
        "tag_relation": "tagRelation",
    },
)
class RosAddressBookProps:
    def __init__(
        self,
        *,
        description: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        group_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        address_list: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_add_tag_ecs: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tag_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosAddressBook.TagListProperty]]]] = None,
        tag_relation: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CLOUDFW::AddressBook``.

        :param description: 
        :param group_name: 
        :param group_type: 
        :param address_list: 
        :param auto_add_tag_ecs: 
        :param region_id: 
        :param tag_list: 
        :param tag_relation: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "description": description,
            "group_name": group_name,
            "group_type": group_type,
        }
        if address_list is not None:
            self._values["address_list"] = address_list
        if auto_add_tag_ecs is not None:
            self._values["auto_add_tag_ecs"] = auto_add_tag_ecs
        if region_id is not None:
            self._values["region_id"] = region_id
        if tag_list is not None:
            self._values["tag_list"] = tag_list
        if tag_relation is not None:
            self._values["tag_relation"] = tag_relation

    @builtins.property
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: description: Address book description.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: groupName: Name Address book.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def group_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        groupType: Type the address book, the optional values ​​are:
        ip: IP Address Book
        domain: domain name address book
        port: Port Address Book
        tag: ECS label address book
        '''
        result = self._values.get("group_type")
        assert result is not None, "Required property 'group_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def address_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        addressList: Address list of the address book, between multiple addresses separated by commas.
        Note: When GroupType ip, it must be set to port or domain.
        When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
        When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
        When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
        '''
        result = self._values.get("address_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_add_tag_ecs(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
        '''
        result = self._values.get("auto_add_tag_ecs")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosAddressBook.TagListProperty]]]]:
        '''
        :Property: tagList:
        '''
        result = self._values.get("tag_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosAddressBook.TagListProperty]]]], result)

    @builtins.property
    def tag_relation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        tagRelation: The relationship between the labels to be matched more ECS.
        and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
        or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
        '''
        result = self._values.get("tag_relation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAddressBookProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosControlPolicy(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosControlPolicy",
):
    '''A ROS template type:  ``ALIYUN::CLOUDFW::ControlPolicy``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosControlPolicyProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CLOUDFW::ControlPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(RosControlPolicy, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AclUuid: Security access control ID that uniquely identifies the policy.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclUuid"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aclAction")
    def acl_action(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        aclAction: Traffic access control policy set by the cloud of a firewall.
        accept: Release
        drop: rejected
        log: Observation
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "aclAction"))

    @acl_action.setter
    def acl_action(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "aclAction", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="applicationName")
    def application_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        applicationName: Application types supported by the security policy.
        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        NOTE ANY indicates that the policy is applied to all types of applications.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "applicationName"))

    @application_name.setter
    def application_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "applicationName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: description: Security access control policy description information.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destination")
    def destination(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        destination: Security Access Control destination address policy.
        When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
        When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
        When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
        When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "destination"))

    @destination.setter
    def destination(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "destination", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destinationType")
    def destination_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        destinationType: Security Access Control destination address type of policy.
        net: Destination network segment (CIDR)
        group: destination address book
        domain: The purpose domain
        location: The purpose area
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "destinationType"))

    @destination_type.setter
    def destination_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "destinationType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="direction")
    def direction(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        direction: Security access control traffic direction policies.
        in: internal and external traffic access control
        out: within the flow of external access control
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "direction"))

    @direction.setter
    def direction(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "direction", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="newOrder")
    def new_order(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
        Description -1 indicates the lowest priority.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "newOrder"))

    @new_order.setter
    def new_order(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "newOrder", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="proto")
    def proto(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
        Allowed values: ANY, TCP, UDP, ICMP
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "proto"))

    @proto.setter
    def proto(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "proto", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="source")
    def source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        source: Security access control source address policy.
        When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
        When SourceType as a group, Source name for the source address book. For example: db_group
        When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "source", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceType")
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        sourceType: Security access control source address type of policy.
        net: Source segment (CIDR)
        group: source address book
        location: the source area
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destPort")
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destPort: Security access control policy access traffic destination port.
        Note When DestPortType to port, set the item.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "destPort"))

    @dest_port.setter
    def dest_port(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "destPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destPortGroup")
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destPortGroup: Security access control policy access traffic destination port address book name.
        Description DestPortType is group, set the item.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "destPortGroup"))

    @dest_port_group.setter
    def dest_port_group(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "destPortGroup", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="destPortType")
    def dest_port_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destPortType: Security access control policy access destination port traffic type.
        port: Port
        group: port address book
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "destPortType"))

    @dest_port_type.setter
    def dest_port_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "destPortType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to cn-hangzhou.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "regionId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_action": "aclAction",
        "application_name": "applicationName",
        "description": "description",
        "destination": "destination",
        "destination_type": "destinationType",
        "direction": "direction",
        "new_order": "newOrder",
        "proto": "proto",
        "source": "source",
        "source_type": "sourceType",
        "dest_port": "destPort",
        "dest_port_group": "destPortGroup",
        "dest_port_type": "destPortType",
        "region_id": "regionId",
    },
)
class RosControlPolicyProps:
    def __init__(
        self,
        *,
        acl_action: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        application_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        destination: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        destination_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        direction: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        new_order: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        proto: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        dest_port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CLOUDFW::ControlPolicy``.

        :param acl_action: 
        :param application_name: 
        :param description: 
        :param destination: 
        :param destination_type: 
        :param direction: 
        :param new_order: 
        :param proto: 
        :param source: 
        :param source_type: 
        :param dest_port: 
        :param dest_port_group: 
        :param dest_port_type: 
        :param region_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "acl_action": acl_action,
            "application_name": application_name,
            "description": description,
            "destination": destination,
            "destination_type": destination_type,
            "direction": direction,
            "new_order": new_order,
            "proto": proto,
            "source": source,
            "source_type": source_type,
        }
        if dest_port is not None:
            self._values["dest_port"] = dest_port
        if dest_port_group is not None:
            self._values["dest_port_group"] = dest_port_group
        if dest_port_type is not None:
            self._values["dest_port_type"] = dest_port_type
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def acl_action(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        aclAction: Traffic access control policy set by the cloud of a firewall.
        accept: Release
        drop: rejected
        log: Observation
        '''
        result = self._values.get("acl_action")
        assert result is not None, "Required property 'acl_action' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def application_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        applicationName: Application types supported by the security policy.
        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        NOTE ANY indicates that the policy is applied to all types of applications.
        '''
        result = self._values.get("application_name")
        assert result is not None, "Required property 'application_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: description: Security access control policy description information.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def destination(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        destination: Security Access Control destination address policy.
        When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
        When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
        When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
        When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
        '''
        result = self._values.get("destination")
        assert result is not None, "Required property 'destination' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def destination_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        destinationType: Security Access Control destination address type of policy.
        net: Destination network segment (CIDR)
        group: destination address book
        domain: The purpose domain
        location: The purpose area
        '''
        result = self._values.get("destination_type")
        assert result is not None, "Required property 'destination_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def direction(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        direction: Security access control traffic direction policies.
        in: internal and external traffic access control
        out: within the flow of external access control
        '''
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def new_order(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
        Description -1 indicates the lowest priority.
        '''
        result = self._values.get("new_order")
        assert result is not None, "Required property 'new_order' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def proto(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
        Allowed values: ANY, TCP, UDP, ICMP
        '''
        result = self._values.get("proto")
        assert result is not None, "Required property 'proto' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        source: Security access control source address policy.
        When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
        When SourceType as a group, Source name for the source address book. For example: db_group
        When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        sourceType: Security access control source address type of policy.
        net: Source segment (CIDR)
        group: source address book
        location: the source area
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destPort: Security access control policy access traffic destination port.
        Note When DestPortType to port, set the item.
        '''
        result = self._values.get("dest_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destPortGroup: Security access control policy access traffic destination port address book name.
        Description DestPortType is group, set the item.
        '''
        result = self._values.get("dest_port_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def dest_port_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        destPortType: Security access control policy access destination port traffic type.
        port: Port
        group: port address book
        '''
        result = self._values.get("dest_port_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AddressBook",
    "AddressBookProps",
    "ControlPolicy",
    "ControlPolicyProps",
    "RosAddressBook",
    "RosAddressBookProps",
    "RosControlPolicy",
    "RosControlPolicyProps",
]

publication.publish()
