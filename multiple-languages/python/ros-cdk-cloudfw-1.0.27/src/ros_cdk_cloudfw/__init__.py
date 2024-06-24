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
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::AddressBook``, which is used to create access control address books.

    Access control address books include IP address books, Elastic Compute Service (ECS) tag address books, port address books, and domain address books.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAddressBook``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-addressbook
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AddressBookProps", typing.Dict[builtins.str, typing.Any]],
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
    def attr_group_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GroupUuid: After a successful return to the address book to add unique identification ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGroupUuid"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "AddressBookProps":
        return typing.cast("AddressBookProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AddressBookProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b928e53bfa72634e0343ee5bfe8dd6b6f9ee5b8fc12128c071bec77c45a2657d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
        props: typing.Optional[typing.Union["AllFwSwitchProps", typing.Dict[builtins.str, typing.Any]]] = None,
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
    @jsii.member(jsii_name="props")
    def _props(self) -> "AllFwSwitchProps":
        return typing.cast("AllFwSwitchProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AllFwSwitchProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fce4aa43b0f7a323cc9891aefe9914449ba058fdaf0c797dd8eb352587555bdb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
        props: typing.Union["ControlPolicyProps", typing.Dict[builtins.str, typing.Any]],
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
    def attr_acl_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclUuid: Security access control ID that uniquely identifies the policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclUuid"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "ControlPolicyProps":
        return typing.cast("ControlPolicyProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ControlPolicyProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03826de922c7bc6f0e7dd8cd3bef84e347b6bbf2bd619c2b83d13978c16e021b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
        '''Properties for defining a ``ControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy

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
        props: typing.Optional[typing.Union["FwSwitchProps", typing.Dict[builtins.str, typing.Any]]] = None,
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
    @jsii.member(jsii_name="props")
    def _props(self) -> "FwSwitchProps":
        return typing.cast("FwSwitchProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "FwSwitchProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de86ea55814a4de6a6c6900b49e72e030cff34c0dae986840a7bc1f611182b2c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::Instance``, which is used to create an instance of Cloud Firewall.

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
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: Instance Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "InstanceProps":
        return typing.cast("InstanceProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "InstanceProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ff036d926d6336ad1b86fc3116ad9db0cf505b3915b639c321645c85ae0191b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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


class RosAddressBook(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosAddressBook",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::AddressBook``, which is used to create access control address books.

    Access control address books include IP address books, Elastic Compute Service (ECS) tag address books, port address books, and domain address books.

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
        '''Properties for defining a ``RosControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-controlpolicy

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
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::Instance``, which is used to create an instance of Cloud Firewall.

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


class RosVpcFirewallControlPolicy(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-cloudfw.RosVpcFirewallControlPolicy",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::CLOUDFW::VpcFirewallControlPolicy``, which is used to add an access control policy to a specified policy group for a Virtual Private Cloud (VPC) firewall.

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
        '''Properties for defining a ``RosVpcFirewallControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy

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
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::CLOUDFW::VpcFirewallControlPolicy``, which is used to add an access control policy to a specified policy group for a Virtual Private Cloud (VPC) firewall.

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
    def attr_acl_uuid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclUuid: The unique ID of the access control policy.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclUuid"))

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
    @jsii.member(jsii_name="props")
    def _props(self) -> "VpcFirewallControlPolicyProps":
        return typing.cast("VpcFirewallControlPolicyProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "VpcFirewallControlPolicyProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1e6a605552b3a7538419ba6e21aede94f6bd5909c30f9ed384512bd2dc9bc227)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

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
        '''Properties for defining a ``VpcFirewallControlPolicy``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-vpcfirewallcontrolpolicy

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
    "AllFwSwitch",
    "AllFwSwitchProps",
    "ControlPolicy",
    "ControlPolicyProps",
    "FwSwitch",
    "FwSwitchProps",
    "Instance",
    "InstanceProps",
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
    "RosVpcFirewallControlPolicy",
    "RosVpcFirewallControlPolicyProps",
    "VpcFirewallControlPolicy",
    "VpcFirewallControlPolicyProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

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

def _typecheckingstub__b928e53bfa72634e0343ee5bfe8dd6b6f9ee5b8fc12128c071bec77c45a2657d(
    value: AddressBookProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91dc03fded894e66459a5d5acb260d639194ed940e41a5391bfa776e60ee87a6(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__fce4aa43b0f7a323cc9891aefe9914449ba058fdaf0c797dd8eb352587555bdb(
    value: AllFwSwitchProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1fc457ae257b7c5a1970610b598b175c9e2e1c7d1a46965a8a010a57d86d21e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__972a122cc18fc384458c5408bfcbc8efe13b2c560cde4ca02acf5a5beffb3d3a(
    *,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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

def _typecheckingstub__03826de922c7bc6f0e7dd8cd3bef84e347b6bbf2bd619c2b83d13978c16e021b(
    value: ControlPolicyProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5bacac9b5cffe0d5dd05e314eeaa8d87a3d6c803f113a555b52be38de71eb77(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__de86ea55814a4de6a6c6900b49e72e030cff34c0dae986840a7bc1f611182b2c(
    value: FwSwitchProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87c560add408701576a5f5068103ee73f44f0edde16ae44ba2e8760685d541bf(
    value: _ros_cdk_core_7adfd82f.Construct,
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

def _typecheckingstub__6ff036d926d6336ad1b86fc3116ad9db0cf505b3915b639c321645c85ae0191b(
    value: InstanceProps,
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

def _typecheckingstub__1e6a605552b3a7538419ba6e21aede94f6bd5909c30f9ed384512bd2dc9bc227(
    value: VpcFirewallControlPolicyProps,
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
