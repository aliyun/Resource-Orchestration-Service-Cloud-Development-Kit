'''
## Aliyun ROS FNF Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as FNF from '@alicloud/ros-cdk-fnf';
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


class Flow(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-fnf.Flow",
):
    '''A ROS resource type:  ``ALIYUN::FNF::Flow``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "FlowProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FNF::Flow``.

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
    @jsii.member(jsii_name="attrCreatedTime")
    def attr_created_time(self) -> ros_cdk_core.IResolvable:
        '''Attribute CreatedTime: Flow creation time.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCreatedTime"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute Id: The unique ID of the flow.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLastModifiedTime")
    def attr_last_modified_time(self) -> ros_cdk_core.IResolvable:
        '''Attribute LastModifiedTime: The most recently modified time of the flow.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLastModifiedTime"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute Name: The name of the flow created.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))


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
        definition: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        request_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FNF::Flow``.

        :param definition: Property definition: The definition of the created flow following the FDL syntax standard.
        :param name: Property name: The name of the flow created. This name is unique under the account.
        :param description: Property description: Create a description of the flow.
        :param request_id: Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
        :param role_arn: Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
        '''
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
    def definition(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property definition: The definition of the created flow following the FDL syntax standard.'''
        result = self._values.get("definition")
        assert result is not None, "Required property 'definition' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property name: The name of the flow created.

        This name is unique under the account.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Create a description of the flow.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def request_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property requestId: The specified Request ID for this request.

        If not specified, our system will help you generate a random one.
        '''
        result = self._values.get("request_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.'''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::FNF::Flow``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosFlowProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FNF::Flow``.

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
    @jsii.member(jsii_name="attrCreatedTime")
    def attr_created_time(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CreatedTime: Flow creation time.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCreatedTime"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrId")
    def attr_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Id: The unique ID of the flow.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLastModifiedTime")
    def attr_last_modified_time(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LastModifiedTime: The most recently modified time of the flow.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLastModifiedTime"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Name: The name of the flow created.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="definition")
    def definition(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: definition: The definition of the created flow following the FDL syntax standard.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "definition"))

    @definition.setter
    def definition(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "definition", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of the flow created. This name is unique under the account.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "name", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Create a description of the flow.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="requestId")
    def request_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "requestId"))

    @request_id.setter
    def request_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "requestId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="roleArn")
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "roleArn"))

    @role_arn.setter
    def role_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        definition: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        request_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        role_arn: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FNF::Flow``.

        :param definition: 
        :param name: 
        :param description: 
        :param request_id: 
        :param role_arn: 
        '''
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
    def definition(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: definition: The definition of the created flow following the FDL syntax standard.
        '''
        result = self._values.get("definition")
        assert result is not None, "Required property 'definition' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: name: The name of the flow created. This name is unique under the account.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Create a description of the flow.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def request_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
        '''
        result = self._values.get("request_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
        '''
        result = self._values.get("role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS template type:  ``ALIYUN::FNF::Schedule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosScheduleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::FNF::Schedule``.

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
    @jsii.member(jsii_name="attrFlowName")
    def attr_flow_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: FlowName: Flow name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFlowName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScheduleId")
    def attr_schedule_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScheduleId: Schedule Id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScheduleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScheduleName")
    def attr_schedule_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ScheduleName: Schedule name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScheduleName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="cronExpression")
    def cron_expression(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cronExpression: Cron expression.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "cronExpression"))

    @cron_expression.setter
    def cron_expression(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "cronExpression", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="flowName")
    def flow_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: flowName: Flow name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "flowName"))

    @flow_name.setter
    def flow_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "flowName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="scheduleName")
    def schedule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: scheduleName: Schedule name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "scheduleName"))

    @schedule_name.setter
    def schedule_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "scheduleName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the schedule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enable")
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enable: Whether enable schedule.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "enable", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payload")
    def payload(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payload: Payload.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payload"))

    @payload.setter
    def payload(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        cron_expression: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        flow_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        schedule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        payload: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FNF::Schedule``.

        :param cron_expression: 
        :param flow_name: 
        :param schedule_name: 
        :param description: 
        :param enable: 
        :param payload: 
        '''
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
    def cron_expression(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: cronExpression: Cron expression.
        '''
        result = self._values.get("cron_expression")
        assert result is not None, "Required property 'cron_expression' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def flow_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: flowName: Flow name.
        '''
        result = self._values.get("flow_name")
        assert result is not None, "Required property 'flow_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def schedule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: scheduleName: Schedule name.
        '''
        result = self._values.get("schedule_name")
        assert result is not None, "Required property 'schedule_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: Description of the schedule.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: enable: Whether enable schedule.
        '''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def payload(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: payload: Payload.
        '''
        result = self._values.get("payload")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    '''A ROS resource type:  ``ALIYUN::FNF::Schedule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ScheduleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::FNF::Schedule``.

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
    @jsii.member(jsii_name="attrFlowName")
    def attr_flow_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute FlowName: Flow name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFlowName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScheduleId")
    def attr_schedule_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScheduleId: Schedule Id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScheduleId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrScheduleName")
    def attr_schedule_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ScheduleName: Schedule name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrScheduleName"))


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
        cron_expression: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        flow_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        schedule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        enable: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        payload: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::FNF::Schedule``.

        :param cron_expression: Property cronExpression: Cron expression.
        :param flow_name: Property flowName: Flow name.
        :param schedule_name: Property scheduleName: Schedule name.
        :param description: Property description: Description of the schedule.
        :param enable: Property enable: Whether enable schedule.
        :param payload: Property payload: Payload.
        '''
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
    def cron_expression(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property cronExpression: Cron expression.'''
        result = self._values.get("cron_expression")
        assert result is not None, "Required property 'cron_expression' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def flow_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property flowName: Flow name.'''
        result = self._values.get("flow_name")
        assert result is not None, "Required property 'flow_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def schedule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property scheduleName: Schedule name.'''
        result = self._values.get("schedule_name")
        assert result is not None, "Required property 'schedule_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: Description of the schedule.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def enable(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property enable: Whether enable schedule.'''
        result = self._values.get("enable")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def payload(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payload: Payload.'''
        result = self._values.get("payload")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
