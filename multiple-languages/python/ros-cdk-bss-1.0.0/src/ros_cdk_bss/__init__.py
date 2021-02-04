"""
## Aliyun ROS BSS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_bss as BSS
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


class RosWaitOrder(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bss.RosWaitOrder",
):
    """A ROS template type:  ``ALIYUN::BSS::WaitOrder``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWaitOrderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::BSS::WaitOrder``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosWaitOrder, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="orderIds")
    def order_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: orderIds: A list of order ids.
        """
        return jsii.get(self, "orderIds")

    @order_ids.setter # type: ignore
    def order_ids(
        self,
        value: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "orderIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cancelOnDelete")
    def cancel_on_delete(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        """
        return jsii.get(self, "cancelOnDelete")

    @cancel_on_delete.setter # type: ignore
    def cancel_on_delete(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "cancelOnDelete", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="waitForOrderProduced")
    def wait_for_order_produced(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        waitForOrderProduced: Wait util all orders related ROS resources are produced.
        Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        """
        return jsii.get(self, "waitForOrderProduced")

    @wait_for_order_produced.setter # type: ignore
    def wait_for_order_produced(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "waitForOrderProduced", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bss.RosWaitOrderProps",
    jsii_struct_bases=[],
    name_mapping={
        "order_ids": "orderIds",
        "cancel_on_delete": "cancelOnDelete",
        "wait_for_order_produced": "waitForOrderProduced",
    },
)
class RosWaitOrderProps:
    def __init__(
        self,
        *,
        order_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        cancel_on_delete: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        wait_for_order_produced: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::BSS::WaitOrder``.

        :param order_ids: 
        :param cancel_on_delete: 
        :param wait_for_order_produced: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "order_ids": order_ids,
        }
        if cancel_on_delete is not None:
            self._values["cancel_on_delete"] = cancel_on_delete
        if wait_for_order_produced is not None:
            self._values["wait_for_order_produced"] = wait_for_order_produced

    @builtins.property
    def order_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: orderIds: A list of order ids.
        """
        result = self._values.get("order_ids")
        assert result is not None, "Required property 'order_ids' is missing"
        return result

    @builtins.property
    def cancel_on_delete(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        """
        result = self._values.get("cancel_on_delete")
        return result

    @builtins.property
    def wait_for_order_produced(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        waitForOrderProduced: Wait util all orders related ROS resources are produced.
        Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        """
        result = self._values.get("wait_for_order_produced")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWaitOrderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class WaitOrder(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-bss.WaitOrder",
):
    """A ROS resource type:  ``ALIYUN::BSS::WaitOrder``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "WaitOrderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::BSS::WaitOrder``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(WaitOrder, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-bss.WaitOrderProps",
    jsii_struct_bases=[],
    name_mapping={
        "order_ids": "orderIds",
        "cancel_on_delete": "cancelOnDelete",
        "wait_for_order_produced": "waitForOrderProduced",
    },
)
class WaitOrderProps:
    def __init__(
        self,
        *,
        order_ids: typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable],
        cancel_on_delete: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        wait_for_order_produced: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::BSS::WaitOrder``.

        :param order_ids: 
        :param cancel_on_delete: 
        :param wait_for_order_produced: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "order_ids": order_ids,
        }
        if cancel_on_delete is not None:
            self._values["cancel_on_delete"] = cancel_on_delete
        if wait_for_order_produced is not None:
            self._values["wait_for_order_produced"] = wait_for_order_produced

    @builtins.property
    def order_ids(
        self,
    ) -> typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]:
        """
        :Property: orderIds: A list of order ids.
        """
        result = self._values.get("order_ids")
        assert result is not None, "Required property 'order_ids' is missing"
        return result

    @builtins.property
    def cancel_on_delete(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        """
        result = self._values.get("cancel_on_delete")
        return result

    @builtins.property
    def wait_for_order_produced(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        waitForOrderProduced: Wait util all orders related ROS resources are produced.
        Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        """
        result = self._values.get("wait_for_order_produced")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WaitOrderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosWaitOrder",
    "RosWaitOrderProps",
    "WaitOrder",
    "WaitOrderProps",
]

publication.publish()
