"""
## Aliyun ROS ENS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_ens as ENS
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
    jsii_type="@alicloud/ros-cdk-ens.Instance",
):
    """A ROS resource type:  ``ALIYUN::ENS::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ENS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Instance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> typing.Any:
        """
        :Attribute: AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        """
        return jsii.get(self, "attrAutoRenew")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoRenewPeriod")
    def attr_auto_renew_period(self) -> typing.Any:
        """
        :Attribute: AutoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        """
        return jsii.get(self, "attrAutoRenewPeriod")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDataDiskSize")
    def attr_data_disk_size(self) -> typing.Any:
        """
        :Attribute: DataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        """
        return jsii.get(self, "attrDataDiskSize")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEnsRegionId")
    def attr_ens_region_id(self) -> typing.Any:
        """
        :Attribute: EnsRegionId: ENS Region Id.
        """
        return jsii.get(self, "attrEnsRegionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrImageId")
    def attr_image_id(self) -> typing.Any:
        """
        :Attribute: ImageId: Image ID to create ens instance.
        """
        return jsii.get(self, "attrImageId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: InstanceId.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> typing.Any:
        """
        :Attribute: InstanceType: ENS instance supported instance type, make sure it should be correct.
        """
        return jsii.get(self, "attrInstanceType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetChargeType")
    def attr_internet_charge_type(self) -> typing.Any:
        """
        :Attribute: InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        """
        return jsii.get(self, "attrInternetChargeType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpType")
    def attr_ip_type(self) -> typing.Any:
        """
        :Attribute: IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        """
        return jsii.get(self, "attrIpType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrKeyPairName")
    def attr_key_pair_name(self) -> typing.Any:
        """
        :Attribute: KeyPairName: SSH key pair name.
        """
        return jsii.get(self, "attrKeyPairName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> typing.Any:
        """
        :Attribute: PaymentType: Payment Type.only support value Subscription.
        """
        return jsii.get(self, "attrPaymentType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(self) -> typing.Any:
        """
        :Attribute: Period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        """
        return jsii.get(self, "attrPeriod")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPrivateIpAddress")
    def attr_private_ip_address(self) -> typing.Any:
        """
        :Attribute: PrivateIpAddress: Private IP for the instance created.
        """
        return jsii.get(self, "attrPrivateIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPrivateIps")
    def attr_private_ips(self) -> typing.Any:
        """
        :Attribute: PrivateIps: Private IP
        """
        return jsii.get(self, "attrPrivateIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicIps")
    def attr_public_ips(self) -> typing.Any:
        """
        :Attribute: PublicIps: Public IP
        """
        return jsii.get(self, "attrPublicIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrQuantity")
    def attr_quantity(self) -> typing.Any:
        """
        :Attribute: Quantity: number of instances to create.
        """
        return jsii.get(self, "attrQuantity")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSystemDiskSize")
    def attr_system_disk_size(self) -> typing.Any:
        """
        :Attribute: SystemDiskSize: Disk size of the system disk.
        """
        return jsii.get(self, "attrSystemDiskSize")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUserData")
    def attr_user_data(self) -> typing.Any:
        """
        :Attribute: UserData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        """
        return jsii.get(self, "attrUserData")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> typing.Any:
        """
        :Attribute: VSwitchId: The vSwitch Id to create ens instance.
        """
        return jsii.get(self, "attrVSwitchId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ens.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "data_disk_size": "dataDiskSize",
        "ens_region_id": "ensRegionId",
        "image_id": "imageId",
        "instance_type": "instanceType",
        "period": "period",
        "quantity": "quantity",
        "system_disk_size": "systemDiskSize",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "internet_charge_type": "internetChargeType",
        "ip_type": "ipType",
        "key_pair_name": "keyPairName",
        "password": "password",
        "payment_type": "paymentType",
        "private_ip_address": "privateIpAddress",
        "user_data": "userData",
        "v_switch_id": "vSwitchId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        data_disk_size: jsii.Number,
        ens_region_id: builtins.str,
        image_id: builtins.str,
        instance_type: builtins.str,
        period: jsii.Number,
        quantity: jsii.Number,
        system_disk_size: jsii.Number,
        auto_renew: typing.Optional[builtins.str] = None,
        auto_renew_period: typing.Optional[jsii.Number] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        ip_type: typing.Optional[builtins.str] = None,
        key_pair_name: typing.Optional[builtins.str] = None,
        password: typing.Optional[builtins.str] = None,
        payment_type: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        user_data: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ENS::Instance``.

        :param data_disk_size: 
        :param ens_region_id: 
        :param image_id: 
        :param instance_type: 
        :param period: 
        :param quantity: 
        :param system_disk_size: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param internet_charge_type: 
        :param ip_type: 
        :param key_pair_name: 
        :param password: 
        :param payment_type: 
        :param private_ip_address: 
        :param user_data: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "data_disk_size": data_disk_size,
            "ens_region_id": ens_region_id,
            "image_id": image_id,
            "instance_type": instance_type,
            "period": period,
            "quantity": quantity,
            "system_disk_size": system_disk_size,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if ip_type is not None:
            self._values["ip_type"] = ip_type
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if password is not None:
            self._values["password"] = password
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if user_data is not None:
            self._values["user_data"] = user_data
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def data_disk_size(self) -> jsii.Number:
        """
        :Property: dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        """
        result = self._values.get("data_disk_size")
        assert result is not None, "Required property 'data_disk_size' is missing"
        return result

    @builtins.property
    def ens_region_id(self) -> builtins.str:
        """
        :Property: ensRegionId: ENS Region Id.
        """
        result = self._values.get("ens_region_id")
        assert result is not None, "Required property 'ens_region_id' is missing"
        return result

    @builtins.property
    def image_id(self) -> builtins.str:
        """
        :Property: imageId: Image ID to create ens instance.
        """
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return result

    @builtins.property
    def instance_type(self) -> builtins.str:
        """
        :Property: instanceType: ENS instance supported instance type, make sure it should be correct.
        """
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return result

    @builtins.property
    def period(self) -> jsii.Number:
        """
        :Property: period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        """
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return result

    @builtins.property
    def quantity(self) -> jsii.Number:
        """
        :Property: quantity: number of instances to create.
        """
        result = self._values.get("quantity")
        assert result is not None, "Required property 'quantity' is missing"
        return result

    @builtins.property
    def system_disk_size(self) -> jsii.Number:
        """
        :Property: systemDiskSize: Disk size of the system disk.
        """
        result = self._values.get("system_disk_size")
        assert result is not None, "Required property 'system_disk_size' is missing"
        return result

    @builtins.property
    def auto_renew(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        """
        result = self._values.get("auto_renew_period")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def ip_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        """
        result = self._values.get("ip_type")
        return result

    @builtins.property
    def key_pair_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPairName: SSH key pair name.
        """
        result = self._values.get("key_pair_name")
        return result

    @builtins.property
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
        """
        result = self._values.get("password")
        return result

    @builtins.property
    def payment_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: paymentType: Payment Type.only support value Subscription.
        """
        result = self._values.get("payment_type")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress:
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def user_data(self) -> typing.Optional[builtins.str]:
        """
        :Property: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        """
        result = self._values.get("user_data")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create ens instance.
        """
        result = self._values.get("v_switch_id")
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
    jsii_type="@alicloud/ros-cdk-ens.RosInstance",
):
    """A ROS template type:  ``ALIYUN::ENS::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ENS::Instance``.

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
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> typing.Any:
        """
        :Attribute: AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        """
        return jsii.get(self, "attrAutoRenew")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrAutoRenewPeriod")
    def attr_auto_renew_period(self) -> typing.Any:
        """
        :Attribute: AutoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        """
        return jsii.get(self, "attrAutoRenewPeriod")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDataDiskSize")
    def attr_data_disk_size(self) -> typing.Any:
        """
        :Attribute: DataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        """
        return jsii.get(self, "attrDataDiskSize")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEnsRegionId")
    def attr_ens_region_id(self) -> typing.Any:
        """
        :Attribute: EnsRegionId: ENS Region Id.
        """
        return jsii.get(self, "attrEnsRegionId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrImageId")
    def attr_image_id(self) -> typing.Any:
        """
        :Attribute: ImageId: Image ID to create ens instance.
        """
        return jsii.get(self, "attrImageId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: InstanceId.
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> typing.Any:
        """
        :Attribute: InstanceType: ENS instance supported instance type, make sure it should be correct.
        """
        return jsii.get(self, "attrInstanceType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInternetChargeType")
    def attr_internet_charge_type(self) -> typing.Any:
        """
        :Attribute: InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        """
        return jsii.get(self, "attrInternetChargeType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIpType")
    def attr_ip_type(self) -> typing.Any:
        """
        :Attribute: IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        """
        return jsii.get(self, "attrIpType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrKeyPairName")
    def attr_key_pair_name(self) -> typing.Any:
        """
        :Attribute: KeyPairName: SSH key pair name.
        """
        return jsii.get(self, "attrKeyPairName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> typing.Any:
        """
        :Attribute: PaymentType: Payment Type.only support value Subscription.
        """
        return jsii.get(self, "attrPaymentType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(self) -> typing.Any:
        """
        :Attribute: Period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        """
        return jsii.get(self, "attrPeriod")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPrivateIpAddress")
    def attr_private_ip_address(self) -> typing.Any:
        """
        :Attribute: PrivateIpAddress: Private IP for the instance created.
        """
        return jsii.get(self, "attrPrivateIpAddress")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPrivateIps")
    def attr_private_ips(self) -> typing.Any:
        """
        :Attribute: PrivateIps: Private IP
        """
        return jsii.get(self, "attrPrivateIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPublicIps")
    def attr_public_ips(self) -> typing.Any:
        """
        :Attribute: PublicIps: Public IP
        """
        return jsii.get(self, "attrPublicIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrQuantity")
    def attr_quantity(self) -> typing.Any:
        """
        :Attribute: Quantity: number of instances to create.
        """
        return jsii.get(self, "attrQuantity")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSystemDiskSize")
    def attr_system_disk_size(self) -> typing.Any:
        """
        :Attribute: SystemDiskSize: Disk size of the system disk.
        """
        return jsii.get(self, "attrSystemDiskSize")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUserData")
    def attr_user_data(self) -> typing.Any:
        """
        :Attribute: UserData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        """
        return jsii.get(self, "attrUserData")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> typing.Any:
        """
        :Attribute: VSwitchId: The vSwitch Id to create ens instance.
        """
        return jsii.get(self, "attrVSwitchId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dataDiskSize")
    def data_disk_size(self) -> jsii.Number:
        """
        :Property: dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        """
        return jsii.get(self, "dataDiskSize")

    @data_disk_size.setter # type: ignore
    def data_disk_size(self, value: jsii.Number) -> None:
        jsii.set(self, "dataDiskSize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ensRegionId")
    def ens_region_id(self) -> builtins.str:
        """
        :Property: ensRegionId: ENS Region Id.
        """
        return jsii.get(self, "ensRegionId")

    @ens_region_id.setter # type: ignore
    def ens_region_id(self, value: builtins.str) -> None:
        jsii.set(self, "ensRegionId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="imageId")
    def image_id(self) -> builtins.str:
        """
        :Property: imageId: Image ID to create ens instance.
        """
        return jsii.get(self, "imageId")

    @image_id.setter # type: ignore
    def image_id(self, value: builtins.str) -> None:
        jsii.set(self, "imageId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceType")
    def instance_type(self) -> builtins.str:
        """
        :Property: instanceType: ENS instance supported instance type, make sure it should be correct.
        """
        return jsii.get(self, "instanceType")

    @instance_type.setter # type: ignore
    def instance_type(self, value: builtins.str) -> None:
        jsii.set(self, "instanceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> jsii.Number:
        """
        :Property: period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: jsii.Number) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="quantity")
    def quantity(self) -> jsii.Number:
        """
        :Property: quantity: number of instances to create.
        """
        return jsii.get(self, "quantity")

    @quantity.setter # type: ignore
    def quantity(self, value: jsii.Number) -> None:
        jsii.set(self, "quantity", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="systemDiskSize")
    def system_disk_size(self) -> jsii.Number:
        """
        :Property: systemDiskSize: Disk size of the system disk.
        """
        return jsii.get(self, "systemDiskSize")

    @system_disk_size.setter # type: ignore
    def system_disk_size(self, value: jsii.Number) -> None:
        jsii.set(self, "systemDiskSize", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        """
        return jsii.get(self, "autoRenew")

    @auto_renew.setter # type: ignore
    def auto_renew(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        """
        return jsii.get(self, "autoRenewPeriod")

    @auto_renew_period.setter # type: ignore
    def auto_renew_period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        """
        return jsii.get(self, "internetChargeType")

    @internet_charge_type.setter # type: ignore
    def internet_charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ipType")
    def ip_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        """
        return jsii.get(self, "ipType")

    @ip_type.setter # type: ignore
    def ip_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "ipType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPairName: SSH key pair name.
        """
        return jsii.get(self, "keyPairName")

    @key_pair_name.setter # type: ignore
    def key_pair_name(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "keyPairName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="password")
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
        """
        return jsii.get(self, "password")

    @password.setter # type: ignore
    def password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="paymentType")
    def payment_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: paymentType: Payment Type.only support value Subscription.
        """
        return jsii.get(self, "paymentType")

    @payment_type.setter # type: ignore
    def payment_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "paymentType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress:
        """
        return jsii.get(self, "privateIpAddress")

    @private_ip_address.setter # type: ignore
    def private_ip_address(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "privateIpAddress", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="userData")
    def user_data(self) -> typing.Optional[builtins.str]:
        """
        :Property: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        """
        return jsii.get(self, "userData")

    @user_data.setter # type: ignore
    def user_data(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "userData", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create ens instance.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ens.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "data_disk_size": "dataDiskSize",
        "ens_region_id": "ensRegionId",
        "image_id": "imageId",
        "instance_type": "instanceType",
        "period": "period",
        "quantity": "quantity",
        "system_disk_size": "systemDiskSize",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "internet_charge_type": "internetChargeType",
        "ip_type": "ipType",
        "key_pair_name": "keyPairName",
        "password": "password",
        "payment_type": "paymentType",
        "private_ip_address": "privateIpAddress",
        "user_data": "userData",
        "v_switch_id": "vSwitchId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        data_disk_size: jsii.Number,
        ens_region_id: builtins.str,
        image_id: builtins.str,
        instance_type: builtins.str,
        period: jsii.Number,
        quantity: jsii.Number,
        system_disk_size: jsii.Number,
        auto_renew: typing.Optional[builtins.str] = None,
        auto_renew_period: typing.Optional[jsii.Number] = None,
        internet_charge_type: typing.Optional[builtins.str] = None,
        ip_type: typing.Optional[builtins.str] = None,
        key_pair_name: typing.Optional[builtins.str] = None,
        password: typing.Optional[builtins.str] = None,
        payment_type: typing.Optional[builtins.str] = None,
        private_ip_address: typing.Optional[builtins.str] = None,
        user_data: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ENS::Instance``.

        :param data_disk_size: 
        :param ens_region_id: 
        :param image_id: 
        :param instance_type: 
        :param period: 
        :param quantity: 
        :param system_disk_size: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param internet_charge_type: 
        :param ip_type: 
        :param key_pair_name: 
        :param password: 
        :param payment_type: 
        :param private_ip_address: 
        :param user_data: 
        :param v_switch_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "data_disk_size": data_disk_size,
            "ens_region_id": ens_region_id,
            "image_id": image_id,
            "instance_type": instance_type,
            "period": period,
            "quantity": quantity,
            "system_disk_size": system_disk_size,
        }
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if ip_type is not None:
            self._values["ip_type"] = ip_type
        if key_pair_name is not None:
            self._values["key_pair_name"] = key_pair_name
        if password is not None:
            self._values["password"] = password
        if payment_type is not None:
            self._values["payment_type"] = payment_type
        if private_ip_address is not None:
            self._values["private_ip_address"] = private_ip_address
        if user_data is not None:
            self._values["user_data"] = user_data
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def data_disk_size(self) -> jsii.Number:
        """
        :Property: dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        """
        result = self._values.get("data_disk_size")
        assert result is not None, "Required property 'data_disk_size' is missing"
        return result

    @builtins.property
    def ens_region_id(self) -> builtins.str:
        """
        :Property: ensRegionId: ENS Region Id.
        """
        result = self._values.get("ens_region_id")
        assert result is not None, "Required property 'ens_region_id' is missing"
        return result

    @builtins.property
    def image_id(self) -> builtins.str:
        """
        :Property: imageId: Image ID to create ens instance.
        """
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return result

    @builtins.property
    def instance_type(self) -> builtins.str:
        """
        :Property: instanceType: ENS instance supported instance type, make sure it should be correct.
        """
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return result

    @builtins.property
    def period(self) -> jsii.Number:
        """
        :Property: period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        """
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return result

    @builtins.property
    def quantity(self) -> jsii.Number:
        """
        :Property: quantity: number of instances to create.
        """
        result = self._values.get("quantity")
        assert result is not None, "Required property 'quantity' is missing"
        return result

    @builtins.property
    def system_disk_size(self) -> jsii.Number:
        """
        :Property: systemDiskSize: Disk size of the system disk.
        """
        result = self._values.get("system_disk_size")
        assert result is not None, "Required property 'system_disk_size' is missing"
        return result

    @builtins.property
    def auto_renew(self) -> typing.Optional[builtins.str]:
        """
        :Property: autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def auto_renew_period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        """
        result = self._values.get("auto_renew_period")
        return result

    @builtins.property
    def internet_charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        """
        result = self._values.get("internet_charge_type")
        return result

    @builtins.property
    def ip_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        """
        result = self._values.get("ip_type")
        return result

    @builtins.property
    def key_pair_name(self) -> typing.Optional[builtins.str]:
        """
        :Property: keyPairName: SSH key pair name.
        """
        result = self._values.get("key_pair_name")
        return result

    @builtins.property
    def password(self) -> typing.Optional[builtins.str]:
        """
        :Property: password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
        """
        result = self._values.get("password")
        return result

    @builtins.property
    def payment_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: paymentType: Payment Type.only support value Subscription.
        """
        result = self._values.get("payment_type")
        return result

    @builtins.property
    def private_ip_address(self) -> typing.Optional[builtins.str]:
        """
        :Property: privateIpAddress:
        """
        result = self._values.get("private_ip_address")
        return result

    @builtins.property
    def user_data(self) -> typing.Optional[builtins.str]:
        """
        :Property: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        """
        result = self._values.get("user_data")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create ens instance.
        """
        result = self._values.get("v_switch_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
]

publication.publish()
