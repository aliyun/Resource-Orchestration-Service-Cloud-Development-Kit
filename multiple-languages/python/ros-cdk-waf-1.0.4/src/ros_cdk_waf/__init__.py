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

from ._jsii import *

import ros_cdk_core


class AclRule(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.AclRule",
):
    '''A ROS resource type:  ``ALIYUN::WAF::AclRule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AclRuleProps",
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
        domain: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        rules: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        rule_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::AclRule``.

        :param domain: Property domain: Domain name.
        :param instance_id: Property instanceId: WAF instance ID. Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        :param rules: Property rules: Detailed information of precise access control rules, expressed in JSON format strings.
        :param region: Property region: Examples of areas where the WAF. Value: cn: China mainland (default) cn-hongkong: China HongKong and other overseas
        :param rule_id: Property ruleId: Precise access control rule ID.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "rules": rules,
        }
        if region is not None:
            self._values["region"] = region
        if rule_id is not None:
            self._values["rule_id"] = rule_id

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property domain: Domain name.'''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: WAF instance ID.

        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rules(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property rules: Detailed information of precise access control rules, expressed in JSON format strings.'''
        result = self._values.get("rules")
        assert result is not None, "Required property 'rules' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property region: Examples of areas where the WAF.

        Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property ruleId: Precise access control rule ID.'''
        result = self._values.get("rule_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AclRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Domain(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.Domain",
):
    '''A ROS resource type:  ``ALIYUN::WAF::Domain``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ClusterType: Cluster type.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> ros_cdk_core.IResolvable:
        '''Attribute Cname: CNAME assigned by WAF instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCname"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> ros_cdk_core.IResolvable:
        '''Attribute DomainName: Domain name.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttp2Port")
    def attr_http2_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute Http2Port: Http2 port configuration.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttp2Port"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpPort")
    def attr_http_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute HttpPort: Http port configuration.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpsPort")
    def attr_https_port(self) -> ros_cdk_core.IResolvable:
        '''Attribute HttpsPort: Https port configuration.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpsPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpsRedirect")
    def attr_https_redirect(self) -> ros_cdk_core.IResolvable:
        '''Attribute HttpsRedirect: Https forced redirect configuration.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpsRedirect"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpToUserIp")
    def attr_http_to_user_ip(self) -> ros_cdk_core.IResolvable:
        '''Attribute HttpToUserIp: Http back to source.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpToUserIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: Instance id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIsAccessProduct")
    def attr_is_access_product(self) -> ros_cdk_core.IResolvable:
        '''Attribute IsAccessProduct: Is there a seven-layer agency before WAF.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIsAccessProduct"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancing")
    def attr_load_balancing(self) -> ros_cdk_core.IResolvable:
        '''Attribute LoadBalancing: Load balancing configuration.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancing"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogHeaders")
    def attr_log_headers(self) -> ros_cdk_core.IResolvable:
        '''Attribute LogHeaders: Domain traffic tagging.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogHeaders"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute ResourceGroupId: Resource group Id.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceIps")
    def attr_source_ips(self) -> ros_cdk_core.IResolvable:
        '''Attribute SourceIps: Back to source IP configuration.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceIps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> ros_cdk_core.IResolvable:
        '''Attribute Version: Optimistic lock version.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVersion"))


class DomainConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.DomainConfig",
):
    '''A ROS resource type:  ``ALIYUN::WAF::DomainConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainConfigProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> ros_cdk_core.IResolvable:
        '''Attribute Cname: CNAME assigned by WAF instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCname"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProtocolType"))


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
        domain: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        is_access_product: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        protocols: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        http_port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        https_port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        https_redirect: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        http_to_user_ip: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        load_balancing: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        rs_type: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        source_ips: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property domain: Domain name.'''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: WAF instance ID.

        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def is_access_product(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of: 0: none. 1: expressed.'''
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def protocols(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property protocols: The domain supports access protocols, values: http: expressed support for the HTTP protocol.

        https: support for HTTPS protocol.
        http, https: supports HTTP, HTTPS protocol.
        '''
        result = self._values.get("protocols")
        assert result is not None, "Required property 'protocols' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property httpPort: HTTP protocol configuration port.

        When specifying a plurality of HTTP port "," separated. Example values: [80].
        Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        result = self._values.get("http_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property httpsPort: HTTPS protocol configuration port.

        When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        result = self._values.get("https_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property httpsRedirect: HTTPS is turned forcefully jump the argument: 0: off (default) 1: Turn Description required to complete the request parameters using only HTTPS access protocol.

        After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        '''
        result = self._values.get("https_redirect")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of: 0: off (default) 1: Turn Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.'''
        result = self._values.get("http_to_user_ip")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property loadBalancing: Back to the source load balancing policy values: 0: IP Hash way.

        1: represents a polling mode.
        '''
        result = self._values.get("load_balancing")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property region: Examples of areas where the WAF.

        Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def rs_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property rsType: Back to the source address type the domain name values: 0: back to the source to IP.

        1: Indicates the domain name back to the source.
        '''
        result = self._values.get("rs_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_ips(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property sourceIps: Source station IP, supports a plurality of specified IP.

        Example values: [ "1.1.1.1"].
        '''
        result = self._values.get("source_ips")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        domain_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        is_access_product: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_ips: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        cluster_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        http2_port: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        http_port: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        https_port: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        https_redirect: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        http_to_user_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancing: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, "RosDomain.LogHeadersProperty"]]]] = None,
        read_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        write_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property domainName: Domain name.'''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: Instance id.'''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def is_access_product(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property isAccessProduct: Is there a seven-layer agency before WAF.'''
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_ips(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''Property sourceIps: Back to source IP configuration.'''
        result = self._values.get("source_ips")
        assert result is not None, "Required property 'source_ips' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property clusterType: Cluster type.'''
        result = self._values.get("cluster_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property connectionTime: Connection timeout.'''
        result = self._values.get("connection_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def http2_port(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property http2Port: Http2 port configuration.'''
        result = self._values.get("http2_port")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property httpPort: Http port configuration.'''
        result = self._values.get("http_port")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''Property httpsPort: Https port configuration.'''
        result = self._values.get("https_port")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property httpsRedirect: Https forced redirect configuration.'''
        result = self._values.get("https_redirect")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property httpToUserIp: Http back to source.'''
        result = self._values.get("http_to_user_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property loadBalancing: Load balancing configuration.'''
        result = self._values.get("load_balancing")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_headers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDomain.LogHeadersProperty"]]]]:
        '''Property logHeaders: Domain traffic tagging.'''
        result = self._values.get("log_headers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDomain.LogHeadersProperty"]]]], result)

    @builtins.property
    def read_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property readTime: Read connection timeout period.'''
        result = self._values.get("read_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property resourceGroupId: Resource group Id.'''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def write_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''Property writeTime: Write connection timeout period.'''
        result = self._values.get("write_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Instance(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.Instance",
):
    '''A ROS resource type:  ``ALIYUN::WAF::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrEndDate")
    def attr_end_date(self) -> ros_cdk_core.IResolvable:
        '''Attribute EndDate: Due date of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndDate"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInDebt")
    def attr_in_debt(self) -> ros_cdk_core.IResolvable:
        '''Attribute InDebt: Instance is overdue.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInDebt"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: Instance ID.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRemainDay")
    def attr_remain_day(self) -> ros_cdk_core.IResolvable:
        '''Attribute RemainDay: Number of available days for WAF Trial version.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRemainDay"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSubscriptionType")
    def attr_subscription_type(self) -> ros_cdk_core.IResolvable:
        '''Attribute SubscriptionType: Subscription type of the instance.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSubscriptionType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTrial")
    def attr_trial(self) -> ros_cdk_core.IResolvable:
        '''Attribute Trial: Trial version.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTrial"))


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
        big_screen: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        exclusive_ip_package: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ext_bandwidth: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ext_domain_package: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        log_storage: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        log_time: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        package_code: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        prefessional_service: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        subscription_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        waf_log: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        period: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def big_screen(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property bigScreen:.'''
        result = self._values.get("big_screen")
        assert result is not None, "Required property 'big_screen' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def exclusive_ip_package(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property exclusiveIpPackage:.'''
        result = self._values.get("exclusive_ip_package")
        assert result is not None, "Required property 'exclusive_ip_package' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ext_bandwidth(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property extBandwidth:.'''
        result = self._values.get("ext_bandwidth")
        assert result is not None, "Required property 'ext_bandwidth' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ext_domain_package(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property extDomainPackage:.'''
        result = self._values.get("ext_domain_package")
        assert result is not None, "Required property 'ext_domain_package' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def log_storage(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property logStorage:.'''
        result = self._values.get("log_storage")
        assert result is not None, "Required property 'log_storage' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def log_time(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property logTime:.'''
        result = self._values.get("log_time")
        assert result is not None, "Required property 'log_time' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def package_code(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property packageCode:.'''
        result = self._values.get("package_code")
        assert result is not None, "Required property 'package_code' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def prefessional_service(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property prefessionalService:.'''
        result = self._values.get("prefessional_service")
        assert result is not None, "Required property 'prefessional_service' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def subscription_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property subscriptionType: Subscription type of the instance.'''
        result = self._values.get("subscription_type")
        assert result is not None, "Required property 'subscription_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def waf_log(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property wafLog:.'''
        result = self._values.get("waf_log")
        assert result is not None, "Required property 'waf_log' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property period:.'''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property renewalStatus:.'''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property renewPeriod:.'''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class LogServiceEnable(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.LogServiceEnable",
):
    '''A ROS resource type:  ``ALIYUN::WAF::LogServiceEnable``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "LogServiceEnableProps",
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
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> ros_cdk_core.IResolvable:
        '''Attribute Domain: The domain name that is added to WAF.'''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''Attribute InstanceId: The ID of the WAF instance.

        You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-waf.LogServiceEnableProps",
    jsii_struct_bases=[],
    name_mapping={"domain": "domain", "instance_id": "instanceId"},
)
class LogServiceEnableProps:
    def __init__(
        self,
        *,
        domain: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::LogServiceEnable``.

        :param domain: Property domain: The domain name that is added to WAF.
        :param instance_id: Property instanceId: The ID of the WAF instance. You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
        }

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property domain: The domain name that is added to WAF.'''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: The ID of the WAF instance.

        You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LogServiceEnableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAclRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosAclRule",
):
    '''A ROS template type:  ``ALIYUN::WAF::AclRule``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAclRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::AclRule``.

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domain")
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domain: Domain name.
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
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rules")
    def rules(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: rules: Detailed information of precise access control rules, expressed in JSON format strings.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "rules"))

    @rules.setter
    def rules(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "rules", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="region")
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "region"))

    @region.setter
    def region(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "region", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="ruleId")
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: ruleId: Precise access control rule ID
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "ruleId"))

    @rule_id.setter
    def rule_id(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
        domain: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        rules: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        rule_id: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::AclRule``.

        :param domain: 
        :param instance_id: 
        :param rules: 
        :param region: 
        :param rule_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "rules": rules,
        }
        if region is not None:
            self._values["region"] = region
        if rule_id is not None:
            self._values["rule_id"] = rule_id

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domain: Domain name.
        '''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def rules(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: rules: Detailed information of precise access control rules, expressed in JSON format strings.
        '''
        result = self._values.get("rules")
        assert result is not None, "Required property 'rules' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def rule_id(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: ruleId: Precise access control rule ID
        '''
        result = self._values.get("rule_id")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosAclRuleProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosDomain(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosDomain",
):
    '''A ROS template type:  ``ALIYUN::WAF::Domain``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::Domain``.

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
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ClusterType: Cluster type
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrClusterType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Cname: CNAME assigned by WAF instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCname"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: DomainName: Domain name
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomainName"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttp2Port")
    def attr_http2_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Http2Port: Http2 port configuration
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttp2Port"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpPort")
    def attr_http_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HttpPort: Http port configuration
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpsPort")
    def attr_https_port(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HttpsPort: Https port configuration
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpsPort"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpsRedirect")
    def attr_https_redirect(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HttpsRedirect: Https forced redirect configuration
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpsRedirect"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrHttpToUserIp")
    def attr_http_to_user_ip(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: HttpToUserIp: Http back to source
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrHttpToUserIp"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: Instance id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrIsAccessProduct")
    def attr_is_access_product(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: IsAccessProduct: Is there a seven-layer agency before WAF
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrIsAccessProduct"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLoadBalancing")
    def attr_load_balancing(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LoadBalancing: Load balancing configuration
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLoadBalancing"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrLogHeaders")
    def attr_log_headers(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: LogHeaders: Domain traffic tagging
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrLogHeaders"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ResourceGroupId: Resource group Id
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSourceIps")
    def attr_source_ips(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SourceIps: Back to source IP configuration
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSourceIps"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Version: Optimistic lock version
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrVersion"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "domainName"))

    @domain_name.setter
    def domain_name(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: Instance id
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isAccessProduct")
    def is_access_product(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: isAccessProduct: Is there a seven-layer agency before WAF
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "isAccessProduct"))

    @is_access_product.setter
    def is_access_product(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "isAccessProduct", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceIps")
    def source_ips(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: sourceIps: Back to source IP configuration
        '''
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], jsii.get(self, "sourceIps"))

    @source_ips.setter
    def source_ips(
        self,
        value: typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
    ) -> None:
        jsii.set(self, "sourceIps", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="clusterType")
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: clusterType: Cluster type
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "clusterType"))

    @cluster_type.setter
    def cluster_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "clusterType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="connectionTime")
    def connection_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionTime: Connection timeout
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "connectionTime"))

    @connection_time.setter
    def connection_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "connectionTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="http2Port")
    def http2_port(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: http2Port: Http2 port configuration
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "http2Port"))

    @http2_port.setter
    def http2_port(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "http2Port", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpPort")
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: httpPort: Http port configuration
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "httpPort"))

    @http_port.setter
    def http_port(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "httpPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpsPort")
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: httpsPort: Https port configuration
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], jsii.get(self, "httpsPort"))

    @https_port.setter
    def https_port(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "httpsPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpsRedirect")
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: httpsRedirect: Https forced redirect configuration
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "httpsRedirect"))

    @https_redirect.setter
    def https_redirect(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "httpsRedirect", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpToUserIp")
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: httpToUserIp: Http back to source
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "httpToUserIp"))

    @http_to_user_ip.setter
    def http_to_user_ip(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "httpToUserIp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loadBalancing")
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancing: Load balancing configuration
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "loadBalancing"))

    @load_balancing.setter
    def load_balancing(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loadBalancing", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logHeaders")
    def log_headers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDomain.LogHeadersProperty"]]]]:
        '''
        :Property: logHeaders: Domain traffic tagging
        '''
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDomain.LogHeadersProperty"]]]], jsii.get(self, "logHeaders"))

    @log_headers.setter
    def log_headers(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, "RosDomain.LogHeadersProperty"]]]],
    ) -> None:
        jsii.set(self, "logHeaders", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="readTime")
    def read_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: readTime: Read connection timeout period
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "readTime"))

    @read_time.setter
    def read_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "readTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group Id
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "resourceGroupId"))

    @resource_group_id.setter
    def resource_group_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="writeTime")
    def write_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: writeTime: Write connection timeout period
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "writeTime"))

    @write_time.setter
    def write_time(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
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
            k: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
            v: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        ) -> None:
            '''
            :param k: 
            :param v: 
            '''
            self._values: typing.Dict[str, typing.Any] = {}
            if k is not None:
                self._values["k"] = k
            if v is not None:
                self._values["v"] = v

        @builtins.property
        def k(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: k: The field name of the traffic tag of the domain name
            '''
            result = self._values.get("k")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        @builtins.property
        def v(
            self,
        ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
            '''
            :Property: v: The value of the traffic tag of the domain name
            '''
            result = self._values.get("v")
            return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

        def __eq__(self, rhs: typing.Any) -> builtins.bool:
            return isinstance(rhs, self.__class__) and rhs._values == self._values

        def __ne__(self, rhs: typing.Any) -> builtins.bool:
            return not (rhs == self)

        def __repr__(self) -> str:
            return "LogHeadersProperty(%s)" % ", ".join(
                k + "=" + repr(v) for k, v in self._values.items()
            )


class RosDomainConfig(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosDomainConfig",
):
    '''A ROS template type:  ``ALIYUN::WAF::DomainConfig``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::DomainConfig``.

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
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Cname: CNAME assigned by WAF instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrCname"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrProtocolType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domain")
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domain: Domain name.
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
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="isAccessProduct")
    def is_access_product(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
        0: none.
        1: expressed.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "isAccessProduct"))

    @is_access_product.setter
    def is_access_product(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "isAccessProduct", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="protocols")
    def protocols(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        protocols: The domain supports access protocols, values:
        http: expressed support for the HTTP protocol.
        https: support for HTTPS protocol.
        http, https: supports HTTP, HTTPS protocol.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "protocols"))

    @protocols.setter
    def protocols(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "protocols", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpPort")
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
        Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "httpPort"))

    @http_port.setter
    def http_port(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "httpPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpsPort")
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "httpsPort"))

    @https_port.setter
    def https_port(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "httpsPort", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpsRedirect")
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        httpsRedirect: HTTPS is turned forcefully jump the argument:
        0: off (default)
        1: Turn
        Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "httpsRedirect"))

    @https_redirect.setter
    def https_redirect(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "httpsRedirect", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="httpToUserIp")
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
        0: off (default)
        1: Turn
        Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "httpToUserIp"))

    @http_to_user_ip.setter
    def http_to_user_ip(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "httpToUserIp", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="loadBalancing")
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loadBalancing: Back to the source load balancing policy values:
        0: IP Hash way.
        1: represents a polling mode.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "loadBalancing"))

    @load_balancing.setter
    def load_balancing(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "loadBalancing", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="region")
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "region"))

    @region.setter
    def region(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "region", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rsType")
    def rs_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        rsType: Back to the source address type the domain name values:
        0: back to the source to IP.
        1: Indicates the domain name back to the source.
        '''
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], jsii.get(self, "rsType"))

    @rs_type.setter
    def rs_type(
        self,
        value: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "rsType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="sourceIps")
    def source_ips(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "sourceIps"))

    @source_ips.setter
    def source_ips(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        domain: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        is_access_product: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        protocols: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        http_port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        https_port: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        https_redirect: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        http_to_user_ip: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        load_balancing: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        rs_type: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        source_ips: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domain: Domain name.
        '''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def is_access_product(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
        0: none.
        1: expressed.
        '''
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def protocols(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        protocols: The domain supports access protocols, values:
        http: expressed support for the HTTP protocol.
        https: support for HTTPS protocol.
        http, https: supports HTTP, HTTPS protocol.
        '''
        result = self._values.get("protocols")
        assert result is not None, "Required property 'protocols' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
        Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        result = self._values.get("http_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        '''
        result = self._values.get("https_port")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        httpsRedirect: HTTPS is turned forcefully jump the argument:
        0: off (default)
        1: Turn
        Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        '''
        result = self._values.get("https_redirect")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
        0: off (default)
        1: Turn
        Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
        '''
        result = self._values.get("http_to_user_ip")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        loadBalancing: Back to the source load balancing policy values:
        0: IP Hash way.
        1: represents a polling mode.
        '''
        result = self._values.get("load_balancing")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def rs_type(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        rsType: Back to the source address type the domain name values:
        0: back to the source to IP.
        1: Indicates the domain name back to the source.
        '''
        result = self._values.get("rs_type")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def source_ips(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
        '''
        result = self._values.get("source_ips")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
        domain_name: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        is_access_product: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        source_ips: typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]],
        cluster_type: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        connection_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        http2_port: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        http_port: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        https_port: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]] = None,
        https_redirect: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        http_to_user_ip: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        load_balancing: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        log_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.Sequence[typing.Union[ros_cdk_core.IResolvable, RosDomain.LogHeadersProperty]]]] = None,
        read_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
        resource_group_id: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        write_time: typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def domain_name(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domainName: Domain name
        '''
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: instanceId: Instance id
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def is_access_product(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: isAccessProduct: Is there a seven-layer agency before WAF
        '''
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def source_ips(
        self,
    ) -> typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]:
        '''
        :Property: sourceIps: Back to source IP configuration
        '''
        result = self._values.get("source_ips")
        assert result is not None, "Required property 'source_ips' is missing"
        return typing.cast(typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]], result)

    @builtins.property
    def cluster_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: clusterType: Cluster type
        '''
        result = self._values.get("cluster_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def connection_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: connectionTime: Connection timeout
        '''
        result = self._values.get("connection_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def http2_port(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: http2Port: Http2 port configuration
        '''
        result = self._values.get("http2_port")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def http_port(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: httpPort: Http port configuration
        '''
        result = self._values.get("http_port")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def https_port(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]]:
        '''
        :Property: httpsPort: Https port configuration
        '''
        result = self._values.get("https_port")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[builtins.str, ros_cdk_core.IResolvable]]]], result)

    @builtins.property
    def https_redirect(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: httpsRedirect: Https forced redirect configuration
        '''
        result = self._values.get("https_redirect")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def http_to_user_ip(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: httpToUserIp: Http back to source
        '''
        result = self._values.get("http_to_user_ip")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def load_balancing(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: loadBalancing: Load balancing configuration
        '''
        result = self._values.get("load_balancing")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def log_headers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDomain.LogHeadersProperty]]]]:
        '''
        :Property: logHeaders: Domain traffic tagging
        '''
        result = self._values.get("log_headers")
        return typing.cast(typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[ros_cdk_core.IResolvable, RosDomain.LogHeadersProperty]]]], result)

    @builtins.property
    def read_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: readTime: Read connection timeout period
        '''
        result = self._values.get("read_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def resource_group_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: resourceGroupId: Resource group Id
        '''
        result = self._values.get("resource_group_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def write_time(
        self,
    ) -> typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]]:
        '''
        :Property: writeTime: Write connection timeout period
        '''
        result = self._values.get("write_time")
        return typing.cast(typing.Optional[typing.Union[jsii.Number, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosDomainProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosInstance(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosInstance",
):
    '''A ROS template type:  ``ALIYUN::WAF::Instance``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::Instance``.

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
    @jsii.member(jsii_name="attrEndDate")
    def attr_end_date(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: EndDate: Due date of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrEndDate"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInDebt")
    def attr_in_debt(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InDebt: Instance is overdue
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInDebt"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: InstanceId: Instance ID
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrRemainDay")
    def attr_remain_day(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: RemainDay: Number of available days for WAF Trial version
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrRemainDay"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrSubscriptionType")
    def attr_subscription_type(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: SubscriptionType: Subscription type of the instance
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrSubscriptionType"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrTrial")
    def attr_trial(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Trial: Trial version
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrTrial"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="bigScreen")
    def big_screen(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bigScreen:
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "bigScreen"))

    @big_screen.setter
    def big_screen(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "bigScreen", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="exclusiveIpPackage")
    def exclusive_ip_package(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: exclusiveIpPackage:
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "exclusiveIpPackage"))

    @exclusive_ip_package.setter
    def exclusive_ip_package(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "exclusiveIpPackage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="extBandwidth")
    def ext_bandwidth(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: extBandwidth:
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "extBandwidth"))

    @ext_bandwidth.setter
    def ext_bandwidth(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "extBandwidth", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="extDomainPackage")
    def ext_domain_package(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: extDomainPackage:
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "extDomainPackage"))

    @ext_domain_package.setter
    def ext_domain_package(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "extDomainPackage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logStorage")
    def log_storage(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: logStorage:
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "logStorage"))

    @log_storage.setter
    def log_storage(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "logStorage", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="logTime")
    def log_time(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: logTime:
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "logTime"))

    @log_time.setter
    def log_time(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "logTime", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="packageCode")
    def package_code(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: packageCode:
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "packageCode"))

    @package_code.setter
    def package_code(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "packageCode", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="prefessionalService")
    def prefessional_service(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: prefessionalService:
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "prefessionalService"))

    @prefessional_service.setter
    def prefessional_service(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "prefessionalService", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="subscriptionType")
    def subscription_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: subscriptionType: Subscription type of the instance
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "subscriptionType"))

    @subscription_type.setter
    def subscription_type(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "subscriptionType", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="wafLog")
    def waf_log(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: wafLog:
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "wafLog"))

    @waf_log.setter
    def waf_log(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "wafLog", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="period")
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: period:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "period"))

    @period.setter
    def period(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="renewalStatus")
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: renewalStatus:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "renewalStatus"))

    @renewal_status.setter
    def renewal_status(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
        jsii.set(self, "renewalStatus", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="renewPeriod")
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: renewPeriod:
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "renewPeriod"))

    @renew_period.setter
    def renew_period(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        big_screen: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        exclusive_ip_package: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ext_bandwidth: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        ext_domain_package: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        log_storage: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        log_time: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        package_code: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        prefessional_service: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        subscription_type: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        waf_log: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        period: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        renewal_status: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
        renew_period: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
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
        self._values: typing.Dict[str, typing.Any] = {
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
    def big_screen(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: bigScreen:
        '''
        result = self._values.get("big_screen")
        assert result is not None, "Required property 'big_screen' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def exclusive_ip_package(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: exclusiveIpPackage:
        '''
        result = self._values.get("exclusive_ip_package")
        assert result is not None, "Required property 'exclusive_ip_package' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ext_bandwidth(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: extBandwidth:
        '''
        result = self._values.get("ext_bandwidth")
        assert result is not None, "Required property 'ext_bandwidth' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def ext_domain_package(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: extDomainPackage:
        '''
        result = self._values.get("ext_domain_package")
        assert result is not None, "Required property 'ext_domain_package' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def log_storage(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: logStorage:
        '''
        result = self._values.get("log_storage")
        assert result is not None, "Required property 'log_storage' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def log_time(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: logTime:
        '''
        result = self._values.get("log_time")
        assert result is not None, "Required property 'log_time' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def package_code(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: packageCode:
        '''
        result = self._values.get("package_code")
        assert result is not None, "Required property 'package_code' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def prefessional_service(
        self,
    ) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: prefessionalService:
        '''
        result = self._values.get("prefessional_service")
        assert result is not None, "Required property 'prefessional_service' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def subscription_type(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: subscriptionType: Subscription type of the instance
        '''
        result = self._values.get("subscription_type")
        assert result is not None, "Required property 'subscription_type' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def waf_log(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: wafLog:
        '''
        result = self._values.get("waf_log")
        assert result is not None, "Required property 'waf_log' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: period:
        '''
        result = self._values.get("period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def renewal_status(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: renewalStatus:
        '''
        result = self._values.get("renewal_status")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    @builtins.property
    def renew_period(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property: renewPeriod:
        '''
        result = self._values.get("renew_period")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosLogServiceEnable(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosLogServiceEnable",
):
    '''A ROS template type:  ``ALIYUN::WAF::LogServiceEnable``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosLogServiceEnableProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::LogServiceEnable``.

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
    @jsii.member(jsii_name="attrDomain")
    def attr_domain(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute: Domain: The domain name that is added to WAF.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrDomain"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> ros_cdk_core.IResolvable:
        '''
        :Attribute:

        InstanceId: The ID of the WAF instance.
        You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        return typing.cast(ros_cdk_core.IResolvable, jsii.get(self, "attrInstanceId"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domain")
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domain: The domain name that is added to WAF.
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
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the WAF instance.
        You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
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
        domain: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::LogServiceEnable``.

        :param domain: 
        :param instance_id: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
        }

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domain: The domain name that is added to WAF.
        '''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: The ID of the WAF instance.
        You can call the DescribeInstanceInfo operation to query the ID of the WAF instance.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosLogServiceEnableProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWafSwitch(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosWafSwitch",
):
    '''A ROS template type:  ``ALIYUN::WAF::WafSwitch``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWafSwitchProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''Create a new ``ALIYUN::WAF::WafSwitch``.

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
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="domain")
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domain: Domain name.
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
        '''A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.'''
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], jsii.get(self, "instanceId"))

    @instance_id.setter
    def instance_id(
        self,
        value: typing.Union[builtins.str, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="serviceOn")
    def service_on(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        serviceOn: Web attack protection switch, the value of:
        0: closed.
        1: indicate on.
        '''
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], jsii.get(self, "serviceOn"))

    @service_on.setter
    def service_on(
        self,
        value: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
    ) -> None:
        jsii.set(self, "serviceOn", value)

    @builtins.property # type: ignore[misc]
    @jsii.member(jsii_name="region")
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], jsii.get(self, "region"))

    @region.setter
    def region(
        self,
        value: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]],
    ) -> None:
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
        domain: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_on: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::WafSwitch``.

        :param domain: 
        :param instance_id: 
        :param service_on: 
        :param region: 
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "service_on": service_on,
        }
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property: domain: Domain name.
        '''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_on(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''
        :Property:

        serviceOn: Web attack protection switch, the value of:
        0: closed.
        1: indicate on.
        '''
        result = self._values.get("service_on")
        assert result is not None, "Required property 'service_on' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosWafSwitchProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class WafSwitch(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.WafSwitch",
):
    '''A ROS resource type:  ``ALIYUN::WAF::WafSwitch``.'''

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "WafSwitchProps",
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
        domain: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        instance_id: typing.Union[builtins.str, ros_cdk_core.IResolvable],
        service_on: typing.Union[jsii.Number, ros_cdk_core.IResolvable],
        region: typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``ALIYUN::WAF::WafSwitch``.

        :param domain: Property domain: Domain name.
        :param instance_id: Property instanceId: WAF instance ID. Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        :param service_on: Property serviceOn: Web attack protection switch, the value of: 0: closed. 1: indicate on.
        :param region: Property region: Examples of areas where the WAF. Value: cn: China mainland (default) cn-hongkong: China HongKong and other overseas
        '''
        self._values: typing.Dict[str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "service_on": service_on,
        }
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def domain(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property domain: Domain name.'''
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def instance_id(self) -> typing.Union[builtins.str, ros_cdk_core.IResolvable]:
        '''Property instanceId: WAF instance ID.

        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        '''
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return typing.cast(typing.Union[builtins.str, ros_cdk_core.IResolvable], result)

    @builtins.property
    def service_on(self) -> typing.Union[jsii.Number, ros_cdk_core.IResolvable]:
        '''Property serviceOn: Web attack protection switch, the value of: 0: closed.

        1: indicate on.
        '''
        result = self._values.get("service_on")
        assert result is not None, "Required property 'service_on' is missing"
        return typing.cast(typing.Union[jsii.Number, ros_cdk_core.IResolvable], result)

    @builtins.property
    def region(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]]:
        '''Property region: Examples of areas where the WAF.

        Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        '''
        result = self._values.get("region")
        return typing.cast(typing.Optional[typing.Union[builtins.str, ros_cdk_core.IResolvable]], result)

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
