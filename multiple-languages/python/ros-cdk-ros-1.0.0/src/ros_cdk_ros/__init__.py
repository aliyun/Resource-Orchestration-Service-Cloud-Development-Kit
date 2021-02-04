"""
## Aliyun ROS ROS Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_ros as ROS
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


class AutoEnableService(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.AutoEnableService",
):
    """A ROS resource type:  ``ALIYUN::ROS::AutoEnableService``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AutoEnableServiceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ROS::AutoEnableService``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AutoEnableService, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.AutoEnableServiceProps",
    jsii_struct_bases=[],
    name_mapping={"service_name": "serviceName"},
)
class AutoEnableServiceProps:
    def __init__(self, *, service_name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::ROS::AutoEnableService``.

        :param service_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "service_name": service_name,
        }

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property:

        serviceName: Which service to enable. Valid values:
        AHAS: Application High Availability Service
        ARMS: Realtime Monitoring Service
        ApiGateway: API Gateway
        BatchCompute: Batch Compute
        CMS: Cloud Monitor Service
        DataHub: Data Hub
        EMAS: Enterprise Mobile Application Studio
        FC: Function Compute
        NAS: Network Attached Storage
        HBR: Hybrid Backup Recovery
        IMM: Intelligent Media Management
        KMS: Key Management Service
        NLP: Natural Language Processing
        OSS: Object Storage Service
        OTS: Table Store
        PrivateLink: Private Link
        RocketMQ: RocketMQ
        SLS: Log Service
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AutoEnableServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class CustomResource(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.CustomResource",
):
    """A ROS resource type:  ``ALIYUN::ROS::CustomResource``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CustomResourceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ROS::CustomResource``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(CustomResource, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> typing.Any:
        """
        :Attribute: Outputs: Output data received from service provider.
        """
        return jsii.get(self, "attrOutputs")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.CustomResourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "service_token": "serviceToken",
        "timeout": "timeout",
        "parameters": "parameters",
    },
)
class CustomResourceProps:
    def __init__(
        self,
        *,
        service_token: builtins.str,
        timeout: jsii.Number,
        parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROS::CustomResource``.

        :param service_token: 
        :param timeout: 
        :param parameters: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "service_token": service_token,
            "timeout": timeout,
        }
        if parameters is not None:
            self._values["parameters"] = parameters

    @builtins.property
    def service_token(self) -> builtins.str:
        """
        :Property:

        serviceToken: The service token that was given to the template developer by the service provider to access the service.
        Allowed values:

        - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
        - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
        - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
        - HTTP&HTTPS: web[options]:
        Two options are supported:
        - sync: sync HTTP&HTTPS request.
        - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
        Examples:
        - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
        - acs:mns:cn-hangzhou:123456789:queues/test-queue
        - acs:mns:cn-hangzhou:123456789:/queues/test-queue
        - acs:mns:cn-hangzhou:123456789:topics/test-topic
        - acs:mns:cn-hangzhou:123456789:/topics/test-topic
        - web:https://abc.com
        - web[sync]:http://abc.com
        - web[sync,idempotent]:https://abc.com
        """
        result = self._values.get("service_token")
        assert result is not None, "Required property 'service_token' is missing"
        return result

    @builtins.property
    def timeout(self) -> jsii.Number:
        """
        :Property:

        timeout: Timeout seconds before service provider responses.
        It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
        Timeout seconds are always 10 for sync HTTP&HTTPS request.
        """
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return result

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: parameters: Parameters to be passed to service provider.
        """
        result = self._values.get("parameters")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CustomResourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAutoEnableService(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosAutoEnableService",
):
    """A ROS template type:  ``ALIYUN::ROS::AutoEnableService``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAutoEnableServiceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ROS::AutoEnableService``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAutoEnableService, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceName")
    def service_name(self) -> builtins.str:
        """
        :Property:

        serviceName: Which service to enable. Valid values:
        AHAS: Application High Availability Service
        ARMS: Realtime Monitoring Service
        ApiGateway: API Gateway
        BatchCompute: Batch Compute
        CMS: Cloud Monitor Service
        DataHub: Data Hub
        EMAS: Enterprise Mobile Application Studio
        FC: Function Compute
        NAS: Network Attached Storage
        HBR: Hybrid Backup Recovery
        IMM: Intelligent Media Management
        KMS: Key Management Service
        NLP: Natural Language Processing
        OSS: Object Storage Service
        OTS: Table Store
        PrivateLink: Private Link
        RocketMQ: RocketMQ
        SLS: Log Service
        """
        return jsii.get(self, "serviceName")

    @service_name.setter # type: ignore
    def service_name(self, value: builtins.str) -> None:
        jsii.set(self, "serviceName", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosAutoEnableServiceProps",
    jsii_struct_bases=[],
    name_mapping={"service_name": "serviceName"},
)
class RosAutoEnableServiceProps:
    def __init__(self, *, service_name: builtins.str) -> None:
        """Properties for defining a ``ALIYUN::ROS::AutoEnableService``.

        :param service_name: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "service_name": service_name,
        }

    @builtins.property
    def service_name(self) -> builtins.str:
        """
        :Property:

        serviceName: Which service to enable. Valid values:
        AHAS: Application High Availability Service
        ARMS: Realtime Monitoring Service
        ApiGateway: API Gateway
        BatchCompute: Batch Compute
        CMS: Cloud Monitor Service
        DataHub: Data Hub
        EMAS: Enterprise Mobile Application Studio
        FC: Function Compute
        NAS: Network Attached Storage
        HBR: Hybrid Backup Recovery
        IMM: Intelligent Media Management
        KMS: Key Management Service
        NLP: Natural Language Processing
        OSS: Object Storage Service
        OTS: Table Store
        PrivateLink: Private Link
        RocketMQ: RocketMQ
        SLS: Log Service
        """
        result = self._values.get("service_name")
        assert result is not None, "Required property 'service_name' is missing"
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAutoEnableServiceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCustomResource(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosCustomResource",
):
    """A ROS template type:  ``ALIYUN::ROS::CustomResource``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCustomResourceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ROS::CustomResource``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosCustomResource, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrOutputs")
    def attr_outputs(self) -> typing.Any:
        """
        :Attribute: Outputs: Output data received from service provider.
        """
        return jsii.get(self, "attrOutputs")

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
    @jsii.member(jsii_name="serviceToken")
    def service_token(self) -> builtins.str:
        """
        :Property:

        serviceToken: The service token that was given to the template developer by the service provider to access the service.
        Allowed values:

        - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
        - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
        - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
        - HTTP&HTTPS: web[options]:
        Two options are supported:
        - sync: sync HTTP&HTTPS request.
        - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
        Examples:
        - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
        - acs:mns:cn-hangzhou:123456789:queues/test-queue
        - acs:mns:cn-hangzhou:123456789:/queues/test-queue
        - acs:mns:cn-hangzhou:123456789:topics/test-topic
        - acs:mns:cn-hangzhou:123456789:/topics/test-topic
        - web:https://abc.com
        - web[sync]:http://abc.com
        - web[sync,idempotent]:https://abc.com
        """
        return jsii.get(self, "serviceToken")

    @service_token.setter # type: ignore
    def service_token(self, value: builtins.str) -> None:
        jsii.set(self, "serviceToken", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="timeout")
    def timeout(self) -> jsii.Number:
        """
        :Property:

        timeout: Timeout seconds before service provider responses.
        It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
        Timeout seconds are always 10 for sync HTTP&HTTPS request.
        """
        return jsii.get(self, "timeout")

    @timeout.setter # type: ignore
    def timeout(self, value: jsii.Number) -> None:
        jsii.set(self, "timeout", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: parameters: Parameters to be passed to service provider.
        """
        return jsii.get(self, "parameters")

    @parameters.setter # type: ignore
    def parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "parameters", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosCustomResourceProps",
    jsii_struct_bases=[],
    name_mapping={
        "service_token": "serviceToken",
        "timeout": "timeout",
        "parameters": "parameters",
    },
)
class RosCustomResourceProps:
    def __init__(
        self,
        *,
        service_token: builtins.str,
        timeout: jsii.Number,
        parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROS::CustomResource``.

        :param service_token: 
        :param timeout: 
        :param parameters: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "service_token": service_token,
            "timeout": timeout,
        }
        if parameters is not None:
            self._values["parameters"] = parameters

    @builtins.property
    def service_token(self) -> builtins.str:
        """
        :Property:

        serviceToken: The service token that was given to the template developer by the service provider to access the service.
        Allowed values:

        - Function Compute: acs:fc:<region_id>:<account_id>:services/<service_name>/functions/<function_name>
        - MNS Queue: acs:mns:<region_id>:<account_id>:queues/<queue_name> or acs:mns:<region_id>:<account_id>:/queues/<queue_name>
        - MNS Topic: acs:mns:<region_id>:<account_id>:topics/<topic_name> or acs:mns:<region_id>:<account_id>:/topics/<topic_name>
        - HTTP&HTTPS: web[options]:
        Two options are supported:
        - sync: sync HTTP&HTTPS request.
        - idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
        Examples:
        - acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function
        - acs:mns:cn-hangzhou:123456789:queues/test-queue
        - acs:mns:cn-hangzhou:123456789:/queues/test-queue
        - acs:mns:cn-hangzhou:123456789:topics/test-topic
        - acs:mns:cn-hangzhou:123456789:/topics/test-topic
        - web:https://abc.com
        - web[sync]:http://abc.com
        - web[sync,idempotent]:https://abc.com
        """
        result = self._values.get("service_token")
        assert result is not None, "Required property 'service_token' is missing"
        return result

    @builtins.property
    def timeout(self) -> jsii.Number:
        """
        :Property:

        timeout: Timeout seconds before service provider responses.
        It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&HTTPS request.
        Timeout seconds are always 10 for sync HTTP&HTTPS request.
        """
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return result

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: parameters: Parameters to be passed to service provider.
        """
        result = self._values.get("parameters")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCustomResourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosStack(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosStack",
):
    """A ROS template type:  ``ALIYUN::ROS::Stack``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosStackProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ROS::Stack``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosStack, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="parameters")
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: parameters: The set of parameters passed to this nested stack.
        """
        return jsii.get(self, "parameters")

    @parameters.setter # type: ignore
    def parameters(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "parameters", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="templateBody")
    def template_body(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property:

        templateBody: Structure containing the template body.
        It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        """
        return jsii.get(self, "templateBody")

    @template_body.setter # type: ignore
    def template_body(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]],
    ) -> None:
        jsii.set(self, "templateBody", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="templateId")
    def template_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: templateId: Template ID of template containing the template body.
        """
        return jsii.get(self, "templateId")

    @template_id.setter # type: ignore
    def template_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "templateId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="templateUrl")
    def template_url(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        """
        return jsii.get(self, "templateUrl")

    @template_url.setter # type: ignore
    def template_url(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "templateUrl", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="templateVersion")
    def template_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: templateVersion: Template version of template containing the template body.
        """
        return jsii.get(self, "templateVersion")

    @template_version.setter # type: ignore
    def template_version(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "templateVersion", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="timeoutMins")
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
        """
        return jsii.get(self, "timeoutMins")

    @timeout_mins.setter # type: ignore
    def timeout_mins(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "timeoutMins", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosStackProps",
    jsii_struct_bases=[],
    name_mapping={
        "parameters": "parameters",
        "template_body": "templateBody",
        "template_id": "templateId",
        "template_url": "templateUrl",
        "template_version": "templateVersion",
        "timeout_mins": "timeoutMins",
    },
)
class RosStackProps:
    def __init__(
        self,
        *,
        parameters: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_body: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_id: typing.Optional[builtins.str] = None,
        template_url: typing.Optional[builtins.str] = None,
        template_version: typing.Optional[builtins.str] = None,
        timeout_mins: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROS::Stack``.

        :param parameters: 
        :param template_body: 
        :param template_id: 
        :param template_url: 
        :param template_version: 
        :param timeout_mins: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if parameters is not None:
            self._values["parameters"] = parameters
        if template_body is not None:
            self._values["template_body"] = template_body
        if template_id is not None:
            self._values["template_id"] = template_id
        if template_url is not None:
            self._values["template_url"] = template_url
        if template_version is not None:
            self._values["template_version"] = template_version
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property: parameters: The set of parameters passed to this nested stack.
        """
        result = self._values.get("parameters")
        return result

    @builtins.property
    def template_body(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property:

        templateBody: Structure containing the template body.
        It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        """
        result = self._values.get("template_body")
        return result

    @builtins.property
    def template_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: templateId: Template ID of template containing the template body.
        """
        result = self._values.get("template_id")
        return result

    @builtins.property
    def template_url(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        """
        result = self._values.get("template_url")
        return result

    @builtins.property
    def template_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: templateVersion: Template version of template containing the template body.
        """
        result = self._values.get("template_version")
        return result

    @builtins.property
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
        """
        result = self._values.get("timeout_mins")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosStackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWaitCondition(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosWaitCondition",
):
    """A ROS template type:  ``ALIYUN::ROS::WaitCondition``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWaitConditionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ROS::WaitCondition``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosWaitCondition, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrData")
    def attr_data(self) -> typing.Any:
        """
        :Attribute: Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
        """
        return jsii.get(self, "attrData")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrErrorData")
    def attr_error_data(self) -> typing.Any:
        """
        :Attribute: ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
        """
        return jsii.get(self, "attrErrorData")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrJoinedErrorData")
    def attr_joined_error_data(self) -> typing.Any:
        """
        :Attribute: JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
        """
        return jsii.get(self, "attrJoinedErrorData")

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
    @jsii.member(jsii_name="handle")
    def handle(self) -> builtins.str:
        """
        :Property: handle: A reference to the wait condition handle used to signal this wait condition.
        """
        return jsii.get(self, "handle")

    @handle.setter # type: ignore
    def handle(self, value: builtins.str) -> None:
        jsii.set(self, "handle", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="timeout")
    def timeout(self) -> jsii.Number:
        """
        :Property: timeout: The number of seconds to wait for the correct number of signals to arrive.
        """
        return jsii.get(self, "timeout")

    @timeout.setter # type: ignore
    def timeout(self, value: jsii.Number) -> None:
        jsii.set(self, "timeout", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="count")
    def count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: count: The number of success signals that must be received before the stack creation process continues.
        """
        return jsii.get(self, "count")

    @count.setter # type: ignore
    def count(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "count", value)


class RosWaitConditionHandle(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.RosWaitConditionHandle",
):
    """A ROS template type:  ``ALIYUN::ROS::WaitConditionHandle``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWaitConditionHandleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::ROS::WaitConditionHandle``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosWaitConditionHandle, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrCurlCli")
    def attr_curl_cli(self) -> typing.Any:
        """
        :Attribute: CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.  You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
        """
        return jsii.get(self, "attrCurlCli")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHeaders")
    def attr_headers(self) -> typing.Any:
        """
        :Attribute: Headers: HTTP POST Headers used for signalling handle completion or failure.
        """
        return jsii.get(self, "attrHeaders")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPowerShellCurlCli")
    def attr_power_shell_curl_cli(self) -> typing.Any:
        """
        :Attribute: PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure. As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
        """
        return jsii.get(self, "attrPowerShellCurlCli")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUrl")
    def attr_url(self) -> typing.Any:
        """
        :Attribute: URL: HTTP POST URL used for signalling handle completion or failure.
        """
        return jsii.get(self, "attrUrl")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWindowsCurlCli")
    def attr_windows_curl_cli(self) -> typing.Any:
        """
        :Attribute: WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure. As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{"status": "SUCCESS"}" , or signal failure by adding --data-binary "{"status": "FAILURE"}"
        """
        return jsii.get(self, "attrWindowsCurlCli")

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
    @jsii.member(jsii_name="count")
    def count(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        count: There are 3 preconditions that make Count taking effect:
        1.Mode is set to Full.
        2.Count >= 0.
        3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.

        If Count takes effect, signals with id > Count will be deleted before update.
        The default value is -1, which means no effect.
        It is recommended to quote the same value with WaitCondition.Count.
        """
        return jsii.get(self, "count")

    @count.setter # type: ignore
    def count(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "count", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="mode")
    def mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.

        If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.

        Default to Full.
        """
        return jsii.get(self, "mode")

    @mode.setter # type: ignore
    def mode(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "mode", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosWaitConditionHandleProps",
    jsii_struct_bases=[],
    name_mapping={"count": "count", "mode": "mode"},
)
class RosWaitConditionHandleProps:
    def __init__(
        self,
        *,
        count: typing.Optional[jsii.Number] = None,
        mode: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROS::WaitConditionHandle``.

        :param count: 
        :param mode: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if count is not None:
            self._values["count"] = count
        if mode is not None:
            self._values["mode"] = mode

    @builtins.property
    def count(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        count: There are 3 preconditions that make Count taking effect:
        1.Mode is set to Full.
        2.Count >= 0.
        3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.

        If Count takes effect, signals with id > Count will be deleted before update.
        The default value is -1, which means no effect.
        It is recommended to quote the same value with WaitCondition.Count.
        """
        result = self._values.get("count")
        return result

    @builtins.property
    def mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.

        If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.

        Default to Full.
        """
        result = self._values.get("mode")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWaitConditionHandleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.RosWaitConditionProps",
    jsii_struct_bases=[],
    name_mapping={"handle": "handle", "timeout": "timeout", "count": "count"},
)
class RosWaitConditionProps:
    def __init__(
        self,
        *,
        handle: builtins.str,
        timeout: jsii.Number,
        count: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROS::WaitCondition``.

        :param handle: 
        :param timeout: 
        :param count: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "handle": handle,
            "timeout": timeout,
        }
        if count is not None:
            self._values["count"] = count

    @builtins.property
    def handle(self) -> builtins.str:
        """
        :Property: handle: A reference to the wait condition handle used to signal this wait condition.
        """
        result = self._values.get("handle")
        assert result is not None, "Required property 'handle' is missing"
        return result

    @builtins.property
    def timeout(self) -> jsii.Number:
        """
        :Property: timeout: The number of seconds to wait for the correct number of signals to arrive.
        """
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return result

    @builtins.property
    def count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: count: The number of success signals that must be received before the stack creation process continues.
        """
        result = self._values.get("count")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWaitConditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Stack(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.Stack",
):
    """A ROS resource type:  ``ALIYUN::ROS::Stack``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["StackProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ROS::Stack``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Stack, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.StackProps",
    jsii_struct_bases=[],
    name_mapping={
        "parameters": "parameters",
        "template_body": "templateBody",
        "template_id": "templateId",
        "template_url": "templateUrl",
        "template_version": "templateVersion",
        "timeout_mins": "timeoutMins",
    },
)
class StackProps:
    def __init__(
        self,
        *,
        parameters: typing.Optional[typing.Union[typing.Mapping[builtins.str, typing.Any], ros_cdk_core.IResolvable]] = None,
        template_body: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]] = None,
        template_id: typing.Optional[builtins.str] = None,
        template_url: typing.Optional[builtins.str] = None,
        template_version: typing.Optional[builtins.str] = None,
        timeout_mins: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROS::Stack``.

        :param parameters: 
        :param template_body: 
        :param template_id: 
        :param template_url: 
        :param template_version: 
        :param timeout_mins: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if parameters is not None:
            self._values["parameters"] = parameters
        if template_body is not None:
            self._values["template_body"] = template_body
        if template_id is not None:
            self._values["template_id"] = template_id
        if template_url is not None:
            self._values["template_url"] = template_url
        if template_version is not None:
            self._values["template_version"] = template_version
        if timeout_mins is not None:
            self._values["timeout_mins"] = timeout_mins

    @builtins.property
    def parameters(
        self,
    ) -> typing.Optional[typing.Union[typing.Mapping[builtins.str, typing.Any], ros_cdk_core.IResolvable]]:
        """
        :Property: parameters: The set of parameters passed to this nested stack.
        """
        result = self._values.get("parameters")
        return result

    @builtins.property
    def template_body(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Mapping[builtins.str, typing.Any]]]:
        """
        :Property:

        templateBody: Structure containing the template body.
        It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        """
        result = self._values.get("template_body")
        return result

    @builtins.property
    def template_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: templateId: Template ID of template containing the template body.
        """
        result = self._values.get("template_id")
        return result

    @builtins.property
    def template_url(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
        You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        """
        result = self._values.get("template_url")
        return result

    @builtins.property
    def template_version(self) -> typing.Optional[builtins.str]:
        """
        :Property: templateVersion: Template version of template containing the template body.
        """
        result = self._values.get("template_version")
        return result

    @builtins.property
    def timeout_mins(self) -> typing.Optional[jsii.Number]:
        """
        :Property: timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
        """
        result = self._values.get("timeout_mins")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class WaitCondition(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.WaitCondition",
):
    """A ROS resource type:  ``ALIYUN::ROS::WaitCondition``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "WaitConditionProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ROS::WaitCondition``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(WaitCondition, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrData")
    def attr_data(self) -> typing.Any:
        """
        :Attribute: Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
        """
        return jsii.get(self, "attrData")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrErrorData")
    def attr_error_data(self) -> typing.Any:
        """
        :Attribute: ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
        """
        return jsii.get(self, "attrErrorData")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrJoinedErrorData")
    def attr_joined_error_data(self) -> typing.Any:
        """
        :Attribute: JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
        """
        return jsii.get(self, "attrJoinedErrorData")


class WaitConditionHandle(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-ros.WaitConditionHandle",
):
    """A ROS resource type:  ``ALIYUN::ROS::WaitConditionHandle``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["WaitConditionHandleProps"] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::ROS::WaitConditionHandle``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(WaitConditionHandle, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCurlCli")
    def attr_curl_cli(self) -> typing.Any:
        """
        :Attribute: CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used for signalling handle completion or failure.  You can signal success by adding --data-binary '{"status": "SUCCESS"}' , or signal failure by adding --data-binary '{"status": "FAILURE"}'
        """
        return jsii.get(self, "attrCurlCli")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHeaders")
    def attr_headers(self) -> typing.Any:
        """
        :Attribute: Headers: HTTP POST Headers used for signalling handle completion or failure.
        """
        return jsii.get(self, "attrHeaders")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrPowerShellCurlCli")
    def attr_power_shell_curl_cli(self) -> typing.Any:
        """
        :Attribute: PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used for signalling handle completion or failure. As this cmdlet was introduced in PowerShell 3.0, ensure the version of PowerShell satisfies the constraint. (Show the version via $PSVersionTable.PSVersion.) You can signal success by adding -Body '{"status": "SUCCESS"}' , or signal failure by adding -Body '{"status": "FAILURE"}'
        """
        return jsii.get(self, "attrPowerShellCurlCli")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrUrl")
    def attr_url(self) -> typing.Any:
        """
        :Attribute: URL: HTTP POST URL used for signalling handle completion or failure.
        """
        return jsii.get(self, "attrUrl")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrWindowsCurlCli")
    def attr_windows_curl_cli(self) -> typing.Any:
        """
        :Attribute: WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used for signalling handle completion or failure. As Windows does not support curl command, you need to install curl.exe and add it to PATH first. You can signal success by adding --data-binary "{"status": "SUCCESS"}" , or signal failure by adding --data-binary "{"status": "FAILURE"}"
        """
        return jsii.get(self, "attrWindowsCurlCli")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.WaitConditionHandleProps",
    jsii_struct_bases=[],
    name_mapping={"count": "count", "mode": "mode"},
)
class WaitConditionHandleProps:
    def __init__(
        self,
        *,
        count: typing.Optional[jsii.Number] = None,
        mode: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROS::WaitConditionHandle``.

        :param count: 
        :param mode: 
        """
        self._values: typing.Dict[str, typing.Any] = {}
        if count is not None:
            self._values["count"] = count
        if mode is not None:
            self._values["mode"] = mode

    @builtins.property
    def count(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        count: There are 3 preconditions that make Count taking effect:
        1.Mode is set to Full.
        2.Count >= 0.
        3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.

        If Count takes effect, signals with id > Count will be deleted before update.
        The default value is -1, which means no effect.
        It is recommended to quote the same value with WaitCondition.Count.
        """
        result = self._values.get("count")
        return result

    @builtins.property
    def mode(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        mode: If set to Increment, all old signals will be deleted before update. In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.

        If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.

        Default to Full.
        """
        result = self._values.get("mode")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WaitConditionHandleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-ros.WaitConditionProps",
    jsii_struct_bases=[],
    name_mapping={"handle": "handle", "timeout": "timeout", "count": "count"},
)
class WaitConditionProps:
    def __init__(
        self,
        *,
        handle: builtins.str,
        timeout: jsii.Number,
        count: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::ROS::WaitCondition``.

        :param handle: 
        :param timeout: 
        :param count: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "handle": handle,
            "timeout": timeout,
        }
        if count is not None:
            self._values["count"] = count

    @builtins.property
    def handle(self) -> builtins.str:
        """
        :Property: handle: A reference to the wait condition handle used to signal this wait condition.
        """
        result = self._values.get("handle")
        assert result is not None, "Required property 'handle' is missing"
        return result

    @builtins.property
    def timeout(self) -> jsii.Number:
        """
        :Property: timeout: The number of seconds to wait for the correct number of signals to arrive.
        """
        result = self._values.get("timeout")
        assert result is not None, "Required property 'timeout' is missing"
        return result

    @builtins.property
    def count(self) -> typing.Optional[jsii.Number]:
        """
        :Property: count: The number of success signals that must be received before the stack creation process continues.
        """
        result = self._values.get("count")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WaitConditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AutoEnableService",
    "AutoEnableServiceProps",
    "CustomResource",
    "CustomResourceProps",
    "RosAutoEnableService",
    "RosAutoEnableServiceProps",
    "RosCustomResource",
    "RosCustomResourceProps",
    "RosStack",
    "RosStackProps",
    "RosWaitCondition",
    "RosWaitConditionHandle",
    "RosWaitConditionHandleProps",
    "RosWaitConditionProps",
    "Stack",
    "StackProps",
    "WaitCondition",
    "WaitConditionHandle",
    "WaitConditionHandleProps",
    "WaitConditionProps",
]

publication.publish()
