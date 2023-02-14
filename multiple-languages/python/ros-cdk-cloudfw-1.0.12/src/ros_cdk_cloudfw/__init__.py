'''
## Aliyun ROS CLOUDFW Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as CLOUDFW from '@alicloud/ros-cdk-cloudfw';
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


class AddressBook(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.AddressBook",
):
    '''A ROS resource type:  ``ALIYUN::CLOUDFW::AddressBook``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AddressBookProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__271a635ebc1744b887b2c9866532a1b2037a9f07cd701ded648279b1462ba0d8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrGroupUuid")
    def attr_group_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupUuid: After a successful return to the address book to add unique identification ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupUuid"))


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
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        address_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_add_tag_ecs: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAddressBook.TagListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        tag_relation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3048effdb5c7b0cfdfaaa89788fbfe08ce785eb8a5fd4cc81182082b27f80ad1)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument address_list", value=address_list, expected_type=type_hints["address_list"])
            check_type(argname="argument auto_add_tag_ecs", value=auto_add_tag_ecs, expected_type=type_hints["auto_add_tag_ecs"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument tag_list", value=tag_list, expected_type=type_hints["tag_list"])
            check_type(argname="argument tag_relation", value=tag_relation, expected_type=type_hints["tag_relation"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property description: Address book description.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupName: Name Address book.'''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property groupType: Type the address book, the optional values ​​are: ip: IP Address Book domain: domain name address book port: Port Address Book tag: ECS label address book.'''
        result = self._values.get("group_type")
        assert result is not None, "Required property 'group_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def address_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressList: Address list of the address book, between multiple addresses separated by commas.

        Note: When GroupType ip, it must be set to port or domain.
        When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
        When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
        When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
        '''
        result = self._values.get("address_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_add_tag_ecs(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book.

        Default to false.
        '''
        result = self._values.get("auto_add_tag_ecs")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property regionId: Region ID.

        Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressBook.TagListProperty"]]]]:
        '''Property tagList:.'''
        result = self._values.get("tag_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressBook.TagListProperty"]]]], result)

    @builtins.property
    def tag_relation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tagRelation: The relationship between the labels to be matched more ECS.

        and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
        or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
        '''
        result = self._values.get("tag_relation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AddressBookProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ControlPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.ControlPolicy",
):
    '''A ROS resource type:  ``ALIYUN::CLOUDFW::ControlPolicy``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07a5501d83aab148499db9690ba914742ec2ccb48465a9a4ff4accf4e476c112)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclUuid: Security access control ID that uniquely identifies the policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclUuid"))


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
        acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6c97798b19d98d15e94ace72d5a086540e0056a4ded86896b51b7212bff79b9)
            check_type(argname="argument acl_action", value=acl_action, expected_type=type_hints["acl_action"])
            check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
            check_type(argname="argument new_order", value=new_order, expected_type=type_hints["new_order"])
            check_type(argname="argument proto", value=proto, expected_type=type_hints["proto"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument dest_port", value=dest_port, expected_type=type_hints["dest_port"])
            check_type(argname="argument dest_port_group", value=dest_port_group, expected_type=type_hints["dest_port_group"])
            check_type(argname="argument dest_port_type", value=dest_port_type, expected_type=type_hints["dest_port_type"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def acl_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclAction: Traffic access control policy set by the cloud of a firewall.

        accept: Release
        drop: rejected
        log: Observation
        '''
        result = self._values.get("acl_action")
        assert result is not None, "Required property 'acl_action' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def application_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property applicationName: Application types supported by the security policy.

        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        NOTE ANY indicates that the policy is applied to all types of applications.
        '''
        result = self._values.get("application_name")
        assert result is not None, "Required property 'application_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property description: Security access control policy description information.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destination: Security Access Control destination address policy.

        When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
        When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
        When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
        When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
        '''
        result = self._values.get("destination")
        assert result is not None, "Required property 'destination' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destinationType: Security Access Control destination address type of policy.

        net: Destination network segment (CIDR)
        group: destination address book
        domain: The purpose domain
        location: The purpose area
        '''
        result = self._values.get("destination_type")
        assert result is not None, "Required property 'destination_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property direction: Security access control traffic direction policies.

        in: internal and external traffic access control
        out: within the flow of external access control
        '''
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def new_order(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property newOrder: Security access control priority policy in force.

        Priority number increments sequentially from 1, lower the priority number, the higher the priority.
        Description -1 indicates the lowest priority.
        '''
        result = self._values.get("new_order")
        assert result is not None, "Required property 'new_order' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def proto(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property proto: The type of security protocol for traffic access in the security access control policy.

        Can be set to ANY when you are not sure of the specific protocol type.
        Allowed values: ANY, TCP, UDP, ICMP
        '''
        result = self._values.get("proto")
        assert result is not None, "Required property 'proto' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property source: Security access control source address policy.

        When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
        When SourceType as a group, Source name for the source address book. For example: db_group
        When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceType: Security access control source address type of policy.

        net: Source segment (CIDR)
        group: source address book
        location: the source area
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destPort: Security access control policy access traffic destination port.

        Note When DestPortType to port, set the item.
        '''
        result = self._values.get("dest_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destPortGroup: Security access control policy access traffic destination port address book name.

        Description DestPortType is group, set the item.
        '''
        result = self._values.get("dest_port_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destPortType: Security access control policy access destination port traffic type.

        port: Port
        group: port address book
        '''
        result = self._values.get("dest_port_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property regionId: Region ID.

        Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAddressBook(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosAddressBook",
):
    '''A ROS template type:  ``ALIYUN::CLOUDFW::AddressBook``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAddressBookProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CLOUDFW::AddressBook``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47f238772a3ed56e5bd977485bb50c171c63c336b9e0a8a4b2ddd05b19bf9a55)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a28c30da64daf931477a5cb3d6cd1e445ee006dd686f54b70dc36fd302321418)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrGroupUuid")
    def attr_group_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GroupUuid: After a successful return to the address book to add unique identification ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupUuid"))

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
        :Property: description: Address book description.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e3920913a84268ddc2456bc7a56275ee9c3e4a078ea673fdd38c1c141702147)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40ec77e3e0d96355ae15403b2dec6fc4cdefd1e0f5bdfe36d244b34ce27a98b3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="groupName")
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Name Address book.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupName"))

    @group_name.setter
    def group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c916728d1fea76c23a23151bfa3f83ea6a1b3c8cbf7dbb953fca12105455adcc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupName", value)

    @builtins.property
    @jsii.member(jsii_name="groupType")
    def group_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        groupType: Type the address book, the optional values ​​are:
        ip: IP Address Book
        domain: domain name address book
        port: Port Address Book
        tag: ECS label address book
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "groupType"))

    @group_type.setter
    def group_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1319722c91e9e07c2a11cef6ce87907d4697dde028ec426e87d5517573229cf9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "groupType", value)

    @builtins.property
    @jsii.member(jsii_name="addressList")
    def address_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        addressList: Address list of the address book, between multiple addresses separated by commas.
        Note: When GroupType ip, it must be set to port or domain.
        When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
        When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
        When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressList"))

    @address_list.setter
    def address_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__007b989906d00a2b3cda650fbb5c6ddfcbf109b8dc06baffe61e847b6e67a7bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressList", value)

    @builtins.property
    @jsii.member(jsii_name="autoAddTagEcs")
    def auto_add_tag_ecs(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoAddTagEcs"))

    @auto_add_tag_ecs.setter
    def auto_add_tag_ecs(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d84710d1be3e7b76a99b3be7991e10250c01747737d2511e9e5672641141a50f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoAddTagEcs", value)

    @builtins.property
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to cn-hangzhou.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50e743014fc32b58b8d7923a74dcd4333617c71e5a24579d9851d9c5b468f94d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionId", value)

    @builtins.property
    @jsii.member(jsii_name="tagList")
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressBook.TagListProperty"]]]]:
        '''
        :Property: tagList:
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressBook.TagListProperty"]]]], jsii.get(self, "tagList"))

    @tag_list.setter
    def tag_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAddressBook.TagListProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2a22f4b278eac71ceaf69aa66296f893b53f86b5492e34a347ccd0e10e434ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tagList", value)

    @builtins.property
    @jsii.member(jsii_name="tagRelation")
    def tag_relation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tagRelation: The relationship between the labels to be matched more ECS.
        and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
        or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tagRelation"))

    @tag_relation.setter
    def tag_relation(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c3c2a7100caf425a0bf4bfd343bf5e97d805535717cf02d5120498a80de450d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            tag_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            tag_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param tag_key: 
            :param tag_value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__33015f906f965c083c31a4652a4853f6e347810a8faf2e3744d6d85571f38eb1)
                check_type(argname="argument tag_key", value=tag_key, expected_type=type_hints["tag_key"])
                check_type(argname="argument tag_value", value=tag_value, expected_type=type_hints["tag_value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if tag_key is not None:
                self._values["tag_key"] = tag_key
            if tag_value is not None:
                self._values["tag_value"] = tag_value

        @builtins.property
        def tag_key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tagKey: ECS labels to be matched Key.
            '''
            result = self._values.get("tag_key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def tag_value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: tagValue: ECS tag value to be matched.
            '''
            result = self._values.get("tag_value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        address_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_add_tag_ecs: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tag_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddressBook.TagListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        tag_relation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3cf010e328c81ee26cf437f875ace412d595bafd7e726edc690c1a35b0ad9b1)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument group_name", value=group_name, expected_type=type_hints["group_name"])
            check_type(argname="argument group_type", value=group_type, expected_type=type_hints["group_type"])
            check_type(argname="argument address_list", value=address_list, expected_type=type_hints["address_list"])
            check_type(argname="argument auto_add_tag_ecs", value=auto_add_tag_ecs, expected_type=type_hints["auto_add_tag_ecs"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument tag_list", value=tag_list, expected_type=type_hints["tag_list"])
            check_type(argname="argument tag_relation", value=tag_relation, expected_type=type_hints["tag_relation"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Address book description.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: groupName: Name Address book.
        '''
        result = self._values.get("group_name")
        assert result is not None, "Required property 'group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def group_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def address_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        addressList: Address list of the address book, between multiple addresses separated by commas.
        Note: When GroupType ip, it must be set to port or domain.
        When GroupType as ip, address list, fill in the IP address. For example: 1.2.3.4/32, 1.2.3.0/24
        When GroupType for the port, the address list to fill in ports or port ranges. For example: 80, 100/200
        When GroupType for the domain, the domain name to fill in the address list. For example: demo1.aliyun.com, demo2.aliyun.com
        '''
        result = self._values.get("address_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_add_tag_ecs(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoAddTagEcs: Whether to automatically add new ECS public network IP matching tags to the address book. Default to false.
        '''
        result = self._values.get("auto_add_tag_ecs")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tag_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddressBook.TagListProperty]]]]:
        '''
        :Property: tagList:
        '''
        result = self._values.get("tag_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddressBook.TagListProperty]]]], result)

    @builtins.property
    def tag_relation(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tagRelation: The relationship between the labels to be matched more ECS.
        and: the relationship between multiple labels "and" that matches both ECS IP public network more tags will be added to the address book.
        or: a plurality of inter-labeled "or" relationship, i.e., as long as a matching tag ECS ​​public IP address book will be added.
        '''
        result = self._values.get("tag_relation")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAddressBookProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosControlPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosControlPolicy",
):
    '''A ROS template type:  ``ALIYUN::CLOUDFW::ControlPolicy``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CLOUDFW::ControlPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddb42ae0f4276889be14ab33bcf5c1d4908ee7dfa4c92d0c808c823467c11b88)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b502996760daf29c694d9da3445f1693e3edbff7a719ebb68f5ad3d11a021baf)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclUuid: Security access control ID that uniquely identifies the policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclUuid"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="aclAction")
    def acl_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclAction: Traffic access control policy set by the cloud of a firewall.
        accept: Release
        drop: rejected
        log: Observation
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclAction"))

    @acl_action.setter
    def acl_action(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42842dd2e28d3eff251f2a0cdff50c37502ee238166042901966e367cafefef5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclAction", value)

    @builtins.property
    @jsii.member(jsii_name="applicationName")
    def application_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        applicationName: Application types supported by the security policy.
        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        NOTE ANY indicates that the policy is applied to all types of applications.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "applicationName"))

    @application_name.setter
    def application_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfe2bd60e25abb0616a3a0e7947b03f7a77d96fbee9017276db1ea2154be9857)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applicationName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Security access control policy description information.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59d032dfb5f91df7823d38447e8019f408abd26cc3ad5a3a169d4f0f583c7498)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="destination")
    def destination(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        destination: Security Access Control destination address policy.
        When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24
        When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group
        When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com
        When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destination"))

    @destination.setter
    def destination(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a61c02e970f47e08c374e6fdc11378f213c372d085bf3ea26993277f6319fda)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destination", value)

    @builtins.property
    @jsii.member(jsii_name="destinationType")
    def destination_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        destinationType: Security Access Control destination address type of policy.
        net: Destination network segment (CIDR)
        group: destination address book
        domain: The purpose domain
        location: The purpose area
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destinationType"))

    @destination_type.setter
    def destination_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69fb67318d48840c9e78267377b07ee06dff87d4913ecbb64f55c62ffdd66ee4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationType", value)

    @builtins.property
    @jsii.member(jsii_name="direction")
    def direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        direction: Security access control traffic direction policies.
        in: internal and external traffic access control
        out: within the flow of external access control
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "direction"))

    @direction.setter
    def direction(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__79cdcb681e3cfc3d6e0e06fa6784adf9a836d82431b955b0498ac21267b3437a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "direction", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0f06a85be4b568a46b0d4bd2eba77b57b009049cc2f9575a0f209ee60e3a648)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="newOrder")
    def new_order(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
        Description -1 indicates the lowest priority.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "newOrder"))

    @new_order.setter
    def new_order(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b95cd8c29eb0cf4492a951b5c61b7231d6a339c21c226363bd24f4226e55de7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "newOrder", value)

    @builtins.property
    @jsii.member(jsii_name="proto")
    def proto(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
        Allowed values: ANY, TCP, UDP, ICMP
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "proto"))

    @proto.setter
    def proto(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9f2ea3043880e9ea1314654a21e5063f59606eade0cbf9b14e4e1072396d41d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proto", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: Security access control source address policy.
        When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
        When SourceType as a group, Source name for the source address book. For example: db_group
        When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31c67a5274e30d043eefc4eb90e744f7b863a37e140f154510e9b2c8946d9024)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceType: Security access control source address type of policy.
        net: Source segment (CIDR)
        group: source address book
        location: the source area
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__279eb9d1c7ff0047070f05521c15358f0c430707db906fe35426b61044ef109c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @builtins.property
    @jsii.member(jsii_name="destPort")
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPort: Security access control policy access traffic destination port.
        Note When DestPortType to port, set the item.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destPort"))

    @dest_port.setter
    def dest_port(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1726089d1212398c4c172279ad11effbe9a7bd440284ed75a082b32cf4e9cc13)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destPort", value)

    @builtins.property
    @jsii.member(jsii_name="destPortGroup")
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPortGroup: Security access control policy access traffic destination port address book name.
        Description DestPortType is group, set the item.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destPortGroup"))

    @dest_port_group.setter
    def dest_port_group(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5016bb41f3d7f459b47ce3946d741256804eea606e1056300415c1631f938a6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destPortGroup", value)

    @builtins.property
    @jsii.member(jsii_name="destPortType")
    def dest_port_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPortType: Security access control policy access destination port traffic type.
        port: Port
        group: port address book
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destPortType"))

    @dest_port_type.setter
    def dest_port_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57ef585ab5d10af54f015c43e44f3ebb2303095d7e3808b28e2e9af452fc7955)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destPortType", value)

    @builtins.property
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to cn-hangzhou.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d213af605db6a677bf73e6abba066285635197e958432109f0db098010c3202a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b0597838817cd28ec192aedb55f20a5dccb9153f1ecd07ffb4d2d889ef27f04)
            check_type(argname="argument acl_action", value=acl_action, expected_type=type_hints["acl_action"])
            check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
            check_type(argname="argument new_order", value=new_order, expected_type=type_hints["new_order"])
            check_type(argname="argument proto", value=proto, expected_type=type_hints["proto"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument dest_port", value=dest_port, expected_type=type_hints["dest_port"])
            check_type(argname="argument dest_port_group", value=dest_port_group, expected_type=type_hints["dest_port_group"])
            check_type(argname="argument dest_port_type", value=dest_port_type, expected_type=type_hints["dest_port_type"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def acl_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclAction: Traffic access control policy set by the cloud of a firewall.
        accept: Release
        drop: rejected
        log: Observation
        '''
        result = self._values.get("acl_action")
        assert result is not None, "Required property 'acl_action' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def application_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        applicationName: Application types supported by the security policy.
        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        NOTE ANY indicates that the policy is applied to all types of applications.
        '''
        result = self._values.get("application_name")
        assert result is not None, "Required property 'application_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: Security access control policy description information.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        direction: Security access control traffic direction policies.
        in: internal and external traffic access control
        out: within the flow of external access control
        '''
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def new_order(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority.
        Description -1 indicates the lowest priority.
        '''
        result = self._values.get("new_order")
        assert result is not None, "Required property 'new_order' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def proto(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type.
        Allowed values: ANY, TCP, UDP, ICMP
        '''
        result = self._values.get("proto")
        assert result is not None, "Required property 'proto' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: Security access control source address policy.
        When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24
        When SourceType as a group, Source name for the source address book. For example: db_group
        When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceType: Security access control source address type of policy.
        net: Source segment (CIDR)
        group: source address book
        location: the source area
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPort: Security access control policy access traffic destination port.
        Note When DestPortType to port, set the item.
        '''
        result = self._values.get("dest_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPortGroup: Security access control policy access traffic destination port address book name.
        Description DestPortType is group, set the item.
        '''
        result = self._values.get("dest_port_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPortType: Security access control policy access destination port traffic type.
        port: Port
        group: port address book
        '''
        result = self._values.get("dest_port_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpcFirewallControlPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallControlPolicy",
):
    '''A ROS template type:  ``ALIYUN::CLOUDFW::VpcFirewallControlPolicy``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVpcFirewallControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::CLOUDFW::VpcFirewallControlPolicy``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7dce15297ae1a1ffa21fd1485c595a9499c8947815ae36eadccfb0e23066b11f)
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
            type_hints = typing.get_type_hints(_typecheckingstub__39423d0ca0dd5f5089fc5ca7754afc41b8f51d8b14cbcf43b5b8aed31782a466)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclUuid: The unique ID of the access control policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclUuid"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="aclAction")
    def acl_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclAction: The action that Cloud Firewall performs on the traffic. Valid values:
        accept: allows the traffic.
        drop: denies the traffic.
        log: monitors the traffic.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclAction"))

    @acl_action.setter
    def acl_action(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d228e200dafe7406841a2cc4ca75dc8842dff16f5f32598ff91d7b33368c35f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclAction", value)

    @builtins.property
    @jsii.member(jsii_name="applicationName")
    def application_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        applicationName: The application type that the access control policy supports.
        Valid values:
        ANY (indicates that all application types are supported)
        FTP
        HTTP
        HTTPS
        MySQL
        SMTP
        SMTPS
        RDP
        VNC
        SSH
        Redis
        MQTT
        MongoDB
        Memcache
        SSL
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "applicationName"))

    @application_name.setter
    def application_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__599c39b3a7815e06aa3526411ea576dcdbe893faf5a3b5874355d12e40c88e73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applicationName", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: The description of the access control policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9977897a275c257529d1fffe0c95179e09a2addcaf52fdeb2574a7a764539271)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="destination")
    def destination(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        destination: The destination address in the access control policy.
        Set this parameter in the following way:
        If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
        Example: 10.2.3.0/24.
        If the DestinationType parameter is set to group, set the value to the name of an address book.
        Example: db_group.
        If the DestinationType parameter is set to domain, set the value to a domain name.
        Example: *.aliyuncs.com.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destination"))

    @destination.setter
    def destination(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9791ee1ad40b5c6e3507d13467fb8b4f557079ebb82a59b2a9a0599ac7b325f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destination", value)

    @builtins.property
    @jsii.member(jsii_name="destinationType")
    def destination_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        destinationType: The type of the destination address in the access control policy. Valid values:
        net: CIDR block
        group: address book
        domain: domain name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destinationType"))

    @destination_type.setter
    def destination_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__955776c7ef3e15b187ae67076581b5e521ae8f25b47771b7d56e5874d7ab4eab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1a58ebad222e9627cff03be30322be10428bf6a1c1b4d8ca0f32821832071238)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="newOrder")
    def new_order(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        newOrder: The priority of the access control policy.
        The priority value starts from 1. A smaller priority value indicates a higher priority.
        Note The value of -1 indicates the lowest priority.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "newOrder"))

    @new_order.setter
    def new_order(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f4ea5f8ae5d283dd505c49e11e0fff427ab76fff5e0e8a100713f4f0b29a4c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "newOrder", value)

    @builtins.property
    @jsii.member(jsii_name="proto")
    def proto(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: proto: The type of the security protocol in the access control policy.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "proto"))

    @proto.setter
    def proto(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb8fdd2e47281677f7f57862d0408ea97540aeb81b32d449665114c1f7249722)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proto", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: The source address in the access control policy.
        If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
        If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5097c79a903a5a21ea153e82556cb1b28c15f4b0573a9befac96ba0cc025ba3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceType: The type of the source address in the access control policy. Valid values:
        net: CIDR block
        group: address book
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c87571e178d1228070b70a459c16287059d72396cf55ed6402a7664167ea7e73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @builtins.property
    @jsii.member(jsii_name="vpcFirewallId")
    def vpc_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
        If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
        that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
        If the VPC firewall is used to protect Express Connect, set the value to the ID of
        the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
        Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcFirewallId"))

    @vpc_firewall_id.setter
    def vpc_firewall_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7592edf3640f58b1a2f728d625d9a0e01c76b8c4ad735fa0b0a2eb0a2ffe3f18)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcFirewallId", value)

    @builtins.property
    @jsii.member(jsii_name="destPort")
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPort: The destination port in the access control policy.
        Note This parameter must be specified if the DestPortType parameter is set to port.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destPort"))

    @dest_port.setter
    def dest_port(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51b0d526f445c26a21691bbc90c8cec5ad275fd0060a321adffe31413fed1d62)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destPort", value)

    @builtins.property
    @jsii.member(jsii_name="destPortGroup")
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPortGroup: The address book of destination ports in the access control policy.
        Note This parameter must be specified if the DestPortType parameter is set to group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destPortGroup"))

    @dest_port_group.setter
    def dest_port_group(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3177838aaa2ed0a2c3baf5fab49270536b64a426677e852adb30b7b65d83060f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destPortGroup", value)

    @builtins.property
    @jsii.member(jsii_name="destPortType")
    def dest_port_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPortType: The type of the destination port in the access control policy. Valid values:
        port: port
        group: address book
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destPortType"))

    @dest_port_type.setter
    def dest_port_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d502738f836acc24dbda31663a7589f36a4423e88544148803ebcd1b722a22c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destPortType", value)

    @builtins.property
    @jsii.member(jsii_name="lang")
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lang: The natural language of the request and response. Valid values:
        zh: Chinese
        en: English
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lang"))

    @lang.setter
    def lang(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__96d999d2420828e537e4e75c270ee3181087edca0f79df47ca34defcba99fe8a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lang", value)

    @builtins.property
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to cn-hangzhou.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3f90392eefb4dcc20c36b3189d0986cf82004cebfded3dbefd96dbf5a7f3800)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_action": "aclAction",
        "application_name": "applicationName",
        "description": "description",
        "destination": "destination",
        "destination_type": "destinationType",
        "new_order": "newOrder",
        "proto": "proto",
        "source": "source",
        "source_type": "sourceType",
        "vpc_firewall_id": "vpcFirewallId",
        "dest_port": "destPort",
        "dest_port_group": "destPortGroup",
        "dest_port_type": "destPortType",
        "lang": "lang",
        "region_id": "regionId",
    },
)
class RosVpcFirewallControlPolicyProps:
    def __init__(
        self,
        *,
        acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        new_order: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CLOUDFW::VpcFirewallControlPolicy``.

        :param acl_action: 
        :param application_name: 
        :param description: 
        :param destination: 
        :param destination_type: 
        :param new_order: 
        :param proto: 
        :param source: 
        :param source_type: 
        :param vpc_firewall_id: 
        :param dest_port: 
        :param dest_port_group: 
        :param dest_port_type: 
        :param lang: 
        :param region_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57de059de0eaf5505e96950f7a983c3f53222bfaa47b923bf388ff26c2186d9b)
            check_type(argname="argument acl_action", value=acl_action, expected_type=type_hints["acl_action"])
            check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument new_order", value=new_order, expected_type=type_hints["new_order"])
            check_type(argname="argument proto", value=proto, expected_type=type_hints["proto"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument vpc_firewall_id", value=vpc_firewall_id, expected_type=type_hints["vpc_firewall_id"])
            check_type(argname="argument dest_port", value=dest_port, expected_type=type_hints["dest_port"])
            check_type(argname="argument dest_port_group", value=dest_port_group, expected_type=type_hints["dest_port_group"])
            check_type(argname="argument dest_port_type", value=dest_port_type, expected_type=type_hints["dest_port_type"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_action": acl_action,
            "application_name": application_name,
            "description": description,
            "destination": destination,
            "destination_type": destination_type,
            "new_order": new_order,
            "proto": proto,
            "source": source,
            "source_type": source_type,
            "vpc_firewall_id": vpc_firewall_id,
        }
        if dest_port is not None:
            self._values["dest_port"] = dest_port
        if dest_port_group is not None:
            self._values["dest_port_group"] = dest_port_group
        if dest_port_type is not None:
            self._values["dest_port_type"] = dest_port_type
        if lang is not None:
            self._values["lang"] = lang
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def acl_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclAction: The action that Cloud Firewall performs on the traffic. Valid values:
        accept: allows the traffic.
        drop: denies the traffic.
        log: monitors the traffic.
        '''
        result = self._values.get("acl_action")
        assert result is not None, "Required property 'acl_action' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def application_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        applicationName: The application type that the access control policy supports.
        Valid values:
        ANY (indicates that all application types are supported)
        FTP
        HTTP
        HTTPS
        MySQL
        SMTP
        SMTPS
        RDP
        VNC
        SSH
        Redis
        MQTT
        MongoDB
        Memcache
        SSL
        '''
        result = self._values.get("application_name")
        assert result is not None, "Required property 'application_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: description: The description of the access control policy.
        '''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        destination: The destination address in the access control policy.
        Set this parameter in the following way:
        If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
        Example: 10.2.3.0/24.
        If the DestinationType parameter is set to group, set the value to the name of an address book.
        Example: db_group.
        If the DestinationType parameter is set to domain, set the value to a domain name.
        Example: *.aliyuncs.com.
        '''
        result = self._values.get("destination")
        assert result is not None, "Required property 'destination' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        destinationType: The type of the destination address in the access control policy. Valid values:
        net: CIDR block
        group: address book
        domain: domain name
        '''
        result = self._values.get("destination_type")
        assert result is not None, "Required property 'destination_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def new_order(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        newOrder: The priority of the access control policy.
        The priority value starts from 1. A smaller priority value indicates a higher priority.
        Note The value of -1 indicates the lowest priority.
        '''
        result = self._values.get("new_order")
        assert result is not None, "Required property 'new_order' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def proto(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: proto: The type of the security protocol in the access control policy.
        '''
        result = self._values.get("proto")
        assert result is not None, "Required property 'proto' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: The source address in the access control policy.
        If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
        If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceType: The type of the source address in the access control policy. Valid values:
        net: CIDR block
        group: address book
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        vpcFirewallId: The ID of the policy group to which you want to add the access control policy.
        If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
        that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
        If the VPC firewall is used to protect Express Connect, set the value to the ID of
        the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
        Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
        '''
        result = self._values.get("vpc_firewall_id")
        assert result is not None, "Required property 'vpc_firewall_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPort: The destination port in the access control policy.
        Note This parameter must be specified if the DestPortType parameter is set to port.
        '''
        result = self._values.get("dest_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPortGroup: The address book of destination ports in the access control policy.
        Note This parameter must be specified if the DestPortType parameter is set to group.
        '''
        result = self._values.get("dest_port_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPortType: The type of the destination port in the access control policy. Valid values:
        port: port
        group: address book
        '''
        result = self._values.get("dest_port_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lang: The natural language of the request and response. Valid values:
        zh: Chinese
        en: English
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcFirewallControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VpcFirewallControlPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicy",
):
    '''A ROS resource type:  ``ALIYUN::CLOUDFW::VpcFirewallControlPolicy``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VpcFirewallControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::CLOUDFW::VpcFirewallControlPolicy``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__103237e016fdd08288a48de94867c0ecb53fe4b809a6d0da5b31bdffe91c6f75)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclUuid: The unique ID of the access control policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclUuid"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_action": "aclAction",
        "application_name": "applicationName",
        "description": "description",
        "destination": "destination",
        "destination_type": "destinationType",
        "new_order": "newOrder",
        "proto": "proto",
        "source": "source",
        "source_type": "sourceType",
        "vpc_firewall_id": "vpcFirewallId",
        "dest_port": "destPort",
        "dest_port_group": "destPortGroup",
        "dest_port_type": "destPortType",
        "lang": "lang",
        "region_id": "regionId",
    },
)
class VpcFirewallControlPolicyProps:
    def __init__(
        self,
        *,
        acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        new_order: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::CLOUDFW::VpcFirewallControlPolicy``.

        :param acl_action: Property aclAction: The action that Cloud Firewall performs on the traffic. Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic.
        :param application_name: Property applicationName: The application type that the access control policy supports. Valid values: ANY (indicates that all application types are supported) FTP HTTP HTTPS MySQL SMTP SMTPS RDP VNC SSH Redis MQTT MongoDB Memcache SSL
        :param description: Property description: The description of the access control policy.
        :param destination: Property destination: The destination address in the access control policy. Set this parameter in the following way: If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block. Example: 10.2.3.0/24. If the DestinationType parameter is set to group, set the value to the name of an address book. Example: db_group. If the DestinationType parameter is set to domain, set the value to a domain name. Example: *.aliyuncs.com.
        :param destination_type: Property destinationType: The type of the destination address in the access control policy. Valid values: net: CIDR block group: address book domain: domain name
        :param new_order: Property newOrder: The priority of the access control policy. The priority value starts from 1. A smaller priority value indicates a higher priority. Note The value of -1 indicates the lowest priority.
        :param proto: Property proto: The type of the security protocol in the access control policy.
        :param source: Property source: The source address in the access control policy. If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24. If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
        :param source_type: Property sourceType: The type of the source address in the access control policy. Valid values: net: CIDR block group: address book
        :param vpc_firewall_id: Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy. If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance that the VPC firewall protects. Example: cen-ervw5jbw1234*****. If the VPC firewall is used to protect Express Connect, set the value to the ID of the VPC firewall instance. Example: vfw-a42bbb748c91234*****. Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
        :param dest_port: Property destPort: The destination port in the access control policy. Note This parameter must be specified if the DestPortType parameter is set to port.
        :param dest_port_group: Property destPortGroup: The address book of destination ports in the access control policy. Note This parameter must be specified if the DestPortType parameter is set to group.
        :param dest_port_type: Property destPortType: The type of the destination port in the access control policy. Valid values: port: port group: address book
        :param lang: Property lang: The natural language of the request and response. Valid values: zh: Chinese en: English
        :param region_id: Property regionId: Region ID. Default to cn-hangzhou.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fb36318f0736b578a6f26d6fd6f3668db0389dcf8143a1ea23ac8d7dc0ae413)
            check_type(argname="argument acl_action", value=acl_action, expected_type=type_hints["acl_action"])
            check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument new_order", value=new_order, expected_type=type_hints["new_order"])
            check_type(argname="argument proto", value=proto, expected_type=type_hints["proto"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument vpc_firewall_id", value=vpc_firewall_id, expected_type=type_hints["vpc_firewall_id"])
            check_type(argname="argument dest_port", value=dest_port, expected_type=type_hints["dest_port"])
            check_type(argname="argument dest_port_group", value=dest_port_group, expected_type=type_hints["dest_port_group"])
            check_type(argname="argument dest_port_type", value=dest_port_type, expected_type=type_hints["dest_port_type"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_action": acl_action,
            "application_name": application_name,
            "description": description,
            "destination": destination,
            "destination_type": destination_type,
            "new_order": new_order,
            "proto": proto,
            "source": source,
            "source_type": source_type,
            "vpc_firewall_id": vpc_firewall_id,
        }
        if dest_port is not None:
            self._values["dest_port"] = dest_port
        if dest_port_group is not None:
            self._values["dest_port_group"] = dest_port_group
        if dest_port_type is not None:
            self._values["dest_port_type"] = dest_port_type
        if lang is not None:
            self._values["lang"] = lang
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def acl_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclAction: The action that Cloud Firewall performs on the traffic.

        Valid values:
        accept: allows the traffic.
        drop: denies the traffic.
        log: monitors the traffic.
        '''
        result = self._values.get("acl_action")
        assert result is not None, "Required property 'acl_action' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def application_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property applicationName: The application type that the access control policy supports.

        Valid values:
        ANY (indicates that all application types are supported)
        FTP
        HTTP
        HTTPS
        MySQL
        SMTP
        SMTPS
        RDP
        VNC
        SSH
        Redis
        MQTT
        MongoDB
        Memcache
        SSL
        '''
        result = self._values.get("application_name")
        assert result is not None, "Required property 'application_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property description: The description of the access control policy.'''
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destination: The destination address in the access control policy.

        Set this parameter in the following way:
        If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block.
        Example: 10.2.3.0/24.
        If the DestinationType parameter is set to group, set the value to the name of an address book.
        Example: db_group.
        If the DestinationType parameter is set to domain, set the value to a domain name.
        Example: *.aliyuncs.com.
        '''
        result = self._values.get("destination")
        assert result is not None, "Required property 'destination' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def destination_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property destinationType: The type of the destination address in the access control policy.

        Valid values:
        net: CIDR block
        group: address book
        domain: domain name
        '''
        result = self._values.get("destination_type")
        assert result is not None, "Required property 'destination_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def new_order(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property newOrder: The priority of the access control policy.

        The priority value starts from 1. A smaller priority value indicates a higher priority.
        Note The value of -1 indicates the lowest priority.
        '''
        result = self._values.get("new_order")
        assert result is not None, "Required property 'new_order' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def proto(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property proto: The type of the security protocol in the access control policy.'''
        result = self._values.get("proto")
        assert result is not None, "Required property 'proto' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property source: The source address in the access control policy.

        If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24.
        If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
        '''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceType: The type of the source address in the access control policy.

        Valid values:
        net: CIDR block
        group: address book
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy.

        If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance
        that the VPC firewall protects. Example: cen-ervw5jbw1234*****.
        If the VPC firewall is used to protect Express Connect, set the value to the ID of
        the VPC firewall instance. Example: vfw-a42bbb748c91234*****.
        Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
        '''
        result = self._values.get("vpc_firewall_id")
        assert result is not None, "Required property 'vpc_firewall_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destPort: The destination port in the access control policy.

        Note This parameter must be specified if the DestPortType parameter is set to port.
        '''
        result = self._values.get("dest_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destPortGroup: The address book of destination ports in the access control policy.

        Note This parameter must be specified if the DestPortType parameter is set to group.
        '''
        result = self._values.get("dest_port_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destPortType: The type of the destination port in the access control policy.

        Valid values:
        port: port
        group: address book
        '''
        result = self._values.get("dest_port_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lang(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lang: The natural language of the request and response.

        Valid values:
        zh: Chinese
        en: English
        '''
        result = self._values.get("lang")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property regionId: Region ID.

        Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcFirewallControlPolicyProps(%s)" % ", ".join(
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
    "RosVpcFirewallControlPolicy",
    "RosVpcFirewallControlPolicyProps",
    "VpcFirewallControlPolicy",
    "VpcFirewallControlPolicyProps",
]

publication.publish()

def _typecheckingstub__271a635ebc1744b887b2c9866532a1b2037a9f07cd701ded648279b1462ba0d8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AddressBookProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3048effdb5c7b0cfdfaaa89788fbfe08ce785eb8a5fd4cc81182082b27f80ad1(
    *,
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    address_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_add_tag_ecs: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddressBook.TagListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    tag_relation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07a5501d83aab148499db9690ba914742ec2ccb48465a9a4ff4accf4e476c112(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ControlPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6c97798b19d98d15e94ace72d5a086540e0056a4ded86896b51b7212bff79b9(
    *,
    acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47f238772a3ed56e5bd977485bb50c171c63c336b9e0a8a4b2ddd05b19bf9a55(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAddressBookProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a28c30da64daf931477a5cb3d6cd1e445ee006dd686f54b70dc36fd302321418(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e3920913a84268ddc2456bc7a56275ee9c3e4a078ea673fdd38c1c141702147(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40ec77e3e0d96355ae15403b2dec6fc4cdefd1e0f5bdfe36d244b34ce27a98b3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c916728d1fea76c23a23151bfa3f83ea6a1b3c8cbf7dbb953fca12105455adcc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1319722c91e9e07c2a11cef6ce87907d4697dde028ec426e87d5517573229cf9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__007b989906d00a2b3cda650fbb5c6ddfcbf109b8dc06baffe61e847b6e67a7bc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d84710d1be3e7b76a99b3be7991e10250c01747737d2511e9e5672641141a50f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50e743014fc32b58b8d7923a74dcd4333617c71e5a24579d9851d9c5b468f94d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2a22f4b278eac71ceaf69aa66296f893b53f86b5492e34a347ccd0e10e434ae(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAddressBook.TagListProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c3c2a7100caf425a0bf4bfd343bf5e97d805535717cf02d5120498a80de450d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33015f906f965c083c31a4652a4853f6e347810a8faf2e3744d6d85571f38eb1(
    *,
    tag_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3cf010e328c81ee26cf437f875ace412d595bafd7e726edc690c1a35b0ad9b1(
    *,
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    group_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    address_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_add_tag_ecs: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tag_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAddressBook.TagListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    tag_relation: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddb42ae0f4276889be14ab33bcf5c1d4908ee7dfa4c92d0c808c823467c11b88(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosControlPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b502996760daf29c694d9da3445f1693e3edbff7a719ebb68f5ad3d11a021baf(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42842dd2e28d3eff251f2a0cdff50c37502ee238166042901966e367cafefef5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfe2bd60e25abb0616a3a0e7947b03f7a77d96fbee9017276db1ea2154be9857(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59d032dfb5f91df7823d38447e8019f408abd26cc3ad5a3a169d4f0f583c7498(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a61c02e970f47e08c374e6fdc11378f213c372d085bf3ea26993277f6319fda(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69fb67318d48840c9e78267377b07ee06dff87d4913ecbb64f55c62ffdd66ee4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79cdcb681e3cfc3d6e0e06fa6784adf9a836d82431b955b0498ac21267b3437a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0f06a85be4b568a46b0d4bd2eba77b57b009049cc2f9575a0f209ee60e3a648(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b95cd8c29eb0cf4492a951b5c61b7231d6a339c21c226363bd24f4226e55de7f(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9f2ea3043880e9ea1314654a21e5063f59606eade0cbf9b14e4e1072396d41d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31c67a5274e30d043eefc4eb90e744f7b863a37e140f154510e9b2c8946d9024(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__279eb9d1c7ff0047070f05521c15358f0c430707db906fe35426b61044ef109c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1726089d1212398c4c172279ad11effbe9a7bd440284ed75a082b32cf4e9cc13(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5016bb41f3d7f459b47ce3946d741256804eea606e1056300415c1631f938a6c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57ef585ab5d10af54f015c43e44f3ebb2303095d7e3808b28e2e9af452fc7955(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d213af605db6a677bf73e6abba066285635197e958432109f0db098010c3202a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b0597838817cd28ec192aedb55f20a5dccb9153f1ecd07ffb4d2d889ef27f04(
    *,
    acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7dce15297ae1a1ffa21fd1485c595a9499c8947815ae36eadccfb0e23066b11f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVpcFirewallControlPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39423d0ca0dd5f5089fc5ca7754afc41b8f51d8b14cbcf43b5b8aed31782a466(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d228e200dafe7406841a2cc4ca75dc8842dff16f5f32598ff91d7b33368c35f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__599c39b3a7815e06aa3526411ea576dcdbe893faf5a3b5874355d12e40c88e73(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9977897a275c257529d1fffe0c95179e09a2addcaf52fdeb2574a7a764539271(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9791ee1ad40b5c6e3507d13467fb8b4f557079ebb82a59b2a9a0599ac7b325f0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__955776c7ef3e15b187ae67076581b5e521ae8f25b47771b7d56e5874d7ab4eab(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1a58ebad222e9627cff03be30322be10428bf6a1c1b4d8ca0f32821832071238(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f4ea5f8ae5d283dd505c49e11e0fff427ab76fff5e0e8a100713f4f0b29a4c4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb8fdd2e47281677f7f57862d0408ea97540aeb81b32d449665114c1f7249722(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5097c79a903a5a21ea153e82556cb1b28c15f4b0573a9befac96ba0cc025ba3c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c87571e178d1228070b70a459c16287059d72396cf55ed6402a7664167ea7e73(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7592edf3640f58b1a2f728d625d9a0e01c76b8c4ad735fa0b0a2eb0a2ffe3f18(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51b0d526f445c26a21691bbc90c8cec5ad275fd0060a321adffe31413fed1d62(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3177838aaa2ed0a2c3baf5fab49270536b64a426677e852adb30b7b65d83060f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d502738f836acc24dbda31663a7589f36a4423e88544148803ebcd1b722a22c9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96d999d2420828e537e4e75c270ee3181087edca0f79df47ca34defcba99fe8a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3f90392eefb4dcc20c36b3189d0986cf82004cebfded3dbefd96dbf5a7f3800(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57de059de0eaf5505e96950f7a983c3f53222bfaa47b923bf388ff26c2186d9b(
    *,
    acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    new_order: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__103237e016fdd08288a48de94867c0ecb53fe4b809a6d0da5b31bdffe91c6f75(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VpcFirewallControlPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fb36318f0736b578a6f26d6fd6f3668db0389dcf8143a1ea23ac8d7dc0ae413(
    *,
    acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    new_order: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
