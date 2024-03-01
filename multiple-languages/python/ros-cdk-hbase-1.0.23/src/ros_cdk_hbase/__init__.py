'''
## Aliyun ROS HBASE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as HBASE from '@alicloud/ros-cdk-hbase';
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


class Cluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbase.Cluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBase::Cluster``, which is used to create an ApsaraDB for HBase cluster.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5434b30464306efe306ff34e3271e48a667b9f26fae9f1b7884911f8917da568)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConnAddrs")
    def attr_service_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceConnAddrs: LIST of ServiceConnAddr.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="attrSlbConnAddrs")
    def attr_slb_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SlbConnAddrs: LIST of SlbConnAddr.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlbConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="attrThriftConn")
    def attr_thrift_conn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ThriftConn: Thrift Connection address list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrThriftConn"))

    @builtins.property
    @jsii.member(jsii_name="attrUiProxyConnAddrInfo")
    def attr_ui_proxy_conn_addr_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UiProxyConnAddrInfo: WebUI connection information list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUiProxyConnAddrInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrZkConnAddrs")
    def attr_zk_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZkConnAddrs: List of ZkConnAddr.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZkConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06762b74a7a469657f1f4ddb6fa6f35a2ba4ebaaef10bd5d55d0b5304e0c141b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fcc60e245a1867e1e173bec5e9f47a686a69f8363c5a5008fc68f5d66d501925)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ClusterProps":
        return typing.cast("ClusterProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ClusterProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1de1d3cb3071ac12278a8f5f6ac865c312bba19e4b185c2511b4ef965b359eae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc19b2c6a4a938939531f5bdb3417001cb619dbcf8ffb9d5cda9bf7173261027)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbase.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "core_instance_type": "coreInstanceType",
        "engine": "engine",
        "engine_version": "engineVersion",
        "node_count": "nodeCount",
        "pay_type": "payType",
        "zone_id": "zoneId",
        "auto_renew_period": "autoRenewPeriod",
        "cluster_name": "clusterName",
        "cold_storage_size": "coldStorageSize",
        "disk_size": "diskSize",
        "disk_type": "diskType",
        "encryption_key": "encryptionKey",
        "master_instance_type": "masterInstanceType",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
        "security_ip_list": "securityIpList",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        core_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cold_storage_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Cluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster

        :param core_instance_type: Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        :param engine: Property engine: The type of the service. Valid values: hbase hbaseue bds
        :param engine_version: Property engineVersion: The version of the engine. Valid values: hbase:1.1, 2.0 hbaseue:2.0 bds:1.0
        :param node_count: Property nodeCount: The number of nodes. Valid values: 1 to 100. ApsaraDB for HBase in single-node mode: one node ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three nodes
        :param pay_type: Property payType: The billing method. Prepaid: The subscription billing method is used. Postpaid: The pay-as-you-go billing method is used.
        :param zone_id: Property zoneId: The ID of the zone.
        :param auto_renew_period: Property autoRenewPeriod: The auto-renewal period. Unit: month. The default value of this parameter is 0. This value indicates that auto-renewal is disabled. If this parameter is set to 2, the instance is automatically renewed for a two-month subscription after the instance expires.
        :param cluster_name: Property clusterName: The name of the instance. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        :param cold_storage_size: Property coldStorageSize: The size of cold data storage. If this parameter is set to 0, cold data storage is disabled. If this parameter is set to a value greater than 0, cold data storage is enabled. The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
        :param disk_size: Property diskSize: The disk size of the node. Unit: GB. For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500 GB and the step size is 1 GB. For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges from 400 GB to 64,000 GB and the step size is 40 GB. For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size varies by instance type. The following list provides the mappings between disks sizes and instance types: hbase.d1.4xlarge =44000 hbase.d1.6xlarge =66000 hbase.d1.8xlarge =88000 hbase.i2.xlarge =894 hbase.i2.2xlarge =1788 hbase.i2.4xlarge =3576 hbase.i2.8xlarge =7152 hbase.d2s.5xlarge =58400 hbase.d2s.10xlarge =109500
        :param disk_type: Property diskType: The type of the disk. Valid values: cloud_efficiency cloud_ssd local_hdd_pro local_ssd_pro cloud_essd_pl1
        :param encryption_key: Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled. It shows that the current cloud disk version is unable to close after the encryption is turned on.
        :param master_instance_type: Property masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        :param period: Property period: The subscription period. This parameter only takes effect when the PayType parameter is set to Prepaid. When the PeriodUnit parameter is set to year, the value of the Period parameter ranges from 1 to 5. When the PeriodUnit parameter is set to month, the value of the Period parameter ranges from 1 to 9.
        :param period_unit: Property periodUnit: The unit of the subscription period. Valid values: year month
        :param resource_group_id: Property resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console. If you leave this parameter empty, the instance is allocated to the default resource group.
        :param security_ip_list: Property securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*/24. The 0.0.0.0/0 value cannot be added to the whitelist. Separate multiple IP addresses with commas (,).
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId parameter empty, the classic network type is used. The VPC network type is preferred.
        :param v_switch_id: Property vSwitchId: The ID of the vSwitch.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff83030626a28309b769883767b3f890a649a1bb0bf4b819477f514b5bd3102c)
            check_type(argname="argument core_instance_type", value=core_instance_type, expected_type=type_hints["core_instance_type"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument node_count", value=node_count, expected_type=type_hints["node_count"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument cold_storage_size", value=cold_storage_size, expected_type=type_hints["cold_storage_size"])
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument master_instance_type", value=master_instance_type, expected_type=type_hints["master_instance_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "core_instance_type": core_instance_type,
            "engine": engine,
            "engine_version": engine_version,
            "node_count": node_count,
            "pay_type": pay_type,
            "zone_id": zone_id,
        }
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if cluster_name is not None:
            self._values["cluster_name"] = cluster_name
        if cold_storage_size is not None:
            self._values["cold_storage_size"] = cold_storage_size
        if disk_size is not None:
            self._values["disk_size"] = disk_size
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if master_instance_type is not None:
            self._values["master_instance_type"] = master_instance_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def core_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.'''
        result = self._values.get("core_instance_type")
        assert result is not None, "Required property 'core_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engine: The type of the service.

        Valid values:
        hbase
        hbaseue
        bds
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engineVersion: The version of the engine.

        Valid values:
        hbase:1.1, 2.0
        hbaseue:2.0
        bds:1.0
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property nodeCount: The number of nodes.

        Valid values: 1 to 100.
        ApsaraDB for HBase in single-node mode: one node
        ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
        ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
        nodes
        '''
        result = self._values.get("node_count")
        assert result is not None, "Required property 'node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: The billing method.

        Prepaid: The subscription billing method is used.
        Postpaid: The pay-as-you-go billing method is used.
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property zoneId: The ID of the zone.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: The auto-renewal period.

        Unit: month.
        The default value of this parameter is 0. This value indicates that auto-renewal is
        disabled.
        If this parameter is set to 2, the instance is automatically renewed for a two-month
        subscription after the instance expires.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterName: The name of the instance.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cold_storage_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property coldStorageSize: The size of cold data storage.

        If this parameter is set to 0, cold data storage is disabled.
        If this parameter is set to a value greater than 0, cold data storage is enabled.
        The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
        '''
        result = self._values.get("cold_storage_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskSize: The disk size of the node.

        Unit: GB.
        For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
        GB and the step size is 1 GB.
        For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
        from 400 GB to 64,000 GB and the step size is 40 GB.
        For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
        varies by instance type. The following list provides the mappings between disks sizes
        and instance types:
        hbase.d1.4xlarge =44000
        hbase.d1.6xlarge =66000
        hbase.d1.8xlarge =88000
        hbase.i2.xlarge =894
        hbase.i2.2xlarge =1788
        hbase.i2.4xlarge =3576
        hbase.i2.8xlarge =7152
        hbase.d2s.5xlarge =58400
        hbase.d2s.10xlarge =109500
        '''
        result = self._values.get("disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property diskType: The type of the disk.

        Valid values:
        cloud_efficiency
        cloud_ssd
        local_hdd_pro
        local_ssd_pro
        cloud_essd_pl1
        '''
        result = self._values.get("disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.

        It shows that the current cloud disk version is unable to close after the encryption is turned on.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterInstanceType: The instance type of the master node.

        You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        '''
        result = self._values.get("master_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period.

        This parameter only takes effect when the PayType parameter is set to Prepaid.
        When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
        from 1 to 5.
        When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
        from 1 to 9.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the subscription period.

        Valid values:
        year
        month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.

        You can query the group ID in the resource group console.
        If you leave this parameter empty, the instance is allocated to the default resource
        group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityIpList: The IP addresses in the whitelist.

        Example: 192.168.*.*/24. The 0.0.0.0/0 value cannot
        be added to the whitelist. Separate multiple IP addresses with commas (,).
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC).

        If you leave this parameter and the VSwitchId
        parameter empty, the classic network type is used. The VPC network type is preferred.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The ID of the vSwitch.'''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MultiZoneCluster(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbase.MultiZoneCluster",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::HBase::MultiZoneCluster``, which is used to create an ApsaraDB for HBase cluster that resides in multiple zones.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMultiZoneCluster``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MultiZoneClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71381d3dd4a67e51c412f2148ed0a4e36154f711b564a86e6885aaa1dd092a52)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterId: The ID of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConnAddrs")
    def attr_service_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ServiceConnAddrs: LIST of ServiceConnAddr.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="attrSlbConnAddrs")
    def attr_slb_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SlbConnAddrs: LIST of SlbConnAddr.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlbConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="attrThriftConn")
    def attr_thrift_conn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ThriftConn: Thrift Connection address list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrThriftConn"))

    @builtins.property
    @jsii.member(jsii_name="attrUiProxyConnAddrInfo")
    def attr_ui_proxy_conn_addr_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute UiProxyConnAddrInfo: WebUI connection information list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUiProxyConnAddrInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrZkConnAddrs")
    def attr_zk_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ZkConnAddrs: List of ZkConnAddr.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZkConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89d65a49e0b3d396424bb4d9aa25008d94ecf0e7b20b110b129f7931efdc7f9f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6ad624fb5d7ab238bf39e5190d656ab8b7b876cbe25fe6ac0a6d4b5b81612a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "MultiZoneClusterProps":
        return typing.cast("MultiZoneClusterProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "MultiZoneClusterProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6a7c779e9a75b283d1c6c15a770dc2fb9c1f98469ad59cedd245f763c03c8a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a23c30a651cd52ef01b5fc2e6fa71197e37564181772aad98d80961b325dbd50)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbase.MultiZoneClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "arbiter_v_switch_id": "arbiterVSwitchId",
        "arbiter_zone_id": "arbiterZoneId",
        "arch_version": "archVersion",
        "core_disk_size": "coreDiskSize",
        "core_disk_type": "coreDiskType",
        "core_instance_type": "coreInstanceType",
        "core_node_count": "coreNodeCount",
        "engine": "engine",
        "engine_version": "engineVersion",
        "log_disk_size": "logDiskSize",
        "log_disk_type": "logDiskType",
        "log_instance_type": "logInstanceType",
        "log_node_count": "logNodeCount",
        "multi_zone_combination": "multiZoneCombination",
        "pay_type": "payType",
        "primary_v_switch_id": "primaryVSwitchId",
        "primary_zone_id": "primaryZoneId",
        "standby_v_switch_id": "standbyVSwitchId",
        "standby_zone_id": "standbyZoneId",
        "auto_renew_period": "autoRenewPeriod",
        "cluster_name": "clusterName",
        "master_instance_type": "masterInstanceType",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
        "security_ip_list": "securityIpList",
        "vpc_id": "vpcId",
    },
)
class MultiZoneClusterProps:
    def __init__(
        self,
        *,
        arbiter_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        arbiter_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        arch_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        core_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        core_disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        core_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        core_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        log_disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        multi_zone_combination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        standby_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        standby_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``MultiZoneCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster

        :param arbiter_v_switch_id: Property arbiterVSwitchId: Arbitration virtual switch ID. The switch must be in the availability zone corresponding to ArbiterZoneId.
        :param arbiter_zone_id: Property arbiterZoneId: Arbiter zond id.
        :param arch_version: Property archVersion: Version of the deployment architecture. Currently, only the hbaseue engine type is supported. The value can be 2.0.
        :param core_disk_size: Property coreDiskSize: The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
        :param core_disk_type: Property coreDiskType: Core node disk type. Valid values: cloud_efficiency cloud_ssd local_hdd_pro local_ssd_pro
        :param core_instance_type: Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        :param core_node_count: Property coreNodeCount: Number of Core nodes. The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
        :param engine: Property engine: Service type. Currently, only HBase enhanced version is supported. The value can be hbaseue.
        :param engine_version: Property engineVersion: The version of the engine. Valid values: hbaseue:2.0
        :param log_disk_size: Property logDiskSize: log disk size. The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
        :param log_disk_type: Property logDiskType: Log node disk type. Valid values: cloud_efficiency cloud_ssd local_hdd_pro local_ssd_pro
        :param log_instance_type: Property logInstanceType: Log instance type.
        :param log_node_count: Property logNodeCount: Log number of nodes. The value of log nodes ranges from 4 to 400 and is a multiple of 4.
        :param multi_zone_combination: Property multiZoneCombination: Availability zone combination.
        :param pay_type: Property payType: The billing method. Prepaid: The subscription billing method is used. Postpaid: The pay-as-you-go billing method is used.
        :param primary_v_switch_id: Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
        :param primary_zone_id: Property primaryZoneId: Availability zone ID of the primary availability zone instance.
        :param standby_v_switch_id: Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
        :param standby_zone_id: Property standbyZoneId: Standby zone id.
        :param auto_renew_period: Property autoRenewPeriod: The auto-renewal period. Unit: month. The default value of this parameter is 0. This value indicates that auto-renewal is disabled. If this parameter is set to 2, the instance is automatically renewed for a two-month subscription after the instance expires.
        :param cluster_name: Property clusterName: The name of the instance. The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        :param master_instance_type: Property masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        :param period: Property period: The subscription period. This parameter only takes effect when the PayType parameter is set to Prepaid. When the PeriodUnit parameter is set to year, the value of the Period parameter ranges from 1 to 5. When the PeriodUnit parameter is set to month, the value of the Period parameter ranges from 1 to 9.
        :param period_unit: Property periodUnit: The unit of the subscription period. Valid values: year month
        :param resource_group_id: Property resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console. If you leave this parameter empty, the instance is allocated to the default resource group.
        :param security_ip_list: Property securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*/24. The 0.0.0.0/0 value cannot be added to the whitelist. Separate multiple IP addresses with commas (,).
        :param vpc_id: Property vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId parameter empty, the classic network type is used. The VPC network type is preferred.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28232ff48dfd64ee7d37571e0e658345e0577f00794df8fbcf6f0a08943c0d56)
            check_type(argname="argument arbiter_v_switch_id", value=arbiter_v_switch_id, expected_type=type_hints["arbiter_v_switch_id"])
            check_type(argname="argument arbiter_zone_id", value=arbiter_zone_id, expected_type=type_hints["arbiter_zone_id"])
            check_type(argname="argument arch_version", value=arch_version, expected_type=type_hints["arch_version"])
            check_type(argname="argument core_disk_size", value=core_disk_size, expected_type=type_hints["core_disk_size"])
            check_type(argname="argument core_disk_type", value=core_disk_type, expected_type=type_hints["core_disk_type"])
            check_type(argname="argument core_instance_type", value=core_instance_type, expected_type=type_hints["core_instance_type"])
            check_type(argname="argument core_node_count", value=core_node_count, expected_type=type_hints["core_node_count"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument log_disk_size", value=log_disk_size, expected_type=type_hints["log_disk_size"])
            check_type(argname="argument log_disk_type", value=log_disk_type, expected_type=type_hints["log_disk_type"])
            check_type(argname="argument log_instance_type", value=log_instance_type, expected_type=type_hints["log_instance_type"])
            check_type(argname="argument log_node_count", value=log_node_count, expected_type=type_hints["log_node_count"])
            check_type(argname="argument multi_zone_combination", value=multi_zone_combination, expected_type=type_hints["multi_zone_combination"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument primary_v_switch_id", value=primary_v_switch_id, expected_type=type_hints["primary_v_switch_id"])
            check_type(argname="argument primary_zone_id", value=primary_zone_id, expected_type=type_hints["primary_zone_id"])
            check_type(argname="argument standby_v_switch_id", value=standby_v_switch_id, expected_type=type_hints["standby_v_switch_id"])
            check_type(argname="argument standby_zone_id", value=standby_zone_id, expected_type=type_hints["standby_zone_id"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument master_instance_type", value=master_instance_type, expected_type=type_hints["master_instance_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "arbiter_v_switch_id": arbiter_v_switch_id,
            "arbiter_zone_id": arbiter_zone_id,
            "arch_version": arch_version,
            "core_disk_size": core_disk_size,
            "core_disk_type": core_disk_type,
            "core_instance_type": core_instance_type,
            "core_node_count": core_node_count,
            "engine": engine,
            "engine_version": engine_version,
            "log_disk_size": log_disk_size,
            "log_disk_type": log_disk_type,
            "log_instance_type": log_instance_type,
            "log_node_count": log_node_count,
            "multi_zone_combination": multi_zone_combination,
            "pay_type": pay_type,
            "primary_v_switch_id": primary_v_switch_id,
            "primary_zone_id": primary_zone_id,
            "standby_v_switch_id": standby_v_switch_id,
            "standby_zone_id": standby_zone_id,
        }
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if cluster_name is not None:
            self._values["cluster_name"] = cluster_name
        if master_instance_type is not None:
            self._values["master_instance_type"] = master_instance_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def arbiter_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property arbiterVSwitchId: Arbitration virtual switch ID.

        The switch must be in the availability zone corresponding to ArbiterZoneId.
        '''
        result = self._values.get("arbiter_v_switch_id")
        assert result is not None, "Required property 'arbiter_v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def arbiter_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property arbiterZoneId: Arbiter zond id.'''
        result = self._values.get("arbiter_zone_id")
        assert result is not None, "Required property 'arbiter_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def arch_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property archVersion: Version of the deployment architecture.

        Currently, only the hbaseue engine type is supported. The value can be 2.0.
        '''
        result = self._values.get("arch_version")
        assert result is not None, "Required property 'arch_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def core_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property coreDiskSize: The value ranges from 400 GB to 64,000 GB.

        The step size is 40 GB.
        '''
        result = self._values.get("core_disk_size")
        assert result is not None, "Required property 'core_disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def core_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property coreDiskType: Core node disk type.

        Valid values:
        cloud_efficiency
        cloud_ssd
        local_hdd_pro
        local_ssd_pro
        '''
        result = self._values.get("core_disk_type")
        assert result is not None, "Required property 'core_disk_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def core_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.'''
        result = self._values.get("core_instance_type")
        assert result is not None, "Required property 'core_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def core_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property coreNodeCount: Number of Core nodes.

        The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
        '''
        result = self._values.get("core_node_count")
        assert result is not None, "Required property 'core_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engine: Service type.

        Currently, only HBase enhanced version is supported. The value can be hbaseue.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property engineVersion: The version of the engine.

        Valid values:
        hbaseue:2.0
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logDiskSize: log disk size.

        The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
        '''
        result = self._values.get("log_disk_size")
        assert result is not None, "Required property 'log_disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logDiskType: Log node disk type.

        Valid values:
        cloud_efficiency
        cloud_ssd
        local_hdd_pro
        local_ssd_pro
        '''
        result = self._values.get("log_disk_type")
        assert result is not None, "Required property 'log_disk_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logInstanceType: Log instance type.'''
        result = self._values.get("log_instance_type")
        assert result is not None, "Required property 'log_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logNodeCount: Log number of nodes.

        The value of log nodes ranges from 4 to 400 and is a multiple of 4.
        '''
        result = self._values.get("log_node_count")
        assert result is not None, "Required property 'log_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def multi_zone_combination(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property multiZoneCombination: Availability zone combination.'''
        result = self._values.get("multi_zone_combination")
        assert result is not None, "Required property 'multi_zone_combination' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: The billing method.

        Prepaid: The subscription billing method is used.
        Postpaid: The pay-as-you-go billing method is used.
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.'''
        result = self._values.get("primary_v_switch_id")
        assert result is not None, "Required property 'primary_v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property primaryZoneId: Availability zone ID of the primary availability zone instance.'''
        result = self._values.get("primary_zone_id")
        assert result is not None, "Required property 'primary_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def standby_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.'''
        result = self._values.get("standby_v_switch_id")
        assert result is not None, "Required property 'standby_v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def standby_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property standbyZoneId: Standby zone id.'''
        result = self._values.get("standby_zone_id")
        assert result is not None, "Required property 'standby_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: The auto-renewal period.

        Unit: month.
        The default value of this parameter is 0. This value indicates that auto-renewal is
        disabled.
        If this parameter is set to 2, the instance is automatically renewed for a two-month
        subscription after the instance expires.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterName: The name of the instance.

        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterInstanceType: The instance type of the master node.

        You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        '''
        result = self._values.get("master_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The subscription period.

        This parameter only takes effect when the PayType parameter is set to Prepaid.
        When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
        from 1 to 5.
        When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
        from 1 to 9.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property periodUnit: The unit of the subscription period.

        Valid values:
        year
        month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.

        You can query the group ID in the resource group console.
        If you leave this parameter empty, the instance is allocated to the default resource
        group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property securityIpList: The IP addresses in the whitelist.

        Example: 192.168.*.*/24. The 0.0.0.0/0 value cannot
        be added to the whitelist. Separate multiple IP addresses with commas (,).
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The ID of the virtual private cloud (VPC).

        If you leave this parameter and the VSwitchId
        parameter empty, the classic network type is used. The VPC network type is preferred.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MultiZoneClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbase.RosCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBase::Cluster``, which is used to create an ApsaraDB for HBase cluster.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Cluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5d3dc8132de3ecf93b2d63288ca66158c7d21cb581c57f5699a2ed307a52129)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f8b2d1203232993479090c60d2a63a3f155d37a263ae66e0aadb2d33fad71ae2)
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
        :Attribute: ClusterId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConnAddrs")
    def attr_service_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceConnAddrs: LIST of ServiceConnAddr.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="attrSlbConnAddrs")
    def attr_slb_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SlbConnAddrs: LIST of SlbConnAddr.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlbConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="attrThriftConn")
    def attr_thrift_conn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ThriftConn: Thrift Connection address list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrThriftConn"))

    @builtins.property
    @jsii.member(jsii_name="attrUiProxyConnAddrInfo")
    def attr_ui_proxy_conn_addr_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UiProxyConnAddrInfo: WebUI connection information list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUiProxyConnAddrInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrZkConnAddrs")
    def attr_zk_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZkConnAddrs: List of ZkConnAddr.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZkConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="coreInstanceType")
    def core_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "coreInstanceType"))

    @core_instance_type.setter
    def core_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__147ed7f5bf11a7577e36f240578aa7652e75ba0c825225bc81483a841e735a94)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coreInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b9fe99332ef8f1a784965aa2d604806cff9dc672f1c5ce8e0c3efe4d6dabd51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        engine: The type of the service. Valid values:
        hbase
        hbaseue
        bds
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9c3fd7b91d270c6b15bc031536aa07729913c974a339bdc3f4014e9904e44c1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        engineVersion: The version of the engine. Valid values:
        hbase:1.1, 2.0
        hbaseue:2.0
        bds:1.0
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c0439b34d02cb1ec9ac6e162f6443ae27a1439b2eda2a27e4c6fa57eb998682)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="nodeCount")
    def node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        nodeCount: The number of nodes. Valid values: 1 to 100.
        ApsaraDB for HBase in single-node mode: one node
        ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
        ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
        nodes
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "nodeCount"))

    @node_count.setter
    def node_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82a999adcabc20022746a731db4bb7301241cf3e61abde56ef67c2b9b2131233)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "nodeCount", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method.
        Prepaid: The subscription billing method is used.
        Postpaid: The pay-as-you-go billing method is used.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__38189487123e11498abaf8054bf4497ead02d50b06dc04ae705172541086b245)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The ID of the zone.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__972f4d9c76e6ea45e82d15979e78166a14d06e35957fde11ceb5143a188a68ea)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "zoneId", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: The auto-renewal period. Unit: month.
        The default value of this parameter is 0. This value indicates that auto-renewal is
        disabled.
        If this parameter is set to 2, the instance is automatically renewed for a two-month
        subscription after the instance expires.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc393136d7555d04ca974e905aa84318ed0322c2332785ed0b9a9c86f603c231)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="clusterName")
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterName: The name of the instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc47909387592c0591b1e3ef0e269765c39dac906b0ba39eac0c47c79a818379)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterName", value)

    @builtins.property
    @jsii.member(jsii_name="coldStorageSize")
    def cold_storage_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        coldStorageSize: The size of cold data storage.
        If this parameter is set to 0, cold data storage is disabled.
        If this parameter is set to a value greater than 0, cold data storage is enabled.
        The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "coldStorageSize"))

    @cold_storage_size.setter
    def cold_storage_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2afae803ab17a12b814c42dc05d1243a8900207b4172ce6f4a28be08b1132cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coldStorageSize", value)

    @builtins.property
    @jsii.member(jsii_name="diskSize")
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        diskSize: The disk size of the node. Unit: GB.
        For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
        GB and the step size is 1 GB.
        For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
        from 400 GB to 64,000 GB and the step size is 40 GB.
        For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
        varies by instance type. The following list provides the mappings between disks sizes
        and instance types:
        hbase.d1.4xlarge =44000
        hbase.d1.6xlarge =66000
        hbase.d1.8xlarge =88000
        hbase.i2.xlarge =894
        hbase.i2.2xlarge =1788
        hbase.i2.4xlarge =3576
        hbase.i2.8xlarge =7152
        hbase.d2s.5xlarge =58400
        hbase.d2s.10xlarge =109500
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskSize"))

    @disk_size.setter
    def disk_size(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5b08d2b8ef3de10870f5eb731d1b07d475e7423bd566ce2d80a8b078a2ed9012)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskSize", value)

    @builtins.property
    @jsii.member(jsii_name="diskType")
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        diskType: The type of the disk. Valid values:
        cloud_efficiency
        cloud_ssd
        local_hdd_pro
        local_ssd_pro
        cloud_essd_pl1
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "diskType"))

    @disk_type.setter
    def disk_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3008c83d0355805e20a0191404b8cf16368b460b401dbb05d3384f18de7cb021)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskType", value)

    @builtins.property
    @jsii.member(jsii_name="encryptionKey")
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
        It shows that the current cloud disk version is unable to close after the encryption is turned on.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "encryptionKey"))

    @encryption_key.setter
    def encryption_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b296bb52fd55260c12028c1b549c43274bd041577610cbc286b419e704253202)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "encryptionKey", value)

    @builtins.property
    @jsii.member(jsii_name="masterInstanceType")
    def master_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterInstanceType"))

    @master_instance_type.setter
    def master_instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd6eeeac7d55f3b19bcdc54d8ebbf6aace80d5e95d75c2bcc8f6f932e1e05473)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period.
        This parameter only takes effect when the PayType parameter is set to Prepaid.
        When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
        from 1 to 5.
        When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
        from 1 to 9.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d72bec11e30f5c2924735705e863c82f355b06c53c3c40f81ad7c266813daf4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription period. Valid values:
        year
        month
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__310ac20f9716fad1882609409382c226b51181c434eeccf793580f0e5da26a74)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
        If you leave this parameter empty, the instance is allocated to the default resource
        group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba642c44ba68974ebe4c16b793ea2ffd821f1830fa5199ed338a014ab5891453)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*/24. The 0.0.0.0/0 value cannot
        be added to the whitelist. Separate multiple IP addresses with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__072c84a6bbc97148ebcea0185fc0751533eeba619eb8409e15f72c9f10bbd16a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
        parameter empty, the classic network type is used. The VPC network type is preferred.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fb2c57e65e88dddc830ded09924f8339f6e9ee3ea3a9a905c6f1e2ade4103152)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0ea9895e88d834cb6ce7bf41c3e1ce21ed29a62238b0cc8553cf8df45e080ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbase.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "core_instance_type": "coreInstanceType",
        "engine": "engine",
        "engine_version": "engineVersion",
        "node_count": "nodeCount",
        "pay_type": "payType",
        "zone_id": "zoneId",
        "auto_renew_period": "autoRenewPeriod",
        "cluster_name": "clusterName",
        "cold_storage_size": "coldStorageSize",
        "disk_size": "diskSize",
        "disk_type": "diskType",
        "encryption_key": "encryptionKey",
        "master_instance_type": "masterInstanceType",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
        "security_ip_list": "securityIpList",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        core_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cold_storage_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster

        :param core_instance_type: 
        :param engine: 
        :param engine_version: 
        :param node_count: 
        :param pay_type: 
        :param zone_id: 
        :param auto_renew_period: 
        :param cluster_name: 
        :param cold_storage_size: 
        :param disk_size: 
        :param disk_type: 
        :param encryption_key: 
        :param master_instance_type: 
        :param period: 
        :param period_unit: 
        :param resource_group_id: 
        :param security_ip_list: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__465c5a8b1f172e0a3768ac6443db806374fe8f376ca7e8eddc35b1ea2c1bddf1)
            check_type(argname="argument core_instance_type", value=core_instance_type, expected_type=type_hints["core_instance_type"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument node_count", value=node_count, expected_type=type_hints["node_count"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument cold_storage_size", value=cold_storage_size, expected_type=type_hints["cold_storage_size"])
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            check_type(argname="argument encryption_key", value=encryption_key, expected_type=type_hints["encryption_key"])
            check_type(argname="argument master_instance_type", value=master_instance_type, expected_type=type_hints["master_instance_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "core_instance_type": core_instance_type,
            "engine": engine,
            "engine_version": engine_version,
            "node_count": node_count,
            "pay_type": pay_type,
            "zone_id": zone_id,
        }
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if cluster_name is not None:
            self._values["cluster_name"] = cluster_name
        if cold_storage_size is not None:
            self._values["cold_storage_size"] = cold_storage_size
        if disk_size is not None:
            self._values["disk_size"] = disk_size
        if disk_type is not None:
            self._values["disk_type"] = disk_type
        if encryption_key is not None:
            self._values["encryption_key"] = encryption_key
        if master_instance_type is not None:
            self._values["master_instance_type"] = master_instance_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def core_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        '''
        result = self._values.get("core_instance_type")
        assert result is not None, "Required property 'core_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        engine: The type of the service. Valid values:
        hbase
        hbaseue
        bds
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        engineVersion: The version of the engine. Valid values:
        hbase:1.1, 2.0
        hbaseue:2.0
        bds:1.0
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        nodeCount: The number of nodes. Valid values: 1 to 100.
        ApsaraDB for HBase in single-node mode: one node
        ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
        ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
        nodes
        '''
        result = self._values.get("node_count")
        assert result is not None, "Required property 'node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method.
        Prepaid: The subscription billing method is used.
        Postpaid: The pay-as-you-go billing method is used.
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: zoneId: The ID of the zone.
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: The auto-renewal period. Unit: month.
        The default value of this parameter is 0. This value indicates that auto-renewal is
        disabled.
        If this parameter is set to 2, the instance is automatically renewed for a two-month
        subscription after the instance expires.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterName: The name of the instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cold_storage_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        coldStorageSize: The size of cold data storage.
        If this parameter is set to 0, cold data storage is disabled.
        If this parameter is set to a value greater than 0, cold data storage is enabled.
        The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
        '''
        result = self._values.get("cold_storage_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_size(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        diskSize: The disk size of the node. Unit: GB.
        For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
        GB and the step size is 1 GB.
        For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
        from 400 GB to 64,000 GB and the step size is 40 GB.
        For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
        varies by instance type. The following list provides the mappings between disks sizes
        and instance types:
        hbase.d1.4xlarge =44000
        hbase.d1.6xlarge =66000
        hbase.d1.8xlarge =88000
        hbase.i2.xlarge =894
        hbase.i2.2xlarge =1788
        hbase.i2.4xlarge =3576
        hbase.i2.8xlarge =7152
        hbase.d2s.5xlarge =58400
        hbase.d2s.10xlarge =109500
        '''
        result = self._values.get("disk_size")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        diskType: The type of the disk. Valid values:
        cloud_efficiency
        cloud_ssd
        local_hdd_pro
        local_ssd_pro
        cloud_essd_pl1
        '''
        result = self._values.get("disk_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def encryption_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
        It shows that the current cloud disk version is unable to close after the encryption is turned on.
        '''
        result = self._values.get("encryption_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        '''
        result = self._values.get("master_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period.
        This parameter only takes effect when the PayType parameter is set to Prepaid.
        When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
        from 1 to 5.
        When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
        from 1 to 9.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription period. Valid values:
        year
        month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
        If you leave this parameter empty, the instance is allocated to the default resource
        group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*/24. The 0.0.0.0/0 value cannot
        be added to the whitelist. Separate multiple IP addresses with commas (,).
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
        parameter empty, the classic network type is used. The VPC network type is preferred.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The ID of the vSwitch.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMultiZoneCluster(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbase.RosMultiZoneCluster",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::HBase::MultiZoneCluster``, which is used to create an ApsaraDB for HBase cluster that resides in multiple zones.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MultiZoneCluster`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMultiZoneClusterProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6e311b79f9ac98d6e3666036d4f19034c5628116d324e0d396f89b42003d712)
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
            type_hints = typing.get_type_hints(_typecheckingstub__75d1547911873e253739d6a3d77f10964b6c42db25f8016f28f7c8dd40d24089)
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
        :Attribute: ClusterId: The ID of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterId"))

    @builtins.property
    @jsii.member(jsii_name="attrServiceConnAddrs")
    def attr_service_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ServiceConnAddrs: LIST of ServiceConnAddr.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrServiceConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="attrSlbConnAddrs")
    def attr_slb_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SlbConnAddrs: LIST of SlbConnAddr.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlbConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="attrThriftConn")
    def attr_thrift_conn(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ThriftConn: Thrift Connection address list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrThriftConn"))

    @builtins.property
    @jsii.member(jsii_name="attrUiProxyConnAddrInfo")
    def attr_ui_proxy_conn_addr_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UiProxyConnAddrInfo: WebUI connection information list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUiProxyConnAddrInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrZkConnAddrs")
    def attr_zk_conn_addrs(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ZkConnAddrs: List of ZkConnAddr.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrZkConnAddrs"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="arbiterVSwitchId")
    def arbiter_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: arbiterVSwitchId: Arbitration virtual switch ID. The switch must be in the availability zone corresponding to ArbiterZoneId.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "arbiterVSwitchId"))

    @arbiter_v_switch_id.setter
    def arbiter_v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b811861fa2aa81d9a8a83128568b2a51546f326995e34eda187876dde9ba6c8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "arbiterVSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="arbiterZoneId")
    def arbiter_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: arbiterZoneId: Arbiter zond id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "arbiterZoneId"))

    @arbiter_zone_id.setter
    def arbiter_zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3748eb7f374b1a5a3631302ce10030ff4fe9a38ae05fb07fc0c4e3e8f3d20707)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "arbiterZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="archVersion")
    def arch_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: archVersion: Version of the deployment architecture. Currently, only the hbaseue engine type is supported. The value can be 2.0.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "archVersion"))

    @arch_version.setter
    def arch_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__845b186ec6ebd9f9da0d3709e809f72f264d832f28a4f62cc846ca042933a13c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "archVersion", value)

    @builtins.property
    @jsii.member(jsii_name="coreDiskSize")
    def core_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: coreDiskSize: The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "coreDiskSize"))

    @core_disk_size.setter
    def core_disk_size(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a47732bd4413f815aed4a5ef83b52b5c97cd9b7f3551446efe8f63b7aab07e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coreDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="coreDiskType")
    def core_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        coreDiskType: Core node disk type. Valid values:
        cloud_efficiency
        cloud_ssd
        local_hdd_pro
        local_ssd_pro
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "coreDiskType"))

    @core_disk_type.setter
    def core_disk_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8735cbd6c9767a3c5b01b85bd5938f80b561b40ec7d7477439b8bc95d991bc3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coreDiskType", value)

    @builtins.property
    @jsii.member(jsii_name="coreInstanceType")
    def core_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "coreInstanceType"))

    @core_instance_type.setter
    def core_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31351681b289b24a0bd59512ebaa01dbf2e0ff64869bbc928b7900e9a5f696fc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coreInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="coreNodeCount")
    def core_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: coreNodeCount: Number of Core nodes. The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "coreNodeCount"))

    @core_node_count.setter
    def core_node_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d697ae62eec99c190b9564f4bd55c61ed1ccd6a86fd177c9f70c55c871d6261)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "coreNodeCount", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1dc0aa8dd1760edc0f1968c301e5731fe805fbec2d2d43cf7a510dc7e5c0628)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="engine")
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: Service type. Currently, only HBase enhanced version is supported. The value can be hbaseue.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engine"))

    @engine.setter
    def engine(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__616d9e277e05ee3ce32f6c6a81a833c91d897df033aa045c13d37fdfffd44f79)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engine", value)

    @builtins.property
    @jsii.member(jsii_name="engineVersion")
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        engineVersion: The version of the engine. Valid values:
        hbaseue:2.0
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "engineVersion"))

    @engine_version.setter
    def engine_version(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c3ba14bc468cbf6ba03ce0dcda78759d1dcc4c40098d5fe3553c85174c47b1fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "engineVersion", value)

    @builtins.property
    @jsii.member(jsii_name="logDiskSize")
    def log_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logDiskSize: log disk size. The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logDiskSize"))

    @log_disk_size.setter
    def log_disk_size(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1656a0e881278988e83fb5d7cbe29b68007d8891b9a9e2b2f5705900e802e8d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logDiskSize", value)

    @builtins.property
    @jsii.member(jsii_name="logDiskType")
    def log_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logDiskType: Log node disk type. Valid values:
        cloud_efficiency
        cloud_ssd
        local_hdd_pro
        local_ssd_pro
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logDiskType"))

    @log_disk_type.setter
    def log_disk_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3429727f93f9a960efaf9cbf004edd39032079e733a198d2a7e0aeae11b18df0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logDiskType", value)

    @builtins.property
    @jsii.member(jsii_name="logInstanceType")
    def log_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logInstanceType: Log instance type.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logInstanceType"))

    @log_instance_type.setter
    def log_instance_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4b5472fad8d1ec75b4b3a01949250a344cedfd1567888818b575bd24cecff5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="logNodeCount")
    def log_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logNodeCount: Log number of nodes. The value of log nodes ranges from 4 to 400 and is a multiple of 4.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logNodeCount"))

    @log_node_count.setter
    def log_node_count(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7d49a09552b68e9574878a7a0d44d4d0f9359c3399ac7f37f36132aa65ede795)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logNodeCount", value)

    @builtins.property
    @jsii.member(jsii_name="multiZoneCombination")
    def multi_zone_combination(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: multiZoneCombination: Availability zone combination.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "multiZoneCombination"))

    @multi_zone_combination.setter
    def multi_zone_combination(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e33e29e80079a987a443919dd5ff231815b073718ad65a2ac3fdb8c1ee5b0a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "multiZoneCombination", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method.
        Prepaid: The subscription billing method is used.
        Postpaid: The pay-as-you-go billing method is used.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0956013a1723dfef13f43c6a31c9210157e67877fad0ea579a76c4fc03b8db4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="primaryVSwitchId")
    def primary_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "primaryVSwitchId"))

    @primary_v_switch_id.setter
    def primary_v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b837704ce85e5577dc49ee9bc3dcbea1e1ab88919c1b0b59dd91e61ccdc72e3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primaryVSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="primaryZoneId")
    def primary_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primaryZoneId: Availability zone ID of the primary availability zone instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "primaryZoneId"))

    @primary_zone_id.setter
    def primary_zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f2a310790c8bb53bd7c957ec5b7db25e6eebb9b8a55918789f0226963de14bc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "primaryZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="standbyVSwitchId")
    def standby_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "standbyVSwitchId"))

    @standby_v_switch_id.setter
    def standby_v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b173ca8473f4314b96d7b5c53689838042f38ad31d6c1d4e9ca5f85f7107eb86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "standbyVSwitchId", value)

    @builtins.property
    @jsii.member(jsii_name="standbyZoneId")
    def standby_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: standbyZoneId: Standby zone id.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "standbyZoneId"))

    @standby_zone_id.setter
    def standby_zone_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7738b788561a6b3f73643173dddc7676d2970026066a546e5b519b246536c9f7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "standbyZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: The auto-renewal period. Unit: month.
        The default value of this parameter is 0. This value indicates that auto-renewal is
        disabled.
        If this parameter is set to 2, the instance is automatically renewed for a two-month
        subscription after the instance expires.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__28ec4cb1a203efb1c5c9aefad831a98e57e0453067bfc6cc38e76bf887aa6256)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="clusterName")
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterName: The name of the instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterName"))

    @cluster_name.setter
    def cluster_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73ae75fc6f3a856d712c3a7aaaeaed987de1bbf8b4b39c96628f5d516f033ecb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterName", value)

    @builtins.property
    @jsii.member(jsii_name="masterInstanceType")
    def master_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterInstanceType"))

    @master_instance_type.setter
    def master_instance_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b832dfacbd1638ec2f6731161ea509eca90649d4312750c5b5e571db795d584d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterInstanceType", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period.
        This parameter only takes effect when the PayType parameter is set to Prepaid.
        When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
        from 1 to 5.
        When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
        from 1 to 9.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__967cf49419cb5d26685a4359a93cb09baef67c24567e8b7dcb87a96dc1f9c4cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="periodUnit")
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription period. Valid values:
        year
        month
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "periodUnit"))

    @period_unit.setter
    def period_unit(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f0f7eeea729515b37a7ed94847954d3c0a44c847ddeb278acef51b61d32b7ff)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "periodUnit", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
        If you leave this parameter empty, the instance is allocated to the default resource
        group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb7ea8e63c3fda3c584c68d6db3adfd6b1ebbc96d9cb1cb860df6d5f0be4405a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="securityIpList")
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*/24. The 0.0.0.0/0 value cannot
        be added to the whitelist. Separate multiple IP addresses with commas (,).
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "securityIpList"))

    @security_ip_list.setter
    def security_ip_list(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__158ab6c8d620ee27bc84fd2bed1a8dc440e2bab6fba6464d701d188d7f796740)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "securityIpList", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
        parameter empty, the classic network type is used. The VPC network type is preferred.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__080121bbe5abef0434779cf1963235e6ab0ca6ed105c7a5c376e1d7c43a53ed3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbase.RosMultiZoneClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "arbiter_v_switch_id": "arbiterVSwitchId",
        "arbiter_zone_id": "arbiterZoneId",
        "arch_version": "archVersion",
        "core_disk_size": "coreDiskSize",
        "core_disk_type": "coreDiskType",
        "core_instance_type": "coreInstanceType",
        "core_node_count": "coreNodeCount",
        "engine": "engine",
        "engine_version": "engineVersion",
        "log_disk_size": "logDiskSize",
        "log_disk_type": "logDiskType",
        "log_instance_type": "logInstanceType",
        "log_node_count": "logNodeCount",
        "multi_zone_combination": "multiZoneCombination",
        "pay_type": "payType",
        "primary_v_switch_id": "primaryVSwitchId",
        "primary_zone_id": "primaryZoneId",
        "standby_v_switch_id": "standbyVSwitchId",
        "standby_zone_id": "standbyZoneId",
        "auto_renew_period": "autoRenewPeriod",
        "cluster_name": "clusterName",
        "master_instance_type": "masterInstanceType",
        "period": "period",
        "period_unit": "periodUnit",
        "resource_group_id": "resourceGroupId",
        "security_ip_list": "securityIpList",
        "vpc_id": "vpcId",
    },
)
class RosMultiZoneClusterProps:
    def __init__(
        self,
        *,
        arbiter_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        arbiter_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        arch_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        core_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        core_disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        core_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        core_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        log_disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        multi_zone_combination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        primary_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        standby_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        standby_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosMultiZoneCluster``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster

        :param arbiter_v_switch_id: 
        :param arbiter_zone_id: 
        :param arch_version: 
        :param core_disk_size: 
        :param core_disk_type: 
        :param core_instance_type: 
        :param core_node_count: 
        :param engine: 
        :param engine_version: 
        :param log_disk_size: 
        :param log_disk_type: 
        :param log_instance_type: 
        :param log_node_count: 
        :param multi_zone_combination: 
        :param pay_type: 
        :param primary_v_switch_id: 
        :param primary_zone_id: 
        :param standby_v_switch_id: 
        :param standby_zone_id: 
        :param auto_renew_period: 
        :param cluster_name: 
        :param master_instance_type: 
        :param period: 
        :param period_unit: 
        :param resource_group_id: 
        :param security_ip_list: 
        :param vpc_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__da54529e7f07060cb8ea8d6e8f6dbdd4049696fc452b5adb0e98d7c0f00a06d7)
            check_type(argname="argument arbiter_v_switch_id", value=arbiter_v_switch_id, expected_type=type_hints["arbiter_v_switch_id"])
            check_type(argname="argument arbiter_zone_id", value=arbiter_zone_id, expected_type=type_hints["arbiter_zone_id"])
            check_type(argname="argument arch_version", value=arch_version, expected_type=type_hints["arch_version"])
            check_type(argname="argument core_disk_size", value=core_disk_size, expected_type=type_hints["core_disk_size"])
            check_type(argname="argument core_disk_type", value=core_disk_type, expected_type=type_hints["core_disk_type"])
            check_type(argname="argument core_instance_type", value=core_instance_type, expected_type=type_hints["core_instance_type"])
            check_type(argname="argument core_node_count", value=core_node_count, expected_type=type_hints["core_node_count"])
            check_type(argname="argument engine", value=engine, expected_type=type_hints["engine"])
            check_type(argname="argument engine_version", value=engine_version, expected_type=type_hints["engine_version"])
            check_type(argname="argument log_disk_size", value=log_disk_size, expected_type=type_hints["log_disk_size"])
            check_type(argname="argument log_disk_type", value=log_disk_type, expected_type=type_hints["log_disk_type"])
            check_type(argname="argument log_instance_type", value=log_instance_type, expected_type=type_hints["log_instance_type"])
            check_type(argname="argument log_node_count", value=log_node_count, expected_type=type_hints["log_node_count"])
            check_type(argname="argument multi_zone_combination", value=multi_zone_combination, expected_type=type_hints["multi_zone_combination"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument primary_v_switch_id", value=primary_v_switch_id, expected_type=type_hints["primary_v_switch_id"])
            check_type(argname="argument primary_zone_id", value=primary_zone_id, expected_type=type_hints["primary_zone_id"])
            check_type(argname="argument standby_v_switch_id", value=standby_v_switch_id, expected_type=type_hints["standby_v_switch_id"])
            check_type(argname="argument standby_zone_id", value=standby_zone_id, expected_type=type_hints["standby_zone_id"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument cluster_name", value=cluster_name, expected_type=type_hints["cluster_name"])
            check_type(argname="argument master_instance_type", value=master_instance_type, expected_type=type_hints["master_instance_type"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument period_unit", value=period_unit, expected_type=type_hints["period_unit"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument security_ip_list", value=security_ip_list, expected_type=type_hints["security_ip_list"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "arbiter_v_switch_id": arbiter_v_switch_id,
            "arbiter_zone_id": arbiter_zone_id,
            "arch_version": arch_version,
            "core_disk_size": core_disk_size,
            "core_disk_type": core_disk_type,
            "core_instance_type": core_instance_type,
            "core_node_count": core_node_count,
            "engine": engine,
            "engine_version": engine_version,
            "log_disk_size": log_disk_size,
            "log_disk_type": log_disk_type,
            "log_instance_type": log_instance_type,
            "log_node_count": log_node_count,
            "multi_zone_combination": multi_zone_combination,
            "pay_type": pay_type,
            "primary_v_switch_id": primary_v_switch_id,
            "primary_zone_id": primary_zone_id,
            "standby_v_switch_id": standby_v_switch_id,
            "standby_zone_id": standby_zone_id,
        }
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if cluster_name is not None:
            self._values["cluster_name"] = cluster_name
        if master_instance_type is not None:
            self._values["master_instance_type"] = master_instance_type
        if period is not None:
            self._values["period"] = period
        if period_unit is not None:
            self._values["period_unit"] = period_unit
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_list is not None:
            self._values["security_ip_list"] = security_ip_list
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id

    @builtins.property
    def arbiter_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: arbiterVSwitchId: Arbitration virtual switch ID. The switch must be in the availability zone corresponding to ArbiterZoneId.
        '''
        result = self._values.get("arbiter_v_switch_id")
        assert result is not None, "Required property 'arbiter_v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def arbiter_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: arbiterZoneId: Arbiter zond id.
        '''
        result = self._values.get("arbiter_zone_id")
        assert result is not None, "Required property 'arbiter_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def arch_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: archVersion: Version of the deployment architecture. Currently, only the hbaseue engine type is supported. The value can be 2.0.
        '''
        result = self._values.get("arch_version")
        assert result is not None, "Required property 'arch_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def core_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: coreDiskSize: The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
        '''
        result = self._values.get("core_disk_size")
        assert result is not None, "Required property 'core_disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def core_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        coreDiskType: Core node disk type. Valid values:
        cloud_efficiency
        cloud_ssd
        local_hdd_pro
        local_ssd_pro
        '''
        result = self._values.get("core_disk_type")
        assert result is not None, "Required property 'core_disk_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def core_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        '''
        result = self._values.get("core_instance_type")
        assert result is not None, "Required property 'core_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def core_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: coreNodeCount: Number of Core nodes. The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
        '''
        result = self._values.get("core_node_count")
        assert result is not None, "Required property 'core_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: engine: Service type. Currently, only HBase enhanced version is supported. The value can be hbaseue.
        '''
        result = self._values.get("engine")
        assert result is not None, "Required property 'engine' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def engine_version(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        engineVersion: The version of the engine. Valid values:
        hbaseue:2.0
        '''
        result = self._values.get("engine_version")
        assert result is not None, "Required property 'engine_version' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logDiskSize: log disk size. The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
        '''
        result = self._values.get("log_disk_size")
        assert result is not None, "Required property 'log_disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        logDiskType: Log node disk type. Valid values:
        cloud_efficiency
        cloud_ssd
        local_hdd_pro
        local_ssd_pro
        '''
        result = self._values.get("log_disk_type")
        assert result is not None, "Required property 'log_disk_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_instance_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logInstanceType: Log instance type.
        '''
        result = self._values.get("log_instance_type")
        assert result is not None, "Required property 'log_instance_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_node_count(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logNodeCount: Log number of nodes. The value of log nodes ranges from 4 to 400 and is a multiple of 4.
        '''
        result = self._values.get("log_node_count")
        assert result is not None, "Required property 'log_node_count' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def multi_zone_combination(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: multiZoneCombination: Availability zone combination.
        '''
        result = self._values.get("multi_zone_combination")
        assert result is not None, "Required property 'multi_zone_combination' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method.
        Prepaid: The subscription billing method is used.
        Postpaid: The pay-as-you-go billing method is used.
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
        '''
        result = self._values.get("primary_v_switch_id")
        assert result is not None, "Required property 'primary_v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def primary_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: primaryZoneId: Availability zone ID of the primary availability zone instance.
        '''
        result = self._values.get("primary_zone_id")
        assert result is not None, "Required property 'primary_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def standby_v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
        '''
        result = self._values.get("standby_v_switch_id")
        assert result is not None, "Required property 'standby_v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def standby_zone_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: standbyZoneId: Standby zone id.
        '''
        result = self._values.get("standby_zone_id")
        assert result is not None, "Required property 'standby_zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: The auto-renewal period. Unit: month.
        The default value of this parameter is 0. This value indicates that auto-renewal is
        disabled.
        If this parameter is set to 2, the instance is automatically renewed for a two-month
        subscription after the instance expires.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def cluster_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        clusterName: The name of the instance.
        The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        (.), underscores (_), and hyphens (-). It must start with a letter.
        '''
        result = self._values.get("cluster_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_instance_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        '''
        result = self._values.get("master_instance_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The subscription period.
        This parameter only takes effect when the PayType parameter is set to Prepaid.
        When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
        from 1 to 5.
        When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
        from 1 to 9.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period_unit(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        periodUnit: The unit of the subscription period. Valid values:
        year
        month
        '''
        result = self._values.get("period_unit")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
        If you leave this parameter empty, the instance is allocated to the default resource
        group.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def security_ip_list(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*/24. The 0.0.0.0/0 value cannot
        be added to the whitelist. Separate multiple IP addresses with commas (,).
        '''
        result = self._values.get("security_ip_list")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
        parameter empty, the classic network type is used. The VPC network type is preferred.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMultiZoneClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "ClusterProps",
    "MultiZoneCluster",
    "MultiZoneClusterProps",
    "RosCluster",
    "RosClusterProps",
    "RosMultiZoneCluster",
    "RosMultiZoneClusterProps",
]

publication.publish()

def _typecheckingstub__5434b30464306efe306ff34e3271e48a667b9f26fae9f1b7884911f8917da568(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06762b74a7a469657f1f4ddb6fa6f35a2ba4ebaaef10bd5d55d0b5304e0c141b(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcc60e245a1867e1e173bec5e9f47a686a69f8363c5a5008fc68f5d66d501925(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1de1d3cb3071ac12278a8f5f6ac865c312bba19e4b185c2511b4ef965b359eae(
    value: ClusterProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc19b2c6a4a938939531f5bdb3417001cb619dbcf8ffb9d5cda9bf7173261027(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff83030626a28309b769883767b3f890a649a1bb0bf4b819477f514b5bd3102c(
    *,
    core_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cold_storage_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71381d3dd4a67e51c412f2148ed0a4e36154f711b564a86e6885aaa1dd092a52(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MultiZoneClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89d65a49e0b3d396424bb4d9aa25008d94ecf0e7b20b110b129f7931efdc7f9f(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6ad624fb5d7ab238bf39e5190d656ab8b7b876cbe25fe6ac0a6d4b5b81612a6(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6a7c779e9a75b283d1c6c15a770dc2fb9c1f98469ad59cedd245f763c03c8a9(
    value: MultiZoneClusterProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a23c30a651cd52ef01b5fc2e6fa71197e37564181772aad98d80961b325dbd50(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28232ff48dfd64ee7d37571e0e658345e0577f00794df8fbcf6f0a08943c0d56(
    *,
    arbiter_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    arbiter_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    arch_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    core_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    core_disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    core_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    core_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    log_disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    multi_zone_combination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    standby_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    standby_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5d3dc8132de3ecf93b2d63288ca66158c7d21cb581c57f5699a2ed307a52129(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8b2d1203232993479090c60d2a63a3f155d37a263ae66e0aadb2d33fad71ae2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__147ed7f5bf11a7577e36f240578aa7652e75ba0c825225bc81483a841e735a94(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b9fe99332ef8f1a784965aa2d604806cff9dc672f1c5ce8e0c3efe4d6dabd51(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9c3fd7b91d270c6b15bc031536aa07729913c974a339bdc3f4014e9904e44c1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c0439b34d02cb1ec9ac6e162f6443ae27a1439b2eda2a27e4c6fa57eb998682(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82a999adcabc20022746a731db4bb7301241cf3e61abde56ef67c2b9b2131233(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__38189487123e11498abaf8054bf4497ead02d50b06dc04ae705172541086b245(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__972f4d9c76e6ea45e82d15979e78166a14d06e35957fde11ceb5143a188a68ea(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc393136d7555d04ca974e905aa84318ed0322c2332785ed0b9a9c86f603c231(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc47909387592c0591b1e3ef0e269765c39dac906b0ba39eac0c47c79a818379(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2afae803ab17a12b814c42dc05d1243a8900207b4172ce6f4a28be08b1132cd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5b08d2b8ef3de10870f5eb731d1b07d475e7423bd566ce2d80a8b078a2ed9012(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3008c83d0355805e20a0191404b8cf16368b460b401dbb05d3384f18de7cb021(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b296bb52fd55260c12028c1b549c43274bd041577610cbc286b419e704253202(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd6eeeac7d55f3b19bcdc54d8ebbf6aace80d5e95d75c2bcc8f6f932e1e05473(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d72bec11e30f5c2924735705e863c82f355b06c53c3c40f81ad7c266813daf4d(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__310ac20f9716fad1882609409382c226b51181c434eeccf793580f0e5da26a74(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba642c44ba68974ebe4c16b793ea2ffd821f1830fa5199ed338a014ab5891453(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__072c84a6bbc97148ebcea0185fc0751533eeba619eb8409e15f72c9f10bbd16a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fb2c57e65e88dddc830ded09924f8339f6e9ee3ea3a9a905c6f1e2ade4103152(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0ea9895e88d834cb6ce7bf41c3e1ce21ed29a62238b0cc8553cf8df45e080ff(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__465c5a8b1f172e0a3768ac6443db806374fe8f376ca7e8eddc35b1ea2c1bddf1(
    *,
    core_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cold_storage_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_size: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disk_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6e311b79f9ac98d6e3666036d4f19034c5628116d324e0d396f89b42003d712(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMultiZoneClusterProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__75d1547911873e253739d6a3d77f10964b6c42db25f8016f28f7c8dd40d24089(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b811861fa2aa81d9a8a83128568b2a51546f326995e34eda187876dde9ba6c8(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3748eb7f374b1a5a3631302ce10030ff4fe9a38ae05fb07fc0c4e3e8f3d20707(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__845b186ec6ebd9f9da0d3709e809f72f264d832f28a4f62cc846ca042933a13c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a47732bd4413f815aed4a5ef83b52b5c97cd9b7f3551446efe8f63b7aab07e5(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8735cbd6c9767a3c5b01b85bd5938f80b561b40ec7d7477439b8bc95d991bc3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31351681b289b24a0bd59512ebaa01dbf2e0ff64869bbc928b7900e9a5f696fc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d697ae62eec99c190b9564f4bd55c61ed1ccd6a86fd177c9f70c55c871d6261(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1dc0aa8dd1760edc0f1968c301e5731fe805fbec2d2d43cf7a510dc7e5c0628(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__616d9e277e05ee3ce32f6c6a81a833c91d897df033aa045c13d37fdfffd44f79(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3ba14bc468cbf6ba03ce0dcda78759d1dcc4c40098d5fe3553c85174c47b1fd(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1656a0e881278988e83fb5d7cbe29b68007d8891b9a9e2b2f5705900e802e8d9(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3429727f93f9a960efaf9cbf004edd39032079e733a198d2a7e0aeae11b18df0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4b5472fad8d1ec75b4b3a01949250a344cedfd1567888818b575bd24cecff5a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7d49a09552b68e9574878a7a0d44d4d0f9359c3399ac7f37f36132aa65ede795(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e33e29e80079a987a443919dd5ff231815b073718ad65a2ac3fdb8c1ee5b0a6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0956013a1723dfef13f43c6a31c9210157e67877fad0ea579a76c4fc03b8db4(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b837704ce85e5577dc49ee9bc3dcbea1e1ab88919c1b0b59dd91e61ccdc72e3(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f2a310790c8bb53bd7c957ec5b7db25e6eebb9b8a55918789f0226963de14bc(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b173ca8473f4314b96d7b5c53689838042f38ad31d6c1d4e9ca5f85f7107eb86(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7738b788561a6b3f73643173dddc7676d2970026066a546e5b519b246536c9f7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__28ec4cb1a203efb1c5c9aefad831a98e57e0453067bfc6cc38e76bf887aa6256(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73ae75fc6f3a856d712c3a7aaaeaed987de1bbf8b4b39c96628f5d516f033ecb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b832dfacbd1638ec2f6731161ea509eca90649d4312750c5b5e571db795d584d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__967cf49419cb5d26685a4359a93cb09baef67c24567e8b7dcb87a96dc1f9c4cd(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f0f7eeea729515b37a7ed94847954d3c0a44c847ddeb278acef51b61d32b7ff(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb7ea8e63c3fda3c584c68d6db3adfd6b1ebbc96d9cb1cb860df6d5f0be4405a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__158ab6c8d620ee27bc84fd2bed1a8dc440e2bab6fba6464d701d188d7f796740(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__080121bbe5abef0434779cf1963235e6ab0ca6ed105c7a5c376e1d7c43a53ed3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__da54529e7f07060cb8ea8d6e8f6dbdd4049696fc452b5adb0e98d7c0f00a06d7(
    *,
    arbiter_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    arbiter_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    arch_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    core_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    core_disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    core_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    core_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    engine: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    engine_version: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    log_disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_node_count: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    multi_zone_combination: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    primary_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    standby_v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    standby_zone_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cluster_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period_unit: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
