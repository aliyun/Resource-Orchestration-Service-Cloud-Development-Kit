'''
## Aliyun ROS KAFKA Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as KAFKA from '@alicloud/ros-cdk-kafka';
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

from ._jsii import *

import ros_cdk_core


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.Instance",
):
    '''A ROS resource type:  ``ALIYUN::KAFKA::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::KAFKA::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: Id of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: Name of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: Id of the order.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "deploy_type": "deployType",
        "disk_size": "diskSize",
        "disk_type": "diskType",
        "topic_quota": "topicQuota",
        "deletion_force": "deletionForce",
        "deploy_option": "deployOption",
        "eip_max": "eipMax",
        "io_max": "ioMax",
        "io_max_spec": "ioMaxSpec",
        "open_connector": "openConnector",
        "pay_type": "payType",
        "spec_type": "specType",
        "tags": "tags",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        deploy_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        disk_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        disk_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        topic_quota: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deploy_option: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.DeployOptionProperty"]] = None,
        eip_max: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        io_max: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        io_max_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        open_connector: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        spec_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosInstance.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::KAFKA::Instance``.

        :param deploy_type: Property deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values: 4: Instance of the public type 5: Instance of the VPC type
        :param disk_size: Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        :param disk_type: Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values: 0: Ultra disk 1: SSD
        :param topic_quota: Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance. The default value of this parameter varies with different peak traffic values. Additional fees are charged if the default values are exceeded. Different specifications have different default values, and extra fees are charged. For more information, see Billing.
        :param deletion_force: Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
        :param deploy_option: Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.
        :param eip_max: Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance. This parameter must be specified when the DeployType parameter is set to 4.
        :param io_max: Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance. For more information about the value range, see Billing.
        :param io_max_spec: Property ioMaxSpec: Flow specification (recommended) The IoMax and IoMaxSpec must be optional. When filling in at the same time, subject to IoMaxSpec. It is recommended that you only fill in the flow specification
        :param open_connector: Property openConnector: Whether open kafka connector or not.
        :param pay_type: Property payType: Pay by hour or month.
        :param spec_type: Property specType: The edition of the Message Queue for Apache Kafka instance. Valid values: professional: Professional Edition normal: Normal version
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "deploy_type": deploy_type,
            "disk_size": disk_size,
            "disk_type": disk_type,
            "topic_quota": topic_quota,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if deploy_option is not None:
            self._values["deploy_option"] = deploy_option
        if eip_max is not None:
            self._values["eip_max"] = eip_max
        if io_max is not None:
            self._values["io_max"] = io_max
        if io_max_spec is not None:
            self._values["io_max_spec"] = io_max_spec
        if open_connector is not None:
            self._values["open_connector"] = open_connector
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if spec_type is not None:
            self._values["spec_type"] = spec_type
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def deploy_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property deployType: The deployment mode of the Message Queue for Apache Kafka instance.

        Valid values:
        4: Instance of the public type
        5: Instance of the VPC type
        '''
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def disk_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.'''
        result = self._values.get("disk_size")
        assert result is not None, "Required property 'disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def disk_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance.

        Valid values:
        0: Ultra disk
        1: SSD
        '''
        result = self._values.get("disk_type")
        assert result is not None, "Required property 'disk_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic_quota(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.

        The default value of this parameter varies with different peak traffic values.
        Additional fees are charged if the default values are exceeded.
        Different specifications have different default values, and extra fees are charged.
        For more information, see Billing.
        '''
        result = self._values.get("topic_quota")
        assert result is not None, "Required property 'topic_quota' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance.

        Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deploy_option(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.DeployOptionProperty"]]:
        '''Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.'''
        result = self._values.get("deploy_option")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.DeployOptionProperty"]], result)

    @builtins.property
    def eip_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.

        This parameter must be specified when the DeployType parameter is set to 4.
        '''
        result = self._values.get("eip_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def io_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.

        For more information about the value range, see Billing.
        '''
        result = self._values.get("io_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def io_max_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.

        When filling in at the same time, subject to IoMaxSpec.
        It is recommended that you only fill in the flow specification
        '''
        result = self._values.get("io_max_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def open_connector(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property openConnector: Whether open kafka connector or not.'''
        result = self._values.get("open_connector")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payType: Pay by hour or month.'''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def spec_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property specType: The edition of the Message Queue for Apache Kafka instance.

        Valid values:
        professional: Professional Edition
        normal: Normal version
        '''
        result = self._values.get("spec_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], result)

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
    jsii_type="@alicloud/ros-cdk-kafka.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::KAFKA::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::KAFKA::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: Id of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: Name of the instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: Id of the order.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deployType")
    def deploy_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
        4: Instance of the public type
        5: Instance of the VPC type
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "deployType"))

    @deploy_type.setter
    def deploy_type(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "deployType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="diskSize")
    def disk_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "diskSize"))

    @disk_size.setter
    def disk_size(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "diskSize", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="diskType")
    def disk_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
        0: Ultra disk
        1: SSD
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "diskType"))

    @disk_type.setter
    def disk_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "diskType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="topicQuota")
    def topic_quota(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.
        The default value of this parameter varies with different peak traffic values.
        Additional fees are charged if the default values are exceeded.
        Different specifications have different default values, and extra fees are charged.
        For more information, see Billing.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "topicQuota"))

    @topic_quota.setter
    def topic_quota(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "topicQuota", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionForce", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deployOption")
    def deploy_option(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.DeployOptionProperty"]]:
        '''
        :Property: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.DeployOptionProperty"]], jsii.get(self, "deployOption"))

    @deploy_option.setter
    def deploy_option(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosInstance.DeployOptionProperty"]],
    ) -> None:
        jsii.set(self, "deployOption", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="eipMax")
    def eip_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
        This parameter must be specified when the DeployType parameter is set to 4.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "eipMax"))

    @eip_max.setter
    def eip_max(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "eipMax", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ioMax")
    def io_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
        For more information about the value range, see Billing.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "ioMax"))

    @io_max.setter
    def io_max(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ioMax", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ioMaxSpec")
    def io_max_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ioMaxSpec: Flow specification (recommended)
        The IoMax and IoMaxSpec must be optional.
        When filling in at the same time, subject to IoMaxSpec.
        It is recommended that you only fill in the flow specification
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "ioMaxSpec"))

    @io_max_spec.setter
    def io_max_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ioMaxSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="openConnector")
    def open_connector(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: openConnector: Whether open kafka connector or not
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "openConnector"))

    @open_connector.setter
    def open_connector(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "openConnector", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payType: Pay by hour or month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="specType")
    def spec_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
        professional: Professional Edition
        normal: Normal version
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "specType"))

    @spec_type.setter
    def spec_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "specType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosInstance.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosInstance.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosInstance.TagsProperty"]],
    ) -> None:
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-kafka.RosInstance.DeployOptionProperty",
        jsii_struct_bases=[],
        name_mapping={
            "deploy_module": "deployModule",
            "v_switch_id": "vSwitchId",
            "config": "config",
            "is_eip_inner": "isEipInner",
            "is_set_user_and_password": "isSetUserAndPassword",
            "name": "name",
            "password": "password",
            "security_group": "securityGroup",
            "service_version": "serviceVersion",
            "username": "username",
            "vpc_id": "vpcId",
            "zone_id": "zoneId",
        },
    )
    class DeployOptionProperty:
        def __init__(
            self,
            *,
            deploy_module: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            is_eip_inner: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            is_set_user_and_password: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            security_group: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            service_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            username: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param deploy_module: 
            :param v_switch_id: 
            :param config: 
            :param is_eip_inner: 
            :param is_set_user_and_password: 
            :param name: 
            :param password: 
            :param security_group: 
            :param service_version: 
            :param username: 
            :param vpc_id: 
            :param zone_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "deploy_module": deploy_module,
                "v_switch_id": v_switch_id,
            }
            if config is not None:
                self._values["config"] = config
            if is_eip_inner is not None:
                self._values["is_eip_inner"] = is_eip_inner
            if is_set_user_and_password is not None:
                self._values["is_set_user_and_password"] = is_set_user_and_password
            if name is not None:
                self._values["name"] = name
            if password is not None:
                self._values["password"] = password
            if security_group is not None:
                self._values["security_group"] = security_group
            if service_version is not None:
                self._values["service_version"] = service_version
            if username is not None:
                self._values["username"] = username
            if vpc_id is not None:
                self._values["vpc_id"] = vpc_id
            if zone_id is not None:
                self._values["zone_id"] = zone_id

        @builtins.property
        def deploy_module(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property:

            deployModule: The deployment mode of the instance. Valid values:
            vpc: virtual private cloud (VPC)
            eip: Internet and VPC
            The deployment mode of the instance must be consistent with the instance type.
            Set this value to vpc if your instance type is VPC.
            Set this value to eip if your instance type is Internet and VPC.
            '''
            result = self._values.get("deploy_module")
            assert result is not None, "Required property 'deploy_module' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vSwitchId: The ID of the vSwitch associated with the VPC.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
            '''
            :Property:

            config: The initial configurations of the Message Queue for Apache Kafka instance. If you do not specify this parameter, it is left empty.The Config parameter supports the following parameters:
            enable.vpc_sasl_ssl: specifies whether to enable VPC transmission encryption. Valid values:
            true: indicates that VPC transmission encryption is enabled. If you enable VPC transmission encryption, enable access control list (ACL).
            false: indicates that VPC transmission encryption is disabled. By default, VPC transmission encryption is disabled.

            enable.acl: specifies whether to enable ACL. Valid values:
            true: indicates that ACL is enabled.
            false: indicates that ACL is disabled. By default, ACL is disabled.

            kafka.log.retention.hours: the maximum message retention period when the disk capacity is sufficient. Unit: hours. Valid values: 24 to 480. Default value: 72. When the disk usage reaches 85%, the disk capacity is considered insufficient, and the system deletes messages in the order in which messages are stored, from the earliest to latest.

            kafka.message.max.bytes: the maximum size of messages that Message Queue for Apache Kafka can send and receive. Unit: byte. Valid values: 1048576 to 10485760. Default value: 1048576. Before you modify the maximum message size, make sure that the new value is consistent with those on the producer and consumer.
            '''
            result = self._values.get("config")
            return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def is_eip_inner(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            isEipInner: Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
            true: The instance supports EIP mode.
            false: The instance does not support EIP mode.
            This parameter must be consistent with the instance type.
            Set the parameter to true for instances of the Internet and VPC type or to false for instances of the VPC type.
            '''
            result = self._values.get("is_eip_inner")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def is_set_user_and_password(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            isSetUserAndPassword: Specifies whether to set a new user name and password for instance. Valid values:
            true: Set a new user name and password.
            false: Do not set a new user name and password.
            This parameter is supported only for instances of the Internet and VPC type.
            '''
            result = self._values.get("is_set_user_and_password")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: name: The new name of the instance.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            password: The new password for the instance.
            This parameter is supported only for instances of the Internet and VPC type.
            Support characters (uppercase and lowercase), numbers, length 8-40,
            containing at least one lowercase letter, one uppercase letter, and one number
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def security_group(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            securityGroup: The security group of the instance.
            If you do not specify this parameter, Message Queue for Apache Kafka automatically
            configures a security group for the instance. If you specify this parameter,
            you must create the specified security group in advance.
            For more information, see Create a security group.
            '''
            result = self._values.get("security_group")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def service_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serviceVersion: The version of the Message Queue for Apache Kafka instance. For example: 0.10.2, 2.2.0 and etc.
            '''
            result = self._values.get("service_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def username(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            username: The new user name for the instance.
            This parameter is supported only for instances of the Internet and VPC type.
            Support characters (uppercase and lowercase), numbers, length 8-40
            '''
            result = self._values.get("username")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: vpcId: The ID of the VPC on which you want to deploy the instance.
            '''
            result = self._values.get("vpc_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            zoneId: The ID of the zone where you want to deploy the instance.
            The zone ID of the instance must be the same as that of the vSwitch.
            '''
            result = self._values.get("zone_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "DeployOptionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-kafka.RosInstance.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "deploy_type": "deployType",
        "disk_size": "diskSize",
        "disk_type": "diskType",
        "topic_quota": "topicQuota",
        "deletion_force": "deletionForce",
        "deploy_option": "deployOption",
        "eip_max": "eipMax",
        "io_max": "ioMax",
        "io_max_spec": "ioMaxSpec",
        "open_connector": "openConnector",
        "pay_type": "payType",
        "spec_type": "specType",
        "tags": "tags",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        deploy_type: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        disk_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        disk_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        topic_quota: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        deploy_option: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.DeployOptionProperty]] = None,
        eip_max: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        io_max: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        io_max_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        open_connector: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        spec_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosInstance.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::KAFKA::Instance``.

        :param deploy_type: 
        :param disk_size: 
        :param disk_type: 
        :param topic_quota: 
        :param deletion_force: 
        :param deploy_option: 
        :param eip_max: 
        :param io_max: 
        :param io_max_spec: 
        :param open_connector: 
        :param pay_type: 
        :param spec_type: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "deploy_type": deploy_type,
            "disk_size": disk_size,
            "disk_type": disk_type,
            "topic_quota": topic_quota,
        }
        if deletion_force is not None:
            self._values["deletion_force"] = deletion_force
        if deploy_option is not None:
            self._values["deploy_option"] = deploy_option
        if eip_max is not None:
            self._values["eip_max"] = eip_max
        if io_max is not None:
            self._values["io_max"] = io_max
        if io_max_spec is not None:
            self._values["io_max_spec"] = io_max_spec
        if open_connector is not None:
            self._values["open_connector"] = open_connector
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if spec_type is not None:
            self._values["spec_type"] = spec_type
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def deploy_type(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
        4: Instance of the public type
        5: Instance of the VPC type
        '''
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def disk_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        '''
        result = self._values.get("disk_size")
        assert result is not None, "Required property 'disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def disk_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
        0: Ultra disk
        1: SSD
        '''
        result = self._values.get("disk_type")
        assert result is not None, "Required property 'disk_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic_quota(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.
        The default value of this parameter varies with different peak traffic values.
        Additional fees are charged if the default values are exceeded.
        Different specifications have different default values, and extra fees are charged.
        For more information, see Billing.
        '''
        result = self._values.get("topic_quota")
        assert result is not None, "Required property 'topic_quota' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deploy_option(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.DeployOptionProperty]]:
        '''
        :Property: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
        '''
        result = self._values.get("deploy_option")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosInstance.DeployOptionProperty]], result)

    @builtins.property
    def eip_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
        This parameter must be specified when the DeployType parameter is set to 4.
        '''
        result = self._values.get("eip_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def io_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
        For more information about the value range, see Billing.
        '''
        result = self._values.get("io_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def io_max_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        ioMaxSpec: Flow specification (recommended)
        The IoMax and IoMaxSpec must be optional.
        When filling in at the same time, subject to IoMaxSpec.
        It is recommended that you only fill in the flow specification
        '''
        result = self._values.get("io_max_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def open_connector(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: openConnector: Whether open kafka connector or not
        '''
        result = self._values.get("open_connector")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payType: Pay by hour or month.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def spec_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
        professional: Professional Edition
        normal: Normal version
        '''
        result = self._values.get("spec_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosInstance.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosInstance.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTopic(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.RosTopic",
):
    '''A ROS template type:  ``ALIYUN::KAFKA::Topic``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosTopicProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::KAFKA::Topic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty # type: ignore[misc]
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Topic: Topic name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopic"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="remark")
    def remark(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        remark: The description of the topic. The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "remark", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="topic")
    def topic(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        topic: The name of the topic. The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "topic"))

    @topic.setter
    def topic(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "topic", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="compactTopic")
    def compact_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values:
        false: uses the default log cleanup policy.
        true: uses the Apache Kafka log compaction policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "compactTopic"))

    @compact_topic.setter
    def compact_topic(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "compactTopic", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="config")
    def config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        config: Supplementary configuration.
        Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
        This parameter can only be specified if the LocalTopic value is true.
        NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "config"))

    @config.setter
    def config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "config", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="localTopic")
    def local_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        localTopic: The storage engine of the topic. Valid values:
        false: the Cloud Storage mode.
        true: the Local Storage mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "localTopic"))

    @local_topic.setter
    def local_topic(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "localTopic", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="minInsyncReplicas")
    def min_insync_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        minInsyncReplicas: The minimum number of ISR sync replicas.
        This parameter can only be specified if the LocalTopic value is true.
        The value must be less than the number of Topic copies.
        The number of synchronous replicas is limited to 1~3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "minInsyncReplicas"))

    @min_insync_replicas.setter
    def min_insync_replicas(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "minInsyncReplicas", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="partitionNum")
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        partitionNum: The number of partitions in the topic. Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "partitionNum"))

    @partition_num.setter
    def partition_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "partitionNum", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="replicationFactor")
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        replicationFactor: The number of copies of the topic.
        This parameter can only be specified if the LocalTopic value is true.
        The number of copies is limited to 1~3.
        Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "replicationFactor"))

    @replication_factor.setter
    def replication_factor(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "replicationFactor", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.RosTopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "remark": "remark",
        "topic": "topic",
        "compact_topic": "compactTopic",
        "config": "config",
        "local_topic": "localTopic",
        "min_insync_replicas": "minInsyncReplicas",
        "partition_num": "partitionNum",
        "replication_factor": "replicationFactor",
    },
)
class RosTopicProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        remark: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        topic: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        compact_topic: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        local_topic: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        min_insync_replicas: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        partition_num: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::KAFKA::Topic``.

        :param instance_id: 
        :param remark: 
        :param topic: 
        :param compact_topic: 
        :param config: 
        :param local_topic: 
        :param min_insync_replicas: 
        :param partition_num: 
        :param replication_factor: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "remark": remark,
            "topic": topic,
        }
        if compact_topic is not None:
            self._values["compact_topic"] = compact_topic
        if config is not None:
            self._values["config"] = config
        if local_topic is not None:
            self._values["local_topic"] = local_topic
        if min_insync_replicas is not None:
            self._values["min_insync_replicas"] = min_insync_replicas
        if partition_num is not None:
            self._values["partition_num"] = partition_num
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def remark(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        remark: The description of the topic. The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        '''
        result = self._values.get("remark")
        assert result is not None, "Required property 'remark' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        topic: The name of the topic. The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        '''
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def compact_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values:
        false: uses the default log cleanup policy.
        true: uses the Apache Kafka log compaction policy.
        '''
        result = self._values.get("compact_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        config: Supplementary configuration.
        Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
        This parameter can only be specified if the LocalTopic value is true.
        NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def local_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        localTopic: The storage engine of the topic. Valid values:
        false: the Cloud Storage mode.
        true: the Local Storage mode.
        '''
        result = self._values.get("local_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def min_insync_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        minInsyncReplicas: The minimum number of ISR sync replicas.
        This parameter can only be specified if the LocalTopic value is true.
        The value must be less than the number of Topic copies.
        The number of synchronous replicas is limited to 1~3.
        '''
        result = self._values.get("min_insync_replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        partitionNum: The number of partitions in the topic. Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        '''
        result = self._values.get("partition_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        replicationFactor: The number of copies of the topic.
        This parameter can only be specified if the LocalTopic value is true.
        The number of copies is limited to 1~3.
        Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Topic(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.Topic",
):
    '''A ROS resource type:  ``ALIYUN::KAFKA::Topic``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "TopicProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::KAFKA::Topic``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.

        You can call the GetInstanceList operation to query instances.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> ros_cdk_core.IResolvable:
        '''Attribute Topic: Topic name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTopic"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-kafka.TopicProps",
    jsii_struct_bases=[],
    name_mapping={
        "instance_id": "instanceId",
        "remark": "remark",
        "topic": "topic",
        "compact_topic": "compactTopic",
        "config": "config",
        "local_topic": "localTopic",
        "min_insync_replicas": "minInsyncReplicas",
        "partition_num": "partitionNum",
        "replication_factor": "replicationFactor",
    },
)
class TopicProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        remark: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        topic: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        compact_topic: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        local_topic: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        min_insync_replicas: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        partition_num: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::KAFKA::Topic``.

        :param instance_id: Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located. You can call the GetInstanceList operation to query instances.
        :param remark: Property remark: The description of the topic. The value of this parameter must meet the following requirements: The value can only contain letters, digits, hyphens (-), and underscores (_). The value must be 3 to 64 characters in length.
        :param topic: Property topic: The name of the topic. The value of this parameter must meet the following requirements: The name can only contain letters, digits, hyphens (-), and underscores (_). The name must be 3 to 64 characters in length, and will be automatically truncated if it contains more characters. The name cannot be modified after being created.
        :param compact_topic: Property compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values: false: uses the default log cleanup policy. true: uses the Apache Kafka log compaction policy.
        :param config: Property config: Supplementary configuration. Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3. This parameter can only be specified if the LocalTopic value is true. NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        :param local_topic: Property localTopic: The storage engine of the topic. Valid values: false: the Cloud Storage mode. true: the Local Storage mode.
        :param min_insync_replicas: Property minInsyncReplicas: The minimum number of ISR sync replicas. This parameter can only be specified if the LocalTopic value is true. The value must be less than the number of Topic copies. The number of synchronous replicas is limited to 1~3.
        :param partition_num: Property partitionNum: The number of partitions in the topic. Valid values: 1 to 48 We recommend that you set the number of partitions to a multiple of 6 to reduce the risk of data skew.Note:For special requirements,submit a ticket.
        :param replication_factor: Property replicationFactor: The number of copies of the topic. This parameter can only be specified if the LocalTopic value is true. The number of copies is limited to 1~3. Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "instance_id": instance_id,
            "remark": remark,
            "topic": topic,
        }
        if compact_topic is not None:
            self._values["compact_topic"] = compact_topic
        if config is not None:
            self._values["config"] = config
        if local_topic is not None:
            self._values["local_topic"] = local_topic
        if min_insync_replicas is not None:
            self._values["min_insync_replicas"] = min_insync_replicas
        if partition_num is not None:
            self._values["partition_num"] = partition_num
        if replication_factor is not None:
            self._values["replication_factor"] = replication_factor

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.

        You can call the GetInstanceList operation to query instances.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def remark(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property remark: The description of the topic.

        The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        '''
        result = self._values.get("remark")
        assert result is not None, "Required property 'remark' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def topic(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property topic: The name of the topic.

        The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        '''
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def compact_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property compactTopic: The log cleanup policy for the topic.

        This parameter is available when the Local Storage mode is specified for the topic. Valid values:
        false: uses the default log cleanup policy.
        true: uses the Apache Kafka log compaction policy.
        '''
        result = self._values.get("compact_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property config: Supplementary configuration.

        Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
        This parameter can only be specified if the LocalTopic value is true.
        NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def local_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property localTopic: The storage engine of the topic.

        Valid values:
        false: the Cloud Storage mode.
        true: the Local Storage mode.
        '''
        result = self._values.get("local_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def min_insync_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property minInsyncReplicas: The minimum number of ISR sync replicas.

        This parameter can only be specified if the LocalTopic value is true.
        The value must be less than the number of Topic copies.
        The number of synchronous replicas is limited to 1~3.
        '''
        result = self._values.get("min_insync_replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property partitionNum: The number of partitions in the topic.

        Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        '''
        result = self._values.get("partition_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property replicationFactor: The number of copies of the topic.

        This parameter can only be specified if the LocalTopic value is true.
        The number of copies is limited to 1~3.
        Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
    "RosTopic",
    "RosTopicProps",
    "Topic",
    "TopicProps",
]

publication.publish()
