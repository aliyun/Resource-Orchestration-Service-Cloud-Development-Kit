'''
## Aliyun ROS WAF Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as WAF from '@alicloud/ros-cdk-waf';
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


class AclRule(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.AclRule",
):
    '''A ROS resource type:  ``ALIYUN::WAF::AclRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["AclRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::AclRule``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2de49924f3fbceb453f45b2ff3f5ad38218a7ddeccf95d8f93ddeb13767ae3e3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.AclRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain": "domain",
        "instance_id": "instanceId",
        "rules": "rules",
        "region": "region",
        "rule_id": "ruleId",
    },
)
class AclRuleProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rules: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::AclRule``.

        :param domain: Property domain: Domain name.
        :param instance_id: Property instanceId: WAF instance ID. Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        :param rules: Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
        :param region: Property region: Examples of areas where the WAF. Value: cn: China mainland (default) cn-hongkong: China HongKong and other overseas
        :param rule_id: Property ruleId: Precise access control rule ID.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a66b9776a33469dcd97701d934b24da04888c6236fe4dc76b6d920c32aeede2e)
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument rules", value=rules, expected_type=type_hints["rules"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "rules": rules,
        }
        if region is not None:
            self._values["region"] = region
        if rule_id is not None:
            self._values["rule_id"] = rule_id

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domain: Domain name.'''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: WAF instance ID.

        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rules(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property rules: Detailed information of precise access control rules, expressed in JSON format strings.'''
        result = self._values.get("rules")
        assert result is not None, "Required property 'rules' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property region: Examples of areas where the WAF.

        Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ruleId: Precise access control rule ID.'''
        result = self._values.get("rule_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AclRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Domain(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.Domain",
):
    '''A ROS resource type:  ``ALIYUN::WAF::Domain``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::Domain``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__464df36b8e6d427565e80f096b9ca427e6e2ad4bd4ad73191a1b91fd305696b3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ClusterType: Cluster type.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Cname: CNAME assigned by WAF instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCname"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute DomainName: Domain name.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrHttp2Port")
    def attr_http2_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Http2Port: Http2 port configuration.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttp2Port"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpPort")
    def attr_http_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HttpPort: Http port configuration.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsPort")
    def attr_https_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HttpsPort: Https port configuration.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsRedirect")
    def attr_https_redirect(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HttpsRedirect: Https forced redirect configuration.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsRedirect"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpToUserIp")
    def attr_http_to_user_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute HttpToUserIp: Http back to source.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpToUserIp"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: Instance id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrIsAccessProduct")
    def attr_is_access_product(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute IsAccessProduct: Is there a seven-layer agency before WAF.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsAccessProduct"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancing")
    def attr_load_balancing(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LoadBalancing: Load balancing configuration.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancing"))

    @builtins.property
    @jsii.member(jsii_name="attrLogHeaders")
    def attr_log_headers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute LogHeaders: Domain traffic tagging.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogHeaders"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ResourceGroupId: Resource group Id.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceIps")
    def attr_source_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SourceIps: Back to source IP configuration.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceIps"))

    @builtins.property
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Version: Optimistic lock version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersion"))


class DomainConfig(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.DomainConfig",
):
    '''A ROS resource type:  ``ALIYUN::WAF::DomainConfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["DomainConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::DomainConfig``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5d3b0679966e32e3587b3ffedda67491d53c3c5b3aca714482dcb86fb7aa5c39)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Cname: CNAME assigned by WAF instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCname"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolType"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.DomainConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain": "domain",
        "instance_id": "instanceId",
        "is_access_product": "isAccessProduct",
        "protocols": "protocols",
        "http_port": "httpPort",
        "https_port": "httpsPort",
        "https_redirect": "httpsRedirect",
        "http_to_user_ip": "httpToUserIp",
        "load_balancing": "loadBalancing",
        "region": "region",
        "rs_type": "rsType",
        "source_ips": "sourceIps",
    },
)
class DomainConfigProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_access_product: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        protocols: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        http_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_redirect: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http_to_user_ip: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rs_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_ips: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::DomainConfig``.

        :param domain: Property domain: Domain name.
        :param instance_id: Property instanceId: WAF instance ID. Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        :param is_access_product: Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed.
        :param protocols: Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol. https: support for HTTPS protocol. http, https: supports HTTP, HTTPS protocol.
        :param http_port: Property httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80]. Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        :param https_port: Property httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443]. Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        :param https_redirect: Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        :param http_to_user_ip: Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
        :param load_balancing: Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way. 1: represents a polling mode.
        :param region: Property region: Examples of areas where the WAF. Value: cn: China mainland (default) cn-hongkong: China HongKong and other overseas
        :param rs_type: Property rsType: Back to the source address type the domain name values: 0: back to the source to IP. 1: Indicates the domain name back to the source.
        :param source_ips: Property sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__70bdf7bb9a6ebd5d1855e05758f57d06913e6d4d48eb859f131a128f1bd7a407)
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument is_access_product", value=is_access_product, expected_type=type_hints["is_access_product"])
            check_type(argname="argument protocols", value=protocols, expected_type=type_hints["protocols"])
            check_type(argname="argument http_port", value=http_port, expected_type=type_hints["http_port"])
            check_type(argname="argument https_port", value=https_port, expected_type=type_hints["https_port"])
            check_type(argname="argument https_redirect", value=https_redirect, expected_type=type_hints["https_redirect"])
            check_type(argname="argument http_to_user_ip", value=http_to_user_ip, expected_type=type_hints["http_to_user_ip"])
            check_type(argname="argument load_balancing", value=load_balancing, expected_type=type_hints["load_balancing"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument rs_type", value=rs_type, expected_type=type_hints["rs_type"])
            check_type(argname="argument source_ips", value=source_ips, expected_type=type_hints["source_ips"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "is_access_product": is_access_product,
            "protocols": protocols,
        }
        if http_port is not None:
            self._values["http_port"] = http_port
        if https_port is not None:
            self._values["https_port"] = https_port
        if https_redirect is not None:
            self._values["https_redirect"] = https_redirect
        if http_to_user_ip is not None:
            self._values["http_to_user_ip"] = http_to_user_ip
        if load_balancing is not None:
            self._values["load_balancing"] = load_balancing
        if region is not None:
            self._values["region"] = region
        if rs_type is not None:
            self._values["rs_type"] = rs_type
        if source_ips is not None:
            self._values["source_ips"] = source_ips

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domain: Domain name.'''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: WAF instance ID.

        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_access_product(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed.'''
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocols(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol.

        https: support for HTTPS protocol.
        http, https: supports HTTP, HTTPS protocol.
        '''
        result = self._values.get("protocols")
        assert result is not None, "Required property 'protocols' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpPort: HTTP protocol configuration port.

        When specifying a plurality of HTTP port "," separated. Example values: [80].
        Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        result = self._values.get("http_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpsPort: HTTPS protocol configuration port.

        When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        result = self._values.get("https_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.

        After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        '''
        result = self._values.get("https_redirect")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.'''
        result = self._values.get("http_to_user_ip")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.

        1: represents a polling mode.
        '''
        result = self._values.get("load_balancing")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property region: Examples of areas where the WAF.

        Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rs_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.

        1: Indicates the domain name back to the source.
        '''
        result = self._values.get("rs_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_ips(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property sourceIps: Source station IP, supports a plurality of specified IP.

        Example values: [ "1.1.1.1"].
        '''
        result = self._values.get("source_ips")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.DomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "instance_id": "instanceId",
        "is_access_product": "isAccessProduct",
        "source_ips": "sourceIps",
        "cluster_type": "clusterType",
        "connection_time": "connectionTime",
        "http2_port": "http2Port",
        "http_port": "httpPort",
        "https_port": "httpsPort",
        "https_redirect": "httpsRedirect",
        "http_to_user_ip": "httpToUserIp",
        "load_balancing": "loadBalancing",
        "log_headers": "logHeaders",
        "read_time": "readTime",
        "resource_group_id": "resourceGroupId",
        "write_time": "writeTime",
    },
)
class DomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_access_product: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_ips: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http2_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        http_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        https_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        https_redirect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http_to_user_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancing: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union["RosDomain.LogHeadersProperty", typing.Dict[builtins.str, typing.Any]]]]]] = None,
        read_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        write_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::Domain``.

        :param domain_name: Property domainName: Domain name.
        :param instance_id: Property instanceId: Instance id.
        :param is_access_product: Property isAccessProduct: Is there a seven-layer agency before WAF.
        :param source_ips: Property sourceIps: Back to source IP configuration.
        :param cluster_type: Property clusterType: Cluster type.
        :param connection_time: Property connectionTime: Connection timeout.
        :param http2_port: Property http2Port: Http2 port configuration.
        :param http_port: Property httpPort: Http port configuration.
        :param https_port: Property httpsPort: Https port configuration.
        :param https_redirect: Property httpsRedirect: Https forced redirect configuration.
        :param http_to_user_ip: Property httpToUserIp: Http back to source.
        :param load_balancing: Property loadBalancing: Load balancing configuration.
        :param log_headers: Property logHeaders: Domain traffic tagging.
        :param read_time: Property readTime: Read connection timeout period.
        :param resource_group_id: Property resourceGroupId: Resource group Id.
        :param write_time: Property writeTime: Write connection timeout period.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb3b68012c4c48777067cebfa980d3385e395a3b8b8851bf1750081507a0a5d9)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument is_access_product", value=is_access_product, expected_type=type_hints["is_access_product"])
            check_type(argname="argument source_ips", value=source_ips, expected_type=type_hints["source_ips"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument connection_time", value=connection_time, expected_type=type_hints["connection_time"])
            check_type(argname="argument http2_port", value=http2_port, expected_type=type_hints["http2_port"])
            check_type(argname="argument http_port", value=http_port, expected_type=type_hints["http_port"])
            check_type(argname="argument https_port", value=https_port, expected_type=type_hints["https_port"])
            check_type(argname="argument https_redirect", value=https_redirect, expected_type=type_hints["https_redirect"])
            check_type(argname="argument http_to_user_ip", value=http_to_user_ip, expected_type=type_hints["http_to_user_ip"])
            check_type(argname="argument load_balancing", value=load_balancing, expected_type=type_hints["load_balancing"])
            check_type(argname="argument log_headers", value=log_headers, expected_type=type_hints["log_headers"])
            check_type(argname="argument read_time", value=read_time, expected_type=type_hints["read_time"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument write_time", value=write_time, expected_type=type_hints["write_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
            "instance_id": instance_id,
            "is_access_product": is_access_product,
            "source_ips": source_ips,
        }
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if connection_time is not None:
            self._values["connection_time"] = connection_time
        if http2_port is not None:
            self._values["http2_port"] = http2_port
        if http_port is not None:
            self._values["http_port"] = http_port
        if https_port is not None:
            self._values["https_port"] = https_port
        if https_redirect is not None:
            self._values["https_redirect"] = https_redirect
        if http_to_user_ip is not None:
            self._values["http_to_user_ip"] = http_to_user_ip
        if load_balancing is not None:
            self._values["load_balancing"] = load_balancing
        if log_headers is not None:
            self._values["log_headers"] = log_headers
        if read_time is not None:
            self._values["read_time"] = read_time
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if write_time is not None:
            self._values["write_time"] = write_time

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domainName: Domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: Instance id.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_access_product(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property isAccessProduct: Is there a seven-layer agency before WAF.'''
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_ips(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''Property sourceIps: Back to source IP configuration.'''
        result = self._values.get("source_ips")
        assert result is not None, "Required property 'source_ips' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property clusterType: Cluster type.'''
        result = self._values.get("cluster_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property connectionTime: Connection timeout.'''
        result = self._values.get("connection_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http2_port(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property http2Port: Http2 port configuration.'''
        result = self._values.get("http2_port")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property httpPort: Http port configuration.'''
        result = self._values.get("http_port")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''Property httpsPort: Https port configuration.'''
        result = self._values.get("https_port")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpsRedirect: Https forced redirect configuration.'''
        result = self._values.get("https_redirect")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property httpToUserIp: Http back to source.'''
        result = self._values.get("http_to_user_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property loadBalancing: Load balancing configuration.'''
        result = self._values.get("load_balancing")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_headers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.LogHeadersProperty"]]]]:
        '''Property logHeaders: Domain traffic tagging.'''
        result = self._values.get("log_headers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.LogHeadersProperty"]]]], result)

    @builtins.property
    def read_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property readTime: Read connection timeout period.'''
        result = self._values.get("read_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property resourceGroupId: Resource group Id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def write_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property writeTime: Write connection timeout period.'''
        result = self._values.get("write_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.Instance",
):
    '''A ROS resource type:  ``ALIYUN::WAF::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["InstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::Instance``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__865684754cd3828eaf27fdafeeb9db069d768face8c5a95e3ec2c3c98b0c5ef3)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEndDate")
    def attr_end_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute EndDate: Due date of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndDate"))

    @builtins.property
    @jsii.member(jsii_name="attrInDebt")
    def attr_in_debt(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InDebt: Instance is overdue.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInDebt"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: Instance ID.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrRemainDay")
    def attr_remain_day(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute RemainDay: Number of available days for WAF Trial version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemainDay"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionType")
    def attr_subscription_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute SubscriptionType: Subscription type of the instance.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionType"))

    @builtins.property
    @jsii.member(jsii_name="attrTrial")
    def attr_trial(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Trial: Trial version.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrial"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.InstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "big_screen": "bigScreen",
        "exclusive_ip_package": "exclusiveIpPackage",
        "ext_bandwidth": "extBandwidth",
        "ext_domain_package": "extDomainPackage",
        "log_storage": "logStorage",
        "log_time": "logTime",
        "package_code": "packageCode",
        "prefessional_service": "prefessionalService",
        "subscription_type": "subscriptionType",
        "waf_log": "wafLog",
        "period": "period",
        "renewal_status": "renewalStatus",
        "renew_period": "renewPeriod",
    },
)
class InstanceProps:
    def __init__(
        self,
        *,
        big_screen: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        exclusive_ip_package: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ext_bandwidth: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ext_domain_package: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_storage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        package_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        prefessional_service: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        subscription_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        waf_log: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::Instance``.

        :param big_screen: Property bigScreen:.
        :param exclusive_ip_package: Property exclusiveIpPackage:.
        :param ext_bandwidth: Property extBandwidth:.
        :param ext_domain_package: Property extDomainPackage:.
        :param log_storage: Property logStorage:.
        :param log_time: Property logTime:.
        :param package_code: Property packageCode:.
        :param prefessional_service: Property prefessionalService:.
        :param subscription_type: Property subscriptionType: Subscription type of the instance.
        :param waf_log: Property wafLog:.
        :param period: Property period:.
        :param renewal_status: Property renewalStatus:.
        :param renew_period: Property renewPeriod:.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43a17fa5ea24779c202068b99acdc06cba416ef7cc3ddf08640349b6c982dba8)
            check_type(argname="argument big_screen", value=big_screen, expected_type=type_hints["big_screen"])
            check_type(argname="argument exclusive_ip_package", value=exclusive_ip_package, expected_type=type_hints["exclusive_ip_package"])
            check_type(argname="argument ext_bandwidth", value=ext_bandwidth, expected_type=type_hints["ext_bandwidth"])
            check_type(argname="argument ext_domain_package", value=ext_domain_package, expected_type=type_hints["ext_domain_package"])
            check_type(argname="argument log_storage", value=log_storage, expected_type=type_hints["log_storage"])
            check_type(argname="argument log_time", value=log_time, expected_type=type_hints["log_time"])
            check_type(argname="argument package_code", value=package_code, expected_type=type_hints["package_code"])
            check_type(argname="argument prefessional_service", value=prefessional_service, expected_type=type_hints["prefessional_service"])
            check_type(argname="argument subscription_type", value=subscription_type, expected_type=type_hints["subscription_type"])
            check_type(argname="argument waf_log", value=waf_log, expected_type=type_hints["waf_log"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument renew_period", value=renew_period, expected_type=type_hints["renew_period"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "big_screen": big_screen,
            "exclusive_ip_package": exclusive_ip_package,
            "ext_bandwidth": ext_bandwidth,
            "ext_domain_package": ext_domain_package,
            "log_storage": log_storage,
            "log_time": log_time,
            "package_code": package_code,
            "prefessional_service": prefessional_service,
            "subscription_type": subscription_type,
            "waf_log": waf_log,
        }
        if period is not None:
            self._values["period"] = period
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if renew_period is not None:
            self._values["renew_period"] = renew_period

    @builtins.property
    def big_screen(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property bigScreen:.'''
        result = self._values.get("big_screen")
        assert result is not None, "Required property 'big_screen' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def exclusive_ip_package(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property exclusiveIpPackage:.'''
        result = self._values.get("exclusive_ip_package")
        assert result is not None, "Required property 'exclusive_ip_package' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ext_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property extBandwidth:.'''
        result = self._values.get("ext_bandwidth")
        assert result is not None, "Required property 'ext_bandwidth' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ext_domain_package(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property extDomainPackage:.'''
        result = self._values.get("ext_domain_package")
        assert result is not None, "Required property 'ext_domain_package' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logStorage:.'''
        result = self._values.get("log_storage")
        assert result is not None, "Required property 'log_storage' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property logTime:.'''
        result = self._values.get("log_time")
        assert result is not None, "Required property 'log_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def package_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property packageCode:.'''
        result = self._values.get("package_code")
        assert result is not None, "Required property 'package_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def prefessional_service(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property prefessionalService:.'''
        result = self._values.get("prefessional_service")
        assert result is not None, "Required property 'prefessional_service' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def subscription_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property subscriptionType: Subscription type of the instance.'''
        result = self._values.get("subscription_type")
        assert result is not None, "Required property 'subscription_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def waf_log(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property wafLog:.'''
        result = self._values.get("waf_log")
        assert result is not None, "Required property 'waf_log' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property period:.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewalStatus:.'''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property renewPeriod:.'''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LogServiceEnable(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.LogServiceEnable",
):
    '''A ROS resource type:  ``ALIYUN::WAF::LogServiceEnable``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["LogServiceEnableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::LogServiceEnable``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f695b59c454d396613800620218c0b44354bb4d0fdad8ad7501a734bb0ee47c1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute Domain: The domain name that is added to WAF.'''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''Attribute InstanceId: The ID of the WAF instance.

        You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.LogServiceEnableProps",
    jsii_struct_bases=[],
    name_mapping={"domain": "domain", "instance_id": "instanceId"},
)
class LogServiceEnableProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::LogServiceEnable``.

        :param domain: Property domain: The domain name that is added to WAF.
        :param instance_id: Property instanceId: The ID of the WAF instance. You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__992cd75383e2b392161ee3fa6243de9ee05983185934c552a6b18182ae5bbb8c)
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
        }

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domain: The domain name that is added to WAF.'''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: The ID of the WAF instance.

        You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogServiceEnableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAclRule(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosAclRule",
):
    '''A ROS template type:  ``ALIYUN::WAF::AclRule``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosAclRuleProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::AclRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__91366ac47dd17fe495e6197496f5cbfe29ff7ef18db69ef51195bc7ec187b475)
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
            type_hints = typing.get_type_hints(_typecheckingstub__63c8efc8f61a16747489d1a4a2365b710bea515a56ee9627907a97b12b835aaf)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domain")
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domain: Domain name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domain"))

    @domain.setter
    def domain(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd74c4fdd6076b3f11dce7870ad0a92dea4a866b5b0872112668fb7ec90560f1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domain", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__55913d9b9ae6cb7abb7f5005e84e60701b4356d9343a95f52b3c3c61394e10a6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ab28e35f904b2d2de860fc995c2c71352412a6356c74e3cd653850f32897d613)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="rules")
    def rules(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: rules: Detailed information of precise access control rules, expressed in JSON format strings.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "rules"))

    @rules.setter
    def rules(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__64c5fb4547d952a7eefdf0fa49c3fe5d8539a5d76249ddee92c68f4116775dc5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rules", value)

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "region"))

    @region.setter
    def region(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b68ad4595d6331b5668ec69a50cf200857a327f083559deed7d26d3ea1191d7d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "region", value)

    @builtins.property
    @jsii.member(jsii_name="ruleId")
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleId: Precise access control rule ID
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ruleId"))

    @rule_id.setter
    def rule_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6f185055da1831e37b7e0c7a7a19ee7c92f6616b086ffc5735cf6eb031d4ba1c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ruleId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.RosAclRuleProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain": "domain",
        "instance_id": "instanceId",
        "rules": "rules",
        "region": "region",
        "rule_id": "ruleId",
    },
)
class RosAclRuleProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        rules: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rule_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::AclRule``.

        :param domain: 
        :param instance_id: 
        :param rules: 
        :param region: 
        :param rule_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3128f81577aa6f6d0dcf831565d98804f88591ce039bfbac2bfe2d53db7e1f11)
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument rules", value=rules, expected_type=type_hints["rules"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument rule_id", value=rule_id, expected_type=type_hints["rule_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "rules": rules,
        }
        if region is not None:
            self._values["region"] = region
        if rule_id is not None:
            self._values["rule_id"] = rule_id

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domain: Domain name.
        '''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def rules(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: rules: Detailed information of precise access control rules, expressed in JSON format strings.
        '''
        result = self._values.get("rules")
        assert result is not None, "Required property 'rules' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: ruleId: Precise access control rule ID
        '''
        result = self._values.get("rule_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAclRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosDomain",
):
    '''A ROS template type:  ``ALIYUN::WAF::Domain``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::Domain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10adf4d36dc029495a749e9d3e9fc03f8aa9b481cbb61a9d730fec43a4f3c696)
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
            type_hints = typing.get_type_hints(_typecheckingstub__f8c44991fabe9afe9de7e257f2e3f1929ea02ae7229052a2444138a9b1ac98f2)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ClusterType: Cluster type
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cname: CNAME assigned by WAF instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCname"))

    @builtins.property
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: DomainName: Domain name
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property
    @jsii.member(jsii_name="attrHttp2Port")
    def attr_http2_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Http2Port: Http2 port configuration
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttp2Port"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpPort")
    def attr_http_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpPort: Http port configuration
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsPort")
    def attr_https_port(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpsPort: Https port configuration
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsPort"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpsRedirect")
    def attr_https_redirect(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpsRedirect: Https forced redirect configuration
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpsRedirect"))

    @builtins.property
    @jsii.member(jsii_name="attrHttpToUserIp")
    def attr_http_to_user_ip(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: HttpToUserIp: Http back to source
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrHttpToUserIp"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Instance id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrIsAccessProduct")
    def attr_is_access_product(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IsAccessProduct: Is there a seven-layer agency before WAF
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIsAccessProduct"))

    @builtins.property
    @jsii.member(jsii_name="attrLoadBalancing")
    def attr_load_balancing(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LoadBalancing: Load balancing configuration
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLoadBalancing"))

    @builtins.property
    @jsii.member(jsii_name="attrLogHeaders")
    def attr_log_headers(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LogHeaders: Domain traffic tagging
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLogHeaders"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: Resource group Id
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceIps")
    def attr_source_ips(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceIps: Back to source IP configuration
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceIps"))

    @builtins.property
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Version: Optimistic lock version
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVersion"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domainName")
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86cbf180a8334b95c5c55a9d22f8dd5628ff114051c6e988572ddb32e861c558)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domainName", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ecadc7980502a4b81787de4173b6612cf8913540ef5926f4dcb2b20ee4e8f63c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: Instance id
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ef37d9a68bb14afc25f01a6473da8bb344a3a0a10091d77e5d040d7d6d8e1e21)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="isAccessProduct")
    def is_access_product(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: isAccessProduct: Is there a seven-layer agency before WAF
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "isAccessProduct"))

    @is_access_product.setter
    def is_access_product(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cd03066e0bf4ed8f79c6ce9a25574c7abde110bb35b7f62c574a4ba43538fdac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isAccessProduct", value)

    @builtins.property
    @jsii.member(jsii_name="sourceIps")
    def source_ips(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: sourceIps: Back to source IP configuration
        '''
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], jsii.get(self, "sourceIps"))

    @source_ips.setter
    def source_ips(
        self,
        value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b55868db5d8bce373663a8d7df3b604fb32a22beaf61d30b4786dec8d1f46ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceIps", value)

    @builtins.property
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterType: Cluster type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0692085a7e0272a407a66cf9dd9ef971c84d975b1fc836887898820853e0130)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "clusterType", value)

    @builtins.property
    @jsii.member(jsii_name="connectionTime")
    def connection_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionTime: Connection timeout
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "connectionTime"))

    @connection_time.setter
    def connection_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__548a0c9666038823c5b553f5f976da708e9619f8bdf99007bc3b52be6d55a8e7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "connectionTime", value)

    @builtins.property
    @jsii.member(jsii_name="http2Port")
    def http2_port(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: http2Port: Http2 port configuration
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "http2Port"))

    @http2_port.setter
    def http2_port(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5edb493193e73a297ad5109964cf26399718e02f9637cd1c83e310921b67756)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "http2Port", value)

    @builtins.property
    @jsii.member(jsii_name="httpPort")
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: httpPort: Http port configuration
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "httpPort"))

    @http_port.setter
    def http_port(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf4a2e0135d01b001b7042eafa16281524cf505ebc4f6a2eb9a915e19e314a1a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpPort", value)

    @builtins.property
    @jsii.member(jsii_name="httpsPort")
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: httpsPort: Https port configuration
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], jsii.get(self, "httpsPort"))

    @https_port.setter
    def https_port(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0730cdc94e23794b1b308b8e23ffde48b735dd3f321ae7406555b2bd14fea43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpsPort", value)

    @builtins.property
    @jsii.member(jsii_name="httpsRedirect")
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: httpsRedirect: Https forced redirect configuration
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpsRedirect"))

    @https_redirect.setter
    def https_redirect(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3a7a831ca7b855a903a8d5b2613ae7156caf55a19e706e1bcd398b5d2c805eb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpsRedirect", value)

    @builtins.property
    @jsii.member(jsii_name="httpToUserIp")
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: httpToUserIp: Http back to source
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpToUserIp"))

    @http_to_user_ip.setter
    def http_to_user_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42595eb12037b41b9aeec203baf98dfc53f04f56d4c96da61d2fe1142bc74ef8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpToUserIp", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancing")
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancing: Load balancing configuration
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancing"))

    @load_balancing.setter
    def load_balancing(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__005e8accaf5e87d2b33f8564facc56ed438e1341b02922a73f879d76fd2fad08)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancing", value)

    @builtins.property
    @jsii.member(jsii_name="logHeaders")
    def log_headers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.LogHeadersProperty"]]]]:
        '''
        :Property: logHeaders: Domain traffic tagging
        '''
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.LogHeadersProperty"]]]], jsii.get(self, "logHeaders"))

    @log_headers.setter
    def log_headers(
        self,
        value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, "RosDomain.LogHeadersProperty"]]]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e3ac6af32a7dc4060f4b5716354d9bc1342c9cf26f23cdf42ba2b4e043993a67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logHeaders", value)

    @builtins.property
    @jsii.member(jsii_name="readTime")
    def read_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: readTime: Read connection timeout period
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "readTime"))

    @read_time.setter
    def read_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__77b776335991f62ba9ec9d0589f8ec80716d25099edeceede750e0ac20162894)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "readTime", value)

    @builtins.property
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group Id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4eead30a5fe9e6bb2e76b06d5ba98cee0c07c65b49422ba92d383a84a9020e19)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resourceGroupId", value)

    @builtins.property
    @jsii.member(jsii_name="writeTime")
    def write_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: writeTime: Write connection timeout period
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "writeTime"))

    @write_time.setter
    def write_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99c819a85ccb270aeb591fb04e38ab9b25b06f135c875212faa670807db7071c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "writeTime", value)

    @jsii.data_type(
        jsii_type="@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty",
        jsii_struct_bases=[],
        name_mapping={"k": "k", "v": "v"},
    )
    class LogHeadersProperty:
        def __init__(
            self,
            *,
            k: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
            v: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        ) -> None:
            '''
            :param k: 
            :param v: 
            '''
            if __debug__:
                type_hints = typing.get_type_hints(_typecheckingstub__bc5f90d1ffc8d2907accd645f261be39b072254b1897eb9fbb90b28b6ff8c425)
                check_type(argname="argument k", value=k, expected_type=type_hints["k"])
                check_type(argname="argument v", value=v, expected_type=type_hints["v"])
            self._values: typing.Dict[builtins.str, typing.Any] = {}
            if k is not None:
                self._values["k"] = k
            if v is not None:
                self._values["v"] = v

        @builtins.property
        def k(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: k: The field name of the traffic tag of the domain name
            '''
            result = self._values.get("k")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        @builtins.property
        def v(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
            '''
            :Property: v: The value of the traffic tag of the domain name
            '''
            result = self._values.get("v")
            return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LogHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosDomainConfig(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosDomainConfig",
):
    '''A ROS template type:  ``ALIYUN::WAF::DomainConfig``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosDomainConfigProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::DomainConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6289f4fc8bf8cedf98fcf6525fbe9c560402f441ba8d18bf095b4e5e9c287a2)
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
            type_hints = typing.get_type_hints(_typecheckingstub__98879b403e84ee9b10fdc3f01a0cda4b2a37d9fc45922c05532f64ed2da2fc28)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Cname: CNAME assigned by WAF instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCname"))

    @builtins.property
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrProtocolType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domain")
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domain: Domain name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domain"))

    @domain.setter
    def domain(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3fc82664e5cd41b6920194d7423ee1b38413fd1a043db8bf1c06d07d2b373c8e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domain", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d3e3a4244a534c58fb4ca3aa60dac7aebb671d101a41680a8883c0b15dfcafd7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0e87f3bdf60c17c39897f5f545f0762737dbe91a31b824c3ab35b3361bd7e024)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="isAccessProduct")
    def is_access_product(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
        0: none.
        1: expressed.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "isAccessProduct"))

    @is_access_product.setter
    def is_access_product(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90eb5aa2147a1a7825c95f2fa33c6600805f487a6fffde30148ec7d37afbe1ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isAccessProduct", value)

    @builtins.property
    @jsii.member(jsii_name="protocols")
    def protocols(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protocols: The domain supports access protocols, values:
        http: expressed support for the HTTP protocol.
        https: support for HTTPS protocol.
        http, https: supports HTTP, HTTPS protocol.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "protocols"))

    @protocols.setter
    def protocols(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5160059c642e250e992acd6a74f6adabed23fa635b28e301ff407039cb77b10)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "protocols", value)

    @builtins.property
    @jsii.member(jsii_name="httpPort")
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
        Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpPort"))

    @http_port.setter
    def http_port(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__41ea5f9ca978f013545b38f6f408a794c41613f5cc69124259deacef663aa768)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpPort", value)

    @builtins.property
    @jsii.member(jsii_name="httpsPort")
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpsPort"))

    @https_port.setter
    def https_port(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7b9f66428771732bb87acac7fe6f5b3c2dc51427d39d57d0b22e1d72d418aed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpsPort", value)

    @builtins.property
    @jsii.member(jsii_name="httpsRedirect")
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsRedirect: HTTPS is turned forcefully jump the argument:
        0: off (default)
        1: Turn
        Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpsRedirect"))

    @https_redirect.setter
    def https_redirect(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__813b227de561b965b832c419879aa304d2e6e64c44f083a3252ba5865ba465f4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpsRedirect", value)

    @builtins.property
    @jsii.member(jsii_name="httpToUserIp")
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
        0: off (default)
        1: Turn
        Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "httpToUserIp"))

    @http_to_user_ip.setter
    def http_to_user_ip(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__473df7fbd85dc88c7f11c0a56f87d0d36f8e18060987b4bc2f9a660a3c9fc6bf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "httpToUserIp", value)

    @builtins.property
    @jsii.member(jsii_name="loadBalancing")
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loadBalancing: Back to the source load balancing policy values:
        0: IP Hash way.
        1: represents a polling mode.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "loadBalancing"))

    @load_balancing.setter
    def load_balancing(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b13f90f394d0125047e32bbe9f828f505e4ceec3e3781582cb1e0f592989d84f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "loadBalancing", value)

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "region"))

    @region.setter
    def region(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4eec33a70c8a03154668b9041305747b6b651cd798fe9da026906c1be1ecb323)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "region", value)

    @builtins.property
    @jsii.member(jsii_name="rsType")
    def rs_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rsType: Back to the source address type the domain name values:
        0: back to the source to IP.
        1: Indicates the domain name back to the source.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "rsType"))

    @rs_type.setter
    def rs_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c806af04413f537181dbe8f4dfa460e8f56447552fc42a492bee1bb98206fc1b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "rsType", value)

    @builtins.property
    @jsii.member(jsii_name="sourceIps")
    def source_ips(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "sourceIps"))

    @source_ips.setter
    def source_ips(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4c3642d61fd77eba1713487303884b8768a3a9dadfb6023f8f7cf4a20ef214a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "sourceIps", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.RosDomainConfigProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain": "domain",
        "instance_id": "instanceId",
        "is_access_product": "isAccessProduct",
        "protocols": "protocols",
        "http_port": "httpPort",
        "https_port": "httpsPort",
        "https_redirect": "httpsRedirect",
        "http_to_user_ip": "httpToUserIp",
        "load_balancing": "loadBalancing",
        "region": "region",
        "rs_type": "rsType",
        "source_ips": "sourceIps",
    },
)
class RosDomainConfigProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_access_product: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        protocols: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        http_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        https_redirect: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http_to_user_ip: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        rs_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        source_ips: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::DomainConfig``.

        :param domain: 
        :param instance_id: 
        :param is_access_product: 
        :param protocols: 
        :param http_port: 
        :param https_port: 
        :param https_redirect: 
        :param http_to_user_ip: 
        :param load_balancing: 
        :param region: 
        :param rs_type: 
        :param source_ips: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7a5082d5e5df1a74c16947ff2f21dcf219ac28649544b7a28b89d4891e1ddfa)
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument is_access_product", value=is_access_product, expected_type=type_hints["is_access_product"])
            check_type(argname="argument protocols", value=protocols, expected_type=type_hints["protocols"])
            check_type(argname="argument http_port", value=http_port, expected_type=type_hints["http_port"])
            check_type(argname="argument https_port", value=https_port, expected_type=type_hints["https_port"])
            check_type(argname="argument https_redirect", value=https_redirect, expected_type=type_hints["https_redirect"])
            check_type(argname="argument http_to_user_ip", value=http_to_user_ip, expected_type=type_hints["http_to_user_ip"])
            check_type(argname="argument load_balancing", value=load_balancing, expected_type=type_hints["load_balancing"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
            check_type(argname="argument rs_type", value=rs_type, expected_type=type_hints["rs_type"])
            check_type(argname="argument source_ips", value=source_ips, expected_type=type_hints["source_ips"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "is_access_product": is_access_product,
            "protocols": protocols,
        }
        if http_port is not None:
            self._values["http_port"] = http_port
        if https_port is not None:
            self._values["https_port"] = https_port
        if https_redirect is not None:
            self._values["https_redirect"] = https_redirect
        if http_to_user_ip is not None:
            self._values["http_to_user_ip"] = http_to_user_ip
        if load_balancing is not None:
            self._values["load_balancing"] = load_balancing
        if region is not None:
            self._values["region"] = region
        if rs_type is not None:
            self._values["rs_type"] = rs_type
        if source_ips is not None:
            self._values["source_ips"] = source_ips

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domain: Domain name.
        '''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_access_product(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
        0: none.
        1: expressed.
        '''
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def protocols(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        protocols: The domain supports access protocols, values:
        http: expressed support for the HTTP protocol.
        https: support for HTTPS protocol.
        http, https: supports HTTP, HTTPS protocol.
        '''
        result = self._values.get("protocols")
        assert result is not None, "Required property 'protocols' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
        Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        result = self._values.get("http_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        result = self._values.get("https_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpsRedirect: HTTPS is turned forcefully jump the argument:
        0: off (default)
        1: Turn
        Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        '''
        result = self._values.get("https_redirect")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
        0: off (default)
        1: Turn
        Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
        '''
        result = self._values.get("http_to_user_ip")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        loadBalancing: Back to the source load balancing policy values:
        0: IP Hash way.
        1: represents a polling mode.
        '''
        result = self._values.get("load_balancing")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def rs_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        rsType: Back to the source address type the domain name values:
        0: back to the source to IP.
        1: Indicates the domain name back to the source.
        '''
        result = self._values.get("rs_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def source_ips(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
        '''
        result = self._values.get("source_ips")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainConfigProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.RosDomainProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain_name": "domainName",
        "instance_id": "instanceId",
        "is_access_product": "isAccessProduct",
        "source_ips": "sourceIps",
        "cluster_type": "clusterType",
        "connection_time": "connectionTime",
        "http2_port": "http2Port",
        "http_port": "httpPort",
        "https_port": "httpsPort",
        "https_redirect": "httpsRedirect",
        "http_to_user_ip": "httpToUserIp",
        "load_balancing": "loadBalancing",
        "log_headers": "logHeaders",
        "read_time": "readTime",
        "resource_group_id": "resourceGroupId",
        "write_time": "writeTime",
    },
)
class RosDomainProps:
    def __init__(
        self,
        *,
        domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        is_access_product: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        source_ips: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
        cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        connection_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http2_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        http_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        https_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
        https_redirect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        http_to_user_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        load_balancing: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        log_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomain.LogHeadersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
        read_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        write_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::Domain``.

        :param domain_name: 
        :param instance_id: 
        :param is_access_product: 
        :param source_ips: 
        :param cluster_type: 
        :param connection_time: 
        :param http2_port: 
        :param http_port: 
        :param https_port: 
        :param https_redirect: 
        :param http_to_user_ip: 
        :param load_balancing: 
        :param log_headers: 
        :param read_time: 
        :param resource_group_id: 
        :param write_time: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__68c91c57615624a06949950f06fac16c94cb1360a324a03b16f7a0f87de564df)
            check_type(argname="argument domain_name", value=domain_name, expected_type=type_hints["domain_name"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument is_access_product", value=is_access_product, expected_type=type_hints["is_access_product"])
            check_type(argname="argument source_ips", value=source_ips, expected_type=type_hints["source_ips"])
            check_type(argname="argument cluster_type", value=cluster_type, expected_type=type_hints["cluster_type"])
            check_type(argname="argument connection_time", value=connection_time, expected_type=type_hints["connection_time"])
            check_type(argname="argument http2_port", value=http2_port, expected_type=type_hints["http2_port"])
            check_type(argname="argument http_port", value=http_port, expected_type=type_hints["http_port"])
            check_type(argname="argument https_port", value=https_port, expected_type=type_hints["https_port"])
            check_type(argname="argument https_redirect", value=https_redirect, expected_type=type_hints["https_redirect"])
            check_type(argname="argument http_to_user_ip", value=http_to_user_ip, expected_type=type_hints["http_to_user_ip"])
            check_type(argname="argument load_balancing", value=load_balancing, expected_type=type_hints["load_balancing"])
            check_type(argname="argument log_headers", value=log_headers, expected_type=type_hints["log_headers"])
            check_type(argname="argument read_time", value=read_time, expected_type=type_hints["read_time"])
            check_type(argname="argument resource_group_id", value=resource_group_id, expected_type=type_hints["resource_group_id"])
            check_type(argname="argument write_time", value=write_time, expected_type=type_hints["write_time"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain_name": domain_name,
            "instance_id": instance_id,
            "is_access_product": is_access_product,
            "source_ips": source_ips,
        }
        if cluster_type is not None:
            self._values["cluster_type"] = cluster_type
        if connection_time is not None:
            self._values["connection_time"] = connection_time
        if http2_port is not None:
            self._values["http2_port"] = http2_port
        if http_port is not None:
            self._values["http_port"] = http_port
        if https_port is not None:
            self._values["https_port"] = https_port
        if https_redirect is not None:
            self._values["https_redirect"] = https_redirect
        if http_to_user_ip is not None:
            self._values["http_to_user_ip"] = http_to_user_ip
        if load_balancing is not None:
            self._values["load_balancing"] = load_balancing
        if log_headers is not None:
            self._values["log_headers"] = log_headers
        if read_time is not None:
            self._values["read_time"] = read_time
        if resource_group_id is not None:
            self._values["resource_group_id"] = resource_group_id
        if write_time is not None:
            self._values["write_time"] = write_time

    @builtins.property
    def domain_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: instanceId: Instance id
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def is_access_product(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: isAccessProduct: Is there a seven-layer agency before WAF
        '''
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def source_ips(
        self,
    ) -> typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]:
        '''
        :Property: sourceIps: Back to source IP configuration
        '''
        result = self._values.get("source_ips")
        assert result is not None, "Required property 'source_ips' is missing"
        return typing.cast(typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: clusterType: Cluster type
        '''
        result = self._values.get("cluster_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def connection_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: connectionTime: Connection timeout
        '''
        result = self._values.get("connection_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http2_port(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: http2Port: Http2 port configuration
        '''
        result = self._values.get("http2_port")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: httpPort: Http port configuration
        '''
        result = self._values.get("http_port")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]]:
        '''
        :Property: httpsPort: Https port configuration
        '''
        result = self._values.get("https_port")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]], result)

    @builtins.property
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: httpsRedirect: Https forced redirect configuration
        '''
        result = self._values.get("https_redirect")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: httpToUserIp: Http back to source
        '''
        result = self._values.get("http_to_user_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: loadBalancing: Load balancing configuration
        '''
        result = self._values.get("load_balancing")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def log_headers(
        self,
    ) -> typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomain.LogHeadersProperty]]]]:
        '''
        :Property: logHeaders: Domain traffic tagging
        '''
        result = self._values.get("log_headers")
        return typing.cast(typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomain.LogHeadersProperty]]]], result)

    @builtins.property
    def read_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: readTime: Read connection timeout period
        '''
        result = self._values.get("read_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group Id
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def write_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: writeTime: Write connection timeout period
        '''
        result = self._values.get("write_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::WAF::Instance``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosInstanceProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbe9e06aa98a717da5ea4fc6f12f23bd83611c6d62bcfd832750d702d7779d87)
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
            type_hints = typing.get_type_hints(_typecheckingstub__750255829958bc68177feb026d35708064635a93f96ce6ddea2c097449a9c78b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEndDate")
    def attr_end_date(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndDate: Due date of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndDate"))

    @builtins.property
    @jsii.member(jsii_name="attrInDebt")
    def attr_in_debt(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InDebt: Instance is overdue
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInDebt"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: InstanceId: Instance ID
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="attrRemainDay")
    def attr_remain_day(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RemainDay: Number of available days for WAF Trial version
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRemainDay"))

    @builtins.property
    @jsii.member(jsii_name="attrSubscriptionType")
    def attr_subscription_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SubscriptionType: Subscription type of the instance
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSubscriptionType"))

    @builtins.property
    @jsii.member(jsii_name="attrTrial")
    def attr_trial(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Trial: Trial version
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrial"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="bigScreen")
    def big_screen(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bigScreen:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "bigScreen"))

    @big_screen.setter
    def big_screen(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f80b76f8aa0b04aa5b0d056d662a65d9661ba6a4dabe7ce4876877d08aff5d53)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "bigScreen", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__76d49a943648747f27b4fe334bb5543f703dd5043df2d33a4589d8babbe58258)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="exclusiveIpPackage")
    def exclusive_ip_package(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: exclusiveIpPackage:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "exclusiveIpPackage"))

    @exclusive_ip_package.setter
    def exclusive_ip_package(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__86d99c603a42a079486b0245c5e376e6399eebc8f2217cacd40f00976d76af4c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "exclusiveIpPackage", value)

    @builtins.property
    @jsii.member(jsii_name="extBandwidth")
    def ext_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extBandwidth:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "extBandwidth"))

    @ext_bandwidth.setter
    def ext_bandwidth(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c5dc701fa9a2bc956137032392cba975bc540d0e1a38aedfb364ba6bb505454b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "extBandwidth", value)

    @builtins.property
    @jsii.member(jsii_name="extDomainPackage")
    def ext_domain_package(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extDomainPackage:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "extDomainPackage"))

    @ext_domain_package.setter
    def ext_domain_package(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c40817c0a17a4ba6bce4e0f30a24f2c1ffae027d69fcecf985a74b13882ca1b6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "extDomainPackage", value)

    @builtins.property
    @jsii.member(jsii_name="logStorage")
    def log_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logStorage:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logStorage"))

    @log_storage.setter
    def log_storage(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0deb9b513c91689eedd926b766be637bdbd148ed6f4e18d0a16ee8855d955024)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logStorage", value)

    @builtins.property
    @jsii.member(jsii_name="logTime")
    def log_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logTime:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "logTime"))

    @log_time.setter
    def log_time(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__54249b07746a8910145bda7b2480f18d721a8df78eea951948760f3cad1c74ce)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "logTime", value)

    @builtins.property
    @jsii.member(jsii_name="packageCode")
    def package_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: packageCode:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "packageCode"))

    @package_code.setter
    def package_code(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d1baebe2c041e9df7ada724ad042a9005315d2467a596a7abcc1429fde4b280a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "packageCode", value)

    @builtins.property
    @jsii.member(jsii_name="prefessionalService")
    def prefessional_service(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prefessionalService:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "prefessionalService"))

    @prefessional_service.setter
    def prefessional_service(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e9d782dbf7d506d008dbe68116eda43f3b9b9b89f431234433300ed86d3fd301)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "prefessionalService", value)

    @builtins.property
    @jsii.member(jsii_name="subscriptionType")
    def subscription_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subscriptionType: Subscription type of the instance
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "subscriptionType"))

    @subscription_type.setter
    def subscription_type(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ada77fa43944b0095ba2e8a1f47d0cc5e46c08ea74d61cff58b7424cd2a61898)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "subscriptionType", value)

    @builtins.property
    @jsii.member(jsii_name="wafLog")
    def waf_log(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: wafLog:
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "wafLog"))

    @waf_log.setter
    def waf_log(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__32cbd35766dcd69beaec3fda4bafd15936e62e6a351222267f81f756a5e182b9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "wafLog", value)

    @builtins.property
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5eb9ff91f2c19190910f19fff2bbbc90c2d29254d7ed2c73acf7a272038055b8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "period", value)

    @builtins.property
    @jsii.member(jsii_name="renewalStatus")
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: renewalStatus:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewalStatus"))

    @renewal_status.setter
    def renewal_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9d8e62c779c5696a54890b6716586c83285098ef2c79e328626085eb0223fc8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewalStatus", value)

    @builtins.property
    @jsii.member(jsii_name="renewPeriod")
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: renewPeriod:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "renewPeriod"))

    @renew_period.setter
    def renew_period(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d79c2ceff54527c54517cb1947265f3a860f09ed99fb2bc681cc5ec6e1f5561)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "renewPeriod", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.RosInstanceProps",
    jsii_struct_bases=[],
    name_mapping={
        "big_screen": "bigScreen",
        "exclusive_ip_package": "exclusiveIpPackage",
        "ext_bandwidth": "extBandwidth",
        "ext_domain_package": "extDomainPackage",
        "log_storage": "logStorage",
        "log_time": "logTime",
        "package_code": "packageCode",
        "prefessional_service": "prefessionalService",
        "subscription_type": "subscriptionType",
        "waf_log": "wafLog",
        "period": "period",
        "renewal_status": "renewalStatus",
        "renew_period": "renewPeriod",
    },
)
class RosInstanceProps:
    def __init__(
        self,
        *,
        big_screen: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        exclusive_ip_package: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ext_bandwidth: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        ext_domain_package: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_storage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        log_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        package_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        prefessional_service: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        subscription_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        waf_log: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::Instance``.

        :param big_screen: 
        :param exclusive_ip_package: 
        :param ext_bandwidth: 
        :param ext_domain_package: 
        :param log_storage: 
        :param log_time: 
        :param package_code: 
        :param prefessional_service: 
        :param subscription_type: 
        :param waf_log: 
        :param period: 
        :param renewal_status: 
        :param renew_period: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0ea514c1c10f42ff555fae81609b07178ce6b70189002bc1b7110bfef661e9d7)
            check_type(argname="argument big_screen", value=big_screen, expected_type=type_hints["big_screen"])
            check_type(argname="argument exclusive_ip_package", value=exclusive_ip_package, expected_type=type_hints["exclusive_ip_package"])
            check_type(argname="argument ext_bandwidth", value=ext_bandwidth, expected_type=type_hints["ext_bandwidth"])
            check_type(argname="argument ext_domain_package", value=ext_domain_package, expected_type=type_hints["ext_domain_package"])
            check_type(argname="argument log_storage", value=log_storage, expected_type=type_hints["log_storage"])
            check_type(argname="argument log_time", value=log_time, expected_type=type_hints["log_time"])
            check_type(argname="argument package_code", value=package_code, expected_type=type_hints["package_code"])
            check_type(argname="argument prefessional_service", value=prefessional_service, expected_type=type_hints["prefessional_service"])
            check_type(argname="argument subscription_type", value=subscription_type, expected_type=type_hints["subscription_type"])
            check_type(argname="argument waf_log", value=waf_log, expected_type=type_hints["waf_log"])
            check_type(argname="argument period", value=period, expected_type=type_hints["period"])
            check_type(argname="argument renewal_status", value=renewal_status, expected_type=type_hints["renewal_status"])
            check_type(argname="argument renew_period", value=renew_period, expected_type=type_hints["renew_period"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "big_screen": big_screen,
            "exclusive_ip_package": exclusive_ip_package,
            "ext_bandwidth": ext_bandwidth,
            "ext_domain_package": ext_domain_package,
            "log_storage": log_storage,
            "log_time": log_time,
            "package_code": package_code,
            "prefessional_service": prefessional_service,
            "subscription_type": subscription_type,
            "waf_log": waf_log,
        }
        if period is not None:
            self._values["period"] = period
        if renewal_status is not None:
            self._values["renewal_status"] = renewal_status
        if renew_period is not None:
            self._values["renew_period"] = renew_period

    @builtins.property
    def big_screen(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: bigScreen:
        '''
        result = self._values.get("big_screen")
        assert result is not None, "Required property 'big_screen' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def exclusive_ip_package(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: exclusiveIpPackage:
        '''
        result = self._values.get("exclusive_ip_package")
        assert result is not None, "Required property 'exclusive_ip_package' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ext_bandwidth(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extBandwidth:
        '''
        result = self._values.get("ext_bandwidth")
        assert result is not None, "Required property 'ext_bandwidth' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def ext_domain_package(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: extDomainPackage:
        '''
        result = self._values.get("ext_domain_package")
        assert result is not None, "Required property 'ext_domain_package' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_storage(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logStorage:
        '''
        result = self._values.get("log_storage")
        assert result is not None, "Required property 'log_storage' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def log_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: logTime:
        '''
        result = self._values.get("log_time")
        assert result is not None, "Required property 'log_time' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def package_code(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: packageCode:
        '''
        result = self._values.get("package_code")
        assert result is not None, "Required property 'package_code' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def prefessional_service(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: prefessionalService:
        '''
        result = self._values.get("prefessional_service")
        assert result is not None, "Required property 'prefessional_service' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def subscription_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: subscriptionType: Subscription type of the instance
        '''
        result = self._values.get("subscription_type")
        assert result is not None, "Required property 'subscription_type' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def waf_log(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: wafLog:
        '''
        result = self._values.get("waf_log")
        assert result is not None, "Required property 'waf_log' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: period:
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: renewalStatus:
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: renewPeriod:
        '''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogServiceEnable(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosLogServiceEnable",
):
    '''A ROS template type:  ``ALIYUN::WAF::LogServiceEnable``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosLogServiceEnableProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::LogServiceEnable``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f3a40b8d5cd7e8af2c47c243ba9951eaa37d2ccc415e27c667af9089ccc2d02c)
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
            type_hints = typing.get_type_hints(_typecheckingstub__043e59ca2ff1777b9d730049410e0a95951c44198cf92fcd77879cdd5ba0e158)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Domain: The domain name that is added to WAF.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute:

        InstanceId: The ID of the WAF instance.
        You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domain")
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domain: The domain name that is added to WAF.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domain"))

    @domain.setter
    def domain(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__963746e54b4e8ce7a3e779c862cd54ea36fe4e365e2edeeaf3750d04d497608e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domain", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b50c5384f0c738e028bf799c2a8dc3db467cab2b4ae2a05ae76a2fef7387506d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the WAF instance.
        You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4ca622aa6377a5cb1d1657159ea92eea4da131080da04ee59294197da99ca303)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.RosLogServiceEnableProps",
    jsii_struct_bases=[],
    name_mapping={"domain": "domain", "instance_id": "instanceId"},
)
class RosLogServiceEnableProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::LogServiceEnable``.

        :param domain: 
        :param instance_id: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5f85d391c6d9a399f73a3019db0a489ba05ed91153649e739b39688b5b1d8109)
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
        }

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domain: The domain name that is added to WAF.
        '''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the WAF instance.
        You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogServiceEnableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWafSwitch(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosWafSwitch",
):
    '''A ROS template type:  ``ALIYUN::WAF::WafSwitch``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosWafSwitchProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::WafSwitch``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3a73e007f1e7c539884b516a6851015b4237d8dfe2ad5f4259db609397821179)
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
            type_hints = typing.get_type_hints(_typecheckingstub__2fc6aa082370df4637d886f5d861e0b3c47f450a97f84dd914e404a70e66f963)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="domain")
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domain: Domain name.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "domain"))

    @domain.setter
    def domain(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9709d6f4fd50fac629d6ae0f2116e7ec7a0b00e13ef1b103ae7b0c0e1290264d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "domain", value)

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dc62479620742e57b98fc9847411c7b682ced327f8cd0271f530c804cbe49ea8)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="instanceId")
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__341d1d6c9078107225726cc76f222db1398199305b54567dc305a604fd6f39a7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "instanceId", value)

    @builtins.property
    @jsii.member(jsii_name="serviceOn")
    def service_on(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        serviceOn: Web attack protection switch, the value of:
        0: closed.
        1: indicate on.
        '''
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "serviceOn"))

    @service_on.setter
    def service_on(
        self,
        value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1091453b8988170f46580b884757797273b64d0008b7d3cc6304195152d55d16)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "serviceOn", value)

    @builtins.property
    @jsii.member(jsii_name="region")
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "region"))

    @region.setter
    def region(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67d193f3148fd8afaa5766f13b7260e8268765365ed25ebe7106a7500340e215)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "region", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.RosWafSwitchProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain": "domain",
        "instance_id": "instanceId",
        "service_on": "serviceOn",
        "region": "region",
    },
)
class RosWafSwitchProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_on: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::WafSwitch``.

        :param domain: 
        :param instance_id: 
        :param service_on: 
        :param region: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c78fa3a45b1503315eb84e8620543a367537589c487f620cc01d5d5ee812fc75)
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument service_on", value=service_on, expected_type=type_hints["service_on"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "service_on": service_on,
        }
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: domain: Domain name.
        '''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_on(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property:

        serviceOn: Web attack protection switch, the value of:
        0: closed.
        1: indicate on.
        '''
        result = self._values.get("service_on")
        assert result is not None, "Required property 'service_on' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWafSwitchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class WafSwitch(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.WafSwitch",
):
    '''A ROS resource type:  ``ALIYUN::WAF::WafSwitch``.'''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["WafSwitchProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::WafSwitch``.

        Param scope - scope in which this resource is defined
        Param id    - scoped id of the resource
        Param props - resource properties

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aacd8d89f4ffdff022fcde97385769e8163ab50f3cca60397f5575c14dc45433)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.WafSwitchProps",
    jsii_struct_bases=[],
    name_mapping={
        "domain": "domain",
        "instance_id": "instanceId",
        "service_on": "serviceOn",
        "region": "region",
    },
)
class WafSwitchProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        service_on: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
        region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::WafSwitch``.

        :param domain: Property domain: Domain name.
        :param instance_id: Property instanceId: WAF instance ID. Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        :param service_on: Property serviceOn: Web attack protection switch, the value of: 0: closed. 1: indicate on.
        :param region: Property region: Examples of areas where the WAF. Value: cn: China mainland (default) cn-hongkong: China HongKong and other overseas
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d7ac3158ea62c608345ef60c179e8c755f1b4e32f59403290909a2c580ece25e)
            check_type(argname="argument domain", value=domain, expected_type=type_hints["domain"])
            check_type(argname="argument instance_id", value=instance_id, expected_type=type_hints["instance_id"])
            check_type(argname="argument service_on", value=service_on, expected_type=type_hints["service_on"])
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "service_on": service_on,
        }
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property domain: Domain name.'''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def instance_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property instanceId: WAF instance ID.

        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def service_on(
        self,
    ) -> typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property serviceOn: Web attack protection switch, the value of: 0: closed.

        1: indicate on.
        '''
        result = self._values.get("service_on")
        assert result is not None, "Required property 'service_on' is missing"
        return typing.cast(typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property region: Examples of areas where the WAF.

        Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "WafSwitchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "AclRule",
    "AclRuleProps",
    "Domain",
    "DomainConfig",
    "DomainConfigProps",
    "DomainProps",
    "Instance",
    "InstanceProps",
    "LogServiceEnable",
    "LogServiceEnableProps",
    "RosAclRule",
    "RosAclRuleProps",
    "RosDomain",
    "RosDomainConfig",
    "RosDomainConfigProps",
    "RosDomainProps",
    "RosInstance",
    "RosInstanceProps",
    "RosLogServiceEnable",
    "RosLogServiceEnableProps",
    "RosWafSwitch",
    "RosWafSwitchProps",
    "WafSwitch",
    "WafSwitchProps",
]

publication.publish()

def _typecheckingstub__2de49924f3fbceb453f45b2ff3f5ad38218a7ddeccf95d8f93ddeb13767ae3e3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[AclRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a66b9776a33469dcd97701d934b24da04888c6236fe4dc76b6d920c32aeede2e(
    *,
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rules: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__464df36b8e6d427565e80f096b9ca427e6e2ad4bd4ad73191a1b91fd305696b3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5d3b0679966e32e3587b3ffedda67491d53c3c5b3aca714482dcb86fb7aa5c39(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[DomainConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__70bdf7bb9a6ebd5d1855e05758f57d06913e6d4d48eb859f131a128f1bd7a407(
    *,
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_access_product: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    protocols: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    http_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_redirect: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_to_user_ip: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rs_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_ips: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb3b68012c4c48777067cebfa980d3385e395a3b8b8851bf1750081507a0a5d9(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_access_product: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_ips: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http2_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    http_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    https_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    https_redirect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_to_user_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancing: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomain.LogHeadersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    read_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    write_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__865684754cd3828eaf27fdafeeb9db069d768face8c5a95e3ec2c3c98b0c5ef3(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[InstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43a17fa5ea24779c202068b99acdc06cba416ef7cc3ddf08640349b6c982dba8(
    *,
    big_screen: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    exclusive_ip_package: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ext_bandwidth: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ext_domain_package: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_storage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    package_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    prefessional_service: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    subscription_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    waf_log: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f695b59c454d396613800620218c0b44354bb4d0fdad8ad7501a734bb0ee47c1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[LogServiceEnableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__992cd75383e2b392161ee3fa6243de9ee05983185934c552a6b18182ae5bbb8c(
    *,
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__91366ac47dd17fe495e6197496f5cbfe29ff7ef18db69ef51195bc7ec187b475(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosAclRuleProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__63c8efc8f61a16747489d1a4a2365b710bea515a56ee9627907a97b12b835aaf(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd74c4fdd6076b3f11dce7870ad0a92dea4a866b5b0872112668fb7ec90560f1(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__55913d9b9ae6cb7abb7f5005e84e60701b4356d9343a95f52b3c3c61394e10a6(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ab28e35f904b2d2de860fc995c2c71352412a6356c74e3cd653850f32897d613(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__64c5fb4547d952a7eefdf0fa49c3fe5d8539a5d76249ddee92c68f4116775dc5(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b68ad4595d6331b5668ec69a50cf200857a327f083559deed7d26d3ea1191d7d(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6f185055da1831e37b7e0c7a7a19ee7c92f6616b086ffc5735cf6eb031d4ba1c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3128f81577aa6f6d0dcf831565d98804f88591ce039bfbac2bfe2d53db7e1f11(
    *,
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    rules: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rule_id: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10adf4d36dc029495a749e9d3e9fc03f8aa9b481cbb61a9d730fec43a4f3c696(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f8c44991fabe9afe9de7e257f2e3f1929ea02ae7229052a2444138a9b1ac98f2(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86cbf180a8334b95c5c55a9d22f8dd5628ff114051c6e988572ddb32e861c558(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ecadc7980502a4b81787de4173b6612cf8913540ef5926f4dcb2b20ee4e8f63c(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ef37d9a68bb14afc25f01a6473da8bb344a3a0a10091d77e5d040d7d6d8e1e21(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cd03066e0bf4ed8f79c6ce9a25574c7abde110bb35b7f62c574a4ba43538fdac(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b55868db5d8bce373663a8d7df3b604fb32a22beaf61d30b4786dec8d1f46ac(
    value: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0692085a7e0272a407a66cf9dd9ef971c84d975b1fc836887898820853e0130(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__548a0c9666038823c5b553f5f976da708e9619f8bdf99007bc3b52be6d55a8e7(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5edb493193e73a297ad5109964cf26399718e02f9637cd1c83e310921b67756(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf4a2e0135d01b001b7042eafa16281524cf505ebc4f6a2eb9a915e19e314a1a(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0730cdc94e23794b1b308b8e23ffde48b735dd3f321ae7406555b2bd14fea43(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3a7a831ca7b855a903a8d5b2613ae7156caf55a19e706e1bcd398b5d2c805eb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42595eb12037b41b9aeec203baf98dfc53f04f56d4c96da61d2fe1142bc74ef8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__005e8accaf5e87d2b33f8564facc56ed438e1341b02922a73f879d76fd2fad08(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e3ac6af32a7dc4060f4b5716354d9bc1342c9cf26f23cdf42ba2b4e043993a67(
    value: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.List[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, RosDomain.LogHeadersProperty]]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__77b776335991f62ba9ec9d0589f8ec80716d25099edeceede750e0ac20162894(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4eead30a5fe9e6bb2e76b06d5ba98cee0c07c65b49422ba92d383a84a9020e19(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99c819a85ccb270aeb591fb04e38ab9b25b06f135c875212faa670807db7071c(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc5f90d1ffc8d2907accd645f261be39b072254b1897eb9fbb90b28b6ff8c425(
    *,
    k: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    v: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6289f4fc8bf8cedf98fcf6525fbe9c560402f441ba8d18bf095b4e5e9c287a2(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosDomainConfigProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98879b403e84ee9b10fdc3f01a0cda4b2a37d9fc45922c05532f64ed2da2fc28(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3fc82664e5cd41b6920194d7423ee1b38413fd1a043db8bf1c06d07d2b373c8e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d3e3a4244a534c58fb4ca3aa60dac7aebb671d101a41680a8883c0b15dfcafd7(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0e87f3bdf60c17c39897f5f545f0762737dbe91a31b824c3ab35b3361bd7e024(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90eb5aa2147a1a7825c95f2fa33c6600805f487a6fffde30148ec7d37afbe1ce(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5160059c642e250e992acd6a74f6adabed23fa635b28e301ff407039cb77b10(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__41ea5f9ca978f013545b38f6f408a794c41613f5cc69124259deacef663aa768(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7b9f66428771732bb87acac7fe6f5b3c2dc51427d39d57d0b22e1d72d418aed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__813b227de561b965b832c419879aa304d2e6e64c44f083a3252ba5865ba465f4(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__473df7fbd85dc88c7f11c0a56f87d0d36f8e18060987b4bc2f9a660a3c9fc6bf(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b13f90f394d0125047e32bbe9f828f505e4ceec3e3781582cb1e0f592989d84f(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4eec33a70c8a03154668b9041305747b6b651cd798fe9da026906c1be1ecb323(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c806af04413f537181dbe8f4dfa460e8f56447552fc42a492bee1bb98206fc1b(
    value: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4c3642d61fd77eba1713487303884b8768a3a9dadfb6023f8f7cf4a20ef214a(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7a5082d5e5df1a74c16947ff2f21dcf219ac28649544b7a28b89d4891e1ddfa(
    *,
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_access_product: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    protocols: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    http_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_port: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    https_redirect: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_to_user_ip: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancing: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    rs_type: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    source_ips: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__68c91c57615624a06949950f06fac16c94cb1360a324a03b16f7a0f87de564df(
    *,
    domain_name: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    is_access_product: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    source_ips: typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]],
    cluster_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    connection_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http2_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    http_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    https_port: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]]] = None,
    https_redirect: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    http_to_user_ip: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    load_balancing: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    log_headers: typing.Optional[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Sequence[typing.Union[_ros_cdk_core_7adfd82f.IResolvable, typing.Union[RosDomain.LogHeadersProperty, typing.Dict[builtins.str, typing.Any]]]]]] = None,
    read_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    resource_group_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    write_time: typing.Optional[typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbe9e06aa98a717da5ea4fc6f12f23bd83611c6d62bcfd832750d702d7779d87(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosInstanceProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__750255829958bc68177feb026d35708064635a93f96ce6ddea2c097449a9c78b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f80b76f8aa0b04aa5b0d056d662a65d9661ba6a4dabe7ce4876877d08aff5d53(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__76d49a943648747f27b4fe334bb5543f703dd5043df2d33a4589d8babbe58258(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__86d99c603a42a079486b0245c5e376e6399eebc8f2217cacd40f00976d76af4c(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c5dc701fa9a2bc956137032392cba975bc540d0e1a38aedfb364ba6bb505454b(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c40817c0a17a4ba6bce4e0f30a24f2c1ffae027d69fcecf985a74b13882ca1b6(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0deb9b513c91689eedd926b766be637bdbd148ed6f4e18d0a16ee8855d955024(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__54249b07746a8910145bda7b2480f18d721a8df78eea951948760f3cad1c74ce(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d1baebe2c041e9df7ada724ad042a9005315d2467a596a7abcc1429fde4b280a(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e9d782dbf7d506d008dbe68116eda43f3b9b9b89f431234433300ed86d3fd301(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ada77fa43944b0095ba2e8a1f47d0cc5e46c08ea74d61cff58b7424cd2a61898(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__32cbd35766dcd69beaec3fda4bafd15936e62e6a351222267f81f756a5e182b9(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5eb9ff91f2c19190910f19fff2bbbc90c2d29254d7ed2c73acf7a272038055b8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9d8e62c779c5696a54890b6716586c83285098ef2c79e328626085eb0223fc8(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d79c2ceff54527c54517cb1947265f3a860f09ed99fb2bc681cc5ec6e1f5561(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0ea514c1c10f42ff555fae81609b07178ce6b70189002bc1b7110bfef661e9d7(
    *,
    big_screen: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    exclusive_ip_package: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ext_bandwidth: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ext_domain_package: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_storage: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    log_time: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    package_code: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    prefessional_service: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    subscription_type: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    waf_log: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renewal_status: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    renew_period: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f3a40b8d5cd7e8af2c47c243ba9951eaa37d2ccc415e27c667af9089ccc2d02c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosLogServiceEnableProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__043e59ca2ff1777b9d730049410e0a95951c44198cf92fcd77879cdd5ba0e158(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__963746e54b4e8ce7a3e779c862cd54ea36fe4e365e2edeeaf3750d04d497608e(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b50c5384f0c738e028bf799c2a8dc3db467cab2b4ae2a05ae76a2fef7387506d(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4ca622aa6377a5cb1d1657159ea92eea4da131080da04ee59294197da99ca303(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5f85d391c6d9a399f73a3019db0a489ba05ed91153649e739b39688b5b1d8109(
    *,
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3a73e007f1e7c539884b516a6851015b4237d8dfe2ad5f4259db609397821179(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosWafSwitchProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2fc6aa082370df4637d886f5d861e0b3c47f450a97f84dd914e404a70e66f963(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9709d6f4fd50fac629d6ae0f2116e7ec7a0b00e13ef1b103ae7b0c0e1290264d(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dc62479620742e57b98fc9847411c7b682ced327f8cd0271f530c804cbe49ea8(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__341d1d6c9078107225726cc76f222db1398199305b54567dc305a604fd6f39a7(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1091453b8988170f46580b884757797273b64d0008b7d3cc6304195152d55d16(
    value: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67d193f3148fd8afaa5766f13b7260e8268765365ed25ebe7106a7500340e215(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c78fa3a45b1503315eb84e8620543a367537589c487f620cc01d5d5ee812fc75(
    *,
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_on: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aacd8d89f4ffdff022fcde97385769e8163ab50f3cca60397f5575c14dc45433(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[WafSwitchProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d7ac3158ea62c608345ef60c179e8c755f1b4e32f59403290909a2c580ece25e(
    *,
    domain: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    instance_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    service_on: typing.Union[jsii.Number, _ros_cdk_core_7adfd82f.IResolvable],
    region: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
