'''
## Aliyun ROS DTS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as DTS from '@alicloud/ros-cdk-dts';
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


class ConsumerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.ConsumerGroup",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DTS::ConsumerGroup``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosConsumerGroup``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ConsumerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f463f651965585cbf8d348d1b3e433fc1d513184fb35b21149686cbd534b179)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupId")
    def attr_consumer_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConsumerGroupID: Consumer group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupName")
    def attr_consumer_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ConsumerGroupName: Consumer group name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionInstanceId")
    def attr_subscription_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SubscriptionInstanceId: Subscription instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.ConsumerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "consumer_group_name": "consumerGroupName",
        "consumer_group_password": "consumerGroupPassword",
        "consumer_group_user_name": "consumerGroupUserName",
        "subscription_instance_id": "subscriptionInstanceId",
    },
)
class ConsumerGroupProps:
    def __init__(
        self,
        *,
        consumer_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        consumer_group_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        consumer_group_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        subscription_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ConsumerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup

        :param consumer_group_name: Property consumerGroupName: Consumer group name.
        :param consumer_group_password: Property consumerGroupPassword: Password of consumer group.
        :param consumer_group_user_name: Property consumerGroupUserName: User name of consumer group.
        :param subscription_instance_id: Property subscriptionInstanceId: Subscription instance ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__922d6c12e6c66043ca355053c590e476d7b3996c7fc99f5e47eb79016b51fc19)
            check_type(argname="argument consumer_group_name", value=consumer_group_name, expected_type=type_hints["consumer_group_name"])
            check_type(argname="argument consumer_group_password", value=consumer_group_password, expected_type=type_hints["consumer_group_password"])
            check_type(argname="argument consumer_group_user_name", value=consumer_group_user_name, expected_type=type_hints["consumer_group_user_name"])
            check_type(argname="argument subscription_instance_id", value=subscription_instance_id, expected_type=type_hints["subscription_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "consumer_group_name": consumer_group_name,
            "consumer_group_password": consumer_group_password,
            "consumer_group_user_name": consumer_group_user_name,
            "subscription_instance_id": subscription_instance_id,
        }

    @builtins.property
    def consumer_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property consumerGroupName: Consumer group name.'''
        result = self._values.get("consumer_group_name")
        assert result is not None, "Required property 'consumer_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def consumer_group_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property consumerGroupPassword: Password of consumer group.'''
        result = self._values.get("consumer_group_password")
        assert result is not None, "Required property 'consumer_group_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def consumer_group_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property consumerGroupUserName: User name of consumer group.'''
        result = self._values.get("consumer_group_user_name")
        assert result is not None, "Required property 'consumer_group_user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def subscription_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property subscriptionInstanceId: Subscription instance ID.'''
        result = self._values.get("subscription_instance_id")
        assert result is not None, "Required property 'subscription_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ConsumerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.Instance",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DTS::Instance``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosInstance``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__663c3dcd12b1ea12ba69ef51640fa0c19da41ee1104235c4377abe9012aca40f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the DTS instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute JobId: The ID of the task.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJobId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_class": "instanceClass",
        "pay_type": "payType",
        "type": "type",
        "auto_pay": "autoPay",
        "auto_start": "autoStart",
        "compute_unit": "computeUnit",
        "database_count": "databaseCount",
        "destination_endpoint_engine_name": "destinationEndpointEngineName",
        "destination_region": "destinationRegion",
        "du": "du",
        "fee_type": "feeType",
        "job_id": "jobId",
        "period": "period",
        "resource_group_id": "resourceGroupId",
        "source_endpoint_engine_name": "sourceEndpointEngineName",
        "source_region": "sourceRegion",
        "sync_architecture": "syncArchitecture",
        "used_time": "usedTime",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_start: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_unit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        database_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_endpoint_engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        du: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fee_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_endpoint_engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sync_architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Instance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance

        :param instance_class: Property instanceClass: The instance class. - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**. - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**. **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
        :param pay_type: Property payType: The billing method. Valid values: - **PrePaid**: subscription - **PostPaid**: pay-as-you-go
        :param type: Property type: The type of the DTS instance. Valid values: - **MIGRATION*: data migration instance - **SYNC**: data synchronization instance - **SUBSCRIBE**: change tracking instance
        :param auto_pay: Property autoPay: Specifies whether to automatically renew the DTS instance when it expires. Valid values: - **false**: does not automatically renew the DTS instance when it expires. This is the default value. - **true**: automatically renews the DTS instance when it expires.
        :param auto_start: Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. Valid values: - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value. - **true**: automatically starts the task after the DTS instance is purchased.
        :param compute_unit: Property computeUnit: The specifications of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
        :param database_count: Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. Default value: **1**. **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
        :param destination_endpoint_engine_name: Property destinationEndpointEngineName: The database engine of the destination instance. Valid values: - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database - **PolarDB**: PolarDB for MySQL cluster - **polardb_o**: PolarDB for Oracle cluster - **polardb_pg**: PolarDB for PostgreSQL cluster - **Redis**: ApsaraDB for Redis instance or self-managed Redis database - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance - **PostgreSQL**: self-managed PostgreSQL database - **odps**: MaxCompute project - **oracle**: self-managed Oracle database - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database - **tidb**: TiDB database - **ADS**: AnalyticDB for MySQL V2.0 cluster - **ADB30**: AnalyticDB for MySQL V3.0 cluster - **Greenplum**: AnalyticDB for PostgreSQL instance - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster - **DataHub**: DataHub project - **DB2**: self-managed Db2 for LUW database - **as400**: AS/400 - **Tablestore**: Tablestore instance **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
        :param destination_region: Property destinationRegion: The ID of the region in which the destination instance resides. **Note**: You must specify one of this parameter and the **JobId** parameter.
        :param du: Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**. **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
        :param fee_type: Property feeType: The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE. - **ONLY_CONFIGURATION_FEE**: charges only configuration fees. - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
        :param job_id: Property jobId: The ID of the task. **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
        :param period: Property period: The unit of the subscription duration. Valid values: **Year** and **Month**. **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
        :param resource_group_id: Property resourceGroupId: The ID of the resource group.
        :param source_endpoint_engine_name: Property sourceEndpointEngineName: The database engine of the source instance. Valid values: - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database - **PolarDB**: PolarDB for MySQL cluster - **polardb_o**: PolarDB for Oracle cluster - **polardb_pg**: PolarDB for PostgreSQL cluster - **Redis**: ApsaraDB for Redis instance or self-managed Redis database - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance - **PostgreSQL**: self-managed PostgreSQL database - **odps**: MaxCompute project - **oracle**: self-managed Oracle database - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database - **tidb**: TiDB database - **ADS**: AnalyticDB for MySQL V2.0 cluster - **ADB30**: AnalyticDB for MySQL V3.0 cluster - **Greenplum**: AnalyticDB for PostgreSQL instance - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster - **DataHub**: DataHub project - **DB2**: self-managed Db2 for LUW database - **as400**: AS/400 - **Tablestore**: Tablestore instance **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
        :param source_region: Property sourceRegion: The ID of the region in which the source instance resides. **Note**: You must specify one of this parameter and the **JobId** parameter.
        :param sync_architecture: Property syncArchitecture: The synchronization topology. Valid values: - **oneway**: one-way synchronization. This is the default value. - **bidirectional**: two-way synchronization.
        :param used_time: Property usedTime: The subscription duration. - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9. - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5. **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7e78914597b48ffdbd32781c6257c81839851267e392791be0ac2815b2bb0aa)
            check_type(argname="argument instance_class", value=instance_class, expected_type=type_hints["instance_class"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_start", value=auto_start, expected_type=type_hints["auto_start"])
            check_type(argname="argument compute_unit", value=compute_unit, expected_type=type_hints["compute_unit"])
            check_type(argname="argument database_count", value=database_count, expected_type=type_hints["database_count"])
            check_type(argname="argument destination_endpoint_engine_name", value=destination_endpoint_engine_name, expected_type=type_hints["destination_endpoint_engine_name"])
            check_type(argname="argument destination_region", value=destination_region, expected_type=type_hints["destination_region"])
            check_type(argname="argument du", value=du, expected_type=type_hints["du"])
            check_type(argname="argument fee_type", value=fee_type, expected_type=type_hints["fee_type"])
            check_type(argname="argument job_id", value=job_id, expected_type=type_hints["job_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument source_endpoint_engine_name", value=source_endpoint_engine_name, expected_type=type_hints["source_endpoint_engine_name"])
            check_type(argname="argument source_region", value=source_region, expected_type=type_hints["source_region"])
            check_type(argname="argument sync_architecture", value=sync_architecture, expected_type=type_hints["sync_architecture"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_class": instance_class,
            "pay_type": pay_type,
            "type": type,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_start is not None:
            self._values["auto_start"] = auto_start
        if compute_unit is not None:
            self._values["compute_unit"] = compute_unit
        if database_count is not None:
            self._values["database_count"] = database_count
        if destination_endpoint_engine_name is not None:
            self._values["destination_endpoint_engine_name"] = destination_endpoint_engine_name
        if destination_region is not None:
            self._values["destination_region"] = destination_region
        if du is not None:
            self._values["du"] = du
        if fee_type is not None:
            self._values["fee_type"] = fee_type
        if job_id is not None:
            self._values["job_id"] = job_id
        if period is not None:
            self._values["period"] = period
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if source_endpoint_engine_name is not None:
            self._values["source_endpoint_engine_name"] = source_endpoint_engine_name
        if source_region is not None:
            self._values["source_region"] = source_region
        if sync_architecture is not None:
            self._values["sync_architecture"] = sync_architecture
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceClass: The instance class.

        - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
        - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
          **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
        '''
        result = self._values.get("instance_class")
        assert result is not None, "Required property 'instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property payType: The billing method.

        Valid values:

        - **PrePaid**: subscription
        - **PostPaid**: pay-as-you-go
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property type: The type of the DTS instance.

        Valid values:

        - **MIGRATION*: data migration instance
        - **SYNC**: data synchronization instance
        - **SUBSCRIBE**: change tracking instance
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Specifies whether to automatically renew the DTS instance when it expires.

        Valid values:

        - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
        - **true**: automatically renews the DTS instance when it expires.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_start(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoStart: Specifies whether to automatically start the task after the DTS instance is purchased.

        Valid values:

        - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
        - **true**: automatically starts the task after the DTS instance is purchased.
        '''
        result = self._values.get("auto_start")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_unit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property computeUnit: The specifications of the extract, transform, and load (ETL) instance.

        The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
        '''
        result = self._values.get("compute_unit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def database_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance.

        Default value: **1**.
        **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
        '''
        result = self._values.get("database_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_endpoint_engine_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destinationEndpointEngineName: The database engine of the destination instance.

        Valid values:

        - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
        - **PolarDB**: PolarDB for MySQL cluster
        - **polardb_o**: PolarDB for Oracle cluster
        - **polardb_pg**: PolarDB for PostgreSQL cluster
        - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
        - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
        - **PostgreSQL**: self-managed PostgreSQL database
        - **odps**: MaxCompute project
        - **oracle**: self-managed Oracle database
        - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
        - **tidb**: TiDB database
        - **ADS**: AnalyticDB for MySQL V2.0 cluster
        - **ADB30**: AnalyticDB for MySQL V3.0 cluster
        - **Greenplum**: AnalyticDB for PostgreSQL instance
        - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
        - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
        - **DataHub**: DataHub project
        - **DB2**: self-managed Db2 for LUW database
        - **as400**: AS/400
        - **Tablestore**: Tablestore instance
          **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
        '''
        result = self._values.get("destination_endpoint_engine_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property destinationRegion: The ID of the region in which the destination instance resides.

        **Note**: You must specify one of this parameter and the **JobId** parameter.
        '''
        result = self._values.get("destination_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def du(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster.

        Valid values: **1** to **100**.
        **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
        '''
        result = self._values.get("du")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fee_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property feeType: The billing type for a change tracking instance.

        Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.

        - **ONLY_CONFIGURATION_FEE**: charges only configuration fees.
        - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
        '''
        result = self._values.get("fee_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property jobId: The ID of the task.

        **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
        '''
        result = self._values.get("job_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period: The unit of the subscription duration.

        Valid values: **Year** and **Month**.
        **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: The ID of the resource group.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_endpoint_engine_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceEndpointEngineName: The database engine of the source instance.

        Valid values:

        - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
        - **PolarDB**: PolarDB for MySQL cluster
        - **polardb_o**: PolarDB for Oracle cluster
        - **polardb_pg**: PolarDB for PostgreSQL cluster
        - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
        - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
        - **PostgreSQL**: self-managed PostgreSQL database
        - **odps**: MaxCompute project
        - **oracle**: self-managed Oracle database
        - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
        - **tidb**: TiDB database
        - **ADS**: AnalyticDB for MySQL V2.0 cluster
        - **ADB30**: AnalyticDB for MySQL V3.0 cluster
        - **Greenplum**: AnalyticDB for PostgreSQL instance
        - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
        - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
        - **DataHub**: DataHub project
        - **DB2**: self-managed Db2 for LUW database
        - **as400**: AS/400
        - **Tablestore**: Tablestore instance
          **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
        '''
        result = self._values.get("source_endpoint_engine_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceRegion: The ID of the region in which the source instance resides.

        **Note**: You must specify one of this parameter and the **JobId** parameter.
        '''
        result = self._values.get("source_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sync_architecture(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property syncArchitecture: The synchronization topology.

        Valid values:

        - **oneway**: one-way synchronization. This is the default value.
        - **bidirectional**: two-way synchronization.
        '''
        result = self._values.get("sync_architecture")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property usedTime: The subscription duration.

        - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
        - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
          **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MigrationJob2(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.MigrationJob2",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DTS::MigrationJob2``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosMigrationJob2``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MigrationJob2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d525da3d20369a4d73270a047491cb1de0abec1e4a904b89cdf1eb0894d2aee)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDtsInstanceId")
    def attr_dts_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DtsInstanceId: The ID of the DTS instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobId")
    def attr_dts_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DtsJobId: The ID of the task.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobName")
    def attr_dts_job_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DtsJobName: The name of the DTS job.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.MigrationJob2Props",
    jsii_struct_bases=[],
    name_mapping={
        "data_initialization": "dataInitialization",
        "data_synchronization": "dataSynchronization",
        "db_list": "dbList",
        "destination_endpoint": "destinationEndpoint",
        "dts_job_name": "dtsJobName",
        "source_endpoint": "sourceEndpoint",
        "structure_initialization": "structureInitialization",
        "checkpoint": "checkpoint",
        "data_check_configure": "dataCheckConfigure",
        "dedicated_cluster_id": "dedicatedClusterId",
        "delay_notice": "delayNotice",
        "delay_phone": "delayPhone",
        "delay_rule_time": "delayRuleTime",
        "disaster_recovery_job": "disasterRecoveryJob",
        "dts_bis_label": "dtsBisLabel",
        "dts_instance_id": "dtsInstanceId",
        "dts_job_id": "dtsJobId",
        "error_notice": "errorNotice",
        "error_phone": "errorPhone",
        "file_oss_url": "fileOssUrl",
        "reserve": "reserve",
        "status": "status",
    },
)
class MigrationJob2Props:
    def __init__(
        self,
        *,
        data_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        data_synchronization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob2.DestinationEndpointProperty", typing.Dict[builtins.str, typing.Any]]],
        dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob2.SourceEndpointProperty", typing.Dict[builtins.str, typing.Any]]],
        structure_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_check_configure: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMigrationJob2.DataCheckConfigureProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disaster_recovery_job: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_oss_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``MigrationJob2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2

        :param data_initialization: Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
        :param data_synchronization: Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
        :param db_list: Property dbList: The objects that you want to migrate or synchronize.
        :param destination_endpoint: Property destinationEndpoint: Destination instance configuration.
        :param dts_job_name: Property dtsJobName: The name of the DTS instance.
        :param source_endpoint: Property sourceEndpoint: Source instance configuration.
        :param structure_initialization: Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
        :param checkpoint: Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        :param data_check_configure: Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
        :param dedicated_cluster_id: Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        :param delay_notice: Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        :param delay_phone: Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        :param delay_rule_time: Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        :param disaster_recovery_job: Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
        :param dts_bis_label: Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        :param dts_instance_id: Property dtsInstanceId: The ID of the DTS instance.
        :param dts_job_id: Property dtsJobId: The ID of the DTS task.
        :param error_notice: Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        :param error_phone: Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        :param file_oss_url: Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
        :param reserve: Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        :param status: Property status: The status of the resource. Valid values: - **Migrating**: Start the task. - **Suspending**: Suspend the task. - **Stopping**: Stop the task.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26320ad729d3d0abf3264598401c679a2a68f790114c79ca94d388de49bb7261)
            check_type(argname="argument data_initialization", value=data_initialization, expected_type=type_hints["data_initialization"])
            check_type(argname="argument data_synchronization", value=data_synchronization, expected_type=type_hints["data_synchronization"])
            check_type(argname="argument db_list", value=db_list, expected_type=type_hints["db_list"])
            check_type(argname="argument destination_endpoint", value=destination_endpoint, expected_type=type_hints["destination_endpoint"])
            check_type(argname="argument dts_job_name", value=dts_job_name, expected_type=type_hints["dts_job_name"])
            check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
            check_type(argname="argument structure_initialization", value=structure_initialization, expected_type=type_hints["structure_initialization"])
            check_type(argname="argument checkpoint", value=checkpoint, expected_type=type_hints["checkpoint"])
            check_type(argname="argument data_check_configure", value=data_check_configure, expected_type=type_hints["data_check_configure"])
            check_type(argname="argument dedicated_cluster_id", value=dedicated_cluster_id, expected_type=type_hints["dedicated_cluster_id"])
            check_type(argname="argument delay_notice", value=delay_notice, expected_type=type_hints["delay_notice"])
            check_type(argname="argument delay_phone", value=delay_phone, expected_type=type_hints["delay_phone"])
            check_type(argname="argument delay_rule_time", value=delay_rule_time, expected_type=type_hints["delay_rule_time"])
            check_type(argname="argument disaster_recovery_job", value=disaster_recovery_job, expected_type=type_hints["disaster_recovery_job"])
            check_type(argname="argument dts_bis_label", value=dts_bis_label, expected_type=type_hints["dts_bis_label"])
            check_type(argname="argument dts_instance_id", value=dts_instance_id, expected_type=type_hints["dts_instance_id"])
            check_type(argname="argument dts_job_id", value=dts_job_id, expected_type=type_hints["dts_job_id"])
            check_type(argname="argument error_notice", value=error_notice, expected_type=type_hints["error_notice"])
            check_type(argname="argument error_phone", value=error_phone, expected_type=type_hints["error_phone"])
            check_type(argname="argument file_oss_url", value=file_oss_url, expected_type=type_hints["file_oss_url"])
            check_type(argname="argument reserve", value=reserve, expected_type=type_hints["reserve"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data_initialization": data_initialization,
            "data_synchronization": data_synchronization,
            "db_list": db_list,
            "destination_endpoint": destination_endpoint,
            "dts_job_name": dts_job_name,
            "source_endpoint": source_endpoint,
            "structure_initialization": structure_initialization,
        }
        if checkpoint is not None:
            self._values["checkpoint"] = checkpoint
        if data_check_configure is not None:
            self._values["data_check_configure"] = data_check_configure
        if dedicated_cluster_id is not None:
            self._values["dedicated_cluster_id"] = dedicated_cluster_id
        if delay_notice is not None:
            self._values["delay_notice"] = delay_notice
        if delay_phone is not None:
            self._values["delay_phone"] = delay_phone
        if delay_rule_time is not None:
            self._values["delay_rule_time"] = delay_rule_time
        if disaster_recovery_job is not None:
            self._values["disaster_recovery_job"] = disaster_recovery_job
        if dts_bis_label is not None:
            self._values["dts_bis_label"] = dts_bis_label
        if dts_instance_id is not None:
            self._values["dts_instance_id"] = dts_instance_id
        if dts_job_id is not None:
            self._values["dts_job_id"] = dts_job_id
        if error_notice is not None:
            self._values["error_notice"] = error_notice
        if error_phone is not None:
            self._values["error_phone"] = error_phone
        if file_oss_url is not None:
            self._values["file_oss_url"] = file_oss_url
        if reserve is not None:
            self._values["reserve"] = reserve
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def data_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataInitialization: Specifies whether to perform full data migration or full data synchronization.

        Default value: **true**. Valid values: **true** and **false**.
        '''
        result = self._values.get("data_initialization")
        assert result is not None, "Required property 'data_initialization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_synchronization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization.

        Default value: **false**. Valid values: **true** and **false**.
        '''
        result = self._values.get("data_synchronization")
        assert result is not None, "Required property 'data_synchronization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property dbList: The objects that you want to migrate or synchronize.'''
        result = self._values.get("db_list")
        assert result is not None, "Required property 'db_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.DestinationEndpointProperty"]:
        '''Property destinationEndpoint: Destination instance configuration.'''
        result = self._values.get("destination_endpoint")
        assert result is not None, "Required property 'destination_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.DestinationEndpointProperty"], result)

    @builtins.property
    def dts_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dtsJobName: The name of the DTS instance.'''
        result = self._values.get("dts_job_name")
        assert result is not None, "Required property 'dts_job_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.SourceEndpointProperty"]:
        '''Property sourceEndpoint: Source instance configuration.'''
        result = self._values.get("source_endpoint")
        assert result is not None, "Required property 'source_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.SourceEndpointProperty"], result)

    @builtins.property
    def structure_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property structureInitialization: Specifies whether to perform schema migration or schema synchronization.

        Default value: true. Valid values: **true** and **false**.
        '''
        result = self._values.get("structure_initialization")
        assert result is not None, "Required property 'structure_initialization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def checkpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property checkpoint: The start offset of incremental data migration or synchronization.

        This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        '''
        result = self._values.get("checkpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_check_configure(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.DataCheckConfigureProperty"]]:
        '''Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.'''
        result = self._values.get("data_check_configure")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.DataCheckConfigureProperty"]], result)

    @builtins.property
    def dedicated_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.'''
        result = self._values.get("dedicated_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property delayNotice: Specifies whether to monitor the task latency.

        Valid values: **true** and **false**
        '''
        result = self._values.get("delay_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property delayPhone: The mobile numbers that receive latency-related alerts.

        Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("delay_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_rule_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property delayRuleTime: The threshold for latency alerts.

        Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        '''
        result = self._values.get("delay_rule_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disaster_recovery_job(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance.

        Valid values: **true** and **false**
        '''
        result = self._values.get("disaster_recovery_job")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_bis_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dtsBisLabel: The environment tag of the DTS instance.

        Valid values: **normal** and **online**.
        '''
        result = self._values.get("dts_bis_label")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dtsInstanceId: The ID of the DTS instance.'''
        result = self._values.get("dts_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dtsJobId: The ID of the DTS task.'''
        result = self._values.get("dts_job_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property errorNotice: Specifies whether to monitor the task status.

        Valid values: **true** and **false**.
        '''
        result = self._values.get("error_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property errorPhone: The mobile numbers that receive status-related alerts.

        Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("error_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_oss_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.'''
        result = self._values.get("file_oss_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def reserve(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property reserve: The reserved parameter of DTS.

        You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        '''
        result = self._values.get("reserve")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the resource.

        Valid values:

        - **Migrating**: Start the task.
        - **Suspending**: Suspend the task.
        - **Stopping**: Stop the task.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MigrationJob2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosConsumerGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosConsumerGroup",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DTS::ConsumerGroup``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``ConsumerGroup`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosConsumerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6649a4d196a85f7f9f55f5441b2cc8b417f0e2d05044dc03949e8ea13be8af62)
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
            type_hints = typing.get_type_hints(_typecheckingstub__bd6b304b9eedc282f36085b98cea1a4bb93d075f6d45ce4cef36594ccd2b5592)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupId")
    def attr_consumer_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConsumerGroupID: Consumer group ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrConsumerGroupName")
    def attr_consumer_group_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ConsumerGroupName: Consumer group name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrConsumerGroupName"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionInstanceId")
    def attr_subscription_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SubscriptionInstanceId: Subscription instance ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="consumerGroupName")
    def consumer_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupName: Consumer group name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "consumerGroupName"))

    @consumer_group_name.setter
    def consumer_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a893db5aaa0f7d0e24ecd5945f8a56b765840bc783b7a11b7032d532567d7c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumerGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="consumerGroupPassword")
    def consumer_group_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupPassword: Password of consumer group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "consumerGroupPassword"))

    @consumer_group_password.setter
    def consumer_group_password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a645087e2f6c7248fe4f1e034170ff998122cec38d3390977e99c3dd0eed1f97)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumerGroupPassword", value)

    @builtins.property
    @jsii.member(jsii_name="consumerGroupUserName")
    def consumer_group_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupUserName: User name of consumer group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "consumerGroupUserName"))

    @consumer_group_user_name.setter
    def consumer_group_user_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8605ab8e16a3ed258c13d2a5d1df14304cb46b402fa2239f376775e2591be49c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "consumerGroupUserName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__043124c9553aa7e00212ebbdc7138247cf2d638fbcba794855ec1a7c73f8569e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="subscriptionInstanceId")
    def subscription_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subscriptionInstanceId: Subscription instance ID.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "subscriptionInstanceId"))

    @subscription_instance_id.setter
    def subscription_instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__db9a3c0bf5403ab71aba277e309802346987631c2deebf7cb857befd0f02336e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subscriptionInstanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.RosConsumerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "consumer_group_name": "consumerGroupName",
        "consumer_group_password": "consumerGroupPassword",
        "consumer_group_user_name": "consumerGroupUserName",
        "subscription_instance_id": "subscriptionInstanceId",
    },
)
class RosConsumerGroupProps:
    def __init__(
        self,
        *,
        consumer_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        consumer_group_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        consumer_group_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        subscription_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``RosConsumerGroup``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumergroup

        :param consumer_group_name: 
        :param consumer_group_password: 
        :param consumer_group_user_name: 
        :param subscription_instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3042d13d44d117264f0a9e6aef2c904becef6569ab321865366786474d6bdbff)
            check_type(argname="argument consumer_group_name", value=consumer_group_name, expected_type=type_hints["consumer_group_name"])
            check_type(argname="argument consumer_group_password", value=consumer_group_password, expected_type=type_hints["consumer_group_password"])
            check_type(argname="argument consumer_group_user_name", value=consumer_group_user_name, expected_type=type_hints["consumer_group_user_name"])
            check_type(argname="argument subscription_instance_id", value=subscription_instance_id, expected_type=type_hints["subscription_instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "consumer_group_name": consumer_group_name,
            "consumer_group_password": consumer_group_password,
            "consumer_group_user_name": consumer_group_user_name,
            "subscription_instance_id": subscription_instance_id,
        }

    @builtins.property
    def consumer_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupName: Consumer group name.
        '''
        result = self._values.get("consumer_group_name")
        assert result is not None, "Required property 'consumer_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def consumer_group_password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupPassword: Password of consumer group.
        '''
        result = self._values.get("consumer_group_password")
        assert result is not None, "Required property 'consumer_group_password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def consumer_group_user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: consumerGroupUserName: User name of consumer group.
        '''
        result = self._values.get("consumer_group_user_name")
        assert result is not None, "Required property 'consumer_group_user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def subscription_instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subscriptionInstanceId: Subscription instance ID.
        '''
        result = self._values.get("subscription_instance_id")
        assert result is not None, "Required property 'subscription_instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConsumerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosInstance",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DTS::Instance``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Instance`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance
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
            type_hints = typing.get_type_hints(_typecheckingstub__7b7421124ad9455804eaa2cb0f738a20e1b524502f13c2a23c231ba6008f03cc)
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
            type_hints = typing.get_type_hints(_typecheckingstub__c282dd66dc64e189e00a378629859808c229744f3127081c7d98ac52d4effbb6)
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
        :Attribute: InstanceId: The ID of the DTS instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrJobId")
    def attr_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: JobId: The ID of the task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrJobId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__0e89753b772086482273c7f412aaec964585e419fb7f59ed8640d62d40221da5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceClass")
    def instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceClass: The instance class.

        - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
        - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
        **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceClass"))

    @instance_class.setter
    def instance_class(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1645fc03f75882326e5014500fa88d6f9308b5566c7c3ff90ff37bf8e0829450)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceClass", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method. Valid values:

        - **PrePaid**: subscription
        - **PostPaid**: pay-as-you-go
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2b17ae066645ef84ef25ce0fe83e672e3171f991a61681f87e0ddacc9d0a5825)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The type of the DTS instance. Valid values:

        - **MIGRATION*: data migration instance
        - **SYNC**: data synchronization instance
        - **SUBSCRIBE**: change tracking instance
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__477ebff7558663a2ec7449901e60da78c3d8be467c9a906e78087ad909f7cd8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "type", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Specifies whether to automatically renew the DTS instance when it expires. Valid values:

        - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
        - **true**: automatically renews the DTS instance when it expires.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83a683a1ae89175c484840fb77d20c13a7cdd636aa658cf0037b2acc27c6208c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoStart")
    def auto_start(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. Valid values:

        - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
        - **true**: automatically starts the task after the DTS instance is purchased.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoStart"))

    @auto_start.setter
    def auto_start(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a3ef32c27f2cfbd93a0bc03ba740541e900208254d678781db38c3d9a212e5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoStart", value)

    @builtins.property
    @jsii.member(jsii_name="computeUnit")
    def compute_unit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: computeUnit: The specifications of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "computeUnit"))

    @compute_unit.setter
    def compute_unit(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b8dc8b175210f6816ef33c275dd6d3ca04ed6b8457ce2b0b1f2db4bce36da184)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "computeUnit", value)

    @builtins.property
    @jsii.member(jsii_name="databaseCount")
    def database_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. Default value: **1**.
        **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "databaseCount"))

    @database_count.setter
    def database_count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__846c76bea2b10288ee547f41abdfa95e9ff92876b66de1567bd1bf14364006f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "databaseCount", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpointEngineName")
    def destination_endpoint_engine_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destinationEndpointEngineName: The database engine of the destination instance. Valid values:

        - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
        - **PolarDB**: PolarDB for MySQL cluster
        - **polardb_o**: PolarDB for Oracle cluster
        - **polardb_pg**: PolarDB for PostgreSQL cluster
        - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
        - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
        - **PostgreSQL**: self-managed PostgreSQL database
        - **odps**: MaxCompute project
        - **oracle**: self-managed Oracle database
        - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
        - **tidb**: TiDB database
        - **ADS**: AnalyticDB for MySQL V2.0 cluster
        - **ADB30**: AnalyticDB for MySQL V3.0 cluster
        - **Greenplum**: AnalyticDB for PostgreSQL instance
        - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
        - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
        - **DataHub**: DataHub project
        - **DB2**: self-managed Db2 for LUW database
        - **as400**: AS/400
        - **Tablestore**: Tablestore instance
        **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destinationEndpointEngineName"))

    @destination_endpoint_engine_name.setter
    def destination_endpoint_engine_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0187748c57795fee828acb47df2942d4740e73d61ccfb8a363e1ae555fab6f9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationEndpointEngineName", value)

    @builtins.property
    @jsii.member(jsii_name="destinationRegion")
    def destination_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destinationRegion: The ID of the region in which the destination instance resides.
        **Note**: You must specify one of this parameter and the **JobId** parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "destinationRegion"))

    @destination_region.setter
    def destination_region(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f84218933a2062d88b5997e9ebcc00b84ef9ba0737d8353d3f1edc64128c095)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationRegion", value)

    @builtins.property
    @jsii.member(jsii_name="du")
    def du(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**.
        **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "du"))

    @du.setter
    def du(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e6bc0598f10552ec4a1fdc579e86e5b2c4948cda1cca799e47d7d23985a23ba3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "du", value)

    @builtins.property
    @jsii.member(jsii_name="feeType")
    def fee_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        feeType: The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.

        - **ONLY_CONFIGURATION_FEE**: charges only configuration fees.
        - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "feeType"))

    @fee_type.setter
    def fee_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82bf073cc8406ac25ee1087e25a7e3e9d720c65f0b021169ec579e4629dc5e09)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "feeType", value)

    @builtins.property
    @jsii.member(jsii_name="jobId")
    def job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        jobId: The ID of the task.
        **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "jobId"))

    @job_id.setter
    def job_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9ddcbabe4bbf009596120f2608830518df37c60334c79c8c96bad7e2200ed02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "jobId", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The unit of the subscription duration. Valid values: **Year** and **Month**.
        **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__95a0fde653417124736b171f2e6d2ae41e89c693bbecd1b48d410937c80bca38)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

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
            type_hints = typing.get_type_hints(_typecheckingstub__b8c88ec446cb5bfd1fb0f89e7dc46e0de2416835f5d7ab25d069dca9d0a725bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="sourceEndpointEngineName")
    def source_endpoint_engine_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceEndpointEngineName: The database engine of the source instance. Valid values:

        - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
        - **PolarDB**: PolarDB for MySQL cluster
        - **polardb_o**: PolarDB for Oracle cluster
        - **polardb_pg**: PolarDB for PostgreSQL cluster
        - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
        - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
        - **PostgreSQL**: self-managed PostgreSQL database
        - **odps**: MaxCompute project
        - **oracle**: self-managed Oracle database
        - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
        - **tidb**: TiDB database
        - **ADS**: AnalyticDB for MySQL V2.0 cluster
        - **ADB30**: AnalyticDB for MySQL V3.0 cluster
        - **Greenplum**: AnalyticDB for PostgreSQL instance
        - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
        - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
        - **DataHub**: DataHub project
        - **DB2**: self-managed Db2 for LUW database
        - **as400**: AS/400
        - **Tablestore**: Tablestore instance
        **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceEndpointEngineName"))

    @source_endpoint_engine_name.setter
    def source_endpoint_engine_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__05a1c5bd1203b9ee62a614d161c17d7b7e53f52fe5da0d4795b31e6c41567ee9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceEndpointEngineName", value)

    @builtins.property
    @jsii.member(jsii_name="sourceRegion")
    def source_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceRegion: The ID of the region in which the source instance resides.
        **Note**: You must specify one of this parameter and the **JobId** parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceRegion"))

    @source_region.setter
    def source_region(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8386e0d4e56ed1897f398bf090d8b75392866524967fbaa5e503e4f951d1ba62)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceRegion", value)

    @builtins.property
    @jsii.member(jsii_name="syncArchitecture")
    def sync_architecture(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        syncArchitecture: The synchronization topology. Valid values:

        - **oneway**: one-way synchronization. This is the default value.
        - **bidirectional**: two-way synchronization.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "syncArchitecture"))

    @sync_architecture.setter
    def sync_architecture(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd0b01033d1909f339c58831049f5c0b2792fc5428cdb0e770331557982c0f68)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "syncArchitecture", value)

    @builtins.property
    @jsii.member(jsii_name="usedTime")
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        usedTime: The subscription duration.

        - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
        - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
        **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "usedTime"))

    @used_time.setter
    def used_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__03d0ea2727e43414f46c796f6ac6879d3d9d63b373b20efd36e20918cfb8d771)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "usedTime", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_class": "instanceClass",
        "pay_type": "payType",
        "type": "type",
        "auto_pay": "autoPay",
        "auto_start": "autoStart",
        "compute_unit": "computeUnit",
        "database_count": "databaseCount",
        "destination_endpoint_engine_name": "destinationEndpointEngineName",
        "destination_region": "destinationRegion",
        "du": "du",
        "fee_type": "feeType",
        "job_id": "jobId",
        "period": "period",
        "resource_group_id": "resourceGroupId",
        "source_endpoint_engine_name": "sourceEndpointEngineName",
        "source_region": "sourceRegion",
        "sync_architecture": "syncArchitecture",
        "used_time": "usedTime",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_start: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        compute_unit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        database_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_endpoint_engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        destination_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        du: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        fee_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_endpoint_engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sync_architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosInstance``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-instance

        :param instance_class: 
        :param pay_type: 
        :param type: 
        :param auto_pay: 
        :param auto_start: 
        :param compute_unit: 
        :param database_count: 
        :param destination_endpoint_engine_name: 
        :param destination_region: 
        :param du: 
        :param fee_type: 
        :param job_id: 
        :param period: 
        :param resource_group_id: 
        :param source_endpoint_engine_name: 
        :param source_region: 
        :param sync_architecture: 
        :param used_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b7327ed68835faca4986dac097090858fe9d090aa90965fe3133afe9f6db017)
            check_type(argname="argument instance_class", value=instance_class, expected_type=type_hints["instance_class"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_start", value=auto_start, expected_type=type_hints["auto_start"])
            check_type(argname="argument compute_unit", value=compute_unit, expected_type=type_hints["compute_unit"])
            check_type(argname="argument database_count", value=database_count, expected_type=type_hints["database_count"])
            check_type(argname="argument destination_endpoint_engine_name", value=destination_endpoint_engine_name, expected_type=type_hints["destination_endpoint_engine_name"])
            check_type(argname="argument destination_region", value=destination_region, expected_type=type_hints["destination_region"])
            check_type(argname="argument du", value=du, expected_type=type_hints["du"])
            check_type(argname="argument fee_type", value=fee_type, expected_type=type_hints["fee_type"])
            check_type(argname="argument job_id", value=job_id, expected_type=type_hints["job_id"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument source_endpoint_engine_name", value=source_endpoint_engine_name, expected_type=type_hints["source_endpoint_engine_name"])
            check_type(argname="argument source_region", value=source_region, expected_type=type_hints["source_region"])
            check_type(argname="argument sync_architecture", value=sync_architecture, expected_type=type_hints["sync_architecture"])
            check_type(argname="argument used_time", value=used_time, expected_type=type_hints["used_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "instance_class": instance_class,
            "pay_type": pay_type,
            "type": type,
        }
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_start is not None:
            self._values["auto_start"] = auto_start
        if compute_unit is not None:
            self._values["compute_unit"] = compute_unit
        if database_count is not None:
            self._values["database_count"] = database_count
        if destination_endpoint_engine_name is not None:
            self._values["destination_endpoint_engine_name"] = destination_endpoint_engine_name
        if destination_region is not None:
            self._values["destination_region"] = destination_region
        if du is not None:
            self._values["du"] = du
        if fee_type is not None:
            self._values["fee_type"] = fee_type
        if job_id is not None:
            self._values["job_id"] = job_id
        if period is not None:
            self._values["period"] = period
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if source_endpoint_engine_name is not None:
            self._values["source_endpoint_engine_name"] = source_endpoint_engine_name
        if source_region is not None:
            self._values["source_region"] = source_region
        if sync_architecture is not None:
            self._values["sync_architecture"] = sync_architecture
        if used_time is not None:
            self._values["used_time"] = used_time

    @builtins.property
    def instance_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceClass: The instance class.

        - DTS supports the following instance classes for a data migration instance: **xxlarge**, **xlarge**, **large**, **medium**, and **small**.
        - DTS supports the following instance classes for a data synchronization instance: **large**, **medium**, **small**, and **micro**.
        **Note**: Although the instance specification supports modification after creation, the downgrade instance feature is currently in canary release and available only for specific users.
        '''
        result = self._values.get("instance_class")
        assert result is not None, "Required property 'instance_class' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        payType: The billing method. Valid values:

        - **PrePaid**: subscription
        - **PostPaid**: pay-as-you-go
        '''
        result = self._values.get("pay_type")
        assert result is not None, "Required property 'pay_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        type: The type of the DTS instance. Valid values:

        - **MIGRATION*: data migration instance
        - **SYNC**: data synchronization instance
        - **SUBSCRIBE**: change tracking instance
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Specifies whether to automatically renew the DTS instance when it expires. Valid values:

        - **false**: does not automatically renew the DTS instance when it expires. This is the default value.
        - **true**: automatically renews the DTS instance when it expires.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_start(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoStart: Specifies whether to automatically start the task after the DTS instance is purchased. Valid values:

        - **false**: does not automatically start the task after the DTS instance is purchased. This is the default value.
        - **true**: automatically starts the task after the DTS instance is purchased.
        '''
        result = self._values.get("auto_start")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def compute_unit(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: computeUnit: The specifications of the extract, transform, and load (ETL) instance. The unit is compute unit (CU). One CU is equal to 1 vCPU and 4 GB of memory. The value of this parameter must be an integer greater than or equal to 2.
        '''
        result = self._values.get("compute_unit")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def database_count(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        databaseCount: The number of private custom ApsaraDB RDS instances in a PolarDB-X instance. Default value: **1**.
        **Note**: You must specify this parameter only if the **SourceEndpointEngineName** parameter is set to **drds**.
        '''
        result = self._values.get("database_count")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_endpoint_engine_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destinationEndpointEngineName: The database engine of the destination instance. Valid values:

        - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
        - **PolarDB**: PolarDB for MySQL cluster
        - **polardb_o**: PolarDB for Oracle cluster
        - **polardb_pg**: PolarDB for PostgreSQL cluster
        - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
        - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
        - **PostgreSQL**: self-managed PostgreSQL database
        - **odps**: MaxCompute project
        - **oracle**: self-managed Oracle database
        - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
        - **tidb**: TiDB database
        - **ADS**: AnalyticDB for MySQL V2.0 cluster
        - **ADB30**: AnalyticDB for MySQL V3.0 cluster
        - **Greenplum**: AnalyticDB for PostgreSQL instance
        - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
        - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
        - **DataHub**: DataHub project
        - **DB2**: self-managed Db2 for LUW database
        - **as400**: AS/400
        - **Tablestore**: Tablestore instance
        **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
        '''
        result = self._values.get("destination_endpoint_engine_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def destination_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        destinationRegion: The ID of the region in which the destination instance resides.
        **Note**: You must specify one of this parameter and the **JobId** parameter.
        '''
        result = self._values.get("destination_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def du(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        du: The number of DTS units (DUs) that are assigned to a DTS task that is run on a DTS dedicated cluster. Valid values: **1** to **100**.
        **Note**: The value of this parameter must be within the range of the number of DUs available for the DTS dedicated cluster.
        '''
        result = self._values.get("du")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def fee_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        feeType: The billing type for a change tracking instance. Valid values: ONLY_CONFIGURATION_FEE and CONFIGURATION_FEE_AND_DATA_FEE.

        - **ONLY_CONFIGURATION_FEE**: charges only configuration fees.
        - **CONFIGURATION_FEE_AND_DATA_FEE**: charges configuration fees and data traffic fees.
        '''
        result = self._values.get("fee_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        jobId: The ID of the task.
        **Note**: If this parameter is specified, you do not need to specify the SourceRegion, DestinationRegion, SourceEndpointEngineName, or DestinationEndpointEngineName parameter. Even if these parameters are specified, the value of the JobId parameter takes precedence.
        '''
        result = self._values.get("job_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        period: The unit of the subscription duration. Valid values: **Year** and **Month**.
        **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**.
        '''
        result = self._values.get("period")
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
    def source_endpoint_engine_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceEndpointEngineName: The database engine of the source instance. Valid values:

        - **MySQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
        - **PolarDB**: PolarDB for MySQL cluster
        - **polardb_o**: PolarDB for Oracle cluster
        - **polardb_pg**: PolarDB for PostgreSQL cluster
        - **Redis**: ApsaraDB for Redis instance or self-managed Redis database
        - **DRDS**: PolarDB-X 1.0 or PolarDB-X 2.0 instance
        - **PostgreSQL**: self-managed PostgreSQL database
        - **odps**: MaxCompute project
        - **oracle**: self-managed Oracle database
        - **mongodb**: ApsaraDB for MongoDB instance or self-managed MongoDB database
        - **tidb**: TiDB database
        - **ADS**: AnalyticDB for MySQL V2.0 cluster
        - **ADB30**: AnalyticDB for MySQL V3.0 cluster
        - **Greenplum**: AnalyticDB for PostgreSQL instance
        - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
        - **kafka**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
        - **DataHub**: DataHub project
        - **DB2**: self-managed Db2 for LUW database
        - **as400**: AS/400
        - **Tablestore**: Tablestore instance
        **Note**: The default value is **MySQL**. You must specify one of this parameter and the **JobId** parameter.
        '''
        result = self._values.get("source_endpoint_engine_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        sourceRegion: The ID of the region in which the source instance resides.
        **Note**: You must specify one of this parameter and the **JobId** parameter.
        '''
        result = self._values.get("source_region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sync_architecture(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        syncArchitecture: The synchronization topology. Valid values:

        - **oneway**: one-way synchronization. This is the default value.
        - **bidirectional**: two-way synchronization.
        '''
        result = self._values.get("sync_architecture")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def used_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        usedTime: The subscription duration.

        - Valid values if the **Period** parameter is set to **Month**: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
        - Valid values if the **Period** parameter is set to **Year**: 1, 2, 3, and 5.
        **Note**: You must specify this parameter only if the **PayType** parameter is set to **PrePaid**. You can set the **Period** parameter to specify the unit of the subscription duration.
        '''
        result = self._values.get("used_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMigrationJob2(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob2",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DTS::MigrationJob2``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``MigrationJob2`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMigrationJob2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a2279fafcf580c5ac2fc8c082113e9f258b39e16b664a2cb1a45f389fd3e678)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4332eeddbd8811a1900d87be64e60f9346439b17e8114f5a5f37716ff28e195f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsInstanceId")
    def attr_dts_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DtsInstanceId: The ID of the DTS instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobId")
    def attr_dts_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DtsJobId: The ID of the task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobName")
    def attr_dts_job_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DtsJobName: The name of the DTS job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dataInitialization")
    def data_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataInitialization"))

    @data_initialization.setter
    def data_initialization(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a5bff831a5706a4a6f360caf7068ee26e05ad76f9cbb9a43df59855e272c80d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataInitialization", value)

    @builtins.property
    @jsii.member(jsii_name="dataSynchronization")
    def data_synchronization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataSynchronization"))

    @data_synchronization.setter
    def data_synchronization(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83a4b81da203b58fdbc4e8810f6f3b88a445a8afb93a59a14d7a66d03bf6b3f6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSynchronization", value)

    @builtins.property
    @jsii.member(jsii_name="dbList")
    def db_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: dbList: The objects that you want to migrate or synchronize.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "dbList"))

    @db_list.setter
    def db_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6422771e984a25d106a7a37a41c1d8c9f27ad4b4e286e8f307a10baee5eabe1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbList", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpoint")
    def destination_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.DestinationEndpointProperty"]:
        '''
        :Property: destinationEndpoint: Destination instance configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.DestinationEndpointProperty"], jsii.get(self, "destinationEndpoint"))

    @destination_endpoint.setter
    def destination_endpoint(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.DestinationEndpointProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b859b560efcc70617592ec5236528d722b5964b1c0349d044577344163a0644)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationEndpoint", value)

    @builtins.property
    @jsii.member(jsii_name="dtsJobName")
    def dts_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dtsJobName: The name of the DTS instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dtsJobName"))

    @dts_job_name.setter
    def dts_job_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e7743b845892be7b3934bac19a30aaba689d4143421adc2ab83c7d57e102efd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsJobName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__07e5b43497ac3e734b6a19c8895078830b5880606f71295e149ac0005ae5782c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="sourceEndpoint")
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.SourceEndpointProperty"]:
        '''
        :Property: sourceEndpoint: Source instance configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.SourceEndpointProperty"], jsii.get(self, "sourceEndpoint"))

    @source_endpoint.setter
    def source_endpoint(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.SourceEndpointProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3933a94a412627b73192f81190d4af34cabd08062190fcd3742b609ba7d76480)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceEndpoint", value)

    @builtins.property
    @jsii.member(jsii_name="structureInitialization")
    def structure_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "structureInitialization"))

    @structure_initialization.setter
    def structure_initialization(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b87974648b89f3a8ba9f9a098a1ebc16fb6f350c16f7c9d3d7a5b85d1952164e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "structureInitialization", value)

    @builtins.property
    @jsii.member(jsii_name="checkpoint")
    def checkpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "checkpoint"))

    @checkpoint.setter
    def checkpoint(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59bdad63433e68da0a7ec9bf88d77a21b7b0a9e46475e1ec7e9f22e1db179e18)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "checkpoint", value)

    @builtins.property
    @jsii.member(jsii_name="dataCheckConfigure")
    def data_check_configure(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.DataCheckConfigureProperty"]]:
        '''
        :Property: dataCheckConfigure: The data verification task for a data migration or synchronization instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.DataCheckConfigureProperty"]], jsii.get(self, "dataCheckConfigure"))

    @data_check_configure.setter
    def data_check_configure(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMigrationJob2.DataCheckConfigureProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1eaec209d905dafff7471e5bb18ecc22bd9cfc70cef2ba1f83ff01426de1694)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataCheckConfigure", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedClusterId")
    def dedicated_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedClusterId"))

    @dedicated_cluster_id.setter
    def dedicated_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a23467ae4ff3f9c537a6fafbb02f40742dd2513419d276ad5805acba27a1e495)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="delayNotice")
    def delay_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "delayNotice"))

    @delay_notice.setter
    def delay_notice(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67dd5f05809b933fc1ecfc5b84b84ad64957cc297757643a3ba591bfd04cdb8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "delayNotice", value)

    @builtins.property
    @jsii.member(jsii_name="delayPhone")
    def delay_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "delayPhone"))

    @delay_phone.setter
    def delay_phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__148f837efb51993a0a19b026555392a4cba979ca7cd7a05b1a89e14d4f760955)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "delayPhone", value)

    @builtins.property
    @jsii.member(jsii_name="delayRuleTime")
    def delay_rule_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "delayRuleTime"))

    @delay_rule_time.setter
    def delay_rule_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ea072809282ae6bcc547079f8b3b08f19ee3037247742b529374c1652763d02)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "delayRuleTime", value)

    @builtins.property
    @jsii.member(jsii_name="disasterRecoveryJob")
    def disaster_recovery_job(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disasterRecoveryJob"))

    @disaster_recovery_job.setter
    def disaster_recovery_job(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__948c2654d39f063274cf826a7ce3ef2c13433f8e4efbd059849695fe6cd7591b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disasterRecoveryJob", value)

    @builtins.property
    @jsii.member(jsii_name="dtsBisLabel")
    def dts_bis_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dtsBisLabel"))

    @dts_bis_label.setter
    def dts_bis_label(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e112ac7f6cc1aa653ce74d0ca4ee1e96b1f78eeb3930c8fbcd13180125c7522d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsBisLabel", value)

    @builtins.property
    @jsii.member(jsii_name="dtsInstanceId")
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsInstanceId: The ID of the DTS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dtsInstanceId"))

    @dts_instance_id.setter
    def dts_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15439b5f608684f7dbdcf0fe0cf57352f66c05f24de163dcf36eecc65307c3d4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dtsJobId")
    def dts_job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsJobId: The ID of the DTS task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dtsJobId"))

    @dts_job_id.setter
    def dts_job_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01cae6731fa27c66aa4e082994945aa5ab112fa2f797e02f3e534fd960e07c4e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsJobId", value)

    @builtins.property
    @jsii.member(jsii_name="errorNotice")
    def error_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "errorNotice"))

    @error_notice.setter
    def error_notice(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9469d12612f65594ec458a433386597b8a94ad58bb985d26b1c0bbb02b1fdad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "errorNotice", value)

    @builtins.property
    @jsii.member(jsii_name="errorPhone")
    def error_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "errorPhone"))

    @error_phone.setter
    def error_phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b59d11d7077c34fab99b76ff0b5b32d20f1fc9f695ef9e3f5463903ff35e4726)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "errorPhone", value)

    @builtins.property
    @jsii.member(jsii_name="fileOssUrl")
    def file_oss_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fileOssUrl"))

    @file_oss_url.setter
    def file_oss_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7d9d6df41f99f0373b2e1b1171ab73ea99f6ed225dff70e19d4ae0950a425f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileOssUrl", value)

    @builtins.property
    @jsii.member(jsii_name="reserve")
    def reserve(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "reserve"))

    @reserve.setter
    def reserve(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__23e4d463ac81419526b2f624160c6e63559c940a54eb2db0d79e13b0cb04cbdb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "reserve", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the resource. Valid values:

        - **Migrating**: Start the task.
        - **Suspending**: Suspend the task.
        - **Stopping**: Stop the task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d3c02571ca9a2cf766e71e7a1334612af4f83210e229dcae72933610e42f5f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob2.DataCheckConfigureProperty",
        jsii_struct_bases=[],
        name_mapping={
            "check_maximum_hour": "checkMaximumHour",
            "check_maximum_hour_enable": "checkMaximumHourEnable",
            "data_check_db_list": "dataCheckDbList",
            "data_check_notice_phone": "dataCheckNoticePhone",
            "full_check_error_notice": "fullCheckErrorNotice",
            "full_check_fix_data": "fullCheckFixData",
            "full_check_max_read_bps": "fullCheckMaxReadBps",
            "full_check_max_read_rps": "fullCheckMaxReadRps",
            "full_check_model": "fullCheckModel",
            "full_check_notice_value": "fullCheckNoticeValue",
            "full_check_ratio": "fullCheckRatio",
            "full_check_refer_endpoint": "fullCheckReferEndpoint",
            "full_check_valid_fail_notice": "fullCheckValidFailNotice",
            "full_data_check": "fullDataCheck",
            "incremental_check_delay_notice": "incrementalCheckDelayNotice",
            "incremental_check_delay_notice_period": "incrementalCheckDelayNoticePeriod",
            "incremental_check_delay_notice_times": "incrementalCheckDelayNoticeTimes",
            "incremental_check_delay_notice_value": "incrementalCheckDelayNoticeValue",
            "incremental_check_error_notice": "incrementalCheckErrorNotice",
            "incremental_check_valid_fail_notice": "incrementalCheckValidFailNotice",
            "incremental_check_valid_fail_notice_period": "incrementalCheckValidFailNoticePeriod",
            "incremental_check_valid_fail_notice_times": "incrementalCheckValidFailNoticeTimes",
            "incremental_check_valid_fail_notice_value": "incrementalCheckValidFailNoticeValue",
            "incremental_data_check": "incrementalDataCheck",
        },
    )
    class DataCheckConfigureProperty:
        def __init__(
            self,
            *,
            check_maximum_hour: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            check_maximum_hour_enable: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_check_db_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_check_notice_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_fix_data: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_max_read_bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_max_read_rps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_model: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_refer_endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_valid_fail_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_data_check: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_delay_notice_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_delay_notice_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_delay_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_valid_fail_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_valid_fail_notice_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_valid_fail_notice_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_valid_fail_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_data_check: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param check_maximum_hour: 
            :param check_maximum_hour_enable: 
            :param data_check_db_list: 
            :param data_check_notice_phone: 
            :param full_check_error_notice: 
            :param full_check_fix_data: 
            :param full_check_max_read_bps: 
            :param full_check_max_read_rps: 
            :param full_check_model: 
            :param full_check_notice_value: 
            :param full_check_ratio: 
            :param full_check_refer_endpoint: 
            :param full_check_valid_fail_notice: 
            :param full_data_check: 
            :param incremental_check_delay_notice: 
            :param incremental_check_delay_notice_period: 
            :param incremental_check_delay_notice_times: 
            :param incremental_check_delay_notice_value: 
            :param incremental_check_error_notice: 
            :param incremental_check_valid_fail_notice: 
            :param incremental_check_valid_fail_notice_period: 
            :param incremental_check_valid_fail_notice_times: 
            :param incremental_check_valid_fail_notice_value: 
            :param incremental_data_check: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ebdc2da02266fc073431c5172bec5b795ce18728a037f09801c4d63d440fec08)
                check_type(argname="argument check_maximum_hour", value=check_maximum_hour, expected_type=type_hints["check_maximum_hour"])
                check_type(argname="argument check_maximum_hour_enable", value=check_maximum_hour_enable, expected_type=type_hints["check_maximum_hour_enable"])
                check_type(argname="argument data_check_db_list", value=data_check_db_list, expected_type=type_hints["data_check_db_list"])
                check_type(argname="argument data_check_notice_phone", value=data_check_notice_phone, expected_type=type_hints["data_check_notice_phone"])
                check_type(argname="argument full_check_error_notice", value=full_check_error_notice, expected_type=type_hints["full_check_error_notice"])
                check_type(argname="argument full_check_fix_data", value=full_check_fix_data, expected_type=type_hints["full_check_fix_data"])
                check_type(argname="argument full_check_max_read_bps", value=full_check_max_read_bps, expected_type=type_hints["full_check_max_read_bps"])
                check_type(argname="argument full_check_max_read_rps", value=full_check_max_read_rps, expected_type=type_hints["full_check_max_read_rps"])
                check_type(argname="argument full_check_model", value=full_check_model, expected_type=type_hints["full_check_model"])
                check_type(argname="argument full_check_notice_value", value=full_check_notice_value, expected_type=type_hints["full_check_notice_value"])
                check_type(argname="argument full_check_ratio", value=full_check_ratio, expected_type=type_hints["full_check_ratio"])
                check_type(argname="argument full_check_refer_endpoint", value=full_check_refer_endpoint, expected_type=type_hints["full_check_refer_endpoint"])
                check_type(argname="argument full_check_valid_fail_notice", value=full_check_valid_fail_notice, expected_type=type_hints["full_check_valid_fail_notice"])
                check_type(argname="argument full_data_check", value=full_data_check, expected_type=type_hints["full_data_check"])
                check_type(argname="argument incremental_check_delay_notice", value=incremental_check_delay_notice, expected_type=type_hints["incremental_check_delay_notice"])
                check_type(argname="argument incremental_check_delay_notice_period", value=incremental_check_delay_notice_period, expected_type=type_hints["incremental_check_delay_notice_period"])
                check_type(argname="argument incremental_check_delay_notice_times", value=incremental_check_delay_notice_times, expected_type=type_hints["incremental_check_delay_notice_times"])
                check_type(argname="argument incremental_check_delay_notice_value", value=incremental_check_delay_notice_value, expected_type=type_hints["incremental_check_delay_notice_value"])
                check_type(argname="argument incremental_check_error_notice", value=incremental_check_error_notice, expected_type=type_hints["incremental_check_error_notice"])
                check_type(argname="argument incremental_check_valid_fail_notice", value=incremental_check_valid_fail_notice, expected_type=type_hints["incremental_check_valid_fail_notice"])
                check_type(argname="argument incremental_check_valid_fail_notice_period", value=incremental_check_valid_fail_notice_period, expected_type=type_hints["incremental_check_valid_fail_notice_period"])
                check_type(argname="argument incremental_check_valid_fail_notice_times", value=incremental_check_valid_fail_notice_times, expected_type=type_hints["incremental_check_valid_fail_notice_times"])
                check_type(argname="argument incremental_check_valid_fail_notice_value", value=incremental_check_valid_fail_notice_value, expected_type=type_hints["incremental_check_valid_fail_notice_value"])
                check_type(argname="argument incremental_data_check", value=incremental_data_check, expected_type=type_hints["incremental_data_check"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if check_maximum_hour is not None:
                self._values["check_maximum_hour"] = check_maximum_hour
            if check_maximum_hour_enable is not None:
                self._values["check_maximum_hour_enable"] = check_maximum_hour_enable
            if data_check_db_list is not None:
                self._values["data_check_db_list"] = data_check_db_list
            if data_check_notice_phone is not None:
                self._values["data_check_notice_phone"] = data_check_notice_phone
            if full_check_error_notice is not None:
                self._values["full_check_error_notice"] = full_check_error_notice
            if full_check_fix_data is not None:
                self._values["full_check_fix_data"] = full_check_fix_data
            if full_check_max_read_bps is not None:
                self._values["full_check_max_read_bps"] = full_check_max_read_bps
            if full_check_max_read_rps is not None:
                self._values["full_check_max_read_rps"] = full_check_max_read_rps
            if full_check_model is not None:
                self._values["full_check_model"] = full_check_model
            if full_check_notice_value is not None:
                self._values["full_check_notice_value"] = full_check_notice_value
            if full_check_ratio is not None:
                self._values["full_check_ratio"] = full_check_ratio
            if full_check_refer_endpoint is not None:
                self._values["full_check_refer_endpoint"] = full_check_refer_endpoint
            if full_check_valid_fail_notice is not None:
                self._values["full_check_valid_fail_notice"] = full_check_valid_fail_notice
            if full_data_check is not None:
                self._values["full_data_check"] = full_data_check
            if incremental_check_delay_notice is not None:
                self._values["incremental_check_delay_notice"] = incremental_check_delay_notice
            if incremental_check_delay_notice_period is not None:
                self._values["incremental_check_delay_notice_period"] = incremental_check_delay_notice_period
            if incremental_check_delay_notice_times is not None:
                self._values["incremental_check_delay_notice_times"] = incremental_check_delay_notice_times
            if incremental_check_delay_notice_value is not None:
                self._values["incremental_check_delay_notice_value"] = incremental_check_delay_notice_value
            if incremental_check_error_notice is not None:
                self._values["incremental_check_error_notice"] = incremental_check_error_notice
            if incremental_check_valid_fail_notice is not None:
                self._values["incremental_check_valid_fail_notice"] = incremental_check_valid_fail_notice
            if incremental_check_valid_fail_notice_period is not None:
                self._values["incremental_check_valid_fail_notice_period"] = incremental_check_valid_fail_notice_period
            if incremental_check_valid_fail_notice_times is not None:
                self._values["incremental_check_valid_fail_notice_times"] = incremental_check_valid_fail_notice_times
            if incremental_check_valid_fail_notice_value is not None:
                self._values["incremental_check_valid_fail_notice_value"] = incremental_check_valid_fail_notice_value
            if incremental_data_check is not None:
                self._values["incremental_data_check"] = incremental_data_check

        @builtins.property
        def check_maximum_hour(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: checkMaximumHour: The timeout period of the full data verification task. Valid values: integers from 1 to 72. Countdown begins the moment the full data verification task is started. If the task is not complete within the specified timeout period, the task is forcibly stopped.
            '''
            result = self._values.get("check_maximum_hour")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def check_maximum_hour_enable(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            checkMaximumHourEnable: Specifies whether to configure a timeout period for the full data verification task.Valid values:

            - **0**: does not configure a timeout period for the full data verification task.
            - **1**: configures a timeout period for the full data verification task.
            **Note**: This parameter is required if the fullCheckModel parameter is set to 1.
            '''
            result = self._values.get("check_maximum_hour_enable")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_check_db_list(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dataCheckDbList: The objects whose data is to be verified. The value must be a JSON string.
            '''
            result = self._values.get("data_check_db_list")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_check_notice_phone(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dataCheckNoticePhone: The mobile number of the alert contact for a full or incremental data verification task. If an alert is triggered for a verification task, a text message is sent to notify the alert contact.
            '''
            result = self._values.get("data_check_notice_phone")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_error_notice(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckErrorNotice: Specifies whether to trigger an alert if the full data verification task fails. Valid values: **true** and **false**.
            **Note**: For example, you set this parameter to **true**. If the full data verification task fails, an alert is triggered.
            '''
            result = self._values.get("full_check_error_notice")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_fix_data(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckFixData: Specifies whether to replace the inconsistent data. Valid values: **true** and **false**. Default value: false.
            **Note**: For example, you set this parameter to true. If the destination database has data that is inconsistent with the data in the source database, the data values of the destination database are replaced with those of the source database.
            '''
            result = self._values.get("full_check_fix_data")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_max_read_bps(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fullCheckMaxReadBps: The maximum number of bytes that are read per second. Valid values: integers from 0 to 9007199254740991.
            '''
            result = self._values.get("full_check_max_read_bps")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_max_read_rps(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fullCheckMaxReadRps: The maximum number of data rows that are read per second. Valid values: integers from 0 to 9007199254740991.
            '''
            result = self._values.get("full_check_max_read_rps")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_model(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckModel: The mode of the full data verification task. Valid values:

            - **1**: verifies the data by sampling ratio.
            - **2**: verifies the data by row.
            '''
            result = self._values.get("full_check_model")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_notice_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckNoticeValue: The alert threshold for inconsistent data entries detected by the full data verification task.
            **Note**: This parameter is required if the **fullCheckValidFailNotice** parameter is set to **true**.
            '''
            result = self._values.get("full_check_notice_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_ratio(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckRatio: The sampling ratio of the full data verification task. Valid values: integers from 10 to 100. Unit: percent.
            **Note**: This parameter is required if the **fullCheckModel** parameter is set to 1.
            '''
            result = self._values.get("full_check_ratio")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_refer_endpoint(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckReferEndpoint: The benchmark for full data verification. Valid values:

            - **all**: checks the data consistency between the source and destination databases based on the source and destination databases.
            - **src**: checks the data consistency between the source and destination databases based on the source database. Objects that exist in the destination database but do not exist in the source database are not checked.
            - **dest**: checks the data consistency between the source and destination databases based on the destination database. Objects that exist in the source database but do not exist in the destination database are not checked.
            '''
            result = self._values.get("full_check_refer_endpoint")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_valid_fail_notice(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the full data verification task. Valid values: **true** and **false**.
            **Note**: For example, you set this parameter to true. If the number of inconsistent data entries detected by the full data verification task is greater than or equal to the threshold that you specified, an alert is triggered.
            '''
            result = self._values.get("full_check_valid_fail_notice")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_data_check(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fullDataCheck: Specifies whether to perform a full data verification task. Valid values: **true** and **false**.
            '''
            result = self._values.get("full_data_check")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_delay_notice(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckDelayNotice: Specifies whether to trigger an alert on the data latency of the incremental data verification task. Valid values: **true** and **false**.
            **Note**: For example, you set this parameter to **true**. If the cumulative latency of the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
            '''
            result = self._values.get("incremental_check_delay_notice")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_delay_notice_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckDelayNoticePeriod: The statistical period of an alert on the data latency of the incremental data verification task. Valid values:

            - **1**: 1 minute
            - **2**: 5 minutes
            - **3**: 10 minutes
            - **4**: 30 minutes
            **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_delay_notice_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_delay_notice_times(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckDelayNoticeTimes: The number of statistical periods of an alert on the data latency of the incremental data verification task.
            **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_delay_notice_times")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_delay_notice_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckDelayNoticeValue: The alert threshold for the data latency of the incremental data verification task. Unit: seconds.
            **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_delay_notice_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_error_notice(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckErrorNotice: Specifies whether to trigger an alert if the incremental data verification task fails. Valid values: **true** and **false**.
            Note: For example, you set this parameter to **true**. If the incremental data verification task fails, an alert is triggered.
            '''
            result = self._values.get("incremental_check_error_notice")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_valid_fail_notice(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the incremental data verification task. Valid values: **true** and **false**.
            **Note**: For example, you set this parameter to **true**. If the cumulative number of inconsistent data entries detected by the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
            '''
            result = self._values.get("incremental_check_valid_fail_notice")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_valid_fail_notice_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckValidFailNoticePeriod: The statistical period of an alert on inconsistent data entries detected by the incremental data verification task. Valid values:

            - **1**: 1 minute
            - **2**: 5 minutes
            - **3**: 10 minutes
            - **4**: 30 minutes
            **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_valid_fail_notice_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_valid_fail_notice_times(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckValidFailNoticeTimes: The number of statistical periods of an alert on inconsistent data entries detected by the incremental data verification task.
            **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_valid_fail_notice_times")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_valid_fail_notice_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckValidFailNoticeValue: The alert threshold for inconsistent data entries detected by the incremental data verification task.
            **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_valid_fail_notice_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_data_check(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: incrementalDataCheck: Specifies whether to perform an incremental data verification task. Valid values: **true** and **false**.
            '''
            result = self._values.get("incremental_data_check")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataCheckConfigureProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob2.DestinationEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "database_name": "databaseName",
            "engine_name": "engineName",
            "instance_id": "instanceId",
            "ip": "ip",
            "oracle_sid": "oracleSid",
            "owner_id": "ownerId",
            "password": "password",
            "port": "port",
            "region": "region",
            "role": "role",
            "user_name": "userName",
        },
    )
    class DestinationEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param database_name: 
            :param engine_name: 
            :param instance_id: 
            :param ip: 
            :param oracle_sid: 
            :param owner_id: 
            :param password: 
            :param port: 
            :param region: 
            :param role: 
            :param user_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__203df27f18ba99a3e151c65357026e9cc257d84011dd9ffd506f5f0430b1c7ae)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument database_name", value=database_name, expected_type=type_hints["database_name"])
                check_type(argname="argument engine_name", value=engine_name, expected_type=type_hints["engine_name"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument oracle_sid", value=oracle_sid, expected_type=type_hints["oracle_sid"])
                check_type(argname="argument owner_id", value=owner_id, expected_type=type_hints["owner_id"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
                check_type(argname="argument role", value=role, expected_type=type_hints["role"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
            }
            if database_name is not None:
                self._values["database_name"] = database_name
            if engine_name is not None:
                self._values["engine_name"] = engine_name
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if ip is not None:
                self._values["ip"] = ip
            if oracle_sid is not None:
                self._values["oracle_sid"] = oracle_sid
            if owner_id is not None:
                self._values["owner_id"] = owner_id
            if password is not None:
                self._values["password"] = password
            if port is not None:
                self._values["port"] = port
            if region is not None:
                self._values["region"] = region
            if role is not None:
                self._values["role"] = role
            if user_name is not None:
                self._values["user_name"] = user_name

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            instanceType: The type of the destination instance. Valid values:
            Alibaba Cloud database instances

            - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
            - **PolarDB**: PolarDB for MySQL cluster
            - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
            - **POLARDBX20**: PolarDB-X 2.0 instance
            - **REDIS**: ApsaraDB for Redis instance
            - **ADS**: AnalyticDB for MySQL V2.0 cluster or AnalyticDB for MySQL V3.0 cluster
            - **MONGODB**: ApsaraDB for MongoDB instance
            - **GREENPLUM**: AnalyticDB for PostgreSQL instance
            - **DATAHUB**: DataHub project
            - **ELK**: Elasticsearch cluster
            - **Tablestore**: Tablestore instance
            - **ODPS**: MaxCompute project
            Self-managed databases
            - **OTHER**: self-managed database with a public IP address
            - **ECS**: self-managed database hosted on an ECS instance
            - **EXPRESS**: self-managed database connected over Express Connect
            - **CEN**: self-managed database connected over CEN
            - **DG**: self-managed database connected over Database Gateway
            **Note**: If the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to OTHER or EXPRESS. Then, you can connect the PolarDB for PostgreSQL cluster (compatible with Oracle) to DTS as a self-managed database by using a public IP address or Express Connect.
            If the destination instance is a Message Queue for Apache Kafka instance, you must set this parameter to ECS or EXPRESS. Then, you can connect the Message Queue for Apache Kafka instance to DTS as a self-managed database connected over ECS or Express Connect.
            If the destination instance is a self-managed database, you must deploy the network environment for the database.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def database_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            databaseName: The name of the database which contains the objects to be migrated in the destination instance.
            **Note**: This parameter is required only when the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
            '''
            result = self._values.get("database_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def engine_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            engineName: The database engine of the destination instance. Valid values:

            - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
            - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
            - **PolarDB**: PolarDB for MySQL cluster
            - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
            - **POLARDBX10**: PolarDB-X 1.0 instance
            - **POLARDBX20**: PolarDB-X 2.0 instance
            - **ORACLE**: self-managed Oracle database
            - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
            - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
            - **ADS**: AnalyticDB for MySQL V2.0 cluster
            - **ADB30**: AnalyticDB for MySQL V3.0 cluster- **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
            - **GREENPLUM**: AnalyticDB for PostgreSQL instance
            - **KAFKA**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
            - **DATAHUB**: DataHub project- **DB2**: self-managed Db2 for LUW database
            - **AS400**: self-managed Db2 for i database
            - **ODPS**: MaxCompute project
            - **Tablestore**: Tablestore instance
            - **ELK**: Elasticsearch cluster
            - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
            **Note**: Default value: **MYSQL**.
            If this parameter is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify the database information in the Reserve parameter.
            '''
            result = self._values.get("engine_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceId: The ID of the destination instance. If the destination instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,

            - If the destination instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
            - If the destination instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
            - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
            - If InstanceType is set to DG, you must specify the ID of the database gateway.
            - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the destination instance.
            **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ip: The IP address of the destination instance.
            **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oracle_sid(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            oracleSid: The system ID (SID) of the Oracle database.
            **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
            '''
            result = self._values.get("oracle_sid")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def owner_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ownerId: The ID of the Alibaba Cloud account to which the destination database belongs.
            **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
            '''
            result = self._values.get("owner_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: The password of the destination database account.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            port: The port number of the destination instance.
            **Note**: This parameter is required only when the destination instance is a self-managed database.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            region: The ID of the region in which the destination instance resides.
            **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
            '''
            result = self._values.get("region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the destination instance.
            **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
            '''
            result = self._values.get("role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            userName: The database account of the destination database.
            **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DestinationEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob2.SourceEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "database_name": "databaseName",
            "engine_name": "engineName",
            "instance_id": "instanceId",
            "ip": "ip",
            "oracle_sid": "oracleSid",
            "owner_id": "ownerId",
            "password": "password",
            "port": "port",
            "region": "region",
            "role": "role",
            "user_name": "userName",
            "v_switch_id": "vSwitchId",
        },
    )
    class SourceEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param database_name: 
            :param engine_name: 
            :param instance_id: 
            :param ip: 
            :param oracle_sid: 
            :param owner_id: 
            :param password: 
            :param port: 
            :param region: 
            :param role: 
            :param user_name: 
            :param v_switch_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__11610beddb291b76ddd09a0606289d47e66483b7f532236e83d35fa97675352c)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument database_name", value=database_name, expected_type=type_hints["database_name"])
                check_type(argname="argument engine_name", value=engine_name, expected_type=type_hints["engine_name"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument oracle_sid", value=oracle_sid, expected_type=type_hints["oracle_sid"])
                check_type(argname="argument owner_id", value=owner_id, expected_type=type_hints["owner_id"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
                check_type(argname="argument role", value=role, expected_type=type_hints["role"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
            }
            if database_name is not None:
                self._values["database_name"] = database_name
            if engine_name is not None:
                self._values["engine_name"] = engine_name
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if ip is not None:
                self._values["ip"] = ip
            if oracle_sid is not None:
                self._values["oracle_sid"] = oracle_sid
            if owner_id is not None:
                self._values["owner_id"] = owner_id
            if password is not None:
                self._values["password"] = password
            if port is not None:
                self._values["port"] = port
            if region is not None:
                self._values["region"] = region
            if role is not None:
                self._values["role"] = role
            if user_name is not None:
                self._values["user_name"] = user_name
            if v_switch_id is not None:
                self._values["v_switch_id"] = v_switch_id

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            instanceType: The type of the source instance. Valid values:
            Alibaba Cloud database instances:

            - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
            - **PolarDB**: PolarDB for MySQL cluster
            - **REDIS**: ApsaraDB for Redis instance
            - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
            - **POLARDBX20**: PolarDB-X 2.0 instance
            - **MONGODB**: ApsaraDB for MongoDB instance
            - **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database
            Self-managed databases:
            - **OTHER**: self-managed database with a public IP address
            - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
            - **EXPRESS**: self-managed database connected over Express Connect
            - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
            - **DG**: self-managed database connected over Database Gateway
            **Note**: If the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to **OTHER** or **EXPRESS**. Then, you can connect the PolarDB for PostgreSQL cluster to DTS as a self-managed database by using a public IP address or Express Connect. If the source instance is a self-managed database, you must deploy the network environment for the database.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def database_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            databaseName: The name of the database which contains the objects to be migrated in the source instance.
            **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
            '''
            result = self._values.get("database_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def engine_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            engineName: The database engine of the source instance. Valid values:

            - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
            - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
            - **PolarDB**: PolarDB for MySQL cluster
            - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
            - **POLARDBX10**: PolarDB-X 1.0 instance
            - **POLARDBX20**: PolarDB-X 2.0 instance
            - **ORACLE**: self-managed Oracle database
            - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
            - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
            - **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
            - **DB2**: self-managed Db2 for LUW database
            - **AS400**: self-managed Db2 for i database
            - **DMSPOLARDB**: DMS logical database
            - **HBASE**: self-managed HBase database
            - **TERADATA**: Teradata database
            - **TiDB**: TiDB database
            - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
            **Note**: Default value: **MYSQL**.
            If EngineName is set to **MONGODB**, you must also specify the architecture type of the **MongoDB** database in the **Reserve** parameter.
            '''
            result = self._values.get("engine_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,

            - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
            - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
            - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
            - If InstanceType is set to DG, you must specify the ID of the database gateway.
            - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
            **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ip: The IP address of the source instance.
            **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oracle_sid(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            oracleSid: The system ID (SID) of the Oracle database.
            **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
            '''
            result = self._values.get("oracle_sid")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def owner_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
            **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
            '''
            result = self._values.get("owner_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: The password of the source database account.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            port: The port number of the source instance.
            **Note**: This parameter is required only when the source instance is a self-managed database.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            region: The ID of the region in which the source instance resides.
            **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
            '''
            result = self._values.get("region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
            **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
            '''
            result = self._values.get("role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            userName: The database account of the source database.
            **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vSwitchId: The ID of the vSwitch used for the data shipping link.
            '''
            result = self._values.get("v_switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.RosMigrationJob2Props",
    jsii_struct_bases=[],
    name_mapping={
        "data_initialization": "dataInitialization",
        "data_synchronization": "dataSynchronization",
        "db_list": "dbList",
        "destination_endpoint": "destinationEndpoint",
        "dts_job_name": "dtsJobName",
        "source_endpoint": "sourceEndpoint",
        "structure_initialization": "structureInitialization",
        "checkpoint": "checkpoint",
        "data_check_configure": "dataCheckConfigure",
        "dedicated_cluster_id": "dedicatedClusterId",
        "delay_notice": "delayNotice",
        "delay_phone": "delayPhone",
        "delay_rule_time": "delayRuleTime",
        "disaster_recovery_job": "disasterRecoveryJob",
        "dts_bis_label": "dtsBisLabel",
        "dts_instance_id": "dtsInstanceId",
        "dts_job_id": "dtsJobId",
        "error_notice": "errorNotice",
        "error_phone": "errorPhone",
        "file_oss_url": "fileOssUrl",
        "reserve": "reserve",
        "status": "status",
    },
)
class RosMigrationJob2Props:
    def __init__(
        self,
        *,
        data_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        data_synchronization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob2.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        structure_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_check_configure: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob2.DataCheckConfigureProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disaster_recovery_job: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_oss_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosMigrationJob2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2

        :param data_initialization: 
        :param data_synchronization: 
        :param db_list: 
        :param destination_endpoint: 
        :param dts_job_name: 
        :param source_endpoint: 
        :param structure_initialization: 
        :param checkpoint: 
        :param data_check_configure: 
        :param dedicated_cluster_id: 
        :param delay_notice: 
        :param delay_phone: 
        :param delay_rule_time: 
        :param disaster_recovery_job: 
        :param dts_bis_label: 
        :param dts_instance_id: 
        :param dts_job_id: 
        :param error_notice: 
        :param error_phone: 
        :param file_oss_url: 
        :param reserve: 
        :param status: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2da2e3c35d609100c17e6c5a21352c0ac33db9723fbe3f74d923f7f504dc9a5a)
            check_type(argname="argument data_initialization", value=data_initialization, expected_type=type_hints["data_initialization"])
            check_type(argname="argument data_synchronization", value=data_synchronization, expected_type=type_hints["data_synchronization"])
            check_type(argname="argument db_list", value=db_list, expected_type=type_hints["db_list"])
            check_type(argname="argument destination_endpoint", value=destination_endpoint, expected_type=type_hints["destination_endpoint"])
            check_type(argname="argument dts_job_name", value=dts_job_name, expected_type=type_hints["dts_job_name"])
            check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
            check_type(argname="argument structure_initialization", value=structure_initialization, expected_type=type_hints["structure_initialization"])
            check_type(argname="argument checkpoint", value=checkpoint, expected_type=type_hints["checkpoint"])
            check_type(argname="argument data_check_configure", value=data_check_configure, expected_type=type_hints["data_check_configure"])
            check_type(argname="argument dedicated_cluster_id", value=dedicated_cluster_id, expected_type=type_hints["dedicated_cluster_id"])
            check_type(argname="argument delay_notice", value=delay_notice, expected_type=type_hints["delay_notice"])
            check_type(argname="argument delay_phone", value=delay_phone, expected_type=type_hints["delay_phone"])
            check_type(argname="argument delay_rule_time", value=delay_rule_time, expected_type=type_hints["delay_rule_time"])
            check_type(argname="argument disaster_recovery_job", value=disaster_recovery_job, expected_type=type_hints["disaster_recovery_job"])
            check_type(argname="argument dts_bis_label", value=dts_bis_label, expected_type=type_hints["dts_bis_label"])
            check_type(argname="argument dts_instance_id", value=dts_instance_id, expected_type=type_hints["dts_instance_id"])
            check_type(argname="argument dts_job_id", value=dts_job_id, expected_type=type_hints["dts_job_id"])
            check_type(argname="argument error_notice", value=error_notice, expected_type=type_hints["error_notice"])
            check_type(argname="argument error_phone", value=error_phone, expected_type=type_hints["error_phone"])
            check_type(argname="argument file_oss_url", value=file_oss_url, expected_type=type_hints["file_oss_url"])
            check_type(argname="argument reserve", value=reserve, expected_type=type_hints["reserve"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data_initialization": data_initialization,
            "data_synchronization": data_synchronization,
            "db_list": db_list,
            "destination_endpoint": destination_endpoint,
            "dts_job_name": dts_job_name,
            "source_endpoint": source_endpoint,
            "structure_initialization": structure_initialization,
        }
        if checkpoint is not None:
            self._values["checkpoint"] = checkpoint
        if data_check_configure is not None:
            self._values["data_check_configure"] = data_check_configure
        if dedicated_cluster_id is not None:
            self._values["dedicated_cluster_id"] = dedicated_cluster_id
        if delay_notice is not None:
            self._values["delay_notice"] = delay_notice
        if delay_phone is not None:
            self._values["delay_phone"] = delay_phone
        if delay_rule_time is not None:
            self._values["delay_rule_time"] = delay_rule_time
        if disaster_recovery_job is not None:
            self._values["disaster_recovery_job"] = disaster_recovery_job
        if dts_bis_label is not None:
            self._values["dts_bis_label"] = dts_bis_label
        if dts_instance_id is not None:
            self._values["dts_instance_id"] = dts_instance_id
        if dts_job_id is not None:
            self._values["dts_job_id"] = dts_job_id
        if error_notice is not None:
            self._values["error_notice"] = error_notice
        if error_phone is not None:
            self._values["error_phone"] = error_phone
        if file_oss_url is not None:
            self._values["file_oss_url"] = file_oss_url
        if reserve is not None:
            self._values["reserve"] = reserve
        if status is not None:
            self._values["status"] = status

    @builtins.property
    def data_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
        '''
        result = self._values.get("data_initialization")
        assert result is not None, "Required property 'data_initialization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_synchronization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
        '''
        result = self._values.get("data_synchronization")
        assert result is not None, "Required property 'data_synchronization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: dbList: The objects that you want to migrate or synchronize.
        '''
        result = self._values.get("db_list")
        assert result is not None, "Required property 'db_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob2.DestinationEndpointProperty]:
        '''
        :Property: destinationEndpoint: Destination instance configuration.
        '''
        result = self._values.get("destination_endpoint")
        assert result is not None, "Required property 'destination_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob2.DestinationEndpointProperty], result)

    @builtins.property
    def dts_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dtsJobName: The name of the DTS instance.
        '''
        result = self._values.get("dts_job_name")
        assert result is not None, "Required property 'dts_job_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob2.SourceEndpointProperty]:
        '''
        :Property: sourceEndpoint: Source instance configuration.
        '''
        result = self._values.get("source_endpoint")
        assert result is not None, "Required property 'source_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob2.SourceEndpointProperty], result)

    @builtins.property
    def structure_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
        '''
        result = self._values.get("structure_initialization")
        assert result is not None, "Required property 'structure_initialization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def checkpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        '''
        result = self._values.get("checkpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_check_configure(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob2.DataCheckConfigureProperty]]:
        '''
        :Property: dataCheckConfigure: The data verification task for a data migration or synchronization instance.
        '''
        result = self._values.get("data_check_configure")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob2.DataCheckConfigureProperty]], result)

    @builtins.property
    def dedicated_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        '''
        result = self._values.get("dedicated_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        '''
        result = self._values.get("delay_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("delay_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_rule_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        '''
        result = self._values.get("delay_rule_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disaster_recovery_job(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
        '''
        result = self._values.get("disaster_recovery_job")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_bis_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        '''
        result = self._values.get("dts_bis_label")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsInstanceId: The ID of the DTS instance.
        '''
        result = self._values.get("dts_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsJobId: The ID of the DTS task.
        '''
        result = self._values.get("dts_job_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        '''
        result = self._values.get("error_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("error_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_oss_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
        '''
        result = self._values.get("file_oss_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def reserve(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        '''
        result = self._values.get("reserve")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the resource. Valid values:

        - **Migrating**: Start the task.
        - **Suspending**: Suspend the task.
        - **Stopping**: Stop the task.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMigrationJob2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSubscriptionJob2(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionJob2",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DTS::SubscriptionJob2``.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SubscriptionJob2`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSubscriptionJob2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7253d4c64bb075997e34426eadb4c89e49602fba003c38d941554b60ed99ccf)
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
            type_hints = typing.get_type_hints(_typecheckingstub__4cacaf97793ef1e260fa62c86688bdd202d7b5432ceac1b5d52ff5bae28794fa)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsInstanceId")
    def attr_dts_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DtsInstanceId: The ID of the DTS instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobId")
    def attr_dts_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DtsJobId: The ID of the task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobName")
    def attr_dts_job_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DtsJobName: The name of the DTS job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dbList")
    def db_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: dbList: The objects for which you want to track data changes.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "dbList"))

    @db_list.setter
    def db_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f078b62a1d8e360afb3187e96a006500157de85a137a005751f2088907746950)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbList", value)

    @builtins.property
    @jsii.member(jsii_name="dtsJobName")
    def dts_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dtsJobName: The name of the DTS instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dtsJobName"))

    @dts_job_name.setter
    def dts_job_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80c74c431c2513d65e929ee7351b4f11c773fdbb0366cb27ff50273502401f1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsJobName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99211257b7b10bf2ef846ea5dbb0ad0f8286b4e3e868269411867afdde5ae8d7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="sourceEndpoint")
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionJob2.SourceEndpointProperty"]:
        '''
        :Property: sourceEndpoint: Source instance configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionJob2.SourceEndpointProperty"], jsii.get(self, "sourceEndpoint"))

    @source_endpoint.setter
    def source_endpoint(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionJob2.SourceEndpointProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a407339ae56be84d4cef09563f4125f57c24f115fb97ab8e2cbb0e0c8a1094ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceEndpoint", value)

    @builtins.property
    @jsii.member(jsii_name="subscriptionInstance")
    def subscription_instance(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionJob2.SubscriptionInstanceProperty"]:
        '''
        :Property: subscriptionInstance: Subscription instance configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionJob2.SubscriptionInstanceProperty"], jsii.get(self, "subscriptionInstance"))

    @subscription_instance.setter
    def subscription_instance(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionJob2.SubscriptionInstanceProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__359fad1588c4b432a51fafdbb4bd9112664dd22d8df14c28bab7d736706ffdf7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subscriptionInstance", value)

    @builtins.property
    @jsii.member(jsii_name="checkpoint")
    def checkpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "checkpoint"))

    @checkpoint.setter
    def checkpoint(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a0b323986dc47c7a7e2d9ecb908680386b0d1891915b49973ecd6c8714292cc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "checkpoint", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedClusterId")
    def dedicated_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedClusterId"))

    @dedicated_cluster_id.setter
    def dedicated_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54cc1063fd923afff84d3f57f9077003cf268e3b14056397fe41342531758475)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="delayNotice")
    def delay_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "delayNotice"))

    @delay_notice.setter
    def delay_notice(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__62dd2e18c24489fab16d6959bb6fa618e076a5ca39386e7b01728dd4b9e8b63f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "delayNotice", value)

    @builtins.property
    @jsii.member(jsii_name="delayPhone")
    def delay_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "delayPhone"))

    @delay_phone.setter
    def delay_phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77dab7084700d54ca377c3d0d3dc4e777c5b775fda44ed25b6cea31261e41cbf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "delayPhone", value)

    @builtins.property
    @jsii.member(jsii_name="delayRuleTime")
    def delay_rule_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "delayRuleTime"))

    @delay_rule_time.setter
    def delay_rule_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__641768cfd80e5197bf2a00ec9ba8fb5689b4d55214b4deeab4440b03aaa7212a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "delayRuleTime", value)

    @builtins.property
    @jsii.member(jsii_name="dtsBisLabel")
    def dts_bis_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dtsBisLabel"))

    @dts_bis_label.setter
    def dts_bis_label(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54f5437a22eb9f45500d158bfbb35f15d23eb7c05c5d6dc2a7b312cfb10d6816)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsBisLabel", value)

    @builtins.property
    @jsii.member(jsii_name="dtsInstanceId")
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsInstanceId: The ID of the DTS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dtsInstanceId"))

    @dts_instance_id.setter
    def dts_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3823b2b1733f2d89b5e3cc525bb47b923c8f34a1ec72bbe43857d9156cafc62)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dtsJobId")
    def dts_job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsJobId: The ID of the DTS task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dtsJobId"))

    @dts_job_id.setter
    def dts_job_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a708fca82b9c6b68d59704b01d811c417f7b6d4dc03f7948cae55822ae85ec5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsJobId", value)

    @builtins.property
    @jsii.member(jsii_name="errorNotice")
    def error_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "errorNotice"))

    @error_notice.setter
    def error_notice(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9528d1e0143e78a2dea4eec5a22705956b66e4b584e217b7e32714f77428c455)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "errorNotice", value)

    @builtins.property
    @jsii.member(jsii_name="errorPhone")
    def error_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "errorPhone"))

    @error_phone.setter
    def error_phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfd540aa0ca2751b30b981660f4e7d83f3ddc855afa142d4df235970a29f4f9c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "errorPhone", value)

    @builtins.property
    @jsii.member(jsii_name="reserve")
    def reserve(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "reserve"))

    @reserve.setter
    def reserve(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__496065eb7ca978516f3e19c3b746747dd9723da181e3dbb5ee0ee723f8d9a962)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "reserve", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the resource. Valid values:

        - **Subscribing**: Start the task.
        - **Suspending**: Suspend the task.
        - **Stopping**: Stop the task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d176980c12133196c8a31277562e8ac7b4a3e94e703fde1bb5681f2a789d921a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="subscriptionDataType")
    def subscription_data_type(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionJob2.SubscriptionDataTypeProperty"]]:
        '''
        :Property: subscriptionDataType: Subscription data type.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionJob2.SubscriptionDataTypeProperty"]], jsii.get(self, "subscriptionDataType"))

    @subscription_data_type.setter
    def subscription_data_type(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSubscriptionJob2.SubscriptionDataTypeProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ff8152a98727fd44c95c902fb10eac5260f284bbd9fa22273d4732b10bbc405)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subscriptionDataType", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionJob2.SourceEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "database_name": "databaseName",
            "engine_name": "engineName",
            "instance_id": "instanceId",
            "instance_type": "instanceType",
            "ip": "ip",
            "oracle_sid": "oracleSid",
            "owner_id": "ownerId",
            "password": "password",
            "port": "port",
            "region": "region",
            "role": "role",
            "user_name": "userName",
            "v_switch_id": "vSwitchId",
        },
    )
    class SourceEndpointProperty:
        def __init__(
            self,
            *,
            database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param database_name: 
            :param engine_name: 
            :param instance_id: 
            :param instance_type: 
            :param ip: 
            :param oracle_sid: 
            :param owner_id: 
            :param password: 
            :param port: 
            :param region: 
            :param role: 
            :param user_name: 
            :param v_switch_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__25c5b8d6a32738385776e1de3981f192b9cb0cdc228cda76cb6c850bc3ed5b37)
                check_type(argname="argument database_name", value=database_name, expected_type=type_hints["database_name"])
                check_type(argname="argument engine_name", value=engine_name, expected_type=type_hints["engine_name"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument oracle_sid", value=oracle_sid, expected_type=type_hints["oracle_sid"])
                check_type(argname="argument owner_id", value=owner_id, expected_type=type_hints["owner_id"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
                check_type(argname="argument role", value=role, expected_type=type_hints["role"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if database_name is not None:
                self._values["database_name"] = database_name
            if engine_name is not None:
                self._values["engine_name"] = engine_name
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if instance_type is not None:
                self._values["instance_type"] = instance_type
            if ip is not None:
                self._values["ip"] = ip
            if oracle_sid is not None:
                self._values["oracle_sid"] = oracle_sid
            if owner_id is not None:
                self._values["owner_id"] = owner_id
            if password is not None:
                self._values["password"] = password
            if port is not None:
                self._values["port"] = port
            if region is not None:
                self._values["region"] = region
            if role is not None:
                self._values["role"] = role
            if user_name is not None:
                self._values["user_name"] = user_name
            if v_switch_id is not None:
                self._values["v_switch_id"] = v_switch_id

        @builtins.property
        def database_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            databaseName: The name of the database which contains the objects to be migrated in the source instance.
            **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
            '''
            result = self._values.get("database_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def engine_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            engineName: The engine of the source database. Valid values: **MySQL**, **PostgreSQL**, and **Oracle**.
            **Note**: If the source database is a self-managed database, you must specify this parameter.
            '''
            result = self._values.get("engine_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,

            - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
            - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
            - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
            - If InstanceType is set to DG, you must specify the ID of the database gateway.
            - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
            **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceType: The type of the source instance. Valid values:

            - **RDS**: ApsaraDB RDS for MySQL instance
            - **PolarDB**: PolarDB for MySQL cluster
            - **DRDS**: PolarDB-X 1.0 instance
            - **LocalInstance**: self-managed database with a public IP address
            - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
            - **Express**: self-managed database connected over Express Connect
            - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
            - **dg**: self-managed database connected over Database Gateway
            '''
            result = self._values.get("instance_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ip: The IP address of the source instance.
            **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oracle_sid(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            oracleSid: The system ID (SID) of the Oracle database.
            **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
            '''
            result = self._values.get("oracle_sid")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def owner_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
            **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
            '''
            result = self._values.get("owner_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: The password of the source database account.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            port: The port number of the source instance.
            **Note**: This parameter is required only when the source instance is a self-managed database.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            region: The ID of the region in which the source instance resides.
            **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
            '''
            result = self._values.get("region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
            **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
            '''
            result = self._values.get("role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            userName: The database account of the source database.
            **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vSwitchId: The ID of the vSwitch used for the data shipping link.
            '''
            result = self._values.get("v_switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionJob2.SubscriptionDataTypeProperty",
        jsii_struct_bases=[],
        name_mapping={"ddl": "ddl", "dml": "dml"},
    )
    class SubscriptionDataTypeProperty:
        def __init__(
            self,
            *,
            ddl: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            dml: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param ddl: 
            :param dml: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__d1f810cc62d69c86a14c308c2d4d665f8e6e4736fe5def6c2bc73292f3a70d8c)
                check_type(argname="argument ddl", value=ddl, expected_type=type_hints["ddl"])
                check_type(argname="argument dml", value=dml, expected_type=type_hints["dml"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if ddl is not None:
                self._values["ddl"] = ddl
            if dml is not None:
                self._values["dml"] = dml

        @builtins.property
        def ddl(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ddl: Specifies whether to track DDL statements. Default value: true. Valid values:

            - **true**: tracks DDL statements.
            - **false**: does not track DDL statements.
            '''
            result = self._values.get("ddl")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def dml(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            dml: Specifies whether to track DML statements. Default value: true. Valid values:

            - **true**: tracks DML statements.
            - **false**: does not track DML statements.
            '''
            result = self._values.get("dml")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SubscriptionDataTypeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionJob2.SubscriptionInstanceProperty",
        jsii_struct_bases=[],
        name_mapping={
            "network_type": "networkType",
            "vpc_id": "vpcId",
            "v_switch_id": "vSwitchId",
        },
    )
    class SubscriptionInstanceProperty:
        def __init__(
            self,
            *,
            network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param network_type: 
            :param vpc_id: 
            :param v_switch_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f2369f98a098f9154f0f2f147c332158d93cb65bf6ff6dffecb3e18a2bae28a6)
                check_type(argname="argument network_type", value=network_type, expected_type=type_hints["network_type"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "network_type": network_type,
            }
            if vpc_id is not None:
                self._values["vpc_id"] = vpc_id
            if v_switch_id is not None:
                self._values["v_switch_id"] = v_switch_id

        @builtins.property
        def network_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            networkType: The network type of the change tracking task. Set the value to **vpc**. A value of vpc indicates the Virtual Private Cloud (VPC) network type.**Note**:

            - To use the new version of the change tracking feature, you must specify **NetworkType**. You must also specify **VPCId** and **VSwitchID**. If you do not specify **NetworkType**, the previous version of the change tracking feature is used.
            - The previous version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, and PolarDB-X 1.0 instances. The new version of the change tracking feature supports self-managed MySQL databases, ApsaraDB RDS for MySQL instances, PolarDB for MySQL clusters, and Oracle databases.
            '''
            result = self._values.get("network_type")
            assert result is not None, "Required property 'network_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            vpcId: The ID of the VPC in which the change tracking instance is deployed.
            **Note**: This parameter takes effect and is required only when **NetworkType** is set to **vpc**.
            '''
            result = self._values.get("vpc_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            vSwitchId: The ID of the vSwitch in the specified VPC.
            **Note**: This parameter takes effect and is required only when **NetworkType** is set to **vpc**.
            '''
            result = self._values.get("v_switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SubscriptionInstanceProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.RosSubscriptionJob2Props",
    jsii_struct_bases=[],
    name_mapping={
        "db_list": "dbList",
        "dts_job_name": "dtsJobName",
        "source_endpoint": "sourceEndpoint",
        "subscription_instance": "subscriptionInstance",
        "checkpoint": "checkpoint",
        "dedicated_cluster_id": "dedicatedClusterId",
        "delay_notice": "delayNotice",
        "delay_phone": "delayPhone",
        "delay_rule_time": "delayRuleTime",
        "dts_bis_label": "dtsBisLabel",
        "dts_instance_id": "dtsInstanceId",
        "dts_job_id": "dtsJobId",
        "error_notice": "errorNotice",
        "error_phone": "errorPhone",
        "reserve": "reserve",
        "status": "status",
        "subscription_data_type": "subscriptionDataType",
    },
)
class RosSubscriptionJob2Props:
    def __init__(
        self,
        *,
        db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        subscription_instance: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SubscriptionInstanceProperty, typing.Dict[builtins.str, typing.Any]]],
        checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        subscription_data_type: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SubscriptionDataTypeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosSubscriptionJob2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2

        :param db_list: 
        :param dts_job_name: 
        :param source_endpoint: 
        :param subscription_instance: 
        :param checkpoint: 
        :param dedicated_cluster_id: 
        :param delay_notice: 
        :param delay_phone: 
        :param delay_rule_time: 
        :param dts_bis_label: 
        :param dts_instance_id: 
        :param dts_job_id: 
        :param error_notice: 
        :param error_phone: 
        :param reserve: 
        :param status: 
        :param subscription_data_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d805f05664422474de93ddaa677ec5e1ee4b2b8029d38c4fa00529c220fa862)
            check_type(argname="argument db_list", value=db_list, expected_type=type_hints["db_list"])
            check_type(argname="argument dts_job_name", value=dts_job_name, expected_type=type_hints["dts_job_name"])
            check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
            check_type(argname="argument subscription_instance", value=subscription_instance, expected_type=type_hints["subscription_instance"])
            check_type(argname="argument checkpoint", value=checkpoint, expected_type=type_hints["checkpoint"])
            check_type(argname="argument dedicated_cluster_id", value=dedicated_cluster_id, expected_type=type_hints["dedicated_cluster_id"])
            check_type(argname="argument delay_notice", value=delay_notice, expected_type=type_hints["delay_notice"])
            check_type(argname="argument delay_phone", value=delay_phone, expected_type=type_hints["delay_phone"])
            check_type(argname="argument delay_rule_time", value=delay_rule_time, expected_type=type_hints["delay_rule_time"])
            check_type(argname="argument dts_bis_label", value=dts_bis_label, expected_type=type_hints["dts_bis_label"])
            check_type(argname="argument dts_instance_id", value=dts_instance_id, expected_type=type_hints["dts_instance_id"])
            check_type(argname="argument dts_job_id", value=dts_job_id, expected_type=type_hints["dts_job_id"])
            check_type(argname="argument error_notice", value=error_notice, expected_type=type_hints["error_notice"])
            check_type(argname="argument error_phone", value=error_phone, expected_type=type_hints["error_phone"])
            check_type(argname="argument reserve", value=reserve, expected_type=type_hints["reserve"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument subscription_data_type", value=subscription_data_type, expected_type=type_hints["subscription_data_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_list": db_list,
            "dts_job_name": dts_job_name,
            "source_endpoint": source_endpoint,
            "subscription_instance": subscription_instance,
        }
        if checkpoint is not None:
            self._values["checkpoint"] = checkpoint
        if dedicated_cluster_id is not None:
            self._values["dedicated_cluster_id"] = dedicated_cluster_id
        if delay_notice is not None:
            self._values["delay_notice"] = delay_notice
        if delay_phone is not None:
            self._values["delay_phone"] = delay_phone
        if delay_rule_time is not None:
            self._values["delay_rule_time"] = delay_rule_time
        if dts_bis_label is not None:
            self._values["dts_bis_label"] = dts_bis_label
        if dts_instance_id is not None:
            self._values["dts_instance_id"] = dts_instance_id
        if dts_job_id is not None:
            self._values["dts_job_id"] = dts_job_id
        if error_notice is not None:
            self._values["error_notice"] = error_notice
        if error_phone is not None:
            self._values["error_phone"] = error_phone
        if reserve is not None:
            self._values["reserve"] = reserve
        if status is not None:
            self._values["status"] = status
        if subscription_data_type is not None:
            self._values["subscription_data_type"] = subscription_data_type

    @builtins.property
    def db_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: dbList: The objects for which you want to track data changes.
        '''
        result = self._values.get("db_list")
        assert result is not None, "Required property 'db_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def dts_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dtsJobName: The name of the DTS instance.
        '''
        result = self._values.get("dts_job_name")
        assert result is not None, "Required property 'dts_job_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SourceEndpointProperty]:
        '''
        :Property: sourceEndpoint: Source instance configuration.
        '''
        result = self._values.get("source_endpoint")
        assert result is not None, "Required property 'source_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SourceEndpointProperty], result)

    @builtins.property
    def subscription_instance(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SubscriptionInstanceProperty]:
        '''
        :Property: subscriptionInstance: Subscription instance configuration.
        '''
        result = self._values.get("subscription_instance")
        assert result is not None, "Required property 'subscription_instance' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SubscriptionInstanceProperty], result)

    @builtins.property
    def checkpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        '''
        result = self._values.get("checkpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        '''
        result = self._values.get("dedicated_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        '''
        result = self._values.get("delay_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("delay_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_rule_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        '''
        result = self._values.get("delay_rule_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_bis_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        '''
        result = self._values.get("dts_bis_label")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsInstanceId: The ID of the DTS instance.
        '''
        result = self._values.get("dts_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsJobId: The ID of the DTS task.
        '''
        result = self._values.get("dts_job_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        '''
        result = self._values.get("error_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("error_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def reserve(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        '''
        result = self._values.get("reserve")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the resource. Valid values:

        - **Subscribing**: Start the task.
        - **Suspending**: Suspend the task.
        - **Stopping**: Stop the task.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def subscription_data_type(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SubscriptionDataTypeProperty]]:
        '''
        :Property: subscriptionDataType: Subscription data type.
        '''
        result = self._values.get("subscription_data_type")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SubscriptionDataTypeProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSubscriptionJob2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSynchronizationJob2(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob2",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::DTS::SynchronizationJob2``DATASOURCE::DTS::MigrationInstances is used to query information about Data Transmission Service (DTS) tasks.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``SynchronizationJob2`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-synchronizationjob2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosSynchronizationJob2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25adef785d7212d8a929dd1ad8eadf101e7ccfe84de88acc49965d93acd72c89)
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
            type_hints = typing.get_type_hints(_typecheckingstub__22c5473593d1b3a3a39ed1c9d972fbd29231882e5d525583d76efc256eb9ac5c)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsInstanceId")
    def attr_dts_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DtsInstanceId: The ID of the DTS instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobId")
    def attr_dts_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DtsJobId: The ID of the task.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobName")
    def attr_dts_job_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DtsJobName: The name of the DTS job.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobName"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="dataInitialization")
    def data_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataInitialization"))

    @data_initialization.setter
    def data_initialization(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__927f1328f5eb2d897578c129650808a1e8aeb896feae047571d38d5344999300)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataInitialization", value)

    @builtins.property
    @jsii.member(jsii_name="dataSynchronization")
    def data_synchronization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dataSynchronization"))

    @data_synchronization.setter
    def data_synchronization(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4b4ba67cfe113d4f7625fd35132f3a957210afe1473ecca5e8330ea3a3fe26e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataSynchronization", value)

    @builtins.property
    @jsii.member(jsii_name="dbList")
    def db_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: dbList: The objects that you want to migrate or synchronize.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "dbList"))

    @db_list.setter
    def db_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__516da5ab2965d257ed91c96b46f920cb0b49cca119ead9ed9a08261e1249cb0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dbList", value)

    @builtins.property
    @jsii.member(jsii_name="destinationEndpoint")
    def destination_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob2.DestinationEndpointProperty"]:
        '''
        :Property: destinationEndpoint: Destination instance configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob2.DestinationEndpointProperty"], jsii.get(self, "destinationEndpoint"))

    @destination_endpoint.setter
    def destination_endpoint(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob2.DestinationEndpointProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9a4b1aaf3f9a9cd58335334c512738eb68e9ab83cf2691cff0f03aadcf65cae)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "destinationEndpoint", value)

    @builtins.property
    @jsii.member(jsii_name="dtsJobName")
    def dts_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dtsJobName: The name of the DTS instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "dtsJobName"))

    @dts_job_name.setter
    def dts_job_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af544a86c72834987765c39be11df7411fdc8504025c2f674a5a1efbabffebfe)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsJobName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa2de55455749314651d59705c2d3756dc613afe58ad38543d6b3a0dae4c97a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="sourceEndpoint")
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob2.SourceEndpointProperty"]:
        '''
        :Property: sourceEndpoint: Source instance configuration.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob2.SourceEndpointProperty"], jsii.get(self, "sourceEndpoint"))

    @source_endpoint.setter
    def source_endpoint(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob2.SourceEndpointProperty"],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__18da6472f48a933e3ffe15a320434e5046132db2b3687ed83b2b022c0ca8a0b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceEndpoint", value)

    @builtins.property
    @jsii.member(jsii_name="structureInitialization")
    def structure_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "structureInitialization"))

    @structure_initialization.setter
    def structure_initialization(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__173e43f232ec132d4c4694ca9b64f9230c019b3c96cd623b4e4d80e2201ad316)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "structureInitialization", value)

    @builtins.property
    @jsii.member(jsii_name="checkpoint")
    def checkpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "checkpoint"))

    @checkpoint.setter
    def checkpoint(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d594a92df2fbe2e079714f7cb7fce2b94ce542ee431e8e264f6b3c2ab39b8fc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "checkpoint", value)

    @builtins.property
    @jsii.member(jsii_name="dataCheckConfigure")
    def data_check_configure(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob2.DataCheckConfigureProperty"]]:
        '''
        :Property: dataCheckConfigure: The data verification task for a data migration or synchronization instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob2.DataCheckConfigureProperty"]], jsii.get(self, "dataCheckConfigure"))

    @data_check_configure.setter
    def data_check_configure(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosSynchronizationJob2.DataCheckConfigureProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0e88842dc78e06f8fd75eac7658950e2d3d2eb4c1cb9da1a6cabc26dfe5e578)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dataCheckConfigure", value)

    @builtins.property
    @jsii.member(jsii_name="dedicatedClusterId")
    def dedicated_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dedicatedClusterId"))

    @dedicated_cluster_id.setter
    def dedicated_cluster_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b54e57655dd9c2d3a41fc880890a5045763edc952fb1c9f95b3ca5f6e024b56e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dedicatedClusterId", value)

    @builtins.property
    @jsii.member(jsii_name="delayNotice")
    def delay_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "delayNotice"))

    @delay_notice.setter
    def delay_notice(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b53b71d635622bca57b60f5964dba6e8b210e073207388c33d4b7c6473a9ea6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "delayNotice", value)

    @builtins.property
    @jsii.member(jsii_name="delayPhone")
    def delay_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "delayPhone"))

    @delay_phone.setter
    def delay_phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94d463fc3d6ed80ca890c2ba7d4f209a384825d5026869402de668ad313e7ad5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "delayPhone", value)

    @builtins.property
    @jsii.member(jsii_name="delayRuleTime")
    def delay_rule_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "delayRuleTime"))

    @delay_rule_time.setter
    def delay_rule_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16dc20a6e1f5a2ed4f4e6814f37cdf9fddc97f0acdd6aaa09f02beaf56d6c9c9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "delayRuleTime", value)

    @builtins.property
    @jsii.member(jsii_name="disasterRecoveryJob")
    def disaster_recovery_job(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "disasterRecoveryJob"))

    @disaster_recovery_job.setter
    def disaster_recovery_job(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d011fad923d3df67e8e2e5cf773f5718fd81e3caa4046d895c5cbf191136be0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "disasterRecoveryJob", value)

    @builtins.property
    @jsii.member(jsii_name="dtsBisLabel")
    def dts_bis_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dtsBisLabel"))

    @dts_bis_label.setter
    def dts_bis_label(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d23674d6e40897a87bff98b82d5a01c54aa25208ce7c30685f41576546081e7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsBisLabel", value)

    @builtins.property
    @jsii.member(jsii_name="dtsInstanceId")
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsInstanceId: The ID of the DTS instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dtsInstanceId"))

    @dts_instance_id.setter
    def dts_instance_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e09a52488194d0b6e535a717a3f6588a45bda7d855fd3fce0c3c853110f66df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsInstanceId", value)

    @builtins.property
    @jsii.member(jsii_name="dtsJobId")
    def dts_job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsJobId: The ID of the DTS task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "dtsJobId"))

    @dts_job_id.setter
    def dts_job_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0441c306e493ebe362317a326d9d0effde1dd9744dca28940f79528a7e1ef5c0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "dtsJobId", value)

    @builtins.property
    @jsii.member(jsii_name="errorNotice")
    def error_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "errorNotice"))

    @error_notice.setter
    def error_notice(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc6184a072625bd341364db794cc4ac404facef8be1127befd9bbdbd88fdfd90)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "errorNotice", value)

    @builtins.property
    @jsii.member(jsii_name="errorPhone")
    def error_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "errorPhone"))

    @error_phone.setter
    def error_phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa210e962d2be6696c4fed95d6d84f1f5308cb69bde3afc1971e2d0dcfd8933a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "errorPhone", value)

    @builtins.property
    @jsii.member(jsii_name="fileOssUrl")
    def file_oss_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "fileOssUrl"))

    @file_oss_url.setter
    def file_oss_url(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__59c57e88d4d812204e79e2d0cad299f4b6d203120a2d2b2ca680d5652fceebfc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "fileOssUrl", value)

    @builtins.property
    @jsii.member(jsii_name="reserve")
    def reserve(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "reserve"))

    @reserve.setter
    def reserve(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f70d0a3e10a9e35b4a8dd2e9b3178b8c4b7ef74d3456542eaaa8d17a2d13daca)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "reserve", value)

    @builtins.property
    @jsii.member(jsii_name="status")
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the resource. Valid values:

        - **Synchronizing**: Start the task.
        - **Suspending**: Suspend the task.
        - **Stopping**: Stop the task.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bdba0015a95f381df78628df900baadc1ffc20526867b0244fccef7262f11a71)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "status", value)

    @builtins.property
    @jsii.member(jsii_name="synchronizationDirection")
    def synchronization_direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        synchronizationDirection: The synchronization direction. Default value: Forward. Valid values:

        - **Forward**: Data is synchronized from the source database to the destination database.
        - **Reverse**: Data is synchronized from the destination database to the source database.
        **Note**: The default value is **Forward**.
        The value Reverse takes effect only if the topology of the data synchronization task is two-way synchronization.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "synchronizationDirection"))

    @synchronization_direction.setter
    def synchronization_direction(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c07b2199d57bcbb92877d8ea41f42798ab03481cc62d6f5de69d0bc5ebbfcd0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "synchronizationDirection", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob2.DataCheckConfigureProperty",
        jsii_struct_bases=[],
        name_mapping={
            "check_maximum_hour": "checkMaximumHour",
            "check_maximum_hour_enable": "checkMaximumHourEnable",
            "data_check_db_list": "dataCheckDbList",
            "data_check_notice_phone": "dataCheckNoticePhone",
            "full_check_error_notice": "fullCheckErrorNotice",
            "full_check_fix_data": "fullCheckFixData",
            "full_check_max_read_bps": "fullCheckMaxReadBps",
            "full_check_max_read_rps": "fullCheckMaxReadRps",
            "full_check_model": "fullCheckModel",
            "full_check_notice_value": "fullCheckNoticeValue",
            "full_check_ratio": "fullCheckRatio",
            "full_check_refer_endpoint": "fullCheckReferEndpoint",
            "full_check_valid_fail_notice": "fullCheckValidFailNotice",
            "full_data_check": "fullDataCheck",
            "incremental_check_delay_notice": "incrementalCheckDelayNotice",
            "incremental_check_delay_notice_period": "incrementalCheckDelayNoticePeriod",
            "incremental_check_delay_notice_times": "incrementalCheckDelayNoticeTimes",
            "incremental_check_delay_notice_value": "incrementalCheckDelayNoticeValue",
            "incremental_check_error_notice": "incrementalCheckErrorNotice",
            "incremental_check_valid_fail_notice": "incrementalCheckValidFailNotice",
            "incremental_check_valid_fail_notice_period": "incrementalCheckValidFailNoticePeriod",
            "incremental_check_valid_fail_notice_times": "incrementalCheckValidFailNoticeTimes",
            "incremental_check_valid_fail_notice_value": "incrementalCheckValidFailNoticeValue",
            "incremental_data_check": "incrementalDataCheck",
        },
    )
    class DataCheckConfigureProperty:
        def __init__(
            self,
            *,
            check_maximum_hour: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            check_maximum_hour_enable: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_check_db_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            data_check_notice_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_fix_data: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_max_read_bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_max_read_rps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_model: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_refer_endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_check_valid_fail_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            full_data_check: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_delay_notice_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_delay_notice_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_delay_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_valid_fail_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_valid_fail_notice_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_valid_fail_notice_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_check_valid_fail_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            incremental_data_check: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param check_maximum_hour: 
            :param check_maximum_hour_enable: 
            :param data_check_db_list: 
            :param data_check_notice_phone: 
            :param full_check_error_notice: 
            :param full_check_fix_data: 
            :param full_check_max_read_bps: 
            :param full_check_max_read_rps: 
            :param full_check_model: 
            :param full_check_notice_value: 
            :param full_check_ratio: 
            :param full_check_refer_endpoint: 
            :param full_check_valid_fail_notice: 
            :param full_data_check: 
            :param incremental_check_delay_notice: 
            :param incremental_check_delay_notice_period: 
            :param incremental_check_delay_notice_times: 
            :param incremental_check_delay_notice_value: 
            :param incremental_check_error_notice: 
            :param incremental_check_valid_fail_notice: 
            :param incremental_check_valid_fail_notice_period: 
            :param incremental_check_valid_fail_notice_times: 
            :param incremental_check_valid_fail_notice_value: 
            :param incremental_data_check: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__43f17bc200e4eda04123f76a3449dacd2b01d334e39e59ef1572297f78909a12)
                check_type(argname="argument check_maximum_hour", value=check_maximum_hour, expected_type=type_hints["check_maximum_hour"])
                check_type(argname="argument check_maximum_hour_enable", value=check_maximum_hour_enable, expected_type=type_hints["check_maximum_hour_enable"])
                check_type(argname="argument data_check_db_list", value=data_check_db_list, expected_type=type_hints["data_check_db_list"])
                check_type(argname="argument data_check_notice_phone", value=data_check_notice_phone, expected_type=type_hints["data_check_notice_phone"])
                check_type(argname="argument full_check_error_notice", value=full_check_error_notice, expected_type=type_hints["full_check_error_notice"])
                check_type(argname="argument full_check_fix_data", value=full_check_fix_data, expected_type=type_hints["full_check_fix_data"])
                check_type(argname="argument full_check_max_read_bps", value=full_check_max_read_bps, expected_type=type_hints["full_check_max_read_bps"])
                check_type(argname="argument full_check_max_read_rps", value=full_check_max_read_rps, expected_type=type_hints["full_check_max_read_rps"])
                check_type(argname="argument full_check_model", value=full_check_model, expected_type=type_hints["full_check_model"])
                check_type(argname="argument full_check_notice_value", value=full_check_notice_value, expected_type=type_hints["full_check_notice_value"])
                check_type(argname="argument full_check_ratio", value=full_check_ratio, expected_type=type_hints["full_check_ratio"])
                check_type(argname="argument full_check_refer_endpoint", value=full_check_refer_endpoint, expected_type=type_hints["full_check_refer_endpoint"])
                check_type(argname="argument full_check_valid_fail_notice", value=full_check_valid_fail_notice, expected_type=type_hints["full_check_valid_fail_notice"])
                check_type(argname="argument full_data_check", value=full_data_check, expected_type=type_hints["full_data_check"])
                check_type(argname="argument incremental_check_delay_notice", value=incremental_check_delay_notice, expected_type=type_hints["incremental_check_delay_notice"])
                check_type(argname="argument incremental_check_delay_notice_period", value=incremental_check_delay_notice_period, expected_type=type_hints["incremental_check_delay_notice_period"])
                check_type(argname="argument incremental_check_delay_notice_times", value=incremental_check_delay_notice_times, expected_type=type_hints["incremental_check_delay_notice_times"])
                check_type(argname="argument incremental_check_delay_notice_value", value=incremental_check_delay_notice_value, expected_type=type_hints["incremental_check_delay_notice_value"])
                check_type(argname="argument incremental_check_error_notice", value=incremental_check_error_notice, expected_type=type_hints["incremental_check_error_notice"])
                check_type(argname="argument incremental_check_valid_fail_notice", value=incremental_check_valid_fail_notice, expected_type=type_hints["incremental_check_valid_fail_notice"])
                check_type(argname="argument incremental_check_valid_fail_notice_period", value=incremental_check_valid_fail_notice_period, expected_type=type_hints["incremental_check_valid_fail_notice_period"])
                check_type(argname="argument incremental_check_valid_fail_notice_times", value=incremental_check_valid_fail_notice_times, expected_type=type_hints["incremental_check_valid_fail_notice_times"])
                check_type(argname="argument incremental_check_valid_fail_notice_value", value=incremental_check_valid_fail_notice_value, expected_type=type_hints["incremental_check_valid_fail_notice_value"])
                check_type(argname="argument incremental_data_check", value=incremental_data_check, expected_type=type_hints["incremental_data_check"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if check_maximum_hour is not None:
                self._values["check_maximum_hour"] = check_maximum_hour
            if check_maximum_hour_enable is not None:
                self._values["check_maximum_hour_enable"] = check_maximum_hour_enable
            if data_check_db_list is not None:
                self._values["data_check_db_list"] = data_check_db_list
            if data_check_notice_phone is not None:
                self._values["data_check_notice_phone"] = data_check_notice_phone
            if full_check_error_notice is not None:
                self._values["full_check_error_notice"] = full_check_error_notice
            if full_check_fix_data is not None:
                self._values["full_check_fix_data"] = full_check_fix_data
            if full_check_max_read_bps is not None:
                self._values["full_check_max_read_bps"] = full_check_max_read_bps
            if full_check_max_read_rps is not None:
                self._values["full_check_max_read_rps"] = full_check_max_read_rps
            if full_check_model is not None:
                self._values["full_check_model"] = full_check_model
            if full_check_notice_value is not None:
                self._values["full_check_notice_value"] = full_check_notice_value
            if full_check_ratio is not None:
                self._values["full_check_ratio"] = full_check_ratio
            if full_check_refer_endpoint is not None:
                self._values["full_check_refer_endpoint"] = full_check_refer_endpoint
            if full_check_valid_fail_notice is not None:
                self._values["full_check_valid_fail_notice"] = full_check_valid_fail_notice
            if full_data_check is not None:
                self._values["full_data_check"] = full_data_check
            if incremental_check_delay_notice is not None:
                self._values["incremental_check_delay_notice"] = incremental_check_delay_notice
            if incremental_check_delay_notice_period is not None:
                self._values["incremental_check_delay_notice_period"] = incremental_check_delay_notice_period
            if incremental_check_delay_notice_times is not None:
                self._values["incremental_check_delay_notice_times"] = incremental_check_delay_notice_times
            if incremental_check_delay_notice_value is not None:
                self._values["incremental_check_delay_notice_value"] = incremental_check_delay_notice_value
            if incremental_check_error_notice is not None:
                self._values["incremental_check_error_notice"] = incremental_check_error_notice
            if incremental_check_valid_fail_notice is not None:
                self._values["incremental_check_valid_fail_notice"] = incremental_check_valid_fail_notice
            if incremental_check_valid_fail_notice_period is not None:
                self._values["incremental_check_valid_fail_notice_period"] = incremental_check_valid_fail_notice_period
            if incremental_check_valid_fail_notice_times is not None:
                self._values["incremental_check_valid_fail_notice_times"] = incremental_check_valid_fail_notice_times
            if incremental_check_valid_fail_notice_value is not None:
                self._values["incremental_check_valid_fail_notice_value"] = incremental_check_valid_fail_notice_value
            if incremental_data_check is not None:
                self._values["incremental_data_check"] = incremental_data_check

        @builtins.property
        def check_maximum_hour(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: checkMaximumHour: The timeout period of the full data verification task. Valid values: integers from 1 to 72. Countdown begins the moment the full data verification task is started. If the task is not complete within the specified timeout period, the task is forcibly stopped.
            '''
            result = self._values.get("check_maximum_hour")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def check_maximum_hour_enable(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            checkMaximumHourEnable: Specifies whether to configure a timeout period for the full data verification task.Valid values:

            - **0**: does not configure a timeout period for the full data verification task.
            - **1**: configures a timeout period for the full data verification task.
            **Note**: This parameter is required if the fullCheckModel parameter is set to 1.
            '''
            result = self._values.get("check_maximum_hour_enable")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_check_db_list(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dataCheckDbList: The objects whose data is to be verified. The value must be a JSON string.
            '''
            result = self._values.get("data_check_db_list")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def data_check_notice_phone(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: dataCheckNoticePhone: The mobile number of the alert contact for a full or incremental data verification task. If an alert is triggered for a verification task, a text message is sent to notify the alert contact.
            '''
            result = self._values.get("data_check_notice_phone")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_error_notice(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckErrorNotice: Specifies whether to trigger an alert if the full data verification task fails. Valid values: **true** and **false**.
            **Note**: For example, you set this parameter to **true**. If the full data verification task fails, an alert is triggered.
            '''
            result = self._values.get("full_check_error_notice")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_fix_data(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckFixData: Specifies whether to replace the inconsistent data. Valid values: **true** and **false**. Default value: false.
            **Note**: For example, you set this parameter to true. If the destination database has data that is inconsistent with the data in the source database, the data values of the destination database are replaced with those of the source database.
            '''
            result = self._values.get("full_check_fix_data")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_max_read_bps(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fullCheckMaxReadBps: The maximum number of bytes that are read per second. Valid values: integers from 0 to 9007199254740991.
            '''
            result = self._values.get("full_check_max_read_bps")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_max_read_rps(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fullCheckMaxReadRps: The maximum number of data rows that are read per second. Valid values: integers from 0 to 9007199254740991.
            '''
            result = self._values.get("full_check_max_read_rps")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_model(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckModel: The mode of the full data verification task. Valid values:

            - **1**: verifies the data by sampling ratio.
            - **2**: verifies the data by row.
            '''
            result = self._values.get("full_check_model")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_notice_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckNoticeValue: The alert threshold for inconsistent data entries detected by the full data verification task.
            **Note**: This parameter is required if the **fullCheckValidFailNotice** parameter is set to **true**.
            '''
            result = self._values.get("full_check_notice_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_ratio(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckRatio: The sampling ratio of the full data verification task. Valid values: integers from 10 to 100. Unit: percent.
            **Note**: This parameter is required if the **fullCheckModel** parameter is set to 1.
            '''
            result = self._values.get("full_check_ratio")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_refer_endpoint(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckReferEndpoint: The benchmark for full data verification. Valid values:

            - **all**: checks the data consistency between the source and destination databases based on the source and destination databases.
            - **src**: checks the data consistency between the source and destination databases based on the source database. Objects that exist in the destination database but do not exist in the source database are not checked.
            - **dest**: checks the data consistency between the source and destination databases based on the destination database. Objects that exist in the source database but do not exist in the destination database are not checked.
            '''
            result = self._values.get("full_check_refer_endpoint")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_check_valid_fail_notice(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            fullCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the full data verification task. Valid values: **true** and **false**.
            **Note**: For example, you set this parameter to true. If the number of inconsistent data entries detected by the full data verification task is greater than or equal to the threshold that you specified, an alert is triggered.
            '''
            result = self._values.get("full_check_valid_fail_notice")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def full_data_check(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: fullDataCheck: Specifies whether to perform a full data verification task. Valid values: **true** and **false**.
            '''
            result = self._values.get("full_data_check")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_delay_notice(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckDelayNotice: Specifies whether to trigger an alert on the data latency of the incremental data verification task. Valid values: **true** and **false**.
            **Note**: For example, you set this parameter to **true**. If the cumulative latency of the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
            '''
            result = self._values.get("incremental_check_delay_notice")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_delay_notice_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckDelayNoticePeriod: The statistical period of an alert on the data latency of the incremental data verification task. Valid values:

            - **1**: 1 minute
            - **2**: 5 minutes
            - **3**: 10 minutes
            - **4**: 30 minutes
            **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_delay_notice_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_delay_notice_times(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckDelayNoticeTimes: The number of statistical periods of an alert on the data latency of the incremental data verification task.
            **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_delay_notice_times")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_delay_notice_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckDelayNoticeValue: The alert threshold for the data latency of the incremental data verification task. Unit: seconds.
            **Note**: This parameter is required if the **incrementalCheckDelayNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_delay_notice_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_error_notice(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckErrorNotice: Specifies whether to trigger an alert if the incremental data verification task fails. Valid values: **true** and **false**.
            Note: For example, you set this parameter to **true**. If the incremental data verification task fails, an alert is triggered.
            '''
            result = self._values.get("incremental_check_error_notice")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_valid_fail_notice(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckValidFailNotice: Specifies whether to trigger an alert if inconsistent data is detected by the incremental data verification task. Valid values: **true** and **false**.
            **Note**: For example, you set this parameter to **true**. If the cumulative number of inconsistent data entries detected by the incremental data verification task in several statistical periods is greater than or equal to the threshold that you specified, an alert is triggered.
            '''
            result = self._values.get("incremental_check_valid_fail_notice")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_valid_fail_notice_period(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckValidFailNoticePeriod: The statistical period of an alert on inconsistent data entries detected by the incremental data verification task. Valid values:

            - **1**: 1 minute
            - **2**: 5 minutes
            - **3**: 10 minutes
            - **4**: 30 minutes
            **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_valid_fail_notice_period")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_valid_fail_notice_times(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckValidFailNoticeTimes: The number of statistical periods of an alert on inconsistent data entries detected by the incremental data verification task.
            **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_valid_fail_notice_times")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_check_valid_fail_notice_value(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            incrementalCheckValidFailNoticeValue: The alert threshold for inconsistent data entries detected by the incremental data verification task.
            **Note**: This parameter is required if the **incrementalCheckValidFailNotice** parameter is set to **true**.
            '''
            result = self._values.get("incremental_check_valid_fail_notice_value")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def incremental_data_check(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: incrementalDataCheck: Specifies whether to perform an incremental data verification task. Valid values: **true** and **false**.
            '''
            result = self._values.get("incremental_data_check")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DataCheckConfigureProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob2.DestinationEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "database_name": "databaseName",
            "engine_name": "engineName",
            "instance_id": "instanceId",
            "ip": "ip",
            "oracle_sid": "oracleSid",
            "owner_id": "ownerId",
            "password": "password",
            "port": "port",
            "region": "region",
            "role": "role",
            "user_name": "userName",
        },
    )
    class DestinationEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param database_name: 
            :param engine_name: 
            :param instance_id: 
            :param ip: 
            :param oracle_sid: 
            :param owner_id: 
            :param password: 
            :param port: 
            :param region: 
            :param role: 
            :param user_name: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__79aeebbf7c4fe32ea4c4e321bae48fc13b92f7efef364b429994436e540d3c71)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument database_name", value=database_name, expected_type=type_hints["database_name"])
                check_type(argname="argument engine_name", value=engine_name, expected_type=type_hints["engine_name"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument oracle_sid", value=oracle_sid, expected_type=type_hints["oracle_sid"])
                check_type(argname="argument owner_id", value=owner_id, expected_type=type_hints["owner_id"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
                check_type(argname="argument role", value=role, expected_type=type_hints["role"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
            }
            if database_name is not None:
                self._values["database_name"] = database_name
            if engine_name is not None:
                self._values["engine_name"] = engine_name
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if ip is not None:
                self._values["ip"] = ip
            if oracle_sid is not None:
                self._values["oracle_sid"] = oracle_sid
            if owner_id is not None:
                self._values["owner_id"] = owner_id
            if password is not None:
                self._values["password"] = password
            if port is not None:
                self._values["port"] = port
            if region is not None:
                self._values["region"] = region
            if role is not None:
                self._values["role"] = role
            if user_name is not None:
                self._values["user_name"] = user_name

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            instanceType: The type of the destination instance. Valid values:
            Alibaba Cloud database instances

            - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
            - **PolarDB**: PolarDB for MySQL cluster
            - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
            - **POLARDBX20**: PolarDB-X 2.0 instance
            - **REDIS**: ApsaraDB for Redis instance
            - **ADS**: AnalyticDB for MySQL V2.0 cluster or AnalyticDB for MySQL V3.0 cluster
            - **MONGODB**: ApsaraDB for MongoDB instance
            - **GREENPLUM**: AnalyticDB for PostgreSQL instance
            - **DATAHUB**: DataHub project
            - **ELK**: Elasticsearch cluster
            - **Tablestore**: Tablestore instance
            - **ODPS**: MaxCompute project
            Self-managed databases
            - **OTHER**: self-managed database with a public IP address
            - **ECS**: self-managed database hosted on an ECS instance
            - **EXPRESS**: self-managed database connected over Express Connect
            - **CEN**: self-managed database connected over CEN
            - **DG**: self-managed database connected over Database Gateway
            **Note**: If the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to OTHER or EXPRESS. Then, you can connect the PolarDB for PostgreSQL cluster (compatible with Oracle) to DTS as a self-managed database by using a public IP address or Express Connect.
            If the destination instance is a Message Queue for Apache Kafka instance, you must set this parameter to ECS or EXPRESS. Then, you can connect the Message Queue for Apache Kafka instance to DTS as a self-managed database connected over ECS or Express Connect.
            If the destination instance is a self-managed database, you must deploy the network environment for the database.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def database_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            databaseName: The name of the database which contains the objects to be migrated in the destination instance.
            **Note**: This parameter is required only when the destination instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
            '''
            result = self._values.get("database_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def engine_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            engineName: The database engine of the destination instance. Valid values:

            - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
            - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
            - **PolarDB**: PolarDB for MySQL cluster
            - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
            - **POLARDBX10**: PolarDB-X 1.0 instance
            - **POLARDBX20**: PolarDB-X 2.0 instance
            - **ORACLE**: self-managed Oracle database
            - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
            - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
            - **ADS**: AnalyticDB for MySQL V2.0 cluster
            - **ADB30**: AnalyticDB for MySQL V3.0 cluster- **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
            - **GREENPLUM**: AnalyticDB for PostgreSQL instance
            - **KAFKA**: Message Queue for Apache Kafka instance or self-managed Kafka cluster
            - **DATAHUB**: DataHub project- **DB2**: self-managed Db2 for LUW database
            - **AS400**: self-managed Db2 for i database
            - **ODPS**: MaxCompute project
            - **Tablestore**: Tablestore instance
            - **ELK**: Elasticsearch cluster
            - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
            **Note**: Default value: **MYSQL**.
            If this parameter is set to **KAFKA**, **MONGODB**, or **PolarDB**, you must also specify the database information in the Reserve parameter.
            '''
            result = self._values.get("engine_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceId: The ID of the destination instance. If the destination instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,

            - If the destination instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
            - If the destination instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
            - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
            - If InstanceType is set to DG, you must specify the ID of the database gateway.
            - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the destination instance.
            **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ip: The IP address of the destination instance.
            **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oracle_sid(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            oracleSid: The system ID (SID) of the Oracle database.
            **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
            '''
            result = self._values.get("oracle_sid")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def owner_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ownerId: The ID of the Alibaba Cloud account to which the destination database belongs.
            **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
            '''
            result = self._values.get("owner_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: The password of the destination database account.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            port: The port number of the destination instance.
            **Note**: This parameter is required only when the destination instance is a self-managed database.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            region: The ID of the region in which the destination instance resides.
            **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
            '''
            result = self._values.get("region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the destination instance.
            **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
            '''
            result = self._values.get("role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            userName: The database account of the destination database.
            **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DestinationEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob2.SourceEndpointProperty",
        jsii_struct_bases=[],
        name_mapping={
            "instance_type": "instanceType",
            "database_name": "databaseName",
            "engine_name": "engineName",
            "instance_id": "instanceId",
            "ip": "ip",
            "oracle_sid": "oracleSid",
            "owner_id": "ownerId",
            "password": "password",
            "port": "port",
            "region": "region",
            "role": "role",
            "user_name": "userName",
            "v_switch_id": "vSwitchId",
        },
    )
    class SourceEndpointProperty:
        def __init__(
            self,
            *,
            instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param instance_type: 
            :param database_name: 
            :param engine_name: 
            :param instance_id: 
            :param ip: 
            :param oracle_sid: 
            :param owner_id: 
            :param password: 
            :param port: 
            :param region: 
            :param role: 
            :param user_name: 
            :param v_switch_id: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5ffccdb043b4360113b6e4505c18d79be47952130c5f425620a4bc8a48da78db)
                check_type(argname="argument instance_type", value=instance_type, expected_type=type_hints["instance_type"])
                check_type(argname="argument database_name", value=database_name, expected_type=type_hints["database_name"])
                check_type(argname="argument engine_name", value=engine_name, expected_type=type_hints["engine_name"])
                check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
                check_type(argname="argument ip", value=ip, expected_type=type_hints["ip"])
                check_type(argname="argument oracle_sid", value=oracle_sid, expected_type=type_hints["oracle_sid"])
                check_type(argname="argument owner_id", value=owner_id, expected_type=type_hints["owner_id"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument region", value=region, expected_type=type_hints["region"])
                check_type(argname="argument role", value=role, expected_type=type_hints["role"])
                check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "instance_type": instance_type,
            }
            if database_name is not None:
                self._values["database_name"] = database_name
            if engine_name is not None:
                self._values["engine_name"] = engine_name
            if instance_id is not None:
                self._values["instance_id"] = instance_id
            if ip is not None:
                self._values["ip"] = ip
            if oracle_sid is not None:
                self._values["oracle_sid"] = oracle_sid
            if owner_id is not None:
                self._values["owner_id"] = owner_id
            if password is not None:
                self._values["password"] = password
            if port is not None:
                self._values["port"] = port
            if region is not None:
                self._values["region"] = region
            if role is not None:
                self._values["role"] = role
            if user_name is not None:
                self._values["user_name"] = user_name
            if v_switch_id is not None:
                self._values["v_switch_id"] = v_switch_id

        @builtins.property
        def instance_type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property:

            instanceType: The type of the source instance. Valid values:
            Alibaba Cloud database instances:

            - **RDS**: ApsaraDB RDS for MySQL instance, ApsaraDB RDS for SQL Server instance, ApsaraDB RDS for PostgreSQL instance, or ApsaraDB RDS for MariaDB TX instance
            - **PolarDB**: PolarDB for MySQL cluster
            - **REDIS**: ApsaraDB for Redis instance
            - **DISTRIBUTED_POLARDBX10**: PolarDB-X 1.0 (formerly DRDS) instance
            - **POLARDBX20**: PolarDB-X 2.0 instance
            - **MONGODB**: ApsaraDB for MongoDB instance
            - **DISTRIBUTED_DMSLOGICDB**: Data Management (DMS) logical database
            Self-managed databases:
            - **OTHER**: self-managed database with a public IP address
            - **ECS**: self-managed database hosted on an Elastic Compute Service (ECS) instance
            - **EXPRESS**: self-managed database connected over Express Connect
            - **CEN**: self-managed database connected over Cloud Enterprise Network (CEN)
            - **DG**: self-managed database connected over Database Gateway
            **Note**: If the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), you must set this parameter to **OTHER** or **EXPRESS**. Then, you can connect the PolarDB for PostgreSQL cluster to DTS as a self-managed database by using a public IP address or Express Connect. If the source instance is a self-managed database, you must deploy the network environment for the database.
            '''
            result = self._values.get("instance_type")
            assert result is not None, "Required property 'instance_type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def database_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            databaseName: The name of the database which contains the objects to be migrated in the source instance.
            **Note**: This parameter is required only when the source instance is a PolarDB for PostgreSQL cluster (compatible with Oracle), a PostgreSQL database, or a MongoDB database.
            '''
            result = self._values.get("database_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def engine_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            engineName: The database engine of the source instance. Valid values:

            - **MYSQL**: ApsaraDB RDS for MySQL instance or self-managed MySQL database
            - **MARIADB**: ApsaraDB RDS for MariaDB TX instance
            - **PolarDB**: PolarDB for MySQL cluster
            - **POLARDB_O**: PolarDB for PostgreSQL cluster (compatible with Oracle)
            - **POLARDBX10**: PolarDB-X 1.0 instance
            - **POLARDBX20**: PolarDB-X 2.0 instance
            - **ORACLE**: self-managed Oracle database
            - **POSTGRESQL**: ApsaraDB RDS for PostgreSQL instance or self-managed PostgreSQL database
            - **MSSQL**: ApsaraDB RDS for SQL Server instance or self-managed SQL Server database
            - **MONGODB**: ApsaraDB for MongoDB instance or self-managed MongoDB database
            - **DB2**: self-managed Db2 for LUW database
            - **AS400**: self-managed Db2 for i database
            - **DMSPOLARDB**: DMS logical database
            - **HBASE**: self-managed HBase database
            - **TERADATA**: Teradata database
            - **TiDB**: TiDB database
            - **REDIS**: ApsaraDB for Redis instance or self-managed Redis database
            **Note**: Default value: **MYSQL**.
            If EngineName is set to **MONGODB**, you must also specify the architecture type of the **MongoDB** database in the **Reserve** parameter.
            '''
            result = self._values.get("engine_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def instance_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            instanceId: The ID of the source instance. If the source instance is an Alibaba Cloud database instance, you must specify the ID of the database instance. For example,

            - If the source instance is an ApsaraDB RDS for MySQL instance, you must specify the ID of the ApsaraDB RDS for MySQL instance.
            - If the source instance is a self-managed database, the value of this parameter varies with the value of SourceEndpointInstanceType.
            - If InstanceType is set to ECS, you must specify the ID of the ECS instance.
            - If InstanceType is set to DG, you must specify the ID of the database gateway.
            - If InstanceType is set to EXPRESS or CEN, you must specify the ID of the VPC that is connected to the source instance.
            **Note**: If DestinationEndpointInstanceType is set to CEN, you must also specify the ID of the CEN instance in the Reserve parameter.
            '''
            result = self._values.get("instance_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ip: The IP address of the source instance.
            **Note**: This parameter is required only when **InstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.
            '''
            result = self._values.get("ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def oracle_sid(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            oracleSid: The system ID (SID) of the Oracle database.
            **Note**: This parameter is required only when **EngineName** is set to **ORACLE** and the Oracle database is deployed in an architecture that is not a Real Application Cluster (RAC).
            '''
            result = self._values.get("oracle_sid")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def owner_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            ownerId: The ID of the Alibaba Cloud account to which the source database belongs.
            **Note**: You can specify this parameter to migrate or synchronize data across different Alibaba Cloud accounts. In this case, you must specify **Role**.
            '''
            result = self._values.get("owner_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: password: The password of the source database account.
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            port: The port number of the source instance.
            **Note**: This parameter is required only when the source instance is a self-managed database.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def region(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            region: The ID of the region in which the source instance resides.
            **Note**: If the source instance is an Alibaba Cloud database instance, this parameter is required.
            '''
            result = self._values.get("region")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def role(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            role: The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account that owns the source instance.
            **Note**: This parameter is required when you migrate or synchronize data across different Alibaba Cloud accounts.
            '''
            result = self._values.get("role")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def user_name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            userName: The database account of the source database.
            **Note**: In most cases, this parameter is required. The permissions that are required for the database account vary with the migration or synchronization scenario.
            '''
            result = self._values.get("user_name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vSwitchId: The ID of the vSwitch used for the data shipping link.
            '''
            result = self._values.get("v_switch_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SourceEndpointProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.RosSynchronizationJob2Props",
    jsii_struct_bases=[],
    name_mapping={
        "data_initialization": "dataInitialization",
        "data_synchronization": "dataSynchronization",
        "db_list": "dbList",
        "destination_endpoint": "destinationEndpoint",
        "dts_job_name": "dtsJobName",
        "source_endpoint": "sourceEndpoint",
        "structure_initialization": "structureInitialization",
        "checkpoint": "checkpoint",
        "data_check_configure": "dataCheckConfigure",
        "dedicated_cluster_id": "dedicatedClusterId",
        "delay_notice": "delayNotice",
        "delay_phone": "delayPhone",
        "delay_rule_time": "delayRuleTime",
        "disaster_recovery_job": "disasterRecoveryJob",
        "dts_bis_label": "dtsBisLabel",
        "dts_instance_id": "dtsInstanceId",
        "dts_job_id": "dtsJobId",
        "error_notice": "errorNotice",
        "error_phone": "errorPhone",
        "file_oss_url": "fileOssUrl",
        "reserve": "reserve",
        "status": "status",
        "synchronization_direction": "synchronizationDirection",
    },
)
class RosSynchronizationJob2Props:
    def __init__(
        self,
        *,
        data_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        data_synchronization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        structure_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_check_configure: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.DataCheckConfigureProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disaster_recovery_job: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_oss_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        synchronization_direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosSynchronizationJob2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-synchronizationjob2

        :param data_initialization: 
        :param data_synchronization: 
        :param db_list: 
        :param destination_endpoint: 
        :param dts_job_name: 
        :param source_endpoint: 
        :param structure_initialization: 
        :param checkpoint: 
        :param data_check_configure: 
        :param dedicated_cluster_id: 
        :param delay_notice: 
        :param delay_phone: 
        :param delay_rule_time: 
        :param disaster_recovery_job: 
        :param dts_bis_label: 
        :param dts_instance_id: 
        :param dts_job_id: 
        :param error_notice: 
        :param error_phone: 
        :param file_oss_url: 
        :param reserve: 
        :param status: 
        :param synchronization_direction: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c403b417c08fc57d1b3fb6c39bf30e6d9fa7ec3ca2d07d0a1723108c122cb1d6)
            check_type(argname="argument data_initialization", value=data_initialization, expected_type=type_hints["data_initialization"])
            check_type(argname="argument data_synchronization", value=data_synchronization, expected_type=type_hints["data_synchronization"])
            check_type(argname="argument db_list", value=db_list, expected_type=type_hints["db_list"])
            check_type(argname="argument destination_endpoint", value=destination_endpoint, expected_type=type_hints["destination_endpoint"])
            check_type(argname="argument dts_job_name", value=dts_job_name, expected_type=type_hints["dts_job_name"])
            check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
            check_type(argname="argument structure_initialization", value=structure_initialization, expected_type=type_hints["structure_initialization"])
            check_type(argname="argument checkpoint", value=checkpoint, expected_type=type_hints["checkpoint"])
            check_type(argname="argument data_check_configure", value=data_check_configure, expected_type=type_hints["data_check_configure"])
            check_type(argname="argument dedicated_cluster_id", value=dedicated_cluster_id, expected_type=type_hints["dedicated_cluster_id"])
            check_type(argname="argument delay_notice", value=delay_notice, expected_type=type_hints["delay_notice"])
            check_type(argname="argument delay_phone", value=delay_phone, expected_type=type_hints["delay_phone"])
            check_type(argname="argument delay_rule_time", value=delay_rule_time, expected_type=type_hints["delay_rule_time"])
            check_type(argname="argument disaster_recovery_job", value=disaster_recovery_job, expected_type=type_hints["disaster_recovery_job"])
            check_type(argname="argument dts_bis_label", value=dts_bis_label, expected_type=type_hints["dts_bis_label"])
            check_type(argname="argument dts_instance_id", value=dts_instance_id, expected_type=type_hints["dts_instance_id"])
            check_type(argname="argument dts_job_id", value=dts_job_id, expected_type=type_hints["dts_job_id"])
            check_type(argname="argument error_notice", value=error_notice, expected_type=type_hints["error_notice"])
            check_type(argname="argument error_phone", value=error_phone, expected_type=type_hints["error_phone"])
            check_type(argname="argument file_oss_url", value=file_oss_url, expected_type=type_hints["file_oss_url"])
            check_type(argname="argument reserve", value=reserve, expected_type=type_hints["reserve"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument synchronization_direction", value=synchronization_direction, expected_type=type_hints["synchronization_direction"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data_initialization": data_initialization,
            "data_synchronization": data_synchronization,
            "db_list": db_list,
            "destination_endpoint": destination_endpoint,
            "dts_job_name": dts_job_name,
            "source_endpoint": source_endpoint,
            "structure_initialization": structure_initialization,
        }
        if checkpoint is not None:
            self._values["checkpoint"] = checkpoint
        if data_check_configure is not None:
            self._values["data_check_configure"] = data_check_configure
        if dedicated_cluster_id is not None:
            self._values["dedicated_cluster_id"] = dedicated_cluster_id
        if delay_notice is not None:
            self._values["delay_notice"] = delay_notice
        if delay_phone is not None:
            self._values["delay_phone"] = delay_phone
        if delay_rule_time is not None:
            self._values["delay_rule_time"] = delay_rule_time
        if disaster_recovery_job is not None:
            self._values["disaster_recovery_job"] = disaster_recovery_job
        if dts_bis_label is not None:
            self._values["dts_bis_label"] = dts_bis_label
        if dts_instance_id is not None:
            self._values["dts_instance_id"] = dts_instance_id
        if dts_job_id is not None:
            self._values["dts_job_id"] = dts_job_id
        if error_notice is not None:
            self._values["error_notice"] = error_notice
        if error_phone is not None:
            self._values["error_phone"] = error_phone
        if file_oss_url is not None:
            self._values["file_oss_url"] = file_oss_url
        if reserve is not None:
            self._values["reserve"] = reserve
        if status is not None:
            self._values["status"] = status
        if synchronization_direction is not None:
            self._values["synchronization_direction"] = synchronization_direction

    @builtins.property
    def data_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
        '''
        result = self._values.get("data_initialization")
        assert result is not None, "Required property 'data_initialization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_synchronization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
        '''
        result = self._values.get("data_synchronization")
        assert result is not None, "Required property 'data_synchronization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''
        :Property: dbList: The objects that you want to migrate or synchronize.
        '''
        result = self._values.get("db_list")
        assert result is not None, "Required property 'db_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.DestinationEndpointProperty]:
        '''
        :Property: destinationEndpoint: Destination instance configuration.
        '''
        result = self._values.get("destination_endpoint")
        assert result is not None, "Required property 'destination_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.DestinationEndpointProperty], result)

    @builtins.property
    def dts_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: dtsJobName: The name of the DTS instance.
        '''
        result = self._values.get("dts_job_name")
        assert result is not None, "Required property 'dts_job_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.SourceEndpointProperty]:
        '''
        :Property: sourceEndpoint: Source instance configuration.
        '''
        result = self._values.get("source_endpoint")
        assert result is not None, "Required property 'source_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.SourceEndpointProperty], result)

    @builtins.property
    def structure_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
        '''
        result = self._values.get("structure_initialization")
        assert result is not None, "Required property 'structure_initialization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def checkpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        '''
        result = self._values.get("checkpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_check_configure(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.DataCheckConfigureProperty]]:
        '''
        :Property: dataCheckConfigure: The data verification task for a data migration or synchronization instance.
        '''
        result = self._values.get("data_check_configure")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.DataCheckConfigureProperty]], result)

    @builtins.property
    def dedicated_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        '''
        result = self._values.get("dedicated_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        '''
        result = self._values.get("delay_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("delay_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_rule_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        '''
        result = self._values.get("delay_rule_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disaster_recovery_job(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
        '''
        result = self._values.get("disaster_recovery_job")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_bis_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        '''
        result = self._values.get("dts_bis_label")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsInstanceId: The ID of the DTS instance.
        '''
        result = self._values.get("dts_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: dtsJobId: The ID of the DTS task.
        '''
        result = self._values.get("dts_job_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        '''
        result = self._values.get("error_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("error_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_oss_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
        '''
        result = self._values.get("file_oss_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def reserve(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property: reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        '''
        result = self._values.get("reserve")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        status: The status of the resource. Valid values:

        - **Synchronizing**: Start the task.
        - **Suspending**: Suspend the task.
        - **Stopping**: Stop the task.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def synchronization_direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        synchronizationDirection: The synchronization direction. Default value: Forward. Valid values:

        - **Forward**: Data is synchronized from the source database to the destination database.
        - **Reverse**: Data is synchronized from the destination database to the source database.
        **Note**: The default value is **Forward**.
        The value Reverse takes effect only if the topology of the data synchronization task is two-way synchronization.
        '''
        result = self._values.get("synchronization_direction")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosSynchronizationJob2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SubscriptionJob2(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.SubscriptionJob2",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DTS::SubscriptionJob2``.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSubscriptionJob2``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SubscriptionJob2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50983ea80728a21f736082d9e4ce1e00649d60eaee1b0f8e297b69f6bece6a08)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDtsInstanceId")
    def attr_dts_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DtsInstanceId: The ID of the DTS instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobId")
    def attr_dts_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DtsJobId: The ID of the task.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobName")
    def attr_dts_job_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DtsJobName: The name of the DTS job.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.SubscriptionJob2Props",
    jsii_struct_bases=[],
    name_mapping={
        "db_list": "dbList",
        "dts_job_name": "dtsJobName",
        "source_endpoint": "sourceEndpoint",
        "subscription_instance": "subscriptionInstance",
        "checkpoint": "checkpoint",
        "dedicated_cluster_id": "dedicatedClusterId",
        "delay_notice": "delayNotice",
        "delay_phone": "delayPhone",
        "delay_rule_time": "delayRuleTime",
        "dts_bis_label": "dtsBisLabel",
        "dts_instance_id": "dtsInstanceId",
        "dts_job_id": "dtsJobId",
        "error_notice": "errorNotice",
        "error_phone": "errorPhone",
        "reserve": "reserve",
        "status": "status",
        "subscription_data_type": "subscriptionDataType",
    },
)
class SubscriptionJob2Props:
    def __init__(
        self,
        *,
        db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        subscription_instance: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SubscriptionInstanceProperty, typing.Dict[builtins.str, typing.Any]]],
        checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        subscription_data_type: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SubscriptionDataTypeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``SubscriptionJob2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2

        :param db_list: Property dbList: The objects for which you want to track data changes.
        :param dts_job_name: Property dtsJobName: The name of the DTS instance.
        :param source_endpoint: Property sourceEndpoint: Source instance configuration.
        :param subscription_instance: Property subscriptionInstance: Subscription instance configuration.
        :param checkpoint: Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        :param dedicated_cluster_id: Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        :param delay_notice: Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        :param delay_phone: Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        :param delay_rule_time: Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        :param dts_bis_label: Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        :param dts_instance_id: Property dtsInstanceId: The ID of the DTS instance.
        :param dts_job_id: Property dtsJobId: The ID of the DTS task.
        :param error_notice: Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        :param error_phone: Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        :param reserve: Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        :param status: Property status: The status of the resource. Valid values: - **Subscribing**: Start the task. - **Suspending**: Suspend the task. - **Stopping**: Stop the task.
        :param subscription_data_type: Property subscriptionDataType: Subscription data type.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__537ec026500057ebf8f7b46c0d073b6623b9e640bdfc962eee02fae15f3d8d4e)
            check_type(argname="argument db_list", value=db_list, expected_type=type_hints["db_list"])
            check_type(argname="argument dts_job_name", value=dts_job_name, expected_type=type_hints["dts_job_name"])
            check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
            check_type(argname="argument subscription_instance", value=subscription_instance, expected_type=type_hints["subscription_instance"])
            check_type(argname="argument checkpoint", value=checkpoint, expected_type=type_hints["checkpoint"])
            check_type(argname="argument dedicated_cluster_id", value=dedicated_cluster_id, expected_type=type_hints["dedicated_cluster_id"])
            check_type(argname="argument delay_notice", value=delay_notice, expected_type=type_hints["delay_notice"])
            check_type(argname="argument delay_phone", value=delay_phone, expected_type=type_hints["delay_phone"])
            check_type(argname="argument delay_rule_time", value=delay_rule_time, expected_type=type_hints["delay_rule_time"])
            check_type(argname="argument dts_bis_label", value=dts_bis_label, expected_type=type_hints["dts_bis_label"])
            check_type(argname="argument dts_instance_id", value=dts_instance_id, expected_type=type_hints["dts_instance_id"])
            check_type(argname="argument dts_job_id", value=dts_job_id, expected_type=type_hints["dts_job_id"])
            check_type(argname="argument error_notice", value=error_notice, expected_type=type_hints["error_notice"])
            check_type(argname="argument error_phone", value=error_phone, expected_type=type_hints["error_phone"])
            check_type(argname="argument reserve", value=reserve, expected_type=type_hints["reserve"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument subscription_data_type", value=subscription_data_type, expected_type=type_hints["subscription_data_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "db_list": db_list,
            "dts_job_name": dts_job_name,
            "source_endpoint": source_endpoint,
            "subscription_instance": subscription_instance,
        }
        if checkpoint is not None:
            self._values["checkpoint"] = checkpoint
        if dedicated_cluster_id is not None:
            self._values["dedicated_cluster_id"] = dedicated_cluster_id
        if delay_notice is not None:
            self._values["delay_notice"] = delay_notice
        if delay_phone is not None:
            self._values["delay_phone"] = delay_phone
        if delay_rule_time is not None:
            self._values["delay_rule_time"] = delay_rule_time
        if dts_bis_label is not None:
            self._values["dts_bis_label"] = dts_bis_label
        if dts_instance_id is not None:
            self._values["dts_instance_id"] = dts_instance_id
        if dts_job_id is not None:
            self._values["dts_job_id"] = dts_job_id
        if error_notice is not None:
            self._values["error_notice"] = error_notice
        if error_phone is not None:
            self._values["error_phone"] = error_phone
        if reserve is not None:
            self._values["reserve"] = reserve
        if status is not None:
            self._values["status"] = status
        if subscription_data_type is not None:
            self._values["subscription_data_type"] = subscription_data_type

    @builtins.property
    def db_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property dbList: The objects for which you want to track data changes.'''
        result = self._values.get("db_list")
        assert result is not None, "Required property 'db_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def dts_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dtsJobName: The name of the DTS instance.'''
        result = self._values.get("dts_job_name")
        assert result is not None, "Required property 'dts_job_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SourceEndpointProperty]:
        '''Property sourceEndpoint: Source instance configuration.'''
        result = self._values.get("source_endpoint")
        assert result is not None, "Required property 'source_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SourceEndpointProperty], result)

    @builtins.property
    def subscription_instance(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SubscriptionInstanceProperty]:
        '''Property subscriptionInstance: Subscription instance configuration.'''
        result = self._values.get("subscription_instance")
        assert result is not None, "Required property 'subscription_instance' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SubscriptionInstanceProperty], result)

    @builtins.property
    def checkpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property checkpoint: The start offset of incremental data migration or synchronization.

        This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        '''
        result = self._values.get("checkpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dedicated_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.'''
        result = self._values.get("dedicated_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property delayNotice: Specifies whether to monitor the task latency.

        Valid values: **true** and **false**
        '''
        result = self._values.get("delay_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property delayPhone: The mobile numbers that receive latency-related alerts.

        Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("delay_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_rule_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property delayRuleTime: The threshold for latency alerts.

        Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        '''
        result = self._values.get("delay_rule_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_bis_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dtsBisLabel: The environment tag of the DTS instance.

        Valid values: **normal** and **online**.
        '''
        result = self._values.get("dts_bis_label")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dtsInstanceId: The ID of the DTS instance.'''
        result = self._values.get("dts_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dtsJobId: The ID of the DTS task.'''
        result = self._values.get("dts_job_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property errorNotice: Specifies whether to monitor the task status.

        Valid values: **true** and **false**.
        '''
        result = self._values.get("error_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property errorPhone: The mobile numbers that receive status-related alerts.

        Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("error_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def reserve(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property reserve: The reserved parameter of DTS.

        You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        '''
        result = self._values.get("reserve")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the resource.

        Valid values:

        - **Subscribing**: Start the task.
        - **Suspending**: Suspend the task.
        - **Stopping**: Stop the task.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def subscription_data_type(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SubscriptionDataTypeProperty]]:
        '''Property subscriptionDataType: Subscription data type.'''
        result = self._values.get("subscription_data_type")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SubscriptionDataTypeProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SubscriptionJob2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class SynchronizationJob2(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-dts.SynchronizationJob2",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::DTS::SynchronizationJob2``DATASOURCE::DTS::MigrationInstances is used to query information about Data Transmission Service (DTS) tasks.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosSynchronizationJob2``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-synchronizationjob2
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["SynchronizationJob2Props", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab27e7931a4d4a323eb56379792dffdad46def75f9485a22d7f0d238c6fb3eb8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDtsInstanceId")
    def attr_dts_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DtsInstanceId: The ID of the DTS instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobId")
    def attr_dts_job_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DtsJobId: The ID of the task.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobId"))

    @builtins.property
    @jsii.member(jsii_name="attrDtsJobName")
    def attr_dts_job_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DtsJobName: The name of the DTS job.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDtsJobName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-dts.SynchronizationJob2Props",
    jsii_struct_bases=[],
    name_mapping={
        "data_initialization": "dataInitialization",
        "data_synchronization": "dataSynchronization",
        "db_list": "dbList",
        "destination_endpoint": "destinationEndpoint",
        "dts_job_name": "dtsJobName",
        "source_endpoint": "sourceEndpoint",
        "structure_initialization": "structureInitialization",
        "checkpoint": "checkpoint",
        "data_check_configure": "dataCheckConfigure",
        "dedicated_cluster_id": "dedicatedClusterId",
        "delay_notice": "delayNotice",
        "delay_phone": "delayPhone",
        "delay_rule_time": "delayRuleTime",
        "disaster_recovery_job": "disasterRecoveryJob",
        "dts_bis_label": "dtsBisLabel",
        "dts_instance_id": "dtsInstanceId",
        "dts_job_id": "dtsJobId",
        "error_notice": "errorNotice",
        "error_phone": "errorPhone",
        "file_oss_url": "fileOssUrl",
        "reserve": "reserve",
        "status": "status",
        "synchronization_direction": "synchronizationDirection",
    },
)
class SynchronizationJob2Props:
    def __init__(
        self,
        *,
        data_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        data_synchronization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
        destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
        structure_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        data_check_configure: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.DataCheckConfigureProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        disaster_recovery_job: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        file_oss_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        synchronization_direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``SynchronizationJob2``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-synchronizationjob2

        :param data_initialization: Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
        :param data_synchronization: Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
        :param db_list: Property dbList: The objects that you want to migrate or synchronize.
        :param destination_endpoint: Property destinationEndpoint: Destination instance configuration.
        :param dts_job_name: Property dtsJobName: The name of the DTS instance.
        :param source_endpoint: Property sourceEndpoint: Source instance configuration.
        :param structure_initialization: Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
        :param checkpoint: Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        :param data_check_configure: Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
        :param dedicated_cluster_id: Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
        :param delay_notice: Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
        :param delay_phone: Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,). **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        :param delay_rule_time: Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        :param disaster_recovery_job: Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
        :param dts_bis_label: Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
        :param dts_instance_id: Property dtsInstanceId: The ID of the DTS instance.
        :param dts_job_id: Property dtsJobId: The ID of the DTS task.
        :param error_notice: Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
        :param error_phone: Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,). **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        :param file_oss_url: Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
        :param reserve: Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        :param status: Property status: The status of the resource. Valid values: - **Synchronizing**: Start the task. - **Suspending**: Suspend the task. - **Stopping**: Stop the task.
        :param synchronization_direction: Property synchronizationDirection: The synchronization direction. Default value: Forward. Valid values: - **Forward**: Data is synchronized from the source database to the destination database. - **Reverse**: Data is synchronized from the destination database to the source database. **Note**: The default value is **Forward**. The value Reverse takes effect only if the topology of the data synchronization task is two-way synchronization.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e230207da26681f160d80fc58dddaa210f8a903878e14d66e3c7dc0440007df)
            check_type(argname="argument data_initialization", value=data_initialization, expected_type=type_hints["data_initialization"])
            check_type(argname="argument data_synchronization", value=data_synchronization, expected_type=type_hints["data_synchronization"])
            check_type(argname="argument db_list", value=db_list, expected_type=type_hints["db_list"])
            check_type(argname="argument destination_endpoint", value=destination_endpoint, expected_type=type_hints["destination_endpoint"])
            check_type(argname="argument dts_job_name", value=dts_job_name, expected_type=type_hints["dts_job_name"])
            check_type(argname="argument source_endpoint", value=source_endpoint, expected_type=type_hints["source_endpoint"])
            check_type(argname="argument structure_initialization", value=structure_initialization, expected_type=type_hints["structure_initialization"])
            check_type(argname="argument checkpoint", value=checkpoint, expected_type=type_hints["checkpoint"])
            check_type(argname="argument data_check_configure", value=data_check_configure, expected_type=type_hints["data_check_configure"])
            check_type(argname="argument dedicated_cluster_id", value=dedicated_cluster_id, expected_type=type_hints["dedicated_cluster_id"])
            check_type(argname="argument delay_notice", value=delay_notice, expected_type=type_hints["delay_notice"])
            check_type(argname="argument delay_phone", value=delay_phone, expected_type=type_hints["delay_phone"])
            check_type(argname="argument delay_rule_time", value=delay_rule_time, expected_type=type_hints["delay_rule_time"])
            check_type(argname="argument disaster_recovery_job", value=disaster_recovery_job, expected_type=type_hints["disaster_recovery_job"])
            check_type(argname="argument dts_bis_label", value=dts_bis_label, expected_type=type_hints["dts_bis_label"])
            check_type(argname="argument dts_instance_id", value=dts_instance_id, expected_type=type_hints["dts_instance_id"])
            check_type(argname="argument dts_job_id", value=dts_job_id, expected_type=type_hints["dts_job_id"])
            check_type(argname="argument error_notice", value=error_notice, expected_type=type_hints["error_notice"])
            check_type(argname="argument error_phone", value=error_phone, expected_type=type_hints["error_phone"])
            check_type(argname="argument file_oss_url", value=file_oss_url, expected_type=type_hints["file_oss_url"])
            check_type(argname="argument reserve", value=reserve, expected_type=type_hints["reserve"])
            check_type(argname="argument status", value=status, expected_type=type_hints["status"])
            check_type(argname="argument synchronization_direction", value=synchronization_direction, expected_type=type_hints["synchronization_direction"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "data_initialization": data_initialization,
            "data_synchronization": data_synchronization,
            "db_list": db_list,
            "destination_endpoint": destination_endpoint,
            "dts_job_name": dts_job_name,
            "source_endpoint": source_endpoint,
            "structure_initialization": structure_initialization,
        }
        if checkpoint is not None:
            self._values["checkpoint"] = checkpoint
        if data_check_configure is not None:
            self._values["data_check_configure"] = data_check_configure
        if dedicated_cluster_id is not None:
            self._values["dedicated_cluster_id"] = dedicated_cluster_id
        if delay_notice is not None:
            self._values["delay_notice"] = delay_notice
        if delay_phone is not None:
            self._values["delay_phone"] = delay_phone
        if delay_rule_time is not None:
            self._values["delay_rule_time"] = delay_rule_time
        if disaster_recovery_job is not None:
            self._values["disaster_recovery_job"] = disaster_recovery_job
        if dts_bis_label is not None:
            self._values["dts_bis_label"] = dts_bis_label
        if dts_instance_id is not None:
            self._values["dts_instance_id"] = dts_instance_id
        if dts_job_id is not None:
            self._values["dts_job_id"] = dts_job_id
        if error_notice is not None:
            self._values["error_notice"] = error_notice
        if error_phone is not None:
            self._values["error_phone"] = error_phone
        if file_oss_url is not None:
            self._values["file_oss_url"] = file_oss_url
        if reserve is not None:
            self._values["reserve"] = reserve
        if status is not None:
            self._values["status"] = status
        if synchronization_direction is not None:
            self._values["synchronization_direction"] = synchronization_direction

    @builtins.property
    def data_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataInitialization: Specifies whether to perform full data migration or full data synchronization.

        Default value: **true**. Valid values: **true** and **false**.
        '''
        result = self._values.get("data_initialization")
        assert result is not None, "Required property 'data_initialization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def data_synchronization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization.

        Default value: **false**. Valid values: **true** and **false**.
        '''
        result = self._values.get("data_synchronization")
        assert result is not None, "Required property 'data_synchronization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def db_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]:
        '''Property dbList: The objects that you want to migrate or synchronize.'''
        result = self._values.get("db_list")
        assert result is not None, "Required property 'db_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def destination_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.DestinationEndpointProperty]:
        '''Property destinationEndpoint: Destination instance configuration.'''
        result = self._values.get("destination_endpoint")
        assert result is not None, "Required property 'destination_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.DestinationEndpointProperty], result)

    @builtins.property
    def dts_job_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property dtsJobName: The name of the DTS instance.'''
        result = self._values.get("dts_job_name")
        assert result is not None, "Required property 'dts_job_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_endpoint(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.SourceEndpointProperty]:
        '''Property sourceEndpoint: Source instance configuration.'''
        result = self._values.get("source_endpoint")
        assert result is not None, "Required property 'source_endpoint' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.SourceEndpointProperty], result)

    @builtins.property
    def structure_initialization(
        self,
    ) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property structureInitialization: Specifies whether to perform schema migration or schema synchronization.

        Default value: true. Valid values: **true** and **false**.
        '''
        result = self._values.get("structure_initialization")
        assert result is not None, "Required property 'structure_initialization' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def checkpoint(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property checkpoint: The start offset of incremental data migration or synchronization.

        This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
        '''
        result = self._values.get("checkpoint")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def data_check_configure(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.DataCheckConfigureProperty]]:
        '''Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.'''
        result = self._values.get("data_check_configure")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.DataCheckConfigureProperty]], result)

    @builtins.property
    def dedicated_cluster_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.'''
        result = self._values.get("dedicated_cluster_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property delayNotice: Specifies whether to monitor the task latency.

        Valid values: **true** and **false**
        '''
        result = self._values.get("delay_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property delayPhone: The mobile numbers that receive latency-related alerts.

        Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("delay_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def delay_rule_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property delayRuleTime: The threshold for latency alerts.

        Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
        '''
        result = self._values.get("delay_rule_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def disaster_recovery_job(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance.

        Valid values: **true** and **false**
        '''
        result = self._values.get("disaster_recovery_job")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_bis_label(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dtsBisLabel: The environment tag of the DTS instance.

        Valid values: **normal** and **online**.
        '''
        result = self._values.get("dts_bis_label")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_instance_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dtsInstanceId: The ID of the DTS instance.'''
        result = self._values.get("dts_instance_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def dts_job_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property dtsJobId: The ID of the DTS task.'''
        result = self._values.get("dts_job_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_notice(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property errorNotice: Specifies whether to monitor the task status.

        Valid values: **true** and **false**.
        '''
        result = self._values.get("error_notice")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def error_phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property errorPhone: The mobile numbers that receive status-related alerts.

        Separate multiple mobile numbers with commas (,).
        **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
        '''
        result = self._values.get("error_phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def file_oss_url(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.'''
        result = self._values.get("file_oss_url")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def reserve(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property reserve: The reserved parameter of DTS.

        You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
        '''
        result = self._values.get("reserve")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property status: The status of the resource.

        Valid values:

        - **Synchronizing**: Start the task.
        - **Suspending**: Suspend the task.
        - **Stopping**: Stop the task.
        '''
        result = self._values.get("status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def synchronization_direction(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property synchronizationDirection: The synchronization direction.

        Default value: Forward. Valid values:

        - **Forward**: Data is synchronized from the source database to the destination database.
        - **Reverse**: Data is synchronized from the destination database to the source database.
          **Note**: The default value is **Forward**.
          The value Reverse takes effect only if the topology of the data synchronization task is two-way synchronization.
        '''
        result = self._values.get("synchronization_direction")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SynchronizationJob2Props(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "ConsumerGroup",
    "ConsumerGroupProps",
    "Instance",
    "InstanceProps",
    "MigrationJob2",
    "MigrationJob2Props",
    "RosConsumerGroup",
    "RosConsumerGroupProps",
    "RosInstance",
    "RosInstanceProps",
    "RosMigrationJob2",
    "RosMigrationJob2Props",
    "RosSubscriptionJob2",
    "RosSubscriptionJob2Props",
    "RosSynchronizationJob2",
    "RosSynchronizationJob2Props",
    "SubscriptionJob2",
    "SubscriptionJob2Props",
    "SynchronizationJob2",
    "SynchronizationJob2Props",
    "datasource",
]

publication.publish()

# Loading modules to ensure their types are registered with the jsii runtime library
from . import datasource

def _typecheckingstub__0f463f651965585cbf8d348d1b3e433fc1d513184fb35b21149686cbd534b179(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__922d6c12e6c66043ca355053c590e476d7b3996c7fc99f5e47eb79016b51fc19(
    *,
    consumer_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    consumer_group_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    consumer_group_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    subscription_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__663c3dcd12b1ea12ba69ef51640fa0c19da41ee1104235c4377abe9012aca40f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7e78914597b48ffdbd32781c6257c81839851267e392791be0ac2815b2bb0aa(
    *,
    instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_start: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_unit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    database_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_endpoint_engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    du: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fee_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_endpoint_engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sync_architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d525da3d20369a4d73270a047491cb1de0abec1e4a904b89cdf1eb0894d2aee(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MigrationJob2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26320ad729d3d0abf3264598401c679a2a68f790114c79ca94d388de49bb7261(
    *,
    data_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    data_synchronization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob2.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    structure_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_check_configure: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob2.DataCheckConfigureProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disaster_recovery_job: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_oss_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6649a4d196a85f7f9f55f5441b2cc8b417f0e2d05044dc03949e8ea13be8af62(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosConsumerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd6b304b9eedc282f36085b98cea1a4bb93d075f6d45ce4cef36594ccd2b5592(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a893db5aaa0f7d0e24ecd5945f8a56b765840bc783b7a11b7032d532567d7c7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a645087e2f6c7248fe4f1e034170ff998122cec38d3390977e99c3dd0eed1f97(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8605ab8e16a3ed258c13d2a5d1df14304cb46b402fa2239f376775e2591be49c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__043124c9553aa7e00212ebbdc7138247cf2d638fbcba794855ec1a7c73f8569e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db9a3c0bf5403ab71aba277e309802346987631c2deebf7cb857befd0f02336e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3042d13d44d117264f0a9e6aef2c904becef6569ab321865366786474d6bdbff(
    *,
    consumer_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    consumer_group_password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    consumer_group_user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    subscription_instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b7421124ad9455804eaa2cb0f738a20e1b524502f13c2a23c231ba6008f03cc(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c282dd66dc64e189e00a378629859808c229744f3127081c7d98ac52d4effbb6(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e89753b772086482273c7f412aaec964585e419fb7f59ed8640d62d40221da5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1645fc03f75882326e5014500fa88d6f9308b5566c7c3ff90ff37bf8e0829450(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2b17ae066645ef84ef25ce0fe83e672e3171f991a61681f87e0ddacc9d0a5825(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__477ebff7558663a2ec7449901e60da78c3d8be467c9a906e78087ad909f7cd8c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83a683a1ae89175c484840fb77d20c13a7cdd636aa658cf0037b2acc27c6208c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a3ef32c27f2cfbd93a0bc03ba740541e900208254d678781db38c3d9a212e5e(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8dc8b175210f6816ef33c275dd6d3ca04ed6b8457ce2b0b1f2db4bce36da184(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__846c76bea2b10288ee547f41abdfa95e9ff92876b66de1567bd1bf14364006f0(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0187748c57795fee828acb47df2942d4740e73d61ccfb8a363e1ae555fab6f9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f84218933a2062d88b5997e9ebcc00b84ef9ba0737d8353d3f1edc64128c095(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e6bc0598f10552ec4a1fdc579e86e5b2c4948cda1cca799e47d7d23985a23ba3(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82bf073cc8406ac25ee1087e25a7e3e9d720c65f0b021169ec579e4629dc5e09(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9ddcbabe4bbf009596120f2608830518df37c60334c79c8c96bad7e2200ed02(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__95a0fde653417124736b171f2e6d2ae41e89c693bbecd1b48d410937c80bca38(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b8c88ec446cb5bfd1fb0f89e7dc46e0de2416835f5d7ab25d069dca9d0a725bf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__05a1c5bd1203b9ee62a614d161c17d7b7e53f52fe5da0d4795b31e6c41567ee9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8386e0d4e56ed1897f398bf090d8b75392866524967fbaa5e503e4f951d1ba62(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd0b01033d1909f339c58831049f5c0b2792fc5428cdb0e770331557982c0f68(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__03d0ea2727e43414f46c796f6ac6879d3d9d63b373b20efd36e20918cfb8d771(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b7327ed68835faca4986dac097090858fe9d090aa90965fe3133afe9f6db017(
    *,
    instance_class: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    pay_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_start: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    compute_unit: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    database_count: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_endpoint_engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    destination_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    du: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    fee_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_endpoint_engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sync_architecture: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    used_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a2279fafcf580c5ac2fc8c082113e9f258b39e16b664a2cb1a45f389fd3e678(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMigrationJob2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4332eeddbd8811a1900d87be64e60f9346439b17e8114f5a5f37716ff28e195f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a5bff831a5706a4a6f360caf7068ee26e05ad76f9cbb9a43df59855e272c80d(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83a4b81da203b58fdbc4e8810f6f3b88a445a8afb93a59a14d7a66d03bf6b3f6(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6422771e984a25d106a7a37a41c1d8c9f27ad4b4e286e8f307a10baee5eabe1b(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b859b560efcc70617592ec5236528d722b5964b1c0349d044577344163a0644(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob2.DestinationEndpointProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e7743b845892be7b3934bac19a30aaba689d4143421adc2ab83c7d57e102efd9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__07e5b43497ac3e734b6a19c8895078830b5880606f71295e149ac0005ae5782c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3933a94a412627b73192f81190d4af34cabd08062190fcd3742b609ba7d76480(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob2.SourceEndpointProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b87974648b89f3a8ba9f9a098a1ebc16fb6f350c16f7c9d3d7a5b85d1952164e(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59bdad63433e68da0a7ec9bf88d77a21b7b0a9e46475e1ec7e9f22e1db179e18(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1eaec209d905dafff7471e5bb18ecc22bd9cfc70cef2ba1f83ff01426de1694(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMigrationJob2.DataCheckConfigureProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a23467ae4ff3f9c537a6fafbb02f40742dd2513419d276ad5805acba27a1e495(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67dd5f05809b933fc1ecfc5b84b84ad64957cc297757643a3ba591bfd04cdb8c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__148f837efb51993a0a19b026555392a4cba979ca7cd7a05b1a89e14d4f760955(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ea072809282ae6bcc547079f8b3b08f19ee3037247742b529374c1652763d02(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__948c2654d39f063274cf826a7ce3ef2c13433f8e4efbd059849695fe6cd7591b(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e112ac7f6cc1aa653ce74d0ca4ee1e96b1f78eeb3930c8fbcd13180125c7522d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15439b5f608684f7dbdcf0fe0cf57352f66c05f24de163dcf36eecc65307c3d4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01cae6731fa27c66aa4e082994945aa5ab112fa2f797e02f3e534fd960e07c4e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9469d12612f65594ec458a433386597b8a94ad58bb985d26b1c0bbb02b1fdad(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b59d11d7077c34fab99b76ff0b5b32d20f1fc9f695ef9e3f5463903ff35e4726(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7d9d6df41f99f0373b2e1b1171ab73ea99f6ed225dff70e19d4ae0950a425f5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__23e4d463ac81419526b2f624160c6e63559c940a54eb2db0d79e13b0cb04cbdb(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d3c02571ca9a2cf766e71e7a1334612af4f83210e229dcae72933610e42f5f3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ebdc2da02266fc073431c5172bec5b795ce18728a037f09801c4d63d440fec08(
    *,
    check_maximum_hour: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    check_maximum_hour_enable: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_check_db_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_check_notice_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_fix_data: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_max_read_bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_max_read_rps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_model: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_refer_endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_valid_fail_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_data_check: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_delay_notice_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_delay_notice_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_delay_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_valid_fail_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_valid_fail_notice_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_valid_fail_notice_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_valid_fail_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_data_check: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__203df27f18ba99a3e151c65357026e9cc257d84011dd9ffd506f5f0430b1c7ae(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11610beddb291b76ddd09a0606289d47e66483b7f532236e83d35fa97675352c(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2da2e3c35d609100c17e6c5a21352c0ac33db9723fbe3f74d923f7f504dc9a5a(
    *,
    data_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    data_synchronization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob2.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    structure_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_check_configure: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMigrationJob2.DataCheckConfigureProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disaster_recovery_job: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_oss_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7253d4c64bb075997e34426eadb4c89e49602fba003c38d941554b60ed99ccf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSubscriptionJob2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cacaf97793ef1e260fa62c86688bdd202d7b5432ceac1b5d52ff5bae28794fa(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f078b62a1d8e360afb3187e96a006500157de85a137a005751f2088907746950(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80c74c431c2513d65e929ee7351b4f11c773fdbb0366cb27ff50273502401f1a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99211257b7b10bf2ef846ea5dbb0ad0f8286b4e3e868269411867afdde5ae8d7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a407339ae56be84d4cef09563f4125f57c24f115fb97ab8e2cbb0e0c8a1094ee(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SourceEndpointProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__359fad1588c4b432a51fafdbb4bd9112664dd22d8df14c28bab7d736706ffdf7(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SubscriptionInstanceProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a0b323986dc47c7a7e2d9ecb908680386b0d1891915b49973ecd6c8714292cc5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54cc1063fd923afff84d3f57f9077003cf268e3b14056397fe41342531758475(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__62dd2e18c24489fab16d6959bb6fa618e076a5ca39386e7b01728dd4b9e8b63f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77dab7084700d54ca377c3d0d3dc4e777c5b775fda44ed25b6cea31261e41cbf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__641768cfd80e5197bf2a00ec9ba8fb5689b4d55214b4deeab4440b03aaa7212a(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54f5437a22eb9f45500d158bfbb35f15d23eb7c05c5d6dc2a7b312cfb10d6816(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3823b2b1733f2d89b5e3cc525bb47b923c8f34a1ec72bbe43857d9156cafc62(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a708fca82b9c6b68d59704b01d811c417f7b6d4dc03f7948cae55822ae85ec5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9528d1e0143e78a2dea4eec5a22705956b66e4b584e217b7e32714f77428c455(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfd540aa0ca2751b30b981660f4e7d83f3ddc855afa142d4df235970a29f4f9c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__496065eb7ca978516f3e19c3b746747dd9723da181e3dbb5ee0ee723f8d9a962(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d176980c12133196c8a31277562e8ac7b4a3e94e703fde1bb5681f2a789d921a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ff8152a98727fd44c95c902fb10eac5260f284bbd9fa22273d4732b10bbc405(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSubscriptionJob2.SubscriptionDataTypeProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25c5b8d6a32738385776e1de3981f192b9cb0cdc228cda76cb6c850bc3ed5b37(
    *,
    database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1f810cc62d69c86a14c308c2d4d665f8e6e4736fe5def6c2bc73292f3a70d8c(
    *,
    ddl: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dml: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f2369f98a098f9154f0f2f147c332158d93cb65bf6ff6dffecb3e18a2bae28a6(
    *,
    network_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d805f05664422474de93ddaa677ec5e1ee4b2b8029d38c4fa00529c220fa862(
    *,
    db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    subscription_instance: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SubscriptionInstanceProperty, typing.Dict[builtins.str, typing.Any]]],
    checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    subscription_data_type: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SubscriptionDataTypeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25adef785d7212d8a929dd1ad8eadf101e7ccfe84de88acc49965d93acd72c89(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosSynchronizationJob2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22c5473593d1b3a3a39ed1c9d972fbd29231882e5d525583d76efc256eb9ac5c(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__927f1328f5eb2d897578c129650808a1e8aeb896feae047571d38d5344999300(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4b4ba67cfe113d4f7625fd35132f3a957210afe1473ecca5e8330ea3a3fe26e2(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__516da5ab2965d257ed91c96b46f920cb0b49cca119ead9ed9a08261e1249cb0e(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9a4b1aaf3f9a9cd58335334c512738eb68e9ab83cf2691cff0f03aadcf65cae(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.DestinationEndpointProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af544a86c72834987765c39be11df7411fdc8504025c2f674a5a1efbabffebfe(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa2de55455749314651d59705c2d3756dc613afe58ad38543d6b3a0dae4c97a6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__18da6472f48a933e3ffe15a320434e5046132db2b3687ed83b2b022c0ca8a0b8(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.SourceEndpointProperty],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__173e43f232ec132d4c4694ca9b64f9230c019b3c96cd623b4e4d80e2201ad316(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d594a92df2fbe2e079714f7cb7fce2b94ce542ee431e8e264f6b3c2ab39b8fc8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0e88842dc78e06f8fd75eac7658950e2d3d2eb4c1cb9da1a6cabc26dfe5e578(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosSynchronizationJob2.DataCheckConfigureProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b54e57655dd9c2d3a41fc880890a5045763edc952fb1c9f95b3ca5f6e024b56e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b53b71d635622bca57b60f5964dba6e8b210e073207388c33d4b7c6473a9ea6(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94d463fc3d6ed80ca890c2ba7d4f209a384825d5026869402de668ad313e7ad5(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16dc20a6e1f5a2ed4f4e6814f37cdf9fddc97f0acdd6aaa09f02beaf56d6c9c9(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d011fad923d3df67e8e2e5cf773f5718fd81e3caa4046d895c5cbf191136be0(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d23674d6e40897a87bff98b82d5a01c54aa25208ce7c30685f41576546081e7d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e09a52488194d0b6e535a717a3f6588a45bda7d855fd3fce0c3c853110f66df(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0441c306e493ebe362317a326d9d0effde1dd9744dca28940f79528a7e1ef5c0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc6184a072625bd341364db794cc4ac404facef8be1127befd9bbdbd88fdfd90(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa210e962d2be6696c4fed95d6d84f1f5308cb69bde3afc1971e2d0dcfd8933a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__59c57e88d4d812204e79e2d0cad299f4b6d203120a2d2b2ca680d5652fceebfc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f70d0a3e10a9e35b4a8dd2e9b3178b8c4b7ef74d3456542eaaa8d17a2d13daca(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bdba0015a95f381df78628df900baadc1ffc20526867b0244fccef7262f11a71(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c07b2199d57bcbb92877d8ea41f42798ab03481cc62d6f5de69d0bc5ebbfcd0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43f17bc200e4eda04123f76a3449dacd2b01d334e39e59ef1572297f78909a12(
    *,
    check_maximum_hour: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    check_maximum_hour_enable: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_check_db_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_check_notice_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_fix_data: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_max_read_bps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_max_read_rps: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_model: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_ratio: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_refer_endpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_check_valid_fail_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    full_data_check: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_delay_notice_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_delay_notice_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_delay_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_valid_fail_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_valid_fail_notice_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_valid_fail_notice_times: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_check_valid_fail_notice_value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    incremental_data_check: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__79aeebbf7c4fe32ea4c4e321bae48fc13b92f7efef364b429994436e540d3c71(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ffccdb043b4360113b6e4505c18d79be47952130c5f425620a4bc8a48da78db(
    *,
    instance_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    database_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    engine_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oracle_sid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    owner_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    role: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    user_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c403b417c08fc57d1b3fb6c39bf30e6d9fa7ec3ca2d07d0a1723108c122cb1d6(
    *,
    data_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    data_synchronization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    structure_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_check_configure: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.DataCheckConfigureProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disaster_recovery_job: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_oss_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    synchronization_direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50983ea80728a21f736082d9e4ce1e00649d60eaee1b0f8e297b69f6bece6a08(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SubscriptionJob2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__537ec026500057ebf8f7b46c0d073b6623b9e640bdfc962eee02fae15f3d8d4e(
    *,
    db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    subscription_instance: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SubscriptionInstanceProperty, typing.Dict[builtins.str, typing.Any]]],
    checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    subscription_data_type: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSubscriptionJob2.SubscriptionDataTypeProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab27e7931a4d4a323eb56379792dffdad46def75f9485a22d7f0d238c6fb3eb8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[SynchronizationJob2Props, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e230207da26681f160d80fc58dddaa210f8a903878e14d66e3c7dc0440007df(
    *,
    data_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    data_synchronization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    db_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]],
    destination_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.DestinationEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    dts_job_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_endpoint: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.SourceEndpointProperty, typing.Dict[builtins.str, typing.Any]]],
    structure_initialization: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    checkpoint: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    data_check_configure: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosSynchronizationJob2.DataCheckConfigureProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    dedicated_cluster_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    delay_rule_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    disaster_recovery_job: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_bis_label: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_instance_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    dts_job_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_notice: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    error_phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    file_oss_url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    reserve: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    synchronization_direction: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
