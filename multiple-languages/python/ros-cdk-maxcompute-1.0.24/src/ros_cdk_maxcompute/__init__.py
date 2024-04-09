'''
## Aliyun ROS MAXCOMPUTE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as MAXCOMPUTE from '@alicloud/ros-cdk-maxcompute';
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


class Project(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-maxcompute.Project",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MaxCompute::Project``, which is used to create a MaxCompute project.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosProject``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fd2adf694155a6e1242b54997fbba764817259263231d9b8a5f5e28b62283fe5)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: The name of the project.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a3cfabc9435efb8c3f998ad3aa4b32babadd1a8a93d7989d3d8c9c172dce0924)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0173fbd857114694ffc0427a60877c21da150c27684dbf1845a0e373a5ed4c73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "ProjectProps":
        return typing.cast("ProjectProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "ProjectProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44cfc7c2c87170b74d15f3b885ed1bb44fa515362c3dda12127ae3201045b8c4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b730c8017e0915a944b53b019518d6c0b43fbc3339cc52953d14fa0a5d59f074)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-maxcompute.ProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "charge_type": "chargeType",
        "comment": "comment",
        "default_quota": "defaultQuota",
        "ip_white_list": "ipWhiteList",
        "properties": "properties",
    },
)
class ProjectProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_quota: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_white_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosProject.IpWhiteListProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        properties: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosProject.PropertiesProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``Project``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project

        :param name: Property name: The name of the project. It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
        :param charge_type: Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
        :param comment: Property comment: The comments of project.
        :param default_quota: Property defaultQuota: Default Computing Resource Group.
        :param ip_white_list: Property ipWhiteList: IP whitelist.
        :param properties: Property properties: Project base attributes.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f52b830e222bfe6d4cbab0f28c0f99b5d1b046f1fad435d60beac8e5d8c1b34e)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument default_quota", value=default_quota, expected_type=type_hints["default_quota"])
            check_type(argname="argument ip_white_list", value=ip_white_list, expected_type=type_hints["ip_white_list"])
            check_type(argname="argument properties", value=properties, expected_type=type_hints["properties"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if comment is not None:
            self._values["comment"] = comment
        if default_quota is not None:
            self._values["default_quota"] = default_quota
        if ip_white_list is not None:
            self._values["ip_white_list"] = ip_white_list
        if properties is not None:
            self._values["properties"] = properties

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: The name of the project.

        It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property chargeType: Quota payment type, support PayAsYouGo, Subscription.'''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comment: The comments of project.'''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_quota(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property defaultQuota: Default Computing Resource Group.'''
        result = self._values.get("default_quota")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_white_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.IpWhiteListProperty"]]:
        '''Property ipWhiteList: IP whitelist.'''
        result = self._values.get("ip_white_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.IpWhiteListProperty"]], result)

    @builtins.property
    def properties(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.PropertiesProperty"]]:
        '''Property properties: Project base attributes.'''
        result = self._values.get("properties")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.PropertiesProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosProject(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-maxcompute.RosProject",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MaxCompute::Project``, which is used to create a MaxCompute project.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Project`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosProjectProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9e95406f0d39a1dc7270f9e3943bfa5eda62739579e1588344f157874b237d7)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f282465ccdb7c364952c9a852ee6586bba1845237140ba0d8e4404a814083445)
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
        :Attribute: Name: The name of the project.
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
            type_hints = typing.get_type_hints(_typecheckingstub__fcbbfc58480e0259e13cc8839e516d9af3d87206a121831c6f869b5263755698)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The name of the project.
        It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b80b1670d8a1a16cc8e1b1fec168ff876feb45b05418bd9e394e2cf69de6a34a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: Quota payment type, support PayAsYouGo, Subscription.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c99bb1f2fdee5dfc00d86e5db5918dc504d927449ee61d872330ac7ab3fffb6d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The comments of project.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a88df86133ce18b613e9f0c7691f0d2796226d7f1094732b843a068077987abf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="defaultQuota")
    def default_quota(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultQuota: Default Computing Resource Group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "defaultQuota"))

    @default_quota.setter
    def default_quota(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e1a3d4535003c23d6c745c8627ac0b0f7796e70e1b65e89310d668d8cef2fb73)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultQuota", value)

    @builtins.property
    @jsii.member(jsii_name="ipWhiteList")
    def ip_white_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.IpWhiteListProperty"]]:
        '''
        :Property: ipWhiteList: IP whitelist.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.IpWhiteListProperty"]], jsii.get(self, "ipWhiteList"))

    @ip_white_list.setter
    def ip_white_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.IpWhiteListProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1276537fdc9de9631f45f44973d19a5d46e721522d5e6a3f8791ef699e7ec2c3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ipWhiteList", value)

    @builtins.property
    @jsii.member(jsii_name="properties")
    def properties(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.PropertiesProperty"]]:
        '''
        :Property: properties: Project base attributes.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.PropertiesProperty"]], jsii.get(self, "properties"))

    @properties.setter
    def properties(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.PropertiesProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cbea774dffbe9cdf0dc1ec046e680cab698d4bf9ead81af971e95bc773699ca4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "properties", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-maxcompute.RosProject.EncryptionProperty",
        jsii_struct_bases=[],
        name_mapping={"algorithm": "algorithm", "enable": "enable", "key": "key"},
    )
    class EncryptionProperty:
        def __init__(
            self,
            *,
            algorithm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param algorithm: 
            :param enable: 
            :param key: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__ee42f21ceba2476ddecb44a6d7bedf89faa37386a92cda3ea93f99549e5cfe0a)
                check_type(argname="argument algorithm", value=algorithm, expected_type=type_hints["algorithm"])
                check_type(argname="argument enable", value=enable, expected_type=type_hints["enable"])
                check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if algorithm is not None:
                self._values["algorithm"] = algorithm
            if enable is not None:
                self._values["enable"] = enable
            if key is not None:
                self._values["key"] = key

        @builtins.property
        def algorithm(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: algorithm: Encryption Algorithm.
            '''
            result = self._values.get("algorithm")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enable: Whether to open encryption.
            '''
            result = self._values.get("enable")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def key(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: key: Encryption algorithm key.
            '''
            result = self._values.get("key")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "EncryptionProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-maxcompute.RosProject.IpWhiteListProperty",
        jsii_struct_bases=[],
        name_mapping={"ip_list": "ipList", "vpc_ip_list": "vpcIpList"},
    )
    class IpWhiteListProperty:
        def __init__(
            self,
            *,
            ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            vpc_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param ip_list: 
            :param vpc_ip_list: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__00b5bf366f8c33b9be6c1d9ea4d74651a4074ed9d602406b45afb3b22dd372b3)
                check_type(argname="argument ip_list", value=ip_list, expected_type=type_hints["ip_list"])
                check_type(argname="argument vpc_ip_list", value=vpc_ip_list, expected_type=type_hints["vpc_ip_list"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if ip_list is not None:
                self._values["ip_list"] = ip_list
            if vpc_ip_list is not None:
                self._values["vpc_ip_list"] = vpc_ip_list

        @builtins.property
        def ip_list(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: ipList: Classic network IP white list. Separate multiple items with commas.
            '''
            result = self._values.get("ip_list")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def vpc_ip_list(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: vpcIpList: VPC network whitelist. Separate multiple items with commas.
            '''
            result = self._values.get("vpc_ip_list")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "IpWhiteListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-maxcompute.RosProject.PropertiesProperty",
        jsii_struct_bases=[],
        name_mapping={
            "allow_full_scan": "allowFullScan",
            "enable_decimal2": "enableDecimal2",
            "encryption": "encryption",
            "retention_days": "retentionDays",
            "sql_metering_max": "sqlMeteringMax",
            "type_system": "typeSystem",
        },
    )
    class PropertiesProperty:
        def __init__(
            self,
            *,
            allow_full_scan: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            enable_decimal2: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            encryption: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosProject.EncryptionProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
            retention_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sql_metering_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type_system: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param allow_full_scan: 
            :param enable_decimal2: 
            :param encryption: 
            :param retention_days: 
            :param sql_metering_max: 
            :param type_system: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__cbd01f639bae5c5a25076fe041b94bf9f276dcb5b69c7fbcdeb2822c48b3c46d)
                check_type(argname="argument allow_full_scan", value=allow_full_scan, expected_type=type_hints["allow_full_scan"])
                check_type(argname="argument enable_decimal2", value=enable_decimal2, expected_type=type_hints["enable_decimal2"])
                check_type(argname="argument encryption", value=encryption, expected_type=type_hints["encryption"])
                check_type(argname="argument retention_days", value=retention_days, expected_type=type_hints["retention_days"])
                check_type(argname="argument sql_metering_max", value=sql_metering_max, expected_type=type_hints["sql_metering_max"])
                check_type(argname="argument type_system", value=type_system, expected_type=type_hints["type_system"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if allow_full_scan is not None:
                self._values["allow_full_scan"] = allow_full_scan
            if enable_decimal2 is not None:
                self._values["enable_decimal2"] = enable_decimal2
            if encryption is not None:
                self._values["encryption"] = encryption
            if retention_days is not None:
                self._values["retention_days"] = retention_days
            if sql_metering_max is not None:
                self._values["sql_metering_max"] = sql_metering_max
            if type_system is not None:
                self._values["type_system"] = type_system

        @builtins.property
        def allow_full_scan(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: allowFullScan: Whether to allow full table scan.
            '''
            result = self._values.get("allow_full_scan")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def enable_decimal2(
            self,
        ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: enableDecimal2: Whether to turn on Decimal2.0.
            '''
            result = self._values.get("enable_decimal2")
            return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def encryption(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.EncryptionProperty"]]:
            '''
            :Property: encryption: Whether encryption is turned on.
            '''
            result = self._values.get("encryption")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosProject.EncryptionProperty"]], result)

        @builtins.property
        def retention_days(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: retentionDays: Job default retention time.
            '''
            result = self._values.get("retention_days")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sql_metering_max(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: sqlMeteringMax: SQL charge limit.
            '''
            result = self._values.get("sql_metering_max")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type_system(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: typeSystem: Type system.
            '''
            result = self._values.get("type_system")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PropertiesProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-maxcompute.RosProjectProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "charge_type": "chargeType",
        "comment": "comment",
        "default_quota": "defaultQuota",
        "ip_white_list": "ipWhiteList",
        "properties": "properties",
    },
)
class RosProjectProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        default_quota: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ip_white_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProject.IpWhiteListProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        properties: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProject.PropertiesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``RosProject``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project

        :param name: 
        :param charge_type: 
        :param comment: 
        :param default_quota: 
        :param ip_white_list: 
        :param properties: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61d48f8e15e796a1b6ddf7a20bb507aa1a0513bd716e166ed3e573da258f20e1)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument default_quota", value=default_quota, expected_type=type_hints["default_quota"])
            check_type(argname="argument ip_white_list", value=ip_white_list, expected_type=type_hints["ip_white_list"])
            check_type(argname="argument properties", value=properties, expected_type=type_hints["properties"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
        }
        if charge_type is not None:
            self._values["charge_type"] = charge_type
        if comment is not None:
            self._values["comment"] = comment
        if default_quota is not None:
            self._values["default_quota"] = default_quota
        if ip_white_list is not None:
            self._values["ip_white_list"] = ip_white_list
        if properties is not None:
            self._values["properties"] = properties

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        name: The name of the project.
        It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: chargeType: Quota payment type, support PayAsYouGo, Subscription.
        '''
        result = self._values.get("charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: The comments of project.
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def default_quota(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: defaultQuota: Default Computing Resource Group.
        '''
        result = self._values.get("default_quota")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ip_white_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProject.IpWhiteListProperty]]:
        '''
        :Property: ipWhiteList: IP whitelist.
        '''
        result = self._values.get("ip_white_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProject.IpWhiteListProperty]], result)

    @builtins.property
    def properties(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProject.PropertiesProperty]]:
        '''
        :Property: properties: Project base attributes.
        '''
        result = self._values.get("properties")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProject.PropertiesProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosProjectProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosTable(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-maxcompute.RosTable",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::MaxCompute::Table``, which is used to create a table.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Table`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosTableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0a93caa95f18177a408c8f0f014e6af69f0994cba9a0a43b04d1051c051e8f26)
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
            type_hints = typing.get_type_hints(_typecheckingstub__7ccdd070e469841620a1dac12ddedd90c12b0f2f134d8f17a73d72ed49cb96cf)
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
        :Attribute: Name: Table name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Project: Project name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProject"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__2f24e294f106d465f843f3f4626b424f3b0f53c9af63f528ef9fbd0daac0bf8d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="name")
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Table name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "name"))

    @name.setter
    def name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__728e203929b5d8911692f30b9e8ae1f76a3363c0d63dec1517533cb211d10066)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "name", value)

    @builtins.property
    @jsii.member(jsii_name="project")
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: Project name, if not provided, will be the default project
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "project"))

    @project.setter
    def project(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dea6c6e359149d9555a7758db26d984f9d88bc76f6666d59d5e530f3891e9f10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "project", value)

    @builtins.property
    @jsii.member(jsii_name="comment")
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: Table comment
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "comment"))

    @comment.setter
    def comment(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b361428301795714cf6452cb50d640f52e265ecf674ef4f47f70dcc0b3464b26)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "comment", value)

    @builtins.property
    @jsii.member(jsii_name="ifNotExists")
    def if_not_exists(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ifNotExists: If you create a table by using the name of an existing table and
        the parameter set to false, an error is returned.
        If you specify the if not exists parameter, a success message
        is returned when you create a table by using the name of an
        existing table. The success message is returned even if the
        schema of the existing table is different from that of the table you want to create.
        If you create a table by using the name of an existing table,
        the table is not created and the metadata of the existing table is not changed.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ifNotExists"))

    @if_not_exists.setter
    def if_not_exists(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__165d863b48d2db731d33131a9f829ef1a663ab236a5add8c25868bc99e8778ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ifNotExists", value)

    @builtins.property
    @jsii.member(jsii_name="lifecycle")
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lifecycle: Table's lifecycle.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "lifecycle"))

    @lifecycle.setter
    def lifecycle(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ff95f72a3c5da7770896e658e4b6b3f83f57afb483aeed31c3d09d07fe176b8c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "lifecycle", value)

    @builtins.property
    @jsii.member(jsii_name="schema")
    def schema(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.SchemaProperty"]]:
        '''
        :Property: schema: Table schema
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.SchemaProperty"]], jsii.get(self, "schema"))

    @schema.setter
    def schema(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.SchemaProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91735209ce965c3631c059939e10e84a5b075e0cd827fb0fea073b74b4206487)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "schema", value)

    @builtins.property
    @jsii.member(jsii_name="stringSchema")
    def string_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        stringSchema: Create a table with field names and field type strings.
        Example: 'num bigint, num2 double', 'pt string'
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "stringSchema"))

    @string_schema.setter
    def string_schema(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ee100ece19ed3f1d3069eab584b1cc019297c6ad3697038a28018b9bf3e9b04)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "stringSchema", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-maxcompute.RosTable.ColumnsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type", "comment": "comment"},
    )
    class ColumnsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param comment: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__63f561c4468a5bdf632469b1b2123a78fd54656292cf7a28913497095c0e2bd8)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if comment is not None:
                self._values["comment"] = comment

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Column name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: Column type.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: comment: Column comment.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "ColumnsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-maxcompute.RosTable.PartitionsProperty",
        jsii_struct_bases=[],
        name_mapping={"name": "name", "type": "type", "comment": "comment"},
    )
    class PartitionsProperty:
        def __init__(
            self,
            *,
            name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param name: 
            :param type: 
            :param comment: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__db7d6523b0d2f71904129b8f6cc7a1ec0e7117117f1c0be1cbccfc8aa744e6a0)
                check_type(argname="argument name", value=name, expected_type=type_hints["name"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "name": name,
                "type": type,
            }
            if comment is not None:
                self._values["comment"] = comment

        @builtins.property
        def name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: name: Partition name.
            '''
            result = self._values.get("name")
            assert result is not None, "Required property 'name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: type: Partition type.
            '''
            result = self._values.get("type")
            assert result is not None, "Required property 'type' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: comment: Partition comment.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PartitionsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-maxcompute.RosTable.SchemaProperty",
        jsii_struct_bases=[],
        name_mapping={"columns": "columns", "partitions": "partitions"},
    )
    class SchemaProperty:
        def __init__(
            self,
            *,
            columns: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosTable.ColumnsProperty", typing.Dict[builtins.str, typing.Any]]]]],
            partitions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosTable.PartitionsProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        ) -> None:
            '''
            :param columns: 
            :param partitions: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__5ca7e469386a99064504b43a727d9768cf0087af7c2c7b675ea149e89671da6c)
                check_type(argname="argument columns", value=columns, expected_type=type_hints["columns"])
                check_type(argname="argument partitions", value=partitions, expected_type=type_hints["partitions"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "columns": columns,
            }
            if partitions is not None:
                self._values["partitions"] = partitions

        @builtins.property
        def columns(
            self,
        ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.ColumnsProperty"]]]:
            '''
            :Property: columns:
            '''
            result = self._values.get("columns")
            assert result is not None, "Required property 'columns' is missing"
            return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.ColumnsProperty"]]], result)

        @builtins.property
        def partitions(
            self,
        ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.PartitionsProperty"]]]]:
            '''
            :Property: partitions:
            '''
            result = self._values.get("partitions")
            return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosTable.PartitionsProperty"]]]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "SchemaProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-maxcompute.RosTableProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "project": "project",
        "comment": "comment",
        "if_not_exists": "ifNotExists",
        "lifecycle": "lifecycle",
        "schema": "schema",
        "string_schema": "stringSchema",
    },
)
class RosTableProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        if_not_exists: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        schema: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SchemaProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        string_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosTable``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table

        :param name: 
        :param project: 
        :param comment: 
        :param if_not_exists: 
        :param lifecycle: 
        :param schema: 
        :param string_schema: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__13d11317f6fa0701f095cdc039992757f36b1475d034c1b4b5ff579ef84b8733)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument if_not_exists", value=if_not_exists, expected_type=type_hints["if_not_exists"])
            check_type(argname="argument lifecycle", value=lifecycle, expected_type=type_hints["lifecycle"])
            check_type(argname="argument schema", value=schema, expected_type=type_hints["schema"])
            check_type(argname="argument string_schema", value=string_schema, expected_type=type_hints["string_schema"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "project": project,
        }
        if comment is not None:
            self._values["comment"] = comment
        if if_not_exists is not None:
            self._values["if_not_exists"] = if_not_exists
        if lifecycle is not None:
            self._values["lifecycle"] = lifecycle
        if schema is not None:
            self._values["schema"] = schema
        if string_schema is not None:
            self._values["string_schema"] = string_schema

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: name: Table name
        '''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: project: Project name, if not provided, will be the default project
        '''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: comment: Table comment
        '''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def if_not_exists(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ifNotExists: If you create a table by using the name of an existing table and
        the parameter set to false, an error is returned.
        If you specify the if not exists parameter, a success message
        is returned when you create a table by using the name of an
        existing table. The success message is returned even if the
        schema of the existing table is different from that of the table you want to create.
        If you create a table by using the name of an existing table,
        the table is not created and the metadata of the existing table is not changed.
        '''
        result = self._values.get("if_not_exists")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: lifecycle: Table's lifecycle.
        '''
        result = self._values.get("lifecycle")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def schema(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SchemaProperty]]:
        '''
        :Property: schema: Table schema
        '''
        result = self._values.get("schema")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SchemaProperty]], result)

    @builtins.property
    def string_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        stringSchema: Create a table with field names and field type strings.
        Example: 'num bigint, num2 double', 'pt string'
        '''
        result = self._values.get("string_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Table(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-maxcompute.Table",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::MaxCompute::Table``, which is used to create a table.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosTable``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["TableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5958eb37368224ea9efcf7b97ae99e77e791de527911a952655eda072f68e30d)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrName")
    def attr_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Name: Table name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrName"))

    @builtins.property
    @jsii.member(jsii_name="attrProject")
    def attr_project(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Project: Project name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProject"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73c0da9cd88e570ee70ec270e8ca4a2d92a0327418ffa0ef6dd54933ca1574ba)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24a4d93d198974ab9935086175dd04930b261eb8c20e557c8e83e52236005125)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="props")
    def _props(self) -> "TableProps":
        return typing.cast("TableProps", jsii.get(self, "props"))

    @_props.setter
    def _props(self, value: "TableProps") -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec1ebf720115d38c203daf1014073ac4de37ff037ec15db33b09689638dd5e92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "props", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a704eb2178c576c103d201ef5c899d9dc0facb10a88be03622a03fd7d6b2cde)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-maxcompute.TableProps",
    jsii_struct_bases=[],
    name_mapping={
        "name": "name",
        "project": "project",
        "comment": "comment",
        "if_not_exists": "ifNotExists",
        "lifecycle": "lifecycle",
        "schema": "schema",
        "string_schema": "stringSchema",
    },
)
class TableProps:
    def __init__(
        self,
        *,
        name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        if_not_exists: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        schema: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SchemaProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        string_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Table``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table

        :param name: Property name: Table name.
        :param project: Property project: Project name, if not provided, will be the default project.
        :param comment: Property comment: Table comment.
        :param if_not_exists: Property ifNotExists: If you create a table by using the name of an existing table and the parameter set to false, an error is returned. If you specify the if not exists parameter, a success message is returned when you create a table by using the name of an existing table. The success message is returned even if the schema of the existing table is different from that of the table you want to create. If you create a table by using the name of an existing table, the table is not created and the metadata of the existing table is not changed.
        :param lifecycle: Property lifecycle: Table's lifecycle.
        :param schema: Property schema: Table schema.
        :param string_schema: Property stringSchema: Create a table with field names and field type strings. Example: 'num bigint, num2 double', 'pt string'
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c0952bcffaf713092591d63602220c922497d10727a5b4c0ca21cb11eee2f4b)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument project", value=project, expected_type=type_hints["project"])
            check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            check_type(argname="argument if_not_exists", value=if_not_exists, expected_type=type_hints["if_not_exists"])
            check_type(argname="argument lifecycle", value=lifecycle, expected_type=type_hints["lifecycle"])
            check_type(argname="argument schema", value=schema, expected_type=type_hints["schema"])
            check_type(argname="argument string_schema", value=string_schema, expected_type=type_hints["string_schema"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "name": name,
            "project": project,
        }
        if comment is not None:
            self._values["comment"] = comment
        if if_not_exists is not None:
            self._values["if_not_exists"] = if_not_exists
        if lifecycle is not None:
            self._values["lifecycle"] = lifecycle
        if schema is not None:
            self._values["schema"] = schema
        if string_schema is not None:
            self._values["string_schema"] = string_schema

    @builtins.property
    def name(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property name: Table name.'''
        result = self._values.get("name")
        assert result is not None, "Required property 'name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def project(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property project: Project name, if not provided, will be the default project.'''
        result = self._values.get("project")
        assert result is not None, "Required property 'project' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def comment(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property comment: Table comment.'''
        result = self._values.get("comment")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def if_not_exists(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned.

        If you specify the if not exists parameter, a success message
        is returned when you create a table by using the name of an
        existing table. The success message is returned even if the
        schema of the existing table is different from that of the table you want to create.
        If you create a table by using the name of an existing table,
        the table is not created and the metadata of the existing table is not changed.
        '''
        result = self._values.get("if_not_exists")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def lifecycle(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property lifecycle: Table's lifecycle.'''
        result = self._values.get("lifecycle")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def schema(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SchemaProperty]]:
        '''Property schema: Table schema.'''
        result = self._values.get("schema")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SchemaProperty]], result)

    @builtins.property
    def string_schema(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property stringSchema: Create a table with field names and field type strings.

        Example: 'num bigint, num2 double', 'pt string'
        '''
        result = self._values.get("string_schema")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Project",
    "ProjectProps",
    "RosProject",
    "RosProjectProps",
    "RosTable",
    "RosTableProps",
    "Table",
    "TableProps",
]

publication.publish()

def _typecheckingstub__fd2adf694155a6e1242b54997fbba764817259263231d9b8a5f5e28b62283fe5(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a3cfabc9435efb8c3f998ad3aa4b32babadd1a8a93d7989d3d8c9c172dce0924(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0173fbd857114694ffc0427a60877c21da150c27684dbf1845a0e373a5ed4c73(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44cfc7c2c87170b74d15f3b885ed1bb44fa515362c3dda12127ae3201045b8c4(
    value: ProjectProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b730c8017e0915a944b53b019518d6c0b43fbc3339cc52953d14fa0a5d59f074(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f52b830e222bfe6d4cbab0f28c0f99b5d1b046f1fad435d60beac8e5d8c1b34e(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_quota: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_white_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProject.IpWhiteListProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    properties: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProject.PropertiesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9e95406f0d39a1dc7270f9e3943bfa5eda62739579e1588344f157874b237d7(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosProjectProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f282465ccdb7c364952c9a852ee6586bba1845237140ba0d8e4404a814083445(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fcbbfc58480e0259e13cc8839e516d9af3d87206a121831c6f869b5263755698(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b80b1670d8a1a16cc8e1b1fec168ff876feb45b05418bd9e394e2cf69de6a34a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c99bb1f2fdee5dfc00d86e5db5918dc504d927449ee61d872330ac7ab3fffb6d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a88df86133ce18b613e9f0c7691f0d2796226d7f1094732b843a068077987abf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e1a3d4535003c23d6c745c8627ac0b0f7796e70e1b65e89310d668d8cef2fb73(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1276537fdc9de9631f45f44973d19a5d46e721522d5e6a3f8791ef699e7ec2c3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProject.IpWhiteListProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbea774dffbe9cdf0dc1ec046e680cab698d4bf9ead81af971e95bc773699ca4(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosProject.PropertiesProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee42f21ceba2476ddecb44a6d7bedf89faa37386a92cda3ea93f99549e5cfe0a(
    *,
    algorithm: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00b5bf366f8c33b9be6c1d9ea4d74651a4074ed9d602406b45afb3b22dd372b3(
    *,
    ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vpc_ip_list: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cbd01f639bae5c5a25076fe041b94bf9f276dcb5b69c7fbcdeb2822c48b3c46d(
    *,
    allow_full_scan: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_decimal2: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    encryption: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProject.EncryptionProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    retention_days: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sql_metering_max: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type_system: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61d48f8e15e796a1b6ddf7a20bb507aa1a0513bd716e166ed3e573da258f20e1(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    default_quota: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ip_white_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProject.IpWhiteListProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    properties: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosProject.PropertiesProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0a93caa95f18177a408c8f0f014e6af69f0994cba9a0a43b04d1051c051e8f26(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosTableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ccdd070e469841620a1dac12ddedd90c12b0f2f134d8f17a73d72ed49cb96cf(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f24e294f106d465f843f3f4626b424f3b0f53c9af63f528ef9fbd0daac0bf8d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__728e203929b5d8911692f30b9e8ae1f76a3363c0d63dec1517533cb211d10066(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dea6c6e359149d9555a7758db26d984f9d88bc76f6666d59d5e530f3891e9f10(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b361428301795714cf6452cb50d640f52e265ecf674ef4f47f70dcc0b3464b26(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__165d863b48d2db731d33131a9f829ef1a663ab236a5add8c25868bc99e8778ac(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ff95f72a3c5da7770896e658e4b6b3f83f57afb483aeed31c3d09d07fe176b8c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91735209ce965c3631c059939e10e84a5b075e0cd827fb0fea073b74b4206487(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosTable.SchemaProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ee100ece19ed3f1d3069eab584b1cc019297c6ad3697038a28018b9bf3e9b04(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63f561c4468a5bdf632469b1b2123a78fd54656292cf7a28913497095c0e2bd8(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__db7d6523b0d2f71904129b8f6cc7a1ec0e7117117f1c0be1cbccfc8aa744e6a0(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ca7e469386a99064504b43a727d9768cf0087af7c2c7b675ea149e89671da6c(
    *,
    columns: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.ColumnsProperty, typing.Dict[builtins.str, typing.Any]]]]],
    partitions: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.PartitionsProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__13d11317f6fa0701f095cdc039992757f36b1475d034c1b4b5ff579ef84b8733(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    if_not_exists: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schema: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SchemaProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    string_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5958eb37368224ea9efcf7b97ae99e77e791de527911a952655eda072f68e30d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[TableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73c0da9cd88e570ee70ec270e8ca4a2d92a0327418ffa0ef6dd54933ca1574ba(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24a4d93d198974ab9935086175dd04930b261eb8c20e557c8e83e52236005125(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec1ebf720115d38c203daf1014073ac4de37ff037ec15db33b09689638dd5e92(
    value: TableProps,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a704eb2178c576c103d201ef5c899d9dc0facb10a88be03622a03fd7d6b2cde(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c0952bcffaf713092591d63602220c922497d10727a5b4c0ca21cb11eee2f4b(
    *,
    name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    project: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    if_not_exists: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    lifecycle: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    schema: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosTable.SchemaProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    string_schema: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
