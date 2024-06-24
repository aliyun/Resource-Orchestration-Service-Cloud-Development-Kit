'''
## Aliyun ROS ARMS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ARMS from '@alicloud/ros-cdk-arms';
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


class AddonRelease(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.AddonRelease",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::AddonRelease``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAddonRelease``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AddonReleaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__106fe0aebf827d2a7f9fd342f2fdce965e7d1df85821365e743cff0e0c4ac935)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Config: AddonRelease configuration information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnvironmentId: The environment ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrRelease")
    def attr_release(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Release: Release information.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRelease"))

    @builtins.property
    @jsii.member(jsii_name="attrReleaseName")
    def attr_release_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ReleaseName: The name of the add-on.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReleaseName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__571b08154ed9bf66bea439ea070a693bb1cc1e688aacf3daee17811c5b89ce7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__026b103f60117b974e018e2081b1fad62815f6b3f6f2a0bb2e7602b556d2301c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AddonReleaseProps":
        return typing.cast("AddonReleaseProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AddonReleaseProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c17e014a91cbd09f25dbfa8a13a13a4461e1faecd8ca8cb1c31886238622eeca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__abe405547ac769ccacd874d214f44b2bd6de602107e6b4ab54a2001848d5f3e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.AddonReleaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "addon_version": "addonVersion",
        "environment_id": "environmentId",
        "name": "name",
        "release_name": "releaseName",
        "values": "values",
    },
)
class AddonReleaseProps:
    def __init__(
        self,
        *,
        addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``AddonRelease``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease

        :param addon_version: Property addonVersion: The version of the add-on.
        :param environment_id: Property environmentId: The id of the environment.
        :param name: Property name: The name of the add-on.
        :param release_name: Property releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
        :param values: Property values: The metadata.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6122eadf859556f23c0eb13714814dae7bd4f68b5b1e79314da146c6f3bd29a)
            check_type(argname="argument addon_version", value=addon_version, expected_type=type_hints["addon_version"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument release_name", value=release_name, expected_type=type_hints["release_name"])
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addon_version": addon_version,
            "environment_id": environment_id,
            "name": name,
        }
        if release_name is not None:
            self._values["release_name"] = release_name
        if values is not None:
            self._values["values"] = values

    @builtins.property
    def addon_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property addonVersion: The version of the add-on.'''
        result = self._values.get("addon_version")
        assert result is not None, "Required property 'addon_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentId: The id of the environment.'''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the add-on.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def release_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property releaseName: The name of the add-on after it is installed.

        If you do not specify this parameter, a default rule name is generated.
        '''
        result = self._values.get("release_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property values: The metadata.'''
        result = self._values.get("values")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AddonReleaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class AlertContact(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.AlertContact",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::AlertContact``, which is used to create an alert contact.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAlertContact``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AlertContactProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9632ef8fa4384819f277f1a0bf2be7d43a9afaf36421341b3cd67a77f894a651)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrContactId")
    def attr_contact_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContactId: The ID of the alert contact that you created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContactId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efcebfca9cecb0dbcb98655f180fba0ed64a558442e85b28fbff6e26b93d09e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f701aad1455409555f5861ddc653a42f5151ca87ae64c1d7a236a95db39a505f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AlertContactProps":
        return typing.cast("AlertContactProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AlertContactProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff4f843c9658721fa45963fcf660b87022d2b927a8101121519b1bb82ad718dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__63ac552f73c182b3295d8c30454627000ecb1037646e73aa83d35ae6cbd25761)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class AlertContactGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.AlertContactGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::AlertContactGroup``, which is used to create an alert contact group.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosAlertContactGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AlertContactGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64ce818318cc49267ab042469ae081d6b3b9009b53e48b1d3835f4e854f2e503)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrContactGroupId")
    def attr_contact_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ContactGroupId: The ID of the alert contact group that you created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContactGroupId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__535bfc3db40bfff32978dc1fc61353f09eaa03aedbabdfe1826f902e55701245)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f1816719b60d5a071dd2bf180fdb7d79d692af41d0be2dc7256686dc6daafc7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "AlertContactGroupProps":
        return typing.cast("AlertContactGroupProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "AlertContactGroupProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__56975ecca8662ab312d36be97a4f209bc7e4816307194d38b607e63f357e5edc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6354ab78ac210f303692e2e45f1d82a9600a7bd98a140568c0a9b8bab034c410)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.AlertContactGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "contact_group_name": "contactGroupName",
        "contact_ids": "contactIds",
        "proxy_user_id": "proxyUserId",
        "region_id": "regionId",
    },
)
class AlertContactGroupProps:
    def __init__(
        self,
        *,
        contact_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        contact_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
        proxy_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AlertContactGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup

        :param contact_group_name: Property contactGroupName: The name of the alert contact group that you want to create.
        :param contact_ids: Property contactIds: The list of alert contact ID.
        :param proxy_user_id: Property proxyUserId: Internal parameters.
        :param region_id: Property regionId: Region ID. Default to region of stack.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33515e210a441d0698ae0936bdc5f1ea85f9306cdba84f1760b10cb939d12cd4)
            check_type(argname="argument contact_group_name", value=contact_group_name, expected_type=type_hints["contact_group_name"])
            check_type(argname="argument contact_ids", value=contact_ids, expected_type=type_hints["contact_ids"])
            check_type(argname="argument proxy_user_id", value=proxy_user_id, expected_type=type_hints["proxy_user_id"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "contact_group_name": contact_group_name,
            "contact_ids": contact_ids,
        }
        if proxy_user_id is not None:
            self._values["proxy_user_id"] = proxy_user_id
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def contact_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property contactGroupName: The name of the alert contact group that you want to create.'''
        result = self._values.get("contact_group_name")
        assert result is not None, "Required property 'contact_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def contact_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property contactIds: The list of alert contact ID.'''
        result = self._values.get("contact_ids")
        assert result is not None, "Required property 'contact_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def proxy_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyUserId: Internal parameters.'''
        result = self._values.get("proxy_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property regionId: Region ID.

        Default to region of stack.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AlertContactGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.AlertContactProps",
    jsii_struct_bases=[],
    name_mapping={
        "contact_name": "contactName",
        "ding_robot_webhook_url": "dingRobotWebhookUrl",
        "email": "email",
        "phone_num": "phoneNum",
        "proxy_user_id": "proxyUserId",
        "region_id": "regionId",
        "system_noc": "systemNoc",
    },
)
class AlertContactProps:
    def __init__(
        self,
        *,
        contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ding_robot_webhook_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        phone_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_noc: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``AlertContact``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact

        :param contact_name: Property contactName: The name of the alert contact that you want to create.
        :param ding_robot_webhook_url: Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
        :param email: Property email: The email address of the contact.
        :param phone_num: Property phoneNum: The phone number of the contact.
        :param proxy_user_id: Property proxyUserId: Internal parameters.
        :param region_id: Property regionId: Region ID. Default to region of stack.
        :param system_noc: Property systemNoc: Specifies whether to receive system alerts.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b69985edbabea812fae27cd1b0035166019b8fc84e67765c33ef36078b9f3ea9)
            check_type(argname="argument contact_name", value=contact_name, expected_type=type_hints["contact_name"])
            check_type(argname="argument ding_robot_webhook_url", value=ding_robot_webhook_url, expected_type=type_hints["ding_robot_webhook_url"])
            check_type(argname="argument email", value=email, expected_type=type_hints["email"])
            check_type(argname="argument phone_num", value=phone_num, expected_type=type_hints["phone_num"])
            check_type(argname="argument proxy_user_id", value=proxy_user_id, expected_type=type_hints["proxy_user_id"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument system_noc", value=system_noc, expected_type=type_hints["system_noc"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "contact_name": contact_name,
        }
        if ding_robot_webhook_url is not None:
            self._values["ding_robot_webhook_url"] = ding_robot_webhook_url
        if email is not None:
            self._values["email"] = email
        if phone_num is not None:
            self._values["phone_num"] = phone_num
        if proxy_user_id is not None:
            self._values["proxy_user_id"] = proxy_user_id
        if region_id is not None:
            self._values["region_id"] = region_id
        if system_noc is not None:
            self._values["system_noc"] = system_noc

    @builtins.property
    def contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property contactName: The name of the alert contact that you want to create.'''
        result = self._values.get("contact_name")
        assert result is not None, "Required property 'contact_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ding_robot_webhook_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.'''
        result = self._values.get("ding_robot_webhook_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property email: The email address of the contact.'''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def phone_num(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property phoneNum: The phone number of the contact.'''
        result = self._values.get("phone_num")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property proxyUserId: Internal parameters.'''
        result = self._values.get("proxy_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property regionId: Region ID.

        Default to region of stack.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_noc(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property systemNoc: Specifies whether to receive system alerts.'''
        result = self._values.get("system_noc")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AlertContactProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ApplyAlertRuleTemplate(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.ApplyAlertRuleTemplate",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::ApplyAlertRuleTemplate``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosApplyAlertRuleTemplate``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["ApplyAlertRuleTemplateProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a376e4ae1171d0112874fc15af1ae7e16bf68d9593f66a3d27681616471e4b4)
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
            type_hints = typing.get_type_hints(_typecheckingstub__dfbe01e47e19afea48b3b694c2b889cc48f3f6f5694ea663193376e8357ee205)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc00a367c23b8dd684f8fe6ca0b6dec7ec69223ced8e5b46a323992ad55f2f92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ApplyAlertRuleTemplateProps":
        return typing.cast("ApplyAlertRuleTemplateProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ApplyAlertRuleTemplateProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a60b493c894fa94ac36c7d46eafba103cd46f9341a78351bbd19369ca4fe2782)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9b707c25f01b55d700f688ffcab77c2e80c400229aea4514bbdfe36edae1561)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.ApplyAlertRuleTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_ids": "clusterIds",
        "template_ids": "templateIds",
        "update": "update",
    },
)
class ApplyAlertRuleTemplateProps:
    def __init__(
        self,
        *,
        cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        template_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        update: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ApplyAlertRuleTemplate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate

        :param cluster_ids: Property clusterIds: The IDs list of Prometheus Instances.
        :param template_ids: Property templateIds: The IDs list of Prometheus alert rule templates.
        :param update: Property update: Whether to update created alert rules. Default false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74895326d5c4050036bef206f76163fb7003c73e9a15a8a90f49319f2d053cb9)
            check_type(argname="argument cluster_ids", value=cluster_ids, expected_type=type_hints["cluster_ids"])
            check_type(argname="argument template_ids", value=template_ids, expected_type=type_hints["template_ids"])
            check_type(argname="argument update", value=update, expected_type=type_hints["update"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_ids is not None:
            self._values["cluster_ids"] = cluster_ids
        if template_ids is not None:
            self._values["template_ids"] = template_ids
        if update is not None:
            self._values["update"] = update

    @builtins.property
    def cluster_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property clusterIds: The IDs list of Prometheus Instances.'''
        result = self._values.get("cluster_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def template_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property templateIds: The IDs list of Prometheus alert rule templates.'''
        result = self._values.get("template_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def update(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property update: Whether to update created alert rules.

        Default false.
        '''
        result = self._values.get("update")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ApplyAlertRuleTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Environment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.Environment",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::Environment``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnvironment``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["EnvironmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0cb10aa246a4337fa70d3c14855064a22c8bbe09546ae069423966fa9aab402b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnvironmentId: The id of the environment.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentName")
    def attr_environment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnvironmentName: The name of the environment.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentSubType")
    def attr_environment_sub_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnvironmentSubType: The subtype of the environment.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentSubType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentType")
    def attr_environment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnvironmentType: The type of the environment.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentType"))

    @builtins.property
    @jsii.member(jsii_name="attrFeePackage")
    def attr_fee_package(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FeePackage: The payable resource plan.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeePackage"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaWorkspaceId")
    def attr_grafana_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGrafanaWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrManagedType")
    def attr_managed_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ManagedType: Specifies whether agents or exporters are managed.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrManagedType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusInstanceId")
    def attr_prometheus_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrometheusInstanceId: The ID of the Prometheus instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrometheusInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc9838c31e5918b4298b3017bf9d38bce8e7ef937c088acdfb1b5fdba9f98c92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3d4cbe45ff6b7dda19e6a42657dbcca2eff5329b5dd4ddd73ea7600a3ad0a35)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "EnvironmentProps":
        return typing.cast("EnvironmentProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "EnvironmentProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7f51b6e2533ef4aa66589969543a62d7315b685eda2d773ae9fbfd0013544bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f4f53a240089dbe4354db094f3ee7016b14caa23345449aa7d0726076204dc6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


class EnvironmentFeature(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.EnvironmentFeature",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::EnvironmentFeature``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosEnvironmentFeature``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["EnvironmentFeatureProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f298ffd478eb4dc6014d5c2bc48e0edbad858b1f6f65a0da78a1fb9eb958718a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnvironmentId: The environment ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrFeature")
    def attr_feature(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Feature: The installation information of the feature.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeature"))

    @builtins.property
    @jsii.member(jsii_name="attrFeatureName")
    def attr_feature_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FeatureName: The name of the feature.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeatureName"))

    @builtins.property
    @jsii.member(jsii_name="attrFeatureStatus")
    def attr_feature_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute FeatureStatus: The status of the feature.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeatureStatus"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01fafc55160d5fa40e6ab531c0903d88e648427ee731360ca37aa55b147747aa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64f0bd3cc306aeb52b21f865473f340c64475dac61c680a6ba4c004daab73a49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "EnvironmentFeatureProps":
        return typing.cast("EnvironmentFeatureProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "EnvironmentFeatureProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__906e8e691cadd565a844aa556a6f62848596111a0c9e22c700a7c66e04b925cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7057242bb30a4a2808394460c3cd16ae9a4b95a270a5f622e46fdfc3a229100e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.EnvironmentFeatureProps",
    jsii_struct_bases=[],
    name_mapping={
        "environment_id": "environmentId",
        "feature_name": "featureName",
        "feature_version": "featureVersion",
        "config": "config",
    },
)
class EnvironmentFeatureProps:
    def __init__(
        self,
        *,
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        feature_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        feature_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``EnvironmentFeature``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature

        :param environment_id: Property environmentId: The id of the environment.
        :param feature_name: Property featureName: The name of the feature. Valid values: app-agent-pilot metric-agent
        :param feature_version: Property featureVersion: The version of the feature.
        :param config: Property config: The metadata of the feature.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e2d94b030d2619b05bb9cdfd5c7863ab2d45ad4ab44578cedaf31202eadfd1a)
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument feature_name", value=feature_name, expected_type=type_hints["feature_name"])
            check_type(argname="argument feature_version", value=feature_version, expected_type=type_hints["feature_version"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "environment_id": environment_id,
            "feature_name": feature_name,
            "feature_version": feature_version,
        }
        if config is not None:
            self._values["config"] = config

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentId: The id of the environment.'''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def feature_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property featureName: The name of the feature.

        Valid values:
        app-agent-pilot
        metric-agent
        '''
        result = self._values.get("feature_name")
        assert result is not None, "Required property 'feature_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def feature_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property featureVersion: The version of the feature.'''
        result = self._values.get("feature_version")
        assert result is not None, "Required property 'feature_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property config: The metadata of the feature.'''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnvironmentFeatureProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.EnvironmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "bind_resource_id": "bindResourceId",
        "environment_name": "environmentName",
        "environment_sub_type": "environmentSubType",
        "environment_type": "environmentType",
        "fee_package": "feePackage",
        "grafana_workspace_id": "grafanaWorkspaceId",
        "managed_type": "managedType",
        "prometheus_instance_id": "prometheusInstanceId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class EnvironmentProps:
    def __init__(
        self,
        *,
        bind_resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        fee_package: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grafana_workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        managed_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prometheus_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosEnvironment.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Environment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment

        :param bind_resource_id: Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
        :param environment_name: Property environmentName: The name of the environment.
        :param environment_sub_type: Property environmentSubType: The subtype of the environment. Valid values: One: CS type environment ACK: CS type environment ECS: ECS type environment Cloud: cloud service
        :param environment_type: Property environmentType: The type of the environment. Valid values: CS: ACK ECS: ECS Cloud: cloud service
        :param fee_package: Property feePackage: The payable resource plan. Valid values: If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic. Otherwise, leave the parameter empty.
        :param grafana_workspace_id: Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
        :param managed_type: Property managedType: Specifies whether agents or exporters are managed. Valid values: none: No. By default, no managed agents or exporters are provided for ACK clusters. agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters. agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
        :param prometheus_instance_id: Property prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param tags: Property tags: Tags of Environment.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e55af6d122555673c36bb4b27447bd4eb0cadc5c7ad6efc585864857378b4778)
            check_type(argname="argument bind_resource_id", value=bind_resource_id, expected_type=type_hints["bind_resource_id"])
            check_type(argname="argument environment_name", value=environment_name, expected_type=type_hints["environment_name"])
            check_type(argname="argument environment_sub_type", value=environment_sub_type, expected_type=type_hints["environment_sub_type"])
            check_type(argname="argument environment_type", value=environment_type, expected_type=type_hints["environment_type"])
            check_type(argname="argument fee_package", value=fee_package, expected_type=type_hints["fee_package"])
            check_type(argname="argument grafana_workspace_id", value=grafana_workspace_id, expected_type=type_hints["grafana_workspace_id"])
            check_type(argname="argument managed_type", value=managed_type, expected_type=type_hints["managed_type"])
            check_type(argname="argument prometheus_instance_id", value=prometheus_instance_id, expected_type=type_hints["prometheus_instance_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bind_resource_id": bind_resource_id,
            "environment_name": environment_name,
            "environment_sub_type": environment_sub_type,
            "environment_type": environment_type,
        }
        if fee_package is not None:
            self._values["fee_package"] = fee_package
        if grafana_workspace_id is not None:
            self._values["grafana_workspace_id"] = grafana_workspace_id
        if managed_type is not None:
            self._values["managed_type"] = managed_type
        if prometheus_instance_id is not None:
            self._values["prometheus_instance_id"] = prometheus_instance_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def bind_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID.

        For a Cloud environment, specify the region ID.
        '''
        result = self._values.get("bind_resource_id")
        assert result is not None, "Required property 'bind_resource_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentName: The name of the environment.'''
        result = self._values.get("environment_name")
        assert result is not None, "Required property 'environment_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentSubType: The subtype of the environment.

        Valid values:
        One: CS type environment
        ACK: CS type environment
        ECS: ECS type environment
        Cloud: cloud service
        '''
        result = self._values.get("environment_sub_type")
        assert result is not None, "Required property 'environment_sub_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property environmentType: The type of the environment.

        Valid values:
        CS: ACK
        ECS: ECS
        Cloud: cloud service
        '''
        result = self._values.get("environment_type")
        assert result is not None, "Required property 'environment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def fee_package(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property feePackage: The payable resource plan.

        Valid values:
        If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
        Otherwise, leave the parameter empty.
        '''
        result = self._values.get("fee_package")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grafana_workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment.

        When passing space, the default share grafana is used.
        '''
        result = self._values.get("grafana_workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def managed_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property managedType: Specifies whether agents or exporters are managed.

        Valid values:
        none: No. By default, no managed agents or exporters are provided for ACK clusters.
        agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
        agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
        '''
        result = self._values.get("managed_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prometheus_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property prometheusInstanceId: The ID of the Prometheus instance.

        If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
        '''
        result = self._values.get("prometheus_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosEnvironment.TagsProperty"]]:
        '''Property tags: Tags of Environment.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosEnvironment.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EnvironmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ManagedPrometheus(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.ManagedPrometheus",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::ManagedPrometheus``, which is used to install a Prometheus agent in a ACK Serverless (ASK) cluster or an Elastic Compute Service (ECS) cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosManagedPrometheus``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ManagedPrometheusProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__574d14511392d4184a9491d6aee452adc93df49874b10f8c8db48ffcc740135e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterType: The type of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The vpc ID of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14ce6522743923c949ca0a1915c55f91587131b4ece3b407e233765f8d8fc1c2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59621b1a3c1c1e4d09a9e58af22baeb5afc5789fd12f59522e560a68807ab726)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ManagedPrometheusProps":
        return typing.cast("ManagedPrometheusProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ManagedPrometheusProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b893ff4ff768a568e906b99b1b771071d1b81cbcfe25fa51ab8cc94b187166c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa8250cf835f654c507a3b978d301d2ef077a6eb9ef6f47245b320a3b34af476)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.ManagedPrometheusProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_type": "clusterType",
        "security_group_id": "securityGroupId",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "cluster_id": "clusterId",
        "cluster_name": "clusterName",
        "grafana_instance_id": "grafanaInstanceId",
    },
)
class ManagedPrometheusProps:
    def __init__(
        self,
        *,
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grafana_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ManagedPrometheus``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus

        :param cluster_type: Property clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
        :param security_group_id: Property securityGroupId: The security group ID of the cluster.
        :param vpc_id: Property vpcId: The vpc ID of the cluster.
        :param v_switch_id: Property vSwitchId: The vswith ID of the cluster.
        :param cluster_id: Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
        :param cluster_name: Property clusterName: The name of the cluster. Required when the ClusterType is ecs.
        :param grafana_instance_id: Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74232a4cb080d86977f96e69cb3738a4abb82019ddd7faefa7b60dfa2ee6a4a8)
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument grafana_instance_id", value=grafana_instance_id, expected_type=type_hints["grafana_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_type": cluster_type,
            "security_group_id": security_group_id,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if cluster_name is not None:
            self._values["cluster_name"] = cluster_name
        if grafana_instance_id is not None:
            self._values["grafana_instance_id"] = grafana_instance_id

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterType: The type of the cluster.

        Currently, only ask, ecs and one clusters are supported. Default is ecs.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property securityGroupId: The security group ID of the cluster.'''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The vpc ID of the cluster.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The vswith ID of the cluster.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.'''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterName: The name of the cluster.

        Required when the ClusterType is ecs.
        '''
        result = self._values.get("cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grafana_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster.

        When empty or "free", binds to the shared version of Grafana.
        '''
        result = self._values.get("grafana_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ManagedPrometheusProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Prometheus(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.Prometheus",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::Prometheus``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosPrometheus``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["PrometheusProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9be4c45d2f08efc612eaad0a59d3243036b147ec2517db7d892f64aa769db24)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: The ID of the cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterType: Instance type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaInstanceId")
    def attr_grafana_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute GrafanaInstanceId: Grafana workspace ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGrafanaInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: Payment Type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusName")
    def attr_prometheus_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrometheusName: The name of the resource.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrometheusName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SecurityGroupId: The ID of the security group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSubClustersJson")
    def attr_sub_clusters_json(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SubClustersJson: Subcluster information of globalVeiw cluster.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubClustersJson"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Tags: The tags of the prometheus.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserId: User ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: The ID of the virtual private cloud (VPC).'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: The ID of the vSwitch.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__954110826c48a2907e61a304c02790cbcd3b00b48110ded258fd505dbea8b52a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9090667fe02e6fccccc59ffd0d2f82e67ecbf898004f11206f8eb06a0da80559)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "PrometheusProps":
        return typing.cast("PrometheusProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "PrometheusProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dfe24e2c09632a3e48ef2b24e9ca6fc9108742709c9a8d21449f4bddf38b287f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8ddf442f5ea8b9bec9d3dd221445674447bec4b5b7a3c8ecb22cc2ab0c239db)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.PrometheusProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_type": "clusterType",
        "grafana_instance_id": "grafanaInstanceId",
        "prometheus_name": "prometheusName",
        "cluster_id": "clusterId",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "sub_clusters_json": "subClustersJson",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class PrometheusProps:
    def __init__(
        self,
        *,
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        grafana_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        prometheus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sub_clusters_json: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosPrometheus.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Prometheus``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus

        :param cluster_type: Property clusterType: Instance type.
        :param grafana_instance_id: Property grafanaInstanceId: Grafana workspace ID.
        :param prometheus_name: Property prometheusName: The name of the resource.
        :param cluster_id: Property clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param security_group_id: Property securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
        :param sub_clusters_json: Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
        :param tags: Property tags: Tags of prometheus.
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__283d86259dc300424cb92cf68a636df7ec53a8c48128f05ac0b9dc676e00cef0)
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument grafana_instance_id", value=grafana_instance_id, expected_type=type_hints["grafana_instance_id"])
            check_type(argname="argument prometheus_name", value=prometheus_name, expected_type=type_hints["prometheus_name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument sub_clusters_json", value=sub_clusters_json, expected_type=type_hints["sub_clusters_json"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_type": cluster_type,
            "grafana_instance_id": grafana_instance_id,
            "prometheus_name": prometheus_name,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if sub_clusters_json is not None:
            self._values["sub_clusters_json"] = sub_clusters_json
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property clusterType: Instance type.'''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def grafana_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property grafanaInstanceId: Grafana workspace ID.'''
        result = self._values.get("grafana_instance_id")
        assert result is not None, "Required property 'grafana_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def prometheus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property prometheusName: The name of the resource.'''
        result = self._values.get("prometheus_name")
        assert result is not None, "Required property 'prometheus_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterId: The ID of the cluster.

        This parameter is required if you set ClusterType to ManagedKubernetes.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityGroupId: The ID of the custom resource group.

        You can specify this parameter to bind the instance to the resource group.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sub_clusters_json(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property subClustersJson: The child instances of the Prometheus instance for GlobalView.'''
        result = self._values.get("sub_clusters_json")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosPrometheus.TagsProperty"]]:
        '''Property tags: Tags of prometheus.'''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosPrometheus.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC).

        This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the vSwitch.

        This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "PrometheusProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RetcodeApp(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RetcodeApp",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::ARMS::RetcodeApp``, which is used to create an Application Real-Time Monitoring Service (ARMS) browser monitoring job.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosRetcodeApp``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RetcodeAppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__101d34d9bcb274b7150f42451bdab201e579ddc3cb2b0a9d52a18de1f8079300)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AppId: The ID of the application for which you created the browser monitoring job.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Pid: The PID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPid"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e52455ce158ae5d7ad728c70bdf5ab65ca564336f910b13a69e4c6b8e18c5f40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2dfe88b51cb40ad7fdabd592d0b91079e4f9a638c214c28a06df217c1a7f8338)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "RetcodeAppProps":
        return typing.cast("RetcodeAppProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "RetcodeAppProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5fbc0c7a8d50cb5a098d716ba2c734408f503138bdcfca785127ea9344e33a0d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bad594662bf02fc1091964cde44e961eac925be1820342c26e6016f29b24f242)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RetcodeAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "region_id": "regionId",
        "retcode_app_name": "retcodeAppName",
        "retcode_app_type": "retcodeAppType",
    },
)
class RetcodeAppProps:
    def __init__(
        self,
        *,
        region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retcode_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retcode_app_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RetcodeApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp

        :param region_id: Property regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        :param retcode_app_name: Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        :param retcode_app_type: Property retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab6b08b3ffe1d5e363595e1f9e6208847b2fcbb035b9cc4b5e667200c6042021)
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument retcode_app_name", value=retcode_app_name, expected_type=type_hints["retcode_app_name"])
            check_type(argname="argument retcode_app_type", value=retcode_app_type, expected_type=type_hints["retcode_app_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "region_id": region_id,
            "retcode_app_name": retcode_app_name,
            "retcode_app_type": retcode_app_type,
        }

    @builtins.property
    def region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property regionId: Region ID.

        Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        assert result is not None, "Required property 'region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retcode_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.'''
        result = self._values.get("retcode_app_name")
        assert result is not None, "Required property 'retcode_app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retcode_app_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.

        Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        '''
        result = self._values.get("retcode_app_type")
        assert result is not None, "Required property 'retcode_app_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RetcodeAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAddonRelease(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosAddonRelease",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::AddonRelease``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AddonRelease`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAddonReleaseProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdffbd1318e094a0b8fe6c54cced687387d5e5570b40560e51d65e7d94fddabf)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8a418659eac90b2142f1302add45d33d81690ff04a6a4f34bfe9a12cc2b88f2c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConfig")
    def attr_config(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Config: AddonRelease configuration information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConfig"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The environment ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrRelease")
    def attr_release(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Release: Release information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRelease"))

    @builtins.property
    @jsii.member(jsii_name="attrReleaseName")
    def attr_release_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReleaseName: The name of the add-on.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReleaseName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="addonVersion")
    def addon_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addonVersion: The version of the add-on.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "addonVersion"))

    @addon_version.setter
    def addon_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__30210a55e4b244f50db4f27ae2293524cea11e82ed8490664408d65019f68f86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addonVersion", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48955b87e14754c5f6d4c34598feb5ab849788d13f35fb22023b29d1b7e79bb3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentId")
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The id of the environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentId"))

    @environment_id.setter
    def environment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbc415128f34dc7ecce0c2f65124578ca6d3dae0bf609ee002f00f19f3c61c17)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentId", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the add-on.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b384a58d5e055a13d3c707d9be3cc162df6761556c59ff94531f9eb41fa4b0e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="releaseName")
    def release_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "releaseName"))

    @release_name.setter
    def release_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9930c70c7196af5964ad284bbb22dcdcdd6524f659d5bd8c9908b5168c921b2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "releaseName", value)

    @builtins.property
    @jsii.member(jsii_name="values")
    def values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: values: The metadata.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "values"))

    @values.setter
    def values(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e619d4c92a04796337a88e623f62f3d3ff7f54c4a299d268091d644f9efec2a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "values", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosAddonReleaseProps",
    jsii_struct_bases=[],
    name_mapping={
        "addon_version": "addonVersion",
        "environment_id": "environmentId",
        "name": "name",
        "release_name": "releaseName",
        "values": "values",
    },
)
class RosAddonReleaseProps:
    def __init__(
        self,
        *,
        addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosAddonRelease``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease

        :param addon_version: 
        :param environment_id: 
        :param name: 
        :param release_name: 
        :param values: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__963f5e4f91af190c660e240decdc3e77e1bda80f211f7c16469fc966c1914fb7)
            check_type(argname="argument addon_version", value=addon_version, expected_type=type_hints["addon_version"])
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument release_name", value=release_name, expected_type=type_hints["release_name"])
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "addon_version": addon_version,
            "environment_id": environment_id,
            "name": name,
        }
        if release_name is not None:
            self._values["release_name"] = release_name
        if values is not None:
            self._values["values"] = values

    @builtins.property
    def addon_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: addonVersion: The version of the add-on.
        '''
        result = self._values.get("addon_version")
        assert result is not None, "Required property 'addon_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The id of the environment.
        '''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the add-on.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def release_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
        '''
        result = self._values.get("release_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def values(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: values: The metadata.
        '''
        result = self._values.get("values")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAddonReleaseProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlertContact(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosAlertContact",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::AlertContact``, which is used to create an alert contact.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AlertContact`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAlertContactProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7df1f6689bff79b82a2a62e96b6f8fd3b132677c3f0f76813bd5ce203734bde5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8e92aa23b1400791713bc9e3e7cfd44904de9bfab4632111fdb92d5c00b4d81a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrContactId")
    def attr_contact_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContactId: The ID of the alert contact that you created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContactId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="contactName")
    def contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: contactName: The name of the alert contact that you want to create.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "contactName"))

    @contact_name.setter
    def contact_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c5c3ffd72c6c0fb26ad56b85231642ef7dcc89afeca4984fea8127a2551b21c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efec2638897e0d906d02875cd194ba00925f6aed2da6de49eaae7590b2ebf092)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="dingRobotWebhookUrl")
    def ding_robot_webhook_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dingRobotWebhookUrl"))

    @ding_robot_webhook_url.setter
    def ding_robot_webhook_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef237a776355849c64e9452c29e665ccc3864b5d6cf06efa7261dd7025c3a2b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dingRobotWebhookUrl", value)

    @builtins.property
    @jsii.member(jsii_name="email")
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: email: The email address of the contact.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "email"))

    @email.setter
    def email(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8aeca4c6211ca2c4ab152f0f07d6e44083e64964d1894ad957d97f0ef7b6fd56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "email", value)

    @builtins.property
    @jsii.member(jsii_name="phoneNum")
    def phone_num(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phoneNum: The phone number of the contact.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "phoneNum"))

    @phone_num.setter
    def phone_num(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d06c85e00a97dfff0d87ada5d3e09dd2750d5ea98ebb2e5254b4b5a5f3e1755a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "phoneNum", value)

    @builtins.property
    @jsii.member(jsii_name="proxyUserId")
    def proxy_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyUserId: Internal parameters
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyUserId"))

    @proxy_user_id.setter
    def proxy_user_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9defec6e470d7b55b62cd7fc9b165c09530062bc3e3a4802dd81e623ee796a6f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyUserId", value)

    @builtins.property
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to region of stack.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0abfaf99efe23bf5b4e5ade086fdbd8573ddadeea7c8fd382263a957e1b7fa46)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionId", value)

    @builtins.property
    @jsii.member(jsii_name="systemNoc")
    def system_noc(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: systemNoc: Specifies whether to receive system alerts.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "systemNoc"))

    @system_noc.setter
    def system_noc(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2f72ba9217ccacaab0785a67fe820388f3240537897cacc13283e67a03bf86a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemNoc", value)


class RosAlertContactGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosAlertContactGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::AlertContactGroup``, which is used to create an alert contact group.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``AlertContactGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAlertContactGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85a00ac574e138fd7193ecd7b51215fee84e1db031ca13a5e89a7746212c7932)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d792dc9416338b762e9498871040a9fac07f10770502fecea9e35ed864f99a9d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrContactGroupId")
    def attr_contact_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ContactGroupId: The ID of the alert contact group that you created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrContactGroupId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="contactGroupName")
    def contact_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: contactGroupName: The name of the alert contact group that you want to create.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "contactGroupName"))

    @contact_group_name.setter
    def contact_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6348cff41eaae115bcb926d5bd623d3fa8a173f6ac5495746e7ecd9e3da4c47b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="contactIds")
    def contact_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: contactIds: The list of alert contact ID.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "contactIds"))

    @contact_ids.setter
    def contact_ids(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec9b8098c690d78205798717d26001833d2e6fcbb89f332473706b8cc33d321a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "contactIds", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dbab0b84a718cd1e691bc05240c9706aed1e0f894cc52e0ce5c622a996f57632)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="proxyUserId")
    def proxy_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyUserId: Internal parameters
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "proxyUserId"))

    @proxy_user_id.setter
    def proxy_user_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__97dbc1748befd02303715a96ef36eb34dc03cdd3ffeb23bc99299df4c3dc4357)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "proxyUserId", value)

    @builtins.property
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to region of stack.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4db1324481a33fef70fcfdddb14d96592cb74721eddf10a64b479e7a637ef0fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosAlertContactGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "contact_group_name": "contactGroupName",
        "contact_ids": "contactIds",
        "proxy_user_id": "proxyUserId",
        "region_id": "regionId",
    },
)
class RosAlertContactGroupProps:
    def __init__(
        self,
        *,
        contact_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        contact_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
        proxy_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAlertContactGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup

        :param contact_group_name: 
        :param contact_ids: 
        :param proxy_user_id: 
        :param region_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6db76b6da8343fd2f2a2a0377d524554d0b88d142c0b5cc44155bfae1ab1192c)
            check_type(argname="argument contact_group_name", value=contact_group_name, expected_type=type_hints["contact_group_name"])
            check_type(argname="argument contact_ids", value=contact_ids, expected_type=type_hints["contact_ids"])
            check_type(argname="argument proxy_user_id", value=proxy_user_id, expected_type=type_hints["proxy_user_id"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "contact_group_name": contact_group_name,
            "contact_ids": contact_ids,
        }
        if proxy_user_id is not None:
            self._values["proxy_user_id"] = proxy_user_id
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def contact_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: contactGroupName: The name of the alert contact group that you want to create.
        '''
        result = self._values.get("contact_group_name")
        assert result is not None, "Required property 'contact_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def contact_ids(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: contactIds: The list of alert contact ID.
        '''
        result = self._values.get("contact_ids")
        assert result is not None, "Required property 'contact_ids' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def proxy_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyUserId: Internal parameters
        '''
        result = self._values.get("proxy_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to region of stack.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAlertContactGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosAlertContactProps",
    jsii_struct_bases=[],
    name_mapping={
        "contact_name": "contactName",
        "ding_robot_webhook_url": "dingRobotWebhookUrl",
        "email": "email",
        "phone_num": "phoneNum",
        "proxy_user_id": "proxyUserId",
        "region_id": "regionId",
        "system_noc": "systemNoc",
    },
)
class RosAlertContactProps:
    def __init__(
        self,
        *,
        contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ding_robot_webhook_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        phone_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        proxy_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        system_noc: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosAlertContact``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact

        :param contact_name: 
        :param ding_robot_webhook_url: 
        :param email: 
        :param phone_num: 
        :param proxy_user_id: 
        :param region_id: 
        :param system_noc: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2348b602ee7733f4f6fefba0314f3fc98808aa6f45b85d3dd3b5d7872523fd1c)
            check_type(argname="argument contact_name", value=contact_name, expected_type=type_hints["contact_name"])
            check_type(argname="argument ding_robot_webhook_url", value=ding_robot_webhook_url, expected_type=type_hints["ding_robot_webhook_url"])
            check_type(argname="argument email", value=email, expected_type=type_hints["email"])
            check_type(argname="argument phone_num", value=phone_num, expected_type=type_hints["phone_num"])
            check_type(argname="argument proxy_user_id", value=proxy_user_id, expected_type=type_hints["proxy_user_id"])
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument system_noc", value=system_noc, expected_type=type_hints["system_noc"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "contact_name": contact_name,
        }
        if ding_robot_webhook_url is not None:
            self._values["ding_robot_webhook_url"] = ding_robot_webhook_url
        if email is not None:
            self._values["email"] = email
        if phone_num is not None:
            self._values["phone_num"] = phone_num
        if proxy_user_id is not None:
            self._values["proxy_user_id"] = proxy_user_id
        if region_id is not None:
            self._values["region_id"] = region_id
        if system_noc is not None:
            self._values["system_noc"] = system_noc

    @builtins.property
    def contact_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: contactName: The name of the alert contact that you want to create.
        '''
        result = self._values.get("contact_name")
        assert result is not None, "Required property 'contact_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ding_robot_webhook_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
        '''
        result = self._values.get("ding_robot_webhook_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: email: The email address of the contact.
        '''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def phone_num(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phoneNum: The phone number of the contact.
        '''
        result = self._values.get("phone_num")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def proxy_user_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: proxyUserId: Internal parameters
        '''
        result = self._values.get("proxy_user_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: regionId: Region ID. Default to region of stack.
        '''
        result = self._values.get("region_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def system_noc(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: systemNoc: Specifies whether to receive system alerts.
        '''
        result = self._values.get("system_noc")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAlertContactProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosApplyAlertRuleTemplate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosApplyAlertRuleTemplate",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::ApplyAlertRuleTemplate``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ApplyAlertRuleTemplate`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosApplyAlertRuleTemplateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ef84253a4845887471fa4f515785b744cb89c2d8fbb7c258a5ba11ab8f136b1)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c493295b3c9022a991160b8acaf5c5ee3fe2986b7d41154eeed3450b07769efb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__5ee663aa029af6900d763bc251f30cd93104a31514de6a7403afb6e476955d01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="clusterIds")
    def cluster_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: clusterIds: The IDs list of Prometheus Instances.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "clusterIds"))

    @cluster_ids.setter
    def cluster_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5b522ffe2d9685a749f0b1eaab5413edf22eb26245adc815f54b2088422ce6e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterIds", value)

    @builtins.property
    @jsii.member(jsii_name="templateIds")
    def template_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: templateIds: The IDs list of Prometheus alert rule templates.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "templateIds"))

    @template_ids.setter
    def template_ids(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ead3025d9420923e6ea376a8de045e9a0a5a788010013cb317c2b5d9a9950b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "templateIds", value)

    @builtins.property
    @jsii.member(jsii_name="update")
    def update(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: update: Whether to update created alert rules. Default false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "update"))

    @update.setter
    def update(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64be8ed118e3e74d45fac92fdd6bd99ec7d02d3af8e3ae161b8b91d9bb2547e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "update", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosApplyAlertRuleTemplateProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_ids": "clusterIds",
        "template_ids": "templateIds",
        "update": "update",
    },
)
class RosApplyAlertRuleTemplateProps:
    def __init__(
        self,
        *,
        cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        template_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        update: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosApplyAlertRuleTemplate``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate

        :param cluster_ids: 
        :param template_ids: 
        :param update: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06e7ee9fba7d54d9047e4e8071afaf63c7d3e27c3d519a44de623bbd34f17148)
            check_type(argname="argument cluster_ids", value=cluster_ids, expected_type=type_hints["cluster_ids"])
            check_type(argname="argument template_ids", value=template_ids, expected_type=type_hints["template_ids"])
            check_type(argname="argument update", value=update, expected_type=type_hints["update"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if cluster_ids is not None:
            self._values["cluster_ids"] = cluster_ids
        if template_ids is not None:
            self._values["template_ids"] = template_ids
        if update is not None:
            self._values["update"] = update

    @builtins.property
    def cluster_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: clusterIds: The IDs list of Prometheus Instances.
        '''
        result = self._values.get("cluster_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def template_ids(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: templateIds: The IDs list of Prometheus alert rule templates.
        '''
        result = self._values.get("template_ids")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def update(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: update: Whether to update created alert rules. Default false.
        '''
        result = self._values.get("update")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosApplyAlertRuleTemplateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosEnvironment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosEnvironment",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::Environment``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Environment`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnvironmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06a08fecc8b2564f8b398ee485b956949b16c74ccc485def4a6f07abc4d7a450)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c442d50c5b62e726129ac431281e3eac850dd78d5708c61ba9ff963cd52c6ee6)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The id of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentName")
    def attr_environment_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentName: The name of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentName"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentSubType")
    def attr_environment_sub_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentSubType: The subtype of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentSubType"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentType")
    def attr_environment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentType: The type of the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentType"))

    @builtins.property
    @jsii.member(jsii_name="attrFeePackage")
    def attr_fee_package(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FeePackage: The payable resource plan.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeePackage"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaWorkspaceId")
    def attr_grafana_workspace_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGrafanaWorkspaceId"))

    @builtins.property
    @jsii.member(jsii_name="attrManagedType")
    def attr_managed_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ManagedType: Specifies whether agents or exporters are managed.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrManagedType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusInstanceId")
    def attr_prometheus_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrometheusInstanceId: The ID of the Prometheus instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrometheusInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bindResourceId")
    def bind_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bindResourceId"))

    @bind_resource_id.setter
    def bind_resource_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c621dcf2981196487a7cbe7952ace9e4bb6f807e969b1bfd6151224a58e7881b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bindResourceId", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__035e6185ea8417a22ef5a6cadf9878bdbfcfd524d8b4469e9b75dfe945304409)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentName")
    def environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentName: The name of the environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentName"))

    @environment_name.setter
    def environment_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75db566f4bcbe961b2570b27c50912795c42a88031e22e2170a5a2b5f3f578ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentName", value)

    @builtins.property
    @jsii.member(jsii_name="environmentSubType")
    def environment_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        environmentSubType: The subtype of the environment. Valid values:
        One: CS type environment
        ACK: CS type environment
        ECS: ECS type environment
        Cloud: cloud service
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentSubType"))

    @environment_sub_type.setter
    def environment_sub_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3cdd6f9e580b69f7057fce4d27ba6e37b978bd0b988bc849d0faae62b27ce3cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentSubType", value)

    @builtins.property
    @jsii.member(jsii_name="environmentType")
    def environment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        environmentType: The type of the environment. Valid values:
        CS: ACK
        ECS: ECS
        Cloud: cloud service
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentType"))

    @environment_type.setter
    def environment_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eadbf80c61c6469f3029fff8a00cdbabfa07a0c17dff3535c44f3157c3421e7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentType", value)

    @builtins.property
    @jsii.member(jsii_name="feePackage")
    def fee_package(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        feePackage: The payable resource plan. Valid values:
        If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
        Otherwise, leave the parameter empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "feePackage"))

    @fee_package.setter
    def fee_package(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e01785f6132fff03093ae4803a5a6c760ae866b67f497e2c306326603321e547)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "feePackage", value)

    @builtins.property
    @jsii.member(jsii_name="grafanaWorkspaceId")
    def grafana_workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "grafanaWorkspaceId"))

    @grafana_workspace_id.setter
    def grafana_workspace_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9232aef8af4d244f46e06376791bd12c1d23cf810187b1517df28ce280cbfc3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "grafanaWorkspaceId", value)

    @builtins.property
    @jsii.member(jsii_name="managedType")
    def managed_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        managedType: Specifies whether agents or exporters are managed. Valid values:
        none: No. By default, no managed agents or exporters are provided for ACK clusters.
        agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
        agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "managedType"))

    @managed_type.setter
    def managed_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8151816aa30673f5eefa4ded1603d1a478370443a42c148b46268069eed4333d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "managedType", value)

    @builtins.property
    @jsii.member(jsii_name="prometheusInstanceId")
    def prometheus_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "prometheusInstanceId"))

    @prometheus_instance_id.setter
    def prometheus_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ad8fa197856ff48e430b7c7ba236799a929781e10406267237ad6f009b37aed8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prometheusInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8001c7e2936379f65ab7f43ae039abc9cf7d87e8249123620ef7930ea6574fbd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosEnvironment.TagsProperty"]]:
        '''
        :Property: tags: Tags of Environment.
        '''
        return typing.cast(typing.Optional[typing.List["RosEnvironment.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosEnvironment.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b13b6dc9298c39d1eb7816f4e6173d634a9d07382c07f1856acbb70a1b67f6f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-arms.RosEnvironment.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__2cfc40d3cc49f64de2b2d97be13c23a5cedaae0e124feac5aedec83d0d9b1acf)
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


class RosEnvironmentFeature(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosEnvironmentFeature",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::EnvironmentFeature``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``EnvironmentFeature`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosEnvironmentFeatureProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bacf867621ce3dd2746ab41c20728b595e8cd3738066fe2c73d2cd9897df01bc)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2781bc8a405cb8f9dd1ce9861e2db9a4a966c2ad021d36af79c66366ea2e1f1c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEnvironmentId")
    def attr_environment_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnvironmentId: The environment ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnvironmentId"))

    @builtins.property
    @jsii.member(jsii_name="attrFeature")
    def attr_feature(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Feature: The installation information of the feature.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeature"))

    @builtins.property
    @jsii.member(jsii_name="attrFeatureName")
    def attr_feature_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FeatureName: The name of the feature.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeatureName"))

    @builtins.property
    @jsii.member(jsii_name="attrFeatureStatus")
    def attr_feature_status(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: FeatureStatus: The status of the feature.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFeatureStatus"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__1fd825cb0db45f1d1b7e79659d2f3ad3aa99f90bc5e0a1a6be89d5114e4f9138)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="environmentId")
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The id of the environment.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "environmentId"))

    @environment_id.setter
    def environment_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42e8e7840eef5b4f6fa47cd5c5492eb1709904621352e6796e8cd707a430eb41)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "environmentId", value)

    @builtins.property
    @jsii.member(jsii_name="featureName")
    def feature_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        featureName: The name of the feature. Valid values:
        app-agent-pilot
        metric-agent
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "featureName"))

    @feature_name.setter
    def feature_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f2a2f2607bacd54f6df0cc31113c77c93445ac5d175c3c4ceff79bcec9e0066)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "featureName", value)

    @builtins.property
    @jsii.member(jsii_name="featureVersion")
    def feature_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: featureVersion: The version of the feature.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "featureVersion"))

    @feature_version.setter
    def feature_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8627634e3c6669318328af96c23660319b3768447fba79b06f4864cadd014e75)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "featureVersion", value)

    @builtins.property
    @jsii.member(jsii_name="config")
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: config: The metadata of the feature.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "config"))

    @config.setter
    def config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3b766119c52a39ed6397fc26e08d297505ce7c22c167677b88fc25883331e2e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "config", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosEnvironmentFeatureProps",
    jsii_struct_bases=[],
    name_mapping={
        "environment_id": "environmentId",
        "feature_name": "featureName",
        "feature_version": "featureVersion",
        "config": "config",
    },
)
class RosEnvironmentFeatureProps:
    def __init__(
        self,
        *,
        environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        feature_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        feature_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnvironmentFeature``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature

        :param environment_id: 
        :param feature_name: 
        :param feature_version: 
        :param config: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b1a68a60d316e238a929de738aa083d4c49e4f6bc3820a59816b3d3d837d2d8)
            check_type(argname="argument environment_id", value=environment_id, expected_type=type_hints["environment_id"])
            check_type(argname="argument feature_name", value=feature_name, expected_type=type_hints["feature_name"])
            check_type(argname="argument feature_version", value=feature_version, expected_type=type_hints["feature_version"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "environment_id": environment_id,
            "feature_name": feature_name,
            "feature_version": feature_version,
        }
        if config is not None:
            self._values["config"] = config

    @builtins.property
    def environment_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentId: The id of the environment.
        '''
        result = self._values.get("environment_id")
        assert result is not None, "Required property 'environment_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def feature_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        featureName: The name of the feature. Valid values:
        app-agent-pilot
        metric-agent
        '''
        result = self._values.get("feature_name")
        assert result is not None, "Required property 'feature_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def feature_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: featureVersion: The version of the feature.
        '''
        result = self._values.get("feature_version")
        assert result is not None, "Required property 'feature_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: config: The metadata of the feature.
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnvironmentFeatureProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosEnvironmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "bind_resource_id": "bindResourceId",
        "environment_name": "environmentName",
        "environment_sub_type": "environmentSubType",
        "environment_type": "environmentType",
        "fee_package": "feePackage",
        "grafana_workspace_id": "grafanaWorkspaceId",
        "managed_type": "managedType",
        "prometheus_instance_id": "prometheusInstanceId",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosEnvironmentProps:
    def __init__(
        self,
        *,
        bind_resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        environment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        fee_package: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grafana_workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        managed_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        prometheus_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosEnvironment.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosEnvironment``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment

        :param bind_resource_id: 
        :param environment_name: 
        :param environment_sub_type: 
        :param environment_type: 
        :param fee_package: 
        :param grafana_workspace_id: 
        :param managed_type: 
        :param prometheus_instance_id: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e190f5b770f632f93e43d8303778a79d64f1e5cfbeeda8266487cc1247c0627)
            check_type(argname="argument bind_resource_id", value=bind_resource_id, expected_type=type_hints["bind_resource_id"])
            check_type(argname="argument environment_name", value=environment_name, expected_type=type_hints["environment_name"])
            check_type(argname="argument environment_sub_type", value=environment_sub_type, expected_type=type_hints["environment_sub_type"])
            check_type(argname="argument environment_type", value=environment_type, expected_type=type_hints["environment_type"])
            check_type(argname="argument fee_package", value=fee_package, expected_type=type_hints["fee_package"])
            check_type(argname="argument grafana_workspace_id", value=grafana_workspace_id, expected_type=type_hints["grafana_workspace_id"])
            check_type(argname="argument managed_type", value=managed_type, expected_type=type_hints["managed_type"])
            check_type(argname="argument prometheus_instance_id", value=prometheus_instance_id, expected_type=type_hints["prometheus_instance_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bind_resource_id": bind_resource_id,
            "environment_name": environment_name,
            "environment_sub_type": environment_sub_type,
            "environment_type": environment_type,
        }
        if fee_package is not None:
            self._values["fee_package"] = fee_package
        if grafana_workspace_id is not None:
            self._values["grafana_workspace_id"] = grafana_workspace_id
        if managed_type is not None:
            self._values["managed_type"] = managed_type
        if prometheus_instance_id is not None:
            self._values["prometheus_instance_id"] = prometheus_instance_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def bind_resource_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
        '''
        result = self._values.get("bind_resource_id")
        assert result is not None, "Required property 'bind_resource_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: environmentName: The name of the environment.
        '''
        result = self._values.get("environment_name")
        assert result is not None, "Required property 'environment_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_sub_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        environmentSubType: The subtype of the environment. Valid values:
        One: CS type environment
        ACK: CS type environment
        ECS: ECS type environment
        Cloud: cloud service
        '''
        result = self._values.get("environment_sub_type")
        assert result is not None, "Required property 'environment_sub_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def environment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        environmentType: The type of the environment. Valid values:
        CS: ACK
        ECS: ECS
        Cloud: cloud service
        '''
        result = self._values.get("environment_type")
        assert result is not None, "Required property 'environment_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def fee_package(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        feePackage: The payable resource plan. Valid values:
        If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
        Otherwise, leave the parameter empty.
        '''
        result = self._values.get("fee_package")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grafana_workspace_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
        '''
        result = self._values.get("grafana_workspace_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def managed_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        managedType: Specifies whether agents or exporters are managed. Valid values:
        none: No. By default, no managed agents or exporters are provided for ACK clusters.
        agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
        agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
        '''
        result = self._values.get("managed_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def prometheus_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
        '''
        result = self._values.get("prometheus_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosEnvironment.TagsProperty]]:
        '''
        :Property: tags: Tags of Environment.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosEnvironment.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosEnvironmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosManagedPrometheus(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosManagedPrometheus",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::ManagedPrometheus``, which is used to install a Prometheus agent in a ACK Serverless (ASK) cluster or an Elastic Compute Service (ECS) cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ManagedPrometheus`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosManagedPrometheusProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ae79ecda0cd5ebe9f5c05b0f9d5a767e2d3e12b3bd917e7b8fbbeedb283de477)
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
            type_hints = typing.get_type_hints(_typecheckingstub__8dd5e85e4d8c76022fb75b0ecf3fe095e15e11ecafd6c285a076ccb22807a713)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterType: The type of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The vpc ID of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31658e302281a016656317916f6a54c4898612470b47fd4092cd0fbc23f8113b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7f975cbda33d6f16d5ea4e3d9ca17830c20010f506fc0d5c15a5e94f25a8d7b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: The security group ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc461db8bcd096e31a52e1d946bb7c654009a04b22b934623bdb64908b9b0c60)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The vpc ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a87fb71634f32182fdb46c295d57a9c4f866cfd08c017879a554d07f1c759a25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vswith ID of the cluster.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e941c2c6b88adb777f50c31fd409d59af951b5c676b3a79d2f52bd895f447eaa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b1fd13d0d92d74c97450cb778e282cdf553eb116c8693169a244cf01b4d9372)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="clusterName")
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterName: The name of the cluster. Required when the ClusterType is ecs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94100230e2861fde91d40b5f829459e199f125d1c92a4f83a1ced562c351d39f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterName", value)

    @builtins.property
    @jsii.member(jsii_name="grafanaInstanceId")
    def grafana_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "grafanaInstanceId"))

    @grafana_instance_id.setter
    def grafana_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ba04c8aa2773b6e0d85f02ac2e8e001887375c8806f3d1f0042c4ab6c61bbf3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "grafanaInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosManagedPrometheusProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_type": "clusterType",
        "security_group_id": "securityGroupId",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "cluster_id": "clusterId",
        "cluster_name": "clusterName",
        "grafana_instance_id": "grafanaInstanceId",
    },
)
class RosManagedPrometheusProps:
    def __init__(
        self,
        *,
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        grafana_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosManagedPrometheus``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus

        :param cluster_type: 
        :param security_group_id: 
        :param vpc_id: 
        :param v_switch_id: 
        :param cluster_id: 
        :param cluster_name: 
        :param grafana_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d5b5d9574a9747e9cbe7b9bcb574dade3a5833888b781c52fde015ab9015ff7)
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument grafana_instance_id", value=grafana_instance_id, expected_type=type_hints["grafana_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_type": cluster_type,
            "security_group_id": security_group_id,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if cluster_name is not None:
            self._values["cluster_name"] = cluster_name
        if grafana_instance_id is not None:
            self._values["grafana_instance_id"] = grafana_instance_id

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: securityGroupId: The security group ID of the cluster.
        '''
        result = self._values.get("security_group_id")
        assert result is not None, "Required property 'security_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The vpc ID of the cluster.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The vswith ID of the cluster.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterName: The name of the cluster. Required when the ClusterType is ecs.
        '''
        result = self._values.get("cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def grafana_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
        '''
        result = self._values.get("grafana_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosManagedPrometheusProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosPrometheus(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosPrometheus",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::Prometheus``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Prometheus`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosPrometheusProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf9bef7f0ece97a0b5c6603a11c19d2d09cb505a641bc2d9c8e1e89adcdd7183)
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
            type_hints = typing.get_type_hints(_typecheckingstub__59ad0a29d18189edd94f7921fad68e32e9533e6525d13e4ea8d178dc655b5e2d)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterId: The ID of the cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterType: Instance type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrGrafanaInstanceId")
    def attr_grafana_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: GrafanaInstanceId: Grafana workspace ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrGrafanaInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: Payment Type.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPrometheusName")
    def attr_prometheus_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrometheusName: The name of the resource.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrometheusName"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SecurityGroupId: The ID of the security group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSecurityGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSubClustersJson")
    def attr_sub_clusters_json(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SubClustersJson: Subcluster information of globalVeiw cluster.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubClustersJson"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the prometheus.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrUserId")
    def attr_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserId: User ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: The ID of the virtual private cloud (VPC).
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The ID of the vSwitch.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: Instance type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a4a44fd080bc78bb0e58aa534e81c2dc55c8a4053e629739f09eae0d246da74)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75b5b0258f3c6ce3480b7d55a8ef322e62d9b74181f4931147e4ef9afa7b8726)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="grafanaInstanceId")
    def grafana_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: grafanaInstanceId: Grafana workspace ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "grafanaInstanceId"))

    @grafana_instance_id.setter
    def grafana_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4afd112953c081978c131b4cc594a89b5b14d2a3428e6087c03028c9c85a3876)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "grafanaInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="prometheusName")
    def prometheus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prometheusName: The name of the resource.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "prometheusName"))

    @prometheus_name.setter
    def prometheus_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20bcb22ddd461f19a17ff52994a410e60dab0d06cf15024664f7c7af01b2e0d3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prometheusName", value)

    @builtins.property
    @jsii.member(jsii_name="clusterId")
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterId"))

    @cluster_id.setter
    def cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ada070b848400e153bb940718ae023d162093a54dd2fe28bb2b56e78cdc38fcd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b598209e6e92e9cb6b2a7a625f396bab5861a107deb0cffc0db213bcdbd2859)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityGroupId")
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityGroupId"))

    @security_group_id.setter
    def security_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__020761a2f6a82b9ae5b45e50e6fde5a4f25c69b288848457d2a0cb7c5028fdd8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="subClustersJson")
    def sub_clusters_json(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: subClustersJson: The child instances of the Prometheus instance for GlobalView.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "subClustersJson"))

    @sub_clusters_json.setter
    def sub_clusters_json(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6bdb292bfd0deb5e90e4efa62274114274f48f0e37319a176240e0dc3568639)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subClustersJson", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosPrometheus.TagsProperty"]]:
        '''
        :Property: tags: Tags of prometheus.
        '''
        return typing.cast(typing.Optional[typing.List["RosPrometheus.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosPrometheus.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b029915618771c5061aa18cba037dc08b7bf79c8818a06aca7bf9d1e752fe11c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98a3c2b865647a0809451a6cbf4228fa326171a273b2e178b85d25818109283b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f3f055e49dfcd99cef7fa826850a0cebbb13e4078ea880edcda71625afe3c8f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-arms.RosPrometheus.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__852cd5e7c9c82345b6f8878f01f589fdd79f45e42b9a0203af2d16c49886ee38)
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
    jsii_type="@alicloud/ros-cdk-arms.RosPrometheusProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_type": "clusterType",
        "grafana_instance_id": "grafanaInstanceId",
        "prometheus_name": "prometheusName",
        "cluster_id": "clusterId",
        "resource_group_id": "resourceGroupId",
        "security_group_id": "securityGroupId",
        "sub_clusters_json": "subClustersJson",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosPrometheusProps:
    def __init__(
        self,
        *,
        cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        grafana_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        prometheus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sub_clusters_json: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosPrometheus.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosPrometheus``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus

        :param cluster_type: 
        :param grafana_instance_id: 
        :param prometheus_name: 
        :param cluster_id: 
        :param resource_group_id: 
        :param security_group_id: 
        :param sub_clusters_json: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__daa9f001665cee0a8b1bd8ea146b2d05d92dc2f288fea54f3b98460095962c02)
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument grafana_instance_id", value=grafana_instance_id, expected_type=type_hints["grafana_instance_id"])
            check_type(argname="argument prometheus_name", value=prometheus_name, expected_type=type_hints["prometheus_name"])
            check_type(argname="argument cluster_id", value=cluster_id, expected_type=type_hints["cluster_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_group_id", value=security_group_id, expected_type=type_hints["security_group_id"])
            check_type(argname="argument sub_clusters_json", value=sub_clusters_json, expected_type=type_hints["sub_clusters_json"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "cluster_type": cluster_type,
            "grafana_instance_id": grafana_instance_id,
            "prometheus_name": prometheus_name,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_group_id is not None:
            self._values["security_group_id"] = security_group_id
        if sub_clusters_json is not None:
            self._values["sub_clusters_json"] = sub_clusters_json
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: clusterType: Instance type.
        '''
        result = self._values.get("cluster_type")
        assert result is not None, "Required property 'cluster_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def grafana_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: grafanaInstanceId: Grafana workspace ID.
        '''
        result = self._values.get("grafana_instance_id")
        assert result is not None, "Required property 'grafana_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def prometheus_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prometheusName: The name of the resource.
        '''
        result = self._values.get("prometheus_name")
        assert result is not None, "Required property 'prometheus_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
        '''
        result = self._values.get("cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
        '''
        result = self._values.get("security_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sub_clusters_json(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: subClustersJson: The child instances of the Prometheus instance for GlobalView.
        '''
        result = self._values.get("sub_clusters_json")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosPrometheus.TagsProperty]]:
        '''
        :Property: tags: Tags of prometheus.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosPrometheus.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosPrometheusProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRetcodeApp(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosRetcodeApp",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::ARMS::RetcodeApp``, which is used to create an Application Real-Time Monitoring Service (ARMS) browser monitoring job.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``RetcodeApp`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRetcodeAppProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d00d0d9dcea4132905fb0f64a3f153d011a9ae6eac0ec81ba860d6d2633c9d63)
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
            type_hints = typing.get_type_hints(_typecheckingstub__20678a81332316974bf70acbc966a3be54acc4e7079b806730af53efe39f168c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AppId: The ID of the application for which you created the browser monitoring job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAppId"))

    @builtins.property
    @jsii.member(jsii_name="attrPid")
    def attr_pid(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Pid: The PID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPid"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__8e4fb871f5c489550245500854278d6568a0e8393c44c8358d2e3909770060dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="regionId")
    def region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "regionId"))

    @region_id.setter
    def region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cea6b9afafce04c49f22d0477e333e6eb175bc5442f2fe024f478b754654649f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "regionId", value)

    @builtins.property
    @jsii.member(jsii_name="retcodeAppName")
    def retcode_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "retcodeAppName"))

    @retcode_app_name.setter
    def retcode_app_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eccab2ef6e6736615178c83bf1b8406edc17e0307f845ba08f7ae45913c0246b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "retcodeAppName", value)

    @builtins.property
    @jsii.member(jsii_name="retcodeAppType")
    def retcode_app_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "retcodeAppType"))

    @retcode_app_type.setter
    def retcode_app_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2130f5c7426430cefac29013d939a3d1a87fe601092fa0467777503b661f6ed7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "retcodeAppType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-arms.RosRetcodeAppProps",
    jsii_struct_bases=[],
    name_mapping={
        "region_id": "regionId",
        "retcode_app_name": "retcodeAppName",
        "retcode_app_type": "retcodeAppType",
    },
)
class RosRetcodeAppProps:
    def __init__(
        self,
        *,
        region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retcode_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        retcode_app_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosRetcodeApp``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp

        :param region_id: 
        :param retcode_app_name: 
        :param retcode_app_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2e30483a6766787335447bbe1ba424e7b165381bd5bf992cab4c18af9cc2026)
            check_type(argname="argument region_id", value=region_id, expected_type=type_hints["region_id"])
            check_type(argname="argument retcode_app_name", value=retcode_app_name, expected_type=type_hints["retcode_app_name"])
            check_type(argname="argument retcode_app_type", value=retcode_app_type, expected_type=type_hints["retcode_app_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "region_id": region_id,
            "retcode_app_name": retcode_app_name,
            "retcode_app_type": retcode_app_type,
        }

    @builtins.property
    def region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        '''
        result = self._values.get("region_id")
        assert result is not None, "Required property 'region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retcode_app_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        '''
        result = self._values.get("retcode_app_name")
        assert result is not None, "Required property 'retcode_app_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def retcode_app_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        '''
        result = self._values.get("retcode_app_type")
        assert result is not None, "Required property 'retcode_app_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRetcodeAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AddonRelease",
    "AddonReleaseProps",
    "AlertContact",
    "AlertContactGroup",
    "AlertContactGroupProps",
    "AlertContactProps",
    "ApplyAlertRuleTemplate",
    "ApplyAlertRuleTemplateProps",
    "Environment",
    "EnvironmentFeature",
    "EnvironmentFeatureProps",
    "EnvironmentProps",
    "ManagedPrometheus",
    "ManagedPrometheusProps",
    "Prometheus",
    "PrometheusProps",
    "RetcodeApp",
    "RetcodeAppProps",
    "RosAddonRelease",
    "RosAddonReleaseProps",
    "RosAlertContact",
    "RosAlertContactGroup",
    "RosAlertContactGroupProps",
    "RosAlertContactProps",
    "RosApplyAlertRuleTemplate",
    "RosApplyAlertRuleTemplateProps",
    "RosEnvironment",
    "RosEnvironmentFeature",
    "RosEnvironmentFeatureProps",
    "RosEnvironmentProps",
    "RosManagedPrometheus",
    "RosManagedPrometheusProps",
    "RosPrometheus",
    "RosPrometheusProps",
    "RosRetcodeApp",
    "RosRetcodeAppProps",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__106fe0aebf827d2a7f9fd342f2fdce965e7d1df85821365e743cff0e0c4ac935(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AddonReleaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__571b08154ed9bf66bea439ea070a693bb1cc1e688aacf3daee17811c5b89ce7a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__026b103f60117b974e018e2081b1fad62815f6b3f6f2a0bb2e7602b556d2301c(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c17e014a91cbd09f25dbfa8a13a13a4461e1faecd8ca8cb1c31886238622eeca(
    value: AddonReleaseProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__abe405547ac769ccacd874d214f44b2bd6de602107e6b4ab54a2001848d5f3e3(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6122eadf859556f23c0eb13714814dae7bd4f68b5b1e79314da146c6f3bd29a(
    *,
    addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9632ef8fa4384819f277f1a0bf2be7d43a9afaf36421341b3cd67a77f894a651(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AlertContactProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efcebfca9cecb0dbcb98655f180fba0ed64a558442e85b28fbff6e26b93d09e3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f701aad1455409555f5861ddc653a42f5151ca87ae64c1d7a236a95db39a505f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff4f843c9658721fa45963fcf660b87022d2b927a8101121519b1bb82ad718dc(
    value: AlertContactProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63ac552f73c182b3295d8c30454627000ecb1037646e73aa83d35ae6cbd25761(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64ce818318cc49267ab042469ae081d6b3b9009b53e48b1d3835f4e854f2e503(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AlertContactGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__535bfc3db40bfff32978dc1fc61353f09eaa03aedbabdfe1826f902e55701245(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f1816719b60d5a071dd2bf180fdb7d79d692af41d0be2dc7256686dc6daafc7(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__56975ecca8662ab312d36be97a4f209bc7e4816307194d38b607e63f357e5edc(
    value: AlertContactGroupProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6354ab78ac210f303692e2e45f1d82a9600a7bd98a140568c0a9b8bab034c410(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33515e210a441d0698ae0936bdc5f1ea85f9306cdba84f1760b10cb939d12cd4(
    *,
    contact_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    contact_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    proxy_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b69985edbabea812fae27cd1b0035166019b8fc84e67765c33ef36078b9f3ea9(
    *,
    contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ding_robot_webhook_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    phone_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_noc: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a376e4ae1171d0112874fc15af1ae7e16bf68d9593f66a3d27681616471e4b4(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[ApplyAlertRuleTemplateProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfbe01e47e19afea48b3b694c2b889cc48f3f6f5694ea663193376e8357ee205(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc00a367c23b8dd684f8fe6ca0b6dec7ec69223ced8e5b46a323992ad55f2f92(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a60b493c894fa94ac36c7d46eafba103cd46f9341a78351bbd19369ca4fe2782(
    value: ApplyAlertRuleTemplateProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9b707c25f01b55d700f688ffcab77c2e80c400229aea4514bbdfe36edae1561(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74895326d5c4050036bef206f76163fb7003c73e9a15a8a90f49319f2d053cb9(
    *,
    cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    template_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    update: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0cb10aa246a4337fa70d3c14855064a22c8bbe09546ae069423966fa9aab402b(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnvironmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc9838c31e5918b4298b3017bf9d38bce8e7ef937c088acdfb1b5fdba9f98c92(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3d4cbe45ff6b7dda19e6a42657dbcca2eff5329b5dd4ddd73ea7600a3ad0a35(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7f51b6e2533ef4aa66589969543a62d7315b685eda2d773ae9fbfd0013544bc(
    value: EnvironmentProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f4f53a240089dbe4354db094f3ee7016b14caa23345449aa7d0726076204dc6(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f298ffd478eb4dc6014d5c2bc48e0edbad858b1f6f65a0da78a1fb9eb958718a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[EnvironmentFeatureProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01fafc55160d5fa40e6ab531c0903d88e648427ee731360ca37aa55b147747aa(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64f0bd3cc306aeb52b21f865473f340c64475dac61c680a6ba4c004daab73a49(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__906e8e691cadd565a844aa556a6f62848596111a0c9e22c700a7c66e04b925cd(
    value: EnvironmentFeatureProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7057242bb30a4a2808394460c3cd16ae9a4b95a270a5f622e46fdfc3a229100e(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e2d94b030d2619b05bb9cdfd5c7863ab2d45ad4ab44578cedaf31202eadfd1a(
    *,
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    feature_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    feature_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e55af6d122555673c36bb4b27447bd4eb0cadc5c7ad6efc585864857378b4778(
    *,
    bind_resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fee_package: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grafana_workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    managed_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prometheus_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosEnvironment.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__574d14511392d4184a9491d6aee452adc93df49874b10f8c8db48ffcc740135e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ManagedPrometheusProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14ce6522743923c949ca0a1915c55f91587131b4ece3b407e233765f8d8fc1c2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59621b1a3c1c1e4d09a9e58af22baeb5afc5789fd12f59522e560a68807ab726(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b893ff4ff768a568e906b99b1b771071d1b81cbcfe25fa51ab8cc94b187166c(
    value: ManagedPrometheusProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa8250cf835f654c507a3b978d301d2ef077a6eb9ef6f47245b320a3b34af476(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74232a4cb080d86977f96e69cb3738a4abb82019ddd7faefa7b60dfa2ee6a4a8(
    *,
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grafana_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9be4c45d2f08efc612eaad0a59d3243036b147ec2517db7d892f64aa769db24(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[PrometheusProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__954110826c48a2907e61a304c02790cbcd3b00b48110ded258fd505dbea8b52a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9090667fe02e6fccccc59ffd0d2f82e67ecbf898004f11206f8eb06a0da80559(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dfe24e2c09632a3e48ef2b24e9ca6fc9108742709c9a8d21449f4bddf38b287f(
    value: PrometheusProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8ddf442f5ea8b9bec9d3dd221445674447bec4b5b7a3c8ecb22cc2ab0c239db(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__283d86259dc300424cb92cf68a636df7ec53a8c48128f05ac0b9dc676e00cef0(
    *,
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    grafana_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    prometheus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sub_clusters_json: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosPrometheus.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__101d34d9bcb274b7150f42451bdab201e579ddc3cb2b0a9d52a18de1f8079300(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RetcodeAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e52455ce158ae5d7ad728c70bdf5ab65ca564336f910b13a69e4c6b8e18c5f40(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2dfe88b51cb40ad7fdabd592d0b91079e4f9a638c214c28a06df217c1a7f8338(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5fbc0c7a8d50cb5a098d716ba2c734408f503138bdcfca785127ea9344e33a0d(
    value: RetcodeAppProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bad594662bf02fc1091964cde44e961eac925be1820342c26e6016f29b24f242(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab6b08b3ffe1d5e363595e1f9e6208847b2fcbb035b9cc4b5e667200c6042021(
    *,
    region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retcode_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retcode_app_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdffbd1318e094a0b8fe6c54cced687387d5e5570b40560e51d65e7d94fddabf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAddonReleaseProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a418659eac90b2142f1302add45d33d81690ff04a6a4f34bfe9a12cc2b88f2c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__30210a55e4b244f50db4f27ae2293524cea11e82ed8490664408d65019f68f86(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48955b87e14754c5f6d4c34598feb5ab849788d13f35fb22023b29d1b7e79bb3(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbc415128f34dc7ecce0c2f65124578ca6d3dae0bf609ee002f00f19f3c61c17(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b384a58d5e055a13d3c707d9be3cc162df6761556c59ff94531f9eb41fa4b0e6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9930c70c7196af5964ad284bbb22dcdcdd6524f659d5bd8c9908b5168c921b2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e619d4c92a04796337a88e623f62f3d3ff7f54c4a299d268091d644f9efec2a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__963f5e4f91af190c660e240decdc3e77e1bda80f211f7c16469fc966c1914fb7(
    *,
    addon_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    release_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    values: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7df1f6689bff79b82a2a62e96b6f8fd3b132677c3f0f76813bd5ce203734bde5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAlertContactProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e92aa23b1400791713bc9e3e7cfd44904de9bfab4632111fdb92d5c00b4d81a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c5c3ffd72c6c0fb26ad56b85231642ef7dcc89afeca4984fea8127a2551b21c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efec2638897e0d906d02875cd194ba00925f6aed2da6de49eaae7590b2ebf092(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef237a776355849c64e9452c29e665ccc3864b5d6cf06efa7261dd7025c3a2b9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8aeca4c6211ca2c4ab152f0f07d6e44083e64964d1894ad957d97f0ef7b6fd56(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d06c85e00a97dfff0d87ada5d3e09dd2750d5ea98ebb2e5254b4b5a5f3e1755a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9defec6e470d7b55b62cd7fc9b165c09530062bc3e3a4802dd81e623ee796a6f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0abfaf99efe23bf5b4e5ade086fdbd8573ddadeea7c8fd382263a957e1b7fa46(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2f72ba9217ccacaab0785a67fe820388f3240537897cacc13283e67a03bf86a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85a00ac574e138fd7193ecd7b51215fee84e1db031ca13a5e89a7746212c7932(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAlertContactGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d792dc9416338b762e9498871040a9fac07f10770502fecea9e35ed864f99a9d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6348cff41eaae115bcb926d5bd623d3fa8a173f6ac5495746e7ecd9e3da4c47b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec9b8098c690d78205798717d26001833d2e6fcbb89f332473706b8cc33d321a(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dbab0b84a718cd1e691bc05240c9706aed1e0f894cc52e0ce5c622a996f57632(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__97dbc1748befd02303715a96ef36eb34dc03cdd3ffeb23bc99299df4c3dc4357(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4db1324481a33fef70fcfdddb14d96592cb74721eddf10a64b479e7a637ef0fc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6db76b6da8343fd2f2a2a0377d524554d0b88d142c0b5cc44155bfae1ab1192c(
    *,
    contact_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    contact_ids: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]],
    proxy_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2348b602ee7733f4f6fefba0314f3fc98808aa6f45b85d3dd3b5d7872523fd1c(
    *,
    contact_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ding_robot_webhook_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    phone_num: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    proxy_user_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    system_noc: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ef84253a4845887471fa4f515785b744cb89c2d8fbb7c258a5ba11ab8f136b1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosApplyAlertRuleTemplateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c493295b3c9022a991160b8acaf5c5ee3fe2986b7d41154eeed3450b07769efb(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ee663aa029af6900d763bc251f30cd93104a31514de6a7403afb6e476955d01(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5b522ffe2d9685a749f0b1eaab5413edf22eb26245adc815f54b2088422ce6e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ead3025d9420923e6ea376a8de045e9a0a5a788010013cb317c2b5d9a9950b6(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64be8ed118e3e74d45fac92fdd6bd99ec7d02d3af8e3ae161b8b91d9bb2547e1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06e7ee9fba7d54d9047e4e8071afaf63c7d3e27c3d519a44de623bbd34f17148(
    *,
    cluster_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    template_ids: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    update: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06a08fecc8b2564f8b398ee485b956949b16c74ccc485def4a6f07abc4d7a450(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnvironmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c442d50c5b62e726129ac431281e3eac850dd78d5708c61ba9ff963cd52c6ee6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c621dcf2981196487a7cbe7952ace9e4bb6f807e969b1bfd6151224a58e7881b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__035e6185ea8417a22ef5a6cadf9878bdbfcfd524d8b4469e9b75dfe945304409(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75db566f4bcbe961b2570b27c50912795c42a88031e22e2170a5a2b5f3f578ed(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3cdd6f9e580b69f7057fce4d27ba6e37b978bd0b988bc849d0faae62b27ce3cf(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eadbf80c61c6469f3029fff8a00cdbabfa07a0c17dff3535c44f3157c3421e7a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e01785f6132fff03093ae4803a5a6c760ae866b67f497e2c306326603321e547(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9232aef8af4d244f46e06376791bd12c1d23cf810187b1517df28ce280cbfc3f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8151816aa30673f5eefa4ded1603d1a478370443a42c148b46268069eed4333d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ad8fa197856ff48e430b7c7ba236799a929781e10406267237ad6f009b37aed8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8001c7e2936379f65ab7f43ae039abc9cf7d87e8249123620ef7930ea6574fbd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b13b6dc9298c39d1eb7816f4e6173d634a9d07382c07f1856acbb70a1b67f6f(
    value: typing.Optional[typing.List[RosEnvironment.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2cfc40d3cc49f64de2b2d97be13c23a5cedaae0e124feac5aedec83d0d9b1acf(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bacf867621ce3dd2746ab41c20728b595e8cd3738066fe2c73d2cd9897df01bc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosEnvironmentFeatureProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2781bc8a405cb8f9dd1ce9861e2db9a4a966c2ad021d36af79c66366ea2e1f1c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1fd825cb0db45f1d1b7e79659d2f3ad3aa99f90bc5e0a1a6be89d5114e4f9138(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42e8e7840eef5b4f6fa47cd5c5492eb1709904621352e6796e8cd707a430eb41(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f2a2f2607bacd54f6df0cc31113c77c93445ac5d175c3c4ceff79bcec9e0066(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8627634e3c6669318328af96c23660319b3768447fba79b06f4864cadd014e75(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3b766119c52a39ed6397fc26e08d297505ce7c22c167677b88fc25883331e2e(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b1a68a60d316e238a929de738aa083d4c49e4f6bc3820a59816b3d3d837d2d8(
    *,
    environment_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    feature_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    feature_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e190f5b770f632f93e43d8303778a79d64f1e5cfbeeda8266487cc1247c0627(
    *,
    bind_resource_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_sub_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    environment_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    fee_package: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grafana_workspace_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    managed_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    prometheus_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosEnvironment.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae79ecda0cd5ebe9f5c05b0f9d5a767e2d3e12b3bd917e7b8fbbeedb283de477(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosManagedPrometheusProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8dd5e85e4d8c76022fb75b0ecf3fe095e15e11ecafd6c285a076ccb22807a713(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31658e302281a016656317916f6a54c4898612470b47fd4092cd0fbc23f8113b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7f975cbda33d6f16d5ea4e3d9ca17830c20010f506fc0d5c15a5e94f25a8d7b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc461db8bcd096e31a52e1d946bb7c654009a04b22b934623bdb64908b9b0c60(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a87fb71634f32182fdb46c295d57a9c4f866cfd08c017879a554d07f1c759a25(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e941c2c6b88adb777f50c31fd409d59af951b5c676b3a79d2f52bd895f447eaa(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b1fd13d0d92d74c97450cb778e282cdf553eb116c8693169a244cf01b4d9372(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94100230e2861fde91d40b5f829459e199f125d1c92a4f83a1ced562c351d39f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ba04c8aa2773b6e0d85f02ac2e8e001887375c8806f3d1f0042c4ab6c61bbf3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d5b5d9574a9747e9cbe7b9bcb574dade3a5833888b781c52fde015ab9015ff7(
    *,
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    security_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    grafana_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf9bef7f0ece97a0b5c6603a11c19d2d09cb505a641bc2d9c8e1e89adcdd7183(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosPrometheusProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59ad0a29d18189edd94f7921fad68e32e9533e6525d13e4ea8d178dc655b5e2d(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a4a44fd080bc78bb0e58aa534e81c2dc55c8a4053e629739f09eae0d246da74(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75b5b0258f3c6ce3480b7d55a8ef322e62d9b74181f4931147e4ef9afa7b8726(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4afd112953c081978c131b4cc594a89b5b14d2a3428e6087c03028c9c85a3876(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20bcb22ddd461f19a17ff52994a410e60dab0d06cf15024664f7c7af01b2e0d3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ada070b848400e153bb940718ae023d162093a54dd2fe28bb2b56e78cdc38fcd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b598209e6e92e9cb6b2a7a625f396bab5861a107deb0cffc0db213bcdbd2859(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__020761a2f6a82b9ae5b45e50e6fde5a4f25c69b288848457d2a0cb7c5028fdd8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6bdb292bfd0deb5e90e4efa62274114274f48f0e37319a176240e0dc3568639(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b029915618771c5061aa18cba037dc08b7bf79c8818a06aca7bf9d1e752fe11c(
    value: typing.Optional[typing.List[RosPrometheus.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98a3c2b865647a0809451a6cbf4228fa326171a273b2e178b85d25818109283b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f3f055e49dfcd99cef7fa826850a0cebbb13e4078ea880edcda71625afe3c8f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__852cd5e7c9c82345b6f8878f01f589fdd79f45e42b9a0203af2d16c49886ee38(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__daa9f001665cee0a8b1bd8ea146b2d05d92dc2f288fea54f3b98460095962c02(
    *,
    cluster_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    grafana_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    prometheus_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sub_clusters_json: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosPrometheus.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d00d0d9dcea4132905fb0f64a3f153d011a9ae6eac0ec81ba860d6d2633c9d63(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRetcodeAppProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20678a81332316974bf70acbc966a3be54acc4e7079b806730af53efe39f168c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8e4fb871f5c489550245500854278d6568a0e8393c44c8358d2e3909770060dc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cea6b9afafce04c49f22d0477e333e6eb175bc5442f2fe024f478b754654649f(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eccab2ef6e6736615178c83bf1b8406edc17e0307f845ba08f7ae45913c0246b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2130f5c7426430cefac29013d939a3d1a87fe601092fa0467777503b661f6ed7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2e30483a6766787335447bbe1ba424e7b165381bd5bf992cab4c18af9cc2026(
    *,
    region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retcode_app_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    retcode_app_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
