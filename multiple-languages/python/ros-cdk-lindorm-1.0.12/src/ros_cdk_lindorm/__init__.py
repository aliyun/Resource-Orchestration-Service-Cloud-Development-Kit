'''
## Aliyun ROS LINDORM Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as LINDORM from '@alicloud/ros-cdk-lindorm';
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
    jsii_type="@alicloud/ros-cdk-lindorm.Instance",
):
    '''A ROS resource type:  ``ALIYUN::Lindorm::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::Lindorm::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d61eaf41732706c8380f6e55fce64e05cd65474f8d6c806b89b3576ac06de1f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the Lindorm instance that is created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrJdbcUrlList")
    def attr_jdbc_url_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute JdbcUrlList: The list of the jdbc connection address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJdbcUrlList"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-lindorm.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "disk_category": "diskCategory",
        "instance_name": "instanceName",
        "vpc_id": "vpcId",
        "cold_storage": "coldStorage",
        "core_spec": "coreSpec",
        "filestore_num": "filestoreNum",
        "filestore_spec": "filestoreSpec",
        "instance_charge_type": "instanceChargeType",
        "instance_storage": "instanceStorage",
        "lindorm_num": "lindormNum",
        "lindorm_spec": "lindormSpec",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
        "security_ip_list": "securityIpList",
        "solr_num": "solrNum",
        "solr_spec": "solrSpec",
        "tsdb_num": "tsdbNum",
        "tsdb_spec": "tsdbSpec",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        disk_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cold_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        core_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filestore_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filestore_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lindorm_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lindorm_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        solr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        solr_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tsdb_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tsdb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Lindorm::Instance``.

        :param disk_category: Property diskCategory: The storage type of the instance. Valid values: cloud_efficiency: This instance uses the Standard type of storage. cloud_ssd: This instance uses the Performance type of storage. capacity_cloud_storage: This instance uses the Capacity type of storage. local_ssd_pro: This instance uses local SSDs. local_hdd_pro: This instance uses local HDDs.
        :param instance_name: Property instanceName: The name of the instance that you want to create.
        :param vpc_id: Property vpcId: The ID of the VPC in which you want to create the instance.
        :param cold_storage: Property coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
        :param core_spec: Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro. When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values: lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory. lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory. lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory. lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory. When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values: lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory. lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory. lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
        :param filestore_num: Property filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter. If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60. If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
        :param filestore_spec: Property filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        :param instance_charge_type: Property instanceChargeType: The billing method of the instance you want to create. Valid values: PREPAY: subscription. POSTPAY: pay-as-you-go. Default value: POSTPAY
        :param instance_storage: Property instanceStorage: The storage capacity of the instance you want to create. Unit: GB.
        :param lindorm_num: Property lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter. If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90. If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400. ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
        :param lindorm_spec: Property lindormSpec: The specification of LindormTable nodes in the instance. Valid values: lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory. lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory. lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory. lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory. lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory. lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory. lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory. lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
        :param period: Property period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter. If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36. If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3. NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        :param period_unit: Property periodUnit: The period based on which you are charged for the instance. Valid values: Month: You are charged for the instance on a monthly basis. Year: You are charged for the instance on a yearly basis. NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
        :param security_ip_list: Property securityIpList: The ip white list of instance.
        :param solr_num: Property solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
        :param solr_spec: Property solrSpec: The specification of the LindormSearch nodes in the instance. Valid values: lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory. lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory. lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory. lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        :param tsdb_num: Property tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter. If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24. If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
        :param tsdb_spec: Property tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values: lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory. lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory. lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory. lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.
        :param zone_id: Property zoneId: The ID of the zone in which you want to create the instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccd9c78cafd91c7c644f059a6f3ca0d97ce09800ea122f0813f8135e0c40680c)
            check_type(argname="argument disk_category", value=disk_category, expected_type=type_hints["disk_category"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument cold_storage", value=cold_storage, expected_type=type_hints["cold_storage"])
            check_type(argname="argument core_spec", value=core_spec, expected_type=type_hints["core_spec"])
            check_type(argname="argument filestore_num", value=filestore_num, expected_type=type_hints["filestore_num"])
            check_type(argname="argument filestore_spec", value=filestore_spec, expected_type=type_hints["filestore_spec"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument instance_storage", value=instance_storage, expected_type=type_hints["instance_storage"])
            check_type(argname="argument lindorm_num", value=lindorm_num, expected_type=type_hints["lindorm_num"])
            check_type(argname="argument lindorm_spec", value=lindorm_spec, expected_type=type_hints["lindorm_spec"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument solr_num", value=solr_num, expected_type=type_hints["solr_num"])
            check_type(argname="argument solr_spec", value=solr_spec, expected_type=type_hints["solr_spec"])
            check_type(argname="argument tsdb_num", value=tsdb_num, expected_type=type_hints["tsdb_num"])
            check_type(argname="argument tsdb_spec", value=tsdb_spec, expected_type=type_hints["tsdb_spec"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "disk_category": disk_category,
            "instance_name": instance_name,
            "vpc_id": vpc_id,
        }
        if cold_storage is not None:
            self._values["cold_storage"] = cold_storage
        if core_spec is not None:
            self._values["core_spec"] = core_spec
        if filestore_num is not None:
            self._values["filestore_num"] = filestore_num
        if filestore_spec is not None:
            self._values["filestore_spec"] = filestore_spec
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_storage is not None:
            self._values["instance_storage"] = instance_storage
        if lindorm_num is not None:
            self._values["lindorm_num"] = lindorm_num
        if lindorm_spec is not None:
            self._values["lindorm_spec"] = lindorm_spec
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if solr_num is not None:
            self._values["solr_num"] = solr_num
        if solr_spec is not None:
            self._values["solr_spec"] = solr_spec
        if tsdb_num is not None:
            self._values["tsdb_num"] = tsdb_num
        if tsdb_spec is not None:
            self._values["tsdb_spec"] = tsdb_spec
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def disk_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property diskCategory: The storage type of the instance.

        Valid values:
        cloud_efficiency: This instance uses the Standard type of storage.
        cloud_ssd: This instance uses the Performance type of storage.
        capacity_cloud_storage: This instance uses the Capacity type of storage.
        local_ssd_pro: This instance uses local SSDs.
        local_hdd_pro: This instance uses local HDDs.
        '''
        result = self._values.get("disk_category")
        assert result is not None, "Required property 'disk_category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceName: The name of the instance that you want to create.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the VPC in which you want to create the instance.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cold_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property coldStorage: The cold storage capacity of the instance.

        By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
        '''
        result = self._values.get("cold_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def core_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.

        When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
        lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
        When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
        lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
        '''
        result = self._values.get("core_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filestore_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property filestoreNum: The number of LindormDFS nodes in the instance.

        The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
        '''
        result = self._values.get("filestore_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filestore_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property filestoreSpec: The specification of LindormDFS nodes in the instance.

        Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        '''
        result = self._values.get("filestore_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: The billing method of the instance you want to create.

        Valid values:
        PREPAY: subscription.
        POSTPAY: pay-as-you-go.
        Default value: POSTPAY
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceStorage: The storage capacity of the instance you want to create.

        Unit: GB.
        '''
        result = self._values.get("instance_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lindorm_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lindormNum: The number of LindormTable nodes in the instance.

        The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
        ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
        '''
        result = self._values.get("lindorm_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lindorm_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lindormSpec: The specification of LindormTable nodes in the instance.

        Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
        '''
        result = self._values.get("lindorm_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the instance.

        The valid values of this parameter depend on the value of the PeriodUnit parameter.
        If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
        If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The period based on which you are charged for the instance.

        Valid values:
        Month: You are charged for the instance on a monthly basis.
        Year: You are charged for the instance on a yearly basis.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property securityIpList: The ip white list of instance.'''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def solr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property solrNum: The number of LindormSearch nodes in the instance.

        Valid values: integers from 0 to 60.
        '''
        result = self._values.get("solr_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def solr_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property solrSpec: The specification of the LindormSearch nodes in the instance.

        Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        result = self._values.get("solr_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tsdb_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tsdbNum: The number of the LindormTSDB nodes in the instance.

        The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
        '''
        result = self._values.get("tsdb_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tsdb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tsdbSpec: The specification of the LindormTSDB nodes in the instance.

        Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        result = self._values.get("tsdb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property zoneId: The ID of the zone in which you want to create the instance.'''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MultiZoneInstance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-lindorm.MultiZoneInstance",
):
    '''A ROS resource type:  ``ALIYUN::Lindorm::MultiZoneInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MultiZoneInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::Lindorm::MultiZoneInstance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9a0f5b65b46ee78707342bf887b5789bf147859442e19eb9b455a818705ea2f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the Lindorm instance that is created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrJdbcUrlList")
    def attr_jdbc_url_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute JdbcUrlList: The list of the jdbc connection address.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJdbcUrlList"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-lindorm.MultiZoneInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "disk_category": "diskCategory",
        "instance_name": "instanceName",
        "vpc_id": "vpcId",
        "arbiter_v_switch_id": "arbiterVSwitchId",
        "arbiter_zone_id": "arbiterZoneId",
        "cold_storage": "coldStorage",
        "core_single_storage": "coreSingleStorage",
        "core_spec": "coreSpec",
        "filestore_num": "filestoreNum",
        "filestore_spec": "filestoreSpec",
        "instance_charge_type": "instanceChargeType",
        "lindorm_num": "lindormNum",
        "lindorm_spec": "lindormSpec",
        "log_disk_category": "logDiskCategory",
        "log_num": "logNum",
        "log_single_storage": "logSingleStorage",
        "log_spec": "logSpec",
        "multi_zone_combination": "multiZoneCombination",
        "period": "period",
        "period_unit": "periodUnit",
        "primary_v_switch_id": "primaryVSwitchId",
        "primary_zone_id": "primaryZoneId",
        "resource_group_id": "resourceGroupId",
        "security_ip_list": "securityIpList",
        "solr_num": "solrNum",
        "solr_spec": "solrSpec",
        "standby_v_switch_id": "standbyVSwitchId",
        "standby_zone_id": "standbyZoneId",
        "tsdb_num": "tsdbNum",
        "tsdb_spec": "tsdbSpec",
    },
)
class MultiZoneInstanceProps:
    def __init__(
        self,
        *,
        disk_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        arbiter_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        arbiter_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cold_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        core_single_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        core_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filestore_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filestore_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lindorm_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lindorm_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_single_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_zone_combination: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        primary_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        primary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        solr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        solr_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        standby_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        standby_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tsdb_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tsdb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Lindorm::MultiZoneInstance``.

        :param disk_category: Property diskCategory: The storage type of the instance. Valid values: cloud_efficiency: This instance uses the Standard type of storage. cloud_ssd: This instance uses the Performance type of storage. capacity_cloud_storage: This instance uses the Capacity type of storage. local_ssd_pro: This instance uses local SSDs. local_hdd_pro: This instance uses local HDDs.
        :param instance_name: Property instanceName: The name of the instance that you want to create.
        :param vpc_id: Property vpcId: The ID of the VPC in which you want to create the instance.
        :param arbiter_v_switch_id: Property arbiterVSwitchId: The ID of the vSwitch that is specified for the zone for the coordinate node of the instance. The vSwitch must be deployed in the zone specified by the ArbiterZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        :param arbiter_zone_id: Property arbiterZoneId: The ID of the zone for the coordinate node of the instance. **This parameter is required if you want to create a multi-zone instance.
        :param cold_storage: Property coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
        :param core_single_storage: Property coreSingleStorage: The storage capacity of the disk of a single core node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        :param core_spec: Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro. When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values: lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory. lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory. lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory. lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory. When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values: lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory. lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory. lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
        :param filestore_num: Property filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter. If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60. If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
        :param filestore_spec: Property filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        :param instance_charge_type: Property instanceChargeType: The billing method of the instance you want to create. Valid values: PREPAY: subscription. POSTPAY: pay-as-you-go. Default value: POSTPAY
        :param lindorm_num: Property lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter. If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90. If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400. ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
        :param lindorm_spec: Property lindormSpec: The specification of LindormTable nodes in the instance. Valid values: lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory. lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory. lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory. lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory. lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory. lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory. lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory. lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
        :param log_disk_category: Property logDiskCategory: The disk type of the log nodes. Valid values: cloud_efficiency、cloud_essd. This parameter is required if you want to create a multi-zone instance.
        :param log_num: Property logNum: The number of the log nodes. Valid values: 4 to 400. **This parameter is required if you want to create a multi-zone instance.
        :param log_single_storage: Property logSingleStorage: The storage capacity of the disk of a single log node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        :param log_spec: Property logSpec: The type of the log nodes. Valid values: lindorm.sn1.large: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory. lindorm.sn1.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory. **This parameter is required if you want to create a multi-zone instance.
        :param multi_zone_combination: Property multiZoneCombination: The combinations of zones that are available for the multi-zone instance. You can go to the purchase page of Lindorm to view the supported zone combinations. ap-southeast-5abc-aliyun: Zone A+B+C in the Indonesia (Jakarta) region. cn-hangzhou-ehi-aliyun: Zone E+H+I in the China (Hangzhou) region. cn-beijing-acd-aliyun: Zone A+C+D in the China (Beijing) region. ap-southeast-1-abc-aliyun: Zone A+B+C in the Singapore region. cn-zhangjiakou-abc-aliyun: Zone A+B+C in the China (Zhangjiakou) region. cn-shanghai-efg-aliyun: Zone E+F+G in the China (Shanghai) region. cn-shanghai-abd-aliyun: Zone A+B+D in the China (Shanghai) region. cn-hangzhou-bef-aliyun: Zone B+E+F in the China (Hangzhou) region. cn-hangzhou-bce-aliyun: Zone B+C+E in the China (Hangzhou) region. cn-beijing-fgh-aliyun: Zone F+G+H in the China (Beijing) region. cn-shenzhen-abc-aliyun: Zone A+B+C in the China (Shenzhen) region. **This parameter is required if you want to create a multi-zone instance.
        :param period: Property period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter. If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36. If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3. NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        :param period_unit: Property periodUnit: The period based on which you are charged for the instance. Valid values: Month: You are charged for the instance on a monthly basis. Year: You are charged for the instance on a yearly basis. NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        :param primary_v_switch_id: Property primaryVSwitchId: For multiple available regions, the virtual switch ID of the main available area must be under the available area corresponding to the Primaryzoneid.If you need to create a multi -available area example, this parameter must be filled.
        :param primary_zone_id: Property primaryZoneId: For many available zone instances, the available area ID of the main available area.If you need to create a multi -available area example, this parameter must be filled.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
        :param security_ip_list: Property securityIpList: The ip white list of instance.
        :param solr_num: Property solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
        :param solr_spec: Property solrSpec: The specification of the LindormSearch nodes in the instance. Valid values: lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory. lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory. lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory. lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        :param standby_v_switch_id: Property standbyVSwitchId: The ID of the vSwitch that is specified for the secondary zone of the instance. The vSwitch must be deployed in the zone specified by the StandbyZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        :param standby_zone_id: Property standbyZoneId: The ID of the secondary zone of the instance. **This parameter is required if you want to create a multi-zone instance.
        :param tsdb_num: Property tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter. If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24. If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
        :param tsdb_spec: Property tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values: lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory. lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory. lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory. lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26dc8ab7d23f58bb8f757e018142fdce047c83bfa1362bce523a9f6fcfdecf44)
            check_type(argname="argument disk_category", value=disk_category, expected_type=type_hints["disk_category"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument arbiter_v_switch_id", value=arbiter_v_switch_id, expected_type=type_hints["arbiter_v_switch_id"])
            check_type(argname="argument arbiter_zone_id", value=arbiter_zone_id, expected_type=type_hints["arbiter_zone_id"])
            check_type(argname="argument cold_storage", value=cold_storage, expected_type=type_hints["cold_storage"])
            check_type(argname="argument core_single_storage", value=core_single_storage, expected_type=type_hints["core_single_storage"])
            check_type(argname="argument core_spec", value=core_spec, expected_type=type_hints["core_spec"])
            check_type(argname="argument filestore_num", value=filestore_num, expected_type=type_hints["filestore_num"])
            check_type(argname="argument filestore_spec", value=filestore_spec, expected_type=type_hints["filestore_spec"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument lindorm_num", value=lindorm_num, expected_type=type_hints["lindorm_num"])
            check_type(argname="argument lindorm_spec", value=lindorm_spec, expected_type=type_hints["lindorm_spec"])
            check_type(argname="argument log_disk_category", value=log_disk_category, expected_type=type_hints["log_disk_category"])
            check_type(argname="argument log_num", value=log_num, expected_type=type_hints["log_num"])
            check_type(argname="argument log_single_storage", value=log_single_storage, expected_type=type_hints["log_single_storage"])
            check_type(argname="argument log_spec", value=log_spec, expected_type=type_hints["log_spec"])
            check_type(argname="argument multi_zone_combination", value=multi_zone_combination, expected_type=type_hints["multi_zone_combination"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument primary_v_switch_id", value=primary_v_switch_id, expected_type=type_hints["primary_v_switch_id"])
            check_type(argname="argument primary_zone_id", value=primary_zone_id, expected_type=type_hints["primary_zone_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument solr_num", value=solr_num, expected_type=type_hints["solr_num"])
            check_type(argname="argument solr_spec", value=solr_spec, expected_type=type_hints["solr_spec"])
            check_type(argname="argument standby_v_switch_id", value=standby_v_switch_id, expected_type=type_hints["standby_v_switch_id"])
            check_type(argname="argument standby_zone_id", value=standby_zone_id, expected_type=type_hints["standby_zone_id"])
            check_type(argname="argument tsdb_num", value=tsdb_num, expected_type=type_hints["tsdb_num"])
            check_type(argname="argument tsdb_spec", value=tsdb_spec, expected_type=type_hints["tsdb_spec"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "disk_category": disk_category,
            "instance_name": instance_name,
            "vpc_id": vpc_id,
        }
        if arbiter_v_switch_id is not None:
            self._values["arbiter_v_switch_id"] = arbiter_v_switch_id
        if arbiter_zone_id is not None:
            self._values["arbiter_zone_id"] = arbiter_zone_id
        if cold_storage is not None:
            self._values["cold_storage"] = cold_storage
        if core_single_storage is not None:
            self._values["core_single_storage"] = core_single_storage
        if core_spec is not None:
            self._values["core_spec"] = core_spec
        if filestore_num is not None:
            self._values["filestore_num"] = filestore_num
        if filestore_spec is not None:
            self._values["filestore_spec"] = filestore_spec
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if lindorm_num is not None:
            self._values["lindorm_num"] = lindorm_num
        if lindorm_spec is not None:
            self._values["lindorm_spec"] = lindorm_spec
        if log_disk_category is not None:
            self._values["log_disk_category"] = log_disk_category
        if log_num is not None:
            self._values["log_num"] = log_num
        if log_single_storage is not None:
            self._values["log_single_storage"] = log_single_storage
        if log_spec is not None:
            self._values["log_spec"] = log_spec
        if multi_zone_combination is not None:
            self._values["multi_zone_combination"] = multi_zone_combination
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if primary_v_switch_id is not None:
            self._values["primary_v_switch_id"] = primary_v_switch_id
        if primary_zone_id is not None:
            self._values["primary_zone_id"] = primary_zone_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if solr_num is not None:
            self._values["solr_num"] = solr_num
        if solr_spec is not None:
            self._values["solr_spec"] = solr_spec
        if standby_v_switch_id is not None:
            self._values["standby_v_switch_id"] = standby_v_switch_id
        if standby_zone_id is not None:
            self._values["standby_zone_id"] = standby_zone_id
        if tsdb_num is not None:
            self._values["tsdb_num"] = tsdb_num
        if tsdb_spec is not None:
            self._values["tsdb_spec"] = tsdb_spec

    @builtins.property
    def disk_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property diskCategory: The storage type of the instance.

        Valid values:
        cloud_efficiency: This instance uses the Standard type of storage.
        cloud_ssd: This instance uses the Performance type of storage.
        capacity_cloud_storage: This instance uses the Capacity type of storage.
        local_ssd_pro: This instance uses local SSDs.
        local_hdd_pro: This instance uses local HDDs.
        '''
        result = self._values.get("disk_category")
        assert result is not None, "Required property 'disk_category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceName: The name of the instance that you want to create.'''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of the VPC in which you want to create the instance.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def arbiter_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property arbiterVSwitchId: The ID of the vSwitch that is specified for the zone for the coordinate node of the instance.

        The vSwitch must be deployed in the zone specified by the ArbiterZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("arbiter_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def arbiter_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property arbiterZoneId: The ID of the zone for the coordinate node of the instance.

        **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("arbiter_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cold_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property coldStorage: The cold storage capacity of the instance.

        By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
        '''
        result = self._values.get("cold_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def core_single_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property coreSingleStorage: The storage capacity of the disk of a single core node.

        Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("core_single_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def core_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.

        When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
        lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
        When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
        lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
        '''
        result = self._values.get("core_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filestore_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property filestoreNum: The number of LindormDFS nodes in the instance.

        The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
        '''
        result = self._values.get("filestore_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filestore_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property filestoreSpec: The specification of LindormDFS nodes in the instance.

        Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        '''
        result = self._values.get("filestore_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: The billing method of the instance you want to create.

        Valid values:
        PREPAY: subscription.
        POSTPAY: pay-as-you-go.
        Default value: POSTPAY
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lindorm_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lindormNum: The number of LindormTable nodes in the instance.

        The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
        ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
        '''
        result = self._values.get("lindorm_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lindorm_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lindormSpec: The specification of LindormTable nodes in the instance.

        Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
        '''
        result = self._values.get("lindorm_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logDiskCategory: The disk type of the log nodes.

        Valid values:
        cloud_efficiency、cloud_essd.
        This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("log_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logNum: The number of the log nodes.

        Valid values: 4 to 400. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("log_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_single_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logSingleStorage: The storage capacity of the disk of a single log node.

        Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("log_single_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property logSpec: The type of the log nodes.

        Valid values:
        lindorm.sn1.large: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        lindorm.sn1.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("log_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_zone_combination(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property multiZoneCombination: The combinations of zones that are available for the multi-zone instance.

        You can go to the purchase page of Lindorm to view the supported zone combinations.
        ap-southeast-5abc-aliyun: Zone A+B+C in the Indonesia (Jakarta) region.
        cn-hangzhou-ehi-aliyun: Zone E+H+I in the China (Hangzhou) region.
        cn-beijing-acd-aliyun: Zone A+C+D in the China (Beijing) region.
        ap-southeast-1-abc-aliyun: Zone A+B+C in the Singapore region.
        cn-zhangjiakou-abc-aliyun: Zone A+B+C in the China (Zhangjiakou) region.
        cn-shanghai-efg-aliyun: Zone E+F+G in the China (Shanghai) region.
        cn-shanghai-abd-aliyun: Zone A+B+D in the China (Shanghai) region.
        cn-hangzhou-bef-aliyun: Zone B+E+F in the China (Hangzhou) region.
        cn-hangzhou-bce-aliyun: Zone B+C+E in the China (Hangzhou) region.
        cn-beijing-fgh-aliyun: Zone F+G+H in the China (Beijing) region.
        cn-shenzhen-abc-aliyun: Zone A+B+C in the China (Shenzhen) region.
        **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("multi_zone_combination")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period of the instance.

        The valid values of this parameter depend on the value of the PeriodUnit parameter.
        If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
        If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The period based on which you are charged for the instance.

        Valid values:
        Month: You are charged for the instance on a monthly basis.
        Year: You are charged for the instance on a yearly basis.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def primary_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property primaryVSwitchId: For multiple available regions, the virtual switch ID of the main available area must be under the available area corresponding to the Primaryzoneid.If you need to create a multi -available area example, this parameter must be filled.'''
        result = self._values.get("primary_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def primary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property primaryZoneId: For many available zone instances, the available area ID of the main available area.If you need to create a multi -available area example, this parameter must be filled.'''
        result = self._values.get("primary_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property securityIpList: The ip white list of instance.'''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def solr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property solrNum: The number of LindormSearch nodes in the instance.

        Valid values: integers from 0 to 60.
        '''
        result = self._values.get("solr_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def solr_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property solrSpec: The specification of the LindormSearch nodes in the instance.

        Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        result = self._values.get("solr_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def standby_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property standbyVSwitchId: The ID of the vSwitch that is specified for the secondary zone of the instance.

        The vSwitch must be deployed in the zone specified by the StandbyZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("standby_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def standby_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property standbyZoneId: The ID of the secondary zone of the instance.

        **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("standby_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tsdb_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tsdbNum: The number of the LindormTSDB nodes in the instance.

        The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
        '''
        result = self._values.get("tsdb_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tsdb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tsdbSpec: The specification of the LindormTSDB nodes in the instance.

        Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        result = self._values.get("tsdb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MultiZoneInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-lindorm.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::Lindorm::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::Lindorm::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44c2aef5450c841af44256a0fa84092e35023aa91ea2a17b4f43b5fa5b9ea2ab)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bd071a2fafc02eceb3114f8af8404df995b06e1c49ba24064e5e3067ae83eb63)
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
        :Attribute: InstanceId: The ID of the Lindorm instance that is created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrJdbcUrlList")
    def attr_jdbc_url_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: JdbcUrlList: The list of the jdbc connection address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJdbcUrlList"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="diskCategory")
    def disk_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        diskCategory: The storage type of the instance. Valid values:
        cloud_efficiency: This instance uses the Standard type of storage.
        cloud_ssd: This instance uses the Performance type of storage.
        capacity_cloud_storage: This instance uses the Capacity type of storage.
        local_ssd_pro: This instance uses local SSDs.
        local_hdd_pro: This instance uses local HDDs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "diskCategory"))

    @disk_category.setter
    def disk_category(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4fb6bc51426086961dd273af3ce208c76fb4048e5e77210a09bbe41cfc986c5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__49b34e6506f1947fc02b19007358fd4f4eb8dd546b25ff5f11f54065709ce658)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the instance that you want to create.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c8570d1ba12aa025d1d5b10cd582b23efd77b6875de5abe9e84725fd6e78f181)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC in which you want to create the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f257b77ee23d9760924ddce88b6057bf774d21dc7e1d29a3c048bfaa08b1a939)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="coldStorage")
    def cold_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "coldStorage"))

    @cold_storage.setter
    def cold_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3a8f8ec9300ba7c0d41ba55344d85fdfeedc447e237a8395028b6df0289904f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coldStorage", value)

    @builtins.property
    @jsii.member(jsii_name="coreSpec")
    def core_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
        When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
        lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
        When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
        lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "coreSpec"))

    @core_spec.setter
    def core_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ccd84f9343f8ca1836d8a17e77e61094852952c4badb7fb6f6687708573cd9c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coreSpec", value)

    @builtins.property
    @jsii.member(jsii_name="filestoreNum")
    def filestore_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "filestoreNum"))

    @filestore_num.setter
    def filestore_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7351ed9a14b911a2a1c6e2e76455f094d9fdc3016a9fafc52b1439d7d44739bd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filestoreNum", value)

    @builtins.property
    @jsii.member(jsii_name="filestoreSpec")
    def filestore_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "filestoreSpec"))

    @filestore_spec.setter
    def filestore_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3f1820fc4a9f1ab669eaa98370089c8c4306c1ae44b4bf2364acbda63c56322)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filestoreSpec", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instance you want to create. Valid values:
        PREPAY: subscription.
        POSTPAY: pay-as-you-go.
        Default value: POSTPAY
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f483a58eb795ba0010a5e1205fd49e6e37f427c83ac11763e8ae51cb93cdf748)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="instanceStorage")
    def instance_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceStorage: The storage capacity of the instance you want to create. Unit: GB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceStorage"))

    @instance_storage.setter
    def instance_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0ae7d34c457d7d79b1c3171b5c332ca73291c24e441dad376b225ffbdbe12d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceStorage", value)

    @builtins.property
    @jsii.member(jsii_name="lindormNum")
    def lindorm_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
        ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lindormNum"))

    @lindorm_num.setter
    def lindorm_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1be62674a615e0663d21112b1ea1257fb9bc34ed3c817eb58c980c8b427d2707)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lindormNum", value)

    @builtins.property
    @jsii.member(jsii_name="lindormSpec")
    def lindorm_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lindormSpec"))

    @lindorm_spec.setter
    def lindorm_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__678f89ad35fcc0e3a0cc2b5273d41ad1068362f74d29008593a7434bad2a3d4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lindormSpec", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
        If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
        If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a378cfb67f4f62f264de54a061ab4b5af3c54a248e59e4325c6139bc9edcda16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The period based on which you are charged for the instance. Valid values:
        Month: You are charged for the instance on a monthly basis.
        Year: You are charged for the instance on a yearly basis.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f2eb8fc51388f1a6103d19f02bac42a9468555e2295b28a935405653f286f4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__75047d8c5de62f4e70507c63cd7c788627f7b697434fab6a1e42a7ff3719a06f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityIpList: The ip white list of instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4636a8d4c963af12c7e51d35cf6f72ecc3622051ea21cc2da0388efa581688ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)

    @builtins.property
    @jsii.member(jsii_name="solrNum")
    def solr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "solrNum"))

    @solr_num.setter
    def solr_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78efd7d5eabd49c48a5836b2a9530e487d26316c3fe85655f7b1a44908753b5c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "solrNum", value)

    @builtins.property
    @jsii.member(jsii_name="solrSpec")
    def solr_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "solrSpec"))

    @solr_spec.setter
    def solr_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7050bded188f218006bc64f861a891922641755eec0f856c8a74884c27b636bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "solrSpec", value)

    @builtins.property
    @jsii.member(jsii_name="tsdbNum")
    def tsdb_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tsdbNum"))

    @tsdb_num.setter
    def tsdb_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5871cf034970d0c27561a3ddcbdffe693acb6009b28ce5c2019db28969b89eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tsdbNum", value)

    @builtins.property
    @jsii.member(jsii_name="tsdbSpec")
    def tsdb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tsdbSpec"))

    @tsdb_spec.setter
    def tsdb_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fab6233a734dc447ba67d4d89a3cea4fe76a00d5e9b39b97fb4ec2463f432603)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tsdbSpec", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch to which you want the instance to connect.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4536a3c3959ced71c3f52673462c513a2d8edc5f25691644653400a37b58710e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone in which you want to create the instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d565ad4f25c76b1cdeeae83b128003fa8ae5cf3306ebe3f8d9e2382d0d4aea40)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-lindorm.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "disk_category": "diskCategory",
        "instance_name": "instanceName",
        "vpc_id": "vpcId",
        "cold_storage": "coldStorage",
        "core_spec": "coreSpec",
        "filestore_num": "filestoreNum",
        "filestore_spec": "filestoreSpec",
        "instance_charge_type": "instanceChargeType",
        "instance_storage": "instanceStorage",
        "lindorm_num": "lindormNum",
        "lindorm_spec": "lindormSpec",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
        "security_ip_list": "securityIpList",
        "solr_num": "solrNum",
        "solr_spec": "solrSpec",
        "tsdb_num": "tsdbNum",
        "tsdb_spec": "tsdbSpec",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        disk_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        cold_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        core_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filestore_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filestore_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lindorm_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lindorm_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        solr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        solr_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tsdb_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tsdb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Lindorm::Instance``.

        :param disk_category: 
        :param instance_name: 
        :param vpc_id: 
        :param cold_storage: 
        :param core_spec: 
        :param filestore_num: 
        :param filestore_spec: 
        :param instance_charge_type: 
        :param instance_storage: 
        :param lindorm_num: 
        :param lindorm_spec: 
        :param period: 
        :param period_unit: 
        :param resource_group_id: 
        :param security_ip_list: 
        :param solr_num: 
        :param solr_spec: 
        :param tsdb_num: 
        :param tsdb_spec: 
        :param v_switch_id: 
        :param zone_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a57d16250ebff774e42262d8e93442c4bbc789278542c5c03b635ac424b1f47e)
            check_type(argname="argument disk_category", value=disk_category, expected_type=type_hints["disk_category"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument cold_storage", value=cold_storage, expected_type=type_hints["cold_storage"])
            check_type(argname="argument core_spec", value=core_spec, expected_type=type_hints["core_spec"])
            check_type(argname="argument filestore_num", value=filestore_num, expected_type=type_hints["filestore_num"])
            check_type(argname="argument filestore_spec", value=filestore_spec, expected_type=type_hints["filestore_spec"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument instance_storage", value=instance_storage, expected_type=type_hints["instance_storage"])
            check_type(argname="argument lindorm_num", value=lindorm_num, expected_type=type_hints["lindorm_num"])
            check_type(argname="argument lindorm_spec", value=lindorm_spec, expected_type=type_hints["lindorm_spec"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument solr_num", value=solr_num, expected_type=type_hints["solr_num"])
            check_type(argname="argument solr_spec", value=solr_spec, expected_type=type_hints["solr_spec"])
            check_type(argname="argument tsdb_num", value=tsdb_num, expected_type=type_hints["tsdb_num"])
            check_type(argname="argument tsdb_spec", value=tsdb_spec, expected_type=type_hints["tsdb_spec"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "disk_category": disk_category,
            "instance_name": instance_name,
            "vpc_id": vpc_id,
        }
        if cold_storage is not None:
            self._values["cold_storage"] = cold_storage
        if core_spec is not None:
            self._values["core_spec"] = core_spec
        if filestore_num is not None:
            self._values["filestore_num"] = filestore_num
        if filestore_spec is not None:
            self._values["filestore_spec"] = filestore_spec
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if instance_storage is not None:
            self._values["instance_storage"] = instance_storage
        if lindorm_num is not None:
            self._values["lindorm_num"] = lindorm_num
        if lindorm_spec is not None:
            self._values["lindorm_spec"] = lindorm_spec
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if solr_num is not None:
            self._values["solr_num"] = solr_num
        if solr_spec is not None:
            self._values["solr_spec"] = solr_spec
        if tsdb_num is not None:
            self._values["tsdb_num"] = tsdb_num
        if tsdb_spec is not None:
            self._values["tsdb_spec"] = tsdb_spec
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def disk_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        diskCategory: The storage type of the instance. Valid values:
        cloud_efficiency: This instance uses the Standard type of storage.
        cloud_ssd: This instance uses the Performance type of storage.
        capacity_cloud_storage: This instance uses the Capacity type of storage.
        local_ssd_pro: This instance uses local SSDs.
        local_hdd_pro: This instance uses local HDDs.
        '''
        result = self._values.get("disk_category")
        assert result is not None, "Required property 'disk_category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the instance that you want to create.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC in which you want to create the instance.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def cold_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
        '''
        result = self._values.get("cold_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def core_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
        When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
        lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
        When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
        lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
        '''
        result = self._values.get("core_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filestore_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
        '''
        result = self._values.get("filestore_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filestore_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        '''
        result = self._values.get("filestore_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instance you want to create. Valid values:
        PREPAY: subscription.
        POSTPAY: pay-as-you-go.
        Default value: POSTPAY
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: instanceStorage: The storage capacity of the instance you want to create. Unit: GB.
        '''
        result = self._values.get("instance_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lindorm_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
        ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
        '''
        result = self._values.get("lindorm_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lindorm_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
        '''
        result = self._values.get("lindorm_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
        If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
        If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The period based on which you are charged for the instance. Valid values:
        Month: You are charged for the instance on a monthly basis.
        Year: You are charged for the instance on a yearly basis.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityIpList: The ip white list of instance.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def solr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
        '''
        result = self._values.get("solr_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def solr_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        result = self._values.get("solr_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tsdb_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
        '''
        result = self._values.get("tsdb_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tsdb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        result = self._values.get("tsdb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch to which you want the instance to connect.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: zoneId: The ID of the zone in which you want to create the instance.
        '''
        result = self._values.get("zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMultiZoneInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-lindorm.RosMultiZoneInstance",
):
    '''A ROS template type:  ``ALIYUN::Lindorm::MultiZoneInstance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMultiZoneInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::Lindorm::MultiZoneInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__858bc8317542a0b1c8dfcfc98a6f8d714f0f34d3a6dce1983a3241e86e746a33)
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
            type_hints = typing.get_type_hints(_typecheckingstub__06d7c812d6361c84f917a3e0638a5df3fd4d3b958f813a6499709328d00d0965)
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
        :Attribute: InstanceId: The ID of the Lindorm instance that is created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrJdbcUrlList")
    def attr_jdbc_url_list(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: JdbcUrlList: The list of the jdbc connection address.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJdbcUrlList"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="diskCategory")
    def disk_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        diskCategory: The storage type of the instance. Valid values:
        cloud_efficiency: This instance uses the Standard type of storage.
        cloud_ssd: This instance uses the Performance type of storage.
        capacity_cloud_storage: This instance uses the Capacity type of storage.
        local_ssd_pro: This instance uses local SSDs.
        local_hdd_pro: This instance uses local HDDs.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "diskCategory"))

    @disk_category.setter
    def disk_category(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9546e89222444f149b055262398a35e3b622b96317ddf076e19fb64c09778d1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__232c944daa1ce0ea99d5880412d1b945348496f7d1559497b5297e47c1005b22)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceName")
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the instance that you want to create.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceName"))

    @instance_name.setter
    def instance_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__954f5ee9bb25eb7cabe5b2e0d0424f36df381c980625686bf68e849eff80f30c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC in which you want to create the instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da0428db869c97d5b04ce084104a5b3d4ac71f00f7b2a0fbac24d8ac7cca40ca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="arbiterVSwitchId")
    def arbiter_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: arbiterVSwitchId: The ID of the vSwitch that is specified for the zone for the coordinate node of the instance. The vSwitch must be deployed in the zone specified by the ArbiterZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "arbiterVSwitchId"))

    @arbiter_v_switch_id.setter
    def arbiter_v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9130c098019ae2fb7608017f9c979cc3d17ca68ca02f9ceedb6911d78f7cc86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "arbiterVSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="arbiterZoneId")
    def arbiter_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: arbiterZoneId: The ID of the zone for the coordinate node of the instance. **This parameter is required if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "arbiterZoneId"))

    @arbiter_zone_id.setter
    def arbiter_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d9d72793443c728eb12b53cf53ce417de640007664f016b7595d0cbc70e421d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "arbiterZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="coldStorage")
    def cold_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "coldStorage"))

    @cold_storage.setter
    def cold_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cccf7780fe38d2af14dd0a1455474019c18b5e354dea8faa8328287e568d22fe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coldStorage", value)

    @builtins.property
    @jsii.member(jsii_name="coreSingleStorage")
    def core_single_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: coreSingleStorage: The storage capacity of the disk of a single core node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "coreSingleStorage"))

    @core_single_storage.setter
    def core_single_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__762d78e47d57805a6b1470e612b1b51a2ac0903056ad5599c35dc830260bdff9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coreSingleStorage", value)

    @builtins.property
    @jsii.member(jsii_name="coreSpec")
    def core_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
        When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
        lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
        When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
        lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "coreSpec"))

    @core_spec.setter
    def core_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eaf93d6eaf66a86efd9ab957607827c6d9b9cecad35691d422a1961d01b6e196)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coreSpec", value)

    @builtins.property
    @jsii.member(jsii_name="filestoreNum")
    def filestore_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "filestoreNum"))

    @filestore_num.setter
    def filestore_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__17f63b766cb73ae86e95b96170a909d4b66c22aa78b2576079f45ea2eecedea9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filestoreNum", value)

    @builtins.property
    @jsii.member(jsii_name="filestoreSpec")
    def filestore_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "filestoreSpec"))

    @filestore_spec.setter
    def filestore_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1865cfa4063c434193faf8ffe4c4daa001e9732c27f49300ffcdf9e565eae37d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "filestoreSpec", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instance you want to create. Valid values:
        PREPAY: subscription.
        POSTPAY: pay-as-you-go.
        Default value: POSTPAY
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b1f3c5d4781b127d28d140770a3f3fd22392b55e512a6ed4c685a1a6ba0671b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="lindormNum")
    def lindorm_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
        ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lindormNum"))

    @lindorm_num.setter
    def lindorm_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc8c402b375c6f5b28fe678ae1d7e527447c2c2bc5c3cb83811b9ac9f73dfd23)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lindormNum", value)

    @builtins.property
    @jsii.member(jsii_name="lindormSpec")
    def lindorm_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lindormSpec"))

    @lindorm_spec.setter
    def lindorm_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5e36bf4142932de0bc2adeafc35f739ffb8410f880c6edae8e85a1b7d6eeedf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lindormSpec", value)

    @builtins.property
    @jsii.member(jsii_name="logDiskCategory")
    def log_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logDiskCategory: The disk type of the log nodes. Valid values:
        cloud_efficiency、cloud_essd.
        This parameter is required if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logDiskCategory"))

    @log_disk_category.setter
    def log_disk_category(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__725dd79d4c1bbd02625027432299dba2958d2af6e7818bbb8bf11a1b1a481b56)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logDiskCategory", value)

    @builtins.property
    @jsii.member(jsii_name="logNum")
    def log_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logNum: The number of the log nodes. Valid values: 4 to 400. **This parameter is required if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logNum"))

    @log_num.setter
    def log_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13867b1de2a3ab21c894b59e4a6c7a40fa7586c3f86090b417f0749f21b36a28)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logNum", value)

    @builtins.property
    @jsii.member(jsii_name="logSingleStorage")
    def log_single_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logSingleStorage: The storage capacity of the disk of a single log node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logSingleStorage"))

    @log_single_storage.setter
    def log_single_storage(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5be779c8417e972bf3933e1940e4f8492360a1eb1cddefd50cf1650c436229fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logSingleStorage", value)

    @builtins.property
    @jsii.member(jsii_name="logSpec")
    def log_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logSpec: The type of the log nodes. Valid values:
        lindorm.sn1.large: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        lindorm.sn1.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        **This parameter is required if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "logSpec"))

    @log_spec.setter
    def log_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__653717f46d313f0fbf31691dc0bb46b6f76c28c1f9f9fd7903f739bcb1714ed9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logSpec", value)

    @builtins.property
    @jsii.member(jsii_name="multiZoneCombination")
    def multi_zone_combination(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        multiZoneCombination: The combinations of zones that are available for the multi-zone instance. You can go to the purchase page of Lindorm to view the supported zone combinations.
        ap-southeast-5abc-aliyun: Zone A+B+C in the Indonesia (Jakarta) region.
        cn-hangzhou-ehi-aliyun: Zone E+H+I in the China (Hangzhou) region.
        cn-beijing-acd-aliyun: Zone A+C+D in the China (Beijing) region.
        ap-southeast-1-abc-aliyun: Zone A+B+C in the Singapore region.
        cn-zhangjiakou-abc-aliyun: Zone A+B+C in the China (Zhangjiakou) region.
        cn-shanghai-efg-aliyun: Zone E+F+G in the China (Shanghai) region.
        cn-shanghai-abd-aliyun: Zone A+B+D in the China (Shanghai) region.
        cn-hangzhou-bef-aliyun: Zone B+E+F in the China (Hangzhou) region.
        cn-hangzhou-bce-aliyun: Zone B+C+E in the China (Hangzhou) region.
        cn-beijing-fgh-aliyun: Zone F+G+H in the China (Beijing) region.
        cn-shenzhen-abc-aliyun: Zone A+B+C in the China (Shenzhen) region.
        **This parameter is required if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "multiZoneCombination"))

    @multi_zone_combination.setter
    def multi_zone_combination(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b5934aab361f45d4650d3e2c926517432697ba9f7371a5c4861ebe9ed7b92846)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiZoneCombination", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
        If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
        If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77efecfefc9f9bccf7eb8a90e50ba06c565551bcec98f2f264cabbf172891481)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The period based on which you are charged for the instance. Valid values:
        Month: You are charged for the instance on a monthly basis.
        Year: You are charged for the instance on a yearly basis.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__78b2de81b2216509c10f628fefdb9d9355472082d2007a132fb7f2e7edb300c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="primaryVSwitchId")
    def primary_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: primaryVSwitchId: For multiple available regions, the virtual switch ID of the main available area must be under the available area corresponding to the Primaryzoneid.If you need to create a multi -available area example, this parameter must be filled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "primaryVSwitchId"))

    @primary_v_switch_id.setter
    def primary_v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2eb6c7d933e3510801c7397bf1cf039b8c28889f0fca5caad98e723fba7bfc36)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primaryVSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="primaryZoneId")
    def primary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: primaryZoneId: For many available zone instances, the available area ID of the main available area.If you need to create a multi -available area example, this parameter must be filled.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "primaryZoneId"))

    @primary_zone_id.setter
    def primary_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a2af06801e00ffa77804fa6e20c557b96f65fd275f570f62832718253b5bd74e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primaryZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d62c47d33be5e815a389af0a9d5c17007d99ede4b48f951e4c27295c19614f8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityIpList: The ip white list of instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ac5589c58d2a50c683c761768c78b5cb2451e3884285fc93830f8e797e063f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)

    @builtins.property
    @jsii.member(jsii_name="solrNum")
    def solr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "solrNum"))

    @solr_num.setter
    def solr_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b193cc72d315a19ff7fa22552c88ed709f3adcaacad8dc57aa454b7a3aef0197)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "solrNum", value)

    @builtins.property
    @jsii.member(jsii_name="solrSpec")
    def solr_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "solrSpec"))

    @solr_spec.setter
    def solr_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57da15cb775546c1520c0a89d82f3d9f2c177f7ee937104d380bf3c9937a224f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "solrSpec", value)

    @builtins.property
    @jsii.member(jsii_name="standbyVSwitchId")
    def standby_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: standbyVSwitchId: The ID of the vSwitch that is specified for the secondary zone of the instance. The vSwitch must be deployed in the zone specified by the StandbyZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "standbyVSwitchId"))

    @standby_v_switch_id.setter
    def standby_v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13a9dd813f5175ba0937c65e849c2a647f9d7f4f1350d3c79f7c14192de491ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "standbyVSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="standbyZoneId")
    def standby_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: standbyZoneId: The ID of the secondary zone of the instance. **This parameter is required if you want to create a multi-zone instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "standbyZoneId"))

    @standby_zone_id.setter
    def standby_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52cdc404db2b884d5cb78cda159a1edbfe9d7ea9207e5d2bf661cd7eb0d655f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "standbyZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="tsdbNum")
    def tsdb_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tsdbNum"))

    @tsdb_num.setter
    def tsdb_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6b978a8c66f18dda16bc8beb91c81255ea725660b285e9621e249c8744fa317)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tsdbNum", value)

    @builtins.property
    @jsii.member(jsii_name="tsdbSpec")
    def tsdb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tsdbSpec"))

    @tsdb_spec.setter
    def tsdb_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__689e2d503c0aace650f9a520a5f82753eebf04a022531e884ecd58f3b33f1478)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tsdbSpec", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-lindorm.RosMultiZoneInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "disk_category": "diskCategory",
        "instance_name": "instanceName",
        "vpc_id": "vpcId",
        "arbiter_v_switch_id": "arbiterVSwitchId",
        "arbiter_zone_id": "arbiterZoneId",
        "cold_storage": "coldStorage",
        "core_single_storage": "coreSingleStorage",
        "core_spec": "coreSpec",
        "filestore_num": "filestoreNum",
        "filestore_spec": "filestoreSpec",
        "instance_charge_type": "instanceChargeType",
        "lindorm_num": "lindormNum",
        "lindorm_spec": "lindormSpec",
        "log_disk_category": "logDiskCategory",
        "log_num": "logNum",
        "log_single_storage": "logSingleStorage",
        "log_spec": "logSpec",
        "multi_zone_combination": "multiZoneCombination",
        "period": "period",
        "period_unit": "periodUnit",
        "primary_v_switch_id": "primaryVSwitchId",
        "primary_zone_id": "primaryZoneId",
        "resource_group_id": "resourceGroupId",
        "security_ip_list": "securityIpList",
        "solr_num": "solrNum",
        "solr_spec": "solrSpec",
        "standby_v_switch_id": "standbyVSwitchId",
        "standby_zone_id": "standbyZoneId",
        "tsdb_num": "tsdbNum",
        "tsdb_spec": "tsdbSpec",
    },
)
class RosMultiZoneInstanceProps:
    def __init__(
        self,
        *,
        disk_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        arbiter_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        arbiter_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cold_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        core_single_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        core_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filestore_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        filestore_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lindorm_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lindorm_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_single_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        multi_zone_combination: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        primary_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        primary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        solr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        solr_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        standby_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        standby_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tsdb_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tsdb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::Lindorm::MultiZoneInstance``.

        :param disk_category: 
        :param instance_name: 
        :param vpc_id: 
        :param arbiter_v_switch_id: 
        :param arbiter_zone_id: 
        :param cold_storage: 
        :param core_single_storage: 
        :param core_spec: 
        :param filestore_num: 
        :param filestore_spec: 
        :param instance_charge_type: 
        :param lindorm_num: 
        :param lindorm_spec: 
        :param log_disk_category: 
        :param log_num: 
        :param log_single_storage: 
        :param log_spec: 
        :param multi_zone_combination: 
        :param period: 
        :param period_unit: 
        :param primary_v_switch_id: 
        :param primary_zone_id: 
        :param resource_group_id: 
        :param security_ip_list: 
        :param solr_num: 
        :param solr_spec: 
        :param standby_v_switch_id: 
        :param standby_zone_id: 
        :param tsdb_num: 
        :param tsdb_spec: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2001a5ccf709cbf3cad610cd92556fbc91a201c31965ce3a1926903ce0ffacc0)
            check_type(argname="argument disk_category", value=disk_category, expected_type=type_hints["disk_category"])
            check_type(argname="argument instance_name", value=instance_name, expected_type=type_hints["instance_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument arbiter_v_switch_id", value=arbiter_v_switch_id, expected_type=type_hints["arbiter_v_switch_id"])
            check_type(argname="argument arbiter_zone_id", value=arbiter_zone_id, expected_type=type_hints["arbiter_zone_id"])
            check_type(argname="argument cold_storage", value=cold_storage, expected_type=type_hints["cold_storage"])
            check_type(argname="argument core_single_storage", value=core_single_storage, expected_type=type_hints["core_single_storage"])
            check_type(argname="argument core_spec", value=core_spec, expected_type=type_hints["core_spec"])
            check_type(argname="argument filestore_num", value=filestore_num, expected_type=type_hints["filestore_num"])
            check_type(argname="argument filestore_spec", value=filestore_spec, expected_type=type_hints["filestore_spec"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument lindorm_num", value=lindorm_num, expected_type=type_hints["lindorm_num"])
            check_type(argname="argument lindorm_spec", value=lindorm_spec, expected_type=type_hints["lindorm_spec"])
            check_type(argname="argument log_disk_category", value=log_disk_category, expected_type=type_hints["log_disk_category"])
            check_type(argname="argument log_num", value=log_num, expected_type=type_hints["log_num"])
            check_type(argname="argument log_single_storage", value=log_single_storage, expected_type=type_hints["log_single_storage"])
            check_type(argname="argument log_spec", value=log_spec, expected_type=type_hints["log_spec"])
            check_type(argname="argument multi_zone_combination", value=multi_zone_combination, expected_type=type_hints["multi_zone_combination"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument primary_v_switch_id", value=primary_v_switch_id, expected_type=type_hints["primary_v_switch_id"])
            check_type(argname="argument primary_zone_id", value=primary_zone_id, expected_type=type_hints["primary_zone_id"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument solr_num", value=solr_num, expected_type=type_hints["solr_num"])
            check_type(argname="argument solr_spec", value=solr_spec, expected_type=type_hints["solr_spec"])
            check_type(argname="argument standby_v_switch_id", value=standby_v_switch_id, expected_type=type_hints["standby_v_switch_id"])
            check_type(argname="argument standby_zone_id", value=standby_zone_id, expected_type=type_hints["standby_zone_id"])
            check_type(argname="argument tsdb_num", value=tsdb_num, expected_type=type_hints["tsdb_num"])
            check_type(argname="argument tsdb_spec", value=tsdb_spec, expected_type=type_hints["tsdb_spec"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "disk_category": disk_category,
            "instance_name": instance_name,
            "vpc_id": vpc_id,
        }
        if arbiter_v_switch_id is not None:
            self._values["arbiter_v_switch_id"] = arbiter_v_switch_id
        if arbiter_zone_id is not None:
            self._values["arbiter_zone_id"] = arbiter_zone_id
        if cold_storage is not None:
            self._values["cold_storage"] = cold_storage
        if core_single_storage is not None:
            self._values["core_single_storage"] = core_single_storage
        if core_spec is not None:
            self._values["core_spec"] = core_spec
        if filestore_num is not None:
            self._values["filestore_num"] = filestore_num
        if filestore_spec is not None:
            self._values["filestore_spec"] = filestore_spec
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if lindorm_num is not None:
            self._values["lindorm_num"] = lindorm_num
        if lindorm_spec is not None:
            self._values["lindorm_spec"] = lindorm_spec
        if log_disk_category is not None:
            self._values["log_disk_category"] = log_disk_category
        if log_num is not None:
            self._values["log_num"] = log_num
        if log_single_storage is not None:
            self._values["log_single_storage"] = log_single_storage
        if log_spec is not None:
            self._values["log_spec"] = log_spec
        if multi_zone_combination is not None:
            self._values["multi_zone_combination"] = multi_zone_combination
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if primary_v_switch_id is not None:
            self._values["primary_v_switch_id"] = primary_v_switch_id
        if primary_zone_id is not None:
            self._values["primary_zone_id"] = primary_zone_id
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if solr_num is not None:
            self._values["solr_num"] = solr_num
        if solr_spec is not None:
            self._values["solr_spec"] = solr_spec
        if standby_v_switch_id is not None:
            self._values["standby_v_switch_id"] = standby_v_switch_id
        if standby_zone_id is not None:
            self._values["standby_zone_id"] = standby_zone_id
        if tsdb_num is not None:
            self._values["tsdb_num"] = tsdb_num
        if tsdb_spec is not None:
            self._values["tsdb_spec"] = tsdb_spec

    @builtins.property
    def disk_category(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        diskCategory: The storage type of the instance. Valid values:
        cloud_efficiency: This instance uses the Standard type of storage.
        cloud_ssd: This instance uses the Performance type of storage.
        capacity_cloud_storage: This instance uses the Capacity type of storage.
        local_ssd_pro: This instance uses local SSDs.
        local_hdd_pro: This instance uses local HDDs.
        '''
        result = self._values.get("disk_category")
        assert result is not None, "Required property 'disk_category' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceName: The name of the instance that you want to create.
        '''
        result = self._values.get("instance_name")
        assert result is not None, "Required property 'instance_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of the VPC in which you want to create the instance.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def arbiter_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: arbiterVSwitchId: The ID of the vSwitch that is specified for the zone for the coordinate node of the instance. The vSwitch must be deployed in the zone specified by the ArbiterZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("arbiter_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def arbiter_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: arbiterZoneId: The ID of the zone for the coordinate node of the instance. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("arbiter_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cold_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
        '''
        result = self._values.get("cold_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def core_single_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: coreSingleStorage: The storage capacity of the disk of a single core node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("core_single_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def core_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
        When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
        lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
        When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
        lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
        '''
        result = self._values.get("core_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filestore_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
        '''
        result = self._values.get("filestore_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def filestore_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        '''
        result = self._values.get("filestore_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: The billing method of the instance you want to create. Valid values:
        PREPAY: subscription.
        POSTPAY: pay-as-you-go.
        Default value: POSTPAY
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lindorm_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
        ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
        '''
        result = self._values.get("lindorm_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lindorm_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
        '''
        result = self._values.get("lindorm_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_disk_category(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logDiskCategory: The disk type of the log nodes. Valid values:
        cloud_efficiency、cloud_essd.
        This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("log_disk_category")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logNum: The number of the log nodes. Valid values: 4 to 400. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("log_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_single_storage(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: logSingleStorage: The storage capacity of the disk of a single log node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("log_single_storage")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        logSpec: The type of the log nodes. Valid values:
        lindorm.sn1.large: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        lindorm.sn1.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("log_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def multi_zone_combination(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        multiZoneCombination: The combinations of zones that are available for the multi-zone instance. You can go to the purchase page of Lindorm to view the supported zone combinations.
        ap-southeast-5abc-aliyun: Zone A+B+C in the Indonesia (Jakarta) region.
        cn-hangzhou-ehi-aliyun: Zone E+H+I in the China (Hangzhou) region.
        cn-beijing-acd-aliyun: Zone A+C+D in the China (Beijing) region.
        ap-southeast-1-abc-aliyun: Zone A+B+C in the Singapore region.
        cn-zhangjiakou-abc-aliyun: Zone A+B+C in the China (Zhangjiakou) region.
        cn-shanghai-efg-aliyun: Zone E+F+G in the China (Shanghai) region.
        cn-shanghai-abd-aliyun: Zone A+B+D in the China (Shanghai) region.
        cn-hangzhou-bef-aliyun: Zone B+E+F in the China (Hangzhou) region.
        cn-hangzhou-bce-aliyun: Zone B+C+E in the China (Hangzhou) region.
        cn-beijing-fgh-aliyun: Zone F+G+H in the China (Beijing) region.
        cn-shenzhen-abc-aliyun: Zone A+B+C in the China (Shenzhen) region.
        **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("multi_zone_combination")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
        If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
        If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The period based on which you are charged for the instance. Valid values:
        Month: You are charged for the instance on a monthly basis.
        Year: You are charged for the instance on a yearly basis.
        NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def primary_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: primaryVSwitchId: For multiple available regions, the virtual switch ID of the main available area must be under the available area corresponding to the Primaryzoneid.If you need to create a multi -available area example, this parameter must be filled.
        '''
        result = self._values.get("primary_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def primary_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: primaryZoneId: For many available zone instances, the available area ID of the main available area.If you need to create a multi -available area example, this parameter must be filled.
        '''
        result = self._values.get("primary_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: securityIpList: The ip white list of instance.
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def solr_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
        '''
        result = self._values.get("solr_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def solr_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        result = self._values.get("solr_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def standby_v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: standbyVSwitchId: The ID of the vSwitch that is specified for the secondary zone of the instance. The vSwitch must be deployed in the zone specified by the StandbyZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("standby_v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def standby_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: standbyZoneId: The ID of the secondary zone of the instance. **This parameter is required if you want to create a multi-zone instance.
        '''
        result = self._values.get("standby_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tsdb_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
        If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
        '''
        result = self._values.get("tsdb_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tsdb_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
        lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        '''
        result = self._values.get("tsdb_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMultiZoneInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "MultiZoneInstance",
    "MultiZoneInstanceProps",
    "RosInstance",
    "RosInstanceProps",
    "RosMultiZoneInstance",
    "RosMultiZoneInstanceProps",
]

publication.publish()

def _typecheckingstub__7d61eaf41732706c8380f6e55fce64e05cd65474f8d6c806b89b3576ac06de1f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccd9c78cafd91c7c644f059a6f3ca0d97ce09800ea122f0813f8135e0c40680c(
    *,
    disk_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cold_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    core_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filestore_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filestore_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lindorm_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lindorm_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    solr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    solr_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tsdb_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tsdb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9a0f5b65b46ee78707342bf887b5789bf147859442e19eb9b455a818705ea2f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MultiZoneInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26dc8ab7d23f58bb8f757e018142fdce047c83bfa1362bce523a9f6fcfdecf44(
    *,
    disk_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    arbiter_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    arbiter_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cold_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    core_single_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    core_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filestore_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filestore_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lindorm_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lindorm_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_single_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_zone_combination: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    primary_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    primary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    solr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    solr_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    standby_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    standby_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tsdb_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tsdb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44c2aef5450c841af44256a0fa84092e35023aa91ea2a17b4f43b5fa5b9ea2ab(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd071a2fafc02eceb3114f8af8404df995b06e1c49ba24064e5e3067ae83eb63(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4fb6bc51426086961dd273af3ce208c76fb4048e5e77210a09bbe41cfc986c5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__49b34e6506f1947fc02b19007358fd4f4eb8dd546b25ff5f11f54065709ce658(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c8570d1ba12aa025d1d5b10cd582b23efd77b6875de5abe9e84725fd6e78f181(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f257b77ee23d9760924ddce88b6057bf774d21dc7e1d29a3c048bfaa08b1a939(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3a8f8ec9300ba7c0d41ba55344d85fdfeedc447e237a8395028b6df0289904f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ccd84f9343f8ca1836d8a17e77e61094852952c4badb7fb6f6687708573cd9c1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7351ed9a14b911a2a1c6e2e76455f094d9fdc3016a9fafc52b1439d7d44739bd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3f1820fc4a9f1ab669eaa98370089c8c4306c1ae44b4bf2364acbda63c56322(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f483a58eb795ba0010a5e1205fd49e6e37f427c83ac11763e8ae51cb93cdf748(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0ae7d34c457d7d79b1c3171b5c332ca73291c24e441dad376b225ffbdbe12d8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1be62674a615e0663d21112b1ea1257fb9bc34ed3c817eb58c980c8b427d2707(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__678f89ad35fcc0e3a0cc2b5273d41ad1068362f74d29008593a7434bad2a3d4d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a378cfb67f4f62f264de54a061ab4b5af3c54a248e59e4325c6139bc9edcda16(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f2eb8fc51388f1a6103d19f02bac42a9468555e2295b28a935405653f286f4c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75047d8c5de62f4e70507c63cd7c788627f7b697434fab6a1e42a7ff3719a06f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4636a8d4c963af12c7e51d35cf6f72ecc3622051ea21cc2da0388efa581688ef(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78efd7d5eabd49c48a5836b2a9530e487d26316c3fe85655f7b1a44908753b5c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7050bded188f218006bc64f861a891922641755eec0f856c8a74884c27b636bc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5871cf034970d0c27561a3ddcbdffe693acb6009b28ce5c2019db28969b89eb(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fab6233a734dc447ba67d4d89a3cea4fe76a00d5e9b39b97fb4ec2463f432603(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4536a3c3959ced71c3f52673462c513a2d8edc5f25691644653400a37b58710e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d565ad4f25c76b1cdeeae83b128003fa8ae5cf3306ebe3f8d9e2382d0d4aea40(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a57d16250ebff774e42262d8e93442c4bbc789278542c5c03b635ac424b1f47e(
    *,
    disk_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    cold_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    core_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filestore_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filestore_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lindorm_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lindorm_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    solr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    solr_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tsdb_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tsdb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__858bc8317542a0b1c8dfcfc98a6f8d714f0f34d3a6dce1983a3241e86e746a33(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMultiZoneInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06d7c812d6361c84f917a3e0638a5df3fd4d3b958f813a6499709328d00d0965(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9546e89222444f149b055262398a35e3b622b96317ddf076e19fb64c09778d1a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__232c944daa1ce0ea99d5880412d1b945348496f7d1559497b5297e47c1005b22(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__954f5ee9bb25eb7cabe5b2e0d0424f36df381c980625686bf68e849eff80f30c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da0428db869c97d5b04ce084104a5b3d4ac71f00f7b2a0fbac24d8ac7cca40ca(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9130c098019ae2fb7608017f9c979cc3d17ca68ca02f9ceedb6911d78f7cc86(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d9d72793443c728eb12b53cf53ce417de640007664f016b7595d0cbc70e421d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cccf7780fe38d2af14dd0a1455474019c18b5e354dea8faa8328287e568d22fe(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__762d78e47d57805a6b1470e612b1b51a2ac0903056ad5599c35dc830260bdff9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eaf93d6eaf66a86efd9ab957607827c6d9b9cecad35691d422a1961d01b6e196(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__17f63b766cb73ae86e95b96170a909d4b66c22aa78b2576079f45ea2eecedea9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1865cfa4063c434193faf8ffe4c4daa001e9732c27f49300ffcdf9e565eae37d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b1f3c5d4781b127d28d140770a3f3fd22392b55e512a6ed4c685a1a6ba0671b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc8c402b375c6f5b28fe678ae1d7e527447c2c2bc5c3cb83811b9ac9f73dfd23(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5e36bf4142932de0bc2adeafc35f739ffb8410f880c6edae8e85a1b7d6eeedf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__725dd79d4c1bbd02625027432299dba2958d2af6e7818bbb8bf11a1b1a481b56(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13867b1de2a3ab21c894b59e4a6c7a40fa7586c3f86090b417f0749f21b36a28(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5be779c8417e972bf3933e1940e4f8492360a1eb1cddefd50cf1650c436229fd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__653717f46d313f0fbf31691dc0bb46b6f76c28c1f9f9fd7903f739bcb1714ed9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b5934aab361f45d4650d3e2c926517432697ba9f7371a5c4861ebe9ed7b92846(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77efecfefc9f9bccf7eb8a90e50ba06c565551bcec98f2f264cabbf172891481(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__78b2de81b2216509c10f628fefdb9d9355472082d2007a132fb7f2e7edb300c4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2eb6c7d933e3510801c7397bf1cf039b8c28889f0fca5caad98e723fba7bfc36(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a2af06801e00ffa77804fa6e20c557b96f65fd275f570f62832718253b5bd74e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d62c47d33be5e815a389af0a9d5c17007d99ede4b48f951e4c27295c19614f8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ac5589c58d2a50c683c761768c78b5cb2451e3884285fc93830f8e797e063f0(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b193cc72d315a19ff7fa22552c88ed709f3adcaacad8dc57aa454b7a3aef0197(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57da15cb775546c1520c0a89d82f3d9f2c177f7ee937104d380bf3c9937a224f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13a9dd813f5175ba0937c65e849c2a647f9d7f4f1350d3c79f7c14192de491ab(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52cdc404db2b884d5cb78cda159a1edbfe9d7ea9207e5d2bf661cd7eb0d655f1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6b978a8c66f18dda16bc8beb91c81255ea725660b285e9621e249c8744fa317(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__689e2d503c0aace650f9a520a5f82753eebf04a022531e884ecd58f3b33f1478(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2001a5ccf709cbf3cad610cd92556fbc91a201c31965ce3a1926903ce0ffacc0(
    *,
    disk_category: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    arbiter_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    arbiter_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cold_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    core_single_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    core_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filestore_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    filestore_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lindorm_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lindorm_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_disk_category: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_single_storage: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    multi_zone_combination: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    primary_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    primary_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    solr_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    solr_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    standby_v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    standby_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tsdb_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tsdb_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
