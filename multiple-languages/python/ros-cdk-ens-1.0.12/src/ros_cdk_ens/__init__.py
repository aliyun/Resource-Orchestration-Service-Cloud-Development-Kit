'''
## Aliyun ROS ENS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ENS from '@alicloud/ros-cdk-ens';
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


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ens.Instance",
):
    '''A ROS resource type:  ``ALIYUN::ENS::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ENS::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd78668280ac4a751fc1d91a5df3e7ddaec0184a53360ed202e4decb745dfd34)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenew"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenewPeriod")
    def attr_auto_renew_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AutoRenewPeriod: The time period of auto renew.

        it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenewPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrDataDiskSize")
    def attr_data_disk_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DataDiskSize: Disk size of the system disk, range from 20 to 500 GB.

        If you specify with your own image, make sure the system disk size bigger than image size.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDataDiskSize"))

    @builtins.property
    @jsii.member(jsii_name="attrEnsRegionId")
    def attr_ens_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EnsRegionId: ENS Region Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnsRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrHostName")
    def attr_host_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HostName: The hostname of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostName"))

    @builtins.property
    @jsii.member(jsii_name="attrImageId")
    def attr_image_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ImageId: Image ID to create ens instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: InstanceId.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceName: Instance name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceType: ENS instance supported instance type, make sure it should be correct.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetChargeType")
    def attr_internet_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrIpType")
    def attr_ip_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpType"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairName")
    def attr_key_pair_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute KeyPairName: SSH key pair name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairName"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PaymentType: Payment Type.only support value Subscription.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Period: Prepaid time period.

        Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIpAddress")
    def attr_private_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateIpAddress: Private IP for the instance created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIps")
    def attr_private_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PrivateIps: Private IP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIps"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIps")
    def attr_public_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PublicIps: Public IP.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIps"))

    @builtins.property
    @jsii.member(jsii_name="attrQuantity")
    def attr_quantity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Quantity: number of instances to create.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQuantity"))

    @builtins.property
    @jsii.member(jsii_name="attrSystemDiskSize")
    def attr_system_disk_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SystemDiskSize: Disk size of the system disk.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSystemDiskSize"))

    @builtins.property
    @jsii.member(jsii_name="attrUniqueSuffix")
    def attr_unique_suffix(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.

        The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUniqueSuffix"))

    @builtins.property
    @jsii.member(jsii_name="attrUserData")
    def attr_user_data(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UserData: User data to pass to instance.

        [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserData"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: The vSwitch Id to create ens instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))


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
        "host_name": "hostName",
        "instance_name": "instanceName",
        "internet_charge_type": "internetChargeType",
        "ip_type": "ipType",
        "key_pair_name": "keyPairName",
        "password": "password",
        "payment_type": "paymentType",
        "private_ip_address": "privateIpAddress",
        "unique_suffix": "uniqueSuffix",
        "user_data": "userData",
        "v_switch_id": "vSwitchId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        data_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ens_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        quantity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        system_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        unique_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ENS::Instance``.

        :param data_disk_size: Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        :param ens_region_id: Property ensRegionId: ENS Region Id.
        :param image_id: Property imageId: Image ID to create ens instance.
        :param instance_type: Property instanceType: ENS instance supported instance type, make sure it should be correct.
        :param period: Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        :param quantity: Property quantity: number of instances to create.
        :param system_disk_size: Property systemDiskSize: Disk size of the system disk.
        :param auto_renew: Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        :param auto_renew_period: Property autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        :param host_name: Property hostName: The hostname of the instance.
        :param instance_name: Property instanceName: Instance name.
        :param internet_charge_type: Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        :param ip_type: Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        :param key_pair_name: Property keyPairName: SSH key pair name.
        :param password: Property password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
        :param payment_type: Property paymentType: Payment Type.only support value Subscription.
        :param private_ip_address: Property privateIpAddress: Private IP for the instance created.
        :param unique_suffix: Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values: true false Default value: false.
        :param user_data: Property userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        :param v_switch_id: Property vSwitchId: The vSwitch Id to create ens instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54f0fb5c98ac3b8e6fc63883261ef116484a4bbdefa1d85c350f3b5db3f08f3e)
            check_type(argname="argument data_disk_size", value=data_disk_size, expected_type=type_hints["data_disk_size"])
            check_type(argname="argument ens_region_id", value=ens_region_id, expected_type=type_hints["ens_region_id"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument quantity", value=quantity, expected_type=type_hints["quantity"])
            check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument ip_type", value=ip_type, expected_type=type_hints["ip_type"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument unique_suffix", value=unique_suffix, expected_type=type_hints["unique_suffix"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if host_name is not None:
            self._values["host_name"] = host_name
        if instance_name is not None:
            self._values["instance_name"] = instance_name
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
        if unique_suffix is not None:
            self._values["unique_suffix"] = unique_suffix
        if user_data is not None:
            self._values["user_data"] = user_data
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def data_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataDiskSize: Disk size of the system disk, range from 20 to 500 GB.

        If you specify with your own image, make sure the system disk size bigger than image size.
        '''
        result = self._values.get("data_disk_size")
        assert result is not None, "Required property 'data_disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ens_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ensRegionId: ENS Region Id.'''
        result = self._values.get("ens_region_id")
        assert result is not None, "Required property 'ens_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property imageId: Image ID to create ens instance.'''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceType: ENS instance supported instance type, make sure it should be correct.'''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property period: Prepaid time period.

        Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def quantity(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property quantity: number of instances to create.'''
        result = self._values.get("quantity")
        assert result is not None, "Required property 'quantity' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def system_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property systemDiskSize: Disk size of the system disk.'''
        result = self._values.get("system_disk_size")
        assert result is not None, "Required property 'system_disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.'''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: The time period of auto renew.

        it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property hostName: The hostname of the instance.'''
        result = self._values.get("host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceName: Instance name.'''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.'''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.'''
        result = self._values.get("ip_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property keyPairName: SSH key pair name.'''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property password: Password of created ens instance.

        Must contain at least 3 types of special character, lower character, upper character, number.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property paymentType: Payment Type.only support value Subscription.'''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateIpAddress: Private IP for the instance created.'''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def unique_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time.

        The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
        '''
        result = self._values.get("unique_suffix")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property userData: User data to pass to instance.

        [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The vSwitch Id to create ens instance.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ens.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::ENS::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ENS::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38b585a40f4c16a83fac978db38075c45e9407b5f2089f98310d758149c02242)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d53d9c47247113caf96c3f92bcecbf07ee3d48071858efdcf2c96ad1644ea7dc)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenew")
    def attr_auto_renew(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenew"))

    @builtins.property
    @jsii.member(jsii_name="attrAutoRenewPeriod")
    def attr_auto_renew_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AutoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAutoRenewPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrDataDiskSize")
    def attr_data_disk_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDataDiskSize"))

    @builtins.property
    @jsii.member(jsii_name="attrEnsRegionId")
    def attr_ens_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EnsRegionId: ENS Region Id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEnsRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrHostName")
    def attr_host_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HostName: The hostname of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHostName"))

    @builtins.property
    @jsii.member(jsii_name="attrImageId")
    def attr_image_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ImageId: Image ID to create ens instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrImageId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: InstanceId.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceName")
    def attr_instance_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceName: Instance name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceName"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceType")
    def attr_instance_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceType: ENS instance supported instance type, make sure it should be correct.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceType"))

    @builtins.property
    @jsii.member(jsii_name="attrInternetChargeType")
    def attr_internet_charge_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InternetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInternetChargeType"))

    @builtins.property
    @jsii.member(jsii_name="attrIpType")
    def attr_ip_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpType"))

    @builtins.property
    @jsii.member(jsii_name="attrKeyPairName")
    def attr_key_pair_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: KeyPairName: SSH key pair name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrKeyPairName"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: Payment Type.only support value Subscription.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrPeriod")
    def attr_period(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPeriod"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIpAddress")
    def attr_private_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateIpAddress: Private IP for the instance created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrPrivateIps")
    def attr_private_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PrivateIps: Private IP
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPrivateIps"))

    @builtins.property
    @jsii.member(jsii_name="attrPublicIps")
    def attr_public_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PublicIps: Public IP
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPublicIps"))

    @builtins.property
    @jsii.member(jsii_name="attrQuantity")
    def attr_quantity(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Quantity: number of instances to create.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrQuantity"))

    @builtins.property
    @jsii.member(jsii_name="attrSystemDiskSize")
    def attr_system_disk_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SystemDiskSize: Disk size of the system disk.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSystemDiskSize"))

    @builtins.property
    @jsii.member(jsii_name="attrUniqueSuffix")
    def attr_unique_suffix(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUniqueSuffix"))

    @builtins.property
    @jsii.member(jsii_name="attrUserData")
    def attr_user_data(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UserData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUserData"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: The vSwitch Id to create ens instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dataDiskSize")
    def data_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataDiskSize"))

    @data_disk_size.setter
    def data_disk_size(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90743b93605f49d869a3957cd1c6fe5aedb4d5372861f00254a8e65e1dda40a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23d55f792ff1702cb5e338701d274dacdf84baf3276c7750b307741cab5b613b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="ensRegionId")
    def ens_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ensRegionId: ENS Region Id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ensRegionId"))

    @ens_region_id.setter
    def ens_region_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3639b729a9e1ed724bb0e20d6eb0f0f1711798af5400ba3753cc9ba681ec12cb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ensRegionId", value)

    @builtins.property
    @jsii.member(jsii_name="imageId")
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: Image ID to create ens instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "imageId"))

    @image_id.setter
    def image_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__464bf3c276cbcd5ca245845e62094f43bef8ef835d9d4b06f01246383f9d23ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "imageId", value)

    @builtins.property
    @jsii.member(jsii_name="instanceType")
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceType: ENS instance supported instance type, make sure it should be correct.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceType"))

    @instance_type.setter
    def instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf667e5fbaf7fa4f331fc86bd8d71b964187d32020134f59c5bb6810884d3cab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2282e5e4f839d8d913be265d97fc0faa5a30ca45db395e65bb4625cd981c9366)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="quantity")
    def quantity(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: quantity: number of instances to create.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "quantity"))

    @quantity.setter
    def quantity(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8a4e588cdc34ca2fbb2293df792f6c9ba64aa847ad38a989605b0573cd57ad7e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "quantity", value)

    @builtins.property
    @jsii.member(jsii_name="systemDiskSize")
    def system_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: systemDiskSize: Disk size of the system disk.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "systemDiskSize"))

    @system_disk_size.setter
    def system_disk_size(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2fd60f79366aea57234f5c50d82b3d1d9d952bdd23c1075d9f159c3441d9685)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "systemDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__092039156fc1b814404f4fa7f476f53e9b8420d351b5a1296ffdea7f7b4a8e7e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__582d2764a400871e8fa58d66a1589cd21890c6d22ca090b00e9a0beb9ff68a01)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="hostName")
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostName: The hostname of the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "hostName"))

    @host_name.setter
    def host_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a83b94ebc672209ac4a225eac04e1f5543ccf1f841eaafbfc97c93a5fd7abe9a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "hostName", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: Instance name
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5feccd50453996f19eced134e5633678b65f1de98d2996b35231bb67e7af7e73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__571e9d3e058976fdda93ca291db5dcca7d65618c283e45e24510adc465bd64bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="ipType")
    def ip_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ipType"))

    @ip_type.setter
    def ip_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f656979f6b762ca670b51470e6c9e76fcd3976a9182c9975da6f0eb10728d5e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipType", value)

    @builtins.property
    @jsii.member(jsii_name="keyPairName")
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: SSH key pair name.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "keyPairName"))

    @key_pair_name.setter
    def key_pair_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc97589b9da6e7726ff4912de9a3dee84bf146d3aba2bf821b0eb8f6f75dfee0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "keyPairName", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f593bbc292ce8752f151e3fd68b69ff9fbe11e2366d5ee85fa6160b0216fe2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="paymentType")
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: Payment Type.only support value Subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "paymentType"))

    @payment_type.setter
    def payment_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0ed1ecba75626518e282959941642feecc59e2e39d0a970829da7a013d8ad6f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "paymentType", value)

    @builtins.property
    @jsii.member(jsii_name="privateIpAddress")
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: Private IP for the instance created.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateIpAddress"))

    @private_ip_address.setter
    def private_ip_address(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70d9565f11e01367a200103aee8caf8c46fa340bb69cbb85aff5e7eb6582ea9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateIpAddress", value)

    @builtins.property
    @jsii.member(jsii_name="uniqueSuffix")
    def unique_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "uniqueSuffix"))

    @unique_suffix.setter
    def unique_suffix(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84a795a6664c47a6a847197d06440b6e325901e7a5897dd7c2cc6ba250ae043a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "uniqueSuffix", value)

    @builtins.property
    @jsii.member(jsii_name="userData")
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "userData"))

    @user_data.setter
    def user_data(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44d23e12f101ef94bea8b554afd889cc35681b54020d92413ac37753bb478885)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userData", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create ens instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b536b76370cc75bb797a6f5771229ddeba4297a10aa5e7cd8d45b5d6618bdc6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
        "host_name": "hostName",
        "instance_name": "instanceName",
        "internet_charge_type": "internetChargeType",
        "ip_type": "ipType",
        "key_pair_name": "keyPairName",
        "password": "password",
        "payment_type": "paymentType",
        "private_ip_address": "privateIpAddress",
        "unique_suffix": "uniqueSuffix",
        "user_data": "userData",
        "v_switch_id": "vSwitchId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        data_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ens_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        quantity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        system_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        unique_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ENS::Instance``.

        :param data_disk_size: 
        :param ens_region_id: 
        :param image_id: 
        :param instance_type: 
        :param period: 
        :param quantity: 
        :param system_disk_size: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param host_name: 
        :param instance_name: 
        :param internet_charge_type: 
        :param ip_type: 
        :param key_pair_name: 
        :param password: 
        :param payment_type: 
        :param private_ip_address: 
        :param unique_suffix: 
        :param user_data: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72eb2c07a9575392116a7d08b09d3a91d220504cade0986e0be3bf5379cdf3cb)
            check_type(argname="argument data_disk_size", value=data_disk_size, expected_type=type_hints["data_disk_size"])
            check_type(argname="argument ens_region_id", value=ens_region_id, expected_type=type_hints["ens_region_id"])
            check_type(argname="argument image_id", value=image_id, expected_type=type_hints["image_id"])
            check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument quantity", value=quantity, expected_type=type_hints["quantity"])
            check_type(argname="argument system_disk_size", value=system_disk_size, expected_type=type_hints["system_disk_size"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument host_name", value=host_name, expected_type=type_hints["host_name"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument ip_type", value=ip_type, expected_type=type_hints["ip_type"])
            check_type(argname="argument key_pair_name", value=key_pair_name, expected_type=type_hints["key_pair_name"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument payment_type", value=payment_type, expected_type=type_hints["payment_type"])
            check_type(argname="argument private_ip_address", value=private_ip_address, expected_type=type_hints["private_ip_address"])
            check_type(argname="argument unique_suffix", value=unique_suffix, expected_type=type_hints["unique_suffix"])
            check_type(argname="argument user_data", value=user_data, expected_type=type_hints["user_data"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if host_name is not None:
            self._values["host_name"] = host_name
        if instance_name is not None:
            self._values["instance_name"] = instance_name
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
        if unique_suffix is not None:
            self._values["unique_suffix"] = unique_suffix
        if user_data is not None:
            self._values["user_data"] = user_data
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def data_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataDiskSize: Disk size of the system disk, range from 20 to 500 GB. If you specify with your own image, make sure the system disk size bigger than image size.
        '''
        result = self._values.get("data_disk_size")
        assert result is not None, "Required property 'data_disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ens_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ensRegionId: ENS Region Id.
        '''
        result = self._values.get("ens_region_id")
        assert result is not None, "Required property 'ens_region_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def image_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: imageId: Image ID to create ens instance.
        '''
        result = self._values.get("image_id")
        assert result is not None, "Required property 'image_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceType: ENS instance supported instance type, make sure it should be correct.
        '''
        result = self._values.get("instance_type")
        assert result is not None, "Required property 'instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12. Default value is 1.
        '''
        result = self._values.get("period")
        assert result is not None, "Required property 'period' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def quantity(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: quantity: number of instances to create.
        '''
        result = self._values.get("quantity")
        assert result is not None, "Required property 'quantity' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def system_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: systemDiskSize: Disk size of the system disk.
        '''
        result = self._values.get("system_disk_size")
        assert result is not None, "Required property 'system_disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Whether renew the fee automatically?it could be True,FalseDefault value is False.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenewPeriod: The time period of auto renew. it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def host_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: hostName: The hostname of the instance.
        '''
        result = self._values.get("host_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceName: Instance name
        '''
        result = self._values.get("instance_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetChargeType: Instance Charge type.it could be 95BandwidthByMonth, PayByBandwidth4thMonth.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ipType: ip type, It could be ipv4Andipv6,ipv4,ipv6.default value isi pv4.
        '''
        result = self._values.get("ip_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def key_pair_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: keyPairName: SSH key pair name.
        '''
        result = self._values.get("key_pair_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: Password of created ens instance. Must contain at least 3 types of special character, lower character, upper character, number.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def payment_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: paymentType: Payment Type.only support value Subscription.
        '''
        result = self._values.get("payment_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_ip_address(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateIpAddress: Private IP for the instance created.
        '''
        result = self._values.get("private_ip_address")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def unique_suffix(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: uniqueSuffix: Specifies whether to automatically append sequential suffixes to the hostnames specified by the HostName parameter and instance names specified by the InstanceName parameter when you create multiple instances at a time. The sequential suffix ranges from 001 to 999. Valid values:  true false Default value: false.
        '''
        result = self._values.get("unique_suffix")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def user_data(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: userData: User data to pass to instance. [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
        '''
        result = self._values.get("user_data")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The vSwitch Id to create ens instance.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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

def _typecheckingstub__cd78668280ac4a751fc1d91a5df3e7ddaec0184a53360ed202e4decb745dfd34(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54f0fb5c98ac3b8e6fc63883261ef116484a4bbdefa1d85c350f3b5db3f08f3e(
    *,
    data_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ens_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    quantity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    system_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    unique_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38b585a40f4c16a83fac978db38075c45e9407b5f2089f98310d758149c02242(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d53d9c47247113caf96c3f92bcecbf07ee3d48071858efdcf2c96ad1644ea7dc(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90743b93605f49d869a3957cd1c6fe5aedb4d5372861f00254a8e65e1dda40a6(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23d55f792ff1702cb5e338701d274dacdf84baf3276c7750b307741cab5b613b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3639b729a9e1ed724bb0e20d6eb0f0f1711798af5400ba3753cc9ba681ec12cb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__464bf3c276cbcd5ca245845e62094f43bef8ef835d9d4b06f01246383f9d23ed(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf667e5fbaf7fa4f331fc86bd8d71b964187d32020134f59c5bb6810884d3cab(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2282e5e4f839d8d913be265d97fc0faa5a30ca45db395e65bb4625cd981c9366(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8a4e588cdc34ca2fbb2293df792f6c9ba64aa847ad38a989605b0573cd57ad7e(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2fd60f79366aea57234f5c50d82b3d1d9d952bdd23c1075d9f159c3441d9685(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__092039156fc1b814404f4fa7f476f53e9b8420d351b5a1296ffdea7f7b4a8e7e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__582d2764a400871e8fa58d66a1589cd21890c6d22ca090b00e9a0beb9ff68a01(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a83b94ebc672209ac4a225eac04e1f5543ccf1f841eaafbfc97c93a5fd7abe9a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5feccd50453996f19eced134e5633678b65f1de98d2996b35231bb67e7af7e73(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__571e9d3e058976fdda93ca291db5dcca7d65618c283e45e24510adc465bd64bd(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f656979f6b762ca670b51470e6c9e76fcd3976a9182c9975da6f0eb10728d5e5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc97589b9da6e7726ff4912de9a3dee84bf146d3aba2bf821b0eb8f6f75dfee0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f593bbc292ce8752f151e3fd68b69ff9fbe11e2366d5ee85fa6160b0216fe2b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0ed1ecba75626518e282959941642feecc59e2e39d0a970829da7a013d8ad6f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70d9565f11e01367a200103aee8caf8c46fa340bb69cbb85aff5e7eb6582ea9c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84a795a6664c47a6a847197d06440b6e325901e7a5897dd7c2cc6ba250ae043a(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44d23e12f101ef94bea8b554afd889cc35681b54020d92413ac37753bb478885(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b536b76370cc75bb797a6f5771229ddeba4297a10aa5e7cd8d45b5d6618bdc6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72eb2c07a9575392116a7d08b09d3a91d220504cade0986e0be3bf5379cdf3cb(
    *,
    data_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ens_region_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    image_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    quantity: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    system_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    host_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key_pair_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    payment_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_ip_address: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    unique_suffix: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_data: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
