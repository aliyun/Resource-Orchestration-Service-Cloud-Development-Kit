"""
## Aliyun ROS FOAS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_foas as FOAS
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


class Cluster(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.Cluster",
):
    """A ROS resource type:  ``ALIYUN::FOAS::Cluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ClusterProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FOAS::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Cluster, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEngineVersions")
    def attr_engine_versions(self) -> typing.Any:
        """
        :Attribute: EngineVersions: Engine Versions.
        """
        return jsii.get(self, "attrEngineVersions")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMasterInstanceInfos")
    def attr_master_instance_infos(self) -> typing.Any:
        """
        :Attribute: MasterInstanceInfos: Master instance infos.
        """
        return jsii.get(self, "attrMasterInstanceInfos")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order ID.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> typing.Any:
        """
        :Attribute: SecurityGroupId: Security group Id.
        """
        return jsii.get(self, "attrSecurityGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSlaveInstanceInfos")
    def attr_slave_instance_infos(self) -> typing.Any:
        """
        :Attribute: SlaveInstanceInfos: Slave instance infos.
        """
        return jsii.get(self, "attrSlaveInstanceInfos")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> typing.Any:
        """
        :Attribute: State: Cluster status.
        """
        return jsii.get(self, "attrState")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> typing.Any:
        """
        :Attribute: VSwitchIds: VSwitch Ids.
        """
        return jsii.get(self, "attrVSwitchIds")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-foas.ClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "description": "description",
        "oss_bucket": "ossBucket",
        "v_switch_id": "vSwitchId",
        "order": "order",
        "order_id": "orderId",
    },
)
class ClusterProps:
    def __init__(
        self,
        *,
        cluster_name: builtins.str,
        description: builtins.str,
        oss_bucket: builtins.str,
        v_switch_id: builtins.str,
        order: typing.Optional[typing.Union["RosCluster.OrderProperty", ros_cdk_core.IResolvable]] = None,
        order_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FOAS::Cluster``.

        :param cluster_name: 
        :param description: 
        :param oss_bucket: 
        :param v_switch_id: 
        :param order: 
        :param order_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_name": cluster_name,
            "description": description,
            "oss_bucket": oss_bucket,
            "v_switch_id": v_switch_id,
        }
        if order is not None:
            self._values["order"] = order
        if order_id is not None:
            self._values["order_id"] = order_id

    @builtins.property
    def cluster_name(self) -> builtins.str:
        """
        :Property: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        """
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return result

    @builtins.property
    def description(self) -> builtins.str:
        """
        :Property: description: Cluster description.
        """
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return result

    @builtins.property
    def oss_bucket(self) -> builtins.str:
        """
        :Property: ossBucket: Bucket name in your OSS.
        """
        result = self._values.get("oss_bucket")
        assert result is not None, "Required property 'oss_bucket' is missing"
        return result

    @builtins.property
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return result

    @builtins.property
    def order(
        self,
    ) -> typing.Optional[typing.Union["RosCluster.OrderProperty", ros_cdk_core.IResolvable]]:
        """
        :Property:

        order: Order detail. Only one of property Order or OrderId can be specified.
        Order is not suggested.
        Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        The order can not be cancelled.
        """
        result = self._values.get("order")
        return result

    @builtins.property
    def order_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        orderId: Order Id. Only one of property Order or OrderId can be specified.
        OrderId is suggested.
        """
        result = self._values.get("order_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Project(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.Project",
):
    """A ROS resource type:  ``ALIYUN::FOAS::Project``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ProjectProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FOAS::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Project, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> typing.Any:
        """
        :Attribute: State: Project state.
        """
        return jsii.get(self, "attrState")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-foas.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "deploy_type": "deployType",
        "manager_ids": "managerIds",
        "name": "name",
        "cluster_id": "clusterId",
        "description": "description",
        "order_id": "orderId",
    },
)
class ProjectProps:
    def __init__(
        self,
        *,
        deploy_type: builtins.str,
        manager_ids: builtins.str,
        name: builtins.str,
        cluster_id: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        order_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FOAS::Project``.

        :param deploy_type: 
        :param manager_ids: 
        :param name: 
        :param cluster_id: 
        :param description: 
        :param order_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "deploy_type": deploy_type,
            "manager_ids": manager_ids,
            "name": name,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if description is not None:
            self._values["description"] = description
        if order_id is not None:
            self._values["order_id"] = order_id

    @builtins.property
    def deploy_type(self) -> builtins.str:
        """
        :Property:

        deployType: Cluster type:
        Exclusive cluster: cell
        Shared cluster: public
        """
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return result

    @builtins.property
    def manager_ids(self) -> builtins.str:
        """
        :Property: managerIds: Comma delimited account Id list of managers.
        """
        result = self._values.get("manager_ids")
        assert result is not None, "Required property 'manager_ids' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def cluster_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterId: Cluster ID.
        """
        result = self._values.get("cluster_id")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Project description.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def order_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: orderId: Order Id of Shared cluster.
        """
        result = self._values.get("order_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCluster(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.RosCluster",
):
    """A ROS template type:  ``ALIYUN::FOAS::Cluster``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosClusterProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FOAS::Cluster``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCluster, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrClusterId")
    def attr_cluster_id(self) -> typing.Any:
        """
        :Attribute: ClusterId: Cluster ID.
        """
        return jsii.get(self, "attrClusterId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEngineVersions")
    def attr_engine_versions(self) -> typing.Any:
        """
        :Attribute: EngineVersions: Engine Versions.
        """
        return jsii.get(self, "attrEngineVersions")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrMasterInstanceInfos")
    def attr_master_instance_infos(self) -> typing.Any:
        """
        :Attribute: MasterInstanceInfos: Master instance infos.
        """
        return jsii.get(self, "attrMasterInstanceInfos")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> typing.Any:
        """
        :Attribute: OrderId: Order ID.
        """
        return jsii.get(self, "attrOrderId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSecurityGroupId")
    def attr_security_group_id(self) -> typing.Any:
        """
        :Attribute: SecurityGroupId: Security group Id.
        """
        return jsii.get(self, "attrSecurityGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSlaveInstanceInfos")
    def attr_slave_instance_infos(self) -> typing.Any:
        """
        :Attribute: SlaveInstanceInfos: Slave instance infos.
        """
        return jsii.get(self, "attrSlaveInstanceInfos")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> typing.Any:
        """
        :Attribute: State: Cluster status.
        """
        return jsii.get(self, "attrState")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVSwitchIds")
    def attr_v_switch_ids(self) -> typing.Any:
        """
        :Attribute: VSwitchIds: VSwitch Ids.
        """
        return jsii.get(self, "attrVSwitchIds")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterName")
    def cluster_name(self) -> builtins.str:
        """
        :Property: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        """
        return jsii.get(self, "clusterName")

    @cluster_name.setter # type: ignore
    def cluster_name(self, value: builtins.str) -> None:
        jsii.set(self, "clusterName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> builtins.str:
        """
        :Property: description: Cluster description.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: builtins.str) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ossBucket")
    def oss_bucket(self) -> builtins.str:
        """
        :Property: ossBucket: Bucket name in your OSS.
        """
        return jsii.get(self, "ossBucket")

    @oss_bucket.setter # type: ignore
    def oss_bucket(self, value: builtins.str) -> None:
        jsii.set(self, "ossBucket", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        return jsii.get(self, "vSwitchId")

    @v_switch_id.setter # type: ignore
    def v_switch_id(self, value: builtins.str) -> None:
        jsii.set(self, "vSwitchId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="order")
    def order(
        self,
    ) -> typing.Optional[typing.Union["RosCluster.OrderProperty", ros_cdk_core.IResolvable]]:
        """
        :Property:

        order: Order detail. Only one of property Order or OrderId can be specified.
        Order is not suggested.
        Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        The order can not be cancelled.
        """
        return jsii.get(self, "order")

    @order.setter # type: ignore
    def order(
        self,
        value: typing.Optional[typing.Union["RosCluster.OrderProperty", ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "order", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="orderId")
    def order_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        orderId: Order Id. Only one of property Order or OrderId can be specified.
        OrderId is suggested.
        """
        return jsii.get(self, "orderId")

    @order_id.setter # type: ignore
    def order_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "orderId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-foas.RosCluster.OrderProperty",
        jsii_struct_bases=[],
        name_mapping={
            "master_spec": "masterSpec",
            "slave_spec": "slaveSpec",
            "master_number": "masterNumber",
            "pay_model": "payModel",
            "period": "period",
            "slave_number": "slaveNumber",
        },
    )
    class OrderProperty:
        def __init__(
            self,
            *,
            master_spec: builtins.str,
            slave_spec: builtins.str,
            master_number: typing.Optional[jsii.Number] = None,
            pay_model: typing.Optional[builtins.str] = None,
            period: typing.Optional[jsii.Number] = None,
            slave_number: typing.Optional[jsii.Number] = None,
        ) -> None:
            """
            :param master_spec: 
            :param slave_spec: 
            :param master_number: 
            :param pay_model: 
            :param period: 
            :param slave_number: 
            """
            self._values: typing.Dict[str, typing.Any] = {
                "master_spec": master_spec,
                "slave_spec": slave_spec,
            }
            if master_number is not None:
                self._values["master_number"] = master_number
            if pay_model is not None:
                self._values["pay_model"] = pay_model
            if period is not None:
                self._values["period"] = period
            if slave_number is not None:
                self._values["slave_number"] = slave_number

        @builtins.property
        def master_spec(self) -> builtins.str:
            """
            :Property: masterSpec: Master spec, such as Ecs_4c16g.
            """
            result = self._values.get("master_spec")
            assert result is not None, "Required property 'master_spec' is missing"
            return result

        @builtins.property
        def slave_spec(self) -> builtins.str:
            """
            :Property: slaveSpec: Master spec, such as Ecs_4c16g.
            """
            result = self._values.get("slave_spec")
            assert result is not None, "Required property 'slave_spec' is missing"
            return result

        @builtins.property
        def master_number(self) -> typing.Optional[jsii.Number]:
            """
            :Property: masterNumber: Number of masters. Valid values: 1, 3. Default to 3.
            """
            result = self._values.get("master_number")
            return result

        @builtins.property
        def pay_model(self) -> typing.Optional[builtins.str]:
            """
            :Property: payModel: Pay model. Valid values: pre, post. Default to post.
            """
            result = self._values.get("pay_model")
            return result

        @builtins.property
        def period(self) -> typing.Optional[jsii.Number]:
            """
            :Property: period: Pre paid time period. Unit is month. Default to 1.
            """
            result = self._values.get("period")
            return result

        @builtins.property
        def slave_number(self) -> typing.Optional[jsii.Number]:
            """
            :Property: slaveNumber: Number of masters. Valid values: 2-1000. Default to 2.
            """
            result = self._values.get("slave_number")
            return result

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "OrderProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-foas.RosClusterProps",
    jsii_struct_bases=[],
    name_mapping={
        "cluster_name": "clusterName",
        "description": "description",
        "oss_bucket": "ossBucket",
        "v_switch_id": "vSwitchId",
        "order": "order",
        "order_id": "orderId",
    },
)
class RosClusterProps:
    def __init__(
        self,
        *,
        cluster_name: builtins.str,
        description: builtins.str,
        oss_bucket: builtins.str,
        v_switch_id: builtins.str,
        order: typing.Optional[typing.Union[RosCluster.OrderProperty, ros_cdk_core.IResolvable]] = None,
        order_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FOAS::Cluster``.

        :param cluster_name: 
        :param description: 
        :param oss_bucket: 
        :param v_switch_id: 
        :param order: 
        :param order_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cluster_name": cluster_name,
            "description": description,
            "oss_bucket": oss_bucket,
            "v_switch_id": v_switch_id,
        }
        if order is not None:
            self._values["order"] = order
        if order_id is not None:
            self._values["order_id"] = order_id

    @builtins.property
    def cluster_name(self) -> builtins.str:
        """
        :Property: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        """
        result = self._values.get("cluster_name")
        assert result is not None, "Required property 'cluster_name' is missing"
        return result

    @builtins.property
    def description(self) -> builtins.str:
        """
        :Property: description: Cluster description.
        """
        result = self._values.get("description")
        assert result is not None, "Required property 'description' is missing"
        return result

    @builtins.property
    def oss_bucket(self) -> builtins.str:
        """
        :Property: ossBucket: Bucket name in your OSS.
        """
        result = self._values.get("oss_bucket")
        assert result is not None, "Required property 'oss_bucket' is missing"
        return result

    @builtins.property
    def v_switch_id(self) -> builtins.str:
        """
        :Property: vSwitchId: VSwitch ID.
        """
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return result

    @builtins.property
    def order(
        self,
    ) -> typing.Optional[typing.Union[RosCluster.OrderProperty, ros_cdk_core.IResolvable]]:
        """
        :Property:

        order: Order detail. Only one of property Order or OrderId can be specified.
        Order is not suggested.
        Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        The order can not be cancelled.
        """
        result = self._values.get("order")
        return result

    @builtins.property
    def order_id(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        orderId: Order Id. Only one of property Order or OrderId can be specified.
        OrderId is suggested.
        """
        result = self._values.get("order_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosClusterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-foas.RosProject",
):
    """A ROS template type:  ``ALIYUN::FOAS::Project``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosProjectProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FOAS::Project``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosProject, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrState")
    def attr_state(self) -> typing.Any:
        """
        :Attribute: State: Project state.
        """
        return jsii.get(self, "attrState")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="deployType")
    def deploy_type(self) -> builtins.str:
        """
        :Property:

        deployType: Cluster type:
        Exclusive cluster: cell
        Shared cluster: public
        """
        return jsii.get(self, "deployType")

    @deploy_type.setter # type: ignore
    def deploy_type(self, value: builtins.str) -> None:
        jsii.set(self, "deployType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="managerIds")
    def manager_ids(self) -> builtins.str:
        """
        :Property: managerIds: Comma delimited account Id list of managers.
        """
        return jsii.get(self, "managerIds")

    @manager_ids.setter # type: ignore
    def manager_ids(self, value: builtins.str) -> None:
        jsii.set(self, "managerIds", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterId")
    def cluster_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterId: Cluster ID.
        """
        return jsii.get(self, "clusterId")

    @cluster_id.setter # type: ignore
    def cluster_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "clusterId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Project description.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="orderId")
    def order_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: orderId: Order Id of Shared cluster.
        """
        return jsii.get(self, "orderId")

    @order_id.setter # type: ignore
    def order_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "orderId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-foas.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "deploy_type": "deployType",
        "manager_ids": "managerIds",
        "name": "name",
        "cluster_id": "clusterId",
        "description": "description",
        "order_id": "orderId",
    },
)
class RosProjectProps:
    def __init__(
        self,
        *,
        deploy_type: builtins.str,
        manager_ids: builtins.str,
        name: builtins.str,
        cluster_id: typing.Optional[builtins.str] = None,
        description: typing.Optional[builtins.str] = None,
        order_id: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FOAS::Project``.

        :param deploy_type: 
        :param manager_ids: 
        :param name: 
        :param cluster_id: 
        :param description: 
        :param order_id: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "deploy_type": deploy_type,
            "manager_ids": manager_ids,
            "name": name,
        }
        if cluster_id is not None:
            self._values["cluster_id"] = cluster_id
        if description is not None:
            self._values["description"] = description
        if order_id is not None:
            self._values["order_id"] = order_id

    @builtins.property
    def deploy_type(self) -> builtins.str:
        """
        :Property:

        deployType: Cluster type:
        Exclusive cluster: cell
        Shared cluster: public
        """
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return result

    @builtins.property
    def manager_ids(self) -> builtins.str:
        """
        :Property: managerIds: Comma delimited account Id list of managers.
        """
        result = self._values.get("manager_ids")
        assert result is not None, "Required property 'manager_ids' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def cluster_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterId: Cluster ID.
        """
        result = self._values.get("cluster_id")
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Project description.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def order_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: orderId: Order Id of Shared cluster.
        """
        result = self._values.get("order_id")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Cluster",
    "ClusterProps",
    "Project",
    "ProjectProps",
    "RosCluster",
    "RosClusterProps",
    "RosProject",
    "RosProjectProps",
]

publication.publish()
