'''
## Aliyun ROS SEARCHENGINE Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as SEARCHENGINE from '@alicloud/ros-cdk-searchengine';
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
    jsii_type="@alicloud/ros-cdk-searchengine.Instance",
):
    '''A ROS resource type:  ``ALIYUN::SearchEngine::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SearchEngine::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f2281d8eb48c333e551c4f3bae839049e99db31002707f9c02b179624c98ccf2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Endpoint: The endpoint of instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-searchengine.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "charge_type": "chargeType",
        "password": "password",
        "qrs_num": "qrsNum",
        "qrs_spec": "qrsSpec",
        "searcher_doc_size": "searcherDocSize",
        "searcher_num": "searcherNum",
        "searcher_spec": "searcherSpec",
        "user_name": "userName",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        qrs_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        qrs_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        searcher_doc_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        searcher_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        searcher_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SearchEngine::Instance``.

        :param charge_type: Property chargeType: The billing method. Valid values: POSTPAY. POSTPAY: pay-as-you-go.
        :param password: Property password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
        :param qrs_num: Property qrsNum: The number of query nodes.
        :param qrs_spec: Property qrsSpec: The specification of query nodes.
        :param searcher_doc_size: Property searcherDocSize: The storage size of single data node.
        :param searcher_num: Property searcherNum: The number of data nodes.
        :param searcher_spec: Property searcherSpec: The specification of data nodes.
        :param user_name: Property userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
        :param vpc_id: Property vpcId: The ID of VPC.
        :param v_switch_id: Property vSwitchId: The ID of vSwitch.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98c51f507ded5a1e7670bd45d89c1c9d3260467ab172b247b916ae6b65477dfd)
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument qrs_num", value=qrs_num, expected_type=type_hints["qrs_num"])
            check_type(argname="argument qrs_spec", value=qrs_spec, expected_type=type_hints["qrs_spec"])
            check_type(argname="argument searcher_doc_size", value=searcher_doc_size, expected_type=type_hints["searcher_doc_size"])
            check_type(argname="argument searcher_num", value=searcher_num, expected_type=type_hints["searcher_num"])
            check_type(argname="argument searcher_spec", value=searcher_spec, expected_type=type_hints["searcher_spec"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "charge_type": charge_type,
            "password": password,
            "qrs_num": qrs_num,
            "qrs_spec": qrs_spec,
            "searcher_doc_size": searcher_doc_size,
            "searcher_num": searcher_num,
            "searcher_spec": searcher_spec,
            "user_name": user_name,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property chargeType: The billing method.

        Valid values: POSTPAY.
        POSTPAY: pay-as-you-go.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property password: The password of instance.

        It consists of lowercase letters and numbers, and the length is 6-8 characters.
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qrs_num(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property qrsNum: The number of query nodes.'''
        result = self._values.get("qrs_num")
        assert result is not None, "Required property 'qrs_num' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qrs_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property qrsSpec: The specification of query nodes.'''
        result = self._values.get("qrs_spec")
        assert result is not None, "Required property 'qrs_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def searcher_doc_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property searcherDocSize: The storage size of single data node.'''
        result = self._values.get("searcher_doc_size")
        assert result is not None, "Required property 'searcher_doc_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def searcher_num(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property searcherNum: The number of data nodes.'''
        result = self._values.get("searcher_num")
        assert result is not None, "Required property 'searcher_num' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def searcher_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property searcherSpec: The specification of data nodes.'''
        result = self._values.get("searcher_spec")
        assert result is not None, "Required property 'searcher_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property userName: The user name of instance.

        Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vpcId: The ID of VPC.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vSwitchId: The ID of vSwitch.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

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
    jsii_type="@alicloud/ros-cdk-searchengine.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::SearchEngine::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SearchEngine::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e72ce509173e9a69c93c7da577f5fea4289fd2fe9c5e3c7feba9c6e9fc16d9bb)
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
            type_hints = typing.get_type_hints(_typecheckingstub__00c98592fb3fe4b69e2fcbd4a8133a6e19bf2260ed390431588a1a9193942c50)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Endpoint: The endpoint of instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: The ID of instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="chargeType")
    def charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        chargeType: The billing method. Valid values: POSTPAY.
        POSTPAY: pay-as-you-go.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a07a06e96944533ae9bc45f15608bef62f230646bc5a239a4abb0a419f4fda31)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "chargeType", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20e684f2c3a5625c0e58132636cb32136c55e17ded7469513d9dec58d888185d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce04fa4faccb41c393e617f2563892c329cbad833aeb609892aa5cc9d5e692c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="qrsNum")
    def qrs_num(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: qrsNum: The number of query nodes.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "qrsNum"))

    @qrs_num.setter
    def qrs_num(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__814d287ea01cd472179f88b48371ad450ed2dc54f6617c1938e04d05e7578ff7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qrsNum", value)

    @builtins.property
    @jsii.member(jsii_name="qrsSpec")
    def qrs_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: qrsSpec: The specification of query nodes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "qrsSpec"))

    @qrs_spec.setter
    def qrs_spec(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d3bd7d2865646b59a768eeda2fdc22314ebeb5e2eb0b8efb843414bb8938804)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "qrsSpec", value)

    @builtins.property
    @jsii.member(jsii_name="searcherDocSize")
    def searcher_doc_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: searcherDocSize: The storage size of single data node.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "searcherDocSize"))

    @searcher_doc_size.setter
    def searcher_doc_size(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0f684f0bd5c5b1ea6f2691c0f181f6a22d8075117057b410bd3cf059ba74b375)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searcherDocSize", value)

    @builtins.property
    @jsii.member(jsii_name="searcherNum")
    def searcher_num(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: searcherNum: The number of data nodes.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "searcherNum"))

    @searcher_num.setter
    def searcher_num(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cb20ad7c2a39df97ccfd9e36fedba9fbd2db05a904e2e93fe063bb0d2b734830)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searcherNum", value)

    @builtins.property
    @jsii.member(jsii_name="searcherSpec")
    def searcher_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: searcherSpec: The specification of data nodes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "searcherSpec"))

    @searcher_spec.setter
    def searcher_spec(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1ecbf109e3749e92f95d70fcfcdf87083d6c5cd88c7a0e8fcc95d9ba953fd2d9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "searcherSpec", value)

    @builtins.property
    @jsii.member(jsii_name="userName")
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__300b038aefeaf40120d2bee231ddcf33cb8183a925cf0f45862ebcba18137866)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "userName", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of VPC.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86e79d4c7852c29b8a4887c0bf7697fac35af136707f624fbaccd626695f1520)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of vSwitch.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e124ec6884274bf4445b4d5c59552b4d0e2268f7e2cd84a483be2e73e09f321)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-searchengine.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "charge_type": "chargeType",
        "password": "password",
        "qrs_num": "qrsNum",
        "qrs_spec": "qrsSpec",
        "searcher_doc_size": "searcherDocSize",
        "searcher_num": "searcherNum",
        "searcher_spec": "searcherSpec",
        "user_name": "userName",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        qrs_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        qrs_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        searcher_doc_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        searcher_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        searcher_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SearchEngine::Instance``.

        :param charge_type: 
        :param password: 
        :param qrs_num: 
        :param qrs_spec: 
        :param searcher_doc_size: 
        :param searcher_num: 
        :param searcher_spec: 
        :param user_name: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__73907a760d2a60df01ead8e4a1433fc476c9234bcfe2f6c5bdd897b09edf0937)
            check_type(argname="argument charge_type", value=charge_type, expected_type=type_hints["charge_type"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument qrs_num", value=qrs_num, expected_type=type_hints["qrs_num"])
            check_type(argname="argument qrs_spec", value=qrs_spec, expected_type=type_hints["qrs_spec"])
            check_type(argname="argument searcher_doc_size", value=searcher_doc_size, expected_type=type_hints["searcher_doc_size"])
            check_type(argname="argument searcher_num", value=searcher_num, expected_type=type_hints["searcher_num"])
            check_type(argname="argument searcher_spec", value=searcher_spec, expected_type=type_hints["searcher_spec"])
            check_type(argname="argument user_name", value=user_name, expected_type=type_hints["user_name"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "charge_type": charge_type,
            "password": password,
            "qrs_num": qrs_num,
            "qrs_spec": qrs_spec,
            "searcher_doc_size": searcher_doc_size,
            "searcher_num": searcher_num,
            "searcher_spec": searcher_spec,
            "user_name": user_name,
            "vpc_id": vpc_id,
            "v_switch_id": v_switch_id,
        }

    @builtins.property
    def charge_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        chargeType: The billing method. Valid values: POSTPAY.
        POSTPAY: pay-as-you-go.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qrs_num(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: qrsNum: The number of query nodes.
        '''
        result = self._values.get("qrs_num")
        assert result is not None, "Required property 'qrs_num' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def qrs_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: qrsSpec: The specification of query nodes.
        '''
        result = self._values.get("qrs_spec")
        assert result is not None, "Required property 'qrs_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def searcher_doc_size(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: searcherDocSize: The storage size of single data node.
        '''
        result = self._values.get("searcher_doc_size")
        assert result is not None, "Required property 'searcher_doc_size' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def searcher_num(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: searcherNum: The number of data nodes.
        '''
        result = self._values.get("searcher_num")
        assert result is not None, "Required property 'searcher_num' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def searcher_spec(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: searcherSpec: The specification of data nodes.
        '''
        result = self._values.get("searcher_spec")
        assert result is not None, "Required property 'searcher_spec' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def user_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vpcId: The ID of VPC.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vSwitchId: The ID of vSwitch.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "Instance",
    "InstanceProps",
    "RosInstance",
    "RosInstanceProps",
]

publication.publish()

def _typecheckingstub__f2281d8eb48c333e551c4f3bae839049e99db31002707f9c02b179624c98ccf2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98c51f507ded5a1e7670bd45d89c1c9d3260467ab172b247b916ae6b65477dfd(
    *,
    charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    qrs_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    qrs_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    searcher_doc_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    searcher_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    searcher_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e72ce509173e9a69c93c7da577f5fea4289fd2fe9c5e3c7feba9c6e9fc16d9bb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00c98592fb3fe4b69e2fcbd4a8133a6e19bf2260ed390431588a1a9193942c50(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a07a06e96944533ae9bc45f15608bef62f230646bc5a239a4abb0a419f4fda31(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20e684f2c3a5625c0e58132636cb32136c55e17ded7469513d9dec58d888185d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce04fa4faccb41c393e617f2563892c329cbad833aeb609892aa5cc9d5e692c7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__814d287ea01cd472179f88b48371ad450ed2dc54f6617c1938e04d05e7578ff7(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d3bd7d2865646b59a768eeda2fdc22314ebeb5e2eb0b8efb843414bb8938804(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0f684f0bd5c5b1ea6f2691c0f181f6a22d8075117057b410bd3cf059ba74b375(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cb20ad7c2a39df97ccfd9e36fedba9fbd2db05a904e2e93fe063bb0d2b734830(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1ecbf109e3749e92f95d70fcfcdf87083d6c5cd88c7a0e8fcc95d9ba953fd2d9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__300b038aefeaf40120d2bee231ddcf33cb8183a925cf0f45862ebcba18137866(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86e79d4c7852c29b8a4887c0bf7697fac35af136707f624fbaccd626695f1520(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e124ec6884274bf4445b4d5c59552b4d0e2268f7e2cd84a483be2e73e09f321(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__73907a760d2a60df01ead8e4a1433fc476c9234bcfe2f6c5bdd897b09edf0937(
    *,
    charge_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    password: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    qrs_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    qrs_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    searcher_doc_size: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    searcher_num: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    searcher_spec: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    user_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    vpc_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_switch_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass
