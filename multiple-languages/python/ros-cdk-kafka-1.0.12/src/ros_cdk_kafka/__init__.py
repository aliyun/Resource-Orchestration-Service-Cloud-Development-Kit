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

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.Instance",
):
    '''A ROS resource type:  ``ALIYUN::KAFKA::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5443d10bbefc22c9269d268fc3f631a0135b9f3154677e49893b262da6804b90)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainEndpoint")
    def attr_domain_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainEndpoint: The default endpoints of the instance in domain name mode.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Endpoint: The SSL endpoints of the instance in IP address mode.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: Id of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: Name of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: Id of the order.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSaslDomainEndpoint")
    def attr_sasl_domain_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SaslDomainEndpoint: The Simple Authentication and Security Layer (SASL) endpoints of the instance in domain name mode.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSaslDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrSslDomainEndpoint")
    def attr_ssl_domain_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SslDomainEndpoint: The SSL endpoints of the instance in domain name mode.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSslDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrSslEndpoint")
    def attr_ssl_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SslEndpoint: The SSL endpoints of the instance in IP address mode.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSslEndpoint"))


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
        deploy_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic_quota: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosInstance.DeployOptionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        eip_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_max_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        open_connector: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosInstance.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25c4e18ec018d9ba58e1e15577102bd0e4f8fd83aa96695297d5c0a4367670a2)
            check_type(argname="argument deploy_type", value=deploy_type, expected_type=type_hints["deploy_type"])
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            check_type(argname="argument topic_quota", value=topic_quota, expected_type=type_hints["topic_quota"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument deploy_option", value=deploy_option, expected_type=type_hints["deploy_option"])
            check_type(argname="argument eip_max", value=eip_max, expected_type=type_hints["eip_max"])
            check_type(argname="argument io_max", value=io_max, expected_type=type_hints["io_max"])
            check_type(argname="argument io_max_spec", value=io_max_spec, expected_type=type_hints["io_max_spec"])
            check_type(argname="argument open_connector", value=open_connector, expected_type=type_hints["open_connector"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument spec_type", value=spec_type, expected_type=type_hints["spec_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def deploy_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property deployType: The deployment mode of the Message Queue for Apache Kafka instance.

        Valid values:
        4: Instance of the public type
        5: Instance of the VPC type
        '''
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.'''
        result = self._values.get("disk_size")
        assert result is not None, "Required property 'disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance.

        Valid values:
        0: Ultra disk
        1: SSD
        '''
        result = self._values.get("disk_type")
        assert result is not None, "Required property 'disk_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic_quota(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.

        The default value of this parameter varies with different peak traffic values.
        Additional fees are charged if the default values are exceeded.
        Different specifications have different default values, and extra fees are charged.
        For more information, see Billing.
        '''
        result = self._values.get("topic_quota")
        assert result is not None, "Required property 'topic_quota' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance.

        Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy_option(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DeployOptionProperty"]]:
        '''Property deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required.'''
        result = self._values.get("deploy_option")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DeployOptionProperty"]], result)

    @builtins.property
    def eip_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.

        This parameter must be specified when the DeployType parameter is set to 4.
        '''
        result = self._values.get("eip_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.

        For more information about the value range, see Billing.
        '''
        result = self._values.get("io_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_max_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ioMaxSpec: Flow specification (recommended)  The IoMax and IoMaxSpec must be optional.

        When filling in at the same time, subject to IoMaxSpec.
        It is recommended that you only fill in the flow specification
        '''
        result = self._values.get("io_max_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def open_connector(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property openConnector: Whether open kafka connector or not.'''
        result = self._values.get("open_connector")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: Pay by hour or month.'''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property specType: The edition of the Message Queue for Apache Kafka instance.

        Valid values:
        professional: Professional Edition
        normal: Normal version
        '''
        result = self._values.get("spec_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::KAFKA::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::KAFKA::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e7e9e49e86ffda5613782114e9100783c1b804308e54b77f4d9caef430bcda5)
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
            type_hints = typing.get_type_hints(_typecheckingstub__125b951a66915d6b7d2f45a0f7344e26c7a8262e821f915db5c8187cfdf36205)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainEndpoint")
    def attr_domain_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainEndpoint: The default endpoints of the instance in domain name mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Endpoint: The SSL endpoints of the instance in IP address mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Id of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: Name of the instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: Id of the order.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrSaslDomainEndpoint")
    def attr_sasl_domain_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SaslDomainEndpoint: The Simple Authentication and Security Layer (SASL) endpoints of the instance in domain name mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSaslDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrSslDomainEndpoint")
    def attr_ssl_domain_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SslDomainEndpoint: The SSL endpoints of the instance in domain name mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSslDomainEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrSslEndpoint")
    def attr_ssl_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SslEndpoint: The SSL endpoints of the instance in IP address mode.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSslEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="deployType")
    def deploy_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
        4: Instance of the public type
        5: Instance of the VPC type
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "deployType"))

    @deploy_type.setter
    def deploy_type(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d5c31494c0d5fe69235c28f0fb24f9fd08c13fc8d24f18d63f9a9cfce982e6c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deployType", value)

    @builtins.property
    @jsii.member(jsii_name="diskSize")
    def disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "diskSize"))

    @disk_size.setter
    def disk_size(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86ad40cb3f7342b5d391758661072264426f3ab1b0f47b856a0a9135f509b3e8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskSize", value)

    @builtins.property
    @jsii.member(jsii_name="diskType")
    def disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
        0: Ultra disk
        1: SSD
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "diskType"))

    @disk_type.setter
    def disk_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf33aceb916b6e49cab31c9b1331d1cdbca7711ccfc85f74458017a73109f912)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "diskType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e028a42e04049aef2168ab11ce27f0886e6f3e32d4b27fb913c78c05dd2fd6f5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="topicQuota")
    def topic_quota(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        topicQuota: The number of topics to be configured for the Message Queue for Apache Kafka instance.
        The default value of this parameter varies with different peak traffic values.
        Additional fees are charged if the default values are exceeded.
        Different specifications have different default values, and extra fees are charged.
        For more information, see Billing.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "topicQuota"))

    @topic_quota.setter
    def topic_quota(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb29966d06b76e5c00b6e1a6cea35d1cbfe3f18615b7c998e8bf8536acbfa43d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topicQuota", value)

    @builtins.property
    @jsii.member(jsii_name="deletionForce")
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionForce"))

    @deletion_force.setter
    def deletion_force(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__266760183f657b9aae501817ac3b4e565edeb807d34e6388132846f0838a48ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionForce", value)

    @builtins.property
    @jsii.member(jsii_name="deployOption")
    def deploy_option(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DeployOptionProperty"]]:
        '''
        :Property: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DeployOptionProperty"]], jsii.get(self, "deployOption"))

    @deploy_option.setter
    def deploy_option(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosInstance.DeployOptionProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1da1256dbe455e851c1958dac60b7087507d97a392d4412ebf08d5551ae9d9cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deployOption", value)

    @builtins.property
    @jsii.member(jsii_name="eipMax")
    def eip_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
        This parameter must be specified when the DeployType parameter is set to 4.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eipMax"))

    @eip_max.setter
    def eip_max(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0df8402b06c3e3e7e8cf490f8c81d0313c8591e2ba287816249231c5762ba586)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eipMax", value)

    @builtins.property
    @jsii.member(jsii_name="ioMax")
    def io_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
        For more information about the value range, see Billing.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ioMax"))

    @io_max.setter
    def io_max(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__004ebc5a30a2a5a9e9439db40cd3996b2ff5df89c5fa8af14ecd9ce8781e7fe5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ioMax", value)

    @builtins.property
    @jsii.member(jsii_name="ioMaxSpec")
    def io_max_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioMaxSpec: Flow specification (recommended)
        The IoMax and IoMaxSpec must be optional.
        When filling in at the same time, subject to IoMaxSpec.
        It is recommended that you only fill in the flow specification
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ioMaxSpec"))

    @io_max_spec.setter
    def io_max_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01e9d35d5075607f6bab99dd6f04c2cf0b0a6de93648e9e0d16e3260975104e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ioMaxSpec", value)

    @builtins.property
    @jsii.member(jsii_name="openConnector")
    def open_connector(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: openConnector: Whether open kafka connector or not
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "openConnector"))

    @open_connector.setter
    def open_connector(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52b105fe045ed76bc997d41e2aac7e7282c90e88054b4db20db0d048451353ad)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "openConnector", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: Pay by hour or month.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0eb2050bba774d316b9feaf7926e1f1d8a00077ad8f3f378efe512d41ab00a8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="specType")
    def spec_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
        professional: Professional Edition
        normal: Normal version
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "specType"))

    @spec_type.setter
    def spec_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31c9712d23a47883b13b6e088748efb57ac500595f37d00f4d7f5ac4e2eb9202)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "specType", value)

    @builtins.property
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9799e86b7d76e0d25e86bb6e099348f4d5a5caa21616b038f92ede40a49e738)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
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
            deploy_module: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
            is_eip_inner: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            is_set_user_and_password: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            security_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            service_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
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
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__94fe64261deb08e963f13295caa651d44dd4c2963c23019ae132eab6a2f2b4ac)
                check_type(argname="argument deploy_module", value=deploy_module, expected_type=type_hints["deploy_module"])
                check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
                check_type(argname="argument config", value=config, expected_type=type_hints["config"])
                check_type(argname="argument is_eip_inner", value=is_eip_inner, expected_type=type_hints["is_eip_inner"])
                check_type(argname="argument is_set_user_and_password", value=is_set_user_and_password, expected_type=type_hints["is_set_user_and_password"])
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument password", value=password, expected_type=type_hints["password"])
                check_type(argname="argument security_group", value=security_group, expected_type=type_hints["security_group"])
                check_type(argname="argument service_version", value=service_version, expected_type=type_hints["service_version"])
                check_type(argname="argument username", value=username, expected_type=type_hints["username"])
                check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
                check_type(argname="argument zone_id", value=zone_id, expected_type=type_hints["zone_id"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
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
        def deploy_module(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_switch_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vSwitchId: The ID of the vSwitch associated with the VPC.
            '''
            result = self._values.get("v_switch_id")
            assert result is not None, "Required property 'v_switch_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def config(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
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
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

        @builtins.property
        def is_eip_inner(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            isEipInner: Specifies whether the instance supports elastic IP addresses (EIPs). Valid values:
            true: The instance supports EIP mode.
            false: The instance does not support EIP mode.
            This parameter must be consistent with the instance type.
            Set the parameter to true for instances of the Internet and VPC type or to false for instances of the VPC type.
            '''
            result = self._values.get("is_eip_inner")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def is_set_user_and_password(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            isSetUserAndPassword: Specifies whether to set a new user name and password for instance. Valid values:
            true: Set a new user name and password.
            false: Do not set a new user name and password.
            This parameter is supported only for instances of the Internet and VPC type.
            '''
            result = self._values.get("is_set_user_and_password")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def name(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: name: The new name of the instance.
            '''
            result = self._values.get("name")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def password(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            password: The new password for the instance.
            This parameter is supported only for instances of the Internet and VPC type.
            Support characters (uppercase and lowercase), numbers, length 8-40,
            containing at least one lowercase letter, one uppercase letter, and one number
            '''
            result = self._values.get("password")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def security_group(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            securityGroup: The security group of the instance.
            If you do not specify this parameter, Message Queue for Apache Kafka automatically
            configures a security group for the instance. If you specify this parameter,
            you must create the specified security group in advance.
            For more information, see Create a security group.
            '''
            result = self._values.get("security_group")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def service_version(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serviceVersion: The version of the Message Queue for Apache Kafka instance. For example: 0.10.2, 2.2.0 and etc.
            '''
            result = self._values.get("service_version")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def username(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            username: The new user name for the instance.
            This parameter is supported only for instances of the Internet and VPC type.
            Support characters (uppercase and lowercase), numbers, length 8-40
            '''
            result = self._values.get("username")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcId: The ID of the VPC on which you want to deploy the instance.
            '''
            result = self._values.get("vpc_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def zone_id(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            zoneId: The ID of the zone where you want to deploy the instance.
            The zone ID of the instance must be the same as that of the vSwitch.
            '''
            result = self._values.get("zone_id")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__c862bf2c2b8bbdecfa8448644ecae8f7a3e8ead229311c7e1b51471918a20906)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
        deploy_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic_quota: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deploy_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.DeployOptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        eip_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        io_max_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        open_connector: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        spec_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67825981dd5d97d8902e6f88ec121471c4cef9b6b20dd99b3e239d3402220369)
            check_type(argname="argument deploy_type", value=deploy_type, expected_type=type_hints["deploy_type"])
            check_type(argname="argument disk_size", value=disk_size, expected_type=type_hints["disk_size"])
            check_type(argname="argument disk_type", value=disk_type, expected_type=type_hints["disk_type"])
            check_type(argname="argument topic_quota", value=topic_quota, expected_type=type_hints["topic_quota"])
            check_type(argname="argument deletion_force", value=deletion_force, expected_type=type_hints["deletion_force"])
            check_type(argname="argument deploy_option", value=deploy_option, expected_type=type_hints["deploy_option"])
            check_type(argname="argument eip_max", value=eip_max, expected_type=type_hints["eip_max"])
            check_type(argname="argument io_max", value=io_max, expected_type=type_hints["io_max"])
            check_type(argname="argument io_max_spec", value=io_max_spec, expected_type=type_hints["io_max_spec"])
            check_type(argname="argument open_connector", value=open_connector, expected_type=type_hints["open_connector"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument spec_type", value=spec_type, expected_type=type_hints["spec_type"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
    def deploy_type(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        deployType: The deployment mode of the Message Queue for Apache Kafka instance. Valid values:
        4: Instance of the public type
        5: Instance of the VPC type
        '''
        result = self._values.get("deploy_type")
        assert result is not None, "Required property 'deploy_type' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def disk_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: diskSize: The size of the disk to be configured for the Message Queue for Apache Kafka instance.
        '''
        result = self._values.get("disk_size")
        assert result is not None, "Required property 'disk_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def disk_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        diskType: The type of the disk to be configured for the Message Queue for Apache Kafka instance. Valid values:
        0: Ultra disk
        1: SSD
        '''
        result = self._values.get("disk_type")
        assert result is not None, "Required property 'disk_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic_quota(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def deletion_force(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionForce: Whether delete all topics, consumer groups of the kafka instance and then delete instance. Default is false
        '''
        result = self._values.get("deletion_force")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deploy_option(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.DeployOptionProperty]]:
        '''
        :Property: deployOption: If you want to deploy instance after create at once, the VSwitchId and DeployModule parameters is required
        '''
        result = self._values.get("deploy_option")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.DeployOptionProperty]], result)

    @builtins.property
    def eip_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        eipMax: The public traffic to be configured for the Message Queue for Apache Kafka instance.
        This parameter must be specified when the DeployType parameter is set to 4.
        '''
        result = self._values.get("eip_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_max(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioMax: The peak traffic to be configured for the Message Queue for Apache Kafka instance.
        For more information about the value range, see Billing.
        '''
        result = self._values.get("io_max")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def io_max_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ioMaxSpec: Flow specification (recommended)
        The IoMax and IoMaxSpec must be optional.
        When filling in at the same time, subject to IoMaxSpec.
        It is recommended that you only fill in the flow specification
        '''
        result = self._values.get("io_max_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def open_connector(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: openConnector: Whether open kafka connector or not
        '''
        result = self._values.get("open_connector")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: payType: Pay by hour or month.
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def spec_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        specType: The edition of the Message Queue for Apache Kafka instance. Valid values:
        professional: Professional Edition
        normal: Normal version
        '''
        result = self._values.get("spec_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

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
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.RosTopic",
):
    '''A ROS template type:  ``ALIYUN::KAFKA::Topic``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTopicProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::KAFKA::Topic``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__160be9ef6820de1cc6b7a9f91756870e5ef390481d80f022b162b7d2640e84a8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9a89f8c6f1a477a7123db3a9558be1b5cea5353e1f7ba473b4b387924d999c4a)
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
        :Attribute:

        InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Topic: Topic name.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopic"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2be8c0cc96cd02d19d1b17da35b606d1da9f89b134eafa1f4fb14e46bd738f3c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0aec3ba1d54419732c273bf2f0ada355d50f2a32536e3fc1bee7ef070acfe8b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        remark: The description of the topic. The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0955eafa540a32cf7e4322b1e3c5d4989ac22d24fb48673e11e3ada75d940f31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)

    @builtins.property
    @jsii.member(jsii_name="topic")
    def topic(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        topic: The name of the topic. The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "topic"))

    @topic.setter
    def topic(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__89f4ae109f8654689575b2840f9938a50a1594314c9a5bdfd9d3ec47de212111)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "topic", value)

    @builtins.property
    @jsii.member(jsii_name="compactTopic")
    def compact_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values:
        false: uses the default log cleanup policy.
        true: uses the Apache Kafka log compaction policy.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "compactTopic"))

    @compact_topic.setter
    def compact_topic(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc9b5cf844ddeb8b0a01d291e521f4b788cfce35ce53b0aa395d796e18d3d72c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "compactTopic", value)

    @builtins.property
    @jsii.member(jsii_name="config")
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        config: Supplementary configuration.
        Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
        This parameter can only be specified if the LocalTopic value is true.
        NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], jsii.get(self, "config"))

    @config.setter
    def config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__739312b7fd20301fee203513e29f4339202e633b89767d501bfcde16624d9640)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "config", value)

    @builtins.property
    @jsii.member(jsii_name="localTopic")
    def local_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localTopic: The storage engine of the topic. Valid values:
        false: the Cloud Storage mode.
        true: the Local Storage mode.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "localTopic"))

    @local_topic.setter
    def local_topic(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a830387d3faa3ae76e0a1e0c77bc89661eebc91e788901a9b1571964065b1ba1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "localTopic", value)

    @builtins.property
    @jsii.member(jsii_name="minInsyncReplicas")
    def min_insync_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        minInsyncReplicas: The minimum number of ISR sync replicas.
        This parameter can only be specified if the LocalTopic value is true.
        The value must be less than the number of Topic copies.
        The number of synchronous replicas is limited to 1~3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "minInsyncReplicas"))

    @min_insync_replicas.setter
    def min_insync_replicas(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5df2bd0ca0d1ea8be959750e6509f3556b614f20bd614072c4fef1e82c0cba5e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "minInsyncReplicas", value)

    @builtins.property
    @jsii.member(jsii_name="partitionNum")
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        partitionNum: The number of partitions in the topic. Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "partitionNum"))

    @partition_num.setter
    def partition_num(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d6223dbf0afc2c99c93aa773e02be654e490b4be200f6113d9dd81da308e8727)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "partitionNum", value)

    @builtins.property
    @jsii.member(jsii_name="replicationFactor")
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        replicationFactor: The number of copies of the topic.
        This parameter can only be specified if the LocalTopic value is true.
        The number of copies is limited to 1~3.
        Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "replicationFactor"))

    @replication_factor.setter
    def replication_factor(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e2f251a7895b5bff3bef3e5f96e77dc507c7a638e20a9043c12dcb843b1c6e6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "replicationFactor", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosTopic.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosTopic.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosTopic.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00de779235fc02b3975151d00f69db32201014a7667f0e4a6286dfb8102cfb76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-kafka.RosTopic.TagsProperty",
        jsii_struct_bases=[],
        name_mapping={"key": "key", "value": "value"},
    )
    class TagsProperty:
        def __init__(
            self,
            *,
            key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__246a35c616f40275eb7b60e94c79957e21bb45f8f8c78f57d0631526ede3147b)
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
                check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


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
        "tags": "tags",
    },
)
class RosTopicProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        compact_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        local_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        min_insync_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosTopic.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7934985224c4d815a09dfd1883f9ead5f5e06e98dd7cbbb35a71311a22cef871)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument topic", value=topic, expected_type=type_hints["topic"])
            check_type(argname="argument compact_topic", value=compact_topic, expected_type=type_hints["compact_topic"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
            check_type(argname="argument local_topic", value=local_topic, expected_type=type_hints["local_topic"])
            check_type(argname="argument min_insync_replicas", value=min_insync_replicas, expected_type=type_hints["min_insync_replicas"])
            check_type(argname="argument partition_num", value=partition_num, expected_type=type_hints["partition_num"])
            check_type(argname="argument replication_factor", value=replication_factor, expected_type=type_hints["replication_factor"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.
        You can call the GetInstanceList operation to query instances.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        remark: The description of the topic. The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        '''
        result = self._values.get("remark")
        assert result is not None, "Required property 'remark' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
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
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def compact_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        compactTopic: The log cleanup policy for the topic. This parameter is available when the Local Storage mode is specified for the topic. Valid values:
        false: uses the default log cleanup policy.
        true: uses the Apache Kafka log compaction policy.
        '''
        result = self._values.get("compact_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''
        :Property:

        config: Supplementary configuration.
        Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
        This parameter can only be specified if the LocalTopic value is true.
        NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def local_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        localTopic: The storage engine of the topic. Valid values:
        false: the Cloud Storage mode.
        true: the Local Storage mode.
        '''
        result = self._values.get("local_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def min_insync_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        minInsyncReplicas: The minimum number of ISR sync replicas.
        This parameter can only be specified if the LocalTopic value is true.
        The value must be less than the number of Topic copies.
        The number of synchronous replicas is limited to 1~3.
        '''
        result = self._values.get("min_insync_replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        partitionNum: The number of partitions in the topic. Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        '''
        result = self._values.get("partition_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        replicationFactor: The number of copies of the topic.
        This parameter can only be specified if the LocalTopic value is true.
        The number of copies is limited to 1~3.
        Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosTopic.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosTopic.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTopicProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Topic(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-kafka.Topic",
):
    '''A ROS resource type:  ``ALIYUN::KAFKA::Topic``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TopicProps", typing.Dict[builtins.str, typing.Any]],
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
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5332659ab4aad27a09d0d98fb75e57a366e649faf8942096da3cd7711836d4f)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.

        You can call the GetInstanceList operation to query instances.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrTopic")
    def attr_topic(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Topic: Topic name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTopic"))


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
        "tags": "tags",
    },
)
class TopicProps:
    def __init__(
        self,
        *,
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        remark: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        topic: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        compact_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        local_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        min_insync_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosTopic.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
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
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2774e4d4e724454236a4b844b6d52626be36ba5d97a20999275a210ee7c47bae)
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
            check_type(argname="argument topic", value=topic, expected_type=type_hints["topic"])
            check_type(argname="argument compact_topic", value=compact_topic, expected_type=type_hints["compact_topic"])
            check_type(argname="argument config", value=config, expected_type=type_hints["config"])
            check_type(argname="argument local_topic", value=local_topic, expected_type=type_hints["local_topic"])
            check_type(argname="argument min_insync_replicas", value=min_insync_replicas, expected_type=type_hints["min_insync_replicas"])
            check_type(argname="argument partition_num", value=partition_num, expected_type=type_hints["partition_num"])
            check_type(argname="argument replication_factor", value=replication_factor, expected_type=type_hints["replication_factor"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
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
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the Message Queue for Apache Kafka instance where the topic is located.

        You can call the GetInstanceList operation to query instances.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def remark(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property remark: The description of the topic.

        The value of this parameter must meet the following
        requirements:
        The value can only contain letters, digits, hyphens (-), and underscores (_).
        The value must be 3 to 64 characters in length.
        '''
        result = self._values.get("remark")
        assert result is not None, "Required property 'remark' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def topic(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property topic: The name of the topic.

        The value of this parameter must meet the following requirements:
        The name can only contain letters, digits, hyphens (-), and underscores (_).
        The name must be 3 to 64 characters in length, and will be automatically truncated
        if it contains more characters.
        The name cannot be modified after being created.
        '''
        result = self._values.get("topic")
        assert result is not None, "Required property 'topic' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def compact_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property compactTopic: The log cleanup policy for the topic.

        This parameter is available when the Local Storage mode is specified for the topic. Valid values:
        false: uses the default log cleanup policy.
        true: uses the Apache Kafka log compaction policy.
        '''
        result = self._values.get("compact_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        '''Property config: Supplementary configuration.

        Currently supports Key as replications. Indicates the number of Topic copies, the value type is Integer, and the value limit is 1~3.
        This parameter can only be specified if the LocalTopic value is true.
        NOTE If replications is specified in this parameter, the specified ReplicationFactor parameter no longer takes effect.
        '''
        result = self._values.get("config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]], result)

    @builtins.property
    def local_topic(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property localTopic: The storage engine of the topic.

        Valid values:
        false: the Cloud Storage mode.
        true: the Local Storage mode.
        '''
        result = self._values.get("local_topic")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def min_insync_replicas(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property minInsyncReplicas: The minimum number of ISR sync replicas.

        This parameter can only be specified if the LocalTopic value is true.
        The value must be less than the number of Topic copies.
        The number of synchronous replicas is limited to 1~3.
        '''
        result = self._values.get("min_insync_replicas")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def partition_num(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property partitionNum: The number of partitions in the topic.

        Valid values:
        1 to 48
        We recommend that you set the number of partitions to a multiple of 6 to reduce the
        risk of data skew.Note:For special requirements,submit a ticket.
        '''
        result = self._values.get("partition_num")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def replication_factor(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property replicationFactor: The number of copies of the topic.

        This parameter can only be specified if the LocalTopic value is true.
        The number of copies is limited to 1~3.
        Note When the number of replicas is 1, there is a risk of data loss. Please set it carefully.
        '''
        result = self._values.get("replication_factor")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosTopic.TagsProperty]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosTopic.TagsProperty]], result)

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

def _typecheckingstub__5443d10bbefc22c9269d268fc3f631a0135b9f3154677e49893b262da6804b90(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25c4e18ec018d9ba58e1e15577102bd0e4f8fd83aa96695297d5c0a4367670a2(
    *,
    deploy_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic_quota: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.DeployOptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    eip_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_max_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    open_connector: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e7e9e49e86ffda5613782114e9100783c1b804308e54b77f4d9caef430bcda5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__125b951a66915d6b7d2f45a0f7344e26c7a8262e821f915db5c8187cfdf36205(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d5c31494c0d5fe69235c28f0fb24f9fd08c13fc8d24f18d63f9a9cfce982e6c(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86ad40cb3f7342b5d391758661072264426f3ab1b0f47b856a0a9135f509b3e8(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf33aceb916b6e49cab31c9b1331d1cdbca7711ccfc85f74458017a73109f912(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e028a42e04049aef2168ab11ce27f0886e6f3e32d4b27fb913c78c05dd2fd6f5(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb29966d06b76e5c00b6e1a6cea35d1cbfe3f18615b7c998e8bf8536acbfa43d(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__266760183f657b9aae501817ac3b4e565edeb807d34e6388132846f0838a48ef(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1da1256dbe455e851c1958dac60b7087507d97a392d4412ebf08d5551ae9d9cd(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosInstance.DeployOptionProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0df8402b06c3e3e7e8cf490f8c81d0313c8591e2ba287816249231c5762ba586(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__004ebc5a30a2a5a9e9439db40cd3996b2ff5df89c5fa8af14ecd9ce8781e7fe5(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01e9d35d5075607f6bab99dd6f04c2cf0b0a6de93648e9e0d16e3260975104e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52b105fe045ed76bc997d41e2aac7e7282c90e88054b4db20db0d048451353ad(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0eb2050bba774d316b9feaf7926e1f1d8a00077ad8f3f378efe512d41ab00a8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31c9712d23a47883b13b6e088748efb57ac500595f37d00f4d7f5ac4e2eb9202(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9799e86b7d76e0d25e86bb6e099348f4d5a5caa21616b038f92ede40a49e738(
    value: typing.Optional[typing.List[RosInstance.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94fe64261deb08e963f13295caa651d44dd4c2963c23019ae132eab6a2f2b4ac(
    *,
    deploy_module: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    is_eip_inner: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_set_user_and_password: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    security_group: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    service_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    username: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c862bf2c2b8bbdecfa8448644ecae8f7a3e8ead229311c7e1b51471918a20906(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67825981dd5d97d8902e6f88ec121471c4cef9b6b20dd99b3e239d3402220369(
    *,
    deploy_type: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    disk_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    disk_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic_quota: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    deletion_force: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deploy_option: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosInstance.DeployOptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    eip_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    io_max_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    open_connector: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    spec_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosInstance.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__160be9ef6820de1cc6b7a9f91756870e5ef390481d80f022b162b7d2640e84a8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a89f8c6f1a477a7123db3a9558be1b5cea5353e1f7ba473b4b387924d999c4a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2be8c0cc96cd02d19d1b17da35b606d1da9f89b134eafa1f4fb14e46bd738f3c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0aec3ba1d54419732c273bf2f0ada355d50f2a32536e3fc1bee7ef070acfe8b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0955eafa540a32cf7e4322b1e3c5d4989ac22d24fb48673e11e3ada75d940f31(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__89f4ae109f8654689575b2840f9938a50a1594314c9a5bdfd9d3ec47de212111(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc9b5cf844ddeb8b0a01d291e521f4b788cfce35ce53b0aa395d796e18d3d72c(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__739312b7fd20301fee203513e29f4339202e633b89767d501bfcde16624d9640(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a830387d3faa3ae76e0a1e0c77bc89661eebc91e788901a9b1571964065b1ba1(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5df2bd0ca0d1ea8be959750e6509f3556b614f20bd614072c4fef1e82c0cba5e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6223dbf0afc2c99c93aa773e02be654e490b4be200f6113d9dd81da308e8727(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e2f251a7895b5bff3bef3e5f96e77dc507c7a638e20a9043c12dcb843b1c6e6(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00de779235fc02b3975151d00f69db32201014a7667f0e4a6286dfb8102cfb76(
    value: typing.Optional[typing.List[RosTopic.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__246a35c616f40275eb7b60e94c79957e21bb45f8f8c78f57d0631526ede3147b(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7934985224c4d815a09dfd1883f9ead5f5e06e98dd7cbbb35a71311a22cef871(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    compact_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    local_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_insync_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosTopic.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5332659ab4aad27a09d0d98fb75e57a366e649faf8942096da3cd7711836d4f(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TopicProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2774e4d4e724454236a4b844b6d52626be36ba5d97a20999275a210ee7c47bae(
    *,
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    remark: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    topic: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    compact_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    local_topic: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    min_insync_replicas: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    partition_num: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    replication_factor: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosTopic.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
