"""
## Aliyun ROS MONGODB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_mongodb as MONGODB
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
    jsii_type="@alicloud/ros-cdk-mongodb.Instance",
):
    """A ROS resource type:  ``ALIYUN::MONGODB::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::MONGODB::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Instance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionUri")
    def attr_connection_uri(self) -> typing.Any:
        """
        :Attribute: ConnectionURI: Connection uri.
        """
        return jsii.get(self, "attrConnectionUri")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(self) -> typing.Any:
        """
        :Attribute: DBInstanceStatus: Status of mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order Id of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrReplicaSetName")
    def attr_replica_set_name(self) -> typing.Any:
        """
        :Attribute: ReplicaSetName: Name of replica set
        """
        return jsii.get(self, "attrReplicaSetName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_storage": "dbInstanceStorage",
        "account_password": "accountPassword",
        "auto_renew": "autoRenew",
        "backup_id": "backupId",
        "business_info": "businessInfo",
        "charge_type": "chargeType",
        "coupon_no": "couponNo",
        "database_names": "databaseNames",
        "db_instance_description": "dbInstanceDescription",
        "engine_version": "engineVersion",
        "network_type": "networkType",
        "period": "period",
        "readonly_replicas": "readonlyReplicas",
        "replication_factor": "replicationFactor",
        "resource_group_id": "resourceGroupId",
        "restore_time": "restoreTime",
        "security_ip_array": "securityIpArray",
        "src_db_instance_id": "srcDbInstanceId",
        "storage_engine": "storageEngine",
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
        db_instance_class: builtins.str,
        db_instance_storage: jsii.Number,
        account_password: typing.Optional[builtins.str] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        backup_id: typing.Optional[builtins.str] = None,
        business_info: typing.Optional[builtins.str] = None,
        charge_type: typing.Optional[builtins.str] = None,
        coupon_no: typing.Optional[builtins.str] = None,
        database_names: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        engine_version: typing.Optional[builtins.str] = None,
        network_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        readonly_replicas: typing.Optional[jsii.Number] = None,
        replication_factor: typing.Optional[jsii.Number] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        restore_time: typing.Optional[builtins.str] = None,
        security_ip_array: typing.Optional[builtins.str] = None,
        src_db_instance_id: typing.Optional[builtins.str] = None,
        storage_engine: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MONGODB::Instance``.

        :param db_instance_class: 
        :param db_instance_storage: 
        :param account_password: 
        :param auto_renew: 
        :param backup_id: 
        :param business_info: 
        :param charge_type: 
        :param coupon_no: 
        :param database_names: 
        :param db_instance_description: 
        :param engine_version: 
        :param network_type: 
        :param period: 
        :param readonly_replicas: 
        :param replication_factor: 
        :param resource_group_id: 
        :param restore_time: 
        :param security_ip_array: 
        :param src_db_instance_id: 
        :param storage_engine: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_storage": db_instance_storage,
        }
        if account_password is not None:
            self._values["account_password"] = account_password
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if backup_id is not None:
            self._values["backup_id"] = backup_id
        if business_info is not None:
            self._values["business_info"] = business_info
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if coupon_no is not None:
            self._values["coupon_no"] = coupon_no
        if database_names is not None:
            self._values["database_names"] = database_names
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if network_type is not None:
            self._values["network_type"] = network_type
        if period is not None:
            self._values["period"] = period
        if readonly_replicas is not None:
            self._values["readonly_replicas"] = readonly_replicas
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if security_ip_array is not None:
            self._values["security_ip_array"] = security_ip_array
        if src_db_instance_id is not None:
            self._values["src_db_instance_id"] = src_db_instance_id
        if storage_engine is not None:
            self._values["storage_engine"] = storage_engine
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vpc_password_free is not None:
            self._values["vpc_password_free"] = vpc_password_free
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
        """
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return result

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def account_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        """
        result = self._values.get("account_password")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def backup_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: backupId: Specific backup set Id.
        """
        result = self._values.get("backup_id")
        return result

    @builtins.property
    def business_info(self) -> typing.Optional[builtins.str]:
        """
        :Property: businessInfo: The business information. It is an additional parameter.
        """
        result = self._values.get("business_info")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def coupon_no(self) -> typing.Optional[builtins.str]:
        """
        :Property: couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
        """
        result = self._values.get("coupon_no")
        return result

    @builtins.property
    def database_names(self) -> typing.Optional[builtins.str]:
        """
        :Property: databaseNames: The name of the database.
        """
        result = self._values.get("database_names")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Database instance version.Support 3.4, 4.0, 4.2
        """
        result = self._values.get("engine_version")
        return result

    @builtins.property
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        """
        result = self._values.get("network_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def readonly_replicas(self) -> typing.Optional[jsii.Number]:
        """
        :Property: readonlyReplicas: Number of read-only nodes, in the range of 1-5.
        """
        result = self._values.get("readonly_replicas")
        return result

    @builtins.property
    def replication_factor(self) -> typing.Optional[jsii.Number]:
        """
        :Property: replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
        """
        result = self._values.get("replication_factor")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def restore_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        """
        result = self._values.get("restore_time")
        return result

    @builtins.property
    def security_ip_array(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpArray: Security ips to add or remove.
        """
        result = self._values.get("security_ip_array")
        return result

    @builtins.property
    def src_db_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: srcDbInstanceId: Create an instance of the backup set based on an instance.
        """
        result = self._values.get("src_db_instance_id")
        return result

    @builtins.property
    def storage_engine(self) -> typing.Optional[builtins.str]:
        """
        :Property: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        """
        result = self._values.get("storage_engine")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create mongodb instance.
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
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
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
    jsii_type="@alicloud/ros-cdk-mongodb.RosInstance",
):
    """A ROS template type:  ``ALIYUN::MONGODB::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::MONGODB::Instance``.

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
    @jsii.member(jsii_name="attrConnectionUri")
    def attr_connection_uri(self) -> typing.Any:
        """
        :Attribute: ConnectionURI: Connection uri.
        """
        return jsii.get(self, "attrConnectionUri")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(self) -> typing.Any:
        """
        :Attribute: DBInstanceStatus: Status of mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order Id of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrReplicaSetName")
    def attr_replica_set_name(self) -> typing.Any:
        """
        :Attribute: ReplicaSetName: Name of replica set
        """
        return jsii.get(self, "attrReplicaSetName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceClass")
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
        """
        return jsii.get(self, "dbInstanceClass")

    @db_instance_class.setter # type: ignore
    def db_instance_class(self, value: builtins.str) -> None:
        jsii.set(self, "dbInstanceClass", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
        """
        return jsii.get(self, "dbInstanceStorage")

    @db_instance_storage.setter # type: ignore
    def db_instance_storage(self, value: jsii.Number) -> None:
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPassword")
    def account_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        """
        return jsii.get(self, "accountPassword")

    @account_password.setter # type: ignore
    def account_password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        return jsii.get(self, "autoRenew")

    @auto_renew.setter # type: ignore
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="backupId")
    def backup_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: backupId: Specific backup set Id.
        """
        return jsii.get(self, "backupId")

    @backup_id.setter # type: ignore
    def backup_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "backupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="businessInfo")
    def business_info(self) -> typing.Optional[builtins.str]:
        """
        :Property: businessInfo: The business information. It is an additional parameter.
        """
        return jsii.get(self, "businessInfo")

    @business_info.setter # type: ignore
    def business_info(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "businessInfo", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        """
        return jsii.get(self, "chargeType")

    @charge_type.setter # type: ignore
    def charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="couponNo")
    def coupon_no(self) -> typing.Optional[builtins.str]:
        """
        :Property: couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
        """
        return jsii.get(self, "couponNo")

    @coupon_no.setter # type: ignore
    def coupon_no(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "couponNo", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="databaseNames")
    def database_names(self) -> typing.Optional[builtins.str]:
        """
        :Property: databaseNames: The name of the database.
        """
        return jsii.get(self, "databaseNames")

    @database_names.setter # type: ignore
    def database_names(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "databaseNames", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        return jsii.get(self, "dbInstanceDescription")

    @db_instance_description.setter # type: ignore
    def db_instance_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Database instance version.Support 3.4, 4.0, 4.2
        """
        return jsii.get(self, "engineVersion")

    @engine_version.setter # type: ignore
    def engine_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="networkType")
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        """
        return jsii.get(self, "networkType")

    @network_type.setter # type: ignore
    def network_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "networkType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="readonlyReplicas")
    def readonly_replicas(self) -> typing.Optional[jsii.Number]:
        """
        :Property: readonlyReplicas: Number of read-only nodes, in the range of 1-5.
        """
        return jsii.get(self, "readonlyReplicas")

    @readonly_replicas.setter # type: ignore
    def readonly_replicas(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "readonlyReplicas", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="replicationFactor")
    def replication_factor(self) -> typing.Optional[jsii.Number]:
        """
        :Property: replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
        """
        return jsii.get(self, "replicationFactor")

    @replication_factor.setter # type: ignore
    def replication_factor(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "replicationFactor", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restoreTime")
    def restore_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        """
        return jsii.get(self, "restoreTime")

    @restore_time.setter # type: ignore
    def restore_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "restoreTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIpArray")
    def security_ip_array(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpArray: Security ips to add or remove.
        """
        return jsii.get(self, "securityIpArray")

    @security_ip_array.setter # type: ignore
    def security_ip_array(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityIpArray", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="srcDbInstanceId")
    def src_db_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: srcDbInstanceId: Create an instance of the backup set based on an instance.
        """
        return jsii.get(self, "srcDbInstanceId")

    @src_db_instance_id.setter # type: ignore
    def src_db_instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "srcDbInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="storageEngine")
    def storage_engine(self) -> typing.Optional[builtins.str]:
        """
        :Property: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        """
        return jsii.get(self, "storageEngine")

    @storage_engine.setter # type: ignore
    def storage_engine(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "storageEngine", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create mongodb instance.
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
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_class": "dbInstanceClass",
        "db_instance_storage": "dbInstanceStorage",
        "account_password": "accountPassword",
        "auto_renew": "autoRenew",
        "backup_id": "backupId",
        "business_info": "businessInfo",
        "charge_type": "chargeType",
        "coupon_no": "couponNo",
        "database_names": "databaseNames",
        "db_instance_description": "dbInstanceDescription",
        "engine_version": "engineVersion",
        "network_type": "networkType",
        "period": "period",
        "readonly_replicas": "readonlyReplicas",
        "replication_factor": "replicationFactor",
        "resource_group_id": "resourceGroupId",
        "restore_time": "restoreTime",
        "security_ip_array": "securityIpArray",
        "src_db_instance_id": "srcDbInstanceId",
        "storage_engine": "storageEngine",
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
        db_instance_class: builtins.str,
        db_instance_storage: jsii.Number,
        account_password: typing.Optional[builtins.str] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        backup_id: typing.Optional[builtins.str] = None,
        business_info: typing.Optional[builtins.str] = None,
        charge_type: typing.Optional[builtins.str] = None,
        coupon_no: typing.Optional[builtins.str] = None,
        database_names: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        engine_version: typing.Optional[builtins.str] = None,
        network_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        readonly_replicas: typing.Optional[jsii.Number] = None,
        replication_factor: typing.Optional[jsii.Number] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        restore_time: typing.Optional[builtins.str] = None,
        security_ip_array: typing.Optional[builtins.str] = None,
        src_db_instance_id: typing.Optional[builtins.str] = None,
        storage_engine: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        vpc_password_free: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MONGODB::Instance``.

        :param db_instance_class: 
        :param db_instance_storage: 
        :param account_password: 
        :param auto_renew: 
        :param backup_id: 
        :param business_info: 
        :param charge_type: 
        :param coupon_no: 
        :param database_names: 
        :param db_instance_description: 
        :param engine_version: 
        :param network_type: 
        :param period: 
        :param readonly_replicas: 
        :param replication_factor: 
        :param resource_group_id: 
        :param restore_time: 
        :param security_ip_array: 
        :param src_db_instance_id: 
        :param storage_engine: 
        :param vpc_id: 
        :param vpc_password_free: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_class": db_instance_class,
            "db_instance_storage": db_instance_storage,
        }
        if account_password is not None:
            self._values["account_password"] = account_password
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if backup_id is not None:
            self._values["backup_id"] = backup_id
        if business_info is not None:
            self._values["business_info"] = business_info
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if coupon_no is not None:
            self._values["coupon_no"] = coupon_no
        if database_names is not None:
            self._values["database_names"] = database_names
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if network_type is not None:
            self._values["network_type"] = network_type
        if period is not None:
            self._values["period"] = period
        if readonly_replicas is not None:
            self._values["readonly_replicas"] = readonly_replicas
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if security_ip_array is not None:
            self._values["security_ip_array"] = security_ip_array
        if src_db_instance_id is not None:
            self._values["src_db_instance_id"] = src_db_instance_id
        if storage_engine is not None:
            self._values["storage_engine"] = storage_engine
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if vpc_password_free is not None:
            self._values["vpc_password_free"] = vpc_password_free
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_class(self) -> builtins.str:
        """
        :Property: dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
        """
        result = self._values.get("db_instance_class")
        assert result is not None, "Required property 'db_instance_class' is missing"
        return result

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def account_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        """
        result = self._values.get("account_password")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def backup_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: backupId: Specific backup set Id.
        """
        result = self._values.get("backup_id")
        return result

    @builtins.property
    def business_info(self) -> typing.Optional[builtins.str]:
        """
        :Property: businessInfo: The business information. It is an additional parameter.
        """
        result = self._values.get("business_info")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def coupon_no(self) -> typing.Optional[builtins.str]:
        """
        :Property: couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
        """
        result = self._values.get("coupon_no")
        return result

    @builtins.property
    def database_names(self) -> typing.Optional[builtins.str]:
        """
        :Property: databaseNames: The name of the database.
        """
        result = self._values.get("database_names")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Database instance version.Support 3.4, 4.0, 4.2
        """
        result = self._values.get("engine_version")
        return result

    @builtins.property
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        """
        result = self._values.get("network_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def readonly_replicas(self) -> typing.Optional[jsii.Number]:
        """
        :Property: readonlyReplicas: Number of read-only nodes, in the range of 1-5.
        """
        result = self._values.get("readonly_replicas")
        return result

    @builtins.property
    def replication_factor(self) -> typing.Optional[jsii.Number]:
        """
        :Property: replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
        """
        result = self._values.get("replication_factor")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def restore_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        """
        result = self._values.get("restore_time")
        return result

    @builtins.property
    def security_ip_array(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpArray: Security ips to add or remove.
        """
        result = self._values.get("security_ip_array")
        return result

    @builtins.property
    def src_db_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: srcDbInstanceId: Create an instance of the backup set based on an instance.
        """
        result = self._values.get("src_db_instance_id")
        return result

    @builtins.property
    def storage_engine(self) -> typing.Optional[builtins.str]:
        """
        :Property: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        """
        result = self._values.get("storage_engine")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create mongodb instance.
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
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
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


class RosServerlessInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.RosServerlessInstance",
):
    """A ROS template type:  ``ALIYUN::MONGODB::ServerlessInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosServerlessInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::MONGODB::ServerlessInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosServerlessInstance, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrConnectionUri")
    def attr_connection_uri(self) -> typing.Any:
        """
        :Attribute: ConnectionURI: Connection uri.
        """
        return jsii.get(self, "attrConnectionUri")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(self) -> typing.Any:
        """
        :Attribute: DBInstanceStatus: Status of mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order Id of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceStorage")
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. MongoDB is [1,10], increased every 1 GB, Unit in GB
        """
        return jsii.get(self, "dbInstanceStorage")

    @db_instance_storage.setter # type: ignore
    def db_instance_storage(self, value: jsii.Number) -> None:
        jsii.set(self, "dbInstanceStorage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPassword")
    def account_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        """
        return jsii.get(self, "accountPassword")

    @account_password.setter # type: ignore
    def account_password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        return jsii.get(self, "autoRenew")

    @auto_renew.setter # type: ignore
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        """
        return jsii.get(self, "chargeType")

    @charge_type.setter # type: ignore
    def charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        return jsii.get(self, "dbInstanceDescription")

    @db_instance_description.setter # type: ignore
    def db_instance_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Database instance version.Support 4.2
        """
        return jsii.get(self, "engineVersion")

    @engine_version.setter # type: ignore
    def engine_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="networkType")
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        """
        return jsii.get(self, "networkType")

    @network_type.setter # type: ignore
    def network_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "networkType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="periodPriceType")
    def period_price_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: periodPriceType: Charge period for created instance.
        """
        return jsii.get(self, "periodPriceType")

    @period_price_type.setter # type: ignore
    def period_price_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "periodPriceType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIpArray")
    def security_ip_array(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpArray: Security ips to add or remove.
        """
        return jsii.get(self, "securityIpArray")

    @security_ip_array.setter # type: ignore
    def security_ip_array(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityIpArray", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="storageEngine")
    def storage_engine(self) -> typing.Optional[builtins.str]:
        """
        :Property: storageEngine: Database storage engine.Support WiredTiger
        """
        return jsii.get(self, "storageEngine")

    @storage_engine.setter # type: ignore
    def storage_engine(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "storageEngine", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create mongodb instance.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "zoneId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.RosServerlessInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_storage": "dbInstanceStorage",
        "account_password": "accountPassword",
        "auto_renew": "autoRenew",
        "charge_type": "chargeType",
        "db_instance_description": "dbInstanceDescription",
        "engine_version": "engineVersion",
        "network_type": "networkType",
        "period": "period",
        "period_price_type": "periodPriceType",
        "resource_group_id": "resourceGroupId",
        "security_ip_array": "securityIpArray",
        "storage_engine": "storageEngine",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosServerlessInstanceProps:
    def __init__(
        self,
        *,
        db_instance_storage: jsii.Number,
        account_password: typing.Optional[builtins.str] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        engine_version: typing.Optional[builtins.str] = None,
        network_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        period_price_type: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        security_ip_array: typing.Optional[builtins.str] = None,
        storage_engine: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MONGODB::ServerlessInstance``.

        :param db_instance_storage: 
        :param account_password: 
        :param auto_renew: 
        :param charge_type: 
        :param db_instance_description: 
        :param engine_version: 
        :param network_type: 
        :param period: 
        :param period_price_type: 
        :param resource_group_id: 
        :param security_ip_array: 
        :param storage_engine: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_storage": db_instance_storage,
        }
        if account_password is not None:
            self._values["account_password"] = account_password
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if network_type is not None:
            self._values["network_type"] = network_type
        if period is not None:
            self._values["period"] = period
        if period_price_type is not None:
            self._values["period_price_type"] = period_price_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_array is not None:
            self._values["security_ip_array"] = security_ip_array
        if storage_engine is not None:
            self._values["storage_engine"] = storage_engine
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. MongoDB is [1,10], increased every 1 GB, Unit in GB
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def account_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        """
        result = self._values.get("account_password")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Database instance version.Support 4.2
        """
        result = self._values.get("engine_version")
        return result

    @builtins.property
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        """
        result = self._values.get("network_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def period_price_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: periodPriceType: Charge period for created instance.
        """
        result = self._values.get("period_price_type")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def security_ip_array(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpArray: Security ips to add or remove.
        """
        result = self._values.get("security_ip_array")
        return result

    @builtins.property
    def storage_engine(self) -> typing.Optional[builtins.str]:
        """
        :Property: storageEngine: Database storage engine.Support WiredTiger
        """
        result = self._values.get("storage_engine")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create mongodb instance.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosServerlessInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosShardingInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstance",
):
    """A ROS template type:  ``ALIYUN::MONGODB::ShardingInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosShardingInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::MONGODB::ShardingInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosShardingInstance, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(self) -> typing.Any:
        """
        :Attribute: DBInstanceStatus: Status of mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order Id of created instance.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="configServer")
    def config_server(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosShardingInstance.ConfigServerProperty", ros_cdk_core.IResolvable]]]:
        """
        :Property: configServer:
        """
        return jsii.get(self, "configServer")

    @config_server.setter # type: ignore
    def config_server(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosShardingInstance.ConfigServerProperty", ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "configServer", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="mongos")
    def mongos(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosShardingInstance.MongosProperty"]]]:
        """
        :Property: mongos:
        """
        return jsii.get(self, "mongos")

    @mongos.setter # type: ignore
    def mongos(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosShardingInstance.MongosProperty"]]],
    ) -> None:
        jsii.set(self, "mongos", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="replicaSet")
    def replica_set(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosShardingInstance.ReplicaSetProperty"]]]:
        """
        :Property: replicaSet:
        """
        return jsii.get(self, "replicaSet")

    @replica_set.setter # type: ignore
    def replica_set(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosShardingInstance.ReplicaSetProperty"]]],
    ) -> None:
        jsii.set(self, "replicaSet", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="accountPassword")
    def account_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        """
        return jsii.get(self, "accountPassword")

    @account_password.setter # type: ignore
    def account_password(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "accountPassword", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        return jsii.get(self, "autoRenew")

    @auto_renew.setter # type: ignore
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        """
        return jsii.get(self, "chargeType")

    @charge_type.setter # type: ignore
    def charge_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="dbInstanceDescription")
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        return jsii.get(self, "dbInstanceDescription")

    @db_instance_description.setter # type: ignore
    def db_instance_description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "dbInstanceDescription", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="engineVersion")
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Database instance version.Support 3.4, 4.0, 4.2
        """
        return jsii.get(self, "engineVersion")

    @engine_version.setter # type: ignore
    def engine_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "engineVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="networkType")
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        """
        return jsii.get(self, "networkType")

    @network_type.setter # type: ignore
    def network_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "networkType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="protocolType")
    def protocol_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: protocolType: Protocol type. Valid value: mongodb or dynamodb.
        """
        return jsii.get(self, "protocolType")

    @protocol_type.setter # type: ignore
    def protocol_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "protocolType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="restoreTime")
    def restore_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        """
        return jsii.get(self, "restoreTime")

    @restore_time.setter # type: ignore
    def restore_time(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "restoreTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="securityIpArray")
    def security_ip_array(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpArray: Security ips to add or remove.
        """
        return jsii.get(self, "securityIpArray")

    @security_ip_array.setter # type: ignore
    def security_ip_array(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "securityIpArray", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="srcDbInstanceId")
    def src_db_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: srcDbInstanceId: Create an instance of the backup set based on an instance.
        """
        return jsii.get(self, "srcDbInstanceId")

    @src_db_instance_id.setter # type: ignore
    def src_db_instance_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "srcDbInstanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="storageEngine")
    def storage_engine(self) -> typing.Optional[builtins.str]:
        """
        :Property: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        """
        return jsii.get(self, "storageEngine")

    @storage_engine.setter # type: ignore
    def storage_engine(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "storageEngine", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create mongodb instance.
        """
        return jsii.get(self, "vpcId")

    @vpc_id.setter # type: ignore
    def vpc_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        """
        return jsii.get(self, "zoneId")

    @zone_id.setter # type: ignore
    def zone_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstance.ConfigServerProperty",
        jsii_struct_bases=[],
        name_mapping={"class_": "class", "storage": "storage"},
    )
    class ConfigServerProperty:
        def __init__(self, *, class_: builtins.str, storage: jsii.Number) -> None:
            """
            :param class_: 
            :param storage: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "class_": class_,
                "storage": storage,
            }

        @builtins.property
        def class_(self) -> builtins.str:
            """
            :Property: class: The specification of config server.
            """
            result = self._values.get("class_")
            assert result is not None, "Required property 'class_' is missing"
            return result

        @builtins.property
        def storage(self) -> jsii.Number:
            """
            :Property: storage: The storage space of config server. Valid value: 20. Unit: GB.
            """
            result = self._values.get("storage")
            assert result is not None, "Required property 'storage' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ConfigServerProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstance.MongosProperty",
        jsii_struct_bases=[],
        name_mapping={"class_": "class"},
    )
    class MongosProperty:
        def __init__(self, *, class_: builtins.str) -> None:
            """
            :param class_: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "class_": class_,
            }

        @builtins.property
        def class_(self) -> builtins.str:
            """
            :Property: class: The specification of mongo.
            """
            result = self._values.get("class_")
            assert result is not None, "Required property 'class_' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MongosProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstance.ReplicaSetProperty",
        jsii_struct_bases=[],
        name_mapping={"class_": "class", "storage": "storage"},
    )
    class ReplicaSetProperty:
        def __init__(self, *, class_: builtins.str, storage: jsii.Number) -> None:
            """
            :param class_: 
            :param storage: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "class_": class_,
                "storage": storage,
            }

        @builtins.property
        def class_(self) -> builtins.str:
            """
            :Property: class: The specification of shard.
            """
            result = self._values.get("class_")
            assert result is not None, "Required property 'class_' is missing"
            return result

        @builtins.property
        def storage(self) -> jsii.Number:
            """
            :Property:

            storage: The storage space of shard.
            Valid values: 10 to 2000. Unit: GB.
            You can only specify this value in 10 GB increments.
            """
            result = self._values.get("storage")
            assert result is not None, "Required property 'storage' is missing"
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ReplicaSetProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.RosShardingInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_server": "configServer",
        "mongos": "mongos",
        "replica_set": "replicaSet",
        "account_password": "accountPassword",
        "auto_renew": "autoRenew",
        "charge_type": "chargeType",
        "db_instance_description": "dbInstanceDescription",
        "engine_version": "engineVersion",
        "network_type": "networkType",
        "period": "period",
        "protocol_type": "protocolType",
        "restore_time": "restoreTime",
        "security_ip_array": "securityIpArray",
        "src_db_instance_id": "srcDbInstanceId",
        "storage_engine": "storageEngine",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class RosShardingInstanceProps:
    def __init__(
        self,
        *,
        config_server: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosShardingInstance.ConfigServerProperty, ros_cdk_core.IResolvable]]],
        mongos: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosShardingInstance.MongosProperty]]],
        replica_set: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosShardingInstance.ReplicaSetProperty]]],
        account_password: typing.Optional[builtins.str] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        engine_version: typing.Optional[builtins.str] = None,
        network_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        protocol_type: typing.Optional[builtins.str] = None,
        restore_time: typing.Optional[builtins.str] = None,
        security_ip_array: typing.Optional[builtins.str] = None,
        src_db_instance_id: typing.Optional[builtins.str] = None,
        storage_engine: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MONGODB::ShardingInstance``.

        :param config_server: 
        :param mongos: 
        :param replica_set: 
        :param account_password: 
        :param auto_renew: 
        :param charge_type: 
        :param db_instance_description: 
        :param engine_version: 
        :param network_type: 
        :param period: 
        :param protocol_type: 
        :param restore_time: 
        :param security_ip_array: 
        :param src_db_instance_id: 
        :param storage_engine: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "config_server": config_server,
            "mongos": mongos,
            "replica_set": replica_set,
        }
        if account_password is not None:
            self._values["account_password"] = account_password
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if network_type is not None:
            self._values["network_type"] = network_type
        if period is not None:
            self._values["period"] = period
        if protocol_type is not None:
            self._values["protocol_type"] = protocol_type
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if security_ip_array is not None:
            self._values["security_ip_array"] = security_ip_array
        if src_db_instance_id is not None:
            self._values["src_db_instance_id"] = src_db_instance_id
        if storage_engine is not None:
            self._values["storage_engine"] = storage_engine
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def config_server(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosShardingInstance.ConfigServerProperty, ros_cdk_core.IResolvable]]]:
        """
        :Property: configServer:
        """
        result = self._values.get("config_server")
        assert result is not None, "Required property 'config_server' is missing"
        return result

    @builtins.property
    def mongos(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosShardingInstance.MongosProperty]]]:
        """
        :Property: mongos:
        """
        result = self._values.get("mongos")
        assert result is not None, "Required property 'mongos' is missing"
        return result

    @builtins.property
    def replica_set(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosShardingInstance.ReplicaSetProperty]]]:
        """
        :Property: replicaSet:
        """
        result = self._values.get("replica_set")
        assert result is not None, "Required property 'replica_set' is missing"
        return result

    @builtins.property
    def account_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        """
        result = self._values.get("account_password")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Database instance version.Support 3.4, 4.0, 4.2
        """
        result = self._values.get("engine_version")
        return result

    @builtins.property
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        """
        result = self._values.get("network_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def protocol_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: protocolType: Protocol type. Valid value: mongodb or dynamodb.
        """
        result = self._values.get("protocol_type")
        return result

    @builtins.property
    def restore_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        """
        result = self._values.get("restore_time")
        return result

    @builtins.property
    def security_ip_array(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpArray: Security ips to add or remove.
        """
        result = self._values.get("security_ip_array")
        return result

    @builtins.property
    def src_db_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: srcDbInstanceId: Create an instance of the backup set based on an instance.
        """
        result = self._values.get("src_db_instance_id")
        return result

    @builtins.property
    def storage_engine(self) -> typing.Optional[builtins.str]:
        """
        :Property: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        """
        result = self._values.get("storage_engine")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create mongodb instance.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosShardingInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ServerlessInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.ServerlessInstance",
):
    """A ROS resource type:  ``ALIYUN::MONGODB::ServerlessInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ServerlessInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::MONGODB::ServerlessInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ServerlessInstance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrConnectionUri")
    def attr_connection_uri(self) -> typing.Any:
        """
        :Attribute: ConnectionURI: Connection uri.
        """
        return jsii.get(self, "attrConnectionUri")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(self) -> typing.Any:
        """
        :Attribute: DBInstanceStatus: Status of mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order Id of created instance.
        """
        return jsii.get(self, "attrOrderId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.ServerlessInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "db_instance_storage": "dbInstanceStorage",
        "account_password": "accountPassword",
        "auto_renew": "autoRenew",
        "charge_type": "chargeType",
        "db_instance_description": "dbInstanceDescription",
        "engine_version": "engineVersion",
        "network_type": "networkType",
        "period": "period",
        "period_price_type": "periodPriceType",
        "resource_group_id": "resourceGroupId",
        "security_ip_array": "securityIpArray",
        "storage_engine": "storageEngine",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class ServerlessInstanceProps:
    def __init__(
        self,
        *,
        db_instance_storage: jsii.Number,
        account_password: typing.Optional[builtins.str] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        engine_version: typing.Optional[builtins.str] = None,
        network_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        period_price_type: typing.Optional[builtins.str] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        security_ip_array: typing.Optional[builtins.str] = None,
        storage_engine: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MONGODB::ServerlessInstance``.

        :param db_instance_storage: 
        :param account_password: 
        :param auto_renew: 
        :param charge_type: 
        :param db_instance_description: 
        :param engine_version: 
        :param network_type: 
        :param period: 
        :param period_price_type: 
        :param resource_group_id: 
        :param security_ip_array: 
        :param storage_engine: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "db_instance_storage": db_instance_storage,
        }
        if account_password is not None:
            self._values["account_password"] = account_password
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if network_type is not None:
            self._values["network_type"] = network_type
        if period is not None:
            self._values["period"] = period
        if period_price_type is not None:
            self._values["period_price_type"] = period_price_type
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if security_ip_array is not None:
            self._values["security_ip_array"] = security_ip_array
        if storage_engine is not None:
            self._values["storage_engine"] = storage_engine
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def db_instance_storage(self) -> jsii.Number:
        """
        :Property: dbInstanceStorage: Database instance storage size. MongoDB is [1,10], increased every 1 GB, Unit in GB
        """
        result = self._values.get("db_instance_storage")
        assert result is not None, "Required property 'db_instance_storage' is missing"
        return result

    @builtins.property
    def account_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        """
        result = self._values.get("account_password")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Database instance version.Support 4.2
        """
        result = self._values.get("engine_version")
        return result

    @builtins.property
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        """
        result = self._values.get("network_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def period_price_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: periodPriceType: Charge period for created instance.
        """
        result = self._values.get("period_price_type")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: The ID of the resource group.
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def security_ip_array(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpArray: Security ips to add or remove.
        """
        result = self._values.get("security_ip_array")
        return result

    @builtins.property
    def storage_engine(self) -> typing.Optional[builtins.str]:
        """
        :Property: storageEngine: Database storage engine.Support WiredTiger
        """
        result = self._values.get("storage_engine")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create mongodb instance.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ServerlessInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ShardingInstance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-mongodb.ShardingInstance",
):
    """A ROS resource type:  ``ALIYUN::MONGODB::ShardingInstance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ShardingInstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::MONGODB::ShardingInstance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(ShardingInstance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceId")
    def attr_db_instance_id(self) -> typing.Any:
        """
        :Attribute: DBInstanceId: The instance id of created mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDbInstanceStatus")
    def attr_db_instance_status(self) -> typing.Any:
        """
        :Attribute: DBInstanceStatus: Status of mongodb instance.
        """
        return jsii.get(self, "attrDbInstanceStatus")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order Id of created instance.
        """
        return jsii.get(self, "attrOrderId")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-mongodb.ShardingInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "config_server": "configServer",
        "mongos": "mongos",
        "replica_set": "replicaSet",
        "account_password": "accountPassword",
        "auto_renew": "autoRenew",
        "charge_type": "chargeType",
        "db_instance_description": "dbInstanceDescription",
        "engine_version": "engineVersion",
        "network_type": "networkType",
        "period": "period",
        "protocol_type": "protocolType",
        "restore_time": "restoreTime",
        "security_ip_array": "securityIpArray",
        "src_db_instance_id": "srcDbInstanceId",
        "storage_engine": "storageEngine",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
        "zone_id": "zoneId",
    },
)
class ShardingInstanceProps:
    def __init__(
        self,
        *,
        config_server: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosShardingInstance.ConfigServerProperty, ros_cdk_core.IResolvable]]],
        mongos: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosShardingInstance.MongosProperty]]],
        replica_set: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosShardingInstance.ReplicaSetProperty]]],
        account_password: typing.Optional[builtins.str] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        charge_type: typing.Optional[builtins.str] = None,
        db_instance_description: typing.Optional[builtins.str] = None,
        engine_version: typing.Optional[builtins.str] = None,
        network_type: typing.Optional[builtins.str] = None,
        period: typing.Optional[jsii.Number] = None,
        protocol_type: typing.Optional[builtins.str] = None,
        restore_time: typing.Optional[builtins.str] = None,
        security_ip_array: typing.Optional[builtins.str] = None,
        src_db_instance_id: typing.Optional[builtins.str] = None,
        storage_engine: typing.Optional[builtins.str] = None,
        vpc_id: typing.Optional[builtins.str] = None,
        v_switch_id: typing.Optional[builtins.str] = None,
        zone_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::MONGODB::ShardingInstance``.

        :param config_server: 
        :param mongos: 
        :param replica_set: 
        :param account_password: 
        :param auto_renew: 
        :param charge_type: 
        :param db_instance_description: 
        :param engine_version: 
        :param network_type: 
        :param period: 
        :param protocol_type: 
        :param restore_time: 
        :param security_ip_array: 
        :param src_db_instance_id: 
        :param storage_engine: 
        :param vpc_id: 
        :param v_switch_id: 
        :param zone_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "config_server": config_server,
            "mongos": mongos,
            "replica_set": replica_set,
        }
        if account_password is not None:
            self._values["account_password"] = account_password
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if db_instance_description is not None:
            self._values["db_instance_description"] = db_instance_description
        if engine_version is not None:
            self._values["engine_version"] = engine_version
        if network_type is not None:
            self._values["network_type"] = network_type
        if period is not None:
            self._values["period"] = period
        if protocol_type is not None:
            self._values["protocol_type"] = protocol_type
        if restore_time is not None:
            self._values["restore_time"] = restore_time
        if security_ip_array is not None:
            self._values["security_ip_array"] = security_ip_array
        if src_db_instance_id is not None:
            self._values["src_db_instance_id"] = src_db_instance_id
        if storage_engine is not None:
            self._values["storage_engine"] = storage_engine
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id
        if zone_id is not None:
            self._values["zone_id"] = zone_id

    @builtins.property
    def config_server(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosShardingInstance.ConfigServerProperty, ros_cdk_core.IResolvable]]]:
        """
        :Property: configServer:
        """
        result = self._values.get("config_server")
        assert result is not None, "Required property 'config_server' is missing"
        return result

    @builtins.property
    def mongos(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosShardingInstance.MongosProperty]]]:
        """
        :Property: mongos:
        """
        result = self._values.get("mongos")
        assert result is not None, "Required property 'mongos' is missing"
        return result

    @builtins.property
    def replica_set(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosShardingInstance.ReplicaSetProperty]]]:
        """
        :Property: replicaSet:
        """
        result = self._values.get("replica_set")
        assert result is not None, "Required property 'replica_set' is missing"
        return result

    @builtins.property
    def account_password(self) -> typing.Optional[builtins.str]:
        """
        :Property: accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
        """
        result = self._values.get("account_password")
        return result

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        """
        result = self._values.get("auto_renew")
        return result

    @builtins.property
    def charge_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
        """
        result = self._values.get("charge_type")
        return result

    @builtins.property
    def db_instance_description(self) -> typing.Optional[builtins.str]:
        """
        :Property: dbInstanceDescription: Description of created database instance.
        """
        result = self._values.get("db_instance_description")
        return result

    @builtins.property
    def engine_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: engineVersion: Database instance version.Support 3.4, 4.0, 4.2
        """
        result = self._values.get("engine_version")
        return result

    @builtins.property
    def network_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: networkType: The instance network type. Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        """
        result = self._values.get("network_type")
        return result

    @builtins.property
    def period(self) -> typing.Optional[jsii.Number]:
        """
        :Property: period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def protocol_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: protocolType: Protocol type. Valid value: mongodb or dynamodb.
        """
        result = self._values.get("protocol_type")
        return result

    @builtins.property
    def restore_time(self) -> typing.Optional[builtins.str]:
        """
        :Property: restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        """
        result = self._values.get("restore_time")
        return result

    @builtins.property
    def security_ip_array(self) -> typing.Optional[builtins.str]:
        """
        :Property: securityIpArray: Security ips to add or remove.
        """
        result = self._values.get("security_ip_array")
        return result

    @builtins.property
    def src_db_instance_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: srcDbInstanceId: Create an instance of the backup set based on an instance.
        """
        result = self._values.get("src_db_instance_id")
        return result

    @builtins.property
    def storage_engine(self) -> typing.Optional[builtins.str]:
        """
        :Property: storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
        """
        result = self._values.get("storage_engine")
        return result

    @builtins.property
    def vpc_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vpcId: The VPC id to create mongodb instance.
        """
        result = self._values.get("vpc_id")
        return result

    @builtins.property
    def v_switch_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: vSwitchId: The vSwitch Id to create mongodb instance.
        """
        result = self._values.get("v_switch_id")
        return result

    @builtins.property
    def zone_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        """
        result = self._values.get("zone_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ShardingInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
    "RosServerlessInstance",
    "RosServerlessInstanceProps",
    "RosShardingInstance",
    "RosShardingInstanceProps",
    "ServerlessInstance",
    "ServerlessInstanceProps",
    "ShardingInstance",
    "ShardingInstanceProps",
]

publication.publish()
