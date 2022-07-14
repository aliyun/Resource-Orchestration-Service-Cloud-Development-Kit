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

from ._jsii import *

import ros_cdk_core


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-searchengine.Instance",
):
    '''A ROS resource type:  ``ALIYUN::SearchEngine::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> ros_cdk_core.IResolvable:
        '''Attribute Endpoint: The endpoint of instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))


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
        charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        qrs_num: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        qrs_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        searcher_doc_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        searcher_num: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        searcher_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        user_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property chargeType: The billing method.

        Valid values: POSTPAY.
        POSTPAY: pay-as-you-go.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property password: The password of instance.

        It consists of lowercase letters and numbers, and the length is 6-8 characters.
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def qrs_num(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property qrsNum: The number of query nodes.'''
        result = self._values.get("qrs_num")
        assert result is not None, "Required property 'qrs_num' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def qrs_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property qrsSpec: The specification of query nodes.'''
        result = self._values.get("qrs_spec")
        assert result is not None, "Required property 'qrs_spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def searcher_doc_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property searcherDocSize: The storage size of single data node.'''
        result = self._values.get("searcher_doc_size")
        assert result is not None, "Required property 'searcher_doc_size' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def searcher_num(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property searcherNum: The number of data nodes.'''
        result = self._values.get("searcher_num")
        assert result is not None, "Required property 'searcher_num' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def searcher_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property searcherSpec: The specification of data nodes.'''
        result = self._values.get("searcher_spec")
        assert result is not None, "Required property 'searcher_spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property userName: The user name of instance.

        Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vpcId: The ID of VPC.'''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vSwitchId: The ID of vSwitch.'''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
    jsii_type="@alicloud/ros-cdk-searchengine.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::SearchEngine::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SearchEngine::Instance``.

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
    @jsii.member(jsii_name="attrEndpoint")
    def attr_endpoint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Endpoint: The endpoint of instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndpoint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: The ID of instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="chargeType")
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        chargeType: The billing method. Valid values: POSTPAY.
        POSTPAY: pay-as-you-go.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "chargeType"))

    @charge_type.setter
    def charge_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "chargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="password")
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "password", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="qrsNum")
    def qrs_num(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: qrsNum: The number of query nodes.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "qrsNum"))

    @qrs_num.setter
    def qrs_num(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "qrsNum", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="qrsSpec")
    def qrs_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: qrsSpec: The specification of query nodes.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "qrsSpec"))

    @qrs_spec.setter
    def qrs_spec(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "qrsSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="searcherDocSize")
    def searcher_doc_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: searcherDocSize: The storage size of single data node.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "searcherDocSize"))

    @searcher_doc_size.setter
    def searcher_doc_size(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "searcherDocSize", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="searcherNum")
    def searcher_num(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: searcherNum: The number of data nodes.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "searcherNum"))

    @searcher_num.setter
    def searcher_num(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "searcherNum", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="searcherSpec")
    def searcher_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: searcherSpec: The specification of data nodes.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "searcherSpec"))

    @searcher_spec.setter
    def searcher_spec(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "searcherSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="userName")
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "userName"))

    @user_name.setter
    def user_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "userName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of VPC.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The ID of vSwitch.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        charge_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        password: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        qrs_num: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        qrs_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        searcher_doc_size: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        searcher_num: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        searcher_spec: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        user_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        vpc_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_switch_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def charge_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        chargeType: The billing method. Valid values: POSTPAY.
        POSTPAY: pay-as-you-go.
        '''
        result = self._values.get("charge_type")
        assert result is not None, "Required property 'charge_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def password(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
        '''
        result = self._values.get("password")
        assert result is not None, "Required property 'password' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def qrs_num(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: qrsNum: The number of query nodes.
        '''
        result = self._values.get("qrs_num")
        assert result is not None, "Required property 'qrs_num' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def qrs_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: qrsSpec: The specification of query nodes.
        '''
        result = self._values.get("qrs_spec")
        assert result is not None, "Required property 'qrs_spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def searcher_doc_size(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: searcherDocSize: The storage size of single data node.
        '''
        result = self._values.get("searcher_doc_size")
        assert result is not None, "Required property 'searcher_doc_size' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def searcher_num(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: searcherNum: The number of data nodes.
        '''
        result = self._values.get("searcher_num")
        assert result is not None, "Required property 'searcher_num' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def searcher_spec(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: searcherSpec: The specification of data nodes.
        '''
        result = self._values.get("searcher_spec")
        assert result is not None, "Required property 'searcher_spec' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def user_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
        '''
        result = self._values.get("user_name")
        assert result is not None, "Required property 'user_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def vpc_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vpcId: The ID of VPC.
        '''
        result = self._values.get("vpc_id")
        assert result is not None, "Required property 'vpc_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_switch_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vSwitchId: The ID of vSwitch.
        '''
        result = self._values.get("v_switch_id")
        assert result is not None, "Required property 'v_switch_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

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
