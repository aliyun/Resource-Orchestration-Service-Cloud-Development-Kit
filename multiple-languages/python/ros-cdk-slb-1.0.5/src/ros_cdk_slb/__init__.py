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

from ._jsii import *

import ros_cdk_core


class AccessControl(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.AccessControl",
):
    '''A ROS resource type:  ``ALIYUN::SLB::AccessControl``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AccessControlProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute AclId: The ID of the access control list.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.AccessControlProps",
    jsii_struct_bases=[],
    name_mapping={
        "acl_name": "aclName",
        "acl_entrys": "aclEntrys",
        "address_ip_version": "addressIpVersion",
        "tags": "tags",
    },
)
class AccessControlProps:
    def __init__(
        self,
        *,
        acl_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        acl_entrys: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosAccessControl.AclEntrysProperty"]]]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosAccessControl.TagsProperty"]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::AccessControl``.

        :param acl_name: Property aclName: The name of the access control list.
        :param acl_entrys: Property aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
        :param address_ip_version: Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
        :param tags: Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "acl_name": acl_name,
        }
        if acl_entrys is not None:
            self._values["acl_entrys"] = acl_entrys
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def acl_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property aclName: The name of the access control list.'''
        result = self._values.get("acl_name")
        assert result is not None, "Required property 'acl_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def acl_entrys(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAccessControl.AclEntrysProperty"]]]]:
        '''Property aclEntrys: A list of acl entrys.

        Each entry can be IP addresses or CIDR blocks. Max length: 50.
        '''
        result = self._values.get("acl_entrys")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAccessControl.AclEntrysProperty"]]]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property addressIpVersion: IP version.

        Could be "ipv4" or "ipv6".
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.BackendServerAttachment",
):
    '''A ROS resource type:  ``ALIYUN::SLB::BackendServerAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BackendServerAttachmentProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(self) -> ros_cdk_core.IResolvable:
        '''Attribute BackendServers: The collection of attached backend server.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBackendServers"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerId: The id of load balancer.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))


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
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        backend_server_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        backend_servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]] = None,
        backend_server_weight_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::BackendServerAttachment``.

        :param load_balancer_id: Property loadBalancerId: The id of load balancer.
        :param backend_server_list: Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
        :param backend_servers: Property backendServers: The list of ECS instance, which will attached to load balancer.
        :param backend_server_weight_list: Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }
        if backend_server_list is not None:
            self._values["backend_server_list"] = backend_server_list
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers
        if backend_server_weight_list is not None:
            self._values["backend_server_weight_list"] = backend_server_weight_list

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property loadBalancerId: The id of load balancer.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def backend_server_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.'''
        result = self._values.get("backend_server_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]]:
        '''Property backendServers: The list of ECS instance, which will attached to load balancer.'''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]], result)

    @builtins.property
    def backend_server_weight_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''Property backendServerWeightList: The comma delimited weight list.

        If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        '''
        result = self._values.get("backend_server_weight_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackendServerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class BackendServerToVServerGroupAddition(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.BackendServerToVServerGroupAddition",
):
    '''A ROS resource type:  ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "BackendServerToVServerGroupAdditionProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VServerGroupId: The ID of virtual server group.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVServerGroupId"))


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
        backend_servers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]],
        v_server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.

        :param backend_servers: Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        :param v_server_group_id: Property vServerGroupId: The ID of virtual server group.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "backend_servers": backend_servers,
            "v_server_group_id": v_server_group_id,
        }

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]]:
        '''Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.'''
        result = self._values.get("backend_servers")
        assert result is not None, "Required property 'backend_servers' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]], result)

    @builtins.property
    def v_server_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vServerGroupId: The ID of virtual server group.'''
        result = self._values.get("v_server_group_id")
        assert result is not None, "Required property 'v_server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "BackendServerToVServerGroupAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Certificate(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.Certificate",
):
    '''A ROS resource type:  ``ALIYUN::SLB::Certificate``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "CertificateProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute CertificateId: The ID of the certificate.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCertificateId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFingerprint")
    def attr_fingerprint(self) -> ros_cdk_core.IResolvable:
        '''Attribute Fingerprint: The fingerprint of the certificate.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFingerprint"))


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
        certificate: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ali_cloud_certificate_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ali_cloud_certificate_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        certificate_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        certificate_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosCertificate.TagsProperty"]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def certificate(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property certificate: The content of the certificate public key.'''
        result = self._values.get("certificate")
        assert result is not None, "Required property 'certificate' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ali_cloud_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.'''
        result = self._values.get("ali_cloud_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ali_cloud_certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.'''
        result = self._values.get("ali_cloud_certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property certificateName: The name of the certificate.'''
        result = self._values.get("certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property certificateType: The type of the certificate.'''
        result = self._values.get("certificate_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property privateKey: The private key.'''
        result = self._values.get("private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.DomainExtension",
):
    '''A ROS resource type:  ``ALIYUN::SLB::DomainExtension``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainExtensionProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomainExtensionId")
    def attr_domain_extension_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute DomainExtensionId: The ID of the created domain name extension.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainExtensionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.

        Valid value:
        1-65535
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerPort"))


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
        domain: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        listener_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        server_certificate_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::DomainExtension``.

        :param domain: Property domain: The domain name.
        :param listener_port: Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value: 1-65535
        :param load_balancer_id: Property loadBalancerId: The ID of Server Load Balancer instance.
        :param server_certificate_id: Property serverCertificateId: The ID of the certificate corresponding to the domain name.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "domain": domain,
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
            "server_certificate_id": server_certificate_id,
        }

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property domain: The domain name.'''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.

        Valid value:
        1-65535
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property loadBalancerId: The ID of Server Load Balancer instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def server_certificate_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property serverCertificateId: The ID of the certificate corresponding to the domain name.'''
        result = self._values.get("server_certificate_id")
        assert result is not None, "Required property 'server_certificate_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainExtensionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Listener(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.Listener",
):
    '''A ROS resource type:  ``ALIYUN::SLB::Listener``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "ListenerProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrListenerPortsAndProtocol")
    def attr_listener_ports_and_protocol(self) -> ros_cdk_core.IResolvable:
        '''Attribute ListenerPortsAndProtocol: The collection of listener.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerPortsAndProtocol"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerId: The id of load balancer.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.ListenerProps",
    jsii_struct_bases=[],
    name_mapping={
        "backend_server_port": "backendServerPort",
        "bandwidth": "bandwidth",
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "protocol": "protocol",
        "acl_id": "aclId",
        "acl_status": "aclStatus",
        "acl_type": "aclType",
        "ca_certificate_id": "caCertificateId",
        "description": "description",
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
        backend_server_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        listener_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        acl_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        acl_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        acl_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ca_certificate_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HealthCheckProperty"]] = None,
        http_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HttpConfigProperty"]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        master_slave_server_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        persistence: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.PersistenceProperty"]] = None,
        port_range: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangeProperty"]]]] = None,
        request_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        server_certificate_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        start_listener: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_server_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::Listener``.

        :param backend_server_port: Property backendServerPort: Backend server can listen on ports from 1 to 65535.
        :param bandwidth: Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        :param listener_port: Property listenerPort: Port for front listener. Range from 0 to 65535.
        :param load_balancer_id: Property loadBalancerId: The id of load balancer to create listener.
        :param protocol: Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
        :param acl_id: Property aclId: The ID of the access control list associated with the listener to be created. If the value of the AclStatus parameter is on, this parameter is required.
        :param acl_status: Property aclStatus: Indicates whether to enable access control. Valid values: on | off. Default value: off
        :param acl_type: Property aclType: The access control type: * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses. Enabling a whitelist poses some risks to your services. After a whitelist is enabled, only the IP addresses in the list can access the listener. If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded. - black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses. If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded. If the value of the AclStatus parameter is on, this parameter is required.
        :param ca_certificate_id: Property caCertificateId: CA server certificate id, for https listener only.
        :param description: Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
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
        self._values: typing.Dict[str, typing.Any] = {
            "backend_server_port": backend_server_port,
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
        if ca_certificate_id is not None:
            self._values["ca_certificate_id"] = ca_certificate_id
        if description is not None:
            self._values["description"] = description
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
    def backend_server_port(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property backendServerPort: Backend server can listen on ports from 1 to 65535.'''
        result = self._values.get("backend_server_port")
        assert result is not None, "Required property 'backend_server_port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second).

        If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property listenerPort: Port for front listener.

        Range from 0 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property loadBalancerId: The id of load balancer to create listener.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.'''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property aclId: The ID of the access control list associated with the listener to be created.

        If the value of the AclStatus parameter is on, this parameter is required.
        '''
        result = self._values.get("acl_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def acl_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property aclStatus: Indicates whether to enable access control.

        Valid values: on | off. Default value: off
        '''
        result = self._values.get("acl_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def acl_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ca_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property caCertificateId: CA server certificate id, for https listener only.'''
        result = self._values.get("ca_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.'''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HealthCheckProperty"]]:
        '''Property healthCheck: The properties of health checking setting.'''
        result = self._values.get("health_check")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HealthCheckProperty"]], result)

    @builtins.property
    def http_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HttpConfigProperty"]]:
        '''Property httpConfig: Config for http protocol.'''
        result = self._values.get("http_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HttpConfigProperty"]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property idleTimeout: Specify the idle connection timeout in seconds.

        Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
        '''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_slave_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.'''
        result = self._values.get("master_slave_server_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def persistence(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.PersistenceProperty"]]:
        '''Property persistence: The properties of persistence.'''
        result = self._values.get("persistence")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.PersistenceProperty"]], result)

    @builtins.property
    def port_range(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangeProperty"]]]]:
        '''Property portRange: Port range, only supports TCP or UDP listener.

        ListenerPort should be 0 when PortRange is specified.
        '''
        result = self._values.get("port_range")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangeProperty"]]]], result)

    @builtins.property
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property requestTimeout: Specify the request timeout in seconds.

        Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
        '''
        result = self._values.get("request_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def server_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property serverCertificateId: Server certificate id, for https listener only, this properties is required.'''
        result = self._values.get("server_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def start_listener(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property startListener: Whether start listener after listener created.

        Default True.
        '''
        result = self._values.get("start_listener")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vServerGroupId: The id of the VServerGroup which use in listener.'''
        result = self._values.get("v_server_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LoadBalancer(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.LoadBalancer",
):
    '''A ROS resource type:  ``ALIYUN::SLB::LoadBalancer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: typing.Optional["LoadBalancerProps"] = None,
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute AddressIPVersion: IP version.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute AddressType: The address type of the load balancer.

        "intranet" or "internet".
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''Attribute Bandwidth: The bandwidth for network.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> ros_cdk_core.IResolvable:
        '''Attribute IpAddress: The ip address of the load balancer.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerId: The id of load balance created.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerName")
    def attr_load_balancer_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerName: Name of created load balancer.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerSpec")
    def attr_load_balancer_spec(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerSpec"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterZoneId")
    def attr_master_zone_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterZoneId: The master zone id to create load balancer instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterZoneId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute NetworkType: The network type of the load balancer.

        "vpc" or "classic" network.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute OrderId: The order ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPayType")
    def attr_pay_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute PayType: The billing method of the instance to be created.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPayType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceGroupId: Resource group id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSlaveZoneId")
    def attr_slave_zone_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute SlaveZoneId: The slave zone id to create load balancer instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSlaveZoneId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VpcId: Vpc id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VSwitchId: VSwitch id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))


class LoadBalancerClone(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.LoadBalancerClone",
):
    '''A ROS resource type:  ``ALIYUN::SLB::LoadBalancerClone``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "LoadBalancerCloneProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancerId: The id of load balance generated.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-slb.LoadBalancerCloneProps",
    jsii_struct_bases=[],
    name_mapping={
        "source_load_balancer_id": "sourceLoadBalancerId",
        "backend_servers": "backendServers",
        "backend_servers_policy": "backendServersPolicy",
        "load_balancer_name": "loadBalancerName",
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
        source_load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        backend_servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]] = None,
        backend_servers_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosLoadBalancerClone.TagsProperty"]] = None,
        tags_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::LoadBalancerClone``.

        :param source_load_balancer_id: Property sourceLoadBalancerId: Source load balancer id to clone.
        :param backend_servers: Property backendServers: The list of ECS instance, which will attached to load balancer.
        :param backend_servers_policy: Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
        :param load_balancer_name: Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        :param resource_group_id: Property resourceGroupId: Resource group id.
        :param tags: Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
        :param tags_policy: Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags. Default is 'empty'.
        :param v_switch_id: Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "source_load_balancer_id": source_load_balancer_id,
        }
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers
        if backend_servers_policy is not None:
            self._values["backend_servers_policy"] = backend_servers_policy
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
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
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property sourceLoadBalancerId: Source load balancer id to clone.'''
        result = self._values.get("source_load_balancer_id")
        assert result is not None, "Required property 'source_load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]]:
        '''Property backendServers: The list of ECS instance, which will attached to load balancer.'''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]], result)

    @builtins.property
    def backend_servers_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property backendServersPolicy: Solution for handle the backend server and weights.

        If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
        '''
        result = self._values.get("backend_servers_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loadBalancerName: Name of created load balancer.

        Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property tagsPolicy: Solution for handle the tags.

        If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
        Default is 'empty'.
        '''
        result = self._values.get("tags_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The new VSwitch ID to create load balancer instance.

        For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        modification_protection_reason: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        modification_protection_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        slave_zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence["RosLoadBalancer.TagsProperty"]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::LoadBalancer``.

        :param address_ip_version: Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
        :param address_type: Property addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
        :param auto_pay: Property autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created. Valid values: true | false (default value)
        :param auto_renew: Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        :param auto_renew_period: Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required: When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36. When PeriodUnit = year, the value range is 1-3.
        :param bandwidth: Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
        :param deletion_protection: Property deletionProtection: Whether to enable deletion protection.
        :param duration: Property duration: Optional. The subscription duration of a Subscription Internet instance. Valid values: If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60. If PricingCycle is year, the value range is 1 to 5.
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
        self._values: typing.Dict[str, typing.Any] = {}
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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'.

        If 'ipv6' is selected, please note that the zone and the specification are supported.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property addressType: Loader balancer address type.

        Support 'internet' and 'intranet' only, default is 'internet'.
        '''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoPay: Optional.

        Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
        Valid values: true | false (default value)
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property autoRenew: Indicates whether automatic renewal is enabled for the instance.

        Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required: When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.

        When PeriodUnit = year, the value range is 1-3.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).

        Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''Property deletionProtection: Whether to enable deletion protection.'''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property duration: Optional.

        The subscription duration of a Subscription Internet instance.
        Valid values:
        If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
        If PricingCycle is year, the value range is 1 to 5.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.'''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loadBalancerName: Name of created load balancer.

        Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loadBalancerSpec: The specification of the Server Load Balancer instance.

        Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterZoneId: The master zone id to create load balancer instance.'''
        result = self._values.get("master_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def modification_protection_reason(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property modificationProtectionReason: Set the reason for modifying the protection status.

        The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
        Only valid when ModificationProtectionStatus is ConsoleProtection.
        '''
        result = self._values.get("modification_protection_reason")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def modification_protection_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.'''
        result = self._values.get("modification_protection_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property payType: Optional.

        The billing method of the instance to be created.
        Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property pricingCycle: Optional.

        The duration of the Subscription-billed Internet instance to be created.
        Valid values: month | year.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def slave_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property slaveZoneId: The slave zone id to create load balancer instance.'''
        result = self._values.get("slave_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vpcId: The VPC id to create load balancer instance.

        For VPC network only.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property vSwitchId: The VSwitch id to create load balancer instance.

        For VPC network only.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class MasterSlaveServerGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.MasterSlaveServerGroup",
):
    '''A ROS resource type:  ``ALIYUN::SLB::MasterSlaveServerGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "MasterSlaveServerGroupProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterSlaveServerGroupId")
    def attr_master_slave_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute MasterSlaveServerGroupId: Active/standby server group ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterSlaveServerGroupId"))


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
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        master_slave_backend_servers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]],
        master_slave_server_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::MasterSlaveServerGroup``.

        :param load_balancer_id: Property loadBalancerId: The ID of the Server Load Balancer instance.
        :param master_slave_backend_servers: Property masterSlaveBackendServers: A list of active/standby server group. An active/standby server group can only contain two backend servers.
        :param master_slave_server_group_name: Property masterSlaveServerGroupName: The name of the active/standby server group.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
            "master_slave_backend_servers": master_slave_backend_servers,
        }
        if master_slave_server_group_name is not None:
            self._values["master_slave_server_group_name"] = master_slave_server_group_name

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property loadBalancerId: The ID of the Server Load Balancer instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def master_slave_backend_servers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]]:
        '''Property masterSlaveBackendServers: A list of active/standby server group.

        An active/standby server group can only contain two backend servers.
        '''
        result = self._values.get("master_slave_backend_servers")
        assert result is not None, "Required property 'master_slave_backend_servers' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]], result)

    @builtins.property
    def master_slave_server_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property masterSlaveServerGroupName: The name of the active/standby server group.'''
        result = self._values.get("master_slave_server_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "MasterSlaveServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAccessControl(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosAccessControl",
):
    '''A ROS template type:  ``ALIYUN::SLB::AccessControl``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAccessControlProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::AccessControl``.

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
    @jsii.member(jsii_name="attrAclId")
    def attr_acl_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AclId: The ID of the access control list.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAclId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aclName")
    def acl_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aclName: The name of the access control list.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "aclName"))

    @acl_name.setter
    def acl_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "aclName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aclEntrys")
    def acl_entrys(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAccessControl.AclEntrysProperty"]]]]:
        '''
        :Property: aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAccessControl.AclEntrysProperty"]]]], jsii.get(self, "aclEntrys"))

    @acl_entrys.setter
    def acl_entrys(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosAccessControl.AclEntrysProperty"]]]],
    ) -> None:
        jsii.set(self, "aclEntrys", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version. Could be "ipv4" or "ipv6".
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "addressIpVersion", value)

    @builtins.property # type: ignore[misc]
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
            entry: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            comment: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param entry: 
            :param comment: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "entry": entry,
            }
            if comment is not None:
                self._values["comment"] = comment

        @builtins.property
        def entry(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: entry: IP addresses or CIDR blocks. For example: "10.0.0.1" or "192.168.0.0/16"
            '''
            result = self._values.get("entry")
            assert result is not None, "Required property 'entry' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def comment(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: comment: Description of the entry.
            '''
            result = self._values.get("comment")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        "tags": "tags",
    },
)
class RosAccessControlProps:
    def __init__(
        self,
        *,
        acl_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        acl_entrys: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosAccessControl.AclEntrysProperty]]]] = None,
        address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosAccessControl.TagsProperty]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::AccessControl``.

        :param acl_name: 
        :param acl_entrys: 
        :param address_ip_version: 
        :param tags: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "acl_name": acl_name,
        }
        if acl_entrys is not None:
            self._values["acl_entrys"] = acl_entrys
        if address_ip_version is not None:
            self._values["address_ip_version"] = address_ip_version
        if tags is not None:
            self._values["tags"] = tags

    @builtins.property
    def acl_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: aclName: The name of the access control list.
        '''
        result = self._values.get("acl_name")
        assert result is not None, "Required property 'acl_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def acl_entrys(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosAccessControl.AclEntrysProperty]]]]:
        '''
        :Property: aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
        '''
        result = self._values.get("acl_entrys")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosAccessControl.AclEntrysProperty]]]], result)

    @builtins.property
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version. Could be "ipv4" or "ipv6".
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosBackendServerAttachment",
):
    '''A ROS template type:  ``ALIYUN::SLB::BackendServerAttachment``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBackendServerAttachmentProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::BackendServerAttachment``.

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
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BackendServers: The collection of attached backend server.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBackendServers"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerId: The id of load balancer.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

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
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "loadBalancerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backendServerList")
    def backend_server_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "backendServerList"))

    @backend_server_list.setter
    def backend_server_list(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "backendServerList", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backendServers")
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]]:
        '''
        :Property: backendServers: The list of ECS instance, which will attached to load balancer.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]], jsii.get(self, "backendServers"))

    @backend_servers.setter
    def backend_servers(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerAttachment.BackendServersProperty"]]]],
    ) -> None:
        jsii.set(self, "backendServers", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backendServerWeightList")
    def backend_server_weight_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        '''
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], jsii.get(self, "backendServerWeightList"))

    @backend_server_weight_list.setter
    def backend_server_weight_list(
        self,
        value: typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]],
    ) -> None:
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
            server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            weight: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param server_id: 
            :param weight: 
            :param description: 
            :param server_ip: 
            :param type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
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
        def server_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serverId: Need one valid instance id. The instance status should running.
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def weight(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            '''
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: A description of the backend server.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serverIp: The IP of the instance.
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        backend_server_list: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        backend_servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosBackendServerAttachment.BackendServersProperty]]]] = None,
        backend_server_weight_list: typing.Optional[typing.Union[typing.Sequence[typing.Any], ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::BackendServerAttachment``.

        :param load_balancer_id: 
        :param backend_server_list: 
        :param backend_servers: 
        :param backend_server_weight_list: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
        }
        if backend_server_list is not None:
            self._values["backend_server_list"] = backend_server_list
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers
        if backend_server_weight_list is not None:
            self._values["backend_server_weight_list"] = backend_server_weight_list

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def backend_server_list(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
        '''
        result = self._values.get("backend_server_list")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosBackendServerAttachment.BackendServersProperty]]]]:
        '''
        :Property: backendServers: The list of ECS instance, which will attached to load balancer.
        '''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosBackendServerAttachment.BackendServersProperty]]]], result)

    @builtins.property
    def backend_server_weight_list(
        self,
    ) -> typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]]:
        '''
        :Property: backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
        '''
        result = self._values.get("backend_server_weight_list")
        return typing.cast(typing.Optional[typing.Union[typing.List[typing.Any], ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackendServerAttachmentProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosBackendServerToVServerGroupAddition(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition",
):
    '''A ROS template type:  ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosBackendServerToVServerGroupAdditionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.

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
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VServerGroupId: The ID of virtual server group.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVServerGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backendServers")
    def backend_servers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]]:
        '''
        :Property: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]], jsii.get(self, "backendServers"))

    @backend_servers.setter
    def backend_servers(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosBackendServerToVServerGroupAddition.BackendServersProperty"]]],
    ) -> None:
        jsii.set(self, "backendServers", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vServerGroupId")
    def v_server_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vServerGroupId: The ID of virtual server group.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vServerGroupId"))

    @v_server_group_id.setter
    def v_server_group_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
            port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param port: 
            :param server_id: 
            :param description: 
            :param server_ip: 
            :param type: 
            :param weight: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
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
        def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: port: The port of backend server. From 1 to 65535.
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def server_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serverId: The ID of the backend server. You can specify the ID of an Elastic Compute Service (ECS) instance,an elastic network interface (ENI) or elastic container instance (ECI).
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: The description of the backend server. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serverIp: The IP address of an ECS instance, ENI or ECI
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            type: The instance type of the backend server. This parameter must be set to a string. Valid values:
            ecs: ECS instance. This is the default value.
            eni: ENI.
            eci: ECI.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
        backend_servers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosBackendServerToVServerGroupAddition.BackendServersProperty]]],
        v_server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::BackendServerToVServerGroupAddition``.

        :param backend_servers: 
        :param v_server_group_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "backend_servers": backend_servers,
            "v_server_group_id": v_server_group_id,
        }

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosBackendServerToVServerGroupAddition.BackendServersProperty]]]:
        '''
        :Property: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        '''
        result = self._values.get("backend_servers")
        assert result is not None, "Required property 'backend_servers' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosBackendServerToVServerGroupAddition.BackendServersProperty]]], result)

    @builtins.property
    def v_server_group_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vServerGroupId: The ID of virtual server group.
        '''
        result = self._values.get("v_server_group_id")
        assert result is not None, "Required property 'v_server_group_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosBackendServerToVServerGroupAdditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosCertificate(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosCertificate",
):
    '''A ROS template type:  ``ALIYUN::SLB::Certificate``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosCertificateProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::Certificate``.

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
    @jsii.member(jsii_name="attrCertificateId")
    def attr_certificate_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: CertificateId: The ID of the certificate.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCertificateId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrFingerprint")
    def attr_fingerprint(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Fingerprint: The fingerprint of the certificate.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrFingerprint"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="certificate")
    def certificate(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: certificate: The content of the certificate public key.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "certificate"))

    @certificate.setter
    def certificate(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "certificate", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aliCloudCertificateId")
    def ali_cloud_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "aliCloudCertificateId"))

    @ali_cloud_certificate_id.setter
    def ali_cloud_certificate_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "aliCloudCertificateId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aliCloudCertificateName")
    def ali_cloud_certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: aliCloudCertificateName: The name of the Alibaba Cloud certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "aliCloudCertificateName"))

    @ali_cloud_certificate_name.setter
    def ali_cloud_certificate_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "aliCloudCertificateName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="certificateName")
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: certificateName: The name of the certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "certificateName"))

    @certificate_name.setter
    def certificate_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "certificateName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="certificateType")
    def certificate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: certificateType: The type of the certificate.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "certificateType"))

    @certificate_type.setter
    def certificate_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "certificateType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="privateKey")
    def private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateKey: The private key.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "privateKey"))

    @private_key.setter
    def private_key(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "privateKey", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        certificate: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ali_cloud_certificate_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ali_cloud_certificate_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        certificate_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        certificate_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        private_key: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosCertificate.TagsProperty]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def certificate(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: certificate: The content of the certificate public key.
        '''
        result = self._values.get("certificate")
        assert result is not None, "Required property 'certificate' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ali_cloud_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
        '''
        result = self._values.get("ali_cloud_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ali_cloud_certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: aliCloudCertificateName: The name of the Alibaba Cloud certificate.
        '''
        result = self._values.get("ali_cloud_certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificate_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: certificateName: The name of the certificate.
        '''
        result = self._values.get("certificate_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def certificate_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: certificateType: The type of the certificate.
        '''
        result = self._values.get("certificate_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def private_key(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: privateKey: The private key.
        '''
        result = self._values.get("private_key")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosDomainExtension",
):
    '''A ROS template type:  ``ALIYUN::SLB::DomainExtension``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainExtensionProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::DomainExtension``.

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
    @jsii.member(jsii_name="attrDomainExtensionId")
    def attr_domain_extension_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DomainExtensionId: The ID of the created domain name extension.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainExtensionId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrListenerPort")
    def attr_listener_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        1-65535
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domain")
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domain: The domain name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "domain"))

    @domain.setter
    def domain(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "domain", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="listenerPort")
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        1-65535
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "listenerPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of Server Load Balancer instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "loadBalancerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serverCertificateId")
    def server_certificate_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serverCertificateId: The ID of the certificate corresponding to the domain name.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "serverCertificateId"))

    @server_certificate_id.setter
    def server_certificate_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        domain: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        listener_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        server_certificate_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::DomainExtension``.

        :param domain: 
        :param listener_port: 
        :param load_balancer_id: 
        :param server_certificate_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "domain": domain,
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
            "server_certificate_id": server_certificate_id,
        }

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domain: The domain name.
        '''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        1-65535
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of Server Load Balancer instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def server_certificate_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: serverCertificateId: The ID of the certificate corresponding to the domain name.
        '''
        result = self._values.get("server_certificate_id")
        assert result is not None, "Required property 'server_certificate_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainExtensionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosListener(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosListener",
):
    '''A ROS template type:  ``ALIYUN::SLB::Listener``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosListenerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::Listener``.

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
    @jsii.member(jsii_name="attrListenerPortsAndProtocol")
    def attr_listener_ports_and_protocol(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ListenerPortsAndProtocol: The collection of listener.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrListenerPortsAndProtocol"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerId: The id of load balancer
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backendServerPort")
    def backend_server_port(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: backendServerPort: Backend server can listen on ports from 1 to 65535.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "backendServerPort"))

    @backend_server_port.setter
    def backend_server_port(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "backendServerPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="listenerPort")
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: listenerPort: Port for front listener. Range from 0 to 65535.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "listenerPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer to create listener.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "loadBalancerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="protocol")
    def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "protocol"))

    @protocol.setter
    def protocol(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "protocol", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aclId")
    def acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        aclId: The ID of the access control list associated with the listener to be created.
        If the value of the AclStatus parameter is on, this parameter is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "aclId"))

    @acl_id.setter
    def acl_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "aclId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aclStatus")
    def acl_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        aclStatus: Indicates whether to enable access control.
        Valid values: on | off. Default value: off
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "aclStatus"))

    @acl_status.setter
    def acl_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "aclStatus", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="aclType")
    def acl_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "aclType"))

    @acl_type.setter
    def acl_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "aclType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="caCertificateId")
    def ca_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: caCertificateId: CA server certificate id, for https listener only.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "caCertificateId"))

    @ca_certificate_id.setter
    def ca_certificate_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "caCertificateId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="description")
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "description"))

    @description.setter
    def description(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "description", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="healthCheck")
    def health_check(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HealthCheckProperty"]]:
        '''
        :Property: healthCheck: The properties of health checking setting.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HealthCheckProperty"]], jsii.get(self, "healthCheck"))

    @health_check.setter
    def health_check(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HealthCheckProperty"]],
    ) -> None:
        jsii.set(self, "healthCheck", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpConfig")
    def http_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HttpConfigProperty"]]:
        '''
        :Property: httpConfig: Config for http protocol.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HttpConfigProperty"]], jsii.get(self, "httpConfig"))

    @http_config.setter
    def http_config(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.HttpConfigProperty"]],
    ) -> None:
        jsii.set(self, "httpConfig", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="idleTimeout")
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "idleTimeout"))

    @idle_timeout.setter
    def idle_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "idleTimeout", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterSlaveServerGroupId")
    def master_slave_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterSlaveServerGroupId"))

    @master_slave_server_group_id.setter
    def master_slave_server_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterSlaveServerGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="persistence")
    def persistence(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.PersistenceProperty"]]:
        '''
        :Property: persistence: The properties of persistence.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.PersistenceProperty"]], jsii.get(self, "persistence"))

    @persistence.setter
    def persistence(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, "RosListener.PersistenceProperty"]],
    ) -> None:
        jsii.set(self, "persistence", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="portRange")
    def port_range(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangeProperty"]]]]:
        '''
        :Property: portRange: Port range, only supports TCP or UDP listener. ListenerPort should be 0 when PortRange is specified.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangeProperty"]]]], jsii.get(self, "portRange"))

    @port_range.setter
    def port_range(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosListener.PortRangeProperty"]]]],
    ) -> None:
        jsii.set(self, "portRange", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="requestTimeout")
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "requestTimeout"))

    @request_timeout.setter
    def request_timeout(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "requestTimeout", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="scheduler")
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "scheduler"))

    @scheduler.setter
    def scheduler(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "scheduler", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serverCertificateId")
    def server_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serverCertificateId: Server certificate id, for https listener only, this properties is required.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "serverCertificateId"))

    @server_certificate_id.setter
    def server_certificate_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "serverCertificateId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="startListener")
    def start_listener(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: startListener: Whether start listener after listener created. Default True.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "startListener"))

    @start_listener.setter
    def start_listener(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "startListener", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vServerGroupId")
    def v_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vServerGroupId: The id of the VServerGroup which use in listener.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vServerGroupId"))

    @v_server_group_id.setter
    def v_server_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
            domain: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            health_check_method: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            health_check_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            healthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            http_code: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            interval: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            switch: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            unhealthy_threshold: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            uri: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: domain: The domain of health check target.
            '''
            result = self._values.get("domain")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_method(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckMethod: The health check method used in HTTP or HTTPS health checks. Valid values: head and get.
            '''
            result = self._values.get("health_check_method")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def health_check_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthCheckType: The type of health check. It takes effect when Protocol=tcp. Valid values: tcp and http. Default value: tcp.
            '''
            result = self._values.get("health_check_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def healthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: healthyThreshold: The number of consecutive health checks successes required,before identified the backend server in Healthy status.
            '''
            result = self._values.get("healthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def http_code(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: httpCode: The expect status of health check result. Any answer other than referred status within the timeout period is considered unhealthy.
            '''
            result = self._values.get("http_code")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def interval(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: interval: The approximate interval, unit in seconds, between health checks of an backend server.
            '''
            result = self._values.get("interval")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: port: The port being checked. The range of valid ports is 0 through 65535.
            '''
            result = self._values.get("port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def switch(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            switch: Whether to enable health check. Valid value: on, off.
            Currently only valid for http or https protocol.
            If value is on, turn on the health check. If value is off, turn off the health checkIf value is not set, the health check is disabled by default, unless any health check items are configured.
            '''
            result = self._values.get("switch")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: timeout: The amount of time, in seconds, during which no response means a failed health check.
            '''
            result = self._values.get("timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def unhealthy_threshold(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: unhealthyThreshold: The number of consecutive health checks failures required,before identified the backend server in Unhealthy status.
            '''
            result = self._values.get("unhealthy_threshold")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def uri(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: uri: The url of health check target.
            '''
            result = self._values.get("uri")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            forward_port: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            listener_forward: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param forward_port: 
            :param listener_forward: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if forward_port is not None:
                self._values["forward_port"] = forward_port
            if listener_forward is not None:
                self._values["listener_forward"] = listener_forward

        @builtins.property
        def forward_port(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            forwardPort: HTTP to HTTPS listening forwarding port.
            Default value: 443.
            '''
            result = self._values.get("forward_port")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def listener_forward(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            listenerForward: Whether to enable HTTP to HTTPS forwarding.
            Valid values: on | off. Default value: off.
            '''
            result = self._values.get("listener_forward")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            cookie: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            cookie_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            persistence_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
            sticky_session: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            sticky_session_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_client_src_port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_proto: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_slbid: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_slbip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            x_forwarded_for_slbport: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
            self._values: typing.Dict[str, typing.Any] = {}
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
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: cookie: The type of session persistence.
            '''
            result = self._values.get("cookie")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def cookie_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: cookieTimeout: The timeout for cookie setting, in seconds. It only take effect while StickySession is setting to 'on' and StickySessionType is setting to 'insert'.
            '''
            result = self._values.get("cookie_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def persistence_timeout(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: persistenceTimeout: The timeout number of persistence, in seconds.
            '''
            result = self._values.get("persistence_timeout")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sticky_session(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: stickySession: The switch of session persistence. Support 'on' and 'off'.
            '''
            result = self._values.get("sticky_session")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def sticky_session_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: stickySessionType: The type of session persistence. Depends on parameter StickySession, if it is set to off, this parameter will be ignored.
            '''
            result = self._values.get("sticky_session_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: xForwardedFor: Use 'X-Forwarded-For' to get real ip of accessor. On for open, off for close.
            '''
            result = self._values.get("x_forwarded_for")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_client_src_port(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: xForwardedForClientSrcPort: Optional. Indicates whether to use the X-Forwarded-Client-srcport header field to retrieve the port used by a client to connect to the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            '''
            result = self._values.get("x_forwarded_for_client_src_port")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_proto(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: xForwardedForProto: Optional. Indicates whether to use the X-Forwarded-Proto header field to obtainthe listening protocol used by the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            '''
            result = self._values.get("x_forwarded_for_proto")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_slbid(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: xForwardedForSlbid: Optional. Indicates whether to use the SLB-ID header field to obtain the SLB instance ID. Valid values: on | off. Default value: off If you do not set this parameter, the default value is used.
            '''
            result = self._values.get("x_forwarded_for_slbid")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_slbip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: xForwardedForSlbip: Optional. Indicates whether to use the SLB-IP header field to obtainthe real IP address of a client request.Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            '''
            result = self._values.get("x_forwarded_for_slbip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def x_forwarded_for_slbport(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: xForwardedForSlbport: Optional. Indicates whether to use the X-Forwarded-Port header field to retrieve the listening ports of the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            '''
            result = self._values.get("x_forwarded_for_slbport")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            end_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            start_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        ) -> None:
            '''
            :param end_port: 
            :param start_port: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "end_port": end_port,
                "start_port": start_port,
            }

        @builtins.property
        def end_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: endPort: End port, from 1 to 65535.
            '''
            result = self._values.get("end_port")
            assert result is not None, "Required property 'end_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def start_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: startPort: Start port, from 1 to 65535.
            '''
            result = self._values.get("start_port")
            assert result is not None, "Required property 'start_port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

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
        "backend_server_port": "backendServerPort",
        "bandwidth": "bandwidth",
        "listener_port": "listenerPort",
        "load_balancer_id": "loadBalancerId",
        "protocol": "protocol",
        "acl_id": "aclId",
        "acl_status": "aclStatus",
        "acl_type": "aclType",
        "ca_certificate_id": "caCertificateId",
        "description": "description",
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
        backend_server_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        bandwidth: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        listener_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        protocol: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        acl_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        acl_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        acl_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ca_certificate_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        health_check: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.HealthCheckProperty]] = None,
        http_config: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.HttpConfigProperty]] = None,
        idle_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        master_slave_server_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        persistence: typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.PersistenceProperty]] = None,
        port_range: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosListener.PortRangeProperty]]]] = None,
        request_timeout: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        scheduler: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        server_certificate_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        start_listener: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        v_server_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::Listener``.

        :param backend_server_port: 
        :param bandwidth: 
        :param listener_port: 
        :param load_balancer_id: 
        :param protocol: 
        :param acl_id: 
        :param acl_status: 
        :param acl_type: 
        :param ca_certificate_id: 
        :param description: 
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
        self._values: typing.Dict[str, typing.Any] = {
            "backend_server_port": backend_server_port,
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
        if ca_certificate_id is not None:
            self._values["ca_certificate_id"] = ca_certificate_id
        if description is not None:
            self._values["description"] = description
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
    def backend_server_port(
        self,
    ) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: backendServerPort: Backend server can listen on ports from 1 to 65535.
        '''
        result = self._values.get("backend_server_port")
        assert result is not None, "Required property 'backend_server_port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def bandwidth(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        '''
        result = self._values.get("bandwidth")
        assert result is not None, "Required property 'bandwidth' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property: listenerPort: Port for front listener. Range from 0 to 65535.
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer to create listener.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def protocol(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
        '''
        result = self._values.get("protocol")
        assert result is not None, "Required property 'protocol' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def acl_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        aclId: The ID of the access control list associated with the listener to be created.
        If the value of the AclStatus parameter is on, this parameter is required.
        '''
        result = self._values.get("acl_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def acl_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        aclStatus: Indicates whether to enable access control.
        Valid values: on | off. Default value: off
        '''
        result = self._values.get("acl_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def acl_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def ca_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: caCertificateId: CA server certificate id, for https listener only.
        '''
        result = self._values.get("ca_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def health_check(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.HealthCheckProperty]]:
        '''
        :Property: healthCheck: The properties of health checking setting.
        '''
        result = self._values.get("health_check")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.HealthCheckProperty]], result)

    @builtins.property
    def http_config(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.HttpConfigProperty]]:
        '''
        :Property: httpConfig: Config for http protocol.
        '''
        result = self._values.get("http_config")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.HttpConfigProperty]], result)

    @builtins.property
    def idle_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
        '''
        result = self._values.get("idle_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_slave_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
        '''
        result = self._values.get("master_slave_server_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def persistence(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.PersistenceProperty]]:
        '''
        :Property: persistence: The properties of persistence.
        '''
        result = self._values.get("persistence")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, RosListener.PersistenceProperty]], result)

    @builtins.property
    def port_range(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.PortRangeProperty]]]]:
        '''
        :Property: portRange: Port range, only supports TCP or UDP listener. ListenerPort should be 0 when PortRange is specified.
        '''
        result = self._values.get("port_range")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosListener.PortRangeProperty]]]], result)

    @builtins.property
    def request_timeout(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
        '''
        result = self._values.get("request_timeout")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def scheduler(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
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
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def server_certificate_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: serverCertificateId: Server certificate id, for https listener only, this properties is required.
        '''
        result = self._values.get("server_certificate_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def start_listener(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: startListener: Whether start listener after listener created. Default True.
        '''
        result = self._values.get("start_listener")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_server_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vServerGroupId: The id of the VServerGroup which use in listener.
        '''
        result = self._values.get("v_server_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosListenerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLoadBalancer(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosLoadBalancer",
):
    '''A ROS template type:  ``ALIYUN::SLB::LoadBalancer``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosLoadBalancerProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::LoadBalancer``.

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
    @jsii.member(jsii_name="attrAddressIpVersion")
    def attr_address_ip_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AddressIPVersion: IP version
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddressIpVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrAddressType")
    def attr_address_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: AddressType: The address type of the load balancer. "intranet" or "internet".
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrAddressType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBandwidth")
    def attr_bandwidth(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Bandwidth: The bandwidth for network
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBandwidth"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIpAddress")
    def attr_ip_address(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IpAddress: The ip address of the load balancer.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIpAddress"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerId: The id of load balance created.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerName")
    def attr_load_balancer_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerName: Name of created load balancer.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancerSpec")
    def attr_load_balancer_spec(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerSpec: The specification of the Server Load Balancer instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerSpec"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrMasterZoneId")
    def attr_master_zone_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterZoneId: The master zone id to create load balancer instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterZoneId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrNetworkType")
    def attr_network_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: NetworkType: The network type of the load balancer. "vpc" or "classic" network.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrNetworkType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrOrderId")
    def attr_order_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: OrderId: The order ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrOrderId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrPayType")
    def attr_pay_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: PayType: The billing method of the instance to be created.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrPayType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceGroupId: Resource group id.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSlaveZoneId")
    def attr_slave_zone_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SlaveZoneId: The slave zone id to create load balancer instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSlaveZoneId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVpcId")
    def attr_vpc_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VpcId: Vpc id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVpcId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVSwitchId")
    def attr_v_switch_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VSwitchId: VSwitch id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVSwitchId"))

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
    @jsii.member(jsii_name="addressIpVersion")
    def address_ip_version(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "addressIpVersion"))

    @address_ip_version.setter
    def address_ip_version(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "addressIpVersion", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="addressType")
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "addressType"))

    @address_type.setter
    def address_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "addressType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoPay")
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
        Valid values: true | false (default value)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoPay"))

    @auto_pay.setter
    def auto_pay(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoPay", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenew")
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenew"))

    @auto_renew.setter
    def auto_renew(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenew", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="autoRenewPeriod")
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required:
        When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.
        When PeriodUnit = year, the value range is 1-3.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "autoRenewPeriod"))

    @auto_renew_period.setter
    def auto_renew_period(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "autoRenewPeriod", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bandwidth")
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "bandwidth"))

    @bandwidth.setter
    def bandwidth(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "bandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="deletionProtection")
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionProtection: Whether to enable deletion protection.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], jsii.get(self, "deletionProtection"))

    @deletion_protection.setter
    def deletion_protection(
        self,
        value: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "deletionProtection", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="duration")
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        duration: Optional. The subscription duration of a Subscription Internet instance.
        Valid values:
        If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
        If PricingCycle is year, the value range is 1 to 5.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "duration"))

    @duration.setter
    def duration(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "duration", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="internetChargeType")
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "internetChargeType"))

    @internet_charge_type.setter
    def internet_charge_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "internetChargeType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loadBalancerName")
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loadBalancerName"))

    @load_balancer_name.setter
    def load_balancer_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loadBalancerName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loadBalancerSpec")
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loadBalancerSpec"))

    @load_balancer_spec.setter
    def load_balancer_spec(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loadBalancerSpec", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterZoneId")
    def master_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterZoneId: The master zone id to create load balancer instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterZoneId"))

    @master_zone_id.setter
    def master_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "masterZoneId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="modificationProtectionReason")
    def modification_protection_reason(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
        Only valid when ModificationProtectionStatus is ConsoleProtection.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "modificationProtectionReason"))

    @modification_protection_reason.setter
    def modification_protection_reason(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "modificationProtectionReason", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="modificationProtectionStatus")
    def modification_protection_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
        ConsoleProtection: Modify instance protection status by console
        Default value is empty.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "modificationProtectionStatus"))

    @modification_protection_status.setter
    def modification_protection_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "modificationProtectionStatus", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="payType")
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        payType: Optional. The billing method of the instance to be created.
        Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "payType"))

    @pay_type.setter
    def pay_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "payType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="pricingCycle")
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
        Valid values: month | year.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "pricingCycle"))

    @pricing_cycle.setter
    def pricing_cycle(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "pricingCycle", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="slaveZoneId")
    def slave_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: slaveZoneId: The slave zone id to create load balancer instance.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "slaveZoneId"))

    @slave_zone_id.setter
    def slave_zone_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "slaveZoneId", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vpcId")
    def vpc_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create load balancer instance. For VPC network only.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vpcId"))

    @vpc_id.setter
    def vpc_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "vpcId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "TagsProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosLoadBalancerClone(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosLoadBalancerClone",
):
    '''A ROS template type:  ``ALIYUN::SLB::LoadBalancerClone``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosLoadBalancerCloneProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::LoadBalancerClone``.

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
    @jsii.member(jsii_name="attrLoadBalancerId")
    def attr_load_balancer_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancerId: The id of load balance generated
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancerId"))

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
    @jsii.member(jsii_name="sourceLoadBalancerId")
    def source_load_balancer_id(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceLoadBalancerId: Source load balancer id to clone
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "sourceLoadBalancerId"))

    @source_load_balancer_id.setter
    def source_load_balancer_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "sourceLoadBalancerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backendServers")
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]]:
        '''
        :Property: backendServers: The list of ECS instance, which will attached to load balancer.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]], jsii.get(self, "backendServers"))

    @backend_servers.setter
    def backend_servers(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosLoadBalancerClone.BackendServersProperty"]]]],
    ) -> None:
        jsii.set(self, "backendServers", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backendServersPolicy")
    def backend_servers_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "backendServersPolicy"))

    @backend_servers_policy.setter
    def backend_servers_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "backendServersPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loadBalancerName")
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loadBalancerName"))

    @load_balancer_name.setter
    def load_balancer_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loadBalancerName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
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
        jsii.set(self, "tags", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="tagsPolicy")
    def tags_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
        Default is 'empty'.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "tagsPolicy"))

    @tags_policy.setter
    def tags_policy(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "tagsPolicy", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vSwitchId")
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "vSwitchId"))

    @v_switch_id.setter
    def v_switch_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
            server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            weight: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param server_id: 
            :param weight: 
            :param description: 
            :param server_ip: 
            :param type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
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
        def server_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serverId: Need one valid instance id. The instance status should running.
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def weight(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            '''
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: A description of the backend server.
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serverIp: The IP of the instance.
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
            key: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param key: 
            :param value: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "key": key,
            }
            if value is not None:
                self._values["value"] = value

        @builtins.property
        def key(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: key: undefined
            '''
            result = self._values.get("key")
            assert result is not None, "Required property 'key' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def value(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: value: undefined
            '''
            result = self._values.get("value")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        "load_balancer_name": "loadBalancerName",
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
        source_load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        backend_servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancerClone.BackendServersProperty]]]] = None,
        backend_servers_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosLoadBalancerClone.TagsProperty]] = None,
        tags_policy: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::LoadBalancerClone``.

        :param source_load_balancer_id: 
        :param backend_servers: 
        :param backend_servers_policy: 
        :param load_balancer_name: 
        :param resource_group_id: 
        :param tags: 
        :param tags_policy: 
        :param v_switch_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "source_load_balancer_id": source_load_balancer_id,
        }
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers
        if backend_servers_policy is not None:
            self._values["backend_servers_policy"] = backend_servers_policy
        if load_balancer_name is not None:
            self._values["load_balancer_name"] = load_balancer_name
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
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: sourceLoadBalancerId: Source load balancer id to clone
        '''
        result = self._values.get("source_load_balancer_id")
        assert result is not None, "Required property 'source_load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancerClone.BackendServersProperty]]]]:
        '''
        :Property: backendServers: The list of ECS instance, which will attached to load balancer.
        '''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosLoadBalancerClone.BackendServersProperty]]]], result)

    @builtins.property
    def backend_servers_policy(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
        '''
        result = self._values.get("backend_servers_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not coppy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
        Default is 'empty'.
        '''
        result = self._values.get("tags_policy")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        address_ip_version: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        address_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        auto_pay: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        auto_renew_period: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        bandwidth: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        deletion_protection: typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]] = None,
        duration: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        internet_charge_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancer_spec: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        master_zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        modification_protection_reason: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        modification_protection_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pay_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        pricing_cycle: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        slave_zone_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        tags: typing.Optional[typing.Sequence[RosLoadBalancer.TagsProperty]] = None,
        vpc_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        v_switch_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {}
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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
        '''
        result = self._values.get("address_ip_version")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def address_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
        '''
        result = self._values.get("address_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_pay(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
        Valid values: true | false (default value)
        '''
        result = self._values.get("auto_pay")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        '''
        result = self._values.get("auto_renew")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def auto_renew_period(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required:
        When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.
        When PeriodUnit = year, the value range is 1-3.
        '''
        result = self._values.get("auto_renew_period")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def bandwidth(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
        '''
        result = self._values.get("bandwidth")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def deletion_protection(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]]:
        '''
        :Property: deletionProtection: Whether to enable deletion protection.
        '''
        result = self._values.get("deletion_protection")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def duration(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        duration: Optional. The subscription duration of a Subscription Internet instance.
        Valid values:
        If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
        If PricingCycle is year, the value range is 1 to 5.
        '''
        result = self._values.get("duration")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def internet_charge_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
        '''
        result = self._values.get("internet_charge_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
        '''
        result = self._values.get("load_balancer_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancer_spec(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
        '''
        result = self._values.get("load_balancer_spec")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def master_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterZoneId: The master zone id to create load balancer instance.
        '''
        result = self._values.get("master_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def modification_protection_reason(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
        Only valid when ModificationProtectionStatus is ConsoleProtection.
        '''
        result = self._values.get("modification_protection_reason")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def modification_protection_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
        ConsoleProtection: Modify instance protection status by console
        Default value is empty.
        '''
        result = self._values.get("modification_protection_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pay_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        payType: Optional. The billing method of the instance to be created.
        Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
        '''
        result = self._values.get("pay_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def pricing_cycle(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
        Valid values: month | year.
        '''
        result = self._values.get("pricing_cycle")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group id.
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def slave_zone_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: slaveZoneId: The slave zone id to create load balancer instance.
        '''
        result = self._values.get("slave_zone_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vpcId: The VPC id to create load balancer instance. For VPC network only.
        '''
        result = self._values.get("vpc_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def v_switch_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
        '''
        result = self._values.get("v_switch_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLoadBalancerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosMasterSlaveServerGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup",
):
    '''A ROS template type:  ``ALIYUN::SLB::MasterSlaveServerGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosMasterSlaveServerGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::MasterSlaveServerGroup``.

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
    @jsii.member(jsii_name="attrMasterSlaveServerGroupId")
    def attr_master_slave_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: MasterSlaveServerGroupId: Active/standby server group ID.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrMasterSlaveServerGroupId"))

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
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the Server Load Balancer instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "loadBalancerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterSlaveBackendServers")
    def master_slave_backend_servers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]]:
        '''
        :Property:

        masterSlaveBackendServers: A list of active/standby server group.
        An active/standby server group can only contain two backend servers.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]], jsii.get(self, "masterSlaveBackendServers"))

    @master_slave_backend_servers.setter
    def master_slave_backend_servers(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty"]]],
    ) -> None:
        jsii.set(self, "masterSlaveBackendServers", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="masterSlaveServerGroupName")
    def master_slave_server_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterSlaveServerGroupName: The name of the active/standby server group.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "masterSlaveServerGroupName"))

    @master_slave_server_group_name.setter
    def master_slave_server_group_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
            port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            weight: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            server_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param port: 
            :param server_id: 
            :param weight: 
            :param server_type: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "port": port,
                "server_id": server_id,
                "weight": weight,
            }
            if server_type is not None:
                self._values["server_type"] = server_type

        @builtins.property
        def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: port: The port used by backend server. From 1 to 65535
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def server_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serverId: ECS instance ID
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def weight(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            '''
            result = self._values.get("weight")
            assert result is not None, "Required property 'weight' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def server_type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serverType: The identity of backend server. Could be "Master" (default) or "Slave"
            '''
            result = self._values.get("server_type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        master_slave_backend_servers: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty]]],
        master_slave_server_group_name: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::MasterSlaveServerGroup``.

        :param load_balancer_id: 
        :param master_slave_backend_servers: 
        :param master_slave_server_group_name: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
            "master_slave_backend_servers": master_slave_backend_servers,
        }
        if master_slave_server_group_name is not None:
            self._values["master_slave_server_group_name"] = master_slave_server_group_name

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of the Server Load Balancer instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def master_slave_backend_servers(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty]]]:
        '''
        :Property:

        masterSlaveBackendServers: A list of active/standby server group.
        An active/standby server group can only contain two backend servers.
        '''
        result = self._values.get("master_slave_backend_servers")
        assert result is not None, "Required property 'master_slave_backend_servers' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty]]], result)

    @builtins.property
    def master_slave_server_group_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: masterSlaveServerGroupName: The name of the active/standby server group.
        '''
        result = self._values.get("master_slave_server_group_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMasterSlaveServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosRule",
):
    '''A ROS template type:  ``ALIYUN::SLB::Rule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::Rule``.

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
    @jsii.member(jsii_name="attrRules")
    def attr_rules(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Rules: A list of forwarding rules. Each element of rules contains "RuleId".
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRules"))

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
    @jsii.member(jsii_name="listenerPort")
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        1-65535
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "listenerPort"))

    @listener_port.setter
    def listener_port(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "listenerPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of Server Load Balancer instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "loadBalancerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ruleList")
    def rule_list(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleListProperty"]]]:
        '''
        :Property: ruleList: The forwarding rules to add.
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleListProperty"]]], jsii.get(self, "ruleList"))

    @rule_list.setter
    def rule_list(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosRule.RuleListProperty"]]],
    ) -> None:
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
            rule_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            v_server_group_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            domain: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            url: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param rule_name: 
            :param v_server_group_id: 
            :param domain: 
            :param url: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
                "rule_name": rule_name,
                "v_server_group_id": v_server_group_id,
            }
            if domain is not None:
                self._values["domain"] = domain
            if url is not None:
                self._values["url"] = url

        @builtins.property
        def rule_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: ruleName: The name of the forwarding rule.
            '''
            result = self._values.get("rule_name")
            assert result is not None, "Required property 'rule_name' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def v_server_group_id(
            self,
        ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: vServerGroupId: The ID of the VServer group associated with the forwarding rule.
            '''
            result = self._values.get("v_server_group_id")
            assert result is not None, "Required property 'v_server_group_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def domain(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: domain: The domain name.
            '''
            result = self._values.get("domain")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def url(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: url: The URL.
            '''
            result = self._values.get("url")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        listener_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        rule_list: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleListProperty]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::Rule``.

        :param listener_port: 
        :param load_balancer_id: 
        :param rule_list: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
            "rule_list": rule_list,
        }

    @builtins.property
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        1-65535
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The ID of Server Load Balancer instance.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rule_list(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleListProperty]]]:
        '''
        :Property: ruleList: The forwarding rules to add.
        '''
        result = self._values.get("rule_list")
        assert result is not None, "Required property 'rule_list' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleListProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVServerGroup(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.RosVServerGroup",
):
    '''A ROS template type:  ``ALIYUN::SLB::VServerGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosVServerGroupProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::SLB::VServerGroup``.

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
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: BackendServers: Backend server list in this VServerGroup.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBackendServers"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: VServerGroupId: The id of VServerGroup created.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVServerGroupId"))

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
    @jsii.member(jsii_name="loadBalancerId")
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "loadBalancerId"))

    @load_balancer_id.setter
    def load_balancer_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "loadBalancerId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="vServerGroupName")
    def v_server_group_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vServerGroupName: Display name of the VServerGroup.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "vServerGroupName"))

    @v_server_group_name.setter
    def v_server_group_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "vServerGroupName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="backendServers")
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVServerGroup.BackendServersProperty"]]]]:
        '''
        :Property: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVServerGroup.BackendServersProperty"]]]], jsii.get(self, "backendServers"))

    @backend_servers.setter
    def backend_servers(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosVServerGroup.BackendServersProperty"]]]],
    ) -> None:
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
            port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
            server_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
            description: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            server_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            weight: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param port: 
            :param server_id: 
            :param description: 
            :param server_ip: 
            :param type: 
            :param weight: 
            '''
            self._values: typing.Dict[str, typing.Any] = {
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
        def port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
            '''
            :Property: port: The port of backend server. From 1 to 65535.
            '''
            result = self._values.get("port")
            assert result is not None, "Required property 'port' is missing"
            return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

        @builtins.property
        def server_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
            '''
            :Property: serverId: The ID of the backend server. You can specify the ID of an Elastic Compute Service (ECS) instance,an elastic network interface (ENI) or elastic container instance (ECI).
            '''
            result = self._values.get("server_id")
            assert result is not None, "Required property 'server_id' is missing"
            return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

        @builtins.property
        def description(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: description: The description of the backend server. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
            '''
            result = self._values.get("description")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def server_ip(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: serverIp: The IP address of an ECS instance, ENI or ECI
            '''
            result = self._values.get("server_ip")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def type(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property:

            type: The instance type of the backend server. This parameter must be set to a string. Valid values:
            ecs: ECS instance. This is the default value.
            eni: ENI.
            eci: ECI.
            '''
            result = self._values.get("type")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def weight(
            self,
        ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
            '''
            :Property: weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
            '''
            result = self._values.get("weight")
            return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

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
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_server_group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        backend_servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosVServerGroup.BackendServersProperty]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::VServerGroup``.

        :param load_balancer_id: 
        :param v_server_group_name: 
        :param backend_servers: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
            "v_server_group_name": v_server_group_name,
        }
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: loadBalancerId: The id of load balancer.
        '''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_server_group_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: vServerGroupName: Display name of the VServerGroup.
        '''
        result = self._values.get("v_server_group_name")
        assert result is not None, "Required property 'v_server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVServerGroup.BackendServersProperty]]]]:
        '''
        :Property: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        '''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVServerGroup.BackendServersProperty]]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVServerGroupProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Rule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.Rule",
):
    '''A ROS resource type:  ``ALIYUN::SLB::Rule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RuleProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRules")
    def attr_rules(self) -> ros_cdk_core.IResolvable:
        '''Attribute Rules: A list of forwarding rules.

        Each element of rules contains "RuleId".
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRules"))


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
        listener_port: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        rule_list: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleListProperty]]],
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::Rule``.

        :param listener_port: Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value: 1-65535
        :param load_balancer_id: Property loadBalancerId: The ID of Server Load Balancer instance.
        :param rule_list: Property ruleList: The forwarding rules to add.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "listener_port": listener_port,
            "load_balancer_id": load_balancer_id,
            "rule_list": rule_list,
        }

    @builtins.property
    def listener_port(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.

        Valid value:
        1-65535
        '''
        result = self._values.get("listener_port")
        assert result is not None, "Required property 'listener_port' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property loadBalancerId: The ID of Server Load Balancer instance.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rule_list(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleListProperty]]]:
        '''Property ruleList: The forwarding rules to add.'''
        result = self._values.get("rule_list")
        assert result is not None, "Required property 'rule_list' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosRule.RuleListProperty]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class VServerGroup(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-slb.VServerGroup",
):
    '''A ROS resource type:  ``ALIYUN::SLB::VServerGroup``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "VServerGroupProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrBackendServers")
    def attr_backend_servers(self) -> ros_cdk_core.IResolvable:
        '''Attribute BackendServers: Backend server list in this VServerGroup.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrBackendServers"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVServerGroupId")
    def attr_v_server_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute VServerGroupId: The id of VServerGroup created.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVServerGroupId"))


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
        load_balancer_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        v_server_group_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        backend_servers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosVServerGroup.BackendServersProperty]]]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::SLB::VServerGroup``.

        :param load_balancer_id: Property loadBalancerId: The id of load balancer.
        :param v_server_group_name: Property vServerGroupName: Display name of the VServerGroup.
        :param backend_servers: Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "load_balancer_id": load_balancer_id,
            "v_server_group_name": v_server_group_name,
        }
        if backend_servers is not None:
            self._values["backend_servers"] = backend_servers

    @builtins.property
    def load_balancer_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property loadBalancerId: The id of load balancer.'''
        result = self._values.get("load_balancer_id")
        assert result is not None, "Required property 'load_balancer_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def v_server_group_name(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property vServerGroupName: Display name of the VServerGroup.'''
        result = self._values.get("v_server_group_name")
        assert result is not None, "Required property 'v_server_group_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def backend_servers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVServerGroup.BackendServersProperty]]]]:
        '''Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.'''
        result = self._values.get("backend_servers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosVServerGroup.BackendServersProperty]]]], result)

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
