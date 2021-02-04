"""
## Aliyun ROS ARMS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_arms as ARMS
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


class AlertContact(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.AlertContact",
):
    """A ROS resource type:  ``ALIYUN::ARMS::AlertContact``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AlertContactProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ARMS::AlertContact``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AlertContact, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrContactId")
    def attr_contact_id(self) -> typing.Any:
        """
        :Attribute: ContactId: The ID of the alert contact that you created.
        """
        return jsii.get(self, "attrContactId")


class AlertContactGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.AlertContactGroup",
):
    """A ROS resource type:  ``ALIYUN::ARMS::AlertContactGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AlertContactGroupProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ARMS::AlertContactGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AlertContactGroup, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrContactGroupId")
    def attr_contact_group_id(self) -> typing.Any:
        """
        :Attribute: ContactGroupId: The ID of the alert contact group that you created.
        """
        return jsii.get(self, "attrContactGroupId")


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
        contact_group_name: builtins.str,
        contact_ids: typing.Union[typing.List[jsii.Number], ros_cdk_core.IResolvable],
        proxy_user_id: typing.Optional[builtins.str] = None,
        region_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ARMS::AlertContactGroup``.

        :param contact_group_name: 
        :param contact_ids: 
        :param proxy_user_id: 
        :param region_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "contact_group_name": contact_group_name,
            "contact_ids": contact_ids,
        }
        if proxy_user_id is not None:
            self._values["proxy_user_id"] = proxy_user_id
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def contact_group_name(self) -> builtins.str:
        """
        :Property: contactGroupName: The name of the alert contact group that you want to create.
        """
        result = self._values.get("contact_group_name")
        assert result is not None, "Required property 'contact_group_name' is missing"
        return result

    @builtins.property
    def contact_ids(
        self,
    ) -> typing.Union[typing.List[jsii.Number], ros_cdk_core.IResolvable]:
        """
        :Property: contactIds: The list of alert contact ID.
        """
        result = self._values.get("contact_ids")
        assert result is not None, "Required property 'contact_ids' is missing"
        return result

    @builtins.property
    def proxy_user_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyUserId: Internal parameters
        """
        result = self._values.get("proxy_user_id")
        return result

    @builtins.property
    def region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: regionId: Region ID. Default to region of stack.
        """
        result = self._values.get("region_id")
        return result

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
        contact_name: builtins.str,
        ding_robot_webhook_url: typing.Optional[builtins.str] = None,
        email: typing.Optional[builtins.str] = None,
        phone_num: typing.Optional[builtins.str] = None,
        proxy_user_id: typing.Optional[builtins.str] = None,
        region_id: typing.Optional[builtins.str] = None,
        system_noc: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ARMS::AlertContact``.

        :param contact_name: 
        :param ding_robot_webhook_url: 
        :param email: 
        :param phone_num: 
        :param proxy_user_id: 
        :param region_id: 
        :param system_noc: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def contact_name(self) -> builtins.str:
        """
        :Property: contactName: The name of the alert contact that you want to create.
        """
        result = self._values.get("contact_name")
        assert result is not None, "Required property 'contact_name' is missing"
        return result

    @builtins.property
    def ding_robot_webhook_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
        """
        result = self._values.get("ding_robot_webhook_url")
        return result

    @builtins.property
    def email(self) -> typing.Optional[builtins.str]:
        """
        :Property: email: The email address of the contact.
        """
        result = self._values.get("email")
        return result

    @builtins.property
    def phone_num(self) -> typing.Optional[builtins.str]:
        """
        :Property: phoneNum: The phone number of the contact.
        """
        result = self._values.get("phone_num")
        return result

    @builtins.property
    def proxy_user_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyUserId: Internal parameters
        """
        result = self._values.get("proxy_user_id")
        return result

    @builtins.property
    def region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: regionId: Region ID. Default to region of stack.
        """
        result = self._values.get("region_id")
        return result

    @builtins.property
    def system_noc(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: systemNoc: Specifies whether to receive system alerts.
        """
        result = self._values.get("system_noc")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AlertContactProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RetcodeApp(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RetcodeApp",
):
    """A ROS resource type:  ``ALIYUN::ARMS::RetcodeApp``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RetcodeAppProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ARMS::RetcodeApp``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RetcodeApp, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> typing.Any:
        """
        :Attribute: AppId: The ID of the application for which you created the browser monitoring job.
        """
        return jsii.get(self, "attrAppId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPid")
    def attr_pid(self) -> typing.Any:
        """
        :Attribute: Pid: The PID.
        """
        return jsii.get(self, "attrPid")


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
        region_id: builtins.str,
        retcode_app_name: builtins.str,
        retcode_app_type: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ARMS::RetcodeApp``.

        :param region_id: 
        :param retcode_app_name: 
        :param retcode_app_type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "region_id": region_id,
            "retcode_app_name": retcode_app_name,
            "retcode_app_type": retcode_app_type,
        }

    @builtins.property
    def region_id(self) -> builtins.str:
        """
        :Property: regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        """
        result = self._values.get("region_id")
        assert result is not None, "Required property 'region_id' is missing"
        return result

    @builtins.property
    def retcode_app_name(self) -> builtins.str:
        """
        :Property: retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        """
        result = self._values.get("retcode_app_name")
        assert result is not None, "Required property 'retcode_app_name' is missing"
        return result

    @builtins.property
    def retcode_app_type(self) -> builtins.str:
        """
        :Property: retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        """
        result = self._values.get("retcode_app_type")
        assert result is not None, "Required property 'retcode_app_type' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RetcodeAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAlertContact(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosAlertContact",
):
    """A ROS template type:  ``ALIYUN::ARMS::AlertContact``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAlertContactProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ARMS::AlertContact``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAlertContact, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrContactId")
    def attr_contact_id(self) -> typing.Any:
        """
        :Attribute: ContactId: The ID of the alert contact that you created.
        """
        return jsii.get(self, "attrContactId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="contactName")
    def contact_name(self) -> builtins.str:
        """
        :Property: contactName: The name of the alert contact that you want to create.
        """
        return jsii.get(self, "contactName")

    @contact_name.setter # type: ignore
    def contact_name(self, value: builtins.str) -> None:
        jsii.set(self, "contactName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dingRobotWebhookUrl")
    def ding_robot_webhook_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
        """
        return jsii.get(self, "dingRobotWebhookUrl")

    @ding_robot_webhook_url.setter # type: ignore
    def ding_robot_webhook_url(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dingRobotWebhookUrl", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="email")
    def email(self) -> typing.Optional[builtins.str]:
        """
        :Property: email: The email address of the contact.
        """
        return jsii.get(self, "email")

    @email.setter # type: ignore
    def email(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "email", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="phoneNum")
    def phone_num(self) -> typing.Optional[builtins.str]:
        """
        :Property: phoneNum: The phone number of the contact.
        """
        return jsii.get(self, "phoneNum")

    @phone_num.setter # type: ignore
    def phone_num(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "phoneNum", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="proxyUserId")
    def proxy_user_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyUserId: Internal parameters
        """
        return jsii.get(self, "proxyUserId")

    @proxy_user_id.setter # type: ignore
    def proxy_user_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "proxyUserId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="regionId")
    def region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: regionId: Region ID. Default to region of stack.
        """
        return jsii.get(self, "regionId")

    @region_id.setter # type: ignore
    def region_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "regionId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="systemNoc")
    def system_noc(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: systemNoc: Specifies whether to receive system alerts.
        """
        return jsii.get(self, "systemNoc")

    @system_noc.setter # type: ignore
    def system_noc(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "systemNoc", value)


class RosAlertContactGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosAlertContactGroup",
):
    """A ROS template type:  ``ALIYUN::ARMS::AlertContactGroup``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAlertContactGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ARMS::AlertContactGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAlertContactGroup, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrContactGroupId")
    def attr_contact_group_id(self) -> typing.Any:
        """
        :Attribute: ContactGroupId: The ID of the alert contact group that you created.
        """
        return jsii.get(self, "attrContactGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="contactGroupName")
    def contact_group_name(self) -> builtins.str:
        """
        :Property: contactGroupName: The name of the alert contact group that you want to create.
        """
        return jsii.get(self, "contactGroupName")

    @contact_group_name.setter # type: ignore
    def contact_group_name(self, value: builtins.str) -> None:
        jsii.set(self, "contactGroupName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="contactIds")
    def contact_ids(
        self,
    ) -> typing.Union[typing.List[jsii.Number], ros_cdk_core.IResolvable]:
        """
        :Property: contactIds: The list of alert contact ID.
        """
        return jsii.get(self, "contactIds")

    @contact_ids.setter # type: ignore
    def contact_ids(
        self,
        value: typing.Union[typing.List[jsii.Number], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "contactIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="proxyUserId")
    def proxy_user_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyUserId: Internal parameters
        """
        return jsii.get(self, "proxyUserId")

    @proxy_user_id.setter # type: ignore
    def proxy_user_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "proxyUserId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="regionId")
    def region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: regionId: Region ID. Default to region of stack.
        """
        return jsii.get(self, "regionId")

    @region_id.setter # type: ignore
    def region_id(self, value: typing.Optional[builtins.str]) -> None:
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
        contact_group_name: builtins.str,
        contact_ids: typing.Union[typing.List[jsii.Number], ros_cdk_core.IResolvable],
        proxy_user_id: typing.Optional[builtins.str] = None,
        region_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ARMS::AlertContactGroup``.

        :param contact_group_name: 
        :param contact_ids: 
        :param proxy_user_id: 
        :param region_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "contact_group_name": contact_group_name,
            "contact_ids": contact_ids,
        }
        if proxy_user_id is not None:
            self._values["proxy_user_id"] = proxy_user_id
        if region_id is not None:
            self._values["region_id"] = region_id

    @builtins.property
    def contact_group_name(self) -> builtins.str:
        """
        :Property: contactGroupName: The name of the alert contact group that you want to create.
        """
        result = self._values.get("contact_group_name")
        assert result is not None, "Required property 'contact_group_name' is missing"
        return result

    @builtins.property
    def contact_ids(
        self,
    ) -> typing.Union[typing.List[jsii.Number], ros_cdk_core.IResolvable]:
        """
        :Property: contactIds: The list of alert contact ID.
        """
        result = self._values.get("contact_ids")
        assert result is not None, "Required property 'contact_ids' is missing"
        return result

    @builtins.property
    def proxy_user_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyUserId: Internal parameters
        """
        result = self._values.get("proxy_user_id")
        return result

    @builtins.property
    def region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: regionId: Region ID. Default to region of stack.
        """
        result = self._values.get("region_id")
        return result

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
        contact_name: builtins.str,
        ding_robot_webhook_url: typing.Optional[builtins.str] = None,
        email: typing.Optional[builtins.str] = None,
        phone_num: typing.Optional[builtins.str] = None,
        proxy_user_id: typing.Optional[builtins.str] = None,
        region_id: typing.Optional[builtins.str] = None,
        system_noc: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ARMS::AlertContact``.

        :param contact_name: 
        :param ding_robot_webhook_url: 
        :param email: 
        :param phone_num: 
        :param proxy_user_id: 
        :param region_id: 
        :param system_noc: 
        """
        self._values: typing.Dict[str, typing.Any] = {
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
    def contact_name(self) -> builtins.str:
        """
        :Property: contactName: The name of the alert contact that you want to create.
        """
        result = self._values.get("contact_name")
        assert result is not None, "Required property 'contact_name' is missing"
        return result

    @builtins.property
    def ding_robot_webhook_url(self) -> typing.Optional[builtins.str]:
        """
        :Property: dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
        """
        result = self._values.get("ding_robot_webhook_url")
        return result

    @builtins.property
    def email(self) -> typing.Optional[builtins.str]:
        """
        :Property: email: The email address of the contact.
        """
        result = self._values.get("email")
        return result

    @builtins.property
    def phone_num(self) -> typing.Optional[builtins.str]:
        """
        :Property: phoneNum: The phone number of the contact.
        """
        result = self._values.get("phone_num")
        return result

    @builtins.property
    def proxy_user_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: proxyUserId: Internal parameters
        """
        result = self._values.get("proxy_user_id")
        return result

    @builtins.property
    def region_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: regionId: Region ID. Default to region of stack.
        """
        result = self._values.get("region_id")
        return result

    @builtins.property
    def system_noc(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: systemNoc: Specifies whether to receive system alerts.
        """
        result = self._values.get("system_noc")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAlertContactProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRetcodeApp(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-arms.RosRetcodeApp",
):
    """A ROS template type:  ``ALIYUN::ARMS::RetcodeApp``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRetcodeAppProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ARMS::RetcodeApp``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosRetcodeApp, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrAppId")
    def attr_app_id(self) -> typing.Any:
        """
        :Attribute: AppId: The ID of the application for which you created the browser monitoring job.
        """
        return jsii.get(self, "attrAppId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPid")
    def attr_pid(self) -> typing.Any:
        """
        :Attribute: Pid: The PID.
        """
        return jsii.get(self, "attrPid")

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
    @jsii.member(jsii_name="regionId")
    def region_id(self) -> builtins.str:
        """
        :Property: regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        """
        return jsii.get(self, "regionId")

    @region_id.setter # type: ignore
    def region_id(self, value: builtins.str) -> None:
        jsii.set(self, "regionId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="retcodeAppName")
    def retcode_app_name(self) -> builtins.str:
        """
        :Property: retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        """
        return jsii.get(self, "retcodeAppName")

    @retcode_app_name.setter # type: ignore
    def retcode_app_name(self, value: builtins.str) -> None:
        jsii.set(self, "retcodeAppName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="retcodeAppType")
    def retcode_app_type(self) -> builtins.str:
        """
        :Property: retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        """
        return jsii.get(self, "retcodeAppType")

    @retcode_app_type.setter # type: ignore
    def retcode_app_type(self, value: builtins.str) -> None:
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
        region_id: builtins.str,
        retcode_app_name: builtins.str,
        retcode_app_type: builtins.str,
    ) -> None:
        """Properties for defining a ``ALIYUN::ARMS::RetcodeApp``.

        :param region_id: 
        :param retcode_app_name: 
        :param retcode_app_type: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "region_id": region_id,
            "retcode_app_name": retcode_app_name,
            "retcode_app_type": retcode_app_type,
        }

    @builtins.property
    def region_id(self) -> builtins.str:
        """
        :Property: regionId: Region ID. Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
        """
        result = self._values.get("region_id")
        assert result is not None, "Required property 'region_id' is missing"
        return result

    @builtins.property
    def retcode_app_name(self) -> builtins.str:
        """
        :Property: retcodeAppName: The name of the application for which you want to create the browser monitoring job.
        """
        result = self._values.get("retcode_app_name")
        assert result is not None, "Required property 'retcode_app_name' is missing"
        return result

    @builtins.property
    def retcode_app_type(self) -> builtins.str:
        """
        :Property: retcodeAppType: The type of the application for which you want to create the browser monitoring job. Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
        """
        result = self._values.get("retcode_app_type")
        assert result is not None, "Required property 'retcode_app_type' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRetcodeAppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AlertContact",
    "AlertContactGroup",
    "AlertContactGroupProps",
    "AlertContactProps",
    "RetcodeApp",
    "RetcodeAppProps",
    "RosAlertContact",
    "RosAlertContactGroup",
    "RosAlertContactGroupProps",
    "RosAlertContactProps",
    "RosRetcodeApp",
    "RosRetcodeAppProps",
]

publication.publish()
