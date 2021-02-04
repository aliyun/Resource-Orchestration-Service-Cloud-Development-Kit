"""
## Aliyun ROS MEMCACHE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_memcache as MEMCACHE
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


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-memcache.Instance",
):
    """A ROS resource type:  ``ALIYUN::Memcache::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["InstanceProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::Memcache::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Instance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> typing.Any:
        """
        :Attribute: ConnectionDomain: The internal endpoint of the instance.
        """
        return jsii.get(self, "attrConnectionDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: The globally unique identifier (GUID) of the instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> typing.Any:
        """
        :Attribute: InstanceName: The name of the instance.
        """
        return jsii.get(self, "attrInstanceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> typing.Any:
        """
        :Attribute: Port: Port of created instance.
        """
        return jsii.get(self, "attrPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> typing.Any:
        """
        :Attribute: QPS: QPS.
        """
        return jsii.get(self, "attrQps")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-memcache.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "auto_use_coupon": "autoUseCoupon",
        "backup_policy": "backupPolicy",
        "capacity": "capacity",
        "charge_type": "chargeType",
        "config": "config",
        "coupon_no": "couponNo",
        "instance_class": "instanceClass",
        "instance_name": "instanceName",
        "network_type": "networkType",
        "password": "password",
        "period": "period",
        "private_ip_address": "privateIpAddress",
        "resource_group_id": "resourceGroupId",
        "vpc_id": "vpcId",
        "vpc_password_free": "vpcPasswordFree",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        auto_renew: typing.Optional[builtins.str] = None,
        auto_renew_period: typing.Optional[builtins.str] = None,
        auto_use_coupon: typing.Optional[builtins.str] = None,
        backup_policy: typing.Optional[typing.Union["RosInstance.BackupPolicyProperty", ros_cdk_core.IResolvable]] = None,
        capacity: typing.Optional[jsii.Number] = None,
        charge_type: typing.Optional[builtins.str] = None,
        config: typing.Optional[builtins.str] = None,
        coupon_no: typing.Optional[builtins.str] = None,
        instance_class: typing.Optional[builtins.str] = None,
        instance_name: typing.Optional[builtins.str] = None,
        network_type: typing.Optional[builtins.str] = None,
        password: typing.Optional[builtins.str] = None,
        period: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::Memcache::Instance``.

        :param auto_renew: 
        :param auto_renew_period: 
        :param auto_use_coupon: 
        :param backup_policy: 
        :param capacity: 
        :param charge_type: 
        :param config: 
        :param coupon_no: 
        :param instance_class: 
        :param instance_name: 
        :param network_type: 
        :param password: 
        :param period: 
        :param private_ip_address: 
        :param resource_group_id: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if auto_use_coupon is not None:
            self._values["auto_use_coupon"] = auto_use_coupon
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
        if capacity is not None:
            self._values["capacity"] = capacity
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if config is not None:
            self._values["config"] = config
        if coupon_no is not None:
            self._values["coupon_no"] = coupon_no
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if network_type is not None:
            self._values["network_type"] = network_type
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vpc_password_free is not None:
            self._values["vpc_password_free"] = vpc_password_free
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def auto_renew(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoRenew: Specifies whether to enable auto renewal. Valid values:
        true
        false
        Note Default value: false.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def auto_renew_period(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoRenewPeriod: The period of the auto renewal. Unit: months. Valid values:
        1
        2
        3
        6
        12
        Note You must specify this parameter if the value of the AutoRenew parameter is true.
        """
        result = self._values.get("auto_renew_period")
        return result

    @builtins.property
    def auto_use_coupon(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoUseCoupon: Specifies whether to use a coupon. Valid values:
        true
        false
        Note Default value: false.
        """
        result = self._values.get("auto_use_coupon")
        return result

    @builtins.property
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union["RosInstance.BackupPolicyProperty", ros_cdk_core.IResolvable]]:
        """
        :Property: backupPolicy: Backup policy
        """
        result = self._values.get("backup_policy")
        return result

    @builtins.property
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        capacity: The storage capacity of the instance. Unit: MB.
        Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        the CreateInstance operation.
        """
        result = self._values.get("capacity")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        chargeType: The billing method of the instance. Valid values:
        PrePaid: subscription.
        PostPaid: pay-as-you-go.
        Note Default value: PostPaid.
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def config(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        config: The parameter configuration of the instance, in a JSON string. For more information,
        see Set parameters.
        """
        result = self._values.get("config")
        return result

    @builtins.property
    def coupon_no(self) -> typing.Optional[builtins.str]:
        """
        :Property: couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
        """
        result = self._values.get("coupon_no")
        return result

    @builtins.property
    def instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceClass: The instance type. For more information, see Instance types.
        Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        the CreateInstance operation.
        """
        result = self._values.get("instance_class")
        return result

    @builtins.property
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        ::

        ), forward slashes (/), colons (:), equal signs (=), double quotation marks
        ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
        :Property:

        instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
        with a letter. The following characters are not supported: at signs (
        """
        result = self._values.get("instance_name")
        return result

    @builtins.property
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        networkType: The network type of the instance. Valid values:
        CLASSIC
        VPC
        Note Default value: CLASSIC.
        """
        result = self._values.get("network_type")
        return result

    @builtins.property
    def password(self) -> typing.Optional[builtins.str]:
        """
        ::

        ), number signs (#), dollar signs ($), percent signs (%), carets (^),
        ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        hyphens (-), and equal signs (=).
        :Property:

        password: The password of the instance. The password can be 8 to 32 characters in length and
        must contain at least three types of the following characters: uppercase letters,
        lowercase letters, digits, and special characters. Special characters include ! at signs (
        """
        result = self._values.get("password")
        return result

    @builtins.property
    def period(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        period: The subscription period. You must specify this parameter if the value of the ChargeType
        parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
        and 36.
        Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        privateIpAddress: The internal IP address of the instance.
        Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
        block of the VSwitch to which the instance belongs.
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group ID.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The ID of the VPC.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        """
        result = self._values.get("vpc_password_free")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-memcache.RosInstance",
):
    """A ROS template type:  ``ALIYUN::Memcache::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::Memcache::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosInstance, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrConnectionDomain")
    def attr_connection_domain(self) -> typing.Any:
        """
        :Attribute: ConnectionDomain: The internal endpoint of the instance.
        """
        return jsii.get(self, "attrConnectionDomain")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: The globally unique identifier (GUID) of the instance.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> typing.Any:
        """
        :Attribute: InstanceName: The name of the instance.
        """
        return jsii.get(self, "attrInstanceName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPort")
    def attr_port(self) -> typing.Any:
        """
        :Attribute: Port: Port of created instance.
        """
        return jsii.get(self, "attrPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrQps")
    def attr_qps(self) -> typing.Any:
        """
        :Attribute: QPS: QPS.
        """
        return jsii.get(self, "attrQps")

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
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoRenew: Specifies whether to enable auto renewal. Valid values:
        true
        false
        Note Default value: false.
        """
        return jsii.get(self, "autoRenew")

    @auto_renew.setter # type: ignore
    def auto_renew(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoRenewPeriod: The period of the auto renewal. Unit: months. Valid values:
        1
        2
        3
        6
        12
        Note You must specify this parameter if the value of the AutoRenew parameter is true.
        """
        return jsii.get(self, "autoRenewPeriod")

    @auto_renew_period.setter # type: ignore
    def auto_renew_period(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoUseCoupon")
    def auto_use_coupon(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoUseCoupon: Specifies whether to use a coupon. Valid values:
        true
        false
        Note Default value: false.
        """
        return jsii.get(self, "autoUseCoupon")

    @auto_use_coupon.setter # type: ignore
    def auto_use_coupon(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "autoUseCoupon", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupPolicy")
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union["RosInstance.BackupPolicyProperty", ros_cdk_core.IResolvable]]:
        """
        :Property: backupPolicy: Backup policy
        """
        return jsii.get(self, "backupPolicy")

    @backup_policy.setter # type: ignore
    def backup_policy(
        self,
        value: typing.Optional[typing.Union["RosInstance.BackupPolicyProperty", ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backupPolicy", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="capacity")
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        capacity: The storage capacity of the instance. Unit: MB.
        Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        the CreateInstance operation.
        """
        return jsii.get(self, "capacity")

    @capacity.setter # type: ignore
    def capacity(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "capacity", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        chargeType: The billing method of the instance. Valid values:
        PrePaid: subscription.
        PostPaid: pay-as-you-go.
        Note Default value: PostPaid.
        """
        return jsii.get(self, "chargeType")

    @charge_type.setter # type: ignore
    def charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="config")
    def config(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        config: The parameter configuration of the instance, in a JSON string. For more information,
        see Set parameters.
        """
        return jsii.get(self, "config")

    @config.setter # type: ignore
    def config(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "config", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="couponNo")
    def coupon_no(self) -> typing.Optional[builtins.str]:
        """
        :Property: couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
        """
        return jsii.get(self, "couponNo")

    @coupon_no.setter # type: ignore
    def coupon_no(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "couponNo", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceClass")
    def instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceClass: The instance type. For more information, see Instance types.
        Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        the CreateInstance operation.
        """
        return jsii.get(self, "instanceClass")

    @instance_class.setter # type: ignore
    def instance_class(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceName")
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        ::

        ), forward slashes (/), colons (:), equal signs (=), double quotation marks
        ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
        :Property:

        instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
        with a letter. The following characters are not supported: at signs (
        """
        return jsii.get(self, "instanceName")

    @instance_name.setter # type: ignore
    def instance_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "instanceName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="networkType")
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        networkType: The network type of the instance. Valid values:
        CLASSIC
        VPC
        Note Default value: CLASSIC.
        """
        return jsii.get(self, "networkType")

    @network_type.setter # type: ignore
    def network_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "networkType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="password")
    def password(self) -> typing.Optional[builtins.str]:
        """
        ::

        ), number signs (#), dollar signs ($), percent signs (%), carets (^),
        ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        hyphens (-), and equal signs (=).
        :Property:

        password: The password of the instance. The password can be 8 to 32 characters in length and
        must contain at least three types of the following characters: uppercase letters,
        lowercase letters, digits, and special characters. Special characters include ! at signs (
        """
        return jsii.get(self, "password")

    @password.setter # type: ignore
    def password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        period: The subscription period. You must specify this parameter if the value of the ChargeType
        parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
        and 36.
        Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        privateIpAddress: The internal IP address of the instance.
        Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
        block of the VSwitch to which the instance belongs.
        """
        return jsii.get(self, "privateIpAddress")

    @private_ip_address.setter # type: ignore
    def private_ip_address(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "privateIpAddress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group ID.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The ID of the VPC.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcPasswordFree")
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        """
        return jsii.get(self, "vpcPasswordFree")

    @vpc_password_free.setter # type: ignore
    def vpc_password_free(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcPasswordFree", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-memcache.RosInstance.BackupPolicyProperty",
        jsii_struct_bases=[],
        name_mapping={
            "preferred_backup_period": "preferredBackupPeriod",
            "preferred_backup_time": "preferredBackupTime",
            "enable_backup_log": "enableBackupLog",
        },
    )
    class BackupPolicyProperty:
        def __init__(
            self,
            *,
            preferred_backup_period: builtins.str,
            preferred_backup_time: builtins.str,
            enable_backup_log: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param preferred_backup_period: 
            :param preferred_backup_time: 
            :param enable_backup_log: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "preferred_backup_period": preferred_backup_period,
                "preferred_backup_time": preferred_backup_time,
            }
            if enable_backup_log is not None:
                self._values["enable_backup_log"] = enable_backup_log

        @builtins.property
        def preferred_backup_period(self) -> builtins.str:
            """
            :Property: preferredBackupPeriod: The backup cycle. Only for PostPaid instance. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
            """
            result = self._values.get("preferred_backup_period")
            assert result is not None, "Required property 'preferred_backup_period' is missing"
            return result

        @builtins.property
        def preferred_backup_time(self) -> builtins.str:
            """
            :Property: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            """
            result = self._values.get("preferred_backup_time")
            assert result is not None, "Required property 'preferred_backup_time' is missing"
            return result

        @builtins.property
        def enable_backup_log(self) -> typing.Optional[jsii.Number]:
            """
            :Property:

            enableBackupLog: Enable or disable incremental backup. Options:
            1, means open.
            0, which means off, the default value.
            """
            result = self._values.get("enable_backup_log")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackupPolicyProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-memcache.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "auto_use_coupon": "autoUseCoupon",
        "backup_policy": "backupPolicy",
        "capacity": "capacity",
        "charge_type": "chargeType",
        "config": "config",
        "coupon_no": "couponNo",
        "instance_class": "instanceClass",
        "instance_name": "instanceName",
        "network_type": "networkType",
        "password": "password",
        "period": "period",
        "private_ip_address": "privateIpAddress",
        "resource_group_id": "resourceGroupId",
        "vpc_id": "vpcId",
        "vpc_password_free": "vpcPasswordFree",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        auto_renew: typing.Optional[builtins.str] = None,
        auto_renew_period: typing.Optional[builtins.str] = None,
        auto_use_coupon: typing.Optional[builtins.str] = None,
        backup_policy: typing.Optional[typing.Union[RosInstance.BackupPolicyProperty, ros_cdk_core.IResolvable]] = None,
        capacity: typing.Optional[jsii.Number] = None,
        charge_type: typing.Optional[builtins.str] = None,
        config: typing.Optional[builtins.str] = None,
        coupon_no: typing.Optional[builtins.str] = None,
        instance_class: typing.Optional[builtins.str] = None,
        instance_name: typing.Optional[builtins.str] = None,
        network_type: typing.Optional[builtins.str] = None,
        password: typing.Optional[builtins.str] = None,
        period: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::Memcache::Instance``.

        :param auto_renew: 
        :param auto_renew_period: 
        :param auto_use_coupon: 
        :param backup_policy: 
        :param capacity: 
        :param charge_type: 
        :param config: 
        :param coupon_no: 
        :param instance_class: 
        :param instance_name: 
        :param network_type: 
        :param password: 
        :param period: 
        :param private_ip_address: 
        :param resource_group_id: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if auto_use_coupon is not None:
            self._values["auto_use_coupon"] = auto_use_coupon
        if backup_policy is not None:
            self._values["backup_policy"] = backup_policy
        if capacity is not None:
            self._values["capacity"] = capacity
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if config is not None:
            self._values["config"] = config
        if coupon_no is not None:
            self._values["coupon_no"] = coupon_no
        if instance_class is not None:
            self._values["instance_class"] = instance_class
        if instance_name is not None:
            self._values["instance_name"] = instance_name
        if network_type is not None:
            self._values["network_type"] = network_type
        if password is not None:
            self._values["password"] = password
        if period is not None:
            self._values["period"] = period
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vpc_password_free is not None:
            self._values["vpc_password_free"] = vpc_password_free
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def auto_renew(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoRenew: Specifies whether to enable auto renewal. Valid values:
        true
        false
        Note Default value: false.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def auto_renew_period(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoRenewPeriod: The period of the auto renewal. Unit: months. Valid values:
        1
        2
        3
        6
        12
        Note You must specify this parameter if the value of the AutoRenew parameter is true.
        """
        result = self._values.get("auto_renew_period")
        return result

    @builtins.property
    def auto_use_coupon(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        autoUseCoupon: Specifies whether to use a coupon. Valid values:
        true
        false
        Note Default value: false.
        """
        result = self._values.get("auto_use_coupon")
        return result

    @builtins.property
    def backup_policy(
        self,
    ) -> typing.Optional[typing.Union[RosInstance.BackupPolicyProperty, ros_cdk_core.IResolvable]]:
        """
        :Property: backupPolicy: Backup policy
        """
        result = self._values.get("backup_policy")
        return result

    @builtins.property
    def capacity(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        capacity: The storage capacity of the instance. Unit: MB.
        Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        the CreateInstance operation.
        """
        result = self._values.get("capacity")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        chargeType: The billing method of the instance. Valid values:
        PrePaid: subscription.
        PostPaid: pay-as-you-go.
        Note Default value: PostPaid.
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def config(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        config: The parameter configuration of the instance, in a JSON string. For more information,
        see Set parameters.
        """
        result = self._values.get("config")
        return result

    @builtins.property
    def coupon_no(self) -> typing.Optional[builtins.str]:
        """
        :Property: couponNo: The coupon number. Default value: youhuiquan_promotion_option_id_for_blank.
        """
        result = self._values.get("coupon_no")
        return result

    @builtins.property
    def instance_class(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        instanceClass: The instance type. For more information, see Instance types.
        Note You need to pass at least one of the Capacity and InstanceClass parameters when calling
        the CreateInstance operation.
        """
        result = self._values.get("instance_class")
        return result

    @builtins.property
    def instance_name(self) -> typing.Optional[builtins.str]:
        """
        ::

        ), forward slashes (/), colons (:), equal signs (=), double quotation marks
        ("), angle brackets (<>), braces ([]), curly brackets ({}) and spaces.
        :Property:

        instanceName: The name of the instance. The name can be 2 to 128 characters in length and must start
        with a letter. The following characters are not supported: at signs (
        """
        result = self._values.get("instance_name")
        return result

    @builtins.property
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        networkType: The network type of the instance. Valid values:
        CLASSIC
        VPC
        Note Default value: CLASSIC.
        """
        result = self._values.get("network_type")
        return result

    @builtins.property
    def password(self) -> typing.Optional[builtins.str]:
        """
        ::

        ), number signs (#), dollar signs ($), percent signs (%), carets (^),
        ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
        hyphens (-), and equal signs (=).
        :Property:

        password: The password of the instance. The password can be 8 to 32 characters in length and
        must contain at least three types of the following characters: uppercase letters,
        lowercase letters, digits, and special characters. Special characters include ! at signs (
        """
        result = self._values.get("password")
        return result

    @builtins.property
    def period(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        period: The subscription period. You must specify this parameter if the value of the ChargeType
        parameter is PrePaid. Unit: months. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24,
        and 36.
        Note This parameter is invalid if the value of the ChargeType parameter is PostPaid.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        privateIpAddress: The internal IP address of the instance.
        Note The internal IP address must be located in the Classless Inter-Domain Routing (CIDR)
        block of the VSwitch to which the instance belongs.
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group ID.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The ID of the VPC.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def vpc_password_free(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property:

        vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:

        - true: enables password free.
        - false: disables password free.
        """
        result = self._values.get("vpc_password_free")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The ID of the VSwitch.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: The ID of the zone in which the instance is created. You can call the DescribeRegions operation to query the latest region list.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWhitelist(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-memcache.RosWhitelist",
):
    """A ROS template type:  ``ALIYUN::Memcache::Whitelist``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWhitelistProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::Memcache::Whitelist``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosWhitelist, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrSecurityIpGroupAttribute")
    def attr_security_ip_group_attribute(self) -> typing.Any:
        """
        :Attribute: SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        """
        return jsii.get(self, "attrSecurityIpGroupAttribute")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIpGroupName")
    def attr_security_ip_group_name(self) -> typing.Any:
        """
        :Attribute: SecurityIpGroupName: Whitelist group
        """
        return jsii.get(self, "attrSecurityIpGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> typing.Any:
        """
        :Attribute: SecurityIps: IP address whitelist to be modified
        """
        return jsii.get(self, "attrSecurityIps")

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
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: Instance ID (globally unique)
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIps")
    def security_ips(self) -> builtins.str:
        """
        :Property: securityIps: IP address whitelist to be modified
        """
        return jsii.get(self, "securityIps")

    @security_ips.setter # type: ignore
    def security_ips(self, value: builtins.str) -> None:
        jsii.set(self, "securityIps", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIpGroupAttribute")
    def security_ip_group_attribute(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        """
        return jsii.get(self, "securityIpGroupAttribute")

    @security_ip_group_attribute.setter # type: ignore
    def security_ip_group_attribute(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityIpGroupAttribute", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIpGroupName")
    def security_ip_group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupName: Whitelist group
        """
        return jsii.get(self, "securityIpGroupName")

    @security_ip_group_name.setter # type: ignore
    def security_ip_group_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityIpGroupName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-memcache.RosWhitelistProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "security_ips": "securityIps",
        "security_ip_group_attribute": "securityIpGroupAttribute",
        "security_ip_group_name": "securityIpGroupName",
    },
)
class RosWhitelistProps:
    def __init__(
        self,
        *,
        instance_id: builtins.str,
        security_ips: builtins.str,
        security_ip_group_attribute: typing.Optional[builtins.str] = None,
        security_ip_group_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::Memcache::Whitelist``.

        :param instance_id: 
        :param security_ips: 
        :param security_ip_group_attribute: 
        :param security_ip_group_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "security_ips": security_ips,
        }
        if security_ip_group_attribute is not None:
            self._values["security_ip_group_attribute"] = security_ip_group_attribute
        if security_ip_group_name is not None:
            self._values["security_ip_group_name"] = security_ip_group_name

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: Instance ID (globally unique)
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def security_ips(self) -> builtins.str:
        """
        :Property: securityIps: IP address whitelist to be modified
        """
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return result

    @builtins.property
    def security_ip_group_attribute(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        """
        result = self._values.get("security_ip_group_attribute")
        return result

    @builtins.property
    def security_ip_group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupName: Whitelist group
        """
        result = self._values.get("security_ip_group_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWhitelistProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Whitelist(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-memcache.Whitelist",
):
    """A ROS resource type:  ``ALIYUN::Memcache::Whitelist``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "WhitelistProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::Memcache::Whitelist``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Whitelist, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIpGroupAttribute")
    def attr_security_ip_group_attribute(self) -> typing.Any:
        """
        :Attribute: SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        """
        return jsii.get(self, "attrSecurityIpGroupAttribute")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIpGroupName")
    def attr_security_ip_group_name(self) -> typing.Any:
        """
        :Attribute: SecurityIpGroupName: Whitelist group
        """
        return jsii.get(self, "attrSecurityIpGroupName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityIps")
    def attr_security_ips(self) -> typing.Any:
        """
        :Attribute: SecurityIps: IP address whitelist to be modified
        """
        return jsii.get(self, "attrSecurityIps")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-memcache.WhitelistProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "security_ips": "securityIps",
        "security_ip_group_attribute": "securityIpGroupAttribute",
        "security_ip_group_name": "securityIpGroupName",
    },
)
class WhitelistProps:
    def __init__(
        self,
        *,
        instance_id: builtins.str,
        security_ips: builtins.str,
        security_ip_group_attribute: typing.Optional[builtins.str] = None,
        security_ip_group_name: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::Memcache::Whitelist``.

        :param instance_id: 
        :param security_ips: 
        :param security_ip_group_attribute: 
        :param security_ip_group_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "security_ips": security_ips,
        }
        if security_ip_group_attribute is not None:
            self._values["security_ip_group_attribute"] = security_ip_group_attribute
        if security_ip_group_name is not None:
            self._values["security_ip_group_name"] = security_ip_group_name

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: Instance ID (globally unique)
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def security_ips(self) -> builtins.str:
        """
        :Property: securityIps: IP address whitelist to be modified
        """
        result = self._values.get("security_ips")
        assert result is not None, "Required property 'security_ips' is missing"
        return result

    @builtins.property
    def security_ip_group_attribute(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        """
        result = self._values.get("security_ip_group_attribute")
        return result

    @builtins.property
    def security_ip_group_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpGroupName: Whitelist group
        """
        result = self._values.get("security_ip_group_name")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WhitelistProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
    "RosWhitelist",
    "RosWhitelistProps",
    "Whitelist",
    "WhitelistProps",
]

publication.publish()
