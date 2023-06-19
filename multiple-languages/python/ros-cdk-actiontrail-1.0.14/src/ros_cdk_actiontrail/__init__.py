'''
## Aliyun ROS ACTIONTRAIL Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as ACTIONTRAIL from '@alicloud/ros-cdk-actiontrail';
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


class RosTrail(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.RosTrail",
):
    '''A ROS template type:  ``ALIYUN::ACTIONTRAIL::Trail``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTrailProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ACTIONTRAIL::Trail``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__006b91342252c0a95d61ae072ee83bec4eef10b41b48ebe3e2d118501e129ae8)
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
            type_hints = typing.get_type_hints(_typecheckingstub__48adbe48ba7de1488a3b99e798da83b59ce51c1f2147680c8d048c4d376623e4)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Name: The name of the trail to be created, which must be unique for an account.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__bd6faa3ffce3ac4351d4e6d6d89c6da6705ecf1c246aaacc66f618ad6d276db2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the trail to be created, which must be unique for an account.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5a216af80a0e02557f5546b56ef116b6505fa152883b6ea4b3c348f09635e48)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="ossBucketName")
    def oss_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "ossBucketName"))

    @oss_bucket_name.setter
    def oss_bucket_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0595b042ca54094e48de495947c6a601196952540aabfacf4f60547e0d498f51)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossBucketName", value)

    @builtins.property
    @jsii.member(jsii_name="roleName")
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: roleName: The RAM role in ActionTrail permitted by the user.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "roleName"))

    @role_name.setter
    def role_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5766172eea572d266b9a73582e1e40edd830f078f64f80da996669613d7114ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "roleName", value)

    @builtins.property
    @jsii.member(jsii_name="eventRw")
    def event_rw(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "eventRw"))

    @event_rw.setter
    def event_rw(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c60de7dd156244dacff78bdf9635e8138349a761fac0d1c69e9eab1637a25c4d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "eventRw", value)

    @builtins.property
    @jsii.member(jsii_name="ossKeyPrefix")
    def oss_key_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ossKeyPrefix"))

    @oss_key_prefix.setter
    def oss_key_prefix(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4d0d88beb8ab7a988241378a5953954024abccb7d257889bb5d0e134e3d6071)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ossKeyPrefix", value)

    @builtins.property
    @jsii.member(jsii_name="slsProjectArn")
    def sls_project_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsProjectArn: The unique ARN of the Log Service project.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slsProjectArn"))

    @sls_project_arn.setter
    def sls_project_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efaf73892bfc66e09f88e50880b3f2f19152b626fc0a12c351b36d70ed755342)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsProjectArn", value)

    @builtins.property
    @jsii.member(jsii_name="slsWriteRoleArn")
    def sls_write_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsWriteRoleArn: The unique ARN of the Log Service role.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slsWriteRoleArn"))

    @sls_write_role_arn.setter
    def sls_write_role_arn(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d99b364cd19c0d92ed3f59cb2024faf7d1fc54e2b3773c13398517b4d1866e2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slsWriteRoleArn", value)


class RosTrailLogging(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.RosTrailLogging",
):
    '''A ROS template type:  ``ALIYUN::ACTIONTRAIL::TrailLogging``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTrailLoggingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::ACTIONTRAIL::TrailLogging``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f99fd3b3de2169556ba641eb3388cb3387cf24040bb80d2257e90c99fb9d085)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d9861e49832e2639ab6c0bd5f6ad80af2897a5cce7a2ce2bf7e5b8e591c2ff11)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrIsLogging")
    def attr_is_logging(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsLogging: Indicates whether the trail is logging API invocations.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsLogging"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryError")
    def attr_latest_delivery_error(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestDeliveryError"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryTime")
    def attr_latest_delivery_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LatestDeliveryTime: The date and time of the last successful delivery of a log file.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestDeliveryTime"))

    @builtins.property
    @jsii.member(jsii_name="attrStartLoggingTime")
    def attr_start_logging_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StartLoggingTime: The most recent date and time when the user enables the trail.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStartLoggingTime"))

    @builtins.property
    @jsii.member(jsii_name="attrStopLoggingTime")
    def attr_stop_logging_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StopLoggingTime: The most recent date and time when the user disables the trail.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStopLoggingTime"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enable")
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: enable: Whether to enable the trail logging.
        '''
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "enable"))

    @enable.setter
    def enable(
        self,
        value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ffe818c529ee8d10bca7f82fe13ee4f329e0667f312b85a616f3ee45ce489b7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enable", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab2ec93ad84a711a585c48ec6da2c8fb5db453c7ae6e9124231586c493db343d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the trail to be enabled.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8a6fa4344c021021fbfd384105592c6e0b96a8661c4308d78d2ea188cad34bb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.RosTrailLoggingProps",
    jsii_struct_bases=[],
    name_mapping={"enable": "enable", "name": "name"},
)
class RosTrailLoggingProps:
    def __init__(
        self,
        *,
        enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ACTIONTRAIL::TrailLogging``.

        :param enable: 
        :param name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5193bd424d2a8fb033f7236fbfa0520cee26cc6de5acb0cbe81e57c7bd85d6f7)
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "enable": enable,
            "name": name,
        }

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: enable: Whether to enable the trail logging.
        '''
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the trail to be enabled.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrailLoggingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.RosTrailProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "oss_bucket_name": "ossBucketName",
        "role_name": "roleName",
        "event_rw": "eventRw",
        "oss_key_prefix": "ossKeyPrefix",
        "sls_project_arn": "slsProjectArn",
        "sls_write_role_arn": "slsWriteRoleArn",
    },
)
class RosTrailProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        oss_bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        event_rw: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_key_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_project_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_write_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ACTIONTRAIL::Trail``.

        :param name: 
        :param oss_bucket_name: 
        :param role_name: 
        :param event_rw: 
        :param oss_key_prefix: 
        :param sls_project_arn: 
        :param sls_write_role_arn: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1a3cf37460d5bc6dd02f17c62595e29802894d507d421b65ebe2adb75229dc8)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument oss_bucket_name", value=oss_bucket_name, expected_type=type_hints["oss_bucket_name"])
            check_type(argname="argument role_name", value=role_name, expected_type=type_hints["role_name"])
            check_type(argname="argument event_rw", value=event_rw, expected_type=type_hints["event_rw"])
            check_type(argname="argument oss_key_prefix", value=oss_key_prefix, expected_type=type_hints["oss_key_prefix"])
            check_type(argname="argument sls_project_arn", value=sls_project_arn, expected_type=type_hints["sls_project_arn"])
            check_type(argname="argument sls_write_role_arn", value=sls_write_role_arn, expected_type=type_hints["sls_write_role_arn"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "oss_bucket_name": oss_bucket_name,
            "role_name": role_name,
        }
        if event_rw is not None:
            self._values["event_rw"] = event_rw
        if oss_key_prefix is not None:
            self._values["oss_key_prefix"] = oss_key_prefix
        if sls_project_arn is not None:
            self._values["sls_project_arn"] = sls_project_arn
        if sls_write_role_arn is not None:
            self._values["sls_write_role_arn"] = sls_write_role_arn

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: The name of the trail to be created, which must be unique for an account.
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def oss_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        '''
        result = self._values.get("oss_bucket_name")
        assert result is not None, "Required property 'oss_bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: roleName: The RAM role in ActionTrail permitted by the user.
        '''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def event_rw(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        '''
        result = self._values.get("event_rw")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_key_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        '''
        result = self._values.get("oss_key_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sls_project_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsProjectArn: The unique ARN of the Log Service project.
        '''
        result = self._values.get("sls_project_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sls_write_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slsWriteRoleArn: The unique ARN of the Log Service role.
        '''
        result = self._values.get("sls_write_role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTrailProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Trail(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.Trail",
):
    '''A ROS resource type:  ``ALIYUN::ACTIONTRAIL::Trail``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TrailProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ACTIONTRAIL::Trail``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__976b50d4780e94a19403a61336788a251eaf600b9d4c8d269c966ae097e417b7)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: The name of the trail to be created, which must be unique for an account.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))


class TrailLogging(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-actiontrail.TrailLogging",
):
    '''A ROS resource type:  ``ALIYUN::ACTIONTRAIL::TrailLogging``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TrailLoggingProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::ACTIONTRAIL::TrailLogging``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__258e92e72b18ef146b0d304d2fb94705de1bdcc4d1064721300fd1af4d729def)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrIsLogging")
    def attr_is_logging(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsLogging: Indicates whether the trail is logging API invocations.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsLogging"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryError")
    def attr_latest_delivery_error(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestDeliveryError"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestDeliveryTime")
    def attr_latest_delivery_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestDeliveryTime"))

    @builtins.property
    @jsii.member(jsii_name="attrStartLoggingTime")
    def attr_start_logging_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StartLoggingTime: The most recent date and time when the user enables the trail.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStartLoggingTime"))

    @builtins.property
    @jsii.member(jsii_name="attrStopLoggingTime")
    def attr_stop_logging_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute StopLoggingTime: The most recent date and time when the user disables the trail.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStopLoggingTime"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.TrailLoggingProps",
    jsii_struct_bases=[],
    name_mapping={"enable": "enable", "name": "name"},
)
class TrailLoggingProps:
    def __init__(
        self,
        *,
        enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::ACTIONTRAIL::TrailLogging``.

        :param enable: Property enable: Whether to enable the trail logging.
        :param name: Property name: The name of the trail to be enabled.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8f0a3f08f78e620971cf3d2534bd43873bd0e3ac3f3b55085e105534a02d16d)
            check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "enable": enable,
            "name": name,
        }

    @builtins.property
    def enable(self) -> typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property enable: Whether to enable the trail logging.'''
        result = self._values.get("enable")
        assert result is not None, "Required property 'enable' is missing"
        return typing.cast(typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the trail to be enabled.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrailLoggingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-actiontrail.TrailProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "oss_bucket_name": "ossBucketName",
        "role_name": "roleName",
        "event_rw": "eventRw",
        "oss_key_prefix": "ossKeyPrefix",
        "sls_project_arn": "slsProjectArn",
        "sls_write_role_arn": "slsWriteRoleArn",
    },
)
class TrailProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        oss_bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        event_rw: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        oss_key_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_project_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        sls_write_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::ACTIONTRAIL::Trail``.

        :param name: Property name: The name of the trail to be created, which must be unique for an account.
        :param oss_bucket_name: Property ossBucketName: The OSS bucket to which the trail delivers logs. Ensure that this is an existing OSS bucket.
        :param role_name: Property roleName: The RAM role in ActionTrail permitted by the user.
        :param event_rw: Property eventRw: Indicates whether the event is a read or a write event. Valid values: Read, Write, and All. Default value: Write.
        :param oss_key_prefix: Property ossKeyPrefix: The prefix of the specified OSS bucket name. This parameter can be left empty.
        :param sls_project_arn: Property slsProjectArn: The unique ARN of the Log Service project.
        :param sls_write_role_arn: Property slsWriteRoleArn: The unique ARN of the Log Service role.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80c1257fd8fee9bba80000494c13199675f9ae6f19c82809eaf8073994c58a50)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument oss_bucket_name", value=oss_bucket_name, expected_type=type_hints["oss_bucket_name"])
            check_type(argname="argument role_name", value=role_name, expected_type=type_hints["role_name"])
            check_type(argname="argument event_rw", value=event_rw, expected_type=type_hints["event_rw"])
            check_type(argname="argument oss_key_prefix", value=oss_key_prefix, expected_type=type_hints["oss_key_prefix"])
            check_type(argname="argument sls_project_arn", value=sls_project_arn, expected_type=type_hints["sls_project_arn"])
            check_type(argname="argument sls_write_role_arn", value=sls_write_role_arn, expected_type=type_hints["sls_write_role_arn"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "oss_bucket_name": oss_bucket_name,
            "role_name": role_name,
        }
        if event_rw is not None:
            self._values["event_rw"] = event_rw
        if oss_key_prefix is not None:
            self._values["oss_key_prefix"] = oss_key_prefix
        if sls_project_arn is not None:
            self._values["sls_project_arn"] = sls_project_arn
        if sls_write_role_arn is not None:
            self._values["sls_write_role_arn"] = sls_write_role_arn

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the trail to be created, which must be unique for an account.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def oss_bucket_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property ossBucketName: The OSS bucket to which the trail delivers logs.

        Ensure that this is an existing OSS bucket.
        '''
        result = self._values.get("oss_bucket_name")
        assert result is not None, "Required property 'oss_bucket_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def role_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property roleName: The RAM role in ActionTrail permitted by the user.'''
        result = self._values.get("role_name")
        assert result is not None, "Required property 'role_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def event_rw(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property eventRw: Indicates whether the event is a read or a write event.

        Valid values: Read, Write, and All. Default value: Write.
        '''
        result = self._values.get("event_rw")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def oss_key_prefix(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ossKeyPrefix: The prefix of the specified OSS bucket name.

        This parameter can be left empty.
        '''
        result = self._values.get("oss_key_prefix")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sls_project_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slsProjectArn: The unique ARN of the Log Service project.'''
        result = self._values.get("sls_project_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def sls_write_role_arn(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slsWriteRoleArn: The unique ARN of the Log Service role.'''
        result = self._values.get("sls_write_role_arn")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TrailProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosTrail",
    "RosTrailLogging",
    "RosTrailLoggingProps",
    "RosTrailProps",
    "Trail",
    "TrailLogging",
    "TrailLoggingProps",
    "TrailProps",
]

publication.publish()

def _typecheckingstub__006b91342252c0a95d61ae072ee83bec4eef10b41b48ebe3e2d118501e129ae8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTrailProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48adbe48ba7de1488a3b99e798da83b59ce51c1f2147680c8d048c4d376623e4(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd6faa3ffce3ac4351d4e6d6d89c6da6705ecf1c246aaacc66f618ad6d276db2(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5a216af80a0e02557f5546b56ef116b6505fa152883b6ea4b3c348f09635e48(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0595b042ca54094e48de495947c6a601196952540aabfacf4f60547e0d498f51(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5766172eea572d266b9a73582e1e40edd830f078f64f80da996669613d7114ee(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c60de7dd156244dacff78bdf9635e8138349a761fac0d1c69e9eab1637a25c4d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4d0d88beb8ab7a988241378a5953954024abccb7d257889bb5d0e134e3d6071(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efaf73892bfc66e09f88e50880b3f2f19152b626fc0a12c351b36d70ed755342(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d99b364cd19c0d92ed3f59cb2024faf7d1fc54e2b3773c13398517b4d1866e2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f99fd3b3de2169556ba641eb3388cb3387cf24040bb80d2257e90c99fb9d085(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTrailLoggingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d9861e49832e2639ab6c0bd5f6ad80af2897a5cce7a2ce2bf7e5b8e591c2ff11(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ffe818c529ee8d10bca7f82fe13ee4f329e0667f312b85a616f3ee45ce489b7(
    value: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab2ec93ad84a711a585c48ec6da2c8fb5db453c7ae6e9124231586c493db343d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8a6fa4344c021021fbfd384105592c6e0b96a8661c4308d78d2ea188cad34bb(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5193bd424d2a8fb033f7236fbfa0520cee26cc6de5acb0cbe81e57c7bd85d6f7(
    *,
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1a3cf37460d5bc6dd02f17c62595e29802894d507d421b65ebe2adb75229dc8(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    oss_bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    event_rw: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_key_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_project_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_write_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__976b50d4780e94a19403a61336788a251eaf600b9d4c8d269c966ae097e417b7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TrailProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__258e92e72b18ef146b0d304d2fb94705de1bdcc4d1064721300fd1af4d729def(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TrailLoggingProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8f0a3f08f78e620971cf3d2534bd43873bd0e3ac3f3b55085e105534a02d16d(
    *,
    enable: typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable],
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80c1257fd8fee9bba80000494c13199675f9ae6f19c82809eaf8073994c58a50(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    oss_bucket_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    role_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    event_rw: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    oss_key_prefix: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_project_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sls_write_role_arn: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
