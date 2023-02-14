'''
## Aliyun ROS SLB Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as SLB from '@alicloud/ros-cdk-slb';
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


class AccessControl(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.AccessControl",
):
    '''A ROS resource type:  ``ALIYUN::SLB::AccessControl``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AccessControlProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::AccessControl``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32a956c3ef43a14333968f8229f0d7116d55dad7cb2d8c920d99a092cc4d2653)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AclId: The ID of the access control list.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.AccessControlProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_name": "aclName",
        "acl_entrys": "aclEntrys",
        "address_ip_version": "addressIpVersion",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class AccessControlProps:
    def __init__(
        self,
        *,
        acl_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_entrys: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosAccessControl.AclEntrysProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosAccessControl.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::AccessControl``.

        :param acl_name: Property aclName: The name of the access control list.
        :param acl_entrys: Property aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
        :param address_ip_version: Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1c7183293eca0c3b4b02f340d7a4e2c6d4d85e9411b7e7727eeef0adb33ea5b)
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument acl_entrys", value=acl_entrys, expected_type=type_hints["acl_entrys"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_name": acl_name,
        }
        if acl_entrys is not None:
            self._values["acl_entrys"] = acl_entrys
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property aclName: The name of the access control list.'''
        result = self._values.get("acl_name")
        assert result is not None, "Required property 'acl_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_entrys(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessControl.AclEntrysProperty"]]]]:
        '''Property aclEntrys: A list of acl entrys.

        Each entry can be IP addresses or CIDR blocks. Max length: 50.
        '''
        result = self._values.get("acl_entrys")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessControl.AclEntrysProperty"]]]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressIpVersion: IP version.

        Could be "ipv4" or "ipv6".
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosAccessControl.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosAccessControl.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AccessControlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BackendServerAttachment(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.BackendServerAttachment",
):
    '''A ROS resource type:  ``ALIYUN::SLB::BackendServerAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BackendServerAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::BackendServerAttachment``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__740242b36f0a9a36e145fd30d2c7f83cb26719ec58aafb1352aad92bfa16b731)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BackendServers: The collection of attached backend server.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackendServers"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancerId: The id of load balancer.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.BackendServerAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "backend_server_list": "backendServerList",
        "backend_servers": "backendServers",
        "backend_server_weight_list": "backendServerWeightList",
    },
)
class BackendServerAttachmentProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backend_server_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBackendServerAttachment.BackendServersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        backend_server_weight_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::BackendServerAttachment``.

        :param load_balancer_id: Property loadBalancerId: The id of load balancer.
        :param backend_server_list: Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
        :param backend_servers: Property backendServers: The list of ECS instance, which will attached to load balancer.
        :param backend_server_weight_list: Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__02fd1d549c244f46a5382d4091d6a07bac33ae63e08f5b2e88e33380720e9a1e)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument backend_server_list", value=backend_server_list, expected_type=type_hints["backend_server_list"])
            check_type(argname="argument backend_servers", value=backend_servers, expected_type=type_hints["backend_servers"])
            check_type(argname="argument backend_server_weight_list", value=backend_server_weight_list, expected_type=type_hints["backend_server_weight_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }
        if backend_server_list is not None:
            self._values["backend_server_list"] = backend_server_list
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers
        if backend_server_weight_list is not None:
            self._values["backend_server_weight_list"] = backend_server_weight_list

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The id of load balancer.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backend_server_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.'''
        result = self._values.get("backend_server_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]]:
        '''Property backendServers: The list of ECS instance, which will attached to load balancer.'''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]], result)

    @builtins.property
    def backend_server_weight_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backendServerWeightList: The comma delimited weight list.

        If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        '''
        result = self._values.get("backend_server_weight_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackendServerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BackendServerToVServerGroupAddition(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.BackendServerToVServerGroupAddition",
):
    '''A ROS resource type:  ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["BackendServerToVServerGroupAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__608f8e871d117a9f8ef313d7610c628a9fe7c18d185917a3d7f638927a6abc97)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VServerGroupId: The ID of virtual server group.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.BackendServerToVServerGroupAdditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "backend_servers": "backendServers",
        "v_server_group_id": "vServerGroupId",
    },
)
class BackendServerToVServerGroupAdditionProps:
    def __init__(
        self,
        *,
        backend_servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosBackendServerToVServerGroupAddition.BackendServersProperty", typing.Dict[builtins.str, typing.Any]]]]],
        v_server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.

        :param backend_servers: Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        :param v_server_group_id: Property vServerGroupId: The ID of virtual server group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a98a4993f3ea63e5fd57b85edbc771753ff77cdcc8b899e785db738504496030)
            check_type(argname="argument backend_servers", value=backend_servers, expected_type=type_hints["backend_servers"])
            check_type(argname="argument v_server_group_id", value=v_server_group_id, expected_type=type_hints["v_server_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backend_servers": backend_servers,
            "v_server_group_id": v_server_group_id,
        }

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]]:
        '''Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.'''
        result = self._values.get("backend_servers")
        assert result is not None, "Required property 'backend_servers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]], result)

    @builtins.property
    def v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vServerGroupId: The ID of virtual server group.'''
        result = self._values.get("v_server_group_id")
        assert result is not None, "Required property 'v_server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackendServerToVServerGroupAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Certificate(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.Certificate",
):
    '''A ROS resource type:  ``ALIYUN::SLB::Certificate``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["CertificateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::Certificate``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7c8fc66ab11f0764614174a5f8788439426cbf2274890fc962a480cf9cae117a)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute CertificateId: The ID of the certificate.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCertificateId"))

    @builtins.property
    @jsii.member(jsii_name="attrFingerprint")
    def attr_fingerprint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Fingerprint: The fingerprint of the certificate.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFingerprint"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.CertificateProps",
    jsii_struct_bases=[],
    name_mapping={
        "certificate": "certificate",
        "ali_cloud_certificate_id": "aliCloudCertificateId",
        "ali_cloud_certificate_name": "aliCloudCertificateName",
        "certificate_name": "certificateName",
        "certificate_type": "certificateType",
        "private_key": "privateKey",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class CertificateProps:
    def __init__(
        self,
        *,
        certificate: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ali_cloud_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ali_cloud_certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        certificate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosCertificate.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::Certificate``.

        :param certificate: Property certificate: The content of the certificate public key.
        :param ali_cloud_certificate_id: Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
        :param ali_cloud_certificate_name: Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
        :param certificate_name: Property certificateName: The name of the certificate.
        :param certificate_type: Property certificateType: The type of the certificate.
        :param private_key: Property privateKey: The private key.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e08ce0ccadd779ef96f0da73a4e29df0de57d7c43d5d820c4dab9d177ce4d59f)
            check_type(argname="argument certificate", value=certificate, expected_type=type_hints["certificate"])
            check_type(argname="argument ali_cloud_certificate_id", value=ali_cloud_certificate_id, expected_type=type_hints["ali_cloud_certificate_id"])
            check_type(argname="argument ali_cloud_certificate_name", value=ali_cloud_certificate_name, expected_type=type_hints["ali_cloud_certificate_name"])
            check_type(argname="argument certificate_name", value=certificate_name, expected_type=type_hints["certificate_name"])
            check_type(argname="argument certificate_type", value=certificate_type, expected_type=type_hints["certificate_type"])
            check_type(argname="argument private_key", value=private_key, expected_type=type_hints["private_key"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "certificate": certificate,
        }
        if ali_cloud_certificate_id is not None:
            self._values["ali_cloud_certificate_id"] = ali_cloud_certificate_id
        if ali_cloud_certificate_name is not None:
            self._values["ali_cloud_certificate_name"] = ali_cloud_certificate_name
        if certificate_name is not None:
            self._values["certificate_name"] = certificate_name
        if certificate_type is not None:
            self._values["certificate_type"] = certificate_type
        if private_key is not None:
            self._values["private_key"] = private_key
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def certificate(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property certificate: The content of the certificate public key.'''
        result = self._values.get("certificate")
        assert result is not None, "Required property 'certificate' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ali_cloud_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.'''
        result = self._values.get("ali_cloud_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ali_cloud_certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.'''
        result = self._values.get("ali_cloud_certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property certificateName: The name of the certificate.'''
        result = self._values.get("certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def certificate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property certificateType: The type of the certificate.'''
        result = self._values.get("certificate_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property privateKey: The private key.'''
        result = self._values.get("private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosCertificate.TagsProperty"]]:
        '''Property tags: Tags to attach to instance.

        Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosCertificate.TagsProperty"]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "CertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DomainExtension(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.DomainExtension",
):
    '''A ROS resource type:  ``ALIYUN::SLB::DomainExtension``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainExtensionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::DomainExtension``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f075a4b99b0d235401fd54cfd59da8a26b061310758c0ce3baea2e025a66018e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensionId")
    def attr_domain_extension_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainExtensionId: The ID of the created domain name extension.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainExtensionId"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.

        Valid value:
        1-65535
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPort"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.DomainExtensionProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain": "domain",
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "server_certificate_id": "serverCertificateId",
    },
)
class DomainExtensionProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        server_certificate_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::DomainExtension``.

        :param domain: Property domain: The domain name.
        :param listener_port: Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value: 1-65535
        :param load_balancer_id: Property loadBalancerId: The ID of Server Load Balancer instance.
        :param server_certificate_id: Property serverCertificateId: The ID of the certificate corresponding to the domain name.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e93ec881b1960b1b062cf14ba12453d6067add0b39f2c325ffcd98b36abf65c6)
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument server_certificate_id", value=server_certificate_id, expected_type=type_hints["server_certificate_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain": domain,
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
            "server_certificate_id": server_certificate_id,
        }

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domain: The domain name.'''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.

        Valid value:
        1-65535
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of Server Load Balancer instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def server_certificate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serverCertificateId: The ID of the certificate corresponding to the domain name.'''
        result = self._values.get("server_certificate_id")
        assert result is not None, "Required property 'server_certificate_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainExtensionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Listener(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.Listener",
):
    '''A ROS resource type:  ``ALIYUN::SLB::Listener``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["ListenerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::Listener``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b5f96846837d0c3ac0e5d668025bfb7c14f2e093ad738ef2d4e8ac499a76f2c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrListenerPortsAndProtocol")
    def attr_listener_ports_and_protocol(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ListenerPortsAndProtocol: The collection of listener.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPortsAndProtocol"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancerId: The id of load balancer.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.ListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "protocol": "protocol",
        "acl_id": "aclId",
        "acl_status": "aclStatus",
        "acl_type": "aclType",
        "backend_server_port": "backendServerPort",
        "ca_certificate_id": "caCertificateId",
        "description": "description",
        "enable_http2": "enableHttp2",
        "health_check": "healthCheck",
        "http_config": "httpConfig",
        "idle_timeout": "idleTimeout",
        "master_slave_server_group_id": "masterSlaveServerGroupId",
        "persistence": "persistence",
        "port_range": "portRange",
        "request_timeout": "requestTimeout",
        "scheduler": "scheduler",
        "server_certificate_id": "serverCertificateId",
        "start_listener": "startListener",
        "v_server_group_id": "vServerGroupId",
    },
)
class ListenerProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acl_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acl_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backend_server_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ca_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_http2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.HealthCheckProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        http_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.HttpConfigProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_slave_server_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        persistence: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.PersistenceProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        port_range: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosListener.PortRangeProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        request_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        server_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_listener: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_server_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::Listener``.

        :param bandwidth: Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        :param listener_port: Property listenerPort: Port for front listener. Range from 0 to 65535.
        :param load_balancer_id: Property loadBalancerId: The id of load balancer to create listener.
        :param protocol: Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
        :param acl_id: Property aclId: The ID of the access control list associated with the listener to be created. If the value of the AclStatus parameter is on, this parameter is required.
        :param acl_status: Property aclStatus: Indicates whether to enable access control. Valid values: on | off. Default value: off
        :param acl_type: Property aclType: The access control type: * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses. Enabling a whitelist poses some risks to your services. After a whitelist is enabled, only the IP addresses in the list can access the listener. If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded. - black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses. If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded. If the value of the AclStatus parameter is on, this parameter is required.
        :param backend_server_port: Property backendServerPort: Backend server can listen on ports from 1 to 65535.
        :param ca_certificate_id: Property caCertificateId: CA server certificate id, for https listener only.
        :param description: Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
        :param enable_http2: Property enableHttp2: Specifies whether to use HTTP/2. It takes effect when Protocol=https. Valid values: on: yes off: no
        :param health_check: Property healthCheck: The properties of health checking setting.
        :param http_config: Property httpConfig: Config for http protocol.
        :param idle_timeout: Property idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
        :param master_slave_server_group_id: Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
        :param persistence: Property persistence: The properties of persistence.
        :param port_range: Property portRange: Port range, only supports TCP or UDP listener. ListenerPort should be 0 when PortRange is specified.
        :param request_timeout: Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
        :param scheduler: Property scheduler: The scheduling algorithm. Valid values: wrr: Backend servers that have higher weights receive more requests than those that have lower weights. wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests. rr: Requests are distributed to backend servers in sequence. sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server. tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server. Default: wrr
        :param server_certificate_id: Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
        :param start_listener: Property startListener: Whether start listener after listener created. Default True.
        :param v_server_group_id: Property vServerGroupId: The id of the VServerGroup which use in listener.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__833f6e5162e2986432e31fab06356e33cbaecfa04c65ef36b467797465fd3efa)
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument acl_id", value=acl_id, expected_type=type_hints["acl_id"])
            check_type(argname="argument acl_status", value=acl_status, expected_type=type_hints["acl_status"])
            check_type(argname="argument acl_type", value=acl_type, expected_type=type_hints["acl_type"])
            check_type(argname="argument backend_server_port", value=backend_server_port, expected_type=type_hints["backend_server_port"])
            check_type(argname="argument ca_certificate_id", value=ca_certificate_id, expected_type=type_hints["ca_certificate_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enable_http2", value=enable_http2, expected_type=type_hints["enable_http2"])
            check_type(argname="argument health_check", value=health_check, expected_type=type_hints["health_check"])
            check_type(argname="argument http_config", value=http_config, expected_type=type_hints["http_config"])
            check_type(argname="argument idle_timeout", value=idle_timeout, expected_type=type_hints["idle_timeout"])
            check_type(argname="argument master_slave_server_group_id", value=master_slave_server_group_id, expected_type=type_hints["master_slave_server_group_id"])
            check_type(argname="argument persistence", value=persistence, expected_type=type_hints["persistence"])
            check_type(argname="argument port_range", value=port_range, expected_type=type_hints["port_range"])
            check_type(argname="argument request_timeout", value=request_timeout, expected_type=type_hints["request_timeout"])
            check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            check_type(argname="argument server_certificate_id", value=server_certificate_id, expected_type=type_hints["server_certificate_id"])
            check_type(argname="argument start_listener", value=start_listener, expected_type=type_hints["start_listener"])
            check_type(argname="argument v_server_group_id", value=v_server_group_id, expected_type=type_hints["v_server_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth": bandwidth,
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
            "protocol": protocol,
        }
        if acl_id is not None:
            self._values["acl_id"] = acl_id
        if acl_status is not None:
            self._values["acl_status"] = acl_status
        if acl_type is not None:
            self._values["acl_type"] = acl_type
        if backend_server_port is not None:
            self._values["backend_server_port"] = backend_server_port
        if ca_certificate_id is not None:
            self._values["ca_certificate_id"] = ca_certificate_id
        if description is not None:
            self._values["description"] = description
        if enable_http2 is not None:
            self._values["enable_http2"] = enable_http2
        if health_check is not None:
            self._values["health_check"] = health_check
        if http_config is not None:
            self._values["http_config"] = http_config
        if idle_timeout is not None:
            self._values["idle_timeout"] = idle_timeout
        if master_slave_server_group_id is not None:
            self._values["master_slave_server_group_id"] = master_slave_server_group_id
        if persistence is not None:
            self._values["persistence"] = persistence
        if port_range is not None:
            self._values["port_range"] = port_range
        if request_timeout is not None:
            self._values["request_timeout"] = request_timeout
        if scheduler is not None:
            self._values["scheduler"] = scheduler
        if server_certificate_id is not None:
            self._values["server_certificate_id"] = server_certificate_id
        if start_listener is not None:
            self._values["start_listener"] = start_listener
        if v_server_group_id is not None:
            self._values["v_server_group_id"] = v_server_group_id

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second).

        If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerPort: Port for front listener.

        Range from 0 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The id of load balancer to create listener.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.'''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aclId: The ID of the access control list associated with the listener to be created.

        If the value of the AclStatus parameter is on, this parameter is required.
        '''
        result = self._values.get("acl_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acl_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aclStatus: Indicates whether to enable access control.

        Valid values: on | off. Default value: off
        '''
        result = self._values.get("acl_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acl_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property aclType: The access control type: * white: Indicates a whitelist.

        Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
        Enabling a whitelist poses some risks to your services.
        After a whitelist is enabled, only the IP addresses in the list can access the listener.
        If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.

        - black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
          If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.

        If the value of the AclStatus parameter is on, this parameter is required.
        '''
        result = self._values.get("acl_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backend_server_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backendServerPort: Backend server can listen on ports from 1 to 65535.'''
        result = self._values.get("backend_server_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ca_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property caCertificateId: CA server certificate id, for https listener only.'''
        result = self._values.get("ca_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_http2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property enableHttp2: Specifies whether to use HTTP/2.

        It takes effect when Protocol=https. Valid values:
        on: yes
        off: no
        '''
        result = self._values.get("enable_http2")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.HealthCheckProperty"]]:
        '''Property healthCheck: The properties of health checking setting.'''
        result = self._values.get("health_check")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.HealthCheckProperty"]], result)

    @builtins.property
    def http_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.HttpConfigProperty"]]:
        '''Property httpConfig: Config for http protocol.'''
        result = self._values.get("http_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.HttpConfigProperty"]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property idleTimeout: Specify the idle connection timeout in seconds.

        Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
        '''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_slave_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.'''
        result = self._values.get("master_slave_server_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def persistence(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PersistenceProperty"]]:
        '''Property persistence: The properties of persistence.'''
        result = self._values.get("persistence")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PersistenceProperty"]], result)

    @builtins.property
    def port_range(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PortRangeProperty"]]]]:
        '''Property portRange: Port range, only supports TCP or UDP listener.

        ListenerPort should be 0 when PortRange is specified.
        '''
        result = self._values.get("port_range")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PortRangeProperty"]]]], result)

    @builtins.property
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property requestTimeout: Specify the request timeout in seconds.

        Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
        '''
        result = self._values.get("request_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property scheduler: The scheduling algorithm.

        Valid values:
        wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
        wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
        rr: Requests are distributed to backend servers in sequence.
        sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
        tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
        Default: wrr
        '''
        result = self._values.get("scheduler")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def server_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property serverCertificateId: Server certificate id, for https listener only, this properties is required.'''
        result = self._values.get("server_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_listener(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property startListener: Whether start listener after listener created.

        Default True.
        '''
        result = self._values.get("start_listener")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vServerGroupId: The id of the VServerGroup which use in listener.'''
        result = self._values.get("v_server_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LoadBalancer(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.LoadBalancer",
):
    '''A ROS resource type:  ``ALIYUN::SLB::LoadBalancer``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["LoadBalancerProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::LoadBalancer``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8cd0aabfc6504c1c8f1619c3401270e978664dbcc2d0bc8fe002d95604294ae0)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AddressIPVersion: IP version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute AddressType: The address type of the load balancer.

        "intranet" or "internet".
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Bandwidth: The bandwidth for network.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IpAddress: The ip address of the load balancer.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancerId: The id of load balance created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerName")
    def attr_load_balancer_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancerName: Name of created load balancer.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerSpec")
    def attr_load_balancer_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterZoneId")
    def attr_master_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterZoneId: The master zone id to create load balancer instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute NetworkType: The network type of the load balancer.

        "vpc" or "classic" network.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute OrderId: The order ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPayType")
    def attr_pay_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute PayType: The billing method of the instance to be created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPayType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: Resource group id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSlaveZoneId")
    def attr_slave_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SlaveZoneId: The slave zone id to create load balancer instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlaveZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VpcId: Vpc id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VSwitchId: VSwitch id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))


class LoadBalancerClone(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.LoadBalancerClone",
):
    '''A ROS resource type:  ``ALIYUN::SLB::LoadBalancerClone``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LoadBalancerCloneProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::LoadBalancerClone``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d459d5c385260d41c64adc07d3acbacb63cde27ac1ca8722859c1d4827bbc3e)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancerId: The id of load balance generated.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.LoadBalancerCloneProps",
    jsii_struct_bases=[],
    name_mapping={
        "source_load_balancer_id": "sourceLoadBalancerId",
        "backend_servers": "backendServers",
        "backend_servers_policy": "backendServersPolicy",
        "instance_charge_type": "instanceChargeType",
        "load_balancer_name": "loadBalancerName",
        "load_balancer_spec": "loadBalancerSpec",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "tags_policy": "tagsPolicy",
        "v_switch_id": "vSwitchId",
    },
)
class LoadBalancerCloneProps:
    def __init__(
        self,
        *,
        source_load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosLoadBalancerClone.BackendServersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        backend_servers_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosLoadBalancerClone.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        tags_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::LoadBalancerClone``.

        :param source_load_balancer_id: Property sourceLoadBalancerId: Source load balancer id to clone.
        :param backend_servers: Property backendServers: The list of ECS instance, which will attached to load balancer.
        :param backend_servers_policy: Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
        :param instance_charge_type: Property instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec. PayByCLCU: billed by usage. If not specified, it is same with the source load balancer.
        :param load_balancer_name: Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        :param load_balancer_spec: Property loadBalancerSpec: The specification of the load balancer. If not specified, it is same with the source load balancer. Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        :param tags_policy: Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags. Default is 'empty'.
        :param v_switch_id: Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8469484bc4459b59972d21dd27adcec279c397f08f30ae7fb368f548d2a8a94)
            check_type(argname="argument source_load_balancer_id", value=source_load_balancer_id, expected_type=type_hints["source_load_balancer_id"])
            check_type(argname="argument backend_servers", value=backend_servers, expected_type=type_hints["backend_servers"])
            check_type(argname="argument backend_servers_policy", value=backend_servers_policy, expected_type=type_hints["backend_servers_policy"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument load_balancer_spec", value=load_balancer_spec, expected_type=type_hints["load_balancer_spec"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument tags_policy", value=tags_policy, expected_type=type_hints["tags_policy"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "source_load_balancer_id": source_load_balancer_id,
        }
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers
        if backend_servers_policy is not None:
            self._values["backend_servers_policy"] = backend_servers_policy
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if tags_policy is not None:
            self._values["tags_policy"] = tags_policy
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def source_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property sourceLoadBalancerId: Source load balancer id to clone.'''
        result = self._values.get("source_load_balancer_id")
        assert result is not None, "Required property 'source_load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]]:
        '''Property backendServers: The list of ECS instance, which will attached to load balancer.'''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]], result)

    @builtins.property
    def backend_servers_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property backendServersPolicy: Solution for handle the backend server and weights.

        If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
        '''
        result = self._values.get("backend_servers_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: Instance billing method.

        Value:PayBySpec: Pay by spec.
        PayByCLCU: billed by usage.
        If not specified, it is same with the source load balancer.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerName: Name of created load balancer.

        Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerSpec: The specification of the load balancer.

        If not specified, it is same with the source load balancer.
        Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancerClone.TagsProperty"]]:
        '''Property tags: Tags to attach to slb.

        Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosLoadBalancerClone.TagsProperty"]], result)

    @builtins.property
    def tags_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property tagsPolicy: Solution for handle the tags.

        If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
        Default is 'empty'.
        '''
        result = self._values.get("tags_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The new VSwitch ID to create load balancer instance.

        For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancerCloneProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.LoadBalancerProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_ip_version": "addressIpVersion",
        "address_type": "addressType",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "bandwidth": "bandwidth",
        "deletion_protection": "deletionProtection",
        "duration": "duration",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "load_balancer_name": "loadBalancerName",
        "load_balancer_spec": "loadBalancerSpec",
        "master_zone_id": "masterZoneId",
        "modification_protection_reason": "modificationProtectionReason",
        "modification_protection_status": "modificationProtectionStatus",
        "pay_type": "payType",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "slave_zone_id": "slaveZoneId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class LoadBalancerProps:
    def __init__(
        self,
        *,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modification_protection_reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modification_protection_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union["RosLoadBalancer.TagsProperty", typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::LoadBalancer``.

        :param address_ip_version: Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
        :param address_type: Property addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
        :param auto_pay: Property autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created. Valid values: true | false. Default true.
        :param auto_renew: Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        :param auto_renew_period: Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required: When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36. When PeriodUnit = year, the value range is 1-3.
        :param bandwidth: Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
        :param deletion_protection: Property deletionProtection: Whether to enable deletion protection.
        :param duration: Property duration: Optional. The subscription duration of a Subscription Internet instance. Valid values: If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60. If PricingCycle is year, the value range is 1 to 5.
        :param instance_charge_type: Property instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec. PayByCLCU: billed by usage. Default: PayBySpec
        :param internet_charge_type: Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
        :param load_balancer_name: Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        :param load_balancer_spec: Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
        :param master_zone_id: Property masterZoneId: The master zone id to create load balancer instance.
        :param modification_protection_reason: Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-). Only valid when ModificationProtectionStatus is ConsoleProtection.
        :param modification_protection_status: Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.
        :param pay_type: Property payType: Optional. The billing method of the instance to be created. Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
        :param pricing_cycle: Property pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created. Valid values: month | year.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param slave_zone_id: Property slaveZoneId: The slave zone id to create load balancer instance.
        :param tags: Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        :param vpc_id: Property vpcId: The VPC id to create load balancer instance. For VPC network only.
        :param v_switch_id: Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4a7083494ae715443133830be3bb8ff556bfa79afc1e887e4d712b9bb1e2b06)
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument load_balancer_spec", value=load_balancer_spec, expected_type=type_hints["load_balancer_spec"])
            check_type(argname="argument master_zone_id", value=master_zone_id, expected_type=type_hints["master_zone_id"])
            check_type(argname="argument modification_protection_reason", value=modification_protection_reason, expected_type=type_hints["modification_protection_reason"])
            check_type(argname="argument modification_protection_status", value=modification_protection_status, expected_type=type_hints["modification_protection_status"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument slave_zone_id", value=slave_zone_id, expected_type=type_hints["slave_zone_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if address_type is not None:
            self._values["address_type"] = address_type
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if duration is not None:
            self._values["duration"] = duration
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if master_zone_id is not None:
            self._values["master_zone_id"] = master_zone_id
        if modification_protection_reason is not None:
            self._values["modification_protection_reason"] = modification_protection_reason
        if modification_protection_status is not None:
            self._values["modification_protection_status"] = modification_protection_status
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if slave_zone_id is not None:
            self._values["slave_zone_id"] = slave_zone_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'.

        If 'ipv6' is selected, please note that the zone and the specification are supported.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property addressType: Loader balancer address type.

        Support 'internet' and 'intranet' only, default is 'internet'.
        '''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoPay: Optional.

        Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
        Valid values: true | false. Default true.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenew: Indicates whether automatic renewal is enabled for the instance.

        Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required: When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.

        When PeriodUnit = year, the value range is 1-3.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).

        Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property deletionProtection: Whether to enable deletion protection.'''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property duration: Optional.

        The subscription duration of a Subscription Internet instance.
        Valid values:
        If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
        If PricingCycle is year, the value range is 1 to 5.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property instanceChargeType: Instance billing method.

        Value:PayBySpec: Pay by spec.
        PayByCLCU: billed by usage.
        Default: PayBySpec
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.'''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerName: Name of created load balancer.

        Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancerSpec: The specification of the Server Load Balancer instance.

        Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterZoneId: The master zone id to create load balancer instance.'''
        result = self._values.get("master_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modification_protection_reason(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property modificationProtectionReason: Set the reason for modifying the protection status.

        The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
        Only valid when ModificationProtectionStatus is ConsoleProtection.
        '''
        result = self._values.get("modification_protection_reason")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modification_protection_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.'''
        result = self._values.get("modification_protection_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property payType: Optional.

        The billing method of the instance to be created.
        Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property pricingCycle: Optional.

        The duration of the Subscription-billed Internet instance to be created.
        Valid values: month | year.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def slave_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property slaveZoneId: The slave zone id to create load balancer instance.'''
        result = self._values.get("slave_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]]:
        '''Property tags: Tags to attach to slb.

        Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vpcId: The VPC id to create load balancer instance.

        For VPC network only.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vSwitchId: The VSwitch id to create load balancer instance.

        For VPC network only.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MasterSlaveServerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.MasterSlaveServerGroup",
):
    '''A ROS resource type:  ``ALIYUN::SLB::MasterSlaveServerGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["MasterSlaveServerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::MasterSlaveServerGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6d5ba0c12773b56874ebafc1ca87ff70891c314834e4f3670157daa8896fbbf6)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrMasterSlaveServerGroupId")
    def attr_master_slave_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute MasterSlaveServerGroupId: Active/standby server group ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterSlaveServerGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.MasterSlaveServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "master_slave_backend_servers": "masterSlaveBackendServers",
        "master_slave_server_group_name": "masterSlaveServerGroupName",
    },
)
class MasterSlaveServerGroupProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        master_slave_backend_servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty", typing.Dict[builtins.str, typing.Any]]]]],
        master_slave_server_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::MasterSlaveServerGroup``.

        :param load_balancer_id: Property loadBalancerId: The ID of the Server Load Balancer instance.
        :param master_slave_backend_servers: Property masterSlaveBackendServers: A list of active/standby server group. An active/standby server group can only contain two backend servers.
        :param master_slave_server_group_name: Property masterSlaveServerGroupName: The name of the active/standby server group.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9ba17813f95ad5905513888e77f640c74d85fae7cba6878cee95f3dd8aa8bef1)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument master_slave_backend_servers", value=master_slave_backend_servers, expected_type=type_hints["master_slave_backend_servers"])
            check_type(argname="argument master_slave_server_group_name", value=master_slave_server_group_name, expected_type=type_hints["master_slave_server_group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
            "master_slave_backend_servers": master_slave_backend_servers,
        }
        if master_slave_server_group_name is not None:
            self._values["master_slave_server_group_name"] = master_slave_server_group_name

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of the Server Load Balancer instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def master_slave_backend_servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]]:
        '''Property masterSlaveBackendServers: A list of active/standby server group.

        An active/standby server group can only contain two backend servers.
        '''
        result = self._values.get("master_slave_backend_servers")
        assert result is not None, "Required property 'master_slave_backend_servers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]], result)

    @builtins.property
    def master_slave_server_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property masterSlaveServerGroupName: The name of the active/standby server group.'''
        result = self._values.get("master_slave_server_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MasterSlaveServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessControl(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosAccessControl",
):
    '''A ROS template type:  ``ALIYUN::SLB::AccessControl``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAccessControlProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::AccessControl``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__847fc2f16e9a47f66c7243731f63c9f1d52310abd4e857246964461aaeee30dd)
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
            type_hints = typing.get_type_hints(_typecheckingstub__9a8f42ca1e8a3aef91e81077f3b911b07e57d15342bcd7306df9ad0ee85f5c7f)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AclId: The ID of the access control list.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="aclName")
    def acl_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aclName: The name of the access control list.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "aclName"))

    @acl_name.setter
    def acl_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__31809101fe1427cb1d90e7dae97aa0ddf0f81f290d1d1661dae5d089feeb124a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9f5e93da08ab7c5f50ebe45e85a75f0dc5e103fd1b96f5f66103ed57e3f3f280)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="aclEntrys")
    def acl_entrys(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessControl.AclEntrysProperty"]]]]:
        '''
        :Property: aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessControl.AclEntrysProperty"]]]], jsii.get(self, "aclEntrys"))

    @acl_entrys.setter
    def acl_entrys(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosAccessControl.AclEntrysProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6d88d40f5c1043eeca9f960027eb75c659c5a2b5ec19a908c775d6b37cf4725)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclEntrys", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version. Could be "ipv4" or "ipv6".
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__099830a6a860a21255da2bbd16856d0e345a2e2802d479794f929caee4247f2b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c403fe390927d5a9d737985410764d6eb0e62b874c79364aeb9cfff49d5a01f2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosAccessControl.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosAccessControl.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosAccessControl.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24d3ff97d12583710993d1cf63e4ecfc5a2bdad76612458b7d382df8886c357c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosAccessControl.AclEntrysProperty",
        jsii_struct_bases=[],
        name_mapping={"entry": "entry", "comment": "comment"},
    )
    class AclEntrysProperty:
        def __init__(
            self,
            *,
            entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param entry: 
            :param comment: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6a0d7414c36feced3d17d966323afaf4c537d8cdfe3d55a87220843e9c2ad29f)
                check_type(argname="argument entry", value=entry, expected_type=type_hints["entry"])
                check_type(argname="argument comment", value=comment, expected_type=type_hints["comment"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "entry": entry,
            }
            if comment is not None:
                self._values["comment"] = comment

        @builtins.property
        def entry(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: entry: IP addresses or CIDR blocks. For example: "10.0.0.1" or "192.168.0.0/16"
            '''
            result = self._values.get("entry")
            assert result is not None, "Required property 'entry' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: comment: Description of the entry.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "AclEntrysProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosAccessControl.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__76dd5903d6dbcea456f6cf5e6c00a7ffba4ffa260101a98b451b041f5adfe028)
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
    jsii_type="@alicloud/ros-cdk-slb.RosAccessControlProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_name": "aclName",
        "acl_entrys": "aclEntrys",
        "address_ip_version": "addressIpVersion",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosAccessControlProps:
    def __init__(
        self,
        *,
        acl_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_entrys: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccessControl.AclEntrysProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosAccessControl.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::AccessControl``.

        :param acl_name: 
        :param acl_entrys: 
        :param address_ip_version: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fa6e5f0360b09d4efc644e3d658b7fd5e8a3c254825920954f2e53e1680c13ce)
            check_type(argname="argument acl_name", value=acl_name, expected_type=type_hints["acl_name"])
            check_type(argname="argument acl_entrys", value=acl_entrys, expected_type=type_hints["acl_entrys"])
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "acl_name": acl_name,
        }
        if acl_entrys is not None:
            self._values["acl_entrys"] = acl_entrys
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def acl_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: aclName: The name of the access control list.
        '''
        result = self._values.get("acl_name")
        assert result is not None, "Required property 'acl_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_entrys(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccessControl.AclEntrysProperty]]]]:
        '''
        :Property: aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
        '''
        result = self._values.get("acl_entrys")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccessControl.AclEntrysProperty]]]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version. Could be "ipv4" or "ipv6".
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosAccessControl.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosAccessControl.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAccessControlProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackendServerAttachment(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosBackendServerAttachment",
):
    '''A ROS template type:  ``ALIYUN::SLB::BackendServerAttachment``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBackendServerAttachmentProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::BackendServerAttachment``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1297df82ec7f888d361a67b9b70e86d801bb81be27637104e1445d8aa56413fa)
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
            type_hints = typing.get_type_hints(_typecheckingstub__6ded85dafeb5f3ba0ee9b2a00a1b4bac91ba4ee2bec58b7c654e37e57d81f022)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackendServers: The collection of attached backend server.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackendServers"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The id of load balancer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__5f617203d5362870f678f3e89a9c1993a6fa0bc363e7da6560b435f86ddcc5dc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b3603fe811c59ee8b09724cfa746218c8cbed55c58775d5e15e4c9d84c2e50d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="backendServerList")
    def backend_server_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "backendServerList"))

    @backend_server_list.setter
    def backend_server_list(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b75fbb1826bf52c6902373a9c3b153e4237ac49658b54ab88364addbf6fec7a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backendServerList", value)

    @builtins.property
    @jsii.member(jsii_name="backendServers")
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]]:
        '''
        :Property: backendServers: The list of ECS instance, which will attached to load balancer.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]], jsii.get(self, "backendServers"))

    @backend_servers.setter
    def backend_servers(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c2106b21fc641a5315dc6560db831d4b1f99453da01fcc499f8ad04cddfb27a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backendServers", value)

    @builtins.property
    @jsii.member(jsii_name="backendServerWeightList")
    def backend_server_weight_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backendServerWeightList"))

    @backend_server_weight_list.setter
    def backend_server_weight_list(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__efb133348a6cca28b5641464ae207e3cf43a0d0d51d3c8cf7ca53012da111f7f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backendServerWeightList", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosBackendServerAttachment.BackendServersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "server_id": "serverId",
            "weight": "weight",
            "description": "description",
            "server_ip": "serverIp",
            "type": "type",
        },
    )
    class BackendServersProperty:
        def __init__(
            self,
            *,
            server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param server_id: 
            :param weight: 
            :param description: 
            :param server_ip: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__6de1a2d97858568e4fa17a871129e58381ad9535ee19bca9d35ce805c8f23ad3)
                check_type(argname="argument server_id", value=server_id, expected_type=type_hints["server_id"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument server_ip", value=server_ip, expected_type=type_hints["server_ip"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "server_id": server_id,
                "weight": weight,
            }
            if description is not None:
                self._values["description"] = description
            if server_ip is not None:
                self._values["server_ip"] = server_ip
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def server_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serverId: Need one valid instance id. The instance status should running.
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            '''
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: description: A description of the backend server.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverIp: The IP of the instance.
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackendServersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.RosBackendServerAttachmentProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "backend_server_list": "backendServerList",
        "backend_servers": "backendServers",
        "backend_server_weight_list": "backendServerWeightList",
    },
)
class RosBackendServerAttachmentProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backend_server_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerAttachment.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        backend_server_weight_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::BackendServerAttachment``.

        :param load_balancer_id: 
        :param backend_server_list: 
        :param backend_servers: 
        :param backend_server_weight_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e764e3cf866d942d6842a6fe7178f9cc8fc442ccc648cbb6fe59583f92e5134)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument backend_server_list", value=backend_server_list, expected_type=type_hints["backend_server_list"])
            check_type(argname="argument backend_servers", value=backend_servers, expected_type=type_hints["backend_servers"])
            check_type(argname="argument backend_server_weight_list", value=backend_server_weight_list, expected_type=type_hints["backend_server_weight_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }
        if backend_server_list is not None:
            self._values["backend_server_list"] = backend_server_list
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers
        if backend_server_weight_list is not None:
            self._values["backend_server_weight_list"] = backend_server_weight_list

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backend_server_list(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
        '''
        result = self._values.get("backend_server_list")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerAttachment.BackendServersProperty]]]]:
        '''
        :Property: backendServers: The list of ECS instance, which will attached to load balancer.
        '''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerAttachment.BackendServersProperty]]]], result)

    @builtins.property
    def backend_server_weight_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        '''
        result = self._values.get("backend_server_weight_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackendServerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackendServerToVServerGroupAddition(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition",
):
    '''A ROS template type:  ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosBackendServerToVServerGroupAdditionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__593b28df9c0f0b456f530fc332714b320e70941a906ca8d117acb85ce6dd1c9d)
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
            type_hints = typing.get_type_hints(_typecheckingstub__acf9d29063e3563a0077b19af37dda331f136d189ab60948da535af70c1fcab7)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VServerGroupId: The ID of virtual server group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroupId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="backendServers")
    def backend_servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]]:
        '''
        :Property: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]], jsii.get(self, "backendServers"))

    @backend_servers.setter
    def backend_servers(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3f7f1e0b5c61bef9fe316f8d8e0b911dabda91047999d58e251bde716992246)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backendServers", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f9cd633291cc4535208b3b886f2e3d4a2dae70bd666d0d8454df8702bb274ab)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vServerGroupId")
    def v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vServerGroupId: The ID of virtual server group.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vServerGroupId"))

    @v_server_group_id.setter
    def v_server_group_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__33efd890e1f47cd176201389153fe678326b23ad2c238220a12f775ac9a74ded)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vServerGroupId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition.BackendServersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "port": "port",
            "server_id": "serverId",
            "description": "description",
            "server_ip": "serverIp",
            "type": "type",
            "weight": "weight",
        },
    )
    class BackendServersProperty:
        def __init__(
            self,
            *,
            port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param port: 
            :param server_id: 
            :param description: 
            :param server_ip: 
            :param type: 
            :param weight: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__52b88569c0f1e1467cb1ea14550e40a91c94d852b52dbfa4885def5151e3c4ee)
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument server_id", value=server_id, expected_type=type_hints["server_id"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument server_ip", value=server_ip, expected_type=type_hints["server_ip"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "port": port,
                "server_id": server_id,
            }
            if description is not None:
                self._values["description"] = description
            if server_ip is not None:
                self._values["server_ip"] = server_ip
            if type is not None:
                self._values["type"] = type
            if weight is not None:
                self._values["weight"] = weight

        @builtins.property
        def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: port: The port of backend server. From 1 to 65535.
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def server_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serverId: The ID of the backend server. You can specify the ID of an Elastic Compute Service (ECS) instance,an elastic network interface (ENI) or elastic container instance (ECI).
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: description: The description of the backend server. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverIp: The IP address of an ECS instance, ENI or ECI
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            type: The instance type of the backend server. This parameter must be set to a string. Valid values:
            ecs: ECS instance. This is the default value.
            eni: ENI.
            eci: ECI.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackendServersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAdditionProps",
    jsii_struct_bases=[],
    name_mapping={
        "backend_servers": "backendServers",
        "v_server_group_id": "vServerGroupId",
    },
)
class RosBackendServerToVServerGroupAdditionProps:
    def __init__(
        self,
        *,
        backend_servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerToVServerGroupAddition.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
        v_server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.

        :param backend_servers: 
        :param v_server_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4e0325e11e8bc298a9d48fc3f85253f3a4a2c3ea862a6ea71d7e7f360d9f3bb)
            check_type(argname="argument backend_servers", value=backend_servers, expected_type=type_hints["backend_servers"])
            check_type(argname="argument v_server_group_id", value=v_server_group_id, expected_type=type_hints["v_server_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "backend_servers": backend_servers,
            "v_server_group_id": v_server_group_id,
        }

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerToVServerGroupAddition.BackendServersProperty]]]:
        '''
        :Property: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        '''
        result = self._values.get("backend_servers")
        assert result is not None, "Required property 'backend_servers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerToVServerGroupAddition.BackendServersProperty]]], result)

    @builtins.property
    def v_server_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vServerGroupId: The ID of virtual server group.
        '''
        result = self._values.get("v_server_group_id")
        assert result is not None, "Required property 'v_server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackendServerToVServerGroupAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCertificate(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosCertificate",
):
    '''A ROS template type:  ``ALIYUN::SLB::Certificate``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosCertificateProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::Certificate``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7c79b67c543726d7ae20d7245f9264f6136fcf58b5b726d9eea181b77511c99)
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
            type_hints = typing.get_type_hints(_typecheckingstub__525d8ef886383b275baed218f264f4c90bad610ac8126945bb07af65b068354a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CertificateId: The ID of the certificate.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCertificateId"))

    @builtins.property
    @jsii.member(jsii_name="attrFingerprint")
    def attr_fingerprint(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Fingerprint: The fingerprint of the certificate.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrFingerprint"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="certificate")
    def certificate(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: certificate: The content of the certificate public key.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "certificate"))

    @certificate.setter
    def certificate(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e12658e10510fa209c5d684182982e34f99a061f37e821468cfd0656b38b1a0a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certificate", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6474487ec4158c05182b85939e66b48a4b1602b7f78a92e13034ce3b1af0e078)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="aliCloudCertificateId")
    def ali_cloud_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aliCloudCertificateId"))

    @ali_cloud_certificate_id.setter
    def ali_cloud_certificate_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9cb3731fee8e80d3256db508b818c4477e04bb713d12cd3efd13dd57557a564)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aliCloudCertificateId", value)

    @builtins.property
    @jsii.member(jsii_name="aliCloudCertificateName")
    def ali_cloud_certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliCloudCertificateName: The name of the Alibaba Cloud certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aliCloudCertificateName"))

    @ali_cloud_certificate_name.setter
    def ali_cloud_certificate_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__737731f6acdc011aa78640ef2eac75013ecf4eee218b8c3984589c6e9119b8a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aliCloudCertificateName", value)

    @builtins.property
    @jsii.member(jsii_name="certificateName")
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: certificateName: The name of the certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "certificateName"))

    @certificate_name.setter
    def certificate_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5292361599bc615e2c552e3ef23d8c44b0909bb6d569db3bc123da6a048e6a10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certificateName", value)

    @builtins.property
    @jsii.member(jsii_name="certificateType")
    def certificate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: certificateType: The type of the certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "certificateType"))

    @certificate_type.setter
    def certificate_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b0b0954c32af9b710f7edbf5af0357141bb728d91d12e9b91aae6ead156c62a3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "certificateType", value)

    @builtins.property
    @jsii.member(jsii_name="privateKey")
    def private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateKey: The private key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "privateKey"))

    @private_key.setter
    def private_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b96b2b66b6694d2bb06b8ae1217200216b7b91587de424e5344409bf362c3bbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "privateKey", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9a0d718e443a2ac70fe46e47dd895acea53962559343f1098918b09a3085da6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosCertificate.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosCertificate.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosCertificate.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4cfeca3ea70eacfadde311116975e863ba1c933f4b6da7c06607c9cd9c77dc69)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosCertificate.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__4a0778ef6490b87318c4c8193b11347468e8262447f6da1bfdd21268a6283385)
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
    jsii_type="@alicloud/ros-cdk-slb.RosCertificateProps",
    jsii_struct_bases=[],
    name_mapping={
        "certificate": "certificate",
        "ali_cloud_certificate_id": "aliCloudCertificateId",
        "ali_cloud_certificate_name": "aliCloudCertificateName",
        "certificate_name": "certificateName",
        "certificate_type": "certificateType",
        "private_key": "privateKey",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
    },
)
class RosCertificateProps:
    def __init__(
        self,
        *,
        certificate: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ali_cloud_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ali_cloud_certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        certificate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosCertificate.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::Certificate``.

        :param certificate: 
        :param ali_cloud_certificate_id: 
        :param ali_cloud_certificate_name: 
        :param certificate_name: 
        :param certificate_type: 
        :param private_key: 
        :param resource_group_id: 
        :param tags: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7e01ca041985f2287c83ba2b5708b2fa9878f085ed7bc08d083e986dd7c2b462)
            check_type(argname="argument certificate", value=certificate, expected_type=type_hints["certificate"])
            check_type(argname="argument ali_cloud_certificate_id", value=ali_cloud_certificate_id, expected_type=type_hints["ali_cloud_certificate_id"])
            check_type(argname="argument ali_cloud_certificate_name", value=ali_cloud_certificate_name, expected_type=type_hints["ali_cloud_certificate_name"])
            check_type(argname="argument certificate_name", value=certificate_name, expected_type=type_hints["certificate_name"])
            check_type(argname="argument certificate_type", value=certificate_type, expected_type=type_hints["certificate_type"])
            check_type(argname="argument private_key", value=private_key, expected_type=type_hints["private_key"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "certificate": certificate,
        }
        if ali_cloud_certificate_id is not None:
            self._values["ali_cloud_certificate_id"] = ali_cloud_certificate_id
        if ali_cloud_certificate_name is not None:
            self._values["ali_cloud_certificate_name"] = ali_cloud_certificate_name
        if certificate_name is not None:
            self._values["certificate_name"] = certificate_name
        if certificate_type is not None:
            self._values["certificate_type"] = certificate_type
        if private_key is not None:
            self._values["private_key"] = private_key
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def certificate(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: certificate: The content of the certificate public key.
        '''
        result = self._values.get("certificate")
        assert result is not None, "Required property 'certificate' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ali_cloud_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
        '''
        result = self._values.get("ali_cloud_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ali_cloud_certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: aliCloudCertificateName: The name of the Alibaba Cloud certificate.
        '''
        result = self._values.get("ali_cloud_certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: certificateName: The name of the certificate.
        '''
        result = self._values.get("certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def certificate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: certificateType: The type of the certificate.
        '''
        result = self._values.get("certificate_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: privateKey: The private key.
        '''
        result = self._values.get("private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosCertificate.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosCertificate.TagsProperty]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosCertificateProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomainExtension(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosDomainExtension",
):
    '''A ROS template type:  ``ALIYUN::SLB::DomainExtension``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainExtensionProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::DomainExtension``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7ae95996ee1773356b83e45d8a8d75ac575ab3678422c9d12f9378859a935edf)
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
            type_hints = typing.get_type_hints(_typecheckingstub__983c9ce0930c5c51ca60c5f28b59be18a36b463de725860cd7ab65530338832b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainExtensionId")
    def attr_domain_extension_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainExtensionId: The ID of the created domain name extension.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainExtensionId"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        1-65535
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPort"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domain")
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domain: The domain name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domain"))

    @domain.setter
    def domain(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__69708cdf696a442f4a9182443e89b1dc19f7b2e9453658bb531b4d6cde2e490a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domain", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b46d288e43e152eccb96f29313a9ed9ec4a3da61aedfbe028a8bfee8636a18a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        1-65535
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__50f17f12c9d459b5e2323f34ed9270145a016e6c710549107f2f5e2f6247f741)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of Server Load Balancer instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46a1b8ce5e00d299225dd665e9eab7bc2f9ca6e0f8cc7f00378e923ba09a5a92)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="serverCertificateId")
    def server_certificate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serverCertificateId: The ID of the certificate corresponding to the domain name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serverCertificateId"))

    @server_certificate_id.setter
    def server_certificate_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b2d6d37707d7c5593cefaed35d4bf3497351b57892605803aaff478416b6f09b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverCertificateId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.RosDomainExtensionProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain": "domain",
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "server_certificate_id": "serverCertificateId",
    },
)
class RosDomainExtensionProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        server_certificate_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::DomainExtension``.

        :param domain: 
        :param listener_port: 
        :param load_balancer_id: 
        :param server_certificate_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5910ec9bc329b736bc2ff762a3fcd91f184bf32fc1a8f5a3871e31d8d0f4d478)
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument server_certificate_id", value=server_certificate_id, expected_type=type_hints["server_certificate_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain": domain,
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
            "server_certificate_id": server_certificate_id,
        }

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domain: The domain name.
        '''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        1-65535
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of Server Load Balancer instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def server_certificate_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: serverCertificateId: The ID of the certificate corresponding to the domain name.
        '''
        result = self._values.get("server_certificate_id")
        assert result is not None, "Required property 'server_certificate_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainExtensionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosListener(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosListener",
):
    '''A ROS template type:  ``ALIYUN::SLB::Listener``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosListenerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::Listener``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__751bc5618e98ab72ea98d725a26bfbe9060ade092357018dbbb0600a3865c503)
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
            type_hints = typing.get_type_hints(_typecheckingstub__d6e9c154bda923d441b1e6a47fea30053a4d787a072f2f7847d877ab72beee1a)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrListenerPortsAndProtocol")
    def attr_listener_ports_and_protocol(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ListenerPortsAndProtocol: The collection of listener.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrListenerPortsAndProtocol"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The id of load balancer
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__080364c22d736e7e6c8aca87febbd9115c4b16a7d0117a550112f4a12287b62a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a171a54669f1918b4ce2397ceece399eca0d3c7b32913b1c5e7c5724c510a757)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerPort: Port for front listener. Range from 0 to 65535.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5959eb784c01f16f68c991941bd11a2c7fb7dd2ee22dfcdf65e54f8524db3016)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer to create listener.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fa1e2b77d36d34cf2afa826bf1089142152cb6937dc950d299f834b43e41316)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="protocol")
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d838f8ed8ceb88352442206a401a683577754f7c757665484ff1387c652a162d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocol", value)

    @builtins.property
    @jsii.member(jsii_name="aclId")
    def acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aclId: The ID of the access control list associated with the listener to be created.
        If the value of the AclStatus parameter is on, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aclId"))

    @acl_id.setter
    def acl_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c72336f8d5cf733ba925086b1a91f938181f6d036ed5fe3cbd7ca2e1c29ecbd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclId", value)

    @builtins.property
    @jsii.member(jsii_name="aclStatus")
    def acl_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aclStatus: Indicates whether to enable access control.
        Valid values: on | off. Default value: off
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aclStatus"))

    @acl_status.setter
    def acl_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b186ff0000b32e6e03dd28ebefa20e632c39189233127355c97ca6711f38742)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclStatus", value)

    @builtins.property
    @jsii.member(jsii_name="aclType")
    def acl_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aclType: The access control type:

        - white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
        Enabling a whitelist poses some risks to your services.
        After a whitelist is enabled, only the IP addresses in the list can access the listener.
        If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
        - black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
        If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.

        If the value of the AclStatus parameter is on, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "aclType"))

    @acl_type.setter
    def acl_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdd15311d5c389793d5d0effdf35aaae33d0bb0bd32055097b041581bddfcf4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "aclType", value)

    @builtins.property
    @jsii.member(jsii_name="backendServerPort")
    def backend_server_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backendServerPort: Backend server can listen on ports from 1 to 65535.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backendServerPort"))

    @backend_server_port.setter
    def backend_server_port(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcdff56130779b973ce4664c24af785a0c58c11126410eb4deeca93cfc769f5f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backendServerPort", value)

    @builtins.property
    @jsii.member(jsii_name="caCertificateId")
    def ca_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: caCertificateId: CA server certificate id, for https listener only.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "caCertificateId"))

    @ca_certificate_id.setter
    def ca_certificate_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d65999633df7706029659714ddfa3b5c9ff0f2faec6ca27476c75949de1c662)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "caCertificateId", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__deacde491ff1e99a8e6e95efadf83c246edc449f2a8fd8ad1be4d958dbcb1954)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="enableHttp2")
    def enable_http2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableHttp2: Specifies whether to use HTTP/2. It takes effect when Protocol=https. Valid values:
        on: yes
        off: no
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "enableHttp2"))

    @enable_http2.setter
    def enable_http2(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57ecd60cf3ce01487939bba9d178f20c5cd80bbe9e5d5d5b4652abb9f3382374)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableHttp2", value)

    @builtins.property
    @jsii.member(jsii_name="healthCheck")
    def health_check(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.HealthCheckProperty"]]:
        '''
        :Property: healthCheck: The properties of health checking setting.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.HealthCheckProperty"]], jsii.get(self, "healthCheck"))

    @health_check.setter
    def health_check(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.HealthCheckProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__235939a8a3a75a15579937a6a76b158b410c9551955c832aa18014fadbf3aa25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "healthCheck", value)

    @builtins.property
    @jsii.member(jsii_name="httpConfig")
    def http_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.HttpConfigProperty"]]:
        '''
        :Property: httpConfig: Config for http protocol.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.HttpConfigProperty"]], jsii.get(self, "httpConfig"))

    @http_config.setter
    def http_config(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.HttpConfigProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d8e87688141d6935d6a699efa054cbd09127c9e3f05eefbf81bd16a3b5810a0f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpConfig", value)

    @builtins.property
    @jsii.member(jsii_name="idleTimeout")
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "idleTimeout"))

    @idle_timeout.setter
    def idle_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d42590f52bb7a7352ba27e22ed8aee699d78e72a399fb261e45e1ce4242d0e25)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "idleTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="masterSlaveServerGroupId")
    def master_slave_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterSlaveServerGroupId"))

    @master_slave_server_group_id.setter
    def master_slave_server_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__84cb2bd88e393c16ba8875a98530c0a5022f35e314b9c2a4a0e0a8e6e157eec4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterSlaveServerGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="persistence")
    def persistence(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PersistenceProperty"]]:
        '''
        :Property: persistence: The properties of persistence.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PersistenceProperty"]], jsii.get(self, "persistence"))

    @persistence.setter
    def persistence(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PersistenceProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8118c2c75a8f04d376feb26c8ba931f384ae8ee4f0006bde4b2ffeeee22c26f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "persistence", value)

    @builtins.property
    @jsii.member(jsii_name="portRange")
    def port_range(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PortRangeProperty"]]]]:
        '''
        :Property: portRange: Port range, only supports TCP or UDP listener. ListenerPort should be 0 when PortRange is specified.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PortRangeProperty"]]]], jsii.get(self, "portRange"))

    @port_range.setter
    def port_range(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosListener.PortRangeProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c9ce8f2fe70c315990ecd31b3fa74bc1f50dc23e42905a521bf291b8b58944b1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "portRange", value)

    @builtins.property
    @jsii.member(jsii_name="requestTimeout")
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "requestTimeout"))

    @request_timeout.setter
    def request_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0edbf23cd8f1c622ffeb49b11ff06347a3431fb76f63c81a5993ba83590e1b34)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "requestTimeout", value)

    @builtins.property
    @jsii.member(jsii_name="scheduler")
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scheduler: The scheduling algorithm. Valid values:
        wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
        wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
        rr: Requests are distributed to backend servers in sequence.
        sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
        tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
        Default: wrr
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "scheduler"))

    @scheduler.setter
    def scheduler(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0726316d42070a5bf5be5a8d44981d13a658c112548bdfd7fe00e8fbdd8419e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scheduler", value)

    @builtins.property
    @jsii.member(jsii_name="serverCertificateId")
    def server_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serverCertificateId: Server certificate id, for https listener only, this properties is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "serverCertificateId"))

    @server_certificate_id.setter
    def server_certificate_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9afdacf8f1db95ba480b05b3b643774056198c1c29d2ab2ca2b5da5d66a1ba2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serverCertificateId", value)

    @builtins.property
    @jsii.member(jsii_name="startListener")
    def start_listener(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: startListener: Whether start listener after listener created. Default True.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "startListener"))

    @start_listener.setter
    def start_listener(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f33b607b770417212837e09fce7f0834cc6092a9f761754fe089504c9654b7bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "startListener", value)

    @builtins.property
    @jsii.member(jsii_name="vServerGroupId")
    def v_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vServerGroupId: The id of the VServerGroup which use in listener.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vServerGroupId"))

    @v_server_group_id.setter
    def v_server_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9dedd683a1c4602a3398684772ed8d510c2efc312b6dee42eb4e62de0d7f6456)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vServerGroupId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosListener.HealthCheckProperty",
        jsii_struct_bases=[],
        name_mapping={
            "domain": "domain",
            "health_check_method": "healthCheckMethod",
            "health_check_type": "healthCheckType",
            "healthy_threshold": "healthyThreshold",
            "http_code": "httpCode",
            "interval": "interval",
            "port": "port",
            "switch": "switch",
            "timeout": "timeout",
            "unhealthy_threshold": "unhealthyThreshold",
            "uri": "uri",
        },
    )
    class HealthCheckProperty:
        def __init__(
            self,
            *,
            domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            http_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param domain: 
            :param health_check_method: 
            :param health_check_type: 
            :param healthy_threshold: 
            :param http_code: 
            :param interval: 
            :param port: 
            :param switch: 
            :param timeout: 
            :param unhealthy_threshold: 
            :param uri: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__f7bb472dd5f75b293476d1d83cb77c4a18fa448f24ef3141472603f9d5f6425f)
                check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
                check_type(argname="argument health_check_method", value=health_check_method, expected_type=type_hints["health_check_method"])
                check_type(argname="argument health_check_type", value=health_check_type, expected_type=type_hints["health_check_type"])
                check_type(argname="argument healthy_threshold", value=healthy_threshold, expected_type=type_hints["healthy_threshold"])
                check_type(argname="argument http_code", value=http_code, expected_type=type_hints["http_code"])
                check_type(argname="argument interval", value=interval, expected_type=type_hints["interval"])
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument switch", value=switch, expected_type=type_hints["switch"])
                check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
                check_type(argname="argument unhealthy_threshold", value=unhealthy_threshold, expected_type=type_hints["unhealthy_threshold"])
                check_type(argname="argument uri", value=uri, expected_type=type_hints["uri"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if domain is not None:
                self._values["domain"] = domain
            if health_check_method is not None:
                self._values["health_check_method"] = health_check_method
            if health_check_type is not None:
                self._values["health_check_type"] = health_check_type
            if healthy_threshold is not None:
                self._values["healthy_threshold"] = healthy_threshold
            if http_code is not None:
                self._values["http_code"] = http_code
            if interval is not None:
                self._values["interval"] = interval
            if port is not None:
                self._values["port"] = port
            if switch is not None:
                self._values["switch"] = switch
            if timeout is not None:
                self._values["timeout"] = timeout
            if unhealthy_threshold is not None:
                self._values["unhealthy_threshold"] = unhealthy_threshold
            if uri is not None:
                self._values["uri"] = uri

        @builtins.property
        def domain(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: domain: The domain of health check target.
            '''
            result = self._values.get("domain")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_method(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckMethod: The health check method used in HTTP or HTTPS health checks. Valid values: head and get.
            '''
            result = self._values.get("health_check_method")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def health_check_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthCheckType: The type of health check. It takes effect when Protocol=tcp. Valid values: tcp and http. Default value: tcp.
            '''
            result = self._values.get("health_check_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def healthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: healthyThreshold: The number of consecutive health checks successes required,before identified the backend server in Healthy status.
            '''
            result = self._values.get("healthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def http_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: httpCode: The expect status of health check result. Any answer other than referred status within the timeout period is considered unhealthy.
            '''
            result = self._values.get("http_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def interval(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: interval: The approximate interval, unit in seconds, between health checks of an backend server.
            '''
            result = self._values.get("interval")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: port: The port being checked. The range of valid ports is 0 through 65535.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def switch(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            switch: Whether to enable health check. Valid value: on, off.
            If value is on, turn on the health check. If value is off, turn off the health checkIf value is not set, the health check is disabled by default, unless any health check items are configured.
            '''
            result = self._values.get("switch")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: timeout: The amount of time, in seconds, during which no response means a failed health check.
            '''
            result = self._values.get("timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def unhealthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: unhealthyThreshold: The number of consecutive health checks failures required,before identified the backend server in Unhealthy status.
            '''
            result = self._values.get("unhealthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def uri(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: uri: The url of health check target.
            '''
            result = self._values.get("uri")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HealthCheckProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosListener.HttpConfigProperty",
        jsii_struct_bases=[],
        name_mapping={
            "forward_port": "forwardPort",
            "listener_forward": "listenerForward",
        },
    )
    class HttpConfigProperty:
        def __init__(
            self,
            *,
            forward_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            listener_forward: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param forward_port: 
            :param listener_forward: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__2fed72d5bbd2e4710dde65ab405172307d15127aeaa39f672b65c93b3632c0cf)
                check_type(argname="argument forward_port", value=forward_port, expected_type=type_hints["forward_port"])
                check_type(argname="argument listener_forward", value=listener_forward, expected_type=type_hints["listener_forward"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if forward_port is not None:
                self._values["forward_port"] = forward_port
            if listener_forward is not None:
                self._values["listener_forward"] = listener_forward

        @builtins.property
        def forward_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            forwardPort: HTTP to HTTPS listening forwarding port.
            Default value: 443.
            '''
            result = self._values.get("forward_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def listener_forward(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            listenerForward: Whether to enable HTTP to HTTPS forwarding.
            Valid values: on | off. Default value: off.
            '''
            result = self._values.get("listener_forward")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "HttpConfigProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosListener.PersistenceProperty",
        jsii_struct_bases=[],
        name_mapping={
            "cookie": "cookie",
            "cookie_timeout": "cookieTimeout",
            "persistence_timeout": "persistenceTimeout",
            "sticky_session": "stickySession",
            "sticky_session_type": "stickySessionType",
            "x_forwarded_for": "xForwardedFor",
            "x_forwarded_for_client_src_port": "xForwardedForClientSrcPort",
            "x_forwarded_for_proto": "xForwardedForProto",
            "x_forwarded_for_slbid": "xForwardedForSlbid",
            "x_forwarded_for_slbip": "xForwardedForSlbip",
            "x_forwarded_for_slbport": "xForwardedForSlbport",
        },
    )
    class PersistenceProperty:
        def __init__(
            self,
            *,
            cookie: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            cookie_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            persistence_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sticky_session: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            sticky_session_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_client_src_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_proto: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_slbid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_slbip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            x_forwarded_for_slbport: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param cookie: 
            :param cookie_timeout: 
            :param persistence_timeout: 
            :param sticky_session: 
            :param sticky_session_type: 
            :param x_forwarded_for: 
            :param x_forwarded_for_client_src_port: 
            :param x_forwarded_for_proto: 
            :param x_forwarded_for_slbid: 
            :param x_forwarded_for_slbip: 
            :param x_forwarded_for_slbport: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__4241bd702b9bc2b4bb8e465291abf9233ef9c5d1af927aa073011b4233b9dae6)
                check_type(argname="argument cookie", value=cookie, expected_type=type_hints["cookie"])
                check_type(argname="argument cookie_timeout", value=cookie_timeout, expected_type=type_hints["cookie_timeout"])
                check_type(argname="argument persistence_timeout", value=persistence_timeout, expected_type=type_hints["persistence_timeout"])
                check_type(argname="argument sticky_session", value=sticky_session, expected_type=type_hints["sticky_session"])
                check_type(argname="argument sticky_session_type", value=sticky_session_type, expected_type=type_hints["sticky_session_type"])
                check_type(argname="argument x_forwarded_for", value=x_forwarded_for, expected_type=type_hints["x_forwarded_for"])
                check_type(argname="argument x_forwarded_for_client_src_port", value=x_forwarded_for_client_src_port, expected_type=type_hints["x_forwarded_for_client_src_port"])
                check_type(argname="argument x_forwarded_for_proto", value=x_forwarded_for_proto, expected_type=type_hints["x_forwarded_for_proto"])
                check_type(argname="argument x_forwarded_for_slbid", value=x_forwarded_for_slbid, expected_type=type_hints["x_forwarded_for_slbid"])
                check_type(argname="argument x_forwarded_for_slbip", value=x_forwarded_for_slbip, expected_type=type_hints["x_forwarded_for_slbip"])
                check_type(argname="argument x_forwarded_for_slbport", value=x_forwarded_for_slbport, expected_type=type_hints["x_forwarded_for_slbport"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if cookie is not None:
                self._values["cookie"] = cookie
            if cookie_timeout is not None:
                self._values["cookie_timeout"] = cookie_timeout
            if persistence_timeout is not None:
                self._values["persistence_timeout"] = persistence_timeout
            if sticky_session is not None:
                self._values["sticky_session"] = sticky_session
            if sticky_session_type is not None:
                self._values["sticky_session_type"] = sticky_session_type
            if x_forwarded_for is not None:
                self._values["x_forwarded_for"] = x_forwarded_for
            if x_forwarded_for_client_src_port is not None:
                self._values["x_forwarded_for_client_src_port"] = x_forwarded_for_client_src_port
            if x_forwarded_for_proto is not None:
                self._values["x_forwarded_for_proto"] = x_forwarded_for_proto
            if x_forwarded_for_slbid is not None:
                self._values["x_forwarded_for_slbid"] = x_forwarded_for_slbid
            if x_forwarded_for_slbip is not None:
                self._values["x_forwarded_for_slbip"] = x_forwarded_for_slbip
            if x_forwarded_for_slbport is not None:
                self._values["x_forwarded_for_slbport"] = x_forwarded_for_slbport

        @builtins.property
        def cookie(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cookie: The type of session persistence.
            '''
            result = self._values.get("cookie")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def cookie_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: cookieTimeout: The timeout for cookie setting, in seconds. It only take effect while StickySession is setting to 'on' and StickySessionType is setting to 'insert'.
            '''
            result = self._values.get("cookie_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def persistence_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: persistenceTimeout: The timeout number of persistence, in seconds.
            '''
            result = self._values.get("persistence_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sticky_session(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: stickySession: The switch of session persistence. Support 'on' and 'off'.
            '''
            result = self._values.get("sticky_session")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def sticky_session_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: stickySessionType: The type of session persistence. Depends on parameter StickySession, if it is set to off, this parameter will be ignored.
            '''
            result = self._values.get("sticky_session_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: xForwardedFor: Use 'X-Forwarded-For' to get real ip of accessor. On for open, off for close.
            '''
            result = self._values.get("x_forwarded_for")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_src_port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: xForwardedForClientSrcPort: Optional. Indicates whether to use the X-Forwarded-Client-srcport header field to retrieve the port used by a client to connect to the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            '''
            result = self._values.get("x_forwarded_for_client_src_port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_proto(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: xForwardedForProto: Optional. Indicates whether to use the X-Forwarded-Proto header field to obtainthe listening protocol used by the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            '''
            result = self._values.get("x_forwarded_for_proto")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_slbid(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: xForwardedForSlbid: Optional. Indicates whether to use the SLB-ID header field to obtain the SLB instance ID. Valid values: on | off. Default value: off If you do not set this parameter, the default value is used.
            '''
            result = self._values.get("x_forwarded_for_slbid")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_slbip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: xForwardedForSlbip: Optional. Indicates whether to use the SLB-IP header field to obtainthe real IP address of a client request.Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            '''
            result = self._values.get("x_forwarded_for_slbip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_slbport(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: xForwardedForSlbport: Optional. Indicates whether to use the X-Forwarded-Port header field to retrieve the listening ports of the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            '''
            result = self._values.get("x_forwarded_for_slbport")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PersistenceProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosListener.PortRangeProperty",
        jsii_struct_bases=[],
        name_mapping={"end_port": "endPort", "start_port": "startPort"},
    )
    class PortRangeProperty:
        def __init__(
            self,
            *,
            end_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            start_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        ) -> None:
            '''
            :param end_port: 
            :param start_port: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__314d5ec2c18c2e5645f1da52b47f9592473fa77874a463bcd33813d220475044)
                check_type(argname="argument end_port", value=end_port, expected_type=type_hints["end_port"])
                check_type(argname="argument start_port", value=start_port, expected_type=type_hints["start_port"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "end_port": end_port,
                "start_port": start_port,
            }

        @builtins.property
        def end_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: endPort: End port, from 1 to 65535.
            '''
            result = self._values.get("end_port")
            assert result is not None, "Required property 'end_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def start_port(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: startPort: Start port, from 1 to 65535.
            '''
            result = self._values.get("start_port")
            assert result is not None, "Required property 'start_port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "PortRangeProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.RosListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "bandwidth": "bandwidth",
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "protocol": "protocol",
        "acl_id": "aclId",
        "acl_status": "aclStatus",
        "acl_type": "aclType",
        "backend_server_port": "backendServerPort",
        "ca_certificate_id": "caCertificateId",
        "description": "description",
        "enable_http2": "enableHttp2",
        "health_check": "healthCheck",
        "http_config": "httpConfig",
        "idle_timeout": "idleTimeout",
        "master_slave_server_group_id": "masterSlaveServerGroupId",
        "persistence": "persistence",
        "port_range": "portRange",
        "request_timeout": "requestTimeout",
        "scheduler": "scheduler",
        "server_certificate_id": "serverCertificateId",
        "start_listener": "startListener",
        "v_server_group_id": "vServerGroupId",
    },
)
class RosListenerProps:
    def __init__(
        self,
        *,
        bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acl_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        acl_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        backend_server_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ca_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        enable_http2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        health_check: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.HealthCheckProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        http_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.HttpConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_slave_server_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        persistence: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.PersistenceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        port_range: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.PortRangeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        request_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        server_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        start_listener: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_server_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::Listener``.

        :param bandwidth: 
        :param listener_port: 
        :param load_balancer_id: 
        :param protocol: 
        :param acl_id: 
        :param acl_status: 
        :param acl_type: 
        :param backend_server_port: 
        :param ca_certificate_id: 
        :param description: 
        :param enable_http2: 
        :param health_check: 
        :param http_config: 
        :param idle_timeout: 
        :param master_slave_server_group_id: 
        :param persistence: 
        :param port_range: 
        :param request_timeout: 
        :param scheduler: 
        :param server_certificate_id: 
        :param start_listener: 
        :param v_server_group_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3c57955ef9e55f3650e61dba548b01d32bb4d91aec43b7451a9fbacbb77dfce)
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument protocol", value=protocol, expected_type=type_hints["protocol"])
            check_type(argname="argument acl_id", value=acl_id, expected_type=type_hints["acl_id"])
            check_type(argname="argument acl_status", value=acl_status, expected_type=type_hints["acl_status"])
            check_type(argname="argument acl_type", value=acl_type, expected_type=type_hints["acl_type"])
            check_type(argname="argument backend_server_port", value=backend_server_port, expected_type=type_hints["backend_server_port"])
            check_type(argname="argument ca_certificate_id", value=ca_certificate_id, expected_type=type_hints["ca_certificate_id"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enable_http2", value=enable_http2, expected_type=type_hints["enable_http2"])
            check_type(argname="argument health_check", value=health_check, expected_type=type_hints["health_check"])
            check_type(argname="argument http_config", value=http_config, expected_type=type_hints["http_config"])
            check_type(argname="argument idle_timeout", value=idle_timeout, expected_type=type_hints["idle_timeout"])
            check_type(argname="argument master_slave_server_group_id", value=master_slave_server_group_id, expected_type=type_hints["master_slave_server_group_id"])
            check_type(argname="argument persistence", value=persistence, expected_type=type_hints["persistence"])
            check_type(argname="argument port_range", value=port_range, expected_type=type_hints["port_range"])
            check_type(argname="argument request_timeout", value=request_timeout, expected_type=type_hints["request_timeout"])
            check_type(argname="argument scheduler", value=scheduler, expected_type=type_hints["scheduler"])
            check_type(argname="argument server_certificate_id", value=server_certificate_id, expected_type=type_hints["server_certificate_id"])
            check_type(argname="argument start_listener", value=start_listener, expected_type=type_hints["start_listener"])
            check_type(argname="argument v_server_group_id", value=v_server_group_id, expected_type=type_hints["v_server_group_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "bandwidth": bandwidth,
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
            "protocol": protocol,
        }
        if acl_id is not None:
            self._values["acl_id"] = acl_id
        if acl_status is not None:
            self._values["acl_status"] = acl_status
        if acl_type is not None:
            self._values["acl_type"] = acl_type
        if backend_server_port is not None:
            self._values["backend_server_port"] = backend_server_port
        if ca_certificate_id is not None:
            self._values["ca_certificate_id"] = ca_certificate_id
        if description is not None:
            self._values["description"] = description
        if enable_http2 is not None:
            self._values["enable_http2"] = enable_http2
        if health_check is not None:
            self._values["health_check"] = health_check
        if http_config is not None:
            self._values["http_config"] = http_config
        if idle_timeout is not None:
            self._values["idle_timeout"] = idle_timeout
        if master_slave_server_group_id is not None:
            self._values["master_slave_server_group_id"] = master_slave_server_group_id
        if persistence is not None:
            self._values["persistence"] = persistence
        if port_range is not None:
            self._values["port_range"] = port_range
        if request_timeout is not None:
            self._values["request_timeout"] = request_timeout
        if scheduler is not None:
            self._values["scheduler"] = scheduler
        if server_certificate_id is not None:
            self._values["server_certificate_id"] = server_certificate_id
        if start_listener is not None:
            self._values["start_listener"] = start_listener
        if v_server_group_id is not None:
            self._values["v_server_group_id"] = v_server_group_id

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: listenerPort: Port for front listener. Range from 0 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer to create listener.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocol(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aclId: The ID of the access control list associated with the listener to be created.
        If the value of the AclStatus parameter is on, this parameter is required.
        '''
        result = self._values.get("acl_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acl_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aclStatus: Indicates whether to enable access control.
        Valid values: on | off. Default value: off
        '''
        result = self._values.get("acl_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def acl_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        aclType: The access control type:

        - white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
        Enabling a whitelist poses some risks to your services.
        After a whitelist is enabled, only the IP addresses in the list can access the listener.
        If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
        - black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
        If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.

        If the value of the AclStatus parameter is on, this parameter is required.
        '''
        result = self._values.get("acl_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def backend_server_port(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backendServerPort: Backend server can listen on ports from 1 to 65535.
        '''
        result = self._values.get("backend_server_port")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def ca_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: caCertificateId: CA server certificate id, for https listener only.
        '''
        result = self._values.get("ca_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def enable_http2(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        enableHttp2: Specifies whether to use HTTP/2. It takes effect when Protocol=https. Valid values:
        on: yes
        off: no
        '''
        result = self._values.get("enable_http2")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def health_check(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.HealthCheckProperty]]:
        '''
        :Property: healthCheck: The properties of health checking setting.
        '''
        result = self._values.get("health_check")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.HealthCheckProperty]], result)

    @builtins.property
    def http_config(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.HttpConfigProperty]]:
        '''
        :Property: httpConfig: Config for http protocol.
        '''
        result = self._values.get("http_config")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.HttpConfigProperty]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
        '''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_slave_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
        '''
        result = self._values.get("master_slave_server_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def persistence(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.PersistenceProperty]]:
        '''
        :Property: persistence: The properties of persistence.
        '''
        result = self._values.get("persistence")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.PersistenceProperty]], result)

    @builtins.property
    def port_range(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.PortRangeProperty]]]]:
        '''
        :Property: portRange: Port range, only supports TCP or UDP listener. ListenerPort should be 0 when PortRange is specified.
        '''
        result = self._values.get("port_range")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.PortRangeProperty]]]], result)

    @builtins.property
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
        '''
        result = self._values.get("request_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        scheduler: The scheduling algorithm. Valid values:
        wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
        wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
        rr: Requests are distributed to backend servers in sequence.
        sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
        tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
        Default: wrr
        '''
        result = self._values.get("scheduler")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def server_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: serverCertificateId: Server certificate id, for https listener only, this properties is required.
        '''
        result = self._values.get("server_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def start_listener(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: startListener: Whether start listener after listener created. Default True.
        '''
        result = self._values.get("start_listener")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vServerGroupId: The id of the VServerGroup which use in listener.
        '''
        result = self._values.get("v_server_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancer(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosLoadBalancer",
):
    '''A ROS template type:  ``ALIYUN::SLB::LoadBalancer``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancerProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::LoadBalancer``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac034d72aa26bde3e28687b108c97956145ad9487d6b8efc3dc0c57cd1acda43)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2a7edf661660d2e34b7cca3206375396dff58f16bb9a776b710d9ca39cfa0b27)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressIPVersion: IP version
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: AddressType: The address type of the load balancer. "intranet" or "internet".
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth for network
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IpAddress: The ip address of the load balancer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The id of load balance created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerName")
    def attr_load_balancer_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerName: Name of created load balancer.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerName"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerSpec")
    def attr_load_balancer_spec(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerSpec: The specification of the Server Load Balancer instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerSpec"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterZoneId")
    def attr_master_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterZoneId: The master zone id to create load balancer instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: NetworkType: The network type of the load balancer. "vpc" or "classic" network.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: OrderId: The order ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property
    @jsii.member(jsii_name="attrPayType")
    def attr_pay_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PayType: The billing method of the instance to be created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPayType"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: Resource group id.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSlaveZoneId")
    def attr_slave_zone_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SlaveZoneId: The slave zone id to create load balancer instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSlaveZoneId"))

    @builtins.property
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VpcId: Vpc id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VSwitchId: VSwitch id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVSwitchId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__797f8811e9db7c17b7db8980846f43192379650ace12c2494a149393cd1007dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fdaf5ff7fec7ed58bf64caa92aaba18bc8acee220c99edd54939d46e06c84775)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressIpVersion", value)

    @builtins.property
    @jsii.member(jsii_name="addressType")
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "addressType"))

    @address_type.setter
    def address_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cc2abeaa4eb1d6d7184bfbef30800d9cce06bf117498711045d8ba0708f01b4a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "addressType", value)

    @builtins.property
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
        Valid values: true | false. Default true.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d14dce33a295ed1e1d5e73999a65bc6f891915ea40684ca50a258a3e8f0536df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoPay", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8859b93c9ab709a5e4cd9da41f85dc9c3fe048b4a5d7586002bc473b45ae26f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenew", value)

    @builtins.property
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required:
        When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.
        When PeriodUnit = year, the value range is 1-3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a8c4545e9e0fbe652aac0c9dc9737379bf08f81a637d6074987a44ae77da487e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc82c82d03141c0ac5002b517e7e174c598d4252deea9095ac5549b4ed4c6cb8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionProtection: Whether to enable deletion protection.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5c665ec4750026b6229fdfa17516c97af4e125d64f781e498c11a832585febaf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionProtection", value)

    @builtins.property
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        duration: Optional. The subscription duration of a Subscription Internet instance.
        Valid values:
        If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
        If PricingCycle is year, the value range is 1 to 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7309ca279a3aedb6e66b2c068c326c155199df20aa579f4c9282219c953c5279)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "duration", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec.
        PayByCLCU: billed by usage.
        Default: PayBySpec
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c53222207b48b2672e2c068b336d9fe090ed84ee6610470e15622eeb1a8c4515)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__026a25b59716874c592cbcd49ab24aac71a7766a2c1d7b29db0b763a48ce21e1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "internetChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerName")
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerName"))

    @load_balancer_name.setter
    def load_balancer_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__689e47e32d2afb1e4d271e5eb31c5dd95f0f41d4616e69cf6bbd02dae7f82fd9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerName", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerSpec")
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerSpec"))

    @load_balancer_spec.setter
    def load_balancer_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b572175ef8437888bca6c419ae0589d1ad3d89dc15d6bbd7bad92dde8bec287)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerSpec", value)

    @builtins.property
    @jsii.member(jsii_name="masterZoneId")
    def master_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterZoneId: The master zone id to create load balancer instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterZoneId"))

    @master_zone_id.setter
    def master_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2a1272586a275470c8dc9b59d3612e869c1e75e21a1924bca37fc9fcc1b5312e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="modificationProtectionReason")
    def modification_protection_reason(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
        Only valid when ModificationProtectionStatus is ConsoleProtection.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "modificationProtectionReason"))

    @modification_protection_reason.setter
    def modification_protection_reason(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c3f40e7dc3740d21811e251799481467273db66ae0cc8f69ed5dff2219aa6ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modificationProtectionReason", value)

    @builtins.property
    @jsii.member(jsii_name="modificationProtectionStatus")
    def modification_protection_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
        ConsoleProtection: Modify instance protection status by console
        Default value is empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "modificationProtectionStatus"))

    @modification_protection_status.setter
    def modification_protection_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__46492516939a5f5c744e096dfb7ba42ec4e1a1ac22f9b8cb0d56e44c36dca00f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "modificationProtectionStatus", value)

    @builtins.property
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: Optional. The billing method of the instance to be created.
        Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98a24be074846809182b991a1184fe184288a911a8ac3da01d7d7e0120b6f147)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "payType", value)

    @builtins.property
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
        Valid values: month | year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90002872ae70a67a4f1e619ec83d61985b8982edf3eb2f4b035adea580f4e917)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "pricingCycle", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f8c0f3cabade82e069cb8339d8fff4bae2c601b01868aab72150d739ca0a156c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="slaveZoneId")
    def slave_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slaveZoneId: The slave zone id to create load balancer instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "slaveZoneId"))

    @slave_zone_id.setter
    def slave_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c32e11009f833d195cdc8acc81242f5bb226c8588202d56912cff0cdd55a922)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "slaveZoneId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosLoadBalancer.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7662e060f3184416fd4b1b14ffc62ea373fed9261fe30285c63faf9e5870b1cf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create load balancer instance. For VPC network only.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d45d6b63733a6726d2a952dc6a69e39ea31dcea1640e6314993e0be3f12f54c7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vpcId", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee538bac3fdeaaad87126f158f56053381d6c9f341cb1808e931ce7265b731d8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosLoadBalancer.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__ae91907b5c637ed4590f98ef4c8d68d1c4ed228c040a22a2dcfe37582c14a999)
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


class RosLoadBalancerClone(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosLoadBalancerClone",
):
    '''A ROS template type:  ``ALIYUN::SLB::LoadBalancerClone``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLoadBalancerCloneProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::LoadBalancerClone``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2ffade5dc970282cd514b995eebe40dab996c88c5aaf277d21b6a07d25f9ac93)
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
            type_hints = typing.get_type_hints(_typecheckingstub__a9f6f0be89524067c6057cc968c80fba2619e9222ca524c58bf0bab75d6b2070)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancerId: The id of load balance generated
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancerId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__61a00b0da57d05e5963e1d1aaac28b18f8b2e6d3dd0520079b36a8f26627dad0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="sourceLoadBalancerId")
    def source_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceLoadBalancerId: Source load balancer id to clone
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "sourceLoadBalancerId"))

    @source_load_balancer_id.setter
    def source_load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4881a8759fc0ab02baa88833b7c136130e46e087678f51c15172607b519a4258)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceLoadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="backendServers")
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]]:
        '''
        :Property: backendServers: The list of ECS instance, which will attached to load balancer.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]], jsii.get(self, "backendServers"))

    @backend_servers.setter
    def backend_servers(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c7988d71e27b919133722358429e566e121583c94bd24b03c67daa42532a4282)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backendServers", value)

    @builtins.property
    @jsii.member(jsii_name="backendServersPolicy")
    def backend_servers_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "backendServersPolicy"))

    @backend_servers_policy.setter
    def backend_servers_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__025387db2dfcfac3341ba466eb5dc3f4de30e018a107f6f007a59c23769e6310)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backendServersPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="instanceChargeType")
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec.
        PayByCLCU: billed by usage.
        If not specified, it is same with the source load balancer.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "instanceChargeType"))

    @instance_charge_type.setter
    def instance_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f0213ef0271cd0278b634d936c7735828f3d144ea15b9b0ed98a58d1a1224ce6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceChargeType", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerName")
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerName"))

    @load_balancer_name.setter
    def load_balancer_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aef889cf0580f45cd58a670704ad1109d4ef57cf2986531e9da03f770362b0cc)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerName", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerSpec")
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loadBalancerSpec: The specification of the load balancer. If not specified, it is same with the source load balancer.
        Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancerSpec"))

    @load_balancer_spec.setter
    def load_balancer_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7fbbe6a4bb532c5692cd4d600a151e1b5d3b08c9a2439ea60c880cba41d6f60a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerSpec", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__83ad3f6ec65f700710b10419ae05b8c3779253b6718fbcde064d4d08837bab54)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> typing.Optional[typing.List["RosLoadBalancerClone.TagsProperty"]]:
        '''
        :Property: tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        '''
        return typing.cast(typing.Optional[typing.List["RosLoadBalancerClone.TagsProperty"]], jsii.get(self, "tags"))

    @tags.setter
    def tags(
        self,
        value: typing.Optional[typing.List["RosLoadBalancerClone.TagsProperty"]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7ceb55efa8025d2f9b30b567d2453a05ca64d9adfce00f4590c73d638dfa6df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tags", value)

    @builtins.property
    @jsii.member(jsii_name="tagsPolicy")
    def tags_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
        Default is 'empty'.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "tagsPolicy"))

    @tags_policy.setter
    def tags_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3ec67321fe80002f47513b8d2ca14d6f1bc037cf25054d8b2dff43964f249e49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "tagsPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__907c6d68baa35d78328f3bf2319eb05b977c3a5b4971c7f0399096445628d09e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vSwitchId", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosLoadBalancerClone.BackendServersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "server_id": "serverId",
            "weight": "weight",
            "description": "description",
            "server_ip": "serverIp",
            "type": "type",
        },
    )
    class BackendServersProperty:
        def __init__(
            self,
            *,
            server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param server_id: 
            :param weight: 
            :param description: 
            :param server_ip: 
            :param type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__806e0f68708f0cfca573b37e8021da59727f95c78daafef8b0594716560d6ae8)
                check_type(argname="argument server_id", value=server_id, expected_type=type_hints["server_id"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument server_ip", value=server_ip, expected_type=type_hints["server_ip"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "server_id": server_id,
                "weight": weight,
            }
            if description is not None:
                self._values["description"] = description
            if server_ip is not None:
                self._values["server_ip"] = server_ip
            if type is not None:
                self._values["type"] = type

        @builtins.property
        def server_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serverId: Need one valid instance id. The instance status should running.
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            '''
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: description: A description of the backend server.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverIp: The IP of the instance.
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackendServersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosLoadBalancerClone.TagsProperty",
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
                type_hints = typing.get_type_hints(_typecheckingstub__9eac177e1081b4a58645490a4cfa0bdac74d80201f3aeed2927310349dc38567)
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
    jsii_type="@alicloud/ros-cdk-slb.RosLoadBalancerCloneProps",
    jsii_struct_bases=[],
    name_mapping={
        "source_load_balancer_id": "sourceLoadBalancerId",
        "backend_servers": "backendServers",
        "backend_servers_policy": "backendServersPolicy",
        "instance_charge_type": "instanceChargeType",
        "load_balancer_name": "loadBalancerName",
        "load_balancer_spec": "loadBalancerSpec",
        "resource_group_id": "resourceGroupId",
        "tags": "tags",
        "tags_policy": "tagsPolicy",
        "v_switch_id": "vSwitchId",
    },
)
class RosLoadBalancerCloneProps:
    def __init__(
        self,
        *,
        source_load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancerClone.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        backend_servers_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancerClone.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        tags_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::LoadBalancerClone``.

        :param source_load_balancer_id: 
        :param backend_servers: 
        :param backend_servers_policy: 
        :param instance_charge_type: 
        :param load_balancer_name: 
        :param load_balancer_spec: 
        :param resource_group_id: 
        :param tags: 
        :param tags_policy: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bb8dfaad9fcd2ffaf8d59a94a25039beed0dd32209e64d1908c8486b503dea2e)
            check_type(argname="argument source_load_balancer_id", value=source_load_balancer_id, expected_type=type_hints["source_load_balancer_id"])
            check_type(argname="argument backend_servers", value=backend_servers, expected_type=type_hints["backend_servers"])
            check_type(argname="argument backend_servers_policy", value=backend_servers_policy, expected_type=type_hints["backend_servers_policy"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument load_balancer_spec", value=load_balancer_spec, expected_type=type_hints["load_balancer_spec"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument tags_policy", value=tags_policy, expected_type=type_hints["tags_policy"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "source_load_balancer_id": source_load_balancer_id,
        }
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers
        if backend_servers_policy is not None:
            self._values["backend_servers_policy"] = backend_servers_policy
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if tags is not None:
            self._values["tags"] = tags
        if tags_policy is not None:
            self._values["tags_policy"] = tags_policy
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def source_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: sourceLoadBalancerId: Source load balancer id to clone
        '''
        result = self._values.get("source_load_balancer_id")
        assert result is not None, "Required property 'source_load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancerClone.BackendServersProperty]]]]:
        '''
        :Property: backendServers: The list of ECS instance, which will attached to load balancer.
        '''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancerClone.BackendServersProperty]]]], result)

    @builtins.property
    def backend_servers_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
        '''
        result = self._values.get("backend_servers_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec.
        PayByCLCU: billed by usage.
        If not specified, it is same with the source load balancer.
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loadBalancerSpec: The specification of the load balancer. If not specified, it is same with the source load balancer.
        Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosLoadBalancerClone.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosLoadBalancerClone.TagsProperty]], result)

    @builtins.property
    def tags_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
        Default is 'empty'.
        '''
        result = self._values.get("tags_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancerCloneProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.RosLoadBalancerProps",
    jsii_struct_bases=[],
    name_mapping={
        "address_ip_version": "addressIpVersion",
        "address_type": "addressType",
        "auto_pay": "autoPay",
        "auto_renew": "autoRenew",
        "auto_renew_period": "autoRenewPeriod",
        "bandwidth": "bandwidth",
        "deletion_protection": "deletionProtection",
        "duration": "duration",
        "instance_charge_type": "instanceChargeType",
        "internet_charge_type": "internetChargeType",
        "load_balancer_name": "loadBalancerName",
        "load_balancer_spec": "loadBalancerSpec",
        "master_zone_id": "masterZoneId",
        "modification_protection_reason": "modificationProtectionReason",
        "modification_protection_status": "modificationProtectionStatus",
        "pay_type": "payType",
        "pricing_cycle": "pricingCycle",
        "resource_group_id": "resourceGroupId",
        "slave_zone_id": "slaveZoneId",
        "tags": "tags",
        "vpc_id": "vpcId",
        "v_switch_id": "vSwitchId",
    },
)
class RosLoadBalancerProps:
    def __init__(
        self,
        *,
        address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        master_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modification_protection_reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        modification_protection_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::LoadBalancer``.

        :param address_ip_version: 
        :param address_type: 
        :param auto_pay: 
        :param auto_renew: 
        :param auto_renew_period: 
        :param bandwidth: 
        :param deletion_protection: 
        :param duration: 
        :param instance_charge_type: 
        :param internet_charge_type: 
        :param load_balancer_name: 
        :param load_balancer_spec: 
        :param master_zone_id: 
        :param modification_protection_reason: 
        :param modification_protection_status: 
        :param pay_type: 
        :param pricing_cycle: 
        :param resource_group_id: 
        :param slave_zone_id: 
        :param tags: 
        :param vpc_id: 
        :param v_switch_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6c3c7c21484380419d0b84f94989c51d7124ad033f24021f30aedcd89f51feab)
            check_type(argname="argument address_ip_version", value=address_ip_version, expected_type=type_hints["address_ip_version"])
            check_type(argname="argument address_type", value=address_type, expected_type=type_hints["address_type"])
            check_type(argname="argument auto_pay", value=auto_pay, expected_type=type_hints["auto_pay"])
            check_type(argname="argument auto_renew", value=auto_renew, expected_type=type_hints["auto_renew"])
            check_type(argname="argument auto_renew_period", value=auto_renew_period, expected_type=type_hints["auto_renew_period"])
            check_type(argname="argument bandwidth", value=bandwidth, expected_type=type_hints["bandwidth"])
            check_type(argname="argument deletion_protection", value=deletion_protection, expected_type=type_hints["deletion_protection"])
            check_type(argname="argument duration", value=duration, expected_type=type_hints["duration"])
            check_type(argname="argument instance_charge_type", value=instance_charge_type, expected_type=type_hints["instance_charge_type"])
            check_type(argname="argument internet_charge_type", value=internet_charge_type, expected_type=type_hints["internet_charge_type"])
            check_type(argname="argument load_balancer_name", value=load_balancer_name, expected_type=type_hints["load_balancer_name"])
            check_type(argname="argument load_balancer_spec", value=load_balancer_spec, expected_type=type_hints["load_balancer_spec"])
            check_type(argname="argument master_zone_id", value=master_zone_id, expected_type=type_hints["master_zone_id"])
            check_type(argname="argument modification_protection_reason", value=modification_protection_reason, expected_type=type_hints["modification_protection_reason"])
            check_type(argname="argument modification_protection_status", value=modification_protection_status, expected_type=type_hints["modification_protection_status"])
            check_type(argname="argument pay_type", value=pay_type, expected_type=type_hints["pay_type"])
            check_type(argname="argument pricing_cycle", value=pricing_cycle, expected_type=type_hints["pricing_cycle"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument slave_zone_id", value=slave_zone_id, expected_type=type_hints["slave_zone_id"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument vpc_id", value=vpc_id, expected_type=type_hints["vpc_id"])
            check_type(argname="argument v_switch_id", value=v_switch_id, expected_type=type_hints["v_switch_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if address_type is not None:
            self._values["address_type"] = address_type
        if auto_pay is not None:
            self._values["auto_pay"] = auto_pay
        if auto_renew is not None:
            self._values["auto_renew"] = auto_renew
        if auto_renew_period is not None:
            self._values["auto_renew_period"] = auto_renew_period
        if bandwidth is not None:
            self._values["bandwidth"] = bandwidth
        if deletion_protection is not None:
            self._values["deletion_protection"] = deletion_protection
        if duration is not None:
            self._values["duration"] = duration
        if instance_charge_type is not None:
            self._values["instance_charge_type"] = instance_charge_type
        if internet_charge_type is not None:
            self._values["internet_charge_type"] = internet_charge_type
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
        if load_balancer_spec is not None:
            self._values["load_balancer_spec"] = load_balancer_spec
        if master_zone_id is not None:
            self._values["master_zone_id"] = master_zone_id
        if modification_protection_reason is not None:
            self._values["modification_protection_reason"] = modification_protection_reason
        if modification_protection_status is not None:
            self._values["modification_protection_status"] = modification_protection_status
        if pay_type is not None:
            self._values["pay_type"] = pay_type
        if pricing_cycle is not None:
            self._values["pricing_cycle"] = pricing_cycle
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if slave_zone_id is not None:
            self._values["slave_zone_id"] = slave_zone_id
        if tags is not None:
            self._values["tags"] = tags
        if vpc_id is not None:
            self._values["vpc_id"] = vpc_id
        if v_switch_id is not None:
            self._values["v_switch_id"] = v_switch_id

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
        '''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
        Valid values: true | false. Default true.
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required:
        When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.
        When PeriodUnit = year, the value range is 1-3.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: deletionProtection: Whether to enable deletion protection.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        duration: Optional. The subscription duration of a Subscription Internet instance.
        Valid values:
        If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
        If PricingCycle is year, the value range is 1 to 5.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def instance_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec.
        PayByCLCU: billed by usage.
        Default: PayBySpec
        '''
        result = self._values.get("instance_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def master_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterZoneId: The master zone id to create load balancer instance.
        '''
        result = self._values.get("master_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modification_protection_reason(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
        Only valid when ModificationProtectionStatus is ConsoleProtection.
        '''
        result = self._values.get("modification_protection_reason")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def modification_protection_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
        ConsoleProtection: Modify instance protection status by console
        Default value is empty.
        '''
        result = self._values.get("modification_protection_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        payType: Optional. The billing method of the instance to be created.
        Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
        Valid values: month | year.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def slave_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: slaveZoneId: The slave zone id to create load balancer instance.
        '''
        result = self._values.get("slave_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.List[RosLoadBalancer.TagsProperty]]:
        '''
        :Property: tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.List[RosLoadBalancer.TagsProperty]], result)

    @builtins.property
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create load balancer instance. For VPC network only.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMasterSlaveServerGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup",
):
    '''A ROS template type:  ``ALIYUN::SLB::MasterSlaveServerGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosMasterSlaveServerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::MasterSlaveServerGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b027e39a65387002d3b41dad2136cb43573e845c5db037a80126ebcea80dc32)
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
            type_hints = typing.get_type_hints(_typecheckingstub__09e82a2246bd0ac3e4b9e8414f998d2e5e418f9907dd37b4bf3abeeb589aa2f0)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrMasterSlaveServerGroupId")
    def attr_master_slave_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: MasterSlaveServerGroupId: Active/standby server group ID.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrMasterSlaveServerGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__c3ec39fcdb64c9082e573191dfc2592772a8b0e2a32ceb9c799eea8ca3ba8ad8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the Server Load Balancer instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61c090bd1815fac5e202c8904b7382185428de29015efcac6a21bb40ddba3bb0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="masterSlaveBackendServers")
    def master_slave_backend_servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]]:
        '''
        :Property:

        masterSlaveBackendServers: A list of active/standby server group.
        An active/standby server group can only contain two backend servers.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]], jsii.get(self, "masterSlaveBackendServers"))

    @master_slave_backend_servers.setter
    def master_slave_backend_servers(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5592b534a8ec18b667f402ab3f004e509d58c2824d4159df914328154e057527)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterSlaveBackendServers", value)

    @builtins.property
    @jsii.member(jsii_name="masterSlaveServerGroupName")
    def master_slave_server_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterSlaveServerGroupName: The name of the active/standby server group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "masterSlaveServerGroupName"))

    @master_slave_server_group_name.setter
    def master_slave_server_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a70b1411831fcb5edda90c810638bae0ee8f5eb2b2e65603c1a53dccbe35bb9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "masterSlaveServerGroupName", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "port": "port",
            "server_id": "serverId",
            "weight": "weight",
            "server_type": "serverType",
        },
    )
    class MasterSlaveBackendServersProperty:
        def __init__(
            self,
            *,
            port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            server_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param port: 
            :param server_id: 
            :param weight: 
            :param server_type: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__25e0e06986d1255c0ccf0c175f1ef5ab0f7cbc81ec53c1f2323b4f35449b3cb9)
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument server_id", value=server_id, expected_type=type_hints["server_id"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
                check_type(argname="argument server_type", value=server_type, expected_type=type_hints["server_type"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "port": port,
                "server_id": server_id,
                "weight": weight,
            }
            if server_type is not None:
                self._values["server_type"] = server_type

        @builtins.property
        def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: port: The port used by backend server. From 1 to 65535
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def server_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serverId: ECS instance ID
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            '''
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def server_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverType: The identity of backend server. Could be "Master" (default) or "Slave"
            '''
            result = self._values.get("server_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "MasterSlaveBackendServersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.RosMasterSlaveServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "master_slave_backend_servers": "masterSlaveBackendServers",
        "master_slave_server_group_name": "masterSlaveServerGroupName",
    },
)
class RosMasterSlaveServerGroupProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        master_slave_backend_servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
        master_slave_server_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::MasterSlaveServerGroup``.

        :param load_balancer_id: 
        :param master_slave_backend_servers: 
        :param master_slave_server_group_name: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd97e9773855b4776a284c30d03fdb9067f6d27bbe78804460239dcac1c732f5)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument master_slave_backend_servers", value=master_slave_backend_servers, expected_type=type_hints["master_slave_backend_servers"])
            check_type(argname="argument master_slave_server_group_name", value=master_slave_server_group_name, expected_type=type_hints["master_slave_server_group_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
            "master_slave_backend_servers": master_slave_backend_servers,
        }
        if master_slave_server_group_name is not None:
            self._values["master_slave_server_group_name"] = master_slave_server_group_name

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the Server Load Balancer instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def master_slave_backend_servers(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty]]]:
        '''
        :Property:

        masterSlaveBackendServers: A list of active/standby server group.
        An active/standby server group can only contain two backend servers.
        '''
        result = self._values.get("master_slave_backend_servers")
        assert result is not None, "Required property 'master_slave_backend_servers' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty]]], result)

    @builtins.property
    def master_slave_server_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: masterSlaveServerGroupName: The name of the active/standby server group.
        '''
        result = self._values.get("master_slave_server_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMasterSlaveServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosRule",
):
    '''A ROS template type:  ``ALIYUN::SLB::Rule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::Rule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bfa316001bdbed0ac85141c35c10150aa45356e0250b8f0cdec86e328961ee0e)
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
            type_hints = typing.get_type_hints(_typecheckingstub__ea608b45e67109620c8226e05c3f00431cf6fe4d106bc6a821d586353c8f53e8)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrRules")
    def attr_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Rules: A list of forwarding rules. Each element of rules contains "RuleId".
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRules"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__90ba6edbaad0b0c58f9ffe60cf34c10c1e49632a64516f0f92911f481b7339a9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="listenerPort")
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        1-65535
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c810b3c0e69113845e4309585fe13e5f46863ca80ae40d64d97b963fe34ff7df)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "listenerPort", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of Server Load Balancer instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a5e262b0586e5621d14e723a0acb7530ac9c5a47f8386ce9549edeea60bdb86)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="ruleList")
    def rule_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleListProperty"]]]:
        '''
        :Property: ruleList: The forwarding rules to add.
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleListProperty"]]], jsii.get(self, "ruleList"))

    @rule_list.setter
    def rule_list(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosRule.RuleListProperty"]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__192e030dac8bf63634821eaff61966328a544f58e0b1664f776ce03768baaa3f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleList", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosRule.RuleListProperty",
        jsii_struct_bases=[],
        name_mapping={
            "rule_name": "ruleName",
            "v_server_group_id": "vServerGroupId",
            "domain": "domain",
            "url": "url",
        },
    )
    class RuleListProperty:
        def __init__(
            self,
            *,
            rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            v_server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param rule_name: 
            :param v_server_group_id: 
            :param domain: 
            :param url: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__678956d97f1cf53c67fa2e352dc14294c41fe2477d9e33c6ad5a40c30d7c4dbe)
                check_type(argname="argument rule_name", value=rule_name, expected_type=type_hints["rule_name"])
                check_type(argname="argument v_server_group_id", value=v_server_group_id, expected_type=type_hints["v_server_group_id"])
                check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
                check_type(argname="argument url", value=url, expected_type=type_hints["url"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "rule_name": rule_name,
                "v_server_group_id": v_server_group_id,
            }
            if domain is not None:
                self._values["domain"] = domain
            if url is not None:
                self._values["url"] = url

        @builtins.property
        def rule_name(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: ruleName: The name of the forwarding rule.
            '''
            result = self._values.get("rule_name")
            assert result is not None, "Required property 'rule_name' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def v_server_group_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: vServerGroupId: The ID of the VServer group associated with the forwarding rule.
            '''
            result = self._values.get("v_server_group_id")
            assert result is not None, "Required property 'v_server_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def domain(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: domain: The domain name.
            '''
            result = self._values.get("domain")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: url: The URL.
            '''
            result = self._values.get("url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "RuleListProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.RosRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "rule_list": "ruleList",
    },
)
class RosRuleProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::Rule``.

        :param listener_port: 
        :param load_balancer_id: 
        :param rule_list: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6adbefceaba654aea7652f24b4f2145c82614eb14f44783867c486f0efca7a9e)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument rule_list", value=rule_list, expected_type=type_hints["rule_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
            "rule_list": rule_list,
        }

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        1-65535
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of Server Load Balancer instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleListProperty]]]:
        '''
        :Property: ruleList: The forwarding rules to add.
        '''
        result = self._values.get("rule_list")
        assert result is not None, "Required property 'rule_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleListProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVServerGroup(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosVServerGroup",
):
    '''A ROS template type:  ``ALIYUN::SLB::VServerGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVServerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::VServerGroup``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba0ae8b794bafc8987cda1cae4ab1c592036f2b54c4e27b3bff7281c40b54e65)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f4e6b1b355ca5a7ee3ac0be75a0721d7868fd9636af5a2bd3a250d5e00a1cac2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackendServers: Backend server list in this VServerGroup.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackendServers"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VServerGroupId: The id of VServerGroup created.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroupId"))

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
            type_hints = typing.get_type_hints(_typecheckingstub__a4def502340c7d5a5aba934ba24dd5efa80b9fe159b46e94889347ae3aac3271)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb14d63fc0a051c9d593d68b08daeae085bc2e5fb72dcc123c7df6bfacf81102)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancerId", value)

    @builtins.property
    @jsii.member(jsii_name="vServerGroupName")
    def v_server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vServerGroupName: Display name of the VServerGroup.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vServerGroupName"))

    @v_server_group_name.setter
    def v_server_group_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c21a95804741692bb8ea191692365d03db626e96cb6b7994c5694398359a36e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vServerGroupName", value)

    @builtins.property
    @jsii.member(jsii_name="backendServers")
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVServerGroup.BackendServersProperty"]]]]:
        '''
        :Property: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVServerGroup.BackendServersProperty"]]]], jsii.get(self, "backendServers"))

    @backend_servers.setter
    def backend_servers(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosVServerGroup.BackendServersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7c39ef65c8ac1f69ba359970b93b98122c4f99ef4997b68408a283e23e99193)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "backendServers", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-slb.RosVServerGroup.BackendServersProperty",
        jsii_struct_bases=[],
        name_mapping={
            "port": "port",
            "server_id": "serverId",
            "description": "description",
            "server_ip": "serverIp",
            "type": "type",
            "weight": "weight",
        },
    )
    class BackendServersProperty:
        def __init__(
            self,
            *,
            port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
            server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param port: 
            :param server_id: 
            :param description: 
            :param server_ip: 
            :param type: 
            :param weight: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__1d39db1f12ee865f2bbbc9999430b91a62007e2108fe0f652f0fd62e2e97c1e4)
                check_type(argname="argument port", value=port, expected_type=type_hints["port"])
                check_type(argname="argument server_id", value=server_id, expected_type=type_hints["server_id"])
                check_type(argname="argument description", value=description, expected_type=type_hints["description"])
                check_type(argname="argument server_ip", value=server_ip, expected_type=type_hints["server_ip"])
                check_type(argname="argument type", value=type, expected_type=type_hints["type"])
                check_type(argname="argument weight", value=weight, expected_type=type_hints["weight"])
            self._values: typing.Dict[builtins.str, typing.Any] = {
                "port": port,
                "server_id": server_id,
            }
            if description is not None:
                self._values["description"] = description
            if server_ip is not None:
                self._values["server_ip"] = server_ip
            if type is not None:
                self._values["type"] = type
            if weight is not None:
                self._values["weight"] = weight

        @builtins.property
        def port(self) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: port: The port of backend server. From 1 to 65535.
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def server_id(
            self,
        ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
            '''
            :Property: serverId: The ID of the backend server. You can specify the ID of an Elastic Compute Service (ECS) instance,an elastic network interface (ENI) or elastic container instance (ECI).
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: description: The description of the backend server. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: serverIp: The IP address of an ECS instance, ENI or ECI
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property:

            type: The instance type of the backend server. This parameter must be set to a string. Valid values:
            ecs: ECS instance. This is the default value.
            eni: ENI.
            eci: ECI.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "BackendServersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.RosVServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "v_server_group_name": "vServerGroupName",
        "backend_servers": "backendServers",
    },
)
class RosVServerGroupProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVServerGroup.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::VServerGroup``.

        :param load_balancer_id: 
        :param v_server_group_name: 
        :param backend_servers: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0fc61be057feca1c69057e6b558d355895d67d724d7f20ebdaaab1f9af33c745)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument v_server_group_name", value=v_server_group_name, expected_type=type_hints["v_server_group_name"])
            check_type(argname="argument backend_servers", value=backend_servers, expected_type=type_hints["backend_servers"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
            "v_server_group_name": v_server_group_name,
        }
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vServerGroupName: Display name of the VServerGroup.
        '''
        result = self._values.get("v_server_group_name")
        assert result is not None, "Required property 'v_server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVServerGroup.BackendServersProperty]]]]:
        '''
        :Property: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        '''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVServerGroup.BackendServersProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.Rule",
):
    '''A ROS resource type:  ``ALIYUN::SLB::Rule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::Rule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6714fcd56060bb195948743a7e083d93a2fb68f8a5f12708254121117d1e48d2)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrRules")
    def attr_rules(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Rules: A list of forwarding rules.

        Each element of rules contains "RuleId".
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRules"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.RuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "rule_list": "ruleList",
    },
)
class RuleProps:
    def __init__(
        self,
        *,
        listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rule_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleListProperty, typing.Dict[builtins.str, typing.Any]]]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::Rule``.

        :param listener_port: Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value: 1-65535
        :param load_balancer_id: Property loadBalancerId: The ID of Server Load Balancer instance.
        :param rule_list: Property ruleList: The forwarding rules to add.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e129446274a24ad6aa9eb095e8f4eca774eca83907618b25734ebef089185ec1)
            check_type(argname="argument listener_port", value=listener_port, expected_type=type_hints["listener_port"])
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument rule_list", value=rule_list, expected_type=type_hints["rule_list"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
            "rule_list": rule_list,
        }

    @builtins.property
    def listener_port(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.

        Valid value:
        1-65535
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The ID of Server Load Balancer instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rule_list(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleListProperty]]]:
        '''Property ruleList: The forwarding rules to add.'''
        result = self._values.get("rule_list")
        assert result is not None, "Required property 'rule_list' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleListProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VServerGroup(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.VServerGroup",
):
    '''A ROS resource type:  ``ALIYUN::SLB::VServerGroup``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VServerGroupProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::VServerGroup``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f60a3997d4ec3fbeb54cdc1f0e72ed2daf8d910c56630797915bdc1bbecb3eb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute BackendServers: Backend server list in this VServerGroup.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackendServers"))

    @builtins.property
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute VServerGroupId: The id of VServerGroup created.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVServerGroupId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.VServerGroupProps",
    jsii_struct_bases=[],
    name_mapping={
        "load_balancer_id": "loadBalancerId",
        "v_server_group_name": "vServerGroupName",
        "backend_servers": "backendServers",
    },
)
class VServerGroupProps:
    def __init__(
        self,
        *,
        load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        v_server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVServerGroup.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::VServerGroup``.

        :param load_balancer_id: Property loadBalancerId: The id of load balancer.
        :param v_server_group_name: Property vServerGroupName: Display name of the VServerGroup.
        :param backend_servers: Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__887ec67fa550450dc63e4652dad04aadfdd351aff995b9a2dd93ffe5981333dd)
            check_type(argname="argument load_balancer_id", value=load_balancer_id, expected_type=type_hints["load_balancer_id"])
            check_type(argname="argument v_server_group_name", value=v_server_group_name, expected_type=type_hints["v_server_group_name"])
            check_type(argname="argument backend_servers", value=backend_servers, expected_type=type_hints["backend_servers"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
            "v_server_group_name": v_server_group_name,
        }
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers

    @builtins.property
    def load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property loadBalancerId: The id of load balancer.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def v_server_group_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vServerGroupName: Display name of the VServerGroup.'''
        result = self._values.get("v_server_group_name")
        assert result is not None, "Required property 'v_server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVServerGroup.BackendServersProperty]]]]:
        '''Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.'''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVServerGroup.BackendServersProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AccessControl",
    "AccessControlProps",
    "BackendServerAttachment",
    "BackendServerAttachmentProps",
    "BackendServerToVServerGroupAddition",
    "BackendServerToVServerGroupAdditionProps",
    "Certificate",
    "CertificateProps",
    "DomainExtension",
    "DomainExtensionProps",
    "Listener",
    "ListenerProps",
    "LoadBalancer",
    "LoadBalancerClone",
    "LoadBalancerCloneProps",
    "LoadBalancerProps",
    "MasterSlaveServerGroup",
    "MasterSlaveServerGroupProps",
    "RosAccessControl",
    "RosAccessControlProps",
    "RosBackendServerAttachment",
    "RosBackendServerAttachmentProps",
    "RosBackendServerToVServerGroupAddition",
    "RosBackendServerToVServerGroupAdditionProps",
    "RosCertificate",
    "RosCertificateProps",
    "RosDomainExtension",
    "RosDomainExtensionProps",
    "RosListener",
    "RosListenerProps",
    "RosLoadBalancer",
    "RosLoadBalancerClone",
    "RosLoadBalancerCloneProps",
    "RosLoadBalancerProps",
    "RosMasterSlaveServerGroup",
    "RosMasterSlaveServerGroupProps",
    "RosRule",
    "RosRuleProps",
    "RosVServerGroup",
    "RosVServerGroupProps",
    "Rule",
    "RuleProps",
    "VServerGroup",
    "VServerGroupProps",
]

publication.publish()

def _typecheckingstub__32a956c3ef43a14333968f8229f0d7116d55dad7cb2d8c920d99a092cc4d2653(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AccessControlProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1c7183293eca0c3b4b02f340d7a4e2c6d4d85e9411b7e7727eeef0adb33ea5b(
    *,
    acl_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_entrys: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccessControl.AclEntrysProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosAccessControl.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__740242b36f0a9a36e145fd30d2c7f83cb26719ec58aafb1352aad92bfa16b731(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BackendServerAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__02fd1d549c244f46a5382d4091d6a07bac33ae63e08f5b2e88e33380720e9a1e(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backend_server_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerAttachment.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    backend_server_weight_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__608f8e871d117a9f8ef313d7610c628a9fe7c18d185917a3d7f638927a6abc97(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[BackendServerToVServerGroupAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a98a4993f3ea63e5fd57b85edbc771753ff77cdcc8b899e785db738504496030(
    *,
    backend_servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerToVServerGroupAddition.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    v_server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7c8fc66ab11f0764614174a5f8788439426cbf2274890fc962a480cf9cae117a(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[CertificateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e08ce0ccadd779ef96f0da73a4e29df0de57d7c43d5d820c4dab9d177ce4d59f(
    *,
    certificate: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ali_cloud_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ali_cloud_certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCertificate.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f075a4b99b0d235401fd54cfd59da8a26b061310758c0ce3baea2e025a66018e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainExtensionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e93ec881b1960b1b062cf14ba12453d6067add0b39f2c325ffcd98b36abf65c6(
    *,
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    server_certificate_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b5f96846837d0c3ac0e5d668025bfb7c14f2e093ad738ef2d4e8ac499a76f2c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[ListenerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__833f6e5162e2986432e31fab06356e33cbaecfa04c65ef36b467797465fd3efa(
    *,
    bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acl_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acl_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backend_server_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ca_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_http2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.HealthCheckProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    http_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.HttpConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_slave_server_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    persistence: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.PersistenceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    port_range: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.PortRangeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    request_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_listener: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_server_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8cd0aabfc6504c1c8f1619c3401270e978664dbcc2d0bc8fe002d95604294ae0(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[LoadBalancerProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d459d5c385260d41c64adc07d3acbacb63cde27ac1ca8722859c1d4827bbc3e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LoadBalancerCloneProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8469484bc4459b59972d21dd27adcec279c397f08f30ae7fb368f548d2a8a94(
    *,
    source_load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancerClone.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    backend_servers_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancerClone.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tags_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4a7083494ae715443133830be3bb8ff556bfa79afc1e887e4d712b9bb1e2b06(
    *,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modification_protection_reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modification_protection_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6d5ba0c12773b56874ebafc1ca87ff70891c314834e4f3670157daa8896fbbf6(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[MasterSlaveServerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9ba17813f95ad5905513888e77f640c74d85fae7cba6878cee95f3dd8aa8bef1(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    master_slave_backend_servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    master_slave_server_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__847fc2f16e9a47f66c7243731f63c9f1d52310abd4e857246964461aaeee30dd(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAccessControlProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a8f42ca1e8a3aef91e81077f3b911b07e57d15342bcd7306df9ad0ee85f5c7f(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__31809101fe1427cb1d90e7dae97aa0ddf0f81f290d1d1661dae5d089feeb124a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9f5e93da08ab7c5f50ebe45e85a75f0dc5e103fd1b96f5f66103ed57e3f3f280(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6d88d40f5c1043eeca9f960027eb75c659c5a2b5ec19a908c775d6b37cf4725(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosAccessControl.AclEntrysProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__099830a6a860a21255da2bbd16856d0e345a2e2802d479794f929caee4247f2b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c403fe390927d5a9d737985410764d6eb0e62b874c79364aeb9cfff49d5a01f2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24d3ff97d12583710993d1cf63e4ecfc5a2bdad76612458b7d382df8886c357c(
    value: typing.Optional[typing.List[RosAccessControl.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a0d7414c36feced3d17d966323afaf4c537d8cdfe3d55a87220843e9c2ad29f(
    *,
    entry: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    comment: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76dd5903d6dbcea456f6cf5e6c00a7ffba4ffa260101a98b451b041f5adfe028(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fa6e5f0360b09d4efc644e3d658b7fd5e8a3c254825920954f2e53e1680c13ce(
    *,
    acl_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_entrys: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosAccessControl.AclEntrysProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosAccessControl.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1297df82ec7f888d361a67b9b70e86d801bb81be27637104e1445d8aa56413fa(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBackendServerAttachmentProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ded85dafeb5f3ba0ee9b2a00a1b4bac91ba4ee2bec58b7c654e37e57d81f022(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f617203d5362870f678f3e89a9c1993a6fa0bc363e7da6560b435f86ddcc5dc(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b3603fe811c59ee8b09724cfa746218c8cbed55c58775d5e15e4c9d84c2e50d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b75fbb1826bf52c6902373a9c3b153e4237ac49658b54ab88364addbf6fec7a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c2106b21fc641a5315dc6560db831d4b1f99453da01fcc499f8ad04cddfb27a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerAttachment.BackendServersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__efb133348a6cca28b5641464ae207e3cf43a0d0d51d3c8cf7ca53012da111f7f(
    value: typing.Optional[typing.Union[typing.List[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6de1a2d97858568e4fa17a871129e58381ad9535ee19bca9d35ce805c8f23ad3(
    *,
    server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e764e3cf866d942d6842a6fe7178f9cc8fc442ccc648cbb6fe59583f92e5134(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backend_server_list: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerAttachment.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    backend_server_weight_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__593b28df9c0f0b456f530fc332714b320e70941a906ca8d117acb85ce6dd1c9d(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosBackendServerToVServerGroupAdditionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__acf9d29063e3563a0077b19af37dda331f136d189ab60948da535af70c1fcab7(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3f7f1e0b5c61bef9fe316f8d8e0b911dabda91047999d58e251bde716992246(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosBackendServerToVServerGroupAddition.BackendServersProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f9cd633291cc4535208b3b886f2e3d4a2dae70bd666d0d8454df8702bb274ab(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__33efd890e1f47cd176201389153fe678326b23ad2c238220a12f775ac9a74ded(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52b88569c0f1e1467cb1ea14550e40a91c94d852b52dbfa4885def5151e3c4ee(
    *,
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4e0325e11e8bc298a9d48fc3f85253f3a4a2c3ea862a6ea71d7e7f360d9f3bb(
    *,
    backend_servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosBackendServerToVServerGroupAddition.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    v_server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7c79b67c543726d7ae20d7245f9264f6136fcf58b5b726d9eea181b77511c99(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosCertificateProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__525d8ef886383b275baed218f264f4c90bad610ac8126945bb07af65b068354a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e12658e10510fa209c5d684182982e34f99a061f37e821468cfd0656b38b1a0a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6474487ec4158c05182b85939e66b48a4b1602b7f78a92e13034ce3b1af0e078(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9cb3731fee8e80d3256db508b818c4477e04bb713d12cd3efd13dd57557a564(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__737731f6acdc011aa78640ef2eac75013ecf4eee218b8c3984589c6e9119b8a6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5292361599bc615e2c552e3ef23d8c44b0909bb6d569db3bc123da6a048e6a10(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b0b0954c32af9b710f7edbf5af0357141bb728d91d12e9b91aae6ead156c62a3(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b96b2b66b6694d2bb06b8ae1217200216b7b91587de424e5344409bf362c3bbb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9a0d718e443a2ac70fe46e47dd895acea53962559343f1098918b09a3085da6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4cfeca3ea70eacfadde311116975e863ba1c933f4b6da7c06607c9cd9c77dc69(
    value: typing.Optional[typing.List[RosCertificate.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a0778ef6490b87318c4c8193b11347468e8262447f6da1bfdd21268a6283385(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7e01ca041985f2287c83ba2b5708b2fa9878f085ed7bc08d083e986dd7c2b462(
    *,
    certificate: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ali_cloud_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ali_cloud_certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificate_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    certificate_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    private_key: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosCertificate.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7ae95996ee1773356b83e45d8a8d75ac575ab3678422c9d12f9378859a935edf(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainExtensionProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__983c9ce0930c5c51ca60c5f28b59be18a36b463de725860cd7ab65530338832b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__69708cdf696a442f4a9182443e89b1dc19f7b2e9453658bb531b4d6cde2e490a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b46d288e43e152eccb96f29313a9ed9ec4a3da61aedfbe028a8bfee8636a18a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__50f17f12c9d459b5e2323f34ed9270145a016e6c710549107f2f5e2f6247f741(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46a1b8ce5e00d299225dd665e9eab7bc2f9ca6e0f8cc7f00378e923ba09a5a92(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b2d6d37707d7c5593cefaed35d4bf3497351b57892605803aaff478416b6f09b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5910ec9bc329b736bc2ff762a3fcd91f184bf32fc1a8f5a3871e31d8d0f4d478(
    *,
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    server_certificate_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__751bc5618e98ab72ea98d725a26bfbe9060ade092357018dbbb0600a3865c503(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosListenerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d6e9c154bda923d441b1e6a47fea30053a4d787a072f2f7847d877ab72beee1a(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__080364c22d736e7e6c8aca87febbd9115c4b16a7d0117a550112f4a12287b62a(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a171a54669f1918b4ce2397ceece399eca0d3c7b32913b1c5e7c5724c510a757(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5959eb784c01f16f68c991941bd11a2c7fb7dd2ee22dfcdf65e54f8524db3016(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fa1e2b77d36d34cf2afa826bf1089142152cb6937dc950d299f834b43e41316(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d838f8ed8ceb88352442206a401a683577754f7c757665484ff1387c652a162d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c72336f8d5cf733ba925086b1a91f938181f6d036ed5fe3cbd7ca2e1c29ecbd9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b186ff0000b32e6e03dd28ebefa20e632c39189233127355c97ca6711f38742(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdd15311d5c389793d5d0effdf35aaae33d0bb0bd32055097b041581bddfcf4c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcdff56130779b973ce4664c24af785a0c58c11126410eb4deeca93cfc769f5f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d65999633df7706029659714ddfa3b5c9ff0f2faec6ca27476c75949de1c662(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__deacde491ff1e99a8e6e95efadf83c246edc449f2a8fd8ad1be4d958dbcb1954(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57ecd60cf3ce01487939bba9d178f20c5cd80bbe9e5d5d5b4652abb9f3382374(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__235939a8a3a75a15579937a6a76b158b410c9551955c832aa18014fadbf3aa25(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.HealthCheckProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d8e87688141d6935d6a699efa054cbd09127c9e3f05eefbf81bd16a3b5810a0f(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.HttpConfigProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d42590f52bb7a7352ba27e22ed8aee699d78e72a399fb261e45e1ce4242d0e25(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__84cb2bd88e393c16ba8875a98530c0a5022f35e314b9c2a4a0e0a8e6e157eec4(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8118c2c75a8f04d376feb26c8ba931f384ae8ee4f0006bde4b2ffeeee22c26f3(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.PersistenceProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c9ce8f2fe70c315990ecd31b3fa74bc1f50dc23e42905a521bf291b8b58944b1(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosListener.PortRangeProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0edbf23cd8f1c622ffeb49b11ff06347a3431fb76f63c81a5993ba83590e1b34(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0726316d42070a5bf5be5a8d44981d13a658c112548bdfd7fe00e8fbdd8419e9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9afdacf8f1db95ba480b05b3b643774056198c1c29d2ab2ca2b5da5d66a1ba2(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f33b607b770417212837e09fce7f0834cc6092a9f761754fe089504c9654b7bf(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9dedd683a1c4602a3398684772ed8d510c2efc312b6dee42eb4e62de0d7f6456(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7bb472dd5f75b293476d1d83cb77c4a18fa448f24ef3141472603f9d5f6425f(
    *,
    domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_method: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    healthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_code: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    interval: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    switch: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    uri: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fed72d5bbd2e4710dde65ab405172307d15127aeaa39f672b65c93b3632c0cf(
    *,
    forward_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    listener_forward: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4241bd702b9bc2b4bb8e465291abf9233ef9c5d1af927aa073011b4233b9dae6(
    *,
    cookie: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    cookie_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    persistence_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sticky_session: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    sticky_session_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_client_src_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_proto: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_slbid: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_slbip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    x_forwarded_for_slbport: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__314d5ec2c18c2e5645f1da52b47f9592473fa77874a463bcd33813d220475044(
    *,
    end_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    start_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3c57955ef9e55f3650e61dba548b01d32bb4d91aec43b7451a9fbacbb77dfce(
    *,
    bandwidth: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    protocol: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    acl_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acl_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    acl_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    backend_server_port: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ca_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    enable_http2: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    health_check: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.HealthCheckProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    http_config: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.HttpConfigProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    idle_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_slave_server_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    persistence: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.PersistenceProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    port_range: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosListener.PortRangeProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    request_timeout: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    scheduler: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_certificate_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    start_listener: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_server_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac034d72aa26bde3e28687b108c97956145ad9487d6b8efc3dc0c57cd1acda43(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLoadBalancerProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a7edf661660d2e34b7cca3206375396dff58f16bb9a776b710d9ca39cfa0b27(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__797f8811e9db7c17b7db8980846f43192379650ace12c2494a149393cd1007dd(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fdaf5ff7fec7ed58bf64caa92aaba18bc8acee220c99edd54939d46e06c84775(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cc2abeaa4eb1d6d7184bfbef30800d9cce06bf117498711045d8ba0708f01b4a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d14dce33a295ed1e1d5e73999a65bc6f891915ea40684ca50a258a3e8f0536df(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8859b93c9ab709a5e4cd9da41f85dc9c3fe048b4a5d7586002bc473b45ae26f(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a8c4545e9e0fbe652aac0c9dc9737379bf08f81a637d6074987a44ae77da487e(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc82c82d03141c0ac5002b517e7e174c598d4252deea9095ac5549b4ed4c6cb8(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5c665ec4750026b6229fdfa17516c97af4e125d64f781e498c11a832585febaf(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7309ca279a3aedb6e66b2c068c326c155199df20aa579f4c9282219c953c5279(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c53222207b48b2672e2c068b336d9fe090ed84ee6610470e15622eeb1a8c4515(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__026a25b59716874c592cbcd49ab24aac71a7766a2c1d7b29db0b763a48ce21e1(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__689e47e32d2afb1e4d271e5eb31c5dd95f0f41d4616e69cf6bbd02dae7f82fd9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b572175ef8437888bca6c419ae0589d1ad3d89dc15d6bbd7bad92dde8bec287(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2a1272586a275470c8dc9b59d3612e869c1e75e21a1924bca37fc9fcc1b5312e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c3f40e7dc3740d21811e251799481467273db66ae0cc8f69ed5dff2219aa6ee(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__46492516939a5f5c744e096dfb7ba42ec4e1a1ac22f9b8cb0d56e44c36dca00f(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98a24be074846809182b991a1184fe184288a911a8ac3da01d7d7e0120b6f147(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90002872ae70a67a4f1e619ec83d61985b8982edf3eb2f4b035adea580f4e917(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8c0f3cabade82e069cb8339d8fff4bae2c601b01868aab72150d739ca0a156c(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c32e11009f833d195cdc8acc81242f5bb226c8588202d56912cff0cdd55a922(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7662e060f3184416fd4b1b14ffc62ea373fed9261fe30285c63faf9e5870b1cf(
    value: typing.Optional[typing.List[RosLoadBalancer.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d45d6b63733a6726d2a952dc6a69e39ea31dcea1640e6314993e0be3f12f54c7(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee538bac3fdeaaad87126f158f56053381d6c9f341cb1808e931ce7265b731d8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ae91907b5c637ed4590f98ef4c8d68d1c4ed228c040a22a2dcfe37582c14a999(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2ffade5dc970282cd514b995eebe40dab996c88c5aaf277d21b6a07d25f9ac93(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLoadBalancerCloneProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9f6f0be89524067c6057cc968c80fba2619e9222ca524c58bf0bab75d6b2070(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61a00b0da57d05e5963e1d1aaac28b18f8b2e6d3dd0520079b36a8f26627dad0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4881a8759fc0ab02baa88833b7c136130e46e087678f51c15172607b519a4258(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c7988d71e27b919133722358429e566e121583c94bd24b03c67daa42532a4282(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosLoadBalancerClone.BackendServersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__025387db2dfcfac3341ba466eb5dc3f4de30e018a107f6f007a59c23769e6310(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f0213ef0271cd0278b634d936c7735828f3d144ea15b9b0ed98a58d1a1224ce6(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aef889cf0580f45cd58a670704ad1109d4ef57cf2986531e9da03f770362b0cc(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7fbbe6a4bb532c5692cd4d600a151e1b5d3b08c9a2439ea60c880cba41d6f60a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__83ad3f6ec65f700710b10419ae05b8c3779253b6718fbcde064d4d08837bab54(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7ceb55efa8025d2f9b30b567d2453a05ca64d9adfce00f4590c73d638dfa6df(
    value: typing.Optional[typing.List[RosLoadBalancerClone.TagsProperty]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3ec67321fe80002f47513b8d2ca14d6f1bc037cf25054d8b2dff43964f249e49(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__907c6d68baa35d78328f3bf2319eb05b977c3a5b4971c7f0399096445628d09e(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__806e0f68708f0cfca573b37e8021da59727f95c78daafef8b0594716560d6ae8(
    *,
    server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9eac177e1081b4a58645490a4cfa0bdac74d80201f3aeed2927310349dc38567(
    *,
    key: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bb8dfaad9fcd2ffaf8d59a94a25039beed0dd32209e64d1908c8486b503dea2e(
    *,
    source_load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosLoadBalancerClone.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    backend_servers_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancerClone.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    tags_policy: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6c3c7c21484380419d0b84f94989c51d7124ad033f24021f30aedcd89f51feab(
    *,
    address_ip_version: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    address_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_pay: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    auto_renew_period: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    bandwidth: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    deletion_protection: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    duration: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    instance_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    internet_charge_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancer_spec: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    master_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modification_protection_reason: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    modification_protection_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pay_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    pricing_cycle: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    slave_zone_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    tags: typing.Optional[typing.Sequence[typing.Union[RosLoadBalancer.TagsProperty, typing.Dict[builtins.str, typing.Any]]]] = None,
    vpc_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v_switch_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b027e39a65387002d3b41dad2136cb43573e845c5db037a80126ebcea80dc32(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosMasterSlaveServerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__09e82a2246bd0ac3e4b9e8414f998d2e5e418f9907dd37b4bf3abeeb589aa2f0(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c3ec39fcdb64c9082e573191dfc2592772a8b0e2a32ceb9c799eea8ca3ba8ad8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61c090bd1815fac5e202c8904b7382185428de29015efcac6a21bb40ddba3bb0(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5592b534a8ec18b667f402ab3f004e509d58c2824d4159df914328154e057527(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7a70b1411831fcb5edda90c810638bae0ee8f5eb2b2e65603c1a53dccbe35bb9(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25e0e06986d1255c0ccf0c175f1ef5ab0f7cbc81ec53c1f2323b4f35449b3cb9(
    *,
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    weight: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    server_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd97e9773855b4776a284c30d03fdb9067f6d27bbe78804460239dcac1c732f5(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    master_slave_backend_servers: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]],
    master_slave_server_group_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bfa316001bdbed0ac85141c35c10150aa45356e0250b8f0cdec86e328961ee0e(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ea608b45e67109620c8226e05c3f00431cf6fe4d106bc6a821d586353c8f53e8(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90ba6edbaad0b0c58f9ffe60cf34c10c1e49632a64516f0f92911f481b7339a9(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c810b3c0e69113845e4309585fe13e5f46863ca80ae40d64d97b963fe34ff7df(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a5e262b0586e5621d14e723a0acb7530ac9c5a47f8386ce9549edeea60bdb86(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__192e030dac8bf63634821eaff61966328a544f58e0b1664f776ce03768baaa3f(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosRule.RuleListProperty]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__678956d97f1cf53c67fa2e352dc14294c41fe2477d9e33c6ad5a40c30d7c4dbe(
    *,
    rule_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_server_group_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    domain: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    url: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6adbefceaba654aea7652f24b4f2145c82614eb14f44783867c486f0efca7a9e(
    *,
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleListProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba0ae8b794bafc8987cda1cae4ab1c592036f2b54c4e27b3bff7281c40b54e65(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVServerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4e6b1b355ca5a7ee3ac0be75a0721d7868fd9636af5a2bd3a250d5e00a1cac2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4def502340c7d5a5aba934ba24dd5efa80b9fe159b46e94889347ae3aac3271(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb14d63fc0a051c9d593d68b08daeae085bc2e5fb72dcc123c7df6bfacf81102(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c21a95804741692bb8ea191692365d03db626e96cb6b7994c5694398359a36e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7c39ef65c8ac1f69ba359970b93b98122c4f99ef4997b68408a283e23e99193(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosVServerGroup.BackendServersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d39db1f12ee865f2bbbc9999430b91a62007e2108fe0f652f0fd62e2e97c1e4(
    *,
    port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    server_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    description: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    server_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    weight: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0fc61be057feca1c69057e6b558d355895d67d724d7f20ebdaaab1f9af33c745(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVServerGroup.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6714fcd56060bb195948743a7e083d93a2fb68f8a5f12708254121117d1e48d2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e129446274a24ad6aa9eb095e8f4eca774eca83907618b25734ebef089185ec1(
    *,
    listener_port: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rule_list: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosRule.RuleListProperty, typing.Dict[builtins.str, typing.Any]]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f60a3997d4ec3fbeb54cdc1f0e72ed2daf8d910c56630797915bdc1bbecb3eb(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VServerGroupProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__887ec67fa550450dc63e4652dad04aadfdd351aff995b9a2dd93ffe5981333dd(
    *,
    load_balancer_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    v_server_group_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    backend_servers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosVServerGroup.BackendServersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
) -> None:
    """Type checking stubs"""
    pass
