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
        '''Properties for defining a ``AddressBook``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook

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


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.AllFwSwitchProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId"},
)
class AllFwSwitchProps:
    def __init__(
        self,
        *,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AllFwSwitch``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch

        :param instance_id: Property instanceId: The ID of the cloud firewall instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__972a122cc18fc384458c5408bfcbc8efe13b2c560cde4ca02acf5a5beffb3d3a)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceId: The ID of the cloud firewall instance.'''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AllFwSwitchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.ControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_action": "aclAction",
        "description": "description",
        "destination": "destination",
        "destination_type": "destinationType",
        "direction": "direction",
        "new_order": "newOrder",
        "proto": "proto",
        "source": "source",
        "source_type": "sourceType",
        "application_name": "applicationName",
        "application_name_list": "applicationNameList",
        "dest_port": "destPort",
        "dest_port_group": "destPortGroup",
        "dest_port_type": "destPortType",
        "domain_resolve_type": "domainResolveType",
        "end_time": "endTime",
        "ip_version": "ipVersion",
        "region_id": "regionId",
        "release": "release",
        "repeat_days": "repeatDays",
        "repeat_end_time": "repeatEndTime",
        "repeat_start_time": "repeatStartTime",
        "repeat_type": "repeatType",
        "start_time": "startTime",
    },
)
class ControlPolicyProps:
    def __init__(
        self,
        *,
        acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        application_name_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_resolve_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_days: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy

        :param acl_action: Property aclAction: Traffic access control policy set by the cloud of a firewall. accept: Release drop: rejected log: Observation
        :param description: Property description: Security access control policy description information.
        :param destination: Property destination: Security Access Control destination address policy. When DestinationType is net, Destination purpose CIDR. For example: 1.2.3.4/24 When DestinationType as a group, Destination for the purpose of the address book name. For example: db_group When DestinationType for the domain, Destination for the purpose of a domain name. For example:. * Aliyuncs.com When DestinationType as location, Destination area for the purpose (see below position encoding specific regions). For example: [ "BJ11", "ZB"]
        :param destination_type: Property destinationType: Security Access Control destination address type of policy. net: Destination network segment (CIDR) group: destination address book domain: The purpose domain location: The purpose area
        :param direction: Property direction: Security access control traffic direction policies. in: internal and external traffic access control out: within the flow of external access control
        :param new_order: Property newOrder: Security access control priority policy in force. Priority number increments sequentially from 1, lower the priority number, the higher the priority. Description -1 indicates the lowest priority.
        :param proto: Property proto: The type of security protocol for traffic access in the security access control policy. Can be set to ANY when you are not sure of the specific protocol type. Allowed values: ANY, TCP, UDP, ICMP
        :param source: Property source: Security access control source address policy. When SourceType for the net, Source is the source CIDR. For example: 1.2.3.0/24 When SourceType as a group, Source name for the source address book. For example: db_group When SourceType as location, Source source region (specific region position encoder see below). For example, [ "BJ11", "ZB"]
        :param source_type: Property sourceType: Security access control source address type of policy. net: Source segment (CIDR) group: source address book location: the source area
        :param application_name: Property applicationName: Application types supported by the security policy. The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL NOTE ANY indicates that the policy is applied to all types of applications. Either ApplicationNameList or ApplicationName must be passed, not both.
        :param application_name_list: Property applicationNameList: List of application types supported by the access control policy.
        :param dest_port: Property destPort: Security access control policy access traffic destination port. Note When DestPortType to port, set the item.
        :param dest_port_group: Property destPortGroup: Security access control policy access traffic destination port address book name. Description DestPortType is group, set the item.
        :param dest_port_type: Property destPortType: Security access control policy access destination port traffic type. port: Port group: port address book
        :param domain_resolve_type: Property domainResolveType: The domain name resolution method of the access control policy. Value: - FQDN: Based on FQDN - DNS: Based on DNS dynamic resolution - FQDN_AND_DNS: Based on FQDN and DNS dynamic resolution
        :param end_time: Property endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time. Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
        :param ip_version: Property ipVersion: IP version. Valid values: - 4: IPv4 - 6: IPv6
        :param region_id: Property regionId: Region ID. Default to cn-hangzhou.
        :param release: Property release: The enabled state of the access control policy. This policy is enabled by default when it is created. Valid values: - true: Access control policy is enabled - false: Access control policy is not enabled
        :param repeat_days: Property repeatDays: A collection of repeated dates of policy validity for an access control policy. When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: [] When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6] Notes: When RepeatType is set to Weekly, RepeatDays is not allowed. When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31] Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
        :param repeat_end_time: Property repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour. Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
        :param repeat_start_time: Property repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour. Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
        :param repeat_type: Property repeatType: The repetition type of the policy validity period for an access control policy. Valid values: - Permanent (default) - None - Daily - Weekly - Monthly.
        :param start_time: Property startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time. Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a6c97798b19d98d15e94ace72d5a086540e0056a4ded86896b51b7212bff79b9)
            check_type(argname="argument acl_action", value=acl_action, expected_type=type_hints["acl_action"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
            check_type(argname="argument new_order", value=new_order, expected_type=type_hints["new_order"])
            check_type(argname="argument proto", value=proto, expected_type=type_hints["proto"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            check_type(argname="argument application_name_list", value=application_name_list, expected_type=type_hints["application_name_list"])
            check_type(argname="argument dest_port", value=dest_port, expected_type=type_hints["dest_port"])
            check_type(argname="argument dest_port_group", value=dest_port_group, expected_type=type_hints["dest_port_group"])
            check_type(argname="argument dest_port_type", value=dest_port_type, expected_type=type_hints["dest_port_type"])
            check_type(argname="argument domain_resolve_type", value=domain_resolve_type, expected_type=type_hints["domain_resolve_type"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument ip_version", value=ip_version, expected_type=type_hints["ip_version"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument release", value=release, expected_type=type_hints["release"])
            check_type(argname="argument repeat_days", value=repeat_days, expected_type=type_hints["repeat_days"])
            check_type(argname="argument repeat_end_time", value=repeat_end_time, expected_type=type_hints["repeat_end_time"])
            check_type(argname="argument repeat_start_time", value=repeat_start_time, expected_type=type_hints["repeat_start_time"])
            check_type(argname="argument repeat_type", value=repeat_type, expected_type=type_hints["repeat_type"])
            check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_action": acl_action,
            "description": description,
            "destination": destination,
            "destination_type": destination_type,
            "direction": direction,
            "new_order": new_order,
            "proto": proto,
            "source": source,
            "source_type": source_type,
        }
        if application_name is not None:
            self._values["application_name"] = application_name
        if application_name_list is not None:
            self._values["application_name_list"] = application_name_list
        if dest_port is not None:
            self._values["dest_port"] = dest_port
        if dest_port_group is not None:
            self._values["dest_port_group"] = dest_port_group
        if dest_port_type is not None:
            self._values["dest_port_type"] = dest_port_type
        if domain_resolve_type is not None:
            self._values["domain_resolve_type"] = domain_resolve_type
        if end_time is not None:
            self._values["end_time"] = end_time
        if ip_version is not None:
            self._values["ip_version"] = ip_version
        if region_id is not None:
            self._values["region_id"] = region_id
        if release is not None:
            self._values["release"] = release
        if repeat_days is not None:
            self._values["repeat_days"] = repeat_days
        if repeat_end_time is not None:
            self._values["repeat_end_time"] = repeat_end_time
        if repeat_start_time is not None:
            self._values["repeat_start_time"] = repeat_start_time
        if repeat_type is not None:
            self._values["repeat_type"] = repeat_type
        if start_time is not None:
            self._values["start_time"] = start_time

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
    def application_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property applicationName: Application types supported by the security policy.

        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        NOTE ANY indicates that the policy is applied to all types of applications.
        Either ApplicationNameList or ApplicationName must be passed, not both.
        '''
        result = self._values.get("application_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def application_name_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property applicationNameList: List of application types supported by the access control policy.'''
        result = self._values.get("application_name_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
    def domain_resolve_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domainResolveType: The domain name resolution method of the access control policy.

        Value:

        - FQDN: Based on FQDN
        - DNS: Based on DNS dynamic resolution
        - FQDN_AND_DNS: Based on FQDN and DNS dynamic resolution
        '''
        result = self._values.get("domain_resolve_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endTime: The end time of the policy validity period for an access control policy.

        It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
        Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
        '''
        result = self._values.get("end_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipVersion: IP version.

        Valid values:

        - 4: IPv4
        - 6: IPv6
        '''
        result = self._values.get("ip_version")
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

    @builtins.property
    def release(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property release: The enabled state of the access control policy.

        This policy is enabled by default when it is created. Valid values:

        - true: Access control policy is enabled
        - false: Access control policy is not enabled
        '''
        result = self._values.get("release")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_days(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property repeatDays: A collection of repeated dates of policy validity for an access control policy.

        When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
        When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
        Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
        When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
        Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
        '''
        result = self._values.get("repeat_days")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def repeat_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repeatEndTime: The repeated end time of the policy validity period for an access control policy.

        For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
        '''
        result = self._values.get("repeat_end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repeatStartTime: The repeated start time of the policy validity period for an access control policy.

        For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
        '''
        result = self._values.get("repeat_start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repeatType: The repetition type of the policy validity period for an access control policy.

        Valid values:

        - Permanent (default)
        - None
        - Daily
        - Weekly
        - Monthly.
        '''
        result = self._values.get("repeat_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property startTime: The start time of the policy validity period for an access control policy.

        It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
        Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
        '''
        result = self._values.get("start_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.FwSwitchProps",
    jsii_struct_bases=[],
    name_mapping={
        "ipaddr_list": "ipaddrList",
        "region_list": "regionList",
        "resource_type_list": "resourceTypeList",
    },
)
class FwSwitchProps:
    def __init__(
        self,
        *,
        ipaddr_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_type_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``FwSwitch``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch

        :param ipaddr_list: Property ipaddrList: The IP address list. **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        :param region_list: Property regionList: The region list. **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        :param resource_type_list: Property resourceTypeList: The asset type list. Valid values: - BastionHostIP: Bastion machine exit IP. - BastionHostIngressIP: The entrance IP of the fortress machine. - EcsEIP: ECS EIP. - EcsPublicIP: ECS public network IP. - EIP: Elastic Public IP. - EniEIP: Elastic Network card EIP. - NatEIP: NAT EIP. - SlbEIP: SLB EIP. - SlbPublicIP: SLB public network IP. - NatPublicIP: NAT public IP - HAVIP: High Availability Virtual IP. **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0df9132647603968b9f4523c3b82b37c0f613298f5f358fca62300671bbf3ea1)
            check_type(argname="argument ipaddr_list", value=ipaddr_list, expected_type=type_hints["ipaddr_list"])
            check_type(argname="argument region_list", value=region_list, expected_type=type_hints["region_list"])
            check_type(argname="argument resource_type_list", value=resource_type_list, expected_type=type_hints["resource_type_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if ipaddr_list is not None:
            self._values["ipaddr_list"] = ipaddr_list
        if region_list is not None:
            self._values["region_list"] = region_list
        if resource_type_list is not None:
            self._values["resource_type_list"] = resource_type_list

    @builtins.property
    def ipaddr_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipaddrList: The IP address list.

        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        '''
        result = self._values.get("ipaddr_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property regionList: The region list.

        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        '''
        result = self._values.get("region_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_type_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceTypeList: The asset type list.

        Valid values:

        - BastionHostIP: Bastion machine exit IP.
        - BastionHostIngressIP: The entrance IP of the fortress machine.
        - EcsEIP: ECS EIP.
        - EcsPublicIP: ECS public network IP.
        - EIP: Elastic Public IP.
        - EniEIP: Elastic Network card EIP.
        - NatEIP: NAT EIP.
        - SlbEIP: SLB EIP.
        - SlbPublicIP: SLB public network IP.
        - NatPublicIP: NAT public IP
        - HAVIP: High Availability Virtual IP.
          **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        '''
        result = self._values.get("resource_type_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FwSwitchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.IAddressBook")
class IAddressBook(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AddressBook``.'''

    @builtins.property
    @jsii.member(jsii_name="attrGroupUuid")
    def attr_group_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupUuid: After a successful return to the address book to add unique identification ID.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddressBookProps:
        ...


class _IAddressBookProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AddressBook``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.IAddressBook"

    @builtins.property
    @jsii.member(jsii_name="attrGroupUuid")
    def attr_group_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupUuid: After a successful return to the address book to add unique identification ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupUuid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddressBookProps:
        return typing.cast(AddressBookProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAddressBook).__jsii_proxy_class__ = lambda : _IAddressBookProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.IAllFwSwitch")
class IAllFwSwitch(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``AllFwSwitch``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AllFwSwitchProps:
        ...


class _IAllFwSwitchProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``AllFwSwitch``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.IAllFwSwitch"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AllFwSwitchProps:
        return typing.cast(AllFwSwitchProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAllFwSwitch).__jsii_proxy_class__ = lambda : _IAllFwSwitchProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.IControlPolicy")
class IControlPolicy(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``ControlPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclUuid: Security access control ID that uniquely identifies the policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ControlPolicyProps:
        ...


class _IControlPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``ControlPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.IControlPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclUuid: Security access control ID that uniquely identifies the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclUuid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ControlPolicyProps:
        return typing.cast(ControlPolicyProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IControlPolicy).__jsii_proxy_class__ = lambda : _IControlPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.IFwSwitch")
class IFwSwitch(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``FwSwitch``.'''

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FwSwitchProps:
        ...


class _IFwSwitchProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``FwSwitch``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.IFwSwitch"

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FwSwitchProps:
        return typing.cast(FwSwitchProps, jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IFwSwitch).__jsii_proxy_class__ = lambda : _IFwSwitchProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.IInstance")
class IInstance(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Instance``.'''

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance Id.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        ...


class _IInstanceProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Instance``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.IInstance"

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInstance).__jsii_proxy_class__ = lambda : _IInstanceProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.INatFirewallControlPolicy")
class INatFirewallControlPolicy(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``NatFirewallControlPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclUuid: The unique ID of the access control policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDirection")
    def attr_direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Direction: The direction of the traffic to which the access control policy applies.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrNatGatewayId")
    def attr_nat_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NatGatewayId: The ID of the NAT gateway.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NatFirewallControlPolicyProps":
        ...


class _INatFirewallControlPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``NatFirewallControlPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.INatFirewallControlPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclUuid: The unique ID of the access control policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrDirection")
    def attr_direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Direction: The direction of the traffic to which the access control policy applies.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDirection"))

    @builtins.property
    @jsii.member(jsii_name="attrNatGatewayId")
    def attr_nat_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NatGatewayId: The ID of the NAT gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNatGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NatFirewallControlPolicyProps":
        return typing.cast("NatFirewallControlPolicyProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, INatFirewallControlPolicy).__jsii_proxy_class__ = lambda : _INatFirewallControlPolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.ITrFirewall")
class ITrFirewall(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``TrFirewall``.'''

    @builtins.property
    @jsii.member(jsii_name="attrFirewallId")
    def attr_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FirewallId: The instance ID of the VPC firewall.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrFirewallProps":
        ...


class _ITrFirewallProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``TrFirewall``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.ITrFirewall"

    @builtins.property
    @jsii.member(jsii_name="attrFirewallId")
    def attr_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FirewallId: The instance ID of the VPC firewall.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrFirewallProps":
        return typing.cast("TrFirewallProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITrFirewall).__jsii_proxy_class__ = lambda : _ITrFirewallProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.ITrFirewallRoutePolicy")
class ITrFirewallRoutePolicy(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``TrFirewallRoutePolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrFirewallId")
    def attr_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FirewallId: The instance ID of the VPC firewall.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTrFirewallRoutePolicyId")
    def attr_tr_firewall_route_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrFirewallRoutePolicyId: The ID of the routing policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrFirewallRoutePolicyProps":
        ...


class _ITrFirewallRoutePolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``TrFirewallRoutePolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.ITrFirewallRoutePolicy"

    @builtins.property
    @jsii.member(jsii_name="attrFirewallId")
    def attr_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FirewallId: The instance ID of the VPC firewall.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="attrTrFirewallRoutePolicyId")
    def attr_tr_firewall_route_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrFirewallRoutePolicyId: The ID of the routing policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTrFirewallRoutePolicyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrFirewallRoutePolicyProps":
        return typing.cast("TrFirewallRoutePolicyProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITrFirewallRoutePolicy).__jsii_proxy_class__ = lambda : _ITrFirewallRoutePolicyProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.IVpcFirewallCen")
class IVpcFirewallCen(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``VpcFirewallCen``.'''

    @builtins.property
    @jsii.member(jsii_name="attrVpcFirewallId")
    def attr_vpc_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcFirewallId: The instance ID of the VPC firewall.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VpcFirewallCenProps":
        ...


class _IVpcFirewallCenProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``VpcFirewallCen``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.IVpcFirewallCen"

    @builtins.property
    @jsii.member(jsii_name="attrVpcFirewallId")
    def attr_vpc_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcFirewallId: The instance ID of the VPC firewall.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VpcFirewallCenProps":
        return typing.cast("VpcFirewallCenProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IVpcFirewallCen).__jsii_proxy_class__ = lambda : _IVpcFirewallCenProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.IVpcFirewallConfigure")
class IVpcFirewallConfigure(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``VpcFirewallConfigure``.'''

    @builtins.property
    @jsii.member(jsii_name="attrVpcFirewallId")
    def attr_vpc_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcFirewallId: The instance ID of the VPC firewall.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VpcFirewallConfigureProps":
        ...


class _IVpcFirewallConfigureProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``VpcFirewallConfigure``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.IVpcFirewallConfigure"

    @builtins.property
    @jsii.member(jsii_name="attrVpcFirewallId")
    def attr_vpc_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcFirewallId: The instance ID of the VPC firewall.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VpcFirewallConfigureProps":
        return typing.cast("VpcFirewallConfigureProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IVpcFirewallConfigure).__jsii_proxy_class__ = lambda : _IVpcFirewallConfigureProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-cloudfw.IVpcFirewallControlPolicy")
class IVpcFirewallControlPolicy(
    _ros_cdk_core_7adfd82f.IResource,
    typing_extensions.Protocol,
):
    '''Represents a ``VpcFirewallControlPolicy``.'''

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclUuid: The unique ID of the access control policy.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VpcFirewallControlPolicyProps":
        ...


class _IVpcFirewallControlPolicyProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``VpcFirewallControlPolicy``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-cloudfw.IVpcFirewallControlPolicy"

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclUuid: The unique ID of the access control policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclUuid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VpcFirewallControlPolicyProps":
        return typing.cast("VpcFirewallControlPolicyProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IVpcFirewallControlPolicy).__jsii_proxy_class__ = lambda : _IVpcFirewallControlPolicyProxy


@jsii.implements(IInstance)
class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::Instance``, which is used to create a Cloud Firewall instance.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce6335912372f797a3b3f93c76f679d516c3e63e71305a80148ebb09555ffe9c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute InstanceId: Instance Id.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59be78b698babddd7ac9bd8c21e07640c523cfd2f8b3c96811feb958a3ea3490)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07f67c0eac56c7953ddd66645e7565ec118d3517afba77d05c1a4b1932e1b2c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecf3390438dd10f109c58004f51d6cd26debba4fddbbd22f0eaa18027960d0cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "pay_type": "payType",
        "account_num": "accountNum",
        "acl_extension": "aclExtension",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "bandwidth": "bandwidth",
        "ignore_existing": "ignoreExisting",
        "ip_num": "ipNum",
        "log_analysis": "logAnalysis",
        "log_storage": "logStorage",
        "multi_account_management": "multiAccountManagement",
        "nat_bandwidth": "natBandwidth",
        "nat_firewall_num": "natFirewallNum",
        "period": "period",
        "period_unit": "periodUnit",
        "spec": "spec",
        "vpc_bandwidth": "vpcBandwidth",
        "vpc_firewall_num": "vpcFirewallNum",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acl_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_analysis: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_account_management: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nat_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nat_firewall_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_firewall_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance

        :param pay_type: Property payType: The billing method of the firewall instance. Valid values: PayAsYouGo: pay-as-you-go Subscription: subscription
        :param account_num: Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
        :param acl_extension: Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
        :param auto_pay: Property autoPay: Whether to auto pay the bill.
        :param auto_renew: Property autoRenew: Whether to auto renew the prepay instance.
        :param bandwidth: Property bandwidth: Public network processing capability. Valid values: 10 to 15000. Unit: Mbps.
        :param ignore_existing: Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
        :param ip_num: Property ipNum: The number of public IPs that can be protected. Valid values: 20 to 4000.PremiumVersion: [20, 1000]
        :param log_analysis: Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default. If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
        :param log_storage: Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity.
        :param multi_account_management: Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. After the member account is managed by the current account, there will be no need to purchase it separately.
        :param nat_bandwidth: Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall. The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
        :param nat_firewall_num: Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable. Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
        :param period: Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.
        :param period_unit: Property periodUnit: The unit of the subscription duration. Valid values: Month Year Default value: Month.
        :param spec: Property spec: The version of Cloud Firewall.
        :param vpc_bandwidth: Property vpcBandwidth: VPC network processing capability. Valid values: 1000 to 15000. Unit: Mbps.
        :param vpc_firewall_num: Property vpcFirewallNum: The number of protected VPCs. It will be ignored when spec = "premium_version". Valid values between 2 and 500.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26b45555ca5e99d652503be263088caf3546c0294ee20f7b26af55a456eebd96)
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument account_num", value=account_num, expected_type=type_hints["account_num"])
            check_type(argname="argument acl_extension", value=acl_extension, expected_type=type_hints["acl_extension"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument ignore_existing", value=ignore_existing, expected_type=type_hints["ignore_existing"])
            check_type(argname="argument ip_num", value=ip_num, expected_type=type_hints["ip_num"])
            check_type(argname="argument log_analysis", value=log_analysis, expected_type=type_hints["log_analysis"])
            check_type(argname="argument log_storage", value=log_storage, expected_type=type_hints["log_storage"])
            check_type(argname="argument multi_account_management", value=multi_account_management, expected_type=type_hints["multi_account_management"])
            check_type(argname="argument nat_bandwidth", value=nat_bandwidth, expected_type=type_hints["nat_bandwidth"])
            check_type(argname="argument nat_firewall_num", value=nat_firewall_num, expected_type=type_hints["nat_firewall_num"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            check_type(argname="argument vpc_bandwidth", value=vpc_bandwidth, expected_type=type_hints["vpc_bandwidth"])
            check_type(argname="argument vpc_firewall_num", value=vpc_firewall_num, expected_type=type_hints["vpc_firewall_num"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pay_type": pay_type,
        }
        if account_num is not None:
            self._values["account_num"] = account_num
        if acl_extension is not None:
            self._values["acl_extension"] = acl_extension
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if ignore_existing is not None:
            self._values["ignore_existing"] = ignore_existing
        if ip_num is not None:
            self._values["ip_num"] = ip_num
        if log_analysis is not None:
            self._values["log_analysis"] = log_analysis
        if log_storage is not None:
            self._values["log_storage"] = log_storage
        if multi_account_management is not None:
            self._values["multi_account_management"] = multi_account_management
        if nat_bandwidth is not None:
            self._values["nat_bandwidth"] = nat_bandwidth
        if nat_firewall_num is not None:
            self._values["nat_firewall_num"] = nat_firewall_num
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if spec is not None:
            self._values["spec"] = spec
        if vpc_bandwidth is not None:
            self._values["vpc_bandwidth"] = vpc_bandwidth
        if vpc_firewall_num is not None:
            self._values["vpc_firewall_num"] = vpc_firewall_num

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: The billing method of the firewall instance.

        Valid values:
        PayAsYouGo: pay-as-you-go
        Subscription: subscription
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.'''
        result = self._values.get("account_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acl_extension(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control.

        This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
        '''
        result = self._values.get("acl_extension")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Whether to auto pay the bill.'''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether to auto renew the prepay instance.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidth: Public network processing capability.

        Valid values: 10 to 15000. Unit: Mbps.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ignore_existing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ignoreExisting: Whether to ignore existing cloud firewall instance False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored. If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.'''
        result = self._values.get("ignore_existing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipNum: The number of public IPs that can be protected.

        Valid values: 20 to 4000.PremiumVersion: [20, 1000]
        '''
        result = self._values.get("ip_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default.

        If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
        '''
        result = self._values.get("log_analysis")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity.'''
        result = self._values.get("log_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_account_management(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc.

        After the member account is managed by the current account, there will be no need to purchase it separately.
        '''
        result = self._values.get("multi_account_management")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nat_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property natBandwidth: The bandwidth of private network traffic processed by the NAT firewall.

        The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
        '''
        result = self._values.get("nat_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nat_firewall_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable.

        Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
        '''
        result = self._values.get("nat_firewall_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6 If periodUnit is year, the valid range is 1, 2, 3.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the subscription duration.

        Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property spec: The version of Cloud Firewall.'''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcBandwidth: VPC network processing capability.

        Valid values: 1000 to 15000. Unit: Mbps.
        '''
        result = self._values.get("vpc_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_firewall_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcFirewallNum: The number of protected VPCs.

        It will be ignored when spec = "premium_version". Valid values between 2 and 500.
        '''
        result = self._values.get("vpc_firewall_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(INatFirewallControlPolicy)
class NatFirewallControlPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.NatFirewallControlPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::NatFirewallControlPolicy``, which is used to add an access control policy for a NAT firewall.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosNatFirewallControlPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["NatFirewallControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40c12d0695bc2a5ebaffcfe4a187edec902d124c84bd53b8e8c261d7f8f91015)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclUuid")
    def attr_acl_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclUuid: The unique ID of the access control policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclUuid"))

    @builtins.property
    @jsii.member(jsii_name="attrDirection")
    def attr_direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Direction: The direction of the traffic to which the access control policy applies.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDirection"))

    @builtins.property
    @jsii.member(jsii_name="attrNatGatewayId")
    def attr_nat_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute NatGatewayId: The ID of the NAT gateway.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrNatGatewayId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "NatFirewallControlPolicyProps":
        return typing.cast("NatFirewallControlPolicyProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ffd18721e8780f2a57f83cd227a51e4fda2fdc127eb6af0cef805ce99e19961)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__609816e6958552127d086d014e79b815fa5ccc05555e932151038c18f0c0cc7e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2d9b4dbe67edce33626c27c4434b88ddc301cc8781443444e110676179a96675)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.NatFirewallControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_action": "aclAction",
        "application_name_list": "applicationNameList",
        "description": "description",
        "destination": "destination",
        "destination_type": "destinationType",
        "direction": "direction",
        "nat_gateway_id": "natGatewayId",
        "new_order": "newOrder",
        "proto": "proto",
        "source": "source",
        "source_type": "sourceType",
        "dest_port": "destPort",
        "dest_port_group": "destPortGroup",
        "dest_port_type": "destPortType",
        "domain_resolve_type": "domainResolveType",
        "end_time": "endTime",
        "ip_version": "ipVersion",
        "release": "release",
        "repeat_days": "repeatDays",
        "repeat_end_time": "repeatEndTime",
        "repeat_start_time": "repeatStartTime",
        "repeat_type": "repeatType",
        "start_time": "startTime",
    },
)
class NatFirewallControlPolicyProps:
    def __init__(
        self,
        *,
        acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_name_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        nat_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_resolve_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_days: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``NatFirewallControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy

        :param acl_action: Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic.
        :param application_name_list: Property applicationNameList: The application types supported by the access control policy.
        :param description: Property description: The description of the access control policy.
        :param destination: Property destination: The destination address in the access control policy. Valid values: If DestinationType is set to net, the value of this parameter is a CIDR block. Example: 1.2.XX.XX/24 If DestinationType is set to group, the value of this parameter is an address book. Example: db_group If DestinationType is set to domain, the value of this parameter is a domain name. Example: *.aliyuncs.com DestinationType is set to location, the value of this parameter is a location. Example: ["BJ11", "ZB"]
        :param destination_type: Property destinationType: The type of the destination address in the access control policy. Valid values: net: CIDR block group: address book domain: domain name
        :param direction: Property direction: The direction of the traffic to which the access control policy applies. Valid values: out: outbound traffic
        :param nat_gateway_id: Property natGatewayId: The ID of the NAT gateway.
        :param new_order: Property newOrder: The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
        :param proto: Property proto: The protocol type in the access control policy.Valid values: ANY: all types of protocols TCP UDP ICMP.
        :param source: Property source: The source address in the access control policy.Valid values: If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0/24 If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group.
        :param source_type: Property sourceType: The type of the source address in the access control policy.Valid values: net: source CIDR block group: source address book.
        :param dest_port: Property destPort: The destination port in the access control policy. Valid values: If Proto is set to ICMP, DestPort is automatically left empty. If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty. If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
        :param dest_port_group: Property destPortGroup: The name of the destination port address book in the access control policy.
        :param dest_port_type: Property destPortType: The type of the destination port in the access control policy. Valid values: net: source CIDR block group: source address book
        :param domain_resolve_type: Property domainResolveType: The domain name resolution method of the access control policy. Valid values: 0: fully qualified domain name (FQDN)-based resolution 1: Domain Name System (DNS)-based dynamic resolution 2: FQDN and DNS-based dynamic resolution
        :param end_time: Property endTime: The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
        :param ip_version: Property ipVersion: The IP version supported by the access control policy. Valid values: 4: IPv4 (default)
        :param release: Property release: Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values: true false
        :param repeat_days: Property repeatDays: The days of a week or of a month on which the access control policy takes effect. If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: []. If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6]. If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
        :param repeat_end_time: Property repeatEndTime: The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
        :param repeat_start_time: Property repeatStartTime: The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
        :param repeat_type: Property repeatType: The recurrence type for the access control policy to take effect. Valid values: Permanent (default): The policy always takes effect. None: The policy takes effect for only once. Daily: The policy takes effect on a daily basis. Weekly: The policy takes effect on a weekly basis. Monthly: The policy takes effect on a monthly basis.
        :param start_time: Property startTime: The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__39bc0f33caab35ab6cb6481cf96d83d922d2d7644d52a6f43292914c392abdc0)
            check_type(argname="argument acl_action", value=acl_action, expected_type=type_hints["acl_action"])
            check_type(argname="argument application_name_list", value=application_name_list, expected_type=type_hints["application_name_list"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
            check_type(argname="argument nat_gateway_id", value=nat_gateway_id, expected_type=type_hints["nat_gateway_id"])
            check_type(argname="argument new_order", value=new_order, expected_type=type_hints["new_order"])
            check_type(argname="argument proto", value=proto, expected_type=type_hints["proto"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument dest_port", value=dest_port, expected_type=type_hints["dest_port"])
            check_type(argname="argument dest_port_group", value=dest_port_group, expected_type=type_hints["dest_port_group"])
            check_type(argname="argument dest_port_type", value=dest_port_type, expected_type=type_hints["dest_port_type"])
            check_type(argname="argument domain_resolve_type", value=domain_resolve_type, expected_type=type_hints["domain_resolve_type"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument ip_version", value=ip_version, expected_type=type_hints["ip_version"])
            check_type(argname="argument release", value=release, expected_type=type_hints["release"])
            check_type(argname="argument repeat_days", value=repeat_days, expected_type=type_hints["repeat_days"])
            check_type(argname="argument repeat_end_time", value=repeat_end_time, expected_type=type_hints["repeat_end_time"])
            check_type(argname="argument repeat_start_time", value=repeat_start_time, expected_type=type_hints["repeat_start_time"])
            check_type(argname="argument repeat_type", value=repeat_type, expected_type=type_hints["repeat_type"])
            check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_action": acl_action,
            "application_name_list": application_name_list,
            "description": description,
            "destination": destination,
            "destination_type": destination_type,
            "direction": direction,
            "nat_gateway_id": nat_gateway_id,
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
        if domain_resolve_type is not None:
            self._values["domain_resolve_type"] = domain_resolve_type
        if end_time is not None:
            self._values["end_time"] = end_time
        if ip_version is not None:
            self._values["ip_version"] = ip_version
        if release is not None:
            self._values["release"] = release
        if repeat_days is not None:
            self._values["repeat_days"] = repeat_days
        if repeat_end_time is not None:
            self._values["repeat_end_time"] = repeat_end_time
        if repeat_start_time is not None:
            self._values["repeat_start_time"] = repeat_start_time
        if repeat_type is not None:
            self._values["repeat_type"] = repeat_type
        if start_time is not None:
            self._values["start_time"] = start_time

    @builtins.property
    def acl_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclAction: The action that Cloud Firewall performs on the traffic.Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic.'''
        result = self._values.get("acl_action")
        assert result is not None, "Required property 'acl_action' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def application_name_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property applicationNameList: The application types supported by the access control policy.'''
        result = self._values.get("application_name_list")
        assert result is not None, "Required property 'application_name_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

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

        Valid values:
        If DestinationType is set to net, the value of this parameter is a CIDR block.
        Example: 1.2.XX.XX/24
        If DestinationType is set to group, the value of this parameter is an address book.
        Example: db_group
        If DestinationType is set to domain, the value of this parameter is a domain name.
        Example: *.aliyuncs.com
        DestinationType is set to location, the value of this parameter is a location.
        Example: ["BJ11", "ZB"]
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
    def direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property direction: The direction of the traffic to which the access control policy applies.

        Valid values:
        out: outbound traffic
        '''
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def nat_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property natGatewayId: The ID of the NAT gateway.'''
        result = self._values.get("nat_gateway_id")
        assert result is not None, "Required property 'nat_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def new_order(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property newOrder: The priority of the access control policy.

        The priority value starts from 1. A small priority value indicates a high priority.
        '''
        result = self._values.get("new_order")
        assert result is not None, "Required property 'new_order' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def proto(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property proto: The protocol type in the access control policy.Valid values: ANY: all types of protocols TCP UDP ICMP.'''
        result = self._values.get("proto")
        assert result is not None, "Required property 'proto' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property source: The source address in the access control policy.Valid values: If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0/24 If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group.'''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceType: The type of the source address in the access control policy.Valid values: net: source CIDR block group: source address book.'''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destPort: The destination port in the access control policy.

        Valid values:
        If Proto is set to ICMP, DestPort is automatically left empty.
        If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
        If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
        '''
        result = self._values.get("dest_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destPortGroup: The name of the destination port address book in the access control policy.'''
        result = self._values.get("dest_port_group")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destPortType: The type of the destination port in the access control policy.

        Valid values:
        net: source CIDR block
        group: source address book
        '''
        result = self._values.get("dest_port_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_resolve_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property domainResolveType: The domain name resolution method of the access control policy.

        Valid values:
        0: fully qualified domain name (FQDN)-based resolution
        1: Domain Name System (DNS)-based dynamic resolution
        2: FQDN and DNS-based dynamic resolution
        '''
        result = self._values.get("domain_resolve_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endTime: The time when the access control policy stops taking effect.

        The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
        '''
        result = self._values.get("end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipVersion: The IP version supported by the access control policy.

        Valid values:
        4: IPv4 (default)
        '''
        result = self._values.get("ip_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def release(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property release: Specifies whether to enable the access control policy.

        By default, an access control policy is enabled after it is created. Valid values:
        true
        false
        '''
        result = self._values.get("release")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_days(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repeatDays: The days of a week or of a month on which the access control policy takes effect.

        If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
        If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
        If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
        '''
        result = self._values.get("repeat_days")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repeatEndTime: The point in time when the recurrence ends.

        Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
        '''
        result = self._values.get("repeat_end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repeatStartTime: The point in time when the recurrence starts.

        Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
        '''
        result = self._values.get("repeat_start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repeatType: The recurrence type for the access control policy to take effect.

        Valid values:
        Permanent (default): The policy always takes effect.
        None: The policy takes effect for only once.
        Daily: The policy takes effect on a daily basis.
        Weekly: The policy takes effect on a weekly basis.
        Monthly: The policy takes effect on a monthly basis.
        '''
        result = self._values.get("repeat_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property startTime: The time when the access control policy starts to take effect.

        The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
        '''
        result = self._values.get("start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NatFirewallControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAddressBook(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosAddressBook",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::AddressBook``, which is used to create an address book that is used for access control.

    Address books include IP address books, Elastic Compute Service (ECS) tag-based address books, port address books, and domain address books.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AddressBook`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAddressBookProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
        '''Properties for defining a ``RosAddressBook``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook

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


class RosAllFwSwitch(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosAllFwSwitch",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::AllFwSwitch``, which is used to enable all firewalls.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AllFwSwitch`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAllFwSwitchProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e5d01dd1ac11217626d5a962fbc710ab4c174260025eb20c314bf65185309db)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1470c249c4998708229c0eac0fc4880dea636edc6f86bfe48570f6f37c903f64)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__67fba5f74b2800c361b95bf975bfa5b5818f2b82cc374fd551074332019dc613)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the cloud firewall instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa1cfa14d314e72577b7ba22cba966560931199a5ebac1eb863ea51f58822251)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosAllFwSwitchProps",
    jsii_struct_bases=[],
    name_mapping={"instance_id": "instanceId"},
)
class RosAllFwSwitchProps:
    def __init__(
        self,
        *,
        instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAllFwSwitch``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch

        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddcaeb3d7611c00eea2bb15be25647c721ef47c2594ef866b8acb3f6a90e4bb4)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if instance_id is not None:
            self._values["instance_id"] = instance_id

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceId: The ID of the cloud firewall instance.
        '''
        result = self._values.get("instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAllFwSwitchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosControlPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosControlPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::ControlPolicy``, which is used to add an access control policy.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ControlPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
    @jsii.member(jsii_name="applicationName")
    def application_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        applicationName: Application types supported by the security policy.
        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        NOTE ANY indicates that the policy is applied to all types of applications.
        Either ApplicationNameList or ApplicationName must be passed, not both.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "applicationName"))

    @application_name.setter
    def application_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfe2bd60e25abb0616a3a0e7947b03f7a77d96fbee9017276db1ea2154be9857)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applicationName", value)

    @builtins.property
    @jsii.member(jsii_name="applicationNameList")
    def application_name_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: applicationNameList: List of application types supported by the access control policy.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "applicationNameList"))

    @application_name_list.setter
    def application_name_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b32dcfa7a1c798c7acae4918f396b44ab2382d6d81c35d4118e95ee0250f51c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applicationNameList", value)

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
    @jsii.member(jsii_name="domainResolveType")
    def domain_resolve_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        domainResolveType: The domain name resolution method of the access control policy. Value:

        - FQDN: Based on FQDN
        - DNS: Based on DNS dynamic resolution
        - FQDN_AND_DNS: Based on FQDN and DNS dynamic resolution
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domainResolveType"))

    @domain_resolve_type.setter
    def domain_resolve_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b6d05a917cfe52ea9767caa75ef4dab616ab0df791f4fbb0b9519d8388252d81)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainResolveType", value)

    @builtins.property
    @jsii.member(jsii_name="endTime")
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
        Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endTime"))

    @end_time.setter
    def end_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01019e151fce99493cc7a608f08e6997ef5d6d63d7ff410f4ef55799202be3ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endTime", value)

    @builtins.property
    @jsii.member(jsii_name="ipVersion")
    def ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipVersion: IP version. Valid values:

        - 4: IPv4
        - 6: IPv6
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipVersion"))

    @ip_version.setter
    def ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__681bb908180216dce790c9a5ed781e8b3c57b43942e238ab8b6dec9c0ae5745b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipVersion", value)

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

    @builtins.property
    @jsii.member(jsii_name="release")
    def release(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        release: The enabled state of the access control policy. This policy is enabled by default when it is created. Valid values:

        - true: Access control policy is enabled
        - false: Access control policy is not enabled
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "release"))

    @release.setter
    def release(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6ca0e4a4d5068e7115539cb445cc3d403487611ca3c597308eda03e971f3c58)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "release", value)

    @builtins.property
    @jsii.member(jsii_name="repeatDays")
    def repeat_days(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        repeatDays: A collection of repeated dates of policy validity for an access control policy.
        When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
        When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
        Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
        When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
        Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "repeatDays"))

    @repeat_days.setter
    def repeat_days(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6c72ea16933567b082815f779495acf51f0f325cdeff739bae416690dd38647)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatDays", value)

    @builtins.property
    @jsii.member(jsii_name="repeatEndTime")
    def repeat_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repeatEndTime"))

    @repeat_end_time.setter
    def repeat_end_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e328ea9ddde9482803b1e65e027fae49c68982dfd842013ac6a00c7adec82c0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatEndTime", value)

    @builtins.property
    @jsii.member(jsii_name="repeatStartTime")
    def repeat_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repeatStartTime"))

    @repeat_start_time.setter
    def repeat_start_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05dbd8b59a60bdd00ac0536ad13c6ba5e9229e8416d708d3ac57c702dc759c2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatStartTime", value)

    @builtins.property
    @jsii.member(jsii_name="repeatType")
    def repeat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatType: The repetition type of the policy validity period for an access control policy. Valid values:

        - Permanent (default)
        - None
        - Daily
        - Weekly
        - Monthly.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repeatType"))

    @repeat_type.setter
    def repeat_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d02118dd9122b0e922d0b4d80370fd846e8dafd4bc79df9c7f89ac428db6e52c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatType", value)

    @builtins.property
    @jsii.member(jsii_name="startTime")
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
        Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "startTime"))

    @start_time.setter
    def start_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2fe10eaa2af356c5c4d50cc2a91f4f0d55efc7290acb6ef957f35f997637538)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startTime", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_action": "aclAction",
        "description": "description",
        "destination": "destination",
        "destination_type": "destinationType",
        "direction": "direction",
        "new_order": "newOrder",
        "proto": "proto",
        "source": "source",
        "source_type": "sourceType",
        "application_name": "applicationName",
        "application_name_list": "applicationNameList",
        "dest_port": "destPort",
        "dest_port_group": "destPortGroup",
        "dest_port_type": "destPortType",
        "domain_resolve_type": "domainResolveType",
        "end_time": "endTime",
        "ip_version": "ipVersion",
        "region_id": "regionId",
        "release": "release",
        "repeat_days": "repeatDays",
        "repeat_end_time": "repeatEndTime",
        "repeat_start_time": "repeatStartTime",
        "repeat_type": "repeatType",
        "start_time": "startTime",
    },
)
class RosControlPolicyProps:
    def __init__(
        self,
        *,
        acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        application_name_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_resolve_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_days: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy

        :param acl_action: 
        :param description: 
        :param destination: 
        :param destination_type: 
        :param direction: 
        :param new_order: 
        :param proto: 
        :param source: 
        :param source_type: 
        :param application_name: 
        :param application_name_list: 
        :param dest_port: 
        :param dest_port_group: 
        :param dest_port_type: 
        :param domain_resolve_type: 
        :param end_time: 
        :param ip_version: 
        :param region_id: 
        :param release: 
        :param repeat_days: 
        :param repeat_end_time: 
        :param repeat_start_time: 
        :param repeat_type: 
        :param start_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b0597838817cd28ec192aedb55f20a5dccb9153f1ecd07ffb4d2d889ef27f04)
            check_type(argname="argument acl_action", value=acl_action, expected_type=type_hints["acl_action"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
            check_type(argname="argument new_order", value=new_order, expected_type=type_hints["new_order"])
            check_type(argname="argument proto", value=proto, expected_type=type_hints["proto"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            check_type(argname="argument application_name_list", value=application_name_list, expected_type=type_hints["application_name_list"])
            check_type(argname="argument dest_port", value=dest_port, expected_type=type_hints["dest_port"])
            check_type(argname="argument dest_port_group", value=dest_port_group, expected_type=type_hints["dest_port_group"])
            check_type(argname="argument dest_port_type", value=dest_port_type, expected_type=type_hints["dest_port_type"])
            check_type(argname="argument domain_resolve_type", value=domain_resolve_type, expected_type=type_hints["domain_resolve_type"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument ip_version", value=ip_version, expected_type=type_hints["ip_version"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument release", value=release, expected_type=type_hints["release"])
            check_type(argname="argument repeat_days", value=repeat_days, expected_type=type_hints["repeat_days"])
            check_type(argname="argument repeat_end_time", value=repeat_end_time, expected_type=type_hints["repeat_end_time"])
            check_type(argname="argument repeat_start_time", value=repeat_start_time, expected_type=type_hints["repeat_start_time"])
            check_type(argname="argument repeat_type", value=repeat_type, expected_type=type_hints["repeat_type"])
            check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_action": acl_action,
            "description": description,
            "destination": destination,
            "destination_type": destination_type,
            "direction": direction,
            "new_order": new_order,
            "proto": proto,
            "source": source,
            "source_type": source_type,
        }
        if application_name is not None:
            self._values["application_name"] = application_name
        if application_name_list is not None:
            self._values["application_name_list"] = application_name_list
        if dest_port is not None:
            self._values["dest_port"] = dest_port
        if dest_port_group is not None:
            self._values["dest_port_group"] = dest_port_group
        if dest_port_type is not None:
            self._values["dest_port_type"] = dest_port_type
        if domain_resolve_type is not None:
            self._values["domain_resolve_type"] = domain_resolve_type
        if end_time is not None:
            self._values["end_time"] = end_time
        if ip_version is not None:
            self._values["ip_version"] = ip_version
        if region_id is not None:
            self._values["region_id"] = region_id
        if release is not None:
            self._values["release"] = release
        if repeat_days is not None:
            self._values["repeat_days"] = repeat_days
        if repeat_end_time is not None:
            self._values["repeat_end_time"] = repeat_end_time
        if repeat_start_time is not None:
            self._values["repeat_start_time"] = repeat_start_time
        if repeat_type is not None:
            self._values["repeat_type"] = repeat_type
        if start_time is not None:
            self._values["start_time"] = start_time

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
    def application_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        applicationName: Application types supported by the security policy.
        The following types of applications are supported: ANY, HTTP, HTTPS, MySQL, SMTP, SMTPS, RDP, VNC, SSH, Redis, MQTT, MongoDB, Memcache, SSL
        NOTE ANY indicates that the policy is applied to all types of applications.
        Either ApplicationNameList or ApplicationName must be passed, not both.
        '''
        result = self._values.get("application_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def application_name_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: applicationNameList: List of application types supported by the access control policy.
        '''
        result = self._values.get("application_name_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
    def domain_resolve_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        domainResolveType: The domain name resolution method of the access control policy. Value:

        - FQDN: Based on FQDN
        - DNS: Based on DNS dynamic resolution
        - FQDN_AND_DNS: Based on FQDN and DNS dynamic resolution
        '''
        result = self._values.get("domain_resolve_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
        Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
        '''
        result = self._values.get("end_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipVersion: IP version. Valid values:

        - 4: IPv4
        - 6: IPv6
        '''
        result = self._values.get("ip_version")
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

    @builtins.property
    def release(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        release: The enabled state of the access control policy. This policy is enabled by default when it is created. Valid values:

        - true: Access control policy is enabled
        - false: Access control policy is not enabled
        '''
        result = self._values.get("release")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_days(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        repeatDays: A collection of repeated dates of policy validity for an access control policy.
        When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
        When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
        Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
        When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
        Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
        '''
        result = self._values.get("repeat_days")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def repeat_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
        '''
        result = self._values.get("repeat_end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
        '''
        result = self._values.get("repeat_start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatType: The repetition type of the policy validity period for an access control policy. Valid values:

        - Permanent (default)
        - None
        - Daily
        - Weekly
        - Monthly.
        '''
        result = self._values.get("repeat_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
        Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
        '''
        result = self._values.get("start_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFwSwitch(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosFwSwitch",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::FwSwitch``, which is used to enable a firewall.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``FwSwitch`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosFwSwitchProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__163a89dee20f79cdf36741ed841422849b92fdae9e614938f5bbce68a252a6a1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__b1c87432aa59080e80e2e4f2bb2ca61c85139817b52204e0ff93d6a18a07ae38)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5c70911431c6c2ea4e2ad16776520557eacd9bd8f218bb1e049c37804191a07b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ipaddrList")
    def ipaddr_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipaddrList: The IP address list.
        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipaddrList"))

    @ipaddr_list.setter
    def ipaddr_list(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f238d7838e13fb0e4f40cbfab6480b5b2dd94aa553bb9c1bf73079cef629cdd6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipaddrList", value)

    @builtins.property
    @jsii.member(jsii_name="regionList")
    def region_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        regionList: The region list.
        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "regionList"))

    @region_list.setter
    def region_list(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__015e71e6ca1be2e0b069e6ab858c6ddfabb791436187d919d46864fd82a839d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionList", value)

    @builtins.property
    @jsii.member(jsii_name="resourceTypeList")
    def resource_type_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceTypeList: The asset type list. Valid values:

        - BastionHostIP: Bastion machine exit IP.
        - BastionHostIngressIP: The entrance IP of the fortress machine.
        - EcsEIP: ECS EIP.
        - EcsPublicIP: ECS public network IP.
        - EIP: Elastic Public IP.
        - EniEIP: Elastic Network card EIP.
        - NatEIP: NAT EIP.
        - SlbEIP: SLB EIP.
        - SlbPublicIP: SLB public network IP.
        - NatPublicIP: NAT public IP
        - HAVIP: High Availability Virtual IP.
        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceTypeList"))

    @resource_type_list.setter
    def resource_type_list(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be7a7b961997b153b97ee7be8fcd472a21ac1f69426bd0ddf2375280e7b1ed22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceTypeList", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosFwSwitchProps",
    jsii_struct_bases=[],
    name_mapping={
        "ipaddr_list": "ipaddrList",
        "region_list": "regionList",
        "resource_type_list": "resourceTypeList",
    },
)
class RosFwSwitchProps:
    def __init__(
        self,
        *,
        ipaddr_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_type_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosFwSwitch``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch

        :param ipaddr_list: 
        :param region_list: 
        :param resource_type_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8063557ef058fb2d3cfaf1f83f5fd42cf9dbad773220a8fe6994a9f1bf3d48c5)
            check_type(argname="argument ipaddr_list", value=ipaddr_list, expected_type=type_hints["ipaddr_list"])
            check_type(argname="argument region_list", value=region_list, expected_type=type_hints["region_list"])
            check_type(argname="argument resource_type_list", value=resource_type_list, expected_type=type_hints["resource_type_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if ipaddr_list is not None:
            self._values["ipaddr_list"] = ipaddr_list
        if region_list is not None:
            self._values["region_list"] = region_list
        if resource_type_list is not None:
            self._values["resource_type_list"] = resource_type_list

    @builtins.property
    def ipaddr_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipaddrList: The IP address list.
        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        '''
        result = self._values.get("ipaddr_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        regionList: The region list.
        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        '''
        result = self._values.get("region_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_type_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceTypeList: The asset type list. Valid values:

        - BastionHostIP: Bastion machine exit IP.
        - BastionHostIngressIP: The entrance IP of the fortress machine.
        - EcsEIP: ECS EIP.
        - EcsPublicIP: ECS public network IP.
        - EIP: Elastic Public IP.
        - EniEIP: Elastic Network card EIP.
        - NatEIP: NAT EIP.
        - SlbEIP: SLB EIP.
        - SlbPublicIP: SLB public network IP.
        - NatPublicIP: NAT public IP
        - HAVIP: High Availability Virtual IP.
        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
        '''
        result = self._values.get("resource_type_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFwSwitchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::Instance``, which is used to create a Cloud Firewall instance.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ca6e2ce473005565dd59807fdfbe4f9c73ef44ed6167a8b2b455d639f549166)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5b4e5f46e88444016bd8adee8b1b688dddf765f263f75c82ca728deb472126ee)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Instance Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__065aa85af927c52b8e1a719a80befd2b58259484b0cdcf41e3074ee506634aeb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method of the firewall instance. Valid values:
        PayAsYouGo: pay-as-you-go
        Subscription: subscription
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1a287677ff5dc8e9a7e26ad58c939caefa6777063570a574cc4939fe726e010)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="accountNum")
    def account_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "accountNum"))

    @account_num.setter
    def account_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28c6771482ee7cd21499e8fc31ad8d438097df29f2bcbf4224ced138689c6d29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "accountNum", value)

    @builtins.property
    @jsii.member(jsii_name="aclExtension")
    def acl_extension(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aclExtension"))

    @acl_extension.setter
    def acl_extension(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5227eefc5b5bb04e6593d44fc866f631713cde8696eb94ca279e6ebf689f46d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclExtension", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to auto pay the bill.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da60333fd8f6b1e521f776f9091983bef7df13bcc1a1a3ce2f04b2c4a0967641)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto renew the prepay instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6cf53bc32ea7edd27e7d6428d36ba1cdfa6c3ac650c893ce5b8878a30012d6f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: Public network processing capability. Valid values: 10 to 15000. Unit: Mbps.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ac34385a313b9f61122e590c933230c71f446a640caac5bff80c4843be2ce2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="ignoreExisting")
    def ignore_existing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ignoreExisting: Whether to ignore existing cloud firewall instance
        False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it.
        True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored.
        If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ignoreExisting"))

    @ignore_existing.setter
    def ignore_existing(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__308c1ded1041521e4a66508be83bea369aab5857ae9e65d2208b51a03dbc13d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ignoreExisting", value)

    @builtins.property
    @jsii.member(jsii_name="ipNum")
    def ip_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipNum: The number of public IPs that can be protected. Valid values: 20 to 4000.PremiumVersion: [20, 1000]
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipNum"))

    @ip_num.setter
    def ip_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4437613bd15614de045869684a718430da090af80f128bdd8d597992f2126f4b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipNum", value)

    @builtins.property
    @jsii.member(jsii_name="logAnalysis")
    def log_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default. If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logAnalysis"))

    @log_analysis.setter
    def log_analysis(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5349e66ccf49e7dde6f2dca3481263518192f3549f692325e82b12088309a1d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logAnalysis", value)

    @builtins.property
    @jsii.member(jsii_name="logStorage")
    def log_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logStorage"))

    @log_storage.setter
    def log_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5d48ebea36427f82b19576b269508204b707868ffc3e2c30823255d6825002b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logStorage", value)

    @builtins.property
    @jsii.member(jsii_name="multiAccountManagement")
    def multi_account_management(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. After the member account is managed by the current account, there will be no need to purchase it separately.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "multiAccountManagement"))

    @multi_account_management.setter
    def multi_account_management(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b1d24a3384a6795234c361dcc69cb8ec10a51d324b09d96b9016c703e9f6617)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiAccountManagement", value)

    @builtins.property
    @jsii.member(jsii_name="natBandwidth")
    def nat_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: natBandwidth: The bandwidth of private network traffic processed by the NAT firewall. The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "natBandwidth"))

    @nat_bandwidth.setter
    def nat_bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50330b2dbd4488e10ffa7c8e77239057a3b4d82afe4a743a5cdbea81c7f56272)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "natBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="natFirewallNum")
    def nat_firewall_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable. Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "natFirewallNum"))

    @nat_firewall_num.setter
    def nat_firewall_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__637d0a692c077dfe8939e86f68d23cc9f5b0d56fcb5b95e176e12db31537a081)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "natFirewallNum", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
        If periodUnit is year, the valid range is 1, 2, 3
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd1aeff571652d2321761cdaf862a7820580bb381539befa73d4582085db9997)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f7a0717e86455f7e01766f13bf364515a425b0e9e1e1946061a0d269f06f480)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="spec")
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spec: The version of Cloud Firewall.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "spec"))

    @spec.setter
    def spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86d132181ec58378d3b27bde850092d1699efd424d46805b90e4fb0a9d6d5fbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "spec", value)

    @builtins.property
    @jsii.member(jsii_name="vpcBandwidth")
    def vpc_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcBandwidth: VPC network processing capability. Valid values: 1000 to 15000. Unit: Mbps.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcBandwidth"))

    @vpc_bandwidth.setter
    def vpc_bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__437b9275a74e45b71579ccb6a64ef9c54914189810be3ae8af6fae615879e9e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="vpcFirewallNum")
    def vpc_firewall_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcFirewallNum: The number of protected VPCs. It will be ignored when spec = "premium_version". Valid values between 2 and 500.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcFirewallNum"))

    @vpc_firewall_num.setter
    def vpc_firewall_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4544fdb11fc24e3296bd3c5b5a7ae9e97da243b91307d0e73c2f3bd9ca8ed56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcFirewallNum", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "pay_type": "payType",
        "account_num": "accountNum",
        "acl_extension": "aclExtension",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "bandwidth": "bandwidth",
        "ignore_existing": "ignoreExisting",
        "ip_num": "ipNum",
        "log_analysis": "logAnalysis",
        "log_storage": "logStorage",
        "multi_account_management": "multiAccountManagement",
        "nat_bandwidth": "natBandwidth",
        "nat_firewall_num": "natFirewallNum",
        "period": "period",
        "period_unit": "periodUnit",
        "spec": "spec",
        "vpc_bandwidth": "vpcBandwidth",
        "vpc_firewall_num": "vpcFirewallNum",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        account_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acl_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_analysis: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_account_management: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nat_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        nat_firewall_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_firewall_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-instance

        :param pay_type: 
        :param account_num: 
        :param acl_extension: 
        :param auto_pay: 
        :param auto_renew: 
        :param bandwidth: 
        :param ignore_existing: 
        :param ip_num: 
        :param log_analysis: 
        :param log_storage: 
        :param multi_account_management: 
        :param nat_bandwidth: 
        :param nat_firewall_num: 
        :param period: 
        :param period_unit: 
        :param spec: 
        :param vpc_bandwidth: 
        :param vpc_firewall_num: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4fe9cc3f79c6d7d961d09e22408fd0120b01510d51076dfda1d6847587f029a)
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument account_num", value=account_num, expected_type=type_hints["account_num"])
            check_type(argname="argument acl_extension", value=acl_extension, expected_type=type_hints["acl_extension"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument ignore_existing", value=ignore_existing, expected_type=type_hints["ignore_existing"])
            check_type(argname="argument ip_num", value=ip_num, expected_type=type_hints["ip_num"])
            check_type(argname="argument log_analysis", value=log_analysis, expected_type=type_hints["log_analysis"])
            check_type(argname="argument log_storage", value=log_storage, expected_type=type_hints["log_storage"])
            check_type(argname="argument multi_account_management", value=multi_account_management, expected_type=type_hints["multi_account_management"])
            check_type(argname="argument nat_bandwidth", value=nat_bandwidth, expected_type=type_hints["nat_bandwidth"])
            check_type(argname="argument nat_firewall_num", value=nat_firewall_num, expected_type=type_hints["nat_firewall_num"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument spec", value=spec, expected_type=type_hints["spec"])
            check_type(argname="argument vpc_bandwidth", value=vpc_bandwidth, expected_type=type_hints["vpc_bandwidth"])
            check_type(argname="argument vpc_firewall_num", value=vpc_firewall_num, expected_type=type_hints["vpc_firewall_num"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "pay_type": pay_type,
        }
        if account_num is not None:
            self._values["account_num"] = account_num
        if acl_extension is not None:
            self._values["acl_extension"] = acl_extension
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if ignore_existing is not None:
            self._values["ignore_existing"] = ignore_existing
        if ip_num is not None:
            self._values["ip_num"] = ip_num
        if log_analysis is not None:
            self._values["log_analysis"] = log_analysis
        if log_storage is not None:
            self._values["log_storage"] = log_storage
        if multi_account_management is not None:
            self._values["multi_account_management"] = multi_account_management
        if nat_bandwidth is not None:
            self._values["nat_bandwidth"] = nat_bandwidth
        if nat_firewall_num is not None:
            self._values["nat_firewall_num"] = nat_firewall_num
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if spec is not None:
            self._values["spec"] = spec
        if vpc_bandwidth is not None:
            self._values["vpc_bandwidth"] = vpc_bandwidth
        if vpc_firewall_num is not None:
            self._values["vpc_firewall_num"] = vpc_firewall_num

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method of the firewall instance. Valid values:
        PayAsYouGo: pay-as-you-go
        Subscription: subscription
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def account_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: accountNum: The number of multi-account management and control is the number of member accounts that you need to uniformly control.
        '''
        result = self._values.get("account_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acl_extension(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aclExtension: When the default access control authorization specifications of your version are not enough, you can purchase global extension specifications of access control. This extension supports shared occupancy with Internet and VPC boundary ACL specifications.
        '''
        result = self._values.get("acl_extension")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoPay: Whether to auto pay the bill.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether to auto renew the prepay instance.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: Public network processing capability. Valid values: 10 to 15000. Unit: Mbps.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ignore_existing(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ignoreExisting: Whether to ignore existing cloud firewall instance
        False: ROS will perform a uniqueness check.If the cloud firewall instance exists, an error will be reported when creating it.
        True: ROS will not check the uniqueness.If the cloud firewall instance exists, the creation process will be ignored.
        If the cloud firewall instance is not created by ROS, it will be ignored during update and delete stage.
        '''
        result = self._values.get("ignore_existing")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipNum: The number of public IPs that can be protected. Valid values: 20 to 4000.PremiumVersion: [20, 1000]
        '''
        result = self._values.get("ip_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_analysis(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logAnalysis: The cloud firewall includes 7 days of free log storage and auditing by default. If you need longer storage time or meet the requirements for equal protection, it is recommended to purchase the log analysis service.
        '''
        result = self._values.get("log_analysis")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logStorage: Reference for purchasing storage capacity: 10M public network bandwidth, 6 months of log storage, recommended purchase of 1000GB log storage capacity
        '''
        result = self._values.get("log_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_account_management(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: multiAccountManagement: Multiple accounts on the enterprise cloud can be managed centrally on the cloud firewall, including asset inventory, ACL policies, attack protection, log reports, etc. After the member account is managed by the current account, there will be no need to purchase it separately.
        '''
        result = self._values.get("multi_account_management")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nat_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: natBandwidth: The bandwidth of private network traffic processed by the NAT firewall. The premium version does not include it by default, the enterprise version has 10Mbps by default, and the ultimate version has 20Mbps by default.
        '''
        result = self._values.get("nat_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def nat_firewall_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: natFirewallNum: The number of NAT gateway instances of the NAT firewall you need to enable. Each NAT gateway instance corresponds to one NAT firewall instance. The premium version does not include it by default, the enterprise version comes with 1 specification by default,and the ultimate version comes with 2 specifications by default.
        '''
        result = self._values.get("nat_firewall_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the firewallIf PeriodUnit is month, the valid range is 1, 3, 6
        If periodUnit is year, the valid range is 1, 2, 3
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription duration. Valid values:
        Month
        Year
        Default value: Month.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: spec: The version of Cloud Firewall.
        '''
        result = self._values.get("spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcBandwidth: VPC network processing capability. Valid values: 1000 to 15000. Unit: Mbps.
        '''
        result = self._values.get("vpc_bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_firewall_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcFirewallNum: The number of protected VPCs. It will be ignored when spec = "premium_version". Valid values between 2 and 500.
        '''
        result = self._values.get("vpc_firewall_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosNatFirewallControlPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::NatFirewallControlPolicy``, which is used to add an access control policy for a NAT firewall.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``NatFirewallControlPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosNatFirewallControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d03a8dfcfbad08792ba0562a43c78207e88bc968825aeff997f2776f4534179a)
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
            type_hints = typing.get_type_hints(_typecheckingstub__cc83da5a1c23098bbbe4415c9b4e8e302b39b8a53f24c415c4d33b5d8b675d56)
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
    @jsii.member(jsii_name="attrDirection")
    def attr_direction(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Direction: The direction of the traffic to which the access control policy applies.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDirection"))

    @builtins.property
    @jsii.member(jsii_name="attrNatGatewayId")
    def attr_nat_gateway_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NatGatewayId: The ID of the NAT gateway.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNatGatewayId"))

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

        aclAction: The action that Cloud Firewall performs on the traffic.Valid values:
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
            type_hints = typing.get_type_hints(_typecheckingstub__00be95ae8ab09bc4ace66e7d36980686b61d0173aefd140e44cf358fe368d259)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclAction", value)

    @builtins.property
    @jsii.member(jsii_name="applicationNameList")
    def application_name_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: applicationNameList: The application types supported by the access control policy.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "applicationNameList"))

    @application_name_list.setter
    def application_name_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2565112fe576e2dbd837a78984aae83321c43c65d098e32a4c787415a3abe6c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applicationNameList", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__03176fe295dec0c0ce1042fa0d159f180edda630d31f1578703c2407e1b8e6e7)
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
        Valid values:
        If DestinationType is set to net, the value of this parameter is a CIDR block.
        Example: 1.2.XX.XX/24
        If DestinationType is set to group, the value of this parameter is an address book.
        Example: db_group
        If DestinationType is set to domain, the value of this parameter is a domain name.
        Example: *.aliyuncs.com
        DestinationType is set to location, the value of this parameter is a location.
        Example: ["BJ11", "ZB"]
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "destination"))

    @destination.setter
    def destination(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44eb55bf2f4eab6586b7689888f19ccb0db9a906f98847fce5d02299eef7f979)
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
            type_hints = typing.get_type_hints(_typecheckingstub__1303ba6e3e2aac40e5e249f604037263cb74cf874e533c518792fbe896b02c50)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationType", value)

    @builtins.property
    @jsii.member(jsii_name="direction")
    def direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        direction: The direction of the traffic to which the access control policy applies. Valid values:
        out: outbound traffic
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "direction"))

    @direction.setter
    def direction(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__296be78203e5da678047afc4bacc4b1201a68b3ca5b3d8688deb3d9ddf53e84a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "direction", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4d4bd97409eda213faab4cac7ece6a4caf89def10a8956b67ca082c969883518)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="natGatewayId")
    def nat_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: natGatewayId: The ID of the NAT gateway.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "natGatewayId"))

    @nat_gateway_id.setter
    def nat_gateway_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95369b90e8d16d0f2f99a7873f79643d207d873085c6d1c4ea71a5b720254c75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "natGatewayId", value)

    @builtins.property
    @jsii.member(jsii_name="newOrder")
    def new_order(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: newOrder: The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "newOrder"))

    @new_order.setter
    def new_order(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20dc10e99b96523edd5c7edd0b4bff78fa8217d9e65b9197951aa92b49c76e82)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "newOrder", value)

    @builtins.property
    @jsii.member(jsii_name="proto")
    def proto(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        proto: The protocol type in the access control policy.Valid values:
        ANY: all types of protocols
        TCP
        UDP
        ICMP
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "proto"))

    @proto.setter
    def proto(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__630124994b99f14dc8aaa6ead52a3e5fda510514ee0da1e657ddf8be7b49bf95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proto", value)

    @builtins.property
    @jsii.member(jsii_name="source")
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: The source address in the access control policy.Valid values:
        If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0/24
        If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "source"))

    @source.setter
    def source(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f5854b12aa0509b020292b37e3380e3f602594ee17f1038cc80306a5dafd96a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "source", value)

    @builtins.property
    @jsii.member(jsii_name="sourceType")
    def source_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        sourceType: The type of the source address in the access control policy.Valid values:
        net: source CIDR block
        group: source address book
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceType"))

    @source_type.setter
    def source_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2058b74ee62f63bbc1f08564fd1600c1079f0cb8c66c7b58c45e655ae19eb77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceType", value)

    @builtins.property
    @jsii.member(jsii_name="destPort")
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPort: The destination port in the access control policy. Valid values:
        If Proto is set to ICMP, DestPort is automatically left empty.
        If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
        If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destPort"))

    @dest_port.setter
    def dest_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83422e6a4780bcb1d251a23209be96ab1a1d16183bae036440f93788b25fcea2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destPort", value)

    @builtins.property
    @jsii.member(jsii_name="destPortGroup")
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: destPortGroup: The name of the destination port address book in the access control policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destPortGroup"))

    @dest_port_group.setter
    def dest_port_group(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__09c066cd68c2fb11a620d151deceedc4cc461697464bc7c5b246894bd0f308c3)
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
        net: source CIDR block
        group: source address book
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destPortType"))

    @dest_port_type.setter
    def dest_port_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e15459a3cc49871219be7d1cc7c288e0f28e88b53cd92e12acfe673f9f28b701)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destPortType", value)

    @builtins.property
    @jsii.member(jsii_name="domainResolveType")
    def domain_resolve_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        domainResolveType: The domain name resolution method of the access control policy. Valid values:
        0: fully qualified domain name (FQDN)-based resolution
        1: Domain Name System (DNS)-based dynamic resolution
        2: FQDN and DNS-based dynamic resolution
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "domainResolveType"))

    @domain_resolve_type.setter
    def domain_resolve_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__689ad3580540882483c21c688adbdb415e8008ab5527f4af3a3873065eb6f237)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainResolveType", value)

    @builtins.property
    @jsii.member(jsii_name="endTime")
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endTime: The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endTime"))

    @end_time.setter
    def end_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ceffb5944e9ea8d3e22ab71caa1aef03ce16c8568dcb9ae89130c0ad9582517)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endTime", value)

    @builtins.property
    @jsii.member(jsii_name="ipVersion")
    def ip_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipVersion: The IP version supported by the access control policy. Valid values:
        4: IPv4 (default)
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipVersion"))

    @ip_version.setter
    def ip_version(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c35990212d90c02a6f8ad454048e87e7686751329b5aca9ed97b196081f37a02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipVersion", value)

    @builtins.property
    @jsii.member(jsii_name="release")
    def release(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        release: Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
        true
        false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "release"))

    @release.setter
    def release(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40c039da4a34b15e44eac7b65c651a7c46c21f617f1feb01bf67a4a2e969067b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "release", value)

    @builtins.property
    @jsii.member(jsii_name="repeatDays")
    def repeat_days(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatDays: The days of a week or of a month on which the access control policy takes effect.
        If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
        If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
        If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repeatDays"))

    @repeat_days.setter
    def repeat_days(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6044843a30e6398d7693a5058bd7ae4b5177e0a5f38fba5b016a1bb773e1785)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatDays", value)

    @builtins.property
    @jsii.member(jsii_name="repeatEndTime")
    def repeat_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: repeatEndTime: The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repeatEndTime"))

    @repeat_end_time.setter
    def repeat_end_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7dd1c3816dd268493ff81e6041ab84d30f8643286d889d607e0de91b86777e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatEndTime", value)

    @builtins.property
    @jsii.member(jsii_name="repeatStartTime")
    def repeat_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: repeatStartTime: The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repeatStartTime"))

    @repeat_start_time.setter
    def repeat_start_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1fb514e888637b16fe4dcfd6ced6054a6672e3af4eac9ee91c18348e09e44078)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatStartTime", value)

    @builtins.property
    @jsii.member(jsii_name="repeatType")
    def repeat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatType: The recurrence type for the access control policy to take effect. Valid values:
        Permanent (default): The policy always takes effect.
        None: The policy takes effect for only once.
        Daily: The policy takes effect on a daily basis.
        Weekly: The policy takes effect on a weekly basis.
        Monthly: The policy takes effect on a monthly basis.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repeatType"))

    @repeat_type.setter
    def repeat_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20703fa7d168b033a11fac720d1248f8ff6032c44aa8bed76e2dad74646ca6e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatType", value)

    @builtins.property
    @jsii.member(jsii_name="startTime")
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: startTime: The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "startTime"))

    @start_time.setter
    def start_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55604c3f974e65b9e4fa85f638972d49541ea3be406488efb6c70a78be1abc5b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startTime", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosNatFirewallControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_action": "aclAction",
        "application_name_list": "applicationNameList",
        "description": "description",
        "destination": "destination",
        "destination_type": "destinationType",
        "direction": "direction",
        "nat_gateway_id": "natGatewayId",
        "new_order": "newOrder",
        "proto": "proto",
        "source": "source",
        "source_type": "sourceType",
        "dest_port": "destPort",
        "dest_port_group": "destPortGroup",
        "dest_port_type": "destPortType",
        "domain_resolve_type": "domainResolveType",
        "end_time": "endTime",
        "ip_version": "ipVersion",
        "release": "release",
        "repeat_days": "repeatDays",
        "repeat_end_time": "repeatEndTime",
        "repeat_start_time": "repeatStartTime",
        "repeat_type": "repeatType",
        "start_time": "startTime",
    },
)
class RosNatFirewallControlPolicyProps:
    def __init__(
        self,
        *,
        acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_name_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        nat_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        domain_resolve_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_days: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosNatFirewallControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-natfirewallcontrolpolicy

        :param acl_action: 
        :param application_name_list: 
        :param description: 
        :param destination: 
        :param destination_type: 
        :param direction: 
        :param nat_gateway_id: 
        :param new_order: 
        :param proto: 
        :param source: 
        :param source_type: 
        :param dest_port: 
        :param dest_port_group: 
        :param dest_port_type: 
        :param domain_resolve_type: 
        :param end_time: 
        :param ip_version: 
        :param release: 
        :param repeat_days: 
        :param repeat_end_time: 
        :param repeat_start_time: 
        :param repeat_type: 
        :param start_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a42ee5f6c75691b00ef2a1a8c5a54ca91a0403c21c36ce275b76d2bf59586431)
            check_type(argname="argument acl_action", value=acl_action, expected_type=type_hints["acl_action"])
            check_type(argname="argument application_name_list", value=application_name_list, expected_type=type_hints["application_name_list"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument direction", value=direction, expected_type=type_hints["direction"])
            check_type(argname="argument nat_gateway_id", value=nat_gateway_id, expected_type=type_hints["nat_gateway_id"])
            check_type(argname="argument new_order", value=new_order, expected_type=type_hints["new_order"])
            check_type(argname="argument proto", value=proto, expected_type=type_hints["proto"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument dest_port", value=dest_port, expected_type=type_hints["dest_port"])
            check_type(argname="argument dest_port_group", value=dest_port_group, expected_type=type_hints["dest_port_group"])
            check_type(argname="argument dest_port_type", value=dest_port_type, expected_type=type_hints["dest_port_type"])
            check_type(argname="argument domain_resolve_type", value=domain_resolve_type, expected_type=type_hints["domain_resolve_type"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument ip_version", value=ip_version, expected_type=type_hints["ip_version"])
            check_type(argname="argument release", value=release, expected_type=type_hints["release"])
            check_type(argname="argument repeat_days", value=repeat_days, expected_type=type_hints["repeat_days"])
            check_type(argname="argument repeat_end_time", value=repeat_end_time, expected_type=type_hints["repeat_end_time"])
            check_type(argname="argument repeat_start_time", value=repeat_start_time, expected_type=type_hints["repeat_start_time"])
            check_type(argname="argument repeat_type", value=repeat_type, expected_type=type_hints["repeat_type"])
            check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_action": acl_action,
            "application_name_list": application_name_list,
            "description": description,
            "destination": destination,
            "destination_type": destination_type,
            "direction": direction,
            "nat_gateway_id": nat_gateway_id,
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
        if domain_resolve_type is not None:
            self._values["domain_resolve_type"] = domain_resolve_type
        if end_time is not None:
            self._values["end_time"] = end_time
        if ip_version is not None:
            self._values["ip_version"] = ip_version
        if release is not None:
            self._values["release"] = release
        if repeat_days is not None:
            self._values["repeat_days"] = repeat_days
        if repeat_end_time is not None:
            self._values["repeat_end_time"] = repeat_end_time
        if repeat_start_time is not None:
            self._values["repeat_start_time"] = repeat_start_time
        if repeat_type is not None:
            self._values["repeat_type"] = repeat_type
        if start_time is not None:
            self._values["start_time"] = start_time

    @builtins.property
    def acl_action(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        aclAction: The action that Cloud Firewall performs on the traffic.Valid values:
        accept: allows the traffic.
        drop: denies the traffic.
        log: monitors the traffic.
        '''
        result = self._values.get("acl_action")
        assert result is not None, "Required property 'acl_action' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def application_name_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: applicationNameList: The application types supported by the access control policy.
        '''
        result = self._values.get("application_name_list")
        assert result is not None, "Required property 'application_name_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

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
        Valid values:
        If DestinationType is set to net, the value of this parameter is a CIDR block.
        Example: 1.2.XX.XX/24
        If DestinationType is set to group, the value of this parameter is an address book.
        Example: db_group
        If DestinationType is set to domain, the value of this parameter is a domain name.
        Example: *.aliyuncs.com
        DestinationType is set to location, the value of this parameter is a location.
        Example: ["BJ11", "ZB"]
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
    def direction(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        direction: The direction of the traffic to which the access control policy applies. Valid values:
        out: outbound traffic
        '''
        result = self._values.get("direction")
        assert result is not None, "Required property 'direction' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def nat_gateway_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: natGatewayId: The ID of the NAT gateway.
        '''
        result = self._values.get("nat_gateway_id")
        assert result is not None, "Required property 'nat_gateway_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def new_order(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: newOrder: The priority of the access control policy. The priority value starts from 1. A small priority value indicates a high priority.
        '''
        result = self._values.get("new_order")
        assert result is not None, "Required property 'new_order' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def proto(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        proto: The protocol type in the access control policy.Valid values:
        ANY: all types of protocols
        TCP
        UDP
        ICMP
        '''
        result = self._values.get("proto")
        assert result is not None, "Required property 'proto' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        source: The source address in the access control policy.Valid values:
        If SourceType is set to net, the value of Source is a CIDR block.Example: 10.2.4.0/24
        If SourceType is set to group, the value of this parameter must be an address book name.Example: db_group
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

        sourceType: The type of the source address in the access control policy.Valid values:
        net: source CIDR block
        group: source address book
        '''
        result = self._values.get("source_type")
        assert result is not None, "Required property 'source_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destPort: The destination port in the access control policy. Valid values:
        If Proto is set to ICMP, DestPort is automatically left empty.
        If Proto is set to TCP, UDP, or ANY and DestPortType is set to group, DestPort is empty.
        If Proto is set to TCP, UDP, or ANY and DestPortType is set to port, the value of DestPort is the destination port number.
        '''
        result = self._values.get("dest_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dest_port_group(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: destPortGroup: The name of the destination port address book in the access control policy.
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
        net: source CIDR block
        group: source address book
        '''
        result = self._values.get("dest_port_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def domain_resolve_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        domainResolveType: The domain name resolution method of the access control policy. Valid values:
        0: fully qualified domain name (FQDN)-based resolution
        1: Domain Name System (DNS)-based dynamic resolution
        2: FQDN and DNS-based dynamic resolution
        '''
        result = self._values.get("domain_resolve_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: endTime: The time when the access control policy stops taking effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of StartTime.
        '''
        result = self._values.get("end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_version(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ipVersion: The IP version supported by the access control policy. Valid values:
        4: IPv4 (default)
        '''
        result = self._values.get("ip_version")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def release(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        release: Specifies whether to enable the access control policy. By default, an access control policy is enabled after it is created. Valid values:
        true
        false
        '''
        result = self._values.get("release")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_days(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatDays: The days of a week or of a month on which the access control policy takes effect.
        If RepeatType is set to Permanent, None, or Daily, RepeatDays is left empty. Example: [].
        If RepeatType is set to Weekly, RepeatDays must be specified. Example: [0, 6].
        If RepeatType is set to Monthly, RepeatDays must be specified. Example: [1, 31].
        '''
        result = self._values.get("repeat_days")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: repeatEndTime: The point in time when the recurrence ends. Example: 23:30. The value must be on the hour or on the half hour, and at least 30 minutes later than the value of RepeatStartTime.
        '''
        result = self._values.get("repeat_end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: repeatStartTime: The point in time when the recurrence starts. Example: 08:00. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of RepeatEndTime.
        '''
        result = self._values.get("repeat_start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatType: The recurrence type for the access control policy to take effect. Valid values:
        Permanent (default): The policy always takes effect.
        None: The policy takes effect for only once.
        Daily: The policy takes effect on a daily basis.
        Weekly: The policy takes effect on a weekly basis.
        Monthly: The policy takes effect on a monthly basis.
        '''
        result = self._values.get("repeat_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: startTime: The time when the access control policy starts to take effect. The value is a UNIX timestamp. Unit: seconds. The value must be on the hour or on the half hour, and at least 30 minutes earlier than the value of EndTime.
        '''
        result = self._values.get("start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosNatFirewallControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTrFirewall(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosTrFirewall",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::TrFirewall``, which is used to create a virtual private cloud (VPC) firewall for a transit router.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TrFirewall`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTrFirewallProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__915815e7f055b29b41215130a763459050b4faec1e87e92414de44cb27b607e6)
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
            type_hints = typing.get_type_hints(_typecheckingstub__56ca702e792362b32a6b6d34e95a66b59b86b34fb5094cc979d3633ff8671db7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFirewallId")
    def attr_firewall_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FirewallId: The instance ID of the VPC firewall.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42c7a161b851820cb9433bd72171588dbd74aef40d03573d296a58289ec78ea5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0aa11ba3d810240ca10546e1a592e3c4150db0f76a65c2e7b6d4da3ae64a621)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="firewallName")
    def firewall_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: firewallName: The name of the firewall.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "firewallName"))

    @firewall_name.setter
    def firewall_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ece092d5abe222bf48cbb32a01a37dfa48a6a54d7c24d3e6771a51e97bb913ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallName", value)

    @builtins.property
    @jsii.member(jsii_name="regionNo")
    def region_no(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: regionNo: The region ID of the route router.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "regionNo"))

    @region_no.setter
    def region_no(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f197a3fc6400195368ff125fd0f93a9972e1dc5777dad807e332337903852e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionNo", value)

    @builtins.property
    @jsii.member(jsii_name="routeMode")
    def route_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        routeMode: The routing mode of the VPC firewall. Valid values:
        managed: automatic mode
        manual: manual mode
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "routeMode"))

    @route_mode.setter
    def route_mode(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d9768f06cbe32788f34c7534937cf900d3802ab41faa70da7b5a352d1e5092d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "routeMode", value)

    @builtins.property
    @jsii.member(jsii_name="transitRouterId")
    def transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterId: The ID of the transit router.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "transitRouterId"))

    @transit_router_id.setter
    def transit_router_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__840a816b2790fc9324fa7a27cc3034f20f7542b49603286f8a4f678a5f733039)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "transitRouterId", value)

    @builtins.property
    @jsii.member(jsii_name="firewallDescription")
    def firewall_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallDescription: The description of the firewall.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "firewallDescription"))

    @firewall_description.setter
    def firewall_description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__494ff8754f6e9f5f195d4aef35af36eed9a1967eb3284c929d85cf92ed00cd55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallDescription", value)

    @builtins.property
    @jsii.member(jsii_name="firewallSubnetCidr")
    def firewall_subnet_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "firewallSubnetCidr"))

    @firewall_subnet_cidr.setter
    def firewall_subnet_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54a6107cb027b357a6fcefeeff4391d1a296a98444b5e4e7f1fffee0ef7d707c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallSubnetCidr", value)

    @builtins.property
    @jsii.member(jsii_name="firewallVpcCidr")
    def firewall_vpc_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "firewallVpcCidr"))

    @firewall_vpc_cidr.setter
    def firewall_vpc_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__286a79382ca21daa42272b0883f3ccf26cea2d01c9edb7d3af624372a5ac1f22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallVpcCidr", value)

    @builtins.property
    @jsii.member(jsii_name="firewallVpcId")
    def firewall_vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "firewallVpcId"))

    @firewall_vpc_id.setter
    def firewall_vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9252b992d5c85a584d4d482012fdde539c9087b5dd421c0c8b0423500ce5acc0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallVpcId", value)

    @builtins.property
    @jsii.member(jsii_name="firewallVswitchId")
    def firewall_vswitch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "firewallVswitchId"))

    @firewall_vswitch_id.setter
    def firewall_vswitch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c859668da60e0be76c2272370a0cea487b460b7aac39eed0f86f408d61f61d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallVswitchId", value)

    @builtins.property
    @jsii.member(jsii_name="trAttachmentMasterCidr")
    def tr_attachment_master_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "trAttachmentMasterCidr"))

    @tr_attachment_master_cidr.setter
    def tr_attachment_master_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8fd4da2c97ebb73af77bb878f3845b1d82244a59b0cbfa6dd7d26d15a0d1c845)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trAttachmentMasterCidr", value)

    @builtins.property
    @jsii.member(jsii_name="trAttachmentMasterZone")
    def tr_attachment_master_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trAttachmentMasterZone: The primary zone for the vSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "trAttachmentMasterZone"))

    @tr_attachment_master_zone.setter
    def tr_attachment_master_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88a2aa4905b2a0bf55a22f6446125b1ee21c36fe332a3f158eb148d6b1f2a598)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trAttachmentMasterZone", value)

    @builtins.property
    @jsii.member(jsii_name="trAttachmentSlaveCidr")
    def tr_attachment_slave_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "trAttachmentSlaveCidr"))

    @tr_attachment_slave_cidr.setter
    def tr_attachment_slave_cidr(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83884a298bb0db83921aa04e2a44e2c6e5ff6abbaf4ab443a3958a5d028e6d0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trAttachmentSlaveCidr", value)

    @builtins.property
    @jsii.member(jsii_name="trAttachmentSlaveZone")
    def tr_attachment_slave_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trAttachmentSlaveZone: The secondary zone for the vSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "trAttachmentSlaveZone"))

    @tr_attachment_slave_zone.setter
    def tr_attachment_slave_zone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18a83e24a8677d1b4e8c526a4f72dfa0164fb9af943279cc8031333b37665d77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "trAttachmentSlaveZone", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosTrFirewallProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "firewall_name": "firewallName",
        "region_no": "regionNo",
        "route_mode": "routeMode",
        "transit_router_id": "transitRouterId",
        "firewall_description": "firewallDescription",
        "firewall_subnet_cidr": "firewallSubnetCidr",
        "firewall_vpc_cidr": "firewallVpcCidr",
        "firewall_vpc_id": "firewallVpcId",
        "firewall_vswitch_id": "firewallVswitchId",
        "tr_attachment_master_cidr": "trAttachmentMasterCidr",
        "tr_attachment_master_zone": "trAttachmentMasterZone",
        "tr_attachment_slave_cidr": "trAttachmentSlaveCidr",
        "tr_attachment_slave_zone": "trAttachmentSlaveZone",
    },
)
class RosTrFirewallProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region_no: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        route_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        firewall_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        firewall_subnet_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        firewall_vpc_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        firewall_vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        firewall_vswitch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tr_attachment_master_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tr_attachment_master_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tr_attachment_slave_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tr_attachment_slave_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTrFirewall``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall

        :param cen_id: 
        :param firewall_name: 
        :param region_no: 
        :param route_mode: 
        :param transit_router_id: 
        :param firewall_description: 
        :param firewall_subnet_cidr: 
        :param firewall_vpc_cidr: 
        :param firewall_vpc_id: 
        :param firewall_vswitch_id: 
        :param tr_attachment_master_cidr: 
        :param tr_attachment_master_zone: 
        :param tr_attachment_slave_cidr: 
        :param tr_attachment_slave_zone: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19400158cd695c5281eb94aa82ec122ad379e6d9fec871190099fee4c660aef8)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument firewall_name", value=firewall_name, expected_type=type_hints["firewall_name"])
            check_type(argname="argument region_no", value=region_no, expected_type=type_hints["region_no"])
            check_type(argname="argument route_mode", value=route_mode, expected_type=type_hints["route_mode"])
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
            check_type(argname="argument firewall_description", value=firewall_description, expected_type=type_hints["firewall_description"])
            check_type(argname="argument firewall_subnet_cidr", value=firewall_subnet_cidr, expected_type=type_hints["firewall_subnet_cidr"])
            check_type(argname="argument firewall_vpc_cidr", value=firewall_vpc_cidr, expected_type=type_hints["firewall_vpc_cidr"])
            check_type(argname="argument firewall_vpc_id", value=firewall_vpc_id, expected_type=type_hints["firewall_vpc_id"])
            check_type(argname="argument firewall_vswitch_id", value=firewall_vswitch_id, expected_type=type_hints["firewall_vswitch_id"])
            check_type(argname="argument tr_attachment_master_cidr", value=tr_attachment_master_cidr, expected_type=type_hints["tr_attachment_master_cidr"])
            check_type(argname="argument tr_attachment_master_zone", value=tr_attachment_master_zone, expected_type=type_hints["tr_attachment_master_zone"])
            check_type(argname="argument tr_attachment_slave_cidr", value=tr_attachment_slave_cidr, expected_type=type_hints["tr_attachment_slave_cidr"])
            check_type(argname="argument tr_attachment_slave_zone", value=tr_attachment_slave_zone, expected_type=type_hints["tr_attachment_slave_zone"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "firewall_name": firewall_name,
            "region_no": region_no,
            "route_mode": route_mode,
            "transit_router_id": transit_router_id,
        }
        if firewall_description is not None:
            self._values["firewall_description"] = firewall_description
        if firewall_subnet_cidr is not None:
            self._values["firewall_subnet_cidr"] = firewall_subnet_cidr
        if firewall_vpc_cidr is not None:
            self._values["firewall_vpc_cidr"] = firewall_vpc_cidr
        if firewall_vpc_id is not None:
            self._values["firewall_vpc_id"] = firewall_vpc_id
        if firewall_vswitch_id is not None:
            self._values["firewall_vswitch_id"] = firewall_vswitch_id
        if tr_attachment_master_cidr is not None:
            self._values["tr_attachment_master_cidr"] = tr_attachment_master_cidr
        if tr_attachment_master_zone is not None:
            self._values["tr_attachment_master_zone"] = tr_attachment_master_zone
        if tr_attachment_slave_cidr is not None:
            self._values["tr_attachment_slave_cidr"] = tr_attachment_slave_cidr
        if tr_attachment_slave_zone is not None:
            self._values["tr_attachment_slave_zone"] = tr_attachment_slave_zone

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def firewall_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: firewallName: The name of the firewall.
        '''
        result = self._values.get("firewall_name")
        assert result is not None, "Required property 'firewall_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region_no(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: regionNo: The region ID of the route router.
        '''
        result = self._values.get("region_no")
        assert result is not None, "Required property 'region_no' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def route_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        routeMode: The routing mode of the VPC firewall. Valid values:
        managed: automatic mode
        manual: manual mode
        '''
        result = self._values.get("route_mode")
        assert result is not None, "Required property 'route_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: transitRouterId: The ID of the transit router.
        '''
        result = self._values.get("transit_router_id")
        assert result is not None, "Required property 'transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def firewall_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallDescription: The description of the firewall.
        '''
        result = self._values.get("firewall_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def firewall_subnet_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.
        '''
        result = self._values.get("firewall_subnet_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def firewall_vpc_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
        '''
        result = self._values.get("firewall_vpc_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def firewall_vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.
        '''
        result = self._values.get("firewall_vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def firewall_vswitch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode.
        '''
        result = self._values.get("firewall_vswitch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tr_attachment_master_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
        '''
        result = self._values.get("tr_attachment_master_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tr_attachment_master_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trAttachmentMasterZone: The primary zone for the vSwitch.
        '''
        result = self._values.get("tr_attachment_master_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tr_attachment_slave_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
        '''
        result = self._values.get("tr_attachment_slave_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tr_attachment_slave_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: trAttachmentSlaveZone: The secondary zone for the vSwitch.
        '''
        result = self._values.get("tr_attachment_slave_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrFirewallProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTrFirewallRoutePolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::TrFirewallRoutePolicy``, which is used to create a routing policy for a virtual private cloud (VPC) firewall of a transit router.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``TrFirewallRoutePolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTrFirewallRoutePolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5df98aeb767d89733047abf05562e54a04c9821893afd51bfd97d66d7001949d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a05fa374192aaeee7a4a2530e9e3df09443f72310b97f53031702848a86ee3dd)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrFirewallId")
    def attr_firewall_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FirewallId: The instance ID of the VPC firewall.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="attrTrFirewallRoutePolicyId")
    def attr_tr_firewall_route_policy_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrFirewallRoutePolicyId: The ID of the routing policy.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrFirewallRoutePolicyId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__57e07dbc4e8be8d5c6d2b04d64c61ea258a498029429ac9d03999aa360b888b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="firewallId")
    def firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: firewallId: The instance ID of the VPC firewall.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "firewallId"))

    @firewall_id.setter
    def firewall_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaea9e67870480dbb8439351db228197718ee6599eaab2f27ebac05eab8ca133)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallId", value)

    @builtins.property
    @jsii.member(jsii_name="policyDescription")
    def policy_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyDescription: The description of the traffic redirection instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyDescription"))

    @policy_description.setter
    def policy_description(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4724871be475578782648d5ab497d01c86c73ecf6c6fe94ab25f6370bfbbcdc3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyDescription", value)

    @builtins.property
    @jsii.member(jsii_name="policyName")
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: The name of the traffic redirection instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyName"))

    @policy_name.setter
    def policy_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50accf8dedb44770a5a9bf0b24639bbb4c4f458fdf40830ee05a62b42aabde9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyName", value)

    @builtins.property
    @jsii.member(jsii_name="policyType")
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        policyType: The type of the traffic redirection scenario of the VPC firewall. Valid values:
        fullmesh: interconnected instances
        one_to_one: instance to instance
        end_to_end: instance to instances
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "policyType"))

    @policy_type.setter
    def policy_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f86295a35f96bf840adbbc093c96c0a322b790e708b22254351bca348b5111fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "policyType", value)

    @builtins.property
    @jsii.member(jsii_name="destCandidateList")
    def dest_candidate_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTrFirewallRoutePolicy.DestCandidateListProperty"]]]]:
        '''
        :Property: destCandidateList: The secondary traffic redirection instances.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTrFirewallRoutePolicy.DestCandidateListProperty"]]]], jsii.get(self, "destCandidateList"))

    @dest_candidate_list.setter
    def dest_candidate_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTrFirewallRoutePolicy.DestCandidateListProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa38707dd1fb5dbc8b642d3a91dd445abb0e065a8f2deb6694fb0a3e2921ca0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destCandidateList", value)

    @builtins.property
    @jsii.member(jsii_name="srcCandidateList")
    def src_candidate_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTrFirewallRoutePolicy.SrcCandidateListProperty"]]]]:
        '''
        :Property: srcCandidateList: The primary traffic redirection instances.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTrFirewallRoutePolicy.SrcCandidateListProperty"]]]], jsii.get(self, "srcCandidateList"))

    @src_candidate_list.setter
    def src_candidate_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTrFirewallRoutePolicy.SrcCandidateListProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b1a1828595a6fa11efc1412524c580e5376a8f4916d9160d626012d7b796162)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "srcCandidateList", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.DestCandidateListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "candidate_id": "candidateId",
            "candidate_type": "candidateType",
        },
    )
    class DestCandidateListProperty:
        def __init__(
            self,
            *,
            candidate_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            candidate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param candidate_id: 
            :param candidate_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4a9473a1c8570988048731b30515d36b49139e50be85cb5b28cf3f4177960a91)
                check_type(argname="argument candidate_id", value=candidate_id, expected_type=type_hints["candidate_id"])
                check_type(argname="argument candidate_type", value=candidate_type, expected_type=type_hints["candidate_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "candidate_id": candidate_id,
            }
            if candidate_type is not None:
                self._values["candidate_type"] = candidate_type

        @builtins.property
        def candidate_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: candidateId: The ID of the traffic redirection instance.
            '''
            result = self._values.get("candidate_id")
            assert result is not None, "Required property 'candidate_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def candidate_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: candidateType: The type of the traffic redirection instance.
            '''
            result = self._values.get("candidate_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DestCandidateListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicy.SrcCandidateListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "candidate_id": "candidateId",
            "candidate_type": "candidateType",
        },
    )
    class SrcCandidateListProperty:
        def __init__(
            self,
            *,
            candidate_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            candidate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param candidate_id: 
            :param candidate_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__3a62dce062c1c22748e4f0c9c35173baa23d22f53e16a74bf0d4593434c3ada5)
                check_type(argname="argument candidate_id", value=candidate_id, expected_type=type_hints["candidate_id"])
                check_type(argname="argument candidate_type", value=candidate_type, expected_type=type_hints["candidate_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "candidate_id": candidate_id,
            }
            if candidate_type is not None:
                self._values["candidate_type"] = candidate_type

        @builtins.property
        def candidate_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: candidateId: The ID of the traffic redirection instance.
            '''
            result = self._values.get("candidate_id")
            assert result is not None, "Required property 'candidate_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def candidate_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: candidateType: The type of the traffic redirection instance.
            '''
            result = self._values.get("candidate_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SrcCandidateListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosTrFirewallRoutePolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "firewall_id": "firewallId",
        "policy_description": "policyDescription",
        "policy_name": "policyName",
        "policy_type": "policyType",
        "dest_candidate_list": "destCandidateList",
        "src_candidate_list": "srcCandidateList",
    },
)
class RosTrFirewallRoutePolicyProps:
    def __init__(
        self,
        *,
        firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_candidate_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTrFirewallRoutePolicy.DestCandidateListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        src_candidate_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTrFirewallRoutePolicy.SrcCandidateListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosTrFirewallRoutePolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy

        :param firewall_id: 
        :param policy_description: 
        :param policy_name: 
        :param policy_type: 
        :param dest_candidate_list: 
        :param src_candidate_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4af979beb4f36ebec4f3c1f1ccd35ecc19ef722543247ffa9eabe09a2b3ce4de)
            check_type(argname="argument firewall_id", value=firewall_id, expected_type=type_hints["firewall_id"])
            check_type(argname="argument policy_description", value=policy_description, expected_type=type_hints["policy_description"])
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument dest_candidate_list", value=dest_candidate_list, expected_type=type_hints["dest_candidate_list"])
            check_type(argname="argument src_candidate_list", value=src_candidate_list, expected_type=type_hints["src_candidate_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "firewall_id": firewall_id,
            "policy_description": policy_description,
            "policy_name": policy_name,
            "policy_type": policy_type,
        }
        if dest_candidate_list is not None:
            self._values["dest_candidate_list"] = dest_candidate_list
        if src_candidate_list is not None:
            self._values["src_candidate_list"] = src_candidate_list

    @builtins.property
    def firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: firewallId: The instance ID of the VPC firewall.
        '''
        result = self._values.get("firewall_id")
        assert result is not None, "Required property 'firewall_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyDescription: The description of the traffic redirection instance.
        '''
        result = self._values.get("policy_description")
        assert result is not None, "Required property 'policy_description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: policyName: The name of the traffic redirection instance.
        '''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        policyType: The type of the traffic redirection scenario of the VPC firewall. Valid values:
        fullmesh: interconnected instances
        one_to_one: instance to instance
        end_to_end: instance to instances
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_candidate_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTrFirewallRoutePolicy.DestCandidateListProperty]]]]:
        '''
        :Property: destCandidateList: The secondary traffic redirection instances.
        '''
        result = self._values.get("dest_candidate_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTrFirewallRoutePolicy.DestCandidateListProperty]]]], result)

    @builtins.property
    def src_candidate_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTrFirewallRoutePolicy.SrcCandidateListProperty]]]]:
        '''
        :Property: srcCandidateList: The primary traffic redirection instances.
        '''
        result = self._values.get("src_candidate_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTrFirewallRoutePolicy.SrcCandidateListProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrFirewallRoutePolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpcFirewallCen(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallCen",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::VpcFirewallCen``, which is used to create a virtual private cloud (VPC) firewall.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``VpcFirewallCen`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVpcFirewallCenProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f22f3e5944094c547ad8bad8f9c8a31ca136ff08b41bfc024ec8f994a7cbe824)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ba97770f3578f944a41aa48b2309ad37a28b007cbd9932934834e015515f1d61)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcFirewallId")
    def attr_vpc_firewall_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcFirewallId: The instance ID of the VPC firewall.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="cenId")
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "cenId"))

    @cen_id.setter
    def cen_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__997befe9210c787d2315ec2d5aabbbc9a26249082044017eb7dffa281f589f29)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "cenId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__522a493e0286d653f01dd3ca390307b083fcd630d16e2fa463c41f158a292f7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="firewallSwitch")
    def firewall_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        firewallSwitch: Specifies whether to enable the VPC firewall. Valid values:
        open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "firewallSwitch"))

    @firewall_switch.setter
    def firewall_switch(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54c14701abcf15aa1ae5e08405ddbe394f022c862428f316cd59f9c1a25e3468)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="firewallVpcZoneId")
    def firewall_vpc_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: firewallVpcZoneId: The ID of the zone to which the vSwitch belongs. If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "firewallVpcZoneId"))

    @firewall_vpc_zone_id.setter
    def firewall_vpc_zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7aaaf8bbe7a6c9bb085627f3df4cf2e95d9138d119e0b8b7bed36ea60a0e535)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallVpcZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="networkInstanceId")
    def network_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "networkInstanceId"))

    @network_instance_id.setter
    def network_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69b108f41abcec291ef53e2bcaac6d0fc3054051ec4a54a505343318b0a481a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "networkInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcFirewallName")
    def vpc_firewall_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcFirewallName: The instance name of the VPC firewall.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcFirewallName"))

    @vpc_firewall_name.setter
    def vpc_firewall_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__542fc382c63a5f4fdb6775b8a0092947383e4b1c8665e94a11475f5f2b894f32)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcFirewallName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcRegion")
    def vpc_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcRegion: The ID of the region to which the VPC belongs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcRegion"))

    @vpc_region.setter
    def vpc_region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c05d5737bd6790137242a7c504b8c0b4820c45d2f7da5cb1f32adf59e4011233)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcRegion", value)

    @builtins.property
    @jsii.member(jsii_name="firewallVpcCidrBlock")
    def firewall_vpc_cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall. You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "firewallVpcCidrBlock"))

    @firewall_vpc_cidr_block.setter
    def firewall_vpc_cidr_block(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d5e5f0ddbae6e3df9f9b4092128be0b50165024b09027238058a321f696d044)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallVpcCidrBlock", value)

    @builtins.property
    @jsii.member(jsii_name="firewallVSwitchCidrBlock")
    def firewall_v_switch_cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "firewallVSwitchCidrBlock"))

    @firewall_v_switch_cidr_block.setter
    def firewall_v_switch_cidr_block(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b5cb829d2d707dc32ed992ff5e5a218cc1490dc78d9a673f5902b714b12db3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallVSwitchCidrBlock", value)

    @builtins.property
    @jsii.member(jsii_name="memberUid")
    def member_uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memberUid: The UID of the member that is managed by your Alibaba Cloud account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "memberUid"))

    @member_uid.setter
    def member_uid(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f193e42e5137a220896982e9377590156ff4c4c638c35490550fefc3f899345)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memberUid", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b85ab14bd90541334f9315697049291fb77ddb219a423a340c32774a488107ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallCenProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "firewall_switch": "firewallSwitch",
        "firewall_vpc_zone_id": "firewallVpcZoneId",
        "network_instance_id": "networkInstanceId",
        "vpc_firewall_name": "vpcFirewallName",
        "vpc_region": "vpcRegion",
        "firewall_vpc_cidr_block": "firewallVpcCidrBlock",
        "firewall_v_switch_cidr_block": "firewallVSwitchCidrBlock",
        "member_uid": "memberUid",
        "v_switch_id": "vSwitchId",
    },
)
class RosVpcFirewallCenProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        firewall_switch: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        firewall_vpc_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        firewall_vpc_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        firewall_v_switch_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVpcFirewallCen``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen

        :param cen_id: 
        :param firewall_switch: 
        :param firewall_vpc_zone_id: 
        :param network_instance_id: 
        :param vpc_firewall_name: 
        :param vpc_region: 
        :param firewall_vpc_cidr_block: 
        :param firewall_v_switch_cidr_block: 
        :param member_uid: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__464acebcf714180a1bc557c28aa7a6e660584fc66a3358f1c51667af813d9df3)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument firewall_switch", value=firewall_switch, expected_type=type_hints["firewall_switch"])
            check_type(argname="argument firewall_vpc_zone_id", value=firewall_vpc_zone_id, expected_type=type_hints["firewall_vpc_zone_id"])
            check_type(argname="argument network_instance_id", value=network_instance_id, expected_type=type_hints["network_instance_id"])
            check_type(argname="argument vpc_firewall_name", value=vpc_firewall_name, expected_type=type_hints["vpc_firewall_name"])
            check_type(argname="argument vpc_region", value=vpc_region, expected_type=type_hints["vpc_region"])
            check_type(argname="argument firewall_vpc_cidr_block", value=firewall_vpc_cidr_block, expected_type=type_hints["firewall_vpc_cidr_block"])
            check_type(argname="argument firewall_v_switch_cidr_block", value=firewall_v_switch_cidr_block, expected_type=type_hints["firewall_v_switch_cidr_block"])
            check_type(argname="argument member_uid", value=member_uid, expected_type=type_hints["member_uid"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "firewall_switch": firewall_switch,
            "firewall_vpc_zone_id": firewall_vpc_zone_id,
            "network_instance_id": network_instance_id,
            "vpc_firewall_name": vpc_firewall_name,
            "vpc_region": vpc_region,
        }
        if firewall_vpc_cidr_block is not None:
            self._values["firewall_vpc_cidr_block"] = firewall_vpc_cidr_block
        if firewall_v_switch_cidr_block is not None:
            self._values["firewall_v_switch_cidr_block"] = firewall_v_switch_cidr_block
        if member_uid is not None:
            self._values["member_uid"] = member_uid
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: cenId: The ID of the CEN instance.
        '''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def firewall_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        firewallSwitch: Specifies whether to enable the VPC firewall. Valid values:
        open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
        '''
        result = self._values.get("firewall_switch")
        assert result is not None, "Required property 'firewall_switch' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def firewall_vpc_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: firewallVpcZoneId: The ID of the zone to which the vSwitch belongs. If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
        '''
        result = self._values.get("firewall_vpc_zone_id")
        assert result is not None, "Required property 'firewall_vpc_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.
        '''
        result = self._values.get("network_instance_id")
        assert result is not None, "Required property 'network_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_firewall_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcFirewallName: The instance name of the VPC firewall.
        '''
        result = self._values.get("vpc_firewall_name")
        assert result is not None, "Required property 'vpc_firewall_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcRegion: The ID of the region to which the VPC belongs.
        '''
        result = self._values.get("vpc_region")
        assert result is not None, "Required property 'vpc_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def firewall_vpc_cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall. You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
        '''
        result = self._values.get("firewall_vpc_cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def firewall_v_switch_cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.
        '''
        result = self._values.get("firewall_v_switch_cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def member_uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memberUid: The UID of the member that is managed by your Alibaba Cloud account.
        '''
        result = self._values.get("member_uid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcFirewallCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpcFirewallConfigure(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::VpcFirewallConfigure``, which is used to create a virtual private cloud (VPC) firewall.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``VpcFirewallConfigure`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVpcFirewallConfigureProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdd9dc910aecbb319447cd0f4471c9f1300c04e6d83963ca7efab03bd030db35)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8db7f5b2f137467d356cf028453fe9851b77d6bee58900a2e9a928df10a3f466)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcFirewallId")
    def attr_vpc_firewall_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcFirewallId: The instance ID of the VPC firewall.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcFirewallId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0d283a5577b51f90c06f943393f28542db3cc5fbf5d68b599e24ecf37c070e55)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="firewallSwitch")
    def firewall_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        firewallSwitch: The status of the VPC firewall after you create the firewall. Valid values:
        open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "firewallSwitch"))

    @firewall_switch.setter
    def firewall_switch(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__001b1d442f782a7a3257c41a167b22feea49287040a68736755f009ceb118148)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "firewallSwitch", value)

    @builtins.property
    @jsii.member(jsii_name="localVpcCidrTableList")
    def local_vpc_cidr_table_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcFirewallConfigure.LocalVpcCidrTableListProperty"]]]:
        '''
        :Property: localVpcCidrTableList: The CIDR blocks of the local VPC.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcFirewallConfigure.LocalVpcCidrTableListProperty"]]], jsii.get(self, "localVpcCidrTableList"))

    @local_vpc_cidr_table_list.setter
    def local_vpc_cidr_table_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcFirewallConfigure.LocalVpcCidrTableListProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98a29c1edb335ff0b0f1fea77e98c6e82c67b21cdd50ef706e295024ad678794)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localVpcCidrTableList", value)

    @builtins.property
    @jsii.member(jsii_name="localVpcId")
    def local_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: localVpcId: The ID of the local VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "localVpcId"))

    @local_vpc_id.setter
    def local_vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e79c99a8260218363b2cf3625f0a358b87be65e921497985e76178bcde11b522)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localVpcId", value)

    @builtins.property
    @jsii.member(jsii_name="localVpcRegion")
    def local_vpc_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: localVpcRegion: The region ID of the local VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "localVpcRegion"))

    @local_vpc_region.setter
    def local_vpc_region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8e9f88d4160d456fc56dd2a424021a3616cc1665845486b1cc5afd25159281ae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localVpcRegion", value)

    @builtins.property
    @jsii.member(jsii_name="peerVpcCidrTableList")
    def peer_vpc_cidr_table_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcFirewallConfigure.PeerVpcCidrTableListProperty"]]]:
        '''
        :Property: peerVpcCidrTableList: The CIDR blocks of the peer VPC.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcFirewallConfigure.PeerVpcCidrTableListProperty"]]], jsii.get(self, "peerVpcCidrTableList"))

    @peer_vpc_cidr_table_list.setter
    def peer_vpc_cidr_table_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcFirewallConfigure.PeerVpcCidrTableListProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47927f86deb98310963525bb10bc03a52c464e592d59dec79702dde4ed2f0c4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "peerVpcCidrTableList", value)

    @builtins.property
    @jsii.member(jsii_name="peerVpcId")
    def peer_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: peerVpcId: The ID of the peer VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "peerVpcId"))

    @peer_vpc_id.setter
    def peer_vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca9073277639ec6888555f8438550d88b2b7054295b3a9e2887dcfc73a8bb510)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "peerVpcId", value)

    @builtins.property
    @jsii.member(jsii_name="peerVpcRegion")
    def peer_vpc_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: peerVpcRegion: The region ID of the peer VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "peerVpcRegion"))

    @peer_vpc_region.setter
    def peer_vpc_region(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11c19b08d04203d04e4b47e063cdc42006bcbaf8effb7c298a4ec11f33fe12bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "peerVpcRegion", value)

    @builtins.property
    @jsii.member(jsii_name="vpcFirewallName")
    def vpc_firewall_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcFirewallName: The instance name of the VPC firewall.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcFirewallName"))

    @vpc_firewall_name.setter
    def vpc_firewall_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__702631933445a472eb04c20fe9f0e1c74fbf6d0ac2e677aee7878b36bbf19faf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcFirewallName", value)

    @builtins.property
    @jsii.member(jsii_name="memberUid")
    def member_uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memberUid: The UID of the member that is managed by your Alibaba Cloud account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "memberUid"))

    @member_uid.setter
    def member_uid(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4bcbbf5806d89e3519d5de550051b9ee509f08d11a08bd585df3dad1bd307c7c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memberUid", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.LocalVpcCidrTableListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "route_table_id": "routeTableId",
            "route_entry_list": "routeEntryList",
        },
    )
    class LocalVpcCidrTableListProperty:
        def __init__(
            self,
            *,
            route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            route_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosVpcFirewallConfigure.RouteEntryListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param route_table_id: 
            :param route_entry_list: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ed29d8067a4aa3004f8cb40bd88efd5066de2ca57e8a71eed9f1ae04739f4af8)
                check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
                check_type(argname="argument route_entry_list", value=route_entry_list, expected_type=type_hints["route_entry_list"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "route_table_id": route_table_id,
            }
            if route_entry_list is not None:
                self._values["route_entry_list"] = route_entry_list

        @builtins.property
        def route_table_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: routeTableId: The ID of the route table for the local VPC.
            '''
            result = self._values.get("route_table_id")
            assert result is not None, "Required property 'route_table_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def route_entry_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcFirewallConfigure.RouteEntryListProperty"]]]]:
            '''
            :Property: routeEntryList: The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters.
            '''
            result = self._values.get("route_entry_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcFirewallConfigure.RouteEntryListProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LocalVpcCidrTableListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "route_table_id": "routeTableId",
            "route_entry_list": "routeEntryList",
        },
    )
    class PeerVpcCidrTableListProperty:
        def __init__(
            self,
            *,
            route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            route_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosVpcFirewallConfigure.PeerVpcCidrTableListRouteEntryListProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param route_table_id: 
            :param route_entry_list: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1404e6014e0fa6f79c601a295b50ddff6811229e413c322d74e37b06e2c79d1f)
                check_type(argname="argument route_table_id", value=route_table_id, expected_type=type_hints["route_table_id"])
                check_type(argname="argument route_entry_list", value=route_entry_list, expected_type=type_hints["route_entry_list"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "route_table_id": route_table_id,
            }
            if route_entry_list is not None:
                self._values["route_entry_list"] = route_entry_list

        @builtins.property
        def route_table_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: routeTableId: The ID of the route table for the peer VPC.
            '''
            result = self._values.get("route_table_id")
            assert result is not None, "Required property 'route_table_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def route_entry_list(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcFirewallConfigure.PeerVpcCidrTableListRouteEntryListProperty"]]]]:
            '''
            :Property: routeEntryList: The value is a JSON string that contains the DestinationCidr and NextHopInstanceId parameters.
            '''
            result = self._values.get("route_entry_list")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVpcFirewallConfigure.PeerVpcCidrTableListRouteEntryListProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PeerVpcCidrTableListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.PeerVpcCidrTableListRouteEntryListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "destination_cidr": "destinationCidr",
            "next_hop_instance_id": "nextHopInstanceId",
        },
    )
    class PeerVpcCidrTableListRouteEntryListProperty:
        def __init__(
            self,
            *,
            destination_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            next_hop_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param destination_cidr: 
            :param next_hop_instance_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4e03232a331def5e797d1681769c86cd1bc460c7c0fddd732345ff493ba465d5)
                check_type(argname="argument destination_cidr", value=destination_cidr, expected_type=type_hints["destination_cidr"])
                check_type(argname="argument next_hop_instance_id", value=next_hop_instance_id, expected_type=type_hints["next_hop_instance_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "destination_cidr": destination_cidr,
            }
            if next_hop_instance_id is not None:
                self._values["next_hop_instance_id"] = next_hop_instance_id

        @builtins.property
        def destination_cidr(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: destinationCidr: The DestinationCidr parameter indicates the destination CIDR block of the peer VPC.
            '''
            result = self._values.get("destination_cidr")
            assert result is not None, "Required property 'destination_cidr' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def next_hop_instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nextHopInstanceId: The NextHopInstanceId parameter indicates the instance ID of the next hop for the peer VPC.
            '''
            result = self._values.get("next_hop_instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PeerVpcCidrTableListRouteEntryListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigure.RouteEntryListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "destination_cidr": "destinationCidr",
            "next_hop_instance_id": "nextHopInstanceId",
        },
    )
    class RouteEntryListProperty:
        def __init__(
            self,
            *,
            destination_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            next_hop_instance_id: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param destination_cidr: 
            :param next_hop_instance_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__61ccd0d62adee2977ad013b98df97e3f13487527545f42ad0f06a81a00959f8c)
                check_type(argname="argument destination_cidr", value=destination_cidr, expected_type=type_hints["destination_cidr"])
                check_type(argname="argument next_hop_instance_id", value=next_hop_instance_id, expected_type=type_hints["next_hop_instance_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "destination_cidr": destination_cidr,
            }
            if next_hop_instance_id is not None:
                self._values["next_hop_instance_id"] = next_hop_instance_id

        @builtins.property
        def destination_cidr(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: destinationCidr: The DestinationCidr parameter indicates the destination CIDR block of the local VPC.
            '''
            result = self._values.get("destination_cidr")
            assert result is not None, "Required property 'destination_cidr' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def next_hop_instance_id(
            self,
        ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: nextHopInstanceId: The NextHopInstanceId parameter indicates the instance ID of the next hop for the local VPC.
            '''
            result = self._values.get("next_hop_instance_id")
            return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RouteEntryListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallConfigureProps",
    jsii_struct_bases=[],
    name_mapping={
        "firewall_switch": "firewallSwitch",
        "local_vpc_cidr_table_list": "localVpcCidrTableList",
        "local_vpc_id": "localVpcId",
        "local_vpc_region": "localVpcRegion",
        "peer_vpc_cidr_table_list": "peerVpcCidrTableList",
        "peer_vpc_id": "peerVpcId",
        "peer_vpc_region": "peerVpcRegion",
        "vpc_firewall_name": "vpcFirewallName",
        "member_uid": "memberUid",
    },
)
class RosVpcFirewallConfigureProps:
    def __init__(
        self,
        *,
        firewall_switch: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        local_vpc_cidr_table_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcFirewallConfigure.LocalVpcCidrTableListProperty, typing.Dict[builtins.str, typing.Any]]]]],
        local_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        local_vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        peer_vpc_cidr_table_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcFirewallConfigure.PeerVpcCidrTableListProperty, typing.Dict[builtins.str, typing.Any]]]]],
        peer_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        peer_vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVpcFirewallConfigure``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure

        :param firewall_switch: 
        :param local_vpc_cidr_table_list: 
        :param local_vpc_id: 
        :param local_vpc_region: 
        :param peer_vpc_cidr_table_list: 
        :param peer_vpc_id: 
        :param peer_vpc_region: 
        :param vpc_firewall_name: 
        :param member_uid: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13976951d579a8b3a341ebe0337a890f6ec86c976986edce31d1be0b1fb9c031)
            check_type(argname="argument firewall_switch", value=firewall_switch, expected_type=type_hints["firewall_switch"])
            check_type(argname="argument local_vpc_cidr_table_list", value=local_vpc_cidr_table_list, expected_type=type_hints["local_vpc_cidr_table_list"])
            check_type(argname="argument local_vpc_id", value=local_vpc_id, expected_type=type_hints["local_vpc_id"])
            check_type(argname="argument local_vpc_region", value=local_vpc_region, expected_type=type_hints["local_vpc_region"])
            check_type(argname="argument peer_vpc_cidr_table_list", value=peer_vpc_cidr_table_list, expected_type=type_hints["peer_vpc_cidr_table_list"])
            check_type(argname="argument peer_vpc_id", value=peer_vpc_id, expected_type=type_hints["peer_vpc_id"])
            check_type(argname="argument peer_vpc_region", value=peer_vpc_region, expected_type=type_hints["peer_vpc_region"])
            check_type(argname="argument vpc_firewall_name", value=vpc_firewall_name, expected_type=type_hints["vpc_firewall_name"])
            check_type(argname="argument member_uid", value=member_uid, expected_type=type_hints["member_uid"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "firewall_switch": firewall_switch,
            "local_vpc_cidr_table_list": local_vpc_cidr_table_list,
            "local_vpc_id": local_vpc_id,
            "local_vpc_region": local_vpc_region,
            "peer_vpc_cidr_table_list": peer_vpc_cidr_table_list,
            "peer_vpc_id": peer_vpc_id,
            "peer_vpc_region": peer_vpc_region,
            "vpc_firewall_name": vpc_firewall_name,
        }
        if member_uid is not None:
            self._values["member_uid"] = member_uid

    @builtins.property
    def firewall_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        firewallSwitch: The status of the VPC firewall after you create the firewall. Valid values:
        open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
        '''
        result = self._values.get("firewall_switch")
        assert result is not None, "Required property 'firewall_switch' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def local_vpc_cidr_table_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcFirewallConfigure.LocalVpcCidrTableListProperty]]]:
        '''
        :Property: localVpcCidrTableList: The CIDR blocks of the local VPC.
        '''
        result = self._values.get("local_vpc_cidr_table_list")
        assert result is not None, "Required property 'local_vpc_cidr_table_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcFirewallConfigure.LocalVpcCidrTableListProperty]]], result)

    @builtins.property
    def local_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: localVpcId: The ID of the local VPC.
        '''
        result = self._values.get("local_vpc_id")
        assert result is not None, "Required property 'local_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def local_vpc_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: localVpcRegion: The region ID of the local VPC.
        '''
        result = self._values.get("local_vpc_region")
        assert result is not None, "Required property 'local_vpc_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def peer_vpc_cidr_table_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcFirewallConfigure.PeerVpcCidrTableListProperty]]]:
        '''
        :Property: peerVpcCidrTableList: The CIDR blocks of the peer VPC.
        '''
        result = self._values.get("peer_vpc_cidr_table_list")
        assert result is not None, "Required property 'peer_vpc_cidr_table_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcFirewallConfigure.PeerVpcCidrTableListProperty]]], result)

    @builtins.property
    def peer_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: peerVpcId: The ID of the peer VPC.
        '''
        result = self._values.get("peer_vpc_id")
        assert result is not None, "Required property 'peer_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def peer_vpc_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: peerVpcRegion: The region ID of the peer VPC.
        '''
        result = self._values.get("peer_vpc_region")
        assert result is not None, "Required property 'peer_vpc_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_firewall_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcFirewallName: The instance name of the VPC firewall.
        '''
        result = self._values.get("vpc_firewall_name")
        assert result is not None, "Required property 'vpc_firewall_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def member_uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memberUid: The UID of the member that is managed by your Alibaba Cloud account.
        '''
        result = self._values.get("member_uid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcFirewallConfigureProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVpcFirewallControlPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallControlPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::VpcFirewallControlPolicy``, which is used to add an access control policy to a policy group of a virtual private cloud (VPC) firewall.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``VpcFirewallControlPolicy`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVpcFirewallControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
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
    @jsii.member(jsii_name="applicationName")
    def application_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "applicationName"))

    @application_name.setter
    def application_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__599c39b3a7815e06aa3526411ea576dcdbe893faf5a3b5874355d12e40c88e73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applicationName", value)

    @builtins.property
    @jsii.member(jsii_name="applicationNameList")
    def application_name_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: applicationNameList: List of application types supported by the access control policy.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "applicationNameList"))

    @application_name_list.setter
    def application_name_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b43d409b8aa48383847bd5dd2127c633b5c78cd781640c53ae0ef95e540d866)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "applicationNameList", value)

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
    @jsii.member(jsii_name="endTime")
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
        Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "endTime"))

    @end_time.setter
    def end_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72ceb904154761b2a8c34851ecc28f36e36927083bc6167ec3e59387ae2f7258)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endTime", value)

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
    @jsii.member(jsii_name="memberUid")
    def member_uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memberUid: Member account UID of current Alibaba Cloud account.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "memberUid"))

    @member_uid.setter
    def member_uid(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f732c7d374b9adb8fa6561f428f0882d757b98e4f87b1943313272f9b30fcd8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "memberUid", value)

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

    @builtins.property
    @jsii.member(jsii_name="release")
    def release(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        release: The enabled state of the access control policy. This policy is enabled by default when it is created. Value:

        - true: Access control policy is enabled
        - false: Access control policy is not enabled
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "release"))

    @release.setter
    def release(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ca9d0f02d3f2b115f3aec73e4e150cfc25d01d4b6be3bfecc62cd7332a556cfa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "release", value)

    @builtins.property
    @jsii.member(jsii_name="repeatDays")
    def repeat_days(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        repeatDays: A collection of repeated dates of policy validity for an access control policy.
        When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
        When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
        Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
        When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
        Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "repeatDays"))

    @repeat_days.setter
    def repeat_days(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f656975282505f47ab18f546d8a897962f3803c855e9e4a77bfbb799d876d96c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatDays", value)

    @builtins.property
    @jsii.member(jsii_name="repeatEndTime")
    def repeat_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repeatEndTime"))

    @repeat_end_time.setter
    def repeat_end_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ac8072158a294a6be25b3b2c963a8875e54d51f6c207085cc52dab97cd3eda0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatEndTime", value)

    @builtins.property
    @jsii.member(jsii_name="repeatStartTime")
    def repeat_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repeatStartTime"))

    @repeat_start_time.setter
    def repeat_start_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fcee644431cb918f06325bb9cbddecc2fdd0c3f0389f5770e855bbfece083a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatStartTime", value)

    @builtins.property
    @jsii.member(jsii_name="repeatType")
    def repeat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatType: The repetition type of the policy validity period for an access control policy. Valid values:

        - Permanent (default)
        - None
        - Daily
        - Weekly
        - Monthly.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "repeatType"))

    @repeat_type.setter
    def repeat_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9fede97f2493359d63de0e12d255fa15dac3081cba692e5b18bfd7dfdc78ab5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "repeatType", value)

    @builtins.property
    @jsii.member(jsii_name="startTime")
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
        Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "startTime"))

    @start_time.setter
    def start_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb265cc619439a3281dd8e6557e9dd5dd5229e08cf63ea47fc37788e79f70ccf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startTime", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_action": "aclAction",
        "description": "description",
        "destination": "destination",
        "destination_type": "destinationType",
        "new_order": "newOrder",
        "proto": "proto",
        "source": "source",
        "source_type": "sourceType",
        "vpc_firewall_id": "vpcFirewallId",
        "application_name": "applicationName",
        "application_name_list": "applicationNameList",
        "dest_port": "destPort",
        "dest_port_group": "destPortGroup",
        "dest_port_type": "destPortType",
        "end_time": "endTime",
        "lang": "lang",
        "member_uid": "memberUid",
        "region_id": "regionId",
        "release": "release",
        "repeat_days": "repeatDays",
        "repeat_end_time": "repeatEndTime",
        "repeat_start_time": "repeatStartTime",
        "repeat_type": "repeatType",
        "start_time": "startTime",
    },
)
class RosVpcFirewallControlPolicyProps:
    def __init__(
        self,
        *,
        acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        new_order: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        application_name_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_days: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVpcFirewallControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy

        :param acl_action: 
        :param description: 
        :param destination: 
        :param destination_type: 
        :param new_order: 
        :param proto: 
        :param source: 
        :param source_type: 
        :param vpc_firewall_id: 
        :param application_name: 
        :param application_name_list: 
        :param dest_port: 
        :param dest_port_group: 
        :param dest_port_type: 
        :param end_time: 
        :param lang: 
        :param member_uid: 
        :param region_id: 
        :param release: 
        :param repeat_days: 
        :param repeat_end_time: 
        :param repeat_start_time: 
        :param repeat_type: 
        :param start_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57de059de0eaf5505e96950f7a983c3f53222bfaa47b923bf388ff26c2186d9b)
            check_type(argname="argument acl_action", value=acl_action, expected_type=type_hints["acl_action"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument new_order", value=new_order, expected_type=type_hints["new_order"])
            check_type(argname="argument proto", value=proto, expected_type=type_hints["proto"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument vpc_firewall_id", value=vpc_firewall_id, expected_type=type_hints["vpc_firewall_id"])
            check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            check_type(argname="argument application_name_list", value=application_name_list, expected_type=type_hints["application_name_list"])
            check_type(argname="argument dest_port", value=dest_port, expected_type=type_hints["dest_port"])
            check_type(argname="argument dest_port_group", value=dest_port_group, expected_type=type_hints["dest_port_group"])
            check_type(argname="argument dest_port_type", value=dest_port_type, expected_type=type_hints["dest_port_type"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument member_uid", value=member_uid, expected_type=type_hints["member_uid"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument release", value=release, expected_type=type_hints["release"])
            check_type(argname="argument repeat_days", value=repeat_days, expected_type=type_hints["repeat_days"])
            check_type(argname="argument repeat_end_time", value=repeat_end_time, expected_type=type_hints["repeat_end_time"])
            check_type(argname="argument repeat_start_time", value=repeat_start_time, expected_type=type_hints["repeat_start_time"])
            check_type(argname="argument repeat_type", value=repeat_type, expected_type=type_hints["repeat_type"])
            check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_action": acl_action,
            "description": description,
            "destination": destination,
            "destination_type": destination_type,
            "new_order": new_order,
            "proto": proto,
            "source": source,
            "source_type": source_type,
            "vpc_firewall_id": vpc_firewall_id,
        }
        if application_name is not None:
            self._values["application_name"] = application_name
        if application_name_list is not None:
            self._values["application_name_list"] = application_name_list
        if dest_port is not None:
            self._values["dest_port"] = dest_port
        if dest_port_group is not None:
            self._values["dest_port_group"] = dest_port_group
        if dest_port_type is not None:
            self._values["dest_port_type"] = dest_port_type
        if end_time is not None:
            self._values["end_time"] = end_time
        if lang is not None:
            self._values["lang"] = lang
        if member_uid is not None:
            self._values["member_uid"] = member_uid
        if region_id is not None:
            self._values["region_id"] = region_id
        if release is not None:
            self._values["release"] = release
        if repeat_days is not None:
            self._values["repeat_days"] = repeat_days
        if repeat_end_time is not None:
            self._values["repeat_end_time"] = repeat_end_time
        if repeat_start_time is not None:
            self._values["repeat_start_time"] = repeat_start_time
        if repeat_type is not None:
            self._values["repeat_type"] = repeat_type
        if start_time is not None:
            self._values["start_time"] = start_time

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
    def application_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def application_name_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: applicationNameList: List of application types supported by the access control policy.
        '''
        result = self._values.get("application_name_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
        Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
        '''
        result = self._values.get("end_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def member_uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: memberUid: Member account UID of current Alibaba Cloud account.
        '''
        result = self._values.get("member_uid")
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

    @builtins.property
    def release(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        release: The enabled state of the access control policy. This policy is enabled by default when it is created. Value:

        - true: Access control policy is enabled
        - false: Access control policy is not enabled
        '''
        result = self._values.get("release")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_days(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property:

        repeatDays: A collection of repeated dates of policy validity for an access control policy.
        When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
        When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
        Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
        When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
        Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
        '''
        result = self._values.get("repeat_days")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def repeat_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
        '''
        result = self._values.get("repeat_end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
        '''
        result = self._values.get("repeat_start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        repeatType: The repetition type of the policy validity period for an access control policy. Valid values:

        - Permanent (default)
        - None
        - Daily
        - Weekly
        - Monthly.
        '''
        result = self._values.get("repeat_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
        Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
        '''
        result = self._values.get("start_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVpcFirewallControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITrFirewall)
class TrFirewall(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.TrFirewall",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::TrFirewall``, which is used to create a virtual private cloud (VPC) firewall for a transit router.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTrFirewall``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TrFirewallProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bec3c5e0530ef757e8a7d5da8cc42b401612430380160d5ccf75ec0fbd08727)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFirewallId")
    def attr_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FirewallId: The instance ID of the VPC firewall.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrFirewallProps":
        return typing.cast("TrFirewallProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c053f5e328112d92054a7c3d16706c45993a99dfd20e0f46ecfb272d591e775)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__843ce7ce1eedeca0b3f3e87d8c0dc12ec0ba63c3e7e43d2fcafdcd31ca275a72)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a6a9012b03dbde0ff8ee0433c5d3ebdb154a425d447713290bca67b198bec0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.TrFirewallProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "firewall_name": "firewallName",
        "region_no": "regionNo",
        "route_mode": "routeMode",
        "transit_router_id": "transitRouterId",
        "firewall_description": "firewallDescription",
        "firewall_subnet_cidr": "firewallSubnetCidr",
        "firewall_vpc_cidr": "firewallVpcCidr",
        "firewall_vpc_id": "firewallVpcId",
        "firewall_vswitch_id": "firewallVswitchId",
        "tr_attachment_master_cidr": "trAttachmentMasterCidr",
        "tr_attachment_master_zone": "trAttachmentMasterZone",
        "tr_attachment_slave_cidr": "trAttachmentSlaveCidr",
        "tr_attachment_slave_zone": "trAttachmentSlaveZone",
    },
)
class TrFirewallProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region_no: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        route_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        firewall_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        firewall_subnet_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        firewall_vpc_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        firewall_vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        firewall_vswitch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tr_attachment_master_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tr_attachment_master_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tr_attachment_slave_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tr_attachment_slave_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``TrFirewall``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewall

        :param cen_id: Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        :param firewall_name: Property firewallName: The name of the firewall.
        :param region_no: Property regionNo: The region ID of the route router.
        :param route_mode: Property routeMode: The routing mode of the VPC firewall. Valid values: managed: automatic mode manual: manual mode
        :param transit_router_id: Property transitRouterId: The ID of the transit router.
        :param firewall_description: Property firewallDescription: The description of the firewall.
        :param firewall_subnet_cidr: Property firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.
        :param firewall_vpc_cidr: Property firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.
        :param firewall_vpc_id: Property firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.
        :param firewall_vswitch_id: Property firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode.
        :param tr_attachment_master_cidr: Property trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
        :param tr_attachment_master_zone: Property trAttachmentMasterZone: The primary zone for the vSwitch.
        :param tr_attachment_slave_cidr: Property trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.
        :param tr_attachment_slave_zone: Property trAttachmentSlaveZone: The secondary zone for the vSwitch.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40d84882b3b46a2f789e2f2878f506b9e4481f2c903ac2d8d84a4a4ed1765a68)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument firewall_name", value=firewall_name, expected_type=type_hints["firewall_name"])
            check_type(argname="argument region_no", value=region_no, expected_type=type_hints["region_no"])
            check_type(argname="argument route_mode", value=route_mode, expected_type=type_hints["route_mode"])
            check_type(argname="argument transit_router_id", value=transit_router_id, expected_type=type_hints["transit_router_id"])
            check_type(argname="argument firewall_description", value=firewall_description, expected_type=type_hints["firewall_description"])
            check_type(argname="argument firewall_subnet_cidr", value=firewall_subnet_cidr, expected_type=type_hints["firewall_subnet_cidr"])
            check_type(argname="argument firewall_vpc_cidr", value=firewall_vpc_cidr, expected_type=type_hints["firewall_vpc_cidr"])
            check_type(argname="argument firewall_vpc_id", value=firewall_vpc_id, expected_type=type_hints["firewall_vpc_id"])
            check_type(argname="argument firewall_vswitch_id", value=firewall_vswitch_id, expected_type=type_hints["firewall_vswitch_id"])
            check_type(argname="argument tr_attachment_master_cidr", value=tr_attachment_master_cidr, expected_type=type_hints["tr_attachment_master_cidr"])
            check_type(argname="argument tr_attachment_master_zone", value=tr_attachment_master_zone, expected_type=type_hints["tr_attachment_master_zone"])
            check_type(argname="argument tr_attachment_slave_cidr", value=tr_attachment_slave_cidr, expected_type=type_hints["tr_attachment_slave_cidr"])
            check_type(argname="argument tr_attachment_slave_zone", value=tr_attachment_slave_zone, expected_type=type_hints["tr_attachment_slave_zone"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "firewall_name": firewall_name,
            "region_no": region_no,
            "route_mode": route_mode,
            "transit_router_id": transit_router_id,
        }
        if firewall_description is not None:
            self._values["firewall_description"] = firewall_description
        if firewall_subnet_cidr is not None:
            self._values["firewall_subnet_cidr"] = firewall_subnet_cidr
        if firewall_vpc_cidr is not None:
            self._values["firewall_vpc_cidr"] = firewall_vpc_cidr
        if firewall_vpc_id is not None:
            self._values["firewall_vpc_id"] = firewall_vpc_id
        if firewall_vswitch_id is not None:
            self._values["firewall_vswitch_id"] = firewall_vswitch_id
        if tr_attachment_master_cidr is not None:
            self._values["tr_attachment_master_cidr"] = tr_attachment_master_cidr
        if tr_attachment_master_zone is not None:
            self._values["tr_attachment_master_zone"] = tr_attachment_master_zone
        if tr_attachment_slave_cidr is not None:
            self._values["tr_attachment_slave_cidr"] = tr_attachment_slave_cidr
        if tr_attachment_slave_zone is not None:
            self._values["tr_attachment_slave_zone"] = tr_attachment_slave_zone

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def firewall_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property firewallName: The name of the firewall.'''
        result = self._values.get("firewall_name")
        assert result is not None, "Required property 'firewall_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region_no(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property regionNo: The region ID of the route router.'''
        result = self._values.get("region_no")
        assert result is not None, "Required property 'region_no' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def route_mode(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property routeMode: The routing mode of the VPC firewall.

        Valid values:
        managed: automatic mode
        manual: manual mode
        '''
        result = self._values.get("route_mode")
        assert result is not None, "Required property 'route_mode' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def transit_router_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property transitRouterId: The ID of the transit router.'''
        result = self._values.get("transit_router_id")
        assert result is not None, "Required property 'transit_router_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def firewall_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property firewallDescription: The description of the firewall.'''
        result = self._values.get("firewall_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def firewall_subnet_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property firewallSubnetCidr: The subnet CIDR block of the VPC in which the ENI of the firewall is stored in automatic mode.'''
        result = self._values.get("firewall_subnet_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def firewall_vpc_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property firewallVpcCidr: The CIDR block that is allocated to the VPC created for the VPC firewall in automatic mode.'''
        result = self._values.get("firewall_vpc_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def firewall_vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property firewallVpcId: The ID of the VPC in which the ENI associated with the VPC firewall is created in manual mode.'''
        result = self._values.get("firewall_vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def firewall_vswitch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property firewallVswitchId: The ID of the vSwitch that is used to create the ENI in manual mode.'''
        result = self._values.get("firewall_vswitch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tr_attachment_master_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property trAttachmentMasterCidr: The primary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.'''
        result = self._values.get("tr_attachment_master_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tr_attachment_master_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property trAttachmentMasterZone: The primary zone for the vSwitch.'''
        result = self._values.get("tr_attachment_master_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tr_attachment_slave_cidr(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property trAttachmentSlaveCidr: The secondary subnet CIDR block that the VPC uses to connect to the transit router in automatic mode.'''
        result = self._values.get("tr_attachment_slave_cidr")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tr_attachment_slave_zone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property trAttachmentSlaveZone: The secondary zone for the vSwitch.'''
        result = self._values.get("tr_attachment_slave_zone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrFirewallProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(ITrFirewallRoutePolicy)
class TrFirewallRoutePolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.TrFirewallRoutePolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::TrFirewallRoutePolicy``, which is used to create a routing policy for a virtual private cloud (VPC) firewall of a transit router.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTrFirewallRoutePolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TrFirewallRoutePolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47957672439524d8dab0a0809741ceb8e83702ec4a9e528a43773f5966a37d06)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrFirewallId")
    def attr_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute FirewallId: The instance ID of the VPC firewall.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="attrTrFirewallRoutePolicyId")
    def attr_tr_firewall_route_policy_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrFirewallRoutePolicyId: The ID of the routing policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTrFirewallRoutePolicyId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "TrFirewallRoutePolicyProps":
        return typing.cast("TrFirewallRoutePolicyProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c993d60aeaba6c305452d2f32f88148b47262e71750a656e613d843073f23853)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e82e55c881cce099d23397e11229bd979f2e55c7974af4de76bcfb45984300e0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a5f9235312188b168da84ee6105315807c648f440c53195fd5557ef09882824)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.TrFirewallRoutePolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "firewall_id": "firewallId",
        "policy_description": "policyDescription",
        "policy_name": "policyName",
        "policy_type": "policyType",
        "dest_candidate_list": "destCandidateList",
        "src_candidate_list": "srcCandidateList",
    },
)
class TrFirewallRoutePolicyProps:
    def __init__(
        self,
        *,
        firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        dest_candidate_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTrFirewallRoutePolicy.DestCandidateListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        src_candidate_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTrFirewallRoutePolicy.SrcCandidateListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``TrFirewallRoutePolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-trfirewallroutepolicy

        :param firewall_id: Property firewallId: The instance ID of the VPC firewall.
        :param policy_description: Property policyDescription: The description of the traffic redirection instance.
        :param policy_name: Property policyName: The name of the traffic redirection instance.
        :param policy_type: Property policyType: The type of the traffic redirection scenario of the VPC firewall. Valid values: fullmesh: interconnected instances one_to_one: instance to instance end_to_end: instance to instances
        :param dest_candidate_list: Property destCandidateList: The secondary traffic redirection instances.
        :param src_candidate_list: Property srcCandidateList: The primary traffic redirection instances.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71bf48f2b34a623764bab4d4c5f31c1e141b13d7ff79d3dd64820b0eab17ea6d)
            check_type(argname="argument firewall_id", value=firewall_id, expected_type=type_hints["firewall_id"])
            check_type(argname="argument policy_description", value=policy_description, expected_type=type_hints["policy_description"])
            check_type(argname="argument policy_name", value=policy_name, expected_type=type_hints["policy_name"])
            check_type(argname="argument policy_type", value=policy_type, expected_type=type_hints["policy_type"])
            check_type(argname="argument dest_candidate_list", value=dest_candidate_list, expected_type=type_hints["dest_candidate_list"])
            check_type(argname="argument src_candidate_list", value=src_candidate_list, expected_type=type_hints["src_candidate_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "firewall_id": firewall_id,
            "policy_description": policy_description,
            "policy_name": policy_name,
            "policy_type": policy_type,
        }
        if dest_candidate_list is not None:
            self._values["dest_candidate_list"] = dest_candidate_list
        if src_candidate_list is not None:
            self._values["src_candidate_list"] = src_candidate_list

    @builtins.property
    def firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property firewallId: The instance ID of the VPC firewall.'''
        result = self._values.get("firewall_id")
        assert result is not None, "Required property 'firewall_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyDescription: The description of the traffic redirection instance.'''
        result = self._values.get("policy_description")
        assert result is not None, "Required property 'policy_description' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyName: The name of the traffic redirection instance.'''
        result = self._values.get("policy_name")
        assert result is not None, "Required property 'policy_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def policy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property policyType: The type of the traffic redirection scenario of the VPC firewall.

        Valid values:
        fullmesh: interconnected instances
        one_to_one: instance to instance
        end_to_end: instance to instances
        '''
        result = self._values.get("policy_type")
        assert result is not None, "Required property 'policy_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def dest_candidate_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTrFirewallRoutePolicy.DestCandidateListProperty]]]]:
        '''Property destCandidateList: The secondary traffic redirection instances.'''
        result = self._values.get("dest_candidate_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTrFirewallRoutePolicy.DestCandidateListProperty]]]], result)

    @builtins.property
    def src_candidate_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTrFirewallRoutePolicy.SrcCandidateListProperty]]]]:
        '''Property srcCandidateList: The primary traffic redirection instances.'''
        result = self._values.get("src_candidate_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTrFirewallRoutePolicy.SrcCandidateListProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrFirewallRoutePolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IVpcFirewallCen)
class VpcFirewallCen(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.VpcFirewallCen",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::VpcFirewallCen``, which is used to create a virtual private cloud (VPC) firewall.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVpcFirewallCen``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VpcFirewallCenProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b787c42539824c27d9062045e74d4040dfa2912db79157f71b722746a21cd177)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVpcFirewallId")
    def attr_vpc_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcFirewallId: The instance ID of the VPC firewall.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VpcFirewallCenProps":
        return typing.cast("VpcFirewallCenProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b9948e553a060f7bcc341f8e2825533ff1d20843ab61d4d607c7db86f0ab134)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c012276cb79d156a4df77f5d0dbaceea9280d2641ce1943359ff5ed2c1707bed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3fc9c4976b86dee01c8ed77ab9fee9c3cddf5aafdbe1b2407ba30cfdbffcb1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.VpcFirewallCenProps",
    jsii_struct_bases=[],
    name_mapping={
        "cen_id": "cenId",
        "firewall_switch": "firewallSwitch",
        "firewall_vpc_zone_id": "firewallVpcZoneId",
        "network_instance_id": "networkInstanceId",
        "vpc_firewall_name": "vpcFirewallName",
        "vpc_region": "vpcRegion",
        "firewall_vpc_cidr_block": "firewallVpcCidrBlock",
        "firewall_v_switch_cidr_block": "firewallVSwitchCidrBlock",
        "member_uid": "memberUid",
        "v_switch_id": "vSwitchId",
    },
)
class VpcFirewallCenProps:
    def __init__(
        self,
        *,
        cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        firewall_switch: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        firewall_vpc_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        network_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        firewall_vpc_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        firewall_v_switch_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``VpcFirewallCen``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcen

        :param cen_id: Property cenId: The ID of the CEN instance.
        :param firewall_switch: Property firewallSwitch: Specifies whether to enable the VPC firewall. Valid values: open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value. close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
        :param firewall_vpc_zone_id: Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs. If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
        :param network_instance_id: Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.
        :param vpc_firewall_name: Property vpcFirewallName: The instance name of the VPC firewall.
        :param vpc_region: Property vpcRegion: The ID of the region to which the VPC belongs.
        :param firewall_vpc_cidr_block: Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall. You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
        :param firewall_v_switch_cidr_block: Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.
        :param member_uid: Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24e82579b874d51769e4181e3a56c1e1c9381b4aba62762ac7dc5e0e8dfed47f)
            check_type(argname="argument cen_id", value=cen_id, expected_type=type_hints["cen_id"])
            check_type(argname="argument firewall_switch", value=firewall_switch, expected_type=type_hints["firewall_switch"])
            check_type(argname="argument firewall_vpc_zone_id", value=firewall_vpc_zone_id, expected_type=type_hints["firewall_vpc_zone_id"])
            check_type(argname="argument network_instance_id", value=network_instance_id, expected_type=type_hints["network_instance_id"])
            check_type(argname="argument vpc_firewall_name", value=vpc_firewall_name, expected_type=type_hints["vpc_firewall_name"])
            check_type(argname="argument vpc_region", value=vpc_region, expected_type=type_hints["vpc_region"])
            check_type(argname="argument firewall_vpc_cidr_block", value=firewall_vpc_cidr_block, expected_type=type_hints["firewall_vpc_cidr_block"])
            check_type(argname="argument firewall_v_switch_cidr_block", value=firewall_v_switch_cidr_block, expected_type=type_hints["firewall_v_switch_cidr_block"])
            check_type(argname="argument member_uid", value=member_uid, expected_type=type_hints["member_uid"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cen_id": cen_id,
            "firewall_switch": firewall_switch,
            "firewall_vpc_zone_id": firewall_vpc_zone_id,
            "network_instance_id": network_instance_id,
            "vpc_firewall_name": vpc_firewall_name,
            "vpc_region": vpc_region,
        }
        if firewall_vpc_cidr_block is not None:
            self._values["firewall_vpc_cidr_block"] = firewall_vpc_cidr_block
        if firewall_v_switch_cidr_block is not None:
            self._values["firewall_v_switch_cidr_block"] = firewall_v_switch_cidr_block
        if member_uid is not None:
            self._values["member_uid"] = member_uid
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cen_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property cenId: The ID of the CEN instance.'''
        result = self._values.get("cen_id")
        assert result is not None, "Required property 'cen_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def firewall_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property firewallSwitch: Specifies whether to enable the VPC firewall.

        Valid values:
        open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        close: After you create the VPC firewall, the VPC firewall is disabled. You can call the ModifyVpcFirewallCenSwitchStatus operation to manually enable the VPC firewall.
        '''
        result = self._values.get("firewall_switch")
        assert result is not None, "Required property 'firewall_switch' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def firewall_vpc_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property firewallVpcZoneId: The ID of the zone to which the vSwitch belongs.

        If your service is latency-sensitive, you can specify the same zone for the vSwitch of the firewall and the vSwitch of your business VPC to minimize latency.If you do not specify a value, a zone is automatically assigned for the vSwitch.
        '''
        result = self._values.get("firewall_vpc_zone_id")
        assert result is not None, "Required property 'firewall_vpc_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def network_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property networkInstanceId: The ID of the VPC for which you want to create the VPC firewall.'''
        result = self._values.get("network_instance_id")
        assert result is not None, "Required property 'network_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_firewall_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcFirewallName: The instance name of the VPC firewall.'''
        result = self._values.get("vpc_firewall_name")
        assert result is not None, "Required property 'vpc_firewall_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcRegion: The ID of the region to which the VPC belongs.'''
        result = self._values.get("vpc_region")
        assert result is not None, "Required property 'vpc_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def firewall_vpc_cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property firewallVpcCidrBlock: The CIDR block of the VPC that is automatically created for the VPC firewall.

        You must specify a CIDR block for the Cloud_Firewall_VPC VPC that is automatically created for the VPC firewall for traffic redirection. The subnet mask of the CIDR block must be less than or equal to 28 bits in length.If you do not specify a value, the CIDR block 10.0.0.0/8 is automatically allocated.
        '''
        result = self._values.get("firewall_vpc_cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def firewall_v_switch_cidr_block(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property firewallVSwitchCidrBlock: The CIDR block of the vSwitch that is automatically created for the VPC firewall.You must specify a CIDR block for the Cloud_Firewall_VSWITCH VPC that is automatically created for the VPC firewall for traffic redirection. The CIDR block does not conflict with your network plan. The subnet mask of the CIDR block must be less than or equal to 29 bits in length. The CIDR block of the vSwitch must be within the network segment of the VPC.If you do not specify a value, the CIDR block 10.219.219.216/29 is automatically allocated.'''
        result = self._values.get("firewall_v_switch_cidr_block")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def member_uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.'''
        result = self._values.get("member_uid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the vSwitch that is used to associate with the elastic network interface (ENI) required by the VPC firewall.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcFirewallCenProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IVpcFirewallConfigure)
class VpcFirewallConfigure(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.VpcFirewallConfigure",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::VpcFirewallConfigure``, which is used to create a virtual private cloud (VPC) firewall.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVpcFirewallConfigure``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VpcFirewallConfigureProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ebf8b553cdc19d7fe43485cb28567fbcfe12cff32073989ac2870b0ae5dbefd)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVpcFirewallId")
    def attr_vpc_firewall_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VpcFirewallId: The instance ID of the VPC firewall.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVpcFirewallId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VpcFirewallConfigureProps":
        return typing.cast("VpcFirewallConfigureProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47439df2daee7ad5c211c8a93f0197112be2a196f78fb38c65e3f4f84060cf37)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68ba33ef1b78e267db7b959df58a01b4c27a1b8bd4ec611ca7b341037566a4f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6174f20f3ef0ed9e71ed91b73539c86adcebe9e198693a8bf7baddc7b640769f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.VpcFirewallConfigureProps",
    jsii_struct_bases=[],
    name_mapping={
        "firewall_switch": "firewallSwitch",
        "local_vpc_cidr_table_list": "localVpcCidrTableList",
        "local_vpc_id": "localVpcId",
        "local_vpc_region": "localVpcRegion",
        "peer_vpc_cidr_table_list": "peerVpcCidrTableList",
        "peer_vpc_id": "peerVpcId",
        "peer_vpc_region": "peerVpcRegion",
        "vpc_firewall_name": "vpcFirewallName",
        "member_uid": "memberUid",
    },
)
class VpcFirewallConfigureProps:
    def __init__(
        self,
        *,
        firewall_switch: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        local_vpc_cidr_table_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcFirewallConfigure.LocalVpcCidrTableListProperty, typing.Dict[builtins.str, typing.Any]]]]],
        local_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        local_vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        peer_vpc_cidr_table_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcFirewallConfigure.PeerVpcCidrTableListProperty, typing.Dict[builtins.str, typing.Any]]]]],
        peer_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        peer_vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``VpcFirewallConfigure``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallconfigure

        :param firewall_switch: Property firewallSwitch: The status of the VPC firewall after you create the firewall. Valid values: open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value. close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
        :param local_vpc_cidr_table_list: Property localVpcCidrTableList: The CIDR blocks of the local VPC.
        :param local_vpc_id: Property localVpcId: The ID of the local VPC.
        :param local_vpc_region: Property localVpcRegion: The region ID of the local VPC.
        :param peer_vpc_cidr_table_list: Property peerVpcCidrTableList: The CIDR blocks of the peer VPC.
        :param peer_vpc_id: Property peerVpcId: The ID of the peer VPC.
        :param peer_vpc_region: Property peerVpcRegion: The region ID of the peer VPC.
        :param vpc_firewall_name: Property vpcFirewallName: The instance name of the VPC firewall.
        :param member_uid: Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8a5f456e29d9568d337e7210d9976a70e298ca20618917dd22a2fa19e04939d)
            check_type(argname="argument firewall_switch", value=firewall_switch, expected_type=type_hints["firewall_switch"])
            check_type(argname="argument local_vpc_cidr_table_list", value=local_vpc_cidr_table_list, expected_type=type_hints["local_vpc_cidr_table_list"])
            check_type(argname="argument local_vpc_id", value=local_vpc_id, expected_type=type_hints["local_vpc_id"])
            check_type(argname="argument local_vpc_region", value=local_vpc_region, expected_type=type_hints["local_vpc_region"])
            check_type(argname="argument peer_vpc_cidr_table_list", value=peer_vpc_cidr_table_list, expected_type=type_hints["peer_vpc_cidr_table_list"])
            check_type(argname="argument peer_vpc_id", value=peer_vpc_id, expected_type=type_hints["peer_vpc_id"])
            check_type(argname="argument peer_vpc_region", value=peer_vpc_region, expected_type=type_hints["peer_vpc_region"])
            check_type(argname="argument vpc_firewall_name", value=vpc_firewall_name, expected_type=type_hints["vpc_firewall_name"])
            check_type(argname="argument member_uid", value=member_uid, expected_type=type_hints["member_uid"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "firewall_switch": firewall_switch,
            "local_vpc_cidr_table_list": local_vpc_cidr_table_list,
            "local_vpc_id": local_vpc_id,
            "local_vpc_region": local_vpc_region,
            "peer_vpc_cidr_table_list": peer_vpc_cidr_table_list,
            "peer_vpc_id": peer_vpc_id,
            "peer_vpc_region": peer_vpc_region,
            "vpc_firewall_name": vpc_firewall_name,
        }
        if member_uid is not None:
            self._values["member_uid"] = member_uid

    @builtins.property
    def firewall_switch(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property firewallSwitch: The status of the VPC firewall after you create the firewall.

        Valid values:
        open: After you create the VPC firewall, the VPC firewall is automatically enabled. This is the default value.
        close: After you create the VPC firewall, the VPC firewall is disabled. To enable the firewall, you can call the ModifyVpcFirewallSwitchStatus operation.
        '''
        result = self._values.get("firewall_switch")
        assert result is not None, "Required property 'firewall_switch' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def local_vpc_cidr_table_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcFirewallConfigure.LocalVpcCidrTableListProperty]]]:
        '''Property localVpcCidrTableList: The CIDR blocks of the local VPC.'''
        result = self._values.get("local_vpc_cidr_table_list")
        assert result is not None, "Required property 'local_vpc_cidr_table_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcFirewallConfigure.LocalVpcCidrTableListProperty]]], result)

    @builtins.property
    def local_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property localVpcId: The ID of the local VPC.'''
        result = self._values.get("local_vpc_id")
        assert result is not None, "Required property 'local_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def local_vpc_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property localVpcRegion: The region ID of the local VPC.'''
        result = self._values.get("local_vpc_region")
        assert result is not None, "Required property 'local_vpc_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def peer_vpc_cidr_table_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcFirewallConfigure.PeerVpcCidrTableListProperty]]]:
        '''Property peerVpcCidrTableList: The CIDR blocks of the peer VPC.'''
        result = self._values.get("peer_vpc_cidr_table_list")
        assert result is not None, "Required property 'peer_vpc_cidr_table_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcFirewallConfigure.PeerVpcCidrTableListProperty]]], result)

    @builtins.property
    def peer_vpc_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property peerVpcId: The ID of the peer VPC.'''
        result = self._values.get("peer_vpc_id")
        assert result is not None, "Required property 'peer_vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def peer_vpc_region(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property peerVpcRegion: The region ID of the peer VPC.'''
        result = self._values.get("peer_vpc_region")
        assert result is not None, "Required property 'peer_vpc_region' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_firewall_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcFirewallName: The instance name of the VPC firewall.'''
        result = self._values.get("vpc_firewall_name")
        assert result is not None, "Required property 'vpc_firewall_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def member_uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property memberUid: The UID of the member that is managed by your Alibaba Cloud account.'''
        result = self._values.get("member_uid")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcFirewallConfigureProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IVpcFirewallControlPolicy)
class VpcFirewallControlPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::VpcFirewallControlPolicy``, which is used to add an access control policy to a policy group of a virtual private cloud (VPC) firewall.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVpcFirewallControlPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VpcFirewallControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_acl_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclUuid: The unique ID of the access control policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclUuid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VpcFirewallControlPolicyProps":
        return typing.cast("VpcFirewallControlPolicyProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b474a04ab3e51d93c899db94b6cba7c1a483d1e4f5ac23385515309b3f3f5fd4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36be170878e6c8646ba8ed6b8b8b67242312b5adcda6d686df92e318babdad79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98e8ac51ae1de9d651e410f751c70d78f164569742b930ac4d230dafb9e10459)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-cloudfw.VpcFirewallControlPolicyProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_action": "aclAction",
        "description": "description",
        "destination": "destination",
        "destination_type": "destinationType",
        "new_order": "newOrder",
        "proto": "proto",
        "source": "source",
        "source_type": "sourceType",
        "vpc_firewall_id": "vpcFirewallId",
        "application_name": "applicationName",
        "application_name_list": "applicationNameList",
        "dest_port": "destPort",
        "dest_port_group": "destPortGroup",
        "dest_port_type": "destPortType",
        "end_time": "endTime",
        "lang": "lang",
        "member_uid": "memberUid",
        "region_id": "regionId",
        "release": "release",
        "repeat_days": "repeatDays",
        "repeat_end_time": "repeatEndTime",
        "repeat_start_time": "repeatStartTime",
        "repeat_type": "repeatType",
        "start_time": "startTime",
    },
)
class VpcFirewallControlPolicyProps:
    def __init__(
        self,
        *,
        acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        new_order: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        application_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        application_name_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        end_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_days: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``VpcFirewallControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy

        :param acl_action: Property aclAction: The action that Cloud Firewall performs on the traffic. Valid values: accept: allows the traffic. drop: denies the traffic. log: monitors the traffic.
        :param description: Property description: The description of the access control policy.
        :param destination: Property destination: The destination address in the access control policy. Set this parameter in the following way: If the DestinationType parameter is set to net, set the value to a Classless Inter-Domain Routing (CIDR) block. Example: 10.2.3.0/24. If the DestinationType parameter is set to group, set the value to the name of an address book. Example: db_group. If the DestinationType parameter is set to domain, set the value to a domain name. Example: *.aliyuncs.com.
        :param destination_type: Property destinationType: The type of the destination address in the access control policy. Valid values: net: CIDR block group: address book domain: domain name
        :param new_order: Property newOrder: The priority of the access control policy. The priority value starts from 1. A smaller priority value indicates a higher priority. Note The value of -1 indicates the lowest priority.
        :param proto: Property proto: The type of the security protocol in the access control policy.
        :param source: Property source: The source address in the access control policy. If the SourceType parameter is set to net, set the value to a CIDR block. Example: 10.2.3.0/24. If the SourceType parameter is set to group, set the value to the name of an address book. Example: db_group.
        :param source_type: Property sourceType: The type of the source address in the access control policy. Valid values: net: CIDR block group: address book
        :param vpc_firewall_id: Property vpcFirewallId: The ID of the policy group to which you want to add the access control policy. If the VPC firewall is used to protect CEN, set the value to the ID of the CEN instance that the VPC firewall protects. Example: cen-ervw5jbw1234*****. If the VPC firewall is used to protect Express Connect, set the value to the ID of the VPC firewall instance. Example: vfw-a42bbb748c91234*****. Note You can call the DescribeVpcFirewallAclGroupList operation to query the ID of the policy group.
        :param application_name: Property applicationName: The application type that the access control policy supports. Valid values: ANY (indicates that all application types are supported) FTP HTTP HTTPS MySQL SMTP SMTPS RDP VNC SSH Redis MQTT MongoDB Memcache SSL
        :param application_name_list: Property applicationNameList: List of application types supported by the access control policy.
        :param dest_port: Property destPort: The destination port in the access control policy. Note This parameter must be specified if the DestPortType parameter is set to port.
        :param dest_port_group: Property destPortGroup: The address book of destination ports in the access control policy. Note This parameter must be specified if the DestPortType parameter is set to group.
        :param dest_port_type: Property destPortType: The type of the destination port in the access control policy. Valid values: port: port group: address book
        :param end_time: Property endTime: The end time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time. Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
        :param lang: Property lang: The natural language of the request and response. Valid values: zh: Chinese en: English
        :param member_uid: Property memberUid: Member account UID of current Alibaba Cloud account.
        :param region_id: Property regionId: Region ID. Default to cn-hangzhou.
        :param release: Property release: The enabled state of the access control policy. This policy is enabled by default when it is created. Value: - true: Access control policy is enabled - false: Access control policy is not enabled
        :param repeat_days: Property repeatDays: A collection of repeated dates of policy validity for an access control policy. When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: [] When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6] Notes: When RepeatType is set to Weekly, RepeatDays is not allowed. When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31] Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
        :param repeat_end_time: Property repeatEndTime: The repeated end time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour. Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
        :param repeat_start_time: Property repeatStartTime: The repeated start time of the policy validity period for an access control policy. For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour. Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
        :param repeat_type: Property repeatType: The repetition type of the policy validity period for an access control policy. Valid values: - Permanent (default) - None - Daily - Weekly - Monthly.
        :param start_time: Property startTime: The start time of the policy validity period for an access control policy. It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time. Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2fb36318f0736b578a6f26d6fd6f3668db0389dcf8143a1ea23ac8d7dc0ae413)
            check_type(argname="argument acl_action", value=acl_action, expected_type=type_hints["acl_action"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument destination", value=destination, expected_type=type_hints["destination"])
            check_type(argname="argument destination_type", value=destination_type, expected_type=type_hints["destination_type"])
            check_type(argname="argument new_order", value=new_order, expected_type=type_hints["new_order"])
            check_type(argname="argument proto", value=proto, expected_type=type_hints["proto"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument source_type", value=source_type, expected_type=type_hints["source_type"])
            check_type(argname="argument vpc_firewall_id", value=vpc_firewall_id, expected_type=type_hints["vpc_firewall_id"])
            check_type(argname="argument application_name", value=application_name, expected_type=type_hints["application_name"])
            check_type(argname="argument application_name_list", value=application_name_list, expected_type=type_hints["application_name_list"])
            check_type(argname="argument dest_port", value=dest_port, expected_type=type_hints["dest_port"])
            check_type(argname="argument dest_port_group", value=dest_port_group, expected_type=type_hints["dest_port_group"])
            check_type(argname="argument dest_port_type", value=dest_port_type, expected_type=type_hints["dest_port_type"])
            check_type(argname="argument end_time", value=end_time, expected_type=type_hints["end_time"])
            check_type(argname="argument lang", value=lang, expected_type=type_hints["lang"])
            check_type(argname="argument member_uid", value=member_uid, expected_type=type_hints["member_uid"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument release", value=release, expected_type=type_hints["release"])
            check_type(argname="argument repeat_days", value=repeat_days, expected_type=type_hints["repeat_days"])
            check_type(argname="argument repeat_end_time", value=repeat_end_time, expected_type=type_hints["repeat_end_time"])
            check_type(argname="argument repeat_start_time", value=repeat_start_time, expected_type=type_hints["repeat_start_time"])
            check_type(argname="argument repeat_type", value=repeat_type, expected_type=type_hints["repeat_type"])
            check_type(argname="argument start_time", value=start_time, expected_type=type_hints["start_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_action": acl_action,
            "description": description,
            "destination": destination,
            "destination_type": destination_type,
            "new_order": new_order,
            "proto": proto,
            "source": source,
            "source_type": source_type,
            "vpc_firewall_id": vpc_firewall_id,
        }
        if application_name is not None:
            self._values["application_name"] = application_name
        if application_name_list is not None:
            self._values["application_name_list"] = application_name_list
        if dest_port is not None:
            self._values["dest_port"] = dest_port
        if dest_port_group is not None:
            self._values["dest_port_group"] = dest_port_group
        if dest_port_type is not None:
            self._values["dest_port_type"] = dest_port_type
        if end_time is not None:
            self._values["end_time"] = end_time
        if lang is not None:
            self._values["lang"] = lang
        if member_uid is not None:
            self._values["member_uid"] = member_uid
        if region_id is not None:
            self._values["region_id"] = region_id
        if release is not None:
            self._values["release"] = release
        if repeat_days is not None:
            self._values["repeat_days"] = repeat_days
        if repeat_end_time is not None:
            self._values["repeat_end_time"] = repeat_end_time
        if repeat_start_time is not None:
            self._values["repeat_start_time"] = repeat_start_time
        if repeat_type is not None:
            self._values["repeat_type"] = repeat_type
        if start_time is not None:
            self._values["start_time"] = start_time

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
    def application_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def application_name_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property applicationNameList: List of application types supported by the access control policy.'''
        result = self._values.get("application_name_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

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
    def end_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property endTime: The end time of the policy validity period for an access control policy.

        It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour greater than the start time.
        Notes: When RepeatType is Permanent, EndTime is empty. When RepeatType is None, Daily, Weekly, Monthly, EndTime must havea value, and you need to set the end time.
        '''
        result = self._values.get("end_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    def member_uid(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property memberUid: Member account UID of current Alibaba Cloud account.'''
        result = self._values.get("member_uid")
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

    @builtins.property
    def release(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property release: The enabled state of the access control policy.

        This policy is enabled by default when it is created. Value:

        - true: Access control policy is enabled
        - false: Access control policy is not enabled
        '''
        result = self._values.get("release")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_days(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property repeatDays: A collection of repeated dates of policy validity for an access control policy.

        When RepeatType is Permanent, None, and Daily, RepeatDays is an empty set. For example: []
        When RepeatType is Weekly, RepeatDays cannot be empty. Example: [0, 6]
        Notes: When RepeatType is set to Weekly, RepeatDays is not allowed.
        When RepeatType is Monthly, RepeatDays cannot be empty. Examples: [1, 31]
        Notes: When RepeatType is set to Monthly, RepeatDays is not allowed to repeat.
        '''
        result = self._values.get("repeat_days")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def repeat_end_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repeatEndTime: The repeated end time of the policy validity period for an access control policy.

        For example: 08:00, must be the hour or half time, and less than the repeat start time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatEndTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatEndTime musthave a value, and you need to set the repeat end time.
        '''
        result = self._values.get("repeat_end_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_start_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repeatStartTime: The repeated start time of the policy validity period for an access control policy.

        For example: 08:00, must be the hour or half time, and less than the repeat end time at least half an hour.
        Notes: When RepeatType is Permanent and None, RepeatStartTime is empty. When RepeatType is Daily, Weekly, or Monthly, RepeatStartTime must have a value, and you need to set the repeat start time.
        '''
        result = self._values.get("repeat_start_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def repeat_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property repeatType: The repetition type of the policy validity period for an access control policy.

        Valid values:

        - Permanent (default)
        - None
        - Daily
        - Weekly
        - Monthly.
        '''
        result = self._values.get("repeat_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property startTime: The start time of the policy validity period for an access control policy.

        It is represented in a second-level timestamp format. It must be the whole hour or half hour, and at least half an hour less than the end time.
        Notes: When RepeatType is Permanent, StartTime is empty. When RepeatType is None, Daily, Weekly, Monthly, StartTime must have a value, and you need to set the start time.
        '''
        result = self._values.get("start_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VpcFirewallControlPolicyProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IAddressBook)
class AddressBook(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.AddressBook",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::AddressBook``, which is used to create an address book that is used for access control.

    Address books include IP address books, Elastic Compute Service (ECS) tag-based address books, port address books, and domain address books.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAddressBook``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[AddressBookProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_group_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute GroupUuid: After a successful return to the address book to add unique identification ID.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrGroupUuid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AddressBookProps:
        return typing.cast(AddressBookProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f44a8d615078843b0935423b287cc7a035b2620cda36184983994f1514f44711)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e16e1fd8e19a207b9cf185d6081e3db0195c95f259d16cfd7ee1bb08e51a4a5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91dc03fded894e66459a5d5acb260d639194ed940e41a5391bfa776e60ee87a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IAllFwSwitch)
class AllFwSwitch(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.AllFwSwitch",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::AllFwSwitch``, which is used to enable all firewalls.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAllFwSwitch``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[AllFwSwitchProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3cc5fe3dae0a68297a1933d5ed0b0ba01a72835037793e57d977837f746e2439)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> AllFwSwitchProps:
        return typing.cast(AllFwSwitchProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae0c503971e19b42172e5add8d9a23651795e6a40e6620d33f33876313da9f8d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__198c150ac4bc8f35ef8da13b0b560fc2e8a82a587e12c11b814eac5ef20185ec)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1fc457ae257b7c5a1970610b598b175c9e2e1c7d1a46965a8a010a57d86d21e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IControlPolicy)
class ControlPolicy(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.ControlPolicy",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::ControlPolicy``, which is used to add an access control policy.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosControlPolicy``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union[ControlPolicyProps, typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

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
    def attr_acl_uuid(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute AclUuid: Security access control ID that uniquely identifies the policy.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrAclUuid"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> ControlPolicyProps:
        return typing.cast(ControlPolicyProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__431ed27a745a4acccd9c3efe34130df99fb36082368028ace3839a0a1234c2ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__753c4f172760e946c4dd30b0cc6236bfb997ae267fc216db3737b6c2d4ac77ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5bacac9b5cffe0d5dd05e314eeaa8d87a3d6c803f113a555b52be38de71eb77)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.implements(IFwSwitch)
class FwSwitch(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.FwSwitch",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::FwSwitch``, which is used to enable a firewall.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosFwSwitch``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union[FwSwitchProps, typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ba1d95fdf5ddf37762cfb021381d9564a9e4df0def3ff44eb9f52f115843a7e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> FwSwitchProps:
        return typing.cast(FwSwitchProps, jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8753d35e677d2b9f217a5151426e2805939fd428d3a3c3416d847f88e2922377)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01a46d6ec36e8d1b2bc2946b0d759e3d6a2c4ca7156c1de3694f80e841fc8324)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87c560add408701576a5f5068103ee73f44f0edde16ae44ba2e8760685d541bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


__all__ = [
    "AddressBook",
    "AddressBookProps",
    "AllFwSwitch",
    "AllFwSwitchProps",
    "ControlPolicy",
    "ControlPolicyProps",
    "FwSwitch",
    "FwSwitchProps",
    "IAddressBook",
    "IAllFwSwitch",
    "IControlPolicy",
    "IFwSwitch",
    "IInstance",
    "INatFirewallControlPolicy",
    "ITrFirewall",
    "ITrFirewallRoutePolicy",
    "IVpcFirewallCen",
    "IVpcFirewallConfigure",
    "IVpcFirewallControlPolicy",
    "Instance",
    "InstanceProps",
    "NatFirewallControlPolicy",
    "NatFirewallControlPolicyProps",
    "RosAddressBook",
    "RosAddressBookProps",
    "RosAllFwSwitch",
    "RosAllFwSwitchProps",
    "RosControlPolicy",
    "RosControlPolicyProps",
    "RosFwSwitch",
    "RosFwSwitchProps",
    "RosInstance",
    "RosInstanceProps",
    "RosNatFirewallControlPolicy",
    "RosNatFirewallControlPolicyProps",
    "RosTrFirewall",
    "RosTrFirewallProps",
    "RosTrFirewallRoutePolicy",
    "RosTrFirewallRoutePolicyProps",
    "RosVpcFirewallCen",
    "RosVpcFirewallCenProps",
    "RosVpcFirewallConfigure",
    "RosVpcFirewallConfigureProps",
    "RosVpcFirewallControlPolicy",
    "RosVpcFirewallControlPolicyProps",
    "TrFirewall",
    "TrFirewallProps",
    "TrFirewallRoutePolicy",
    "TrFirewallRoutePolicyProps",
    "VpcFirewallCen",
    "VpcFirewallCenProps",
    "VpcFirewallConfigure",
    "VpcFirewallConfigureProps",
    "VpcFirewallControlPolicy",
    "VpcFirewallControlPolicyProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

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

def _typecheckingstub__972a122cc18fc384458c5408bfcbc8efe13b2c560cde4ca02acf5a5beffb3d3a(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a6c97798b19d98d15e94ace72d5a086540e0056a4ded86896b51b7212bff79b9(
    *,
    acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    application_name_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_resolve_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_days: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0df9132647603968b9f4523c3b82b37c0f613298f5f358fca62300671bbf3ea1(
    *,
    ipaddr_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_type_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce6335912372f797a3b3f93c76f679d516c3e63e71305a80148ebb09555ffe9c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59be78b698babddd7ac9bd8c21e07640c523cfd2f8b3c96811feb958a3ea3490(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07f67c0eac56c7953ddd66645e7565ec118d3517afba77d05c1a4b1932e1b2c9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecf3390438dd10f109c58004f51d6cd26debba4fddbbd22f0eaa18027960d0cb(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26b45555ca5e99d652503be263088caf3546c0294ee20f7b26af55a456eebd96(
    *,
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acl_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_analysis: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_account_management: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nat_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nat_firewall_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_firewall_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40c12d0695bc2a5ebaffcfe4a187edec902d124c84bd53b8e8c261d7f8f91015(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[NatFirewallControlPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ffd18721e8780f2a57f83cd227a51e4fda2fdc127eb6af0cef805ce99e19961(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__609816e6958552127d086d014e79b815fa5ccc05555e932151038c18f0c0cc7e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2d9b4dbe67edce33626c27c4434b88ddc301cc8781443444e110676179a96675(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__39bc0f33caab35ab6cb6481cf96d83d922d2d7644d52a6f43292914c392abdc0(
    *,
    acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_name_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    nat_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_resolve_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_days: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__2e5d01dd1ac11217626d5a962fbc710ab4c174260025eb20c314bf65185309db(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAllFwSwitchProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1470c249c4998708229c0eac0fc4880dea636edc6f86bfe48570f6f37c903f64(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67fba5f74b2800c361b95bf975bfa5b5818f2b82cc374fd551074332019dc613(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa1cfa14d314e72577b7ba22cba966560931199a5ebac1eb863ea51f58822251(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddcaeb3d7611c00eea2bb15be25647c721ef47c2594ef866b8acb3f6a90e4bb4(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__dfe2bd60e25abb0616a3a0e7947b03f7a77d96fbee9017276db1ea2154be9857(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b32dcfa7a1c798c7acae4918f396b44ab2382d6d81c35d4118e95ee0250f51c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
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

def _typecheckingstub__b6d05a917cfe52ea9767caa75ef4dab616ab0df791f4fbb0b9519d8388252d81(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01019e151fce99493cc7a608f08e6997ef5d6d63d7ff410f4ef55799202be3ef(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__681bb908180216dce790c9a5ed781e8b3c57b43942e238ab8b6dec9c0ae5745b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d213af605db6a677bf73e6abba066285635197e958432109f0db098010c3202a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6ca0e4a4d5068e7115539cb445cc3d403487611ca3c597308eda03e971f3c58(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6c72ea16933567b082815f779495acf51f0f325cdeff739bae416690dd38647(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e328ea9ddde9482803b1e65e027fae49c68982dfd842013ac6a00c7adec82c0d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05dbd8b59a60bdd00ac0536ad13c6ba5e9229e8416d708d3ac57c702dc759c2a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d02118dd9122b0e922d0b4d80370fd846e8dafd4bc79df9c7f89ac428db6e52c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2fe10eaa2af356c5c4d50cc2a91f4f0d55efc7290acb6ef957f35f997637538(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b0597838817cd28ec192aedb55f20a5dccb9153f1ecd07ffb4d2d889ef27f04(
    *,
    acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    application_name_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_resolve_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_days: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__163a89dee20f79cdf36741ed841422849b92fdae9e614938f5bbce68a252a6a1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosFwSwitchProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b1c87432aa59080e80e2e4f2bb2ca61c85139817b52204e0ff93d6a18a07ae38(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c70911431c6c2ea4e2ad16776520557eacd9bd8f218bb1e049c37804191a07b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f238d7838e13fb0e4f40cbfab6480b5b2dd94aa553bb9c1bf73079cef629cdd6(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__015e71e6ca1be2e0b069e6ab858c6ddfabb791436187d919d46864fd82a839d0(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be7a7b961997b153b97ee7be8fcd472a21ac1f69426bd0ddf2375280e7b1ed22(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8063557ef058fb2d3cfaf1f83f5fd42cf9dbad773220a8fe6994a9f1bf3d48c5(
    *,
    ipaddr_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_type_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ca6e2ce473005565dd59807fdfbe4f9c73ef44ed6167a8b2b455d639f549166(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b4e5f46e88444016bd8adee8b1b688dddf765f263f75c82ca728deb472126ee(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__065aa85af927c52b8e1a719a80befd2b58259484b0cdcf41e3074ee506634aeb(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1a287677ff5dc8e9a7e26ad58c939caefa6777063570a574cc4939fe726e010(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28c6771482ee7cd21499e8fc31ad8d438097df29f2bcbf4224ced138689c6d29(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5227eefc5b5bb04e6593d44fc866f631713cde8696eb94ca279e6ebf689f46d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da60333fd8f6b1e521f776f9091983bef7df13bcc1a1a3ce2f04b2c4a0967641(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6cf53bc32ea7edd27e7d6428d36ba1cdfa6c3ac650c893ce5b8878a30012d6f7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ac34385a313b9f61122e590c933230c71f446a640caac5bff80c4843be2ce2c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__308c1ded1041521e4a66508be83bea369aab5857ae9e65d2208b51a03dbc13d7(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4437613bd15614de045869684a718430da090af80f128bdd8d597992f2126f4b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5349e66ccf49e7dde6f2dca3481263518192f3549f692325e82b12088309a1d9(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5d48ebea36427f82b19576b269508204b707868ffc3e2c30823255d6825002b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b1d24a3384a6795234c361dcc69cb8ec10a51d324b09d96b9016c703e9f6617(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50330b2dbd4488e10ffa7c8e77239057a3b4d82afe4a743a5cdbea81c7f56272(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__637d0a692c077dfe8939e86f68d23cc9f5b0d56fcb5b95e176e12db31537a081(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd1aeff571652d2321761cdaf862a7820580bb381539befa73d4582085db9997(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f7a0717e86455f7e01766f13bf364515a425b0e9e1e1946061a0d269f06f480(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86d132181ec58378d3b27bde850092d1699efd424d46805b90e4fb0a9d6d5fbb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__437b9275a74e45b71579ccb6a64ef9c54914189810be3ae8af6fae615879e9e8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4544fdb11fc24e3296bd3c5b5a7ae9e97da243b91307d0e73c2f3bd9ca8ed56(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4fe9cc3f79c6d7d961d09e22408fd0120b01510d51076dfda1d6847587f029a(
    *,
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    account_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acl_extension: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ignore_existing: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_analysis: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_account_management: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nat_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    nat_firewall_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_firewall_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d03a8dfcfbad08792ba0562a43c78207e88bc968825aeff997f2776f4534179a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosNatFirewallControlPolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc83da5a1c23098bbbe4415c9b4e8e302b39b8a53f24c415c4d33b5d8b675d56(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00be95ae8ab09bc4ace66e7d36980686b61d0173aefd140e44cf358fe368d259(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2565112fe576e2dbd837a78984aae83321c43c65d098e32a4c787415a3abe6c1(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03176fe295dec0c0ce1042fa0d159f180edda630d31f1578703c2407e1b8e6e7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44eb55bf2f4eab6586b7689888f19ccb0db9a906f98847fce5d02299eef7f979(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1303ba6e3e2aac40e5e249f604037263cb74cf874e533c518792fbe896b02c50(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__296be78203e5da678047afc4bacc4b1201a68b3ca5b3d8688deb3d9ddf53e84a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4d4bd97409eda213faab4cac7ece6a4caf89def10a8956b67ca082c969883518(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95369b90e8d16d0f2f99a7873f79643d207d873085c6d1c4ea71a5b720254c75(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20dc10e99b96523edd5c7edd0b4bff78fa8217d9e65b9197951aa92b49c76e82(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__630124994b99f14dc8aaa6ead52a3e5fda510514ee0da1e657ddf8be7b49bf95(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f5854b12aa0509b020292b37e3380e3f602594ee17f1038cc80306a5dafd96a9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2058b74ee62f63bbc1f08564fd1600c1079f0cb8c66c7b58c45e655ae19eb77(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83422e6a4780bcb1d251a23209be96ab1a1d16183bae036440f93788b25fcea2(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09c066cd68c2fb11a620d151deceedc4cc461697464bc7c5b246894bd0f308c3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e15459a3cc49871219be7d1cc7c288e0f28e88b53cd92e12acfe673f9f28b701(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__689ad3580540882483c21c688adbdb415e8008ab5527f4af3a3873065eb6f237(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ceffb5944e9ea8d3e22ab71caa1aef03ce16c8568dcb9ae89130c0ad9582517(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c35990212d90c02a6f8ad454048e87e7686751329b5aca9ed97b196081f37a02(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40c039da4a34b15e44eac7b65c651a7c46c21f617f1feb01bf67a4a2e969067b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6044843a30e6398d7693a5058bd7ae4b5177e0a5f38fba5b016a1bb773e1785(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7dd1c3816dd268493ff81e6041ab84d30f8643286d889d607e0de91b86777e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fb514e888637b16fe4dcfd6ced6054a6672e3af4eac9ee91c18348e09e44078(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20703fa7d168b033a11fac720d1248f8ff6032c44aa8bed76e2dad74646ca6e7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55604c3f974e65b9e4fa85f638972d49541ea3be406488efb6c70a78be1abc5b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a42ee5f6c75691b00ef2a1a8c5a54ca91a0403c21c36ce275b76d2bf59586431(
    *,
    acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_name_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    direction: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    nat_gateway_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    new_order: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    domain_resolve_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_version: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_days: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__915815e7f055b29b41215130a763459050b4faec1e87e92414de44cb27b607e6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTrFirewallProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56ca702e792362b32a6b6d34e95a66b59b86b34fb5094cc979d3633ff8671db7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42c7a161b851820cb9433bd72171588dbd74aef40d03573d296a58289ec78ea5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0aa11ba3d810240ca10546e1a592e3c4150db0f76a65c2e7b6d4da3ae64a621(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ece092d5abe222bf48cbb32a01a37dfa48a6a54d7c24d3e6771a51e97bb913ea(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f197a3fc6400195368ff125fd0f93a9972e1dc5777dad807e332337903852e9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9768f06cbe32788f34c7534937cf900d3802ab41faa70da7b5a352d1e5092d4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__840a816b2790fc9324fa7a27cc3034f20f7542b49603286f8a4f678a5f733039(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__494ff8754f6e9f5f195d4aef35af36eed9a1967eb3284c929d85cf92ed00cd55(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54a6107cb027b357a6fcefeeff4391d1a296a98444b5e4e7f1fffee0ef7d707c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__286a79382ca21daa42272b0883f3ccf26cea2d01c9edb7d3af624372a5ac1f22(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9252b992d5c85a584d4d482012fdde539c9087b5dd421c0c8b0423500ce5acc0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c859668da60e0be76c2272370a0cea487b460b7aac39eed0f86f408d61f61d8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8fd4da2c97ebb73af77bb878f3845b1d82244a59b0cbfa6dd7d26d15a0d1c845(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88a2aa4905b2a0bf55a22f6446125b1ee21c36fe332a3f158eb148d6b1f2a598(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83884a298bb0db83921aa04e2a44e2c6e5ff6abbaf4ab443a3958a5d028e6d0d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18a83e24a8677d1b4e8c526a4f72dfa0164fb9af943279cc8031333b37665d77(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19400158cd695c5281eb94aa82ec122ad379e6d9fec871190099fee4c660aef8(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region_no: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    route_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    firewall_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    firewall_subnet_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    firewall_vpc_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    firewall_vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    firewall_vswitch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tr_attachment_master_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tr_attachment_master_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tr_attachment_slave_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tr_attachment_slave_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5df98aeb767d89733047abf05562e54a04c9821893afd51bfd97d66d7001949d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTrFirewallRoutePolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a05fa374192aaeee7a4a2530e9e3df09443f72310b97f53031702848a86ee3dd(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57e07dbc4e8be8d5c6d2b04d64c61ea258a498029429ac9d03999aa360b888b9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaea9e67870480dbb8439351db228197718ee6599eaab2f27ebac05eab8ca133(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4724871be475578782648d5ab497d01c86c73ecf6c6fe94ab25f6370bfbbcdc3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50accf8dedb44770a5a9bf0b24639bbb4c4f458fdf40830ee05a62b42aabde9f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f86295a35f96bf840adbbc093c96c0a322b790e708b22254351bca348b5111fe(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa38707dd1fb5dbc8b642d3a91dd445abb0e065a8f2deb6694fb0a3e2921ca0f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTrFirewallRoutePolicy.DestCandidateListProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b1a1828595a6fa11efc1412524c580e5376a8f4916d9160d626012d7b796162(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTrFirewallRoutePolicy.SrcCandidateListProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a9473a1c8570988048731b30515d36b49139e50be85cb5b28cf3f4177960a91(
    *,
    candidate_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    candidate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a62dce062c1c22748e4f0c9c35173baa23d22f53e16a74bf0d4593434c3ada5(
    *,
    candidate_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    candidate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4af979beb4f36ebec4f3c1f1ccd35ecc19ef722543247ffa9eabe09a2b3ce4de(
    *,
    firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_candidate_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTrFirewallRoutePolicy.DestCandidateListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    src_candidate_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTrFirewallRoutePolicy.SrcCandidateListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f22f3e5944094c547ad8bad8f9c8a31ca136ff08b41bfc024ec8f994a7cbe824(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVpcFirewallCenProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba97770f3578f944a41aa48b2309ad37a28b007cbd9932934834e015515f1d61(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__997befe9210c787d2315ec2d5aabbbc9a26249082044017eb7dffa281f589f29(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__522a493e0286d653f01dd3ca390307b083fcd630d16e2fa463c41f158a292f7d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54c14701abcf15aa1ae5e08405ddbe394f022c862428f316cd59f9c1a25e3468(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7aaaf8bbe7a6c9bb085627f3df4cf2e95d9138d119e0b8b7bed36ea60a0e535(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69b108f41abcec291ef53e2bcaac6d0fc3054051ec4a54a505343318b0a481a5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__542fc382c63a5f4fdb6775b8a0092947383e4b1c8665e94a11475f5f2b894f32(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c05d5737bd6790137242a7c504b8c0b4820c45d2f7da5cb1f32adf59e4011233(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d5e5f0ddbae6e3df9f9b4092128be0b50165024b09027238058a321f696d044(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b5cb829d2d707dc32ed992ff5e5a218cc1490dc78d9a673f5902b714b12db3c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f193e42e5137a220896982e9377590156ff4c4c638c35490550fefc3f899345(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b85ab14bd90541334f9315697049291fb77ddb219a423a340c32774a488107ff(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__464acebcf714180a1bc557c28aa7a6e660584fc66a3358f1c51667af813d9df3(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    firewall_switch: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    firewall_vpc_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    firewall_vpc_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    firewall_v_switch_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdd9dc910aecbb319447cd0f4471c9f1300c04e6d83963ca7efab03bd030db35(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVpcFirewallConfigureProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8db7f5b2f137467d356cf028453fe9851b77d6bee58900a2e9a928df10a3f466(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d283a5577b51f90c06f943393f28542db3cc5fbf5d68b599e24ecf37c070e55(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__001b1d442f782a7a3257c41a167b22feea49287040a68736755f009ceb118148(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98a29c1edb335ff0b0f1fea77e98c6e82c67b21cdd50ef706e295024ad678794(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcFirewallConfigure.LocalVpcCidrTableListProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e79c99a8260218363b2cf3625f0a358b87be65e921497985e76178bcde11b522(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e9f88d4160d456fc56dd2a424021a3616cc1665845486b1cc5afd25159281ae(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47927f86deb98310963525bb10bc03a52c464e592d59dec79702dde4ed2f0c4a(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVpcFirewallConfigure.PeerVpcCidrTableListProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca9073277639ec6888555f8438550d88b2b7054295b3a9e2887dcfc73a8bb510(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11c19b08d04203d04e4b47e063cdc42006bcbaf8effb7c298a4ec11f33fe12bb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__702631933445a472eb04c20fe9f0e1c74fbf6d0ac2e677aee7878b36bbf19faf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4bcbbf5806d89e3519d5de550051b9ee509f08d11a08bd585df3dad1bd307c7c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed29d8067a4aa3004f8cb40bd88efd5066de2ca57e8a71eed9f1ae04739f4af8(
    *,
    route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    route_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcFirewallConfigure.RouteEntryListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1404e6014e0fa6f79c601a295b50ddff6811229e413c322d74e37b06e2c79d1f(
    *,
    route_table_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    route_entry_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcFirewallConfigure.PeerVpcCidrTableListRouteEntryListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e03232a331def5e797d1681769c86cd1bc460c7c0fddd732345ff493ba465d5(
    *,
    destination_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    next_hop_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61ccd0d62adee2977ad013b98df97e3f13487527545f42ad0f06a81a00959f8c(
    *,
    destination_cidr: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    next_hop_instance_id: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13976951d579a8b3a341ebe0337a890f6ec86c976986edce31d1be0b1fb9c031(
    *,
    firewall_switch: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    local_vpc_cidr_table_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcFirewallConfigure.LocalVpcCidrTableListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    local_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    local_vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    peer_vpc_cidr_table_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcFirewallConfigure.PeerVpcCidrTableListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    peer_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    peer_vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__599c39b3a7815e06aa3526411ea576dcdbe893faf5a3b5874355d12e40c88e73(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b43d409b8aa48383847bd5dd2127c633b5c78cd781640c53ae0ef95e540d866(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
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

def _typecheckingstub__72ceb904154761b2a8c34851ecc28f36e36927083bc6167ec3e59387ae2f7258(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__96d999d2420828e537e4e75c270ee3181087edca0f79df47ca34defcba99fe8a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f732c7d374b9adb8fa6561f428f0882d757b98e4f87b1943313272f9b30fcd8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3f90392eefb4dcc20c36b3189d0986cf82004cebfded3dbefd96dbf5a7f3800(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ca9d0f02d3f2b115f3aec73e4e150cfc25d01d4b6be3bfecc62cd7332a556cfa(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f656975282505f47ab18f546d8a897962f3803c855e9e4a77bfbb799d876d96c(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ac8072158a294a6be25b3b2c963a8875e54d51f6c207085cc52dab97cd3eda0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fcee644431cb918f06325bb9cbddecc2fdd0c3f0389f5770e855bbfece083a5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9fede97f2493359d63de0e12d255fa15dac3081cba692e5b18bfd7dfdc78ab5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb265cc619439a3281dd8e6557e9dd5dd5229e08cf63ea47fc37788e79f70ccf(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57de059de0eaf5505e96950f7a983c3f53222bfaa47b923bf388ff26c2186d9b(
    *,
    acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    new_order: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    application_name_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_days: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bec3c5e0530ef757e8a7d5da8cc42b401612430380160d5ccf75ec0fbd08727(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TrFirewallProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3c053f5e328112d92054a7c3d16706c45993a99dfd20e0f46ecfb272d591e775(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__843ce7ce1eedeca0b3f3e87d8c0dc12ec0ba63c3e7e43d2fcafdcd31ca275a72(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a6a9012b03dbde0ff8ee0433c5d3ebdb154a425d447713290bca67b198bec0f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40d84882b3b46a2f789e2f2878f506b9e4481f2c903ac2d8d84a4a4ed1765a68(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region_no: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    route_mode: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    transit_router_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    firewall_description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    firewall_subnet_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    firewall_vpc_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    firewall_vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    firewall_vswitch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tr_attachment_master_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tr_attachment_master_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tr_attachment_slave_cidr: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tr_attachment_slave_zone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47957672439524d8dab0a0809741ceb8e83702ec4a9e528a43773f5966a37d06(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TrFirewallRoutePolicyProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c993d60aeaba6c305452d2f32f88148b47262e71750a656e613d843073f23853(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e82e55c881cce099d23397e11229bd979f2e55c7974af4de76bcfb45984300e0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a5f9235312188b168da84ee6105315807c648f440c53195fd5557ef09882824(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71bf48f2b34a623764bab4d4c5f31c1e141b13d7ff79d3dd64820b0eab17ea6d(
    *,
    firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    policy_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    dest_candidate_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTrFirewallRoutePolicy.DestCandidateListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    src_candidate_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTrFirewallRoutePolicy.SrcCandidateListProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b787c42539824c27d9062045e74d4040dfa2912db79157f71b722746a21cd177(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VpcFirewallCenProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b9948e553a060f7bcc341f8e2825533ff1d20843ab61d4d607c7db86f0ab134(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c012276cb79d156a4df77f5d0dbaceea9280d2641ce1943359ff5ed2c1707bed(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3fc9c4976b86dee01c8ed77ab9fee9c3cddf5aafdbe1b2407ba30cfdbffcb1b(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24e82579b874d51769e4181e3a56c1e1c9381b4aba62762ac7dc5e0e8dfed47f(
    *,
    cen_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    firewall_switch: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    firewall_vpc_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    network_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    firewall_vpc_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    firewall_v_switch_cidr_block: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ebf8b553cdc19d7fe43485cb28567fbcfe12cff32073989ac2870b0ae5dbefd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VpcFirewallConfigureProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47439df2daee7ad5c211c8a93f0197112be2a196f78fb38c65e3f4f84060cf37(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68ba33ef1b78e267db7b959df58a01b4c27a1b8bd4ec611ca7b341037566a4f5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6174f20f3ef0ed9e71ed91b73539c86adcebe9e198693a8bf7baddc7b640769f(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8a5f456e29d9568d337e7210d9976a70e298ca20618917dd22a2fa19e04939d(
    *,
    firewall_switch: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    local_vpc_cidr_table_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcFirewallConfigure.LocalVpcCidrTableListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    local_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    local_vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    peer_vpc_cidr_table_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVpcFirewallConfigure.PeerVpcCidrTableListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    peer_vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    peer_vpc_region: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_firewall_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__b474a04ab3e51d93c899db94b6cba7c1a483d1e4f5ac23385515309b3f3f5fd4(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36be170878e6c8646ba8ed6b8b8b67242312b5adcda6d686df92e318babdad79(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98e8ac51ae1de9d651e410f751c70d78f164569742b930ac4d230dafb9e10459(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fb36318f0736b578a6f26d6fd6f3668db0389dcf8143a1ea23ac8d7dc0ae413(
    *,
    acl_action: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    destination_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    new_order: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    proto: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_firewall_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    application_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    application_name_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    dest_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dest_port_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    end_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lang: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    member_uid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    release: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_days: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    repeat_end_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_start_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    repeat_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__271a635ebc1744b887b2c9866532a1b2037a9f07cd701ded648279b1462ba0d8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AddressBookProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f44a8d615078843b0935423b287cc7a035b2620cda36184983994f1514f44711(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e16e1fd8e19a207b9cf185d6081e3db0195c95f259d16cfd7ee1bb08e51a4a5(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91dc03fded894e66459a5d5acb260d639194ed940e41a5391bfa776e60ee87a6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3cc5fe3dae0a68297a1933d5ed0b0ba01a72835037793e57d977837f746e2439(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[AllFwSwitchProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae0c503971e19b42172e5add8d9a23651795e6a40e6620d33f33876313da9f8d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__198c150ac4bc8f35ef8da13b0b560fc2e8a82a587e12c11b814eac5ef20185ec(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1fc457ae257b7c5a1970610b598b175c9e2e1c7d1a46965a8a010a57d86d21e(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__431ed27a745a4acccd9c3efe34130df99fb36082368028ace3839a0a1234c2ee(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__753c4f172760e946c4dd30b0cc6236bfb997ae267fc216db3737b6c2d4ac77ef(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5bacac9b5cffe0d5dd05e314eeaa8d87a3d6c803f113a555b52be38de71eb77(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ba1d95fdf5ddf37762cfb021381d9564a9e4df0def3ff44eb9f52f115843a7e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[FwSwitchProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8753d35e677d2b9f217a5151426e2805939fd428d3a3c3416d847f88e2922377(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01a46d6ec36e8d1b2bc2946b0d759e3d6a2c4ca7156c1de3694f80e841fc8324(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87c560add408701576a5f5068103ee73f44f0edde16ae44ba2e8760685d541bf(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass
