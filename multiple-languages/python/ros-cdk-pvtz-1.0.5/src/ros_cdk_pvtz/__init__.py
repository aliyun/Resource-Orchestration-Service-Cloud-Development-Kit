'''
## Aliyun ROS PVTZ Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as PVTZ from '@alicloud/ros-cdk-pvtz';
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


class RosUserVpcAuthorization(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.RosUserVpcAuthorization",
):
    '''A ROS template type:  ``ALIYUN::PVTZ::UserVpcAuthorization``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosUserVpcAuthorizationProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PVTZ::UserVpcAuthorization``.

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
    @jsii.member(jsii_name="attrAuthorizedUserId")
    def attr_authorized_user_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AuthorizedUserId: The account ID of the user who authorizes the resource.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAuthorizedUserId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAuthType")
    def attr_auth_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AuthType: Authorization type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAuthType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="authorizedUserId")
    def authorized_user_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: authorizedUserId: The account ID of the user who authorizes the resource.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "authorizedUserId"))

    @authorized_user_id.setter
    def authorized_user_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "authorizedUserId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="authChannel")
    def auth_channel(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        authChannel: Authorization channel. Valid values:
        AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
        RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "authChannel"))

    @auth_channel.setter
    def auth_channel(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "authChannel", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="authCode")
    def auth_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "authCode"))

    @auth_code.setter
    def auth_code(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "authCode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="authType")
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authType: Authorization type.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "authType"))

    @auth_type.setter
    def auth_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "authType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.RosUserVpcAuthorizationProps",
    jsii_struct_bases=[],
    name_mapping={
        "authorized_user_id": "authorizedUserId",
        "auth_channel": "authChannel",
        "auth_code": "authCode",
        "auth_type": "authType",
    },
)
class RosUserVpcAuthorizationProps:
    def __init__(
        self,
        *,
        authorized_user_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auth_channel: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auth_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auth_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PVTZ::UserVpcAuthorization``.

        :param authorized_user_id: 
        :param auth_channel: 
        :param auth_code: 
        :param auth_type: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "authorized_user_id": authorized_user_id,
        }
        if auth_channel is not None:
            self._values["auth_channel"] = auth_channel
        if auth_code is not None:
            self._values["auth_code"] = auth_code
        if auth_type is not None:
            self._values["auth_type"] = auth_type

    @builtins.property
    def authorized_user_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: authorizedUserId: The account ID of the user who authorizes the resource.
        '''
        result = self._values.get("authorized_user_id")
        assert result is not None, "Required property 'authorized_user_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auth_channel(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        authChannel: Authorization channel. Valid values:
        AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
        RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
        '''
        result = self._values.get("auth_channel")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auth_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
        '''
        result = self._values.get("auth_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: authType: Authorization type.
        '''
        result = self._values.get("auth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserVpcAuthorizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZone(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.RosZone",
):
    '''A ROS template type:  ``ALIYUN::PVTZ::Zone``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosZoneProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PVTZ::Zone``.

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
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneId: Zone ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneName")
    def attr_zone_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneName: Zone name.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneTag")
    def attr_zone_tag(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneTag: Zone label.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneTag"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneType")
    def attr_zone_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneType: Zone type.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneType"))

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
    @jsii.member(jsii_name="zoneName")
    def zone_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneName: Zone name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneName"))

    @zone_name.setter
    def zone_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="proxyPattern")
    def proxy_pattern(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        proxyPattern: ZONE: completely hijack the entire zone.
        RECORD: Incomplete hijacking, recursive resolution agent.
        Default to ZONE.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "proxyPattern"))

    @proxy_pattern.setter
    def proxy_pattern(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "proxyPattern", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "remark", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneTag")
    def zone_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneTag: Zone label. It will be ignored when ZoneType is AUTH_ZONE.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneTag"))

    @zone_tag.setter
    def zone_tag(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneTag", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneType")
    def zone_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneType: Zone type. For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "zoneType"))

    @zone_type.setter
    def zone_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "zoneType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.RosZoneProps",
    jsii_struct_bases=[],
    name_mapping={
        "zone_name": "zoneName",
        "proxy_pattern": "proxyPattern",
        "remark": "remark",
        "zone_tag": "zoneTag",
        "zone_type": "zoneType",
    },
)
class RosZoneProps:
    def __init__(
        self,
        *,
        zone_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        proxy_pattern: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        remark: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_tag: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PVTZ::Zone``.

        :param zone_name: 
        :param proxy_pattern: 
        :param remark: 
        :param zone_tag: 
        :param zone_type: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "zone_name": zone_name,
        }
        if proxy_pattern is not None:
            self._values["proxy_pattern"] = proxy_pattern
        if remark is not None:
            self._values["remark"] = remark
        if zone_tag is not None:
            self._values["zone_tag"] = zone_tag
        if zone_type is not None:
            self._values["zone_type"] = zone_type

    @builtins.property
    def zone_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneName: Zone name
        '''
        result = self._values.get("zone_name")
        assert result is not None, "Required property 'zone_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def proxy_pattern(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        proxyPattern: ZONE: completely hijack the entire zone.
        RECORD: Incomplete hijacking, recursive resolution agent.
        Default to ZONE.
        '''
        result = self._values.get("proxy_pattern")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneTag: Zone label. It will be ignored when ZoneType is AUTH_ZONE.
        '''
        result = self._values.get("zone_tag")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: zoneType: Zone type. For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
        '''
        result = self._values.get("zone_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZoneProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZoneRecord(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.RosZoneRecord",
):
    '''A ROS template type:  ``ALIYUN::PVTZ::ZoneRecord``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosZoneRecordProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PVTZ::ZoneRecord``.

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
    @jsii.member(jsii_name="attrRecord")
    def attr_record(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Record: Record data.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRecord"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RecordId: Parsing record Id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRecordId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneId: Zone ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))

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
    @jsii.member(jsii_name="rr")
    def rr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "rr"))

    @rr.setter
    def rr(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "rr", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="status")
    def status(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: status: Allowed values: [ENABLE, DISABLE]
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "status"))

    @status.setter
    def status(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "status", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="type")
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "type"))

    @type.setter
    def type(self, value: typing.Union[builtins.str, ros_cdk_core.IResolvable]) -> None:
        jsii.set(self, "type", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="value")
    def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: value: Record value
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "value"))

    @value.setter
    def value(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "value", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: Zone Id
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="priority")
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: priority: MX record priority, value range [1,99]. Default to 10.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "priority"))

    @priority.setter
    def priority(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "priority", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ttl")
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: ttl: Survival time, default is 60
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "ttl"))

    @ttl.setter
    def ttl(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "ttl", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.RosZoneRecordProps",
    jsii_struct_bases=[],
    name_mapping={
        "rr": "rr",
        "status": "status",
        "type": "type",
        "value": "value",
        "zone_id": "zoneId",
        "priority": "priority",
        "ttl": "ttl",
    },
)
class RosZoneRecordProps:
    def __init__(
        self,
        *,
        rr: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        status: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PVTZ::ZoneRecord``.

        :param rr: 
        :param status: 
        :param type: 
        :param value: 
        :param zone_id: 
        :param priority: 
        :param ttl: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "rr": rr,
            "status": status,
            "type": type,
            "value": value,
            "zone_id": zone_id,
        }
        if priority is not None:
            self._values["priority"] = priority
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def rr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :: " instead of empty
        :Property: rr: Host record, if you want to resolve
        '''
        result = self._values.get("rr")
        assert result is not None, "Required property 'rr' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def status(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: status: Allowed values: [ENABLE, DISABLE]
        '''
        result = self._values.get("status")
        assert result is not None, "Required property 'status' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV
        '''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: value: Record value
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: Zone Id
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: priority: MX record priority, value range [1,99]. Default to 10.
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: ttl: Survival time, default is 60
        '''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZoneRecordProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosZoneVpcBinder(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.RosZoneVpcBinder",
):
    '''A ROS template type:  ``ALIYUN::PVTZ::ZoneVpcBinder``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosZoneVpcBinderProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::PVTZ::ZoneVpcBinder``.

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
    @jsii.member(jsii_name="attrVpcs")
    def attr_vpcs(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Vpcs: Vpc list
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcs"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ZoneId: Zone Id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))

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
    @jsii.member(jsii_name="vpcs")
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosZoneVpcBinder.VpcsProperty"]]]:
        '''
        :Property: vpcs:
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosZoneVpcBinder.VpcsProperty"]]], jsii.get(self, "vpcs"))

    @vpcs.setter
    def vpcs(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosZoneVpcBinder.VpcsProperty"]]],
    ) -> None:
        jsii.set(self, "vpcs", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="zoneId")
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: Zone Id
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "zoneId"))

    @zone_id.setter
    def zone_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "zoneId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-pvtz.RosZoneVpcBinder.VpcsProperty",
        jsii_struct_bases=[],
        name_mapping={"region_id": "regionId", "vpc_id": "vpcId"},
    )
    class VpcsProperty:
        def __init__(
            self,
            *,
            region_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param region_id: 
            :param vpc_id: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "region_id": region_id,
                "vpc_id": vpc_id,
            }

        @builtins.property
        def region_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: regionId: Vpcs attribute, region Id
            '''
            result = self._values.get("region_id")
            assert result is not None, "Required property 'region_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vpcId: Vpcs attribute, vpc Id
            '''
            result = self._values.get("vpc_id")
            assert result is not None, "Required property 'vpc_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "VpcsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.RosZoneVpcBinderProps",
    jsii_struct_bases=[],
    name_mapping={"vpcs": "vpcs", "zone_id": "zoneId"},
)
class RosZoneVpcBinderProps:
    def __init__(
        self,
        *,
        vpcs: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosZoneVpcBinder.VpcsProperty]]],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::PVTZ::ZoneVpcBinder``.

        :param vpcs: 
        :param zone_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpcs": vpcs,
            "zone_id": zone_id,
        }

    @builtins.property
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosZoneVpcBinder.VpcsProperty]]]:
        '''
        :Property: vpcs:
        '''
        result = self._values.get("vpcs")
        assert result is not None, "Required property 'vpcs' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosZoneVpcBinder.VpcsProperty]]], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: zoneId: Zone Id
        '''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosZoneVpcBinderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class UserVpcAuthorization(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.UserVpcAuthorization",
):
    '''A ROS resource type:  ``ALIYUN::PVTZ::UserVpcAuthorization``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "UserVpcAuthorizationProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PVTZ::UserVpcAuthorization``.

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
    @jsii.member(jsii_name="attrAuthorizedUserId")
    def attr_authorized_user_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AuthorizedUserId: The account ID of the user who authorizes the resource.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAuthorizedUserId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAuthType")
    def attr_auth_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute AuthType: Authorization type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAuthType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.UserVpcAuthorizationProps",
    jsii_struct_bases=[],
    name_mapping={
        "authorized_user_id": "authorizedUserId",
        "auth_channel": "authChannel",
        "auth_code": "authCode",
        "auth_type": "authType",
    },
)
class UserVpcAuthorizationProps:
    def __init__(
        self,
        *,
        authorized_user_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        auth_channel: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auth_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auth_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PVTZ::UserVpcAuthorization``.

        :param authorized_user_id: Property authorizedUserId: The account ID of the user who authorizes the resource.
        :param auth_channel: Property authChannel: Authorization channel. Valid values: AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct. RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
        :param auth_code: Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
        :param auth_type: Property authType: Authorization type.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "authorized_user_id": authorized_user_id,
        }
        if auth_channel is not None:
            self._values["auth_channel"] = auth_channel
        if auth_code is not None:
            self._values["auth_code"] = auth_code
        if auth_type is not None:
            self._values["auth_type"] = auth_type

    @builtins.property
    def authorized_user_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property authorizedUserId: The account ID of the user who authorizes the resource.'''
        result = self._values.get("authorized_user_id")
        assert result is not None, "Required property 'authorized_user_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def auth_channel(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property authChannel: Authorization channel.

        Valid values:
        AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
        RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
        '''
        result = self._values.get("auth_channel")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auth_code(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.'''
        result = self._values.get("auth_code")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auth_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property authType: Authorization type.'''
        result = self._values.get("auth_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserVpcAuthorizationProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Zone(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.Zone",
):
    '''A ROS resource type:  ``ALIYUN::PVTZ::Zone``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ZoneProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PVTZ::Zone``.

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
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneId: Zone ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneName")
    def attr_zone_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneName: Zone name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneTag")
    def attr_zone_tag(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneTag: Zone label.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneTag"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneType")
    def attr_zone_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneType: Zone type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.ZoneProps",
    jsii_struct_bases=[],
    name_mapping={
        "zone_name": "zoneName",
        "proxy_pattern": "proxyPattern",
        "remark": "remark",
        "zone_tag": "zoneTag",
        "zone_type": "zoneType",
    },
)
class ZoneProps:
    def __init__(
        self,
        *,
        zone_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        proxy_pattern: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        remark: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_tag: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        zone_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PVTZ::Zone``.

        :param zone_name: Property zoneName: Zone name.
        :param proxy_pattern: Property proxyPattern: ZONE: completely hijack the entire zone. RECORD: Incomplete hijacking, recursive resolution agent. Default to ZONE.
        :param remark: Property remark: 50 characters at most. It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        :param zone_tag: Property zoneTag: Zone label. It will be ignored when ZoneType is AUTH_ZONE.
        :param zone_type: Property zoneType: Zone type. For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "zone_name": zone_name,
        }
        if proxy_pattern is not None:
            self._values["proxy_pattern"] = proxy_pattern
        if remark is not None:
            self._values["remark"] = remark
        if zone_tag is not None:
            self._values["zone_tag"] = zone_tag
        if zone_type is not None:
            self._values["zone_type"] = zone_type

    @builtins.property
    def zone_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneName: Zone name.'''
        result = self._values.get("zone_name")
        assert result is not None, "Required property 'zone_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def proxy_pattern(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property proxyPattern: ZONE: completely hijack the entire zone.

        RECORD: Incomplete hijacking, recursive resolution agent.
        Default to ZONE.
        '''
        result = self._values.get("proxy_pattern")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property remark: 50 characters at most.

        It can only contain numbers, Chinese, English and special characters: "_-,.，。".
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_tag(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneTag: Zone label.

        It will be ignored when ZoneType is AUTH_ZONE.
        '''
        result = self._values.get("zone_tag")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def zone_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property zoneType: Zone type.

        For instance: AUTH_ZONE, CLOUD_PRODUCT_ZONE.
        '''
        result = self._values.get("zone_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZoneProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ZoneRecord(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.ZoneRecord",
):
    '''A ROS resource type:  ``ALIYUN::PVTZ::ZoneRecord``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ZoneRecordProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PVTZ::ZoneRecord``.

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
    @jsii.member(jsii_name="attrRecord")
    def attr_record(self) -> ros_cdk_core.IResolvable:
        '''Attribute Record: Record data.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRecord"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRecordId")
    def attr_record_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute RecordId: Parsing record Id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRecordId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneId: Zone ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.ZoneRecordProps",
    jsii_struct_bases=[],
    name_mapping={
        "rr": "rr",
        "status": "status",
        "type": "type",
        "value": "value",
        "zone_id": "zoneId",
        "priority": "priority",
        "ttl": "ttl",
    },
)
class ZoneRecordProps:
    def __init__(
        self,
        *,
        rr: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        status: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        priority: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ttl: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::PVTZ::ZoneRecord``.

        :param rr: Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.
        :param status: Property status: Allowed values: [ENABLE, DISABLE].
        :param type: Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.
        :param value: Property value: Record value.
        :param zone_id: Property zoneId: Zone Id.
        :param priority: Property priority: MX record priority, value range [1,99]. Default to 10.
        :param ttl: Property ttl: Survival time, default is 60.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "rr": rr,
            "status": status,
            "type": type,
            "value": value,
            "zone_id": zone_id,
        }
        if priority is not None:
            self._values["priority"] = priority
        if ttl is not None:
            self._values["ttl"] = ttl

    @builtins.property
    def rr(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property rr: Host record, if you want to resolve @.exmaple.com, the host record should fill in "@" instead of empty.'''
        result = self._values.get("rr")
        assert result is not None, "Required property 'rr' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def status(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property status: Allowed values: [ENABLE, DISABLE].'''
        result = self._values.get("status")
        assert result is not None, "Required property 'status' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def value(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property value: Record value.'''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: Zone Id.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def priority(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property priority: MX record priority, value range [1,99].

        Default to 10.
        '''
        result = self._values.get("priority")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ttl(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property ttl: Survival time, default is 60.'''
        result = self._values.get("ttl")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZoneRecordProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ZoneVpcBinder(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-pvtz.ZoneVpcBinder",
):
    '''A ROS resource type:  ``ALIYUN::PVTZ::ZoneVpcBinder``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ZoneVpcBinderProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::PVTZ::ZoneVpcBinder``.

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
    @jsii.member(jsii_name="attrVpcs")
    def attr_vpcs(self) -> ros_cdk_core.IResolvable:
        '''Attribute Vpcs: Vpc list.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcs"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrZoneId")
    def attr_zone_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ZoneId: Zone Id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrZoneId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-pvtz.ZoneVpcBinderProps",
    jsii_struct_bases=[],
    name_mapping={"vpcs": "vpcs", "zone_id": "zoneId"},
)
class ZoneVpcBinderProps:
    def __init__(
        self,
        *,
        vpcs: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosZoneVpcBinder.VpcsProperty]]],
        zone_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::PVTZ::ZoneVpcBinder``.

        :param vpcs: Property vpcs:.
        :param zone_id: Property zoneId: Zone Id.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "vpcs": vpcs,
            "zone_id": zone_id,
        }

    @builtins.property
    def vpcs(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosZoneVpcBinder.VpcsProperty]]]:
        '''Property vpcs:.'''
        result = self._values.get("vpcs")
        assert result is not None, "Required property 'vpcs' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosZoneVpcBinder.VpcsProperty]]], result)

    @builtins.property
    def zone_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property zoneId: Zone Id.'''
        result = self._values.get("zone_id")
        assert result is not None, "Required property 'zone_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ZoneVpcBinderProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "RosUserVpcAuthorization",
    "RosUserVpcAuthorizationProps",
    "RosZone",
    "RosZoneProps",
    "RosZoneRecord",
    "RosZoneRecordProps",
    "RosZoneVpcBinder",
    "RosZoneVpcBinderProps",
    "UserVpcAuthorization",
    "UserVpcAuthorizationProps",
    "Zone",
    "ZoneProps",
    "ZoneRecord",
    "ZoneRecordProps",
    "ZoneVpcBinder",
    "ZoneVpcBinderProps",
]

publication.publish()
