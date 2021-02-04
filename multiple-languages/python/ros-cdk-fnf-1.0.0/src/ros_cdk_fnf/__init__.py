"""
## Aliyun ROS FNF Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_fnf as FNF
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


class Flow(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fnf.Flow",
):
    """A ROS resource type:  ``ALIYUN::FNF::Flow``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "FlowProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FNF::Flow``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Flow, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCreatedTime")
    def attr_created_time(self) -> typing.Any:
        """
        :Attribute: CreatedTime: Flow creation time.
        """
        return jsii.get(self, "attrCreatedTime")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Any:
        """
        :Attribute: Id: The unique ID of the flow.
        """
        return jsii.get(self, "attrId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLastModifiedTime")
    def attr_last_modified_time(self) -> typing.Any:
        """
        :Attribute: LastModifiedTime: The most recently modified time of the flow.
        """
        return jsii.get(self, "attrLastModifiedTime")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: The name of the flow created.
        """
        return jsii.get(self, "attrName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fnf.FlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "definition": "definition",
        "name": "name",
        "description": "description",
        "request_id": "requestId",
        "role_arn": "roleArn",
    },
)
class FlowProps:
    def __init__(
        self,
        *,
        definition: builtins.str,
        name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        request_id: typing.Optional[builtins.str] = None,
        role_arn: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FNF::Flow``.

        :param definition: 
        :param name: 
        :param description: 
        :param request_id: 
        :param role_arn: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "definition": definition,
            "name": name,
        }
        if description is not None:
            self._values["description"] = description
        if request_id is not None:
            self._values["request_id"] = request_id
        if role_arn is not None:
            self._values["role_arn"] = role_arn

    @builtins.property
    def definition(self) -> builtins.str:
        """
        :Property: definition: The definition of the created flow following the FDL syntax standard.
        """
        result = self._values.get("definition")
        assert result is not None, "Required property 'definition' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the flow created. This name is unique under the account.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Create a description of the flow.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def request_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
        """
        result = self._values.get("request_id")
        return result

    @builtins.property
    def role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
        """
        result = self._values.get("role_arn")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "FlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosFlow(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fnf.RosFlow",
):
    """A ROS template type:  ``ALIYUN::FNF::Flow``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosFlowProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FNF::Flow``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosFlow, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrCreatedTime")
    def attr_created_time(self) -> typing.Any:
        """
        :Attribute: CreatedTime: Flow creation time.
        """
        return jsii.get(self, "attrCreatedTime")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> typing.Any:
        """
        :Attribute: Id: The unique ID of the flow.
        """
        return jsii.get(self, "attrId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLastModifiedTime")
    def attr_last_modified_time(self) -> typing.Any:
        """
        :Attribute: LastModifiedTime: The most recently modified time of the flow.
        """
        return jsii.get(self, "attrLastModifiedTime")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> typing.Any:
        """
        :Attribute: Name: The name of the flow created.
        """
        return jsii.get(self, "attrName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="definition")
    def definition(self) -> builtins.str:
        """
        :Property: definition: The definition of the created flow following the FDL syntax standard.
        """
        return jsii.get(self, "definition")

    @definition.setter # type: ignore
    def definition(self, value: builtins.str) -> None:
        jsii.set(self, "definition", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="name")
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the flow created. This name is unique under the account.
        """
        return jsii.get(self, "name")

    @name.setter # type: ignore
    def name(self, value: builtins.str) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Create a description of the flow.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="requestId")
    def request_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
        """
        return jsii.get(self, "requestId")

    @request_id.setter # type: ignore
    def request_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "requestId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="roleArn")
    def role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
        """
        return jsii.get(self, "roleArn")

    @role_arn.setter # type: ignore
    def role_arn(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "roleArn", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fnf.RosFlowProps",
    jsii_struct_bases=[],
    name_mapping={
        "definition": "definition",
        "name": "name",
        "description": "description",
        "request_id": "requestId",
        "role_arn": "roleArn",
    },
)
class RosFlowProps:
    def __init__(
        self,
        *,
        definition: builtins.str,
        name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        request_id: typing.Optional[builtins.str] = None,
        role_arn: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FNF::Flow``.

        :param definition: 
        :param name: 
        :param description: 
        :param request_id: 
        :param role_arn: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "definition": definition,
            "name": name,
        }
        if description is not None:
            self._values["description"] = description
        if request_id is not None:
            self._values["request_id"] = request_id
        if role_arn is not None:
            self._values["role_arn"] = role_arn

    @builtins.property
    def definition(self) -> builtins.str:
        """
        :Property: definition: The definition of the created flow following the FDL syntax standard.
        """
        result = self._values.get("definition")
        assert result is not None, "Required property 'definition' is missing"
        return result

    @builtins.property
    def name(self) -> builtins.str:
        """
        :Property: name: The name of the flow created. This name is unique under the account.
        """
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Create a description of the flow.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def request_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
        """
        result = self._values.get("request_id")
        return result

    @builtins.property
    def role_arn(self) -> typing.Optional[builtins.str]:
        """
        :Property: roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
        """
        result = self._values.get("role_arn")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosFlowProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosSchedule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fnf.RosSchedule",
):
    """A ROS template type:  ``ALIYUN::FNF::Schedule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosScheduleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::FNF::Schedule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosSchedule, self, [scope, id, props, enable_resource_property_constraint])

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
    @jsii.member(jsii_name="attrFlowName")
    def attr_flow_name(self) -> typing.Any:
        """
        :Attribute: FlowName: Flow name.
        """
        return jsii.get(self, "attrFlowName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScheduleId")
    def attr_schedule_id(self) -> typing.Any:
        """
        :Attribute: ScheduleId: Schedule Id
        """
        return jsii.get(self, "attrScheduleId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScheduleName")
    def attr_schedule_name(self) -> typing.Any:
        """
        :Attribute: ScheduleName: Schedule name.
        """
        return jsii.get(self, "attrScheduleName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="cronExpression")
    def cron_expression(self) -> builtins.str:
        """
        :Property: cronExpression: Cron expression.
        """
        return jsii.get(self, "cronExpression")

    @cron_expression.setter # type: ignore
    def cron_expression(self, value: builtins.str) -> None:
        jsii.set(self, "cronExpression", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="flowName")
    def flow_name(self) -> builtins.str:
        """
        :Property: flowName: Flow name.
        """
        return jsii.get(self, "flowName")

    @flow_name.setter # type: ignore
    def flow_name(self, value: builtins.str) -> None:
        jsii.set(self, "flowName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="scheduleName")
    def schedule_name(self) -> builtins.str:
        """
        :Property: scheduleName: Schedule name.
        """
        return jsii.get(self, "scheduleName")

    @schedule_name.setter # type: ignore
    def schedule_name(self, value: builtins.str) -> None:
        jsii.set(self, "scheduleName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the schedule.
        """
        return jsii.get(self, "description")

    @description.setter # type: ignore
    def description(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enable: Whether enable schedule.
        """
        return jsii.get(self, "enable")

    @enable.setter # type: ignore
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enable", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="payload")
    def payload(self) -> typing.Optional[builtins.str]:
        """
        :Property: payload: Payload.
        """
        return jsii.get(self, "payload")

    @payload.setter # type: ignore
    def payload(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "payload", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fnf.RosScheduleProps",
    jsii_struct_bases=[],
    name_mapping={
        "cron_expression": "cronExpression",
        "flow_name": "flowName",
        "schedule_name": "scheduleName",
        "description": "description",
        "enable": "enable",
        "payload": "payload",
    },
)
class RosScheduleProps:
    def __init__(
        self,
        *,
        cron_expression: builtins.str,
        flow_name: builtins.str,
        schedule_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        payload: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FNF::Schedule``.

        :param cron_expression: 
        :param flow_name: 
        :param schedule_name: 
        :param description: 
        :param enable: 
        :param payload: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cron_expression": cron_expression,
            "flow_name": flow_name,
            "schedule_name": schedule_name,
        }
        if description is not None:
            self._values["description"] = description
        if enable is not None:
            self._values["enable"] = enable
        if payload is not None:
            self._values["payload"] = payload

    @builtins.property
    def cron_expression(self) -> builtins.str:
        """
        :Property: cronExpression: Cron expression.
        """
        result = self._values.get("cron_expression")
        assert result is not None, "Required property 'cron_expression' is missing"
        return result

    @builtins.property
    def flow_name(self) -> builtins.str:
        """
        :Property: flowName: Flow name.
        """
        result = self._values.get("flow_name")
        assert result is not None, "Required property 'flow_name' is missing"
        return result

    @builtins.property
    def schedule_name(self) -> builtins.str:
        """
        :Property: scheduleName: Schedule name.
        """
        result = self._values.get("schedule_name")
        assert result is not None, "Required property 'schedule_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the schedule.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enable: Whether enable schedule.
        """
        result = self._values.get("enable")
        return result

    @builtins.property
    def payload(self) -> typing.Optional[builtins.str]:
        """
        :Property: payload: Payload.
        """
        result = self._values.get("payload")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosScheduleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Schedule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fnf.Schedule",
):
    """A ROS resource type:  ``ALIYUN::FNF::Schedule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ScheduleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::FNF::Schedule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Schedule, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrFlowName")
    def attr_flow_name(self) -> typing.Any:
        """
        :Attribute: FlowName: Flow name.
        """
        return jsii.get(self, "attrFlowName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScheduleId")
    def attr_schedule_id(self) -> typing.Any:
        """
        :Attribute: ScheduleId: Schedule Id
        """
        return jsii.get(self, "attrScheduleId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrScheduleName")
    def attr_schedule_name(self) -> typing.Any:
        """
        :Attribute: ScheduleName: Schedule name.
        """
        return jsii.get(self, "attrScheduleName")


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-fnf.ScheduleProps",
    jsii_struct_bases=[],
    name_mapping={
        "cron_expression": "cronExpression",
        "flow_name": "flowName",
        "schedule_name": "scheduleName",
        "description": "description",
        "enable": "enable",
        "payload": "payload",
    },
)
class ScheduleProps:
    def __init__(
        self,
        *,
        cron_expression: builtins.str,
        flow_name: builtins.str,
        schedule_name: builtins.str,
        description: typing.Optional[builtins.str] = None,
        enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        payload: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::FNF::Schedule``.

        :param cron_expression: 
        :param flow_name: 
        :param schedule_name: 
        :param description: 
        :param enable: 
        :param payload: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "cron_expression": cron_expression,
            "flow_name": flow_name,
            "schedule_name": schedule_name,
        }
        if description is not None:
            self._values["description"] = description
        if enable is not None:
            self._values["enable"] = enable
        if payload is not None:
            self._values["payload"] = payload

    @builtins.property
    def cron_expression(self) -> builtins.str:
        """
        :Property: cronExpression: Cron expression.
        """
        result = self._values.get("cron_expression")
        assert result is not None, "Required property 'cron_expression' is missing"
        return result

    @builtins.property
    def flow_name(self) -> builtins.str:
        """
        :Property: flowName: Flow name.
        """
        result = self._values.get("flow_name")
        assert result is not None, "Required property 'flow_name' is missing"
        return result

    @builtins.property
    def schedule_name(self) -> builtins.str:
        """
        :Property: scheduleName: Schedule name.
        """
        result = self._values.get("schedule_name")
        assert result is not None, "Required property 'schedule_name' is missing"
        return result

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        """
        :Property: description: Description of the schedule.
        """
        result = self._values.get("description")
        return result

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        """
        :Property: enable: Whether enable schedule.
        """
        result = self._values.get("enable")
        return result

    @builtins.property
    def payload(self) -> typing.Optional[builtins.str]:
        """
        :Property: payload: Payload.
        """
        result = self._values.get("payload")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ScheduleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Flow",
    "FlowProps",
    "RosFlow",
    "RosFlowProps",
    "RosSchedule",
    "RosScheduleProps",
    "Schedule",
    "ScheduleProps",
]

publication.publish()
