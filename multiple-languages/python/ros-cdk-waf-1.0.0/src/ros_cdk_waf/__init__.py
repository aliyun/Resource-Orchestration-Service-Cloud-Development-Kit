"""
## Aliyun ROS WAF Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
# Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
import alicloud.ros_cdk_waf as WAF
```
"""
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
    """A ROS resource type:  ``ALIYUN::WAF::AclRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "AclRuleProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::WAF::AclRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(AclRule, self, [scope, id, props, enable_resource_property_constraint])


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
        domain: builtins.str,
        instance_id: builtins.str,
        rules: builtins.str,
        region: typing.Optional[builtins.str] = None,
        rule_id: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::WAF::AclRule``.

        :param domain: 
        :param instance_id: 
        :param rules: 
        :param region: 
        :param rule_id: 
        """
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
    def domain(self) -> builtins.str:
        """
        :Property: domain: Domain name.
        """
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def rules(self) -> builtins.str:
        """
        :Property: rules: Detailed information of precise access control rules, expressed in JSON format strings.
        """
        result = self._values.get("rules")
        assert result is not None, "Required property 'rules' is missing"
        return result

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        """
        result = self._values.get("region")
        return result

    @builtins.property
    def rule_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ruleId: Precise access control rule ID
        """
        result = self._values.get("rule_id")
        return result

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
    """A ROS resource type:  ``ALIYUN::WAF::Domain``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::WAF::Domain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Domain, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> typing.Any:
        """
        :Attribute: ClusterType: Cluster type
        """
        return jsii.get(self, "attrClusterType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> typing.Any:
        """
        :Attribute: Cname: CNAME assigned by WAF instance
        """
        return jsii.get(self, "attrCname")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> typing.Any:
        """
        :Attribute: DomainName: Domain name
        """
        return jsii.get(self, "attrDomainName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttp2Port")
    def attr_http2_port(self) -> typing.Any:
        """
        :Attribute: Http2Port: Http2 port configuration
        """
        return jsii.get(self, "attrHttp2Port")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpPort")
    def attr_http_port(self) -> typing.Any:
        """
        :Attribute: HttpPort: Http port configuration
        """
        return jsii.get(self, "attrHttpPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpsPort")
    def attr_https_port(self) -> typing.Any:
        """
        :Attribute: HttpsPort: Https port configuration
        """
        return jsii.get(self, "attrHttpsPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpsRedirect")
    def attr_https_redirect(self) -> typing.Any:
        """
        :Attribute: HttpsRedirect: Https forced redirect configuration
        """
        return jsii.get(self, "attrHttpsRedirect")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpToUserIp")
    def attr_http_to_user_ip(self) -> typing.Any:
        """
        :Attribute: HttpToUserIp: Http back to source
        """
        return jsii.get(self, "attrHttpToUserIp")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance id
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIsAccessProduct")
    def attr_is_access_product(self) -> typing.Any:
        """
        :Attribute: IsAccessProduct: Is there a seven-layer agency before WAF
        """
        return jsii.get(self, "attrIsAccessProduct")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLoadBalancing")
    def attr_load_balancing(self) -> typing.Any:
        """
        :Attribute: LoadBalancing: Load balancing configuration
        """
        return jsii.get(self, "attrLoadBalancing")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLogHeaders")
    def attr_log_headers(self) -> typing.Any:
        """
        :Attribute: LogHeaders: Domain traffic tagging
        """
        return jsii.get(self, "attrLogHeaders")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> typing.Any:
        """
        :Attribute: ResourceGroupId: Resource group Id
        """
        return jsii.get(self, "attrResourceGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSourceIps")
    def attr_source_ips(self) -> typing.Any:
        """
        :Attribute: SourceIps: Back to source IP configuration
        """
        return jsii.get(self, "attrSourceIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> typing.Any:
        """
        :Attribute: Version: Optimistic lock version
        """
        return jsii.get(self, "attrVersion")


class DomainConfig(
    ros_cdk_core.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.DomainConfig",
):
    """A ROS resource type:  ``ALIYUN::WAF::DomainConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "DomainConfigProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::WAF::DomainConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(DomainConfig, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> typing.Any:
        """
        :Attribute: Cname: CNAME assigned by WAF instance.
        """
        return jsii.get(self, "attrCname")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(self) -> typing.Any:
        """
        :Attribute: ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
        """
        return jsii.get(self, "attrProtocolType")


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
        domain: builtins.str,
        instance_id: builtins.str,
        is_access_product: jsii.Number,
        protocols: builtins.str,
        http_port: typing.Optional[builtins.str] = None,
        https_port: typing.Optional[builtins.str] = None,
        https_redirect: typing.Optional[jsii.Number] = None,
        http_to_user_ip: typing.Optional[jsii.Number] = None,
        load_balancing: typing.Optional[jsii.Number] = None,
        region: typing.Optional[builtins.str] = None,
        rs_type: typing.Optional[jsii.Number] = None,
        source_ips: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::WAF::DomainConfig``.

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
        """
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
    def domain(self) -> builtins.str:
        """
        :Property: domain: Domain name.
        """
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def is_access_product(self) -> jsii.Number:
        """
        :Property:

        isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
        0: none.
        1: expressed.
        """
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return result

    @builtins.property
    def protocols(self) -> builtins.str:
        """
        :Property:

        protocols: The domain supports access protocols, values:
        http: expressed support for the HTTP protocol.
        https: support for HTTPS protocol.
        http, https: supports HTTP, HTTPS protocol.
        """
        result = self._values.get("protocols")
        assert result is not None, "Required property 'protocols' is missing"
        return result

    @builtins.property
    def http_port(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
        Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        """
        result = self._values.get("http_port")
        return result

    @builtins.property
    def https_port(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        """
        result = self._values.get("https_port")
        return result

    @builtins.property
    def https_redirect(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        httpsRedirect: HTTPS is turned forcefully jump the argument:
        0: off (default)
        1: Turn
        Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        """
        result = self._values.get("https_redirect")
        return result

    @builtins.property
    def http_to_user_ip(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
        0: off (default)
        1: Turn
        Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
        """
        result = self._values.get("http_to_user_ip")
        return result

    @builtins.property
    def load_balancing(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        loadBalancing: Back to the source load balancing policy values:
        0: IP Hash way.
        1: represents a polling mode.
        """
        result = self._values.get("load_balancing")
        return result

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        """
        result = self._values.get("region")
        return result

    @builtins.property
    def rs_type(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        rsType: Back to the source address type the domain name values:
        0: back to the source to IP.
        1: Indicates the domain name back to the source.
        """
        result = self._values.get("rs_type")
        return result

    @builtins.property
    def source_ips(self) -> typing.Optional[builtins.str]:
        """
        :Property: sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
        """
        result = self._values.get("source_ips")
        return result

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
        domain_name: builtins.str,
        instance_id: builtins.str,
        is_access_product: builtins.str,
        source_ips: typing.List[builtins.str],
        cluster_type: typing.Optional[builtins.str] = None,
        connection_time: typing.Optional[jsii.Number] = None,
        http2_port: typing.Optional[typing.List[builtins.str]] = None,
        http_port: typing.Optional[typing.List[builtins.str]] = None,
        https_port: typing.Optional[typing.List[builtins.str]] = None,
        https_redirect: typing.Optional[builtins.str] = None,
        http_to_user_ip: typing.Optional[builtins.str] = None,
        load_balancing: typing.Optional[builtins.str] = None,
        log_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosDomain.LogHeadersProperty", ros_cdk_core.IResolvable]]]] = None,
        read_time: typing.Optional[jsii.Number] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        write_time: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::WAF::Domain``.

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
        """
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
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Domain name
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: Instance id
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def is_access_product(self) -> builtins.str:
        """
        :Property: isAccessProduct: Is there a seven-layer agency before WAF
        """
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return result

    @builtins.property
    def source_ips(self) -> typing.List[builtins.str]:
        """
        :Property: sourceIps: Back to source IP configuration
        """
        result = self._values.get("source_ips")
        assert result is not None, "Required property 'source_ips' is missing"
        return result

    @builtins.property
    def cluster_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterType: Cluster type
        """
        result = self._values.get("cluster_type")
        return result

    @builtins.property
    def connection_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: connectionTime: Connection timeout
        """
        result = self._values.get("connection_time")
        return result

    @builtins.property
    def http2_port(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: http2Port: Http2 port configuration
        """
        result = self._values.get("http2_port")
        return result

    @builtins.property
    def http_port(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: httpPort: Http port configuration
        """
        result = self._values.get("http_port")
        return result

    @builtins.property
    def https_port(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: httpsPort: Https port configuration
        """
        result = self._values.get("https_port")
        return result

    @builtins.property
    def https_redirect(self) -> typing.Optional[builtins.str]:
        """
        :Property: httpsRedirect: Https forced redirect configuration
        """
        result = self._values.get("https_redirect")
        return result

    @builtins.property
    def http_to_user_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: httpToUserIp: Http back to source
        """
        result = self._values.get("http_to_user_ip")
        return result

    @builtins.property
    def load_balancing(self) -> typing.Optional[builtins.str]:
        """
        :Property: loadBalancing: Load balancing configuration
        """
        result = self._values.get("load_balancing")
        return result

    @builtins.property
    def log_headers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosDomain.LogHeadersProperty", ros_cdk_core.IResolvable]]]]:
        """
        :Property: logHeaders: Domain traffic tagging
        """
        result = self._values.get("log_headers")
        return result

    @builtins.property
    def read_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: readTime: Read connection timeout period
        """
        result = self._values.get("read_time")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group Id
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def write_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: writeTime: Write connection timeout period
        """
        result = self._values.get("write_time")
        return result

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
    """A ROS resource type:  ``ALIYUN::WAF::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "InstanceProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::WAF::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(Instance, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEndDate")
    def attr_end_date(self) -> typing.Any:
        """
        :Attribute: EndDate: Due date of the instance
        """
        return jsii.get(self, "attrEndDate")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInDebt")
    def attr_in_debt(self) -> typing.Any:
        """
        :Attribute: InDebt: Instance is overdue
        """
        return jsii.get(self, "attrInDebt")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance ID
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRemainDay")
    def attr_remain_day(self) -> typing.Any:
        """
        :Attribute: RemainDay: Number of available days for WAF Trial version
        """
        return jsii.get(self, "attrRemainDay")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSubscriptionType")
    def attr_subscription_type(self) -> typing.Any:
        """
        :Attribute: SubscriptionType: Subscription type of the instance
        """
        return jsii.get(self, "attrSubscriptionType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTrial")
    def attr_trial(self) -> typing.Any:
        """
        :Attribute: Trial: Trial version
        """
        return jsii.get(self, "attrTrial")


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
        big_screen: builtins.str,
        exclusive_ip_package: builtins.str,
        ext_bandwidth: builtins.str,
        ext_domain_package: builtins.str,
        log_storage: builtins.str,
        log_time: builtins.str,
        package_code: builtins.str,
        prefessional_service: builtins.str,
        subscription_type: builtins.str,
        waf_log: builtins.str,
        period: typing.Optional[builtins.str] = None,
        renewal_status: typing.Optional[builtins.str] = None,
        renew_period: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::WAF::Instance``.

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
        """
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
    def big_screen(self) -> builtins.str:
        """
        :Property: bigScreen:
        """
        result = self._values.get("big_screen")
        assert result is not None, "Required property 'big_screen' is missing"
        return result

    @builtins.property
    def exclusive_ip_package(self) -> builtins.str:
        """
        :Property: exclusiveIpPackage:
        """
        result = self._values.get("exclusive_ip_package")
        assert result is not None, "Required property 'exclusive_ip_package' is missing"
        return result

    @builtins.property
    def ext_bandwidth(self) -> builtins.str:
        """
        :Property: extBandwidth:
        """
        result = self._values.get("ext_bandwidth")
        assert result is not None, "Required property 'ext_bandwidth' is missing"
        return result

    @builtins.property
    def ext_domain_package(self) -> builtins.str:
        """
        :Property: extDomainPackage:
        """
        result = self._values.get("ext_domain_package")
        assert result is not None, "Required property 'ext_domain_package' is missing"
        return result

    @builtins.property
    def log_storage(self) -> builtins.str:
        """
        :Property: logStorage:
        """
        result = self._values.get("log_storage")
        assert result is not None, "Required property 'log_storage' is missing"
        return result

    @builtins.property
    def log_time(self) -> builtins.str:
        """
        :Property: logTime:
        """
        result = self._values.get("log_time")
        assert result is not None, "Required property 'log_time' is missing"
        return result

    @builtins.property
    def package_code(self) -> builtins.str:
        """
        :Property: packageCode:
        """
        result = self._values.get("package_code")
        assert result is not None, "Required property 'package_code' is missing"
        return result

    @builtins.property
    def prefessional_service(self) -> builtins.str:
        """
        :Property: prefessionalService:
        """
        result = self._values.get("prefessional_service")
        assert result is not None, "Required property 'prefessional_service' is missing"
        return result

    @builtins.property
    def subscription_type(self) -> builtins.str:
        """
        :Property: subscriptionType: Subscription type of the instance
        """
        result = self._values.get("subscription_type")
        assert result is not None, "Required property 'subscription_type' is missing"
        return result

    @builtins.property
    def waf_log(self) -> builtins.str:
        """
        :Property: wafLog:
        """
        result = self._values.get("waf_log")
        assert result is not None, "Required property 'waf_log' is missing"
        return result

    @builtins.property
    def period(self) -> typing.Optional[builtins.str]:
        """
        :Property: period:
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def renewal_status(self) -> typing.Optional[builtins.str]:
        """
        :Property: renewalStatus:
        """
        result = self._values.get("renewal_status")
        return result

    @builtins.property
    def renew_period(self) -> typing.Optional[builtins.str]:
        """
        :Property: renewPeriod:
        """
        result = self._values.get("renew_period")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "InstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosAclRule(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosAclRule",
):
    """A ROS template type:  ``ALIYUN::WAF::AclRule``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosAclRuleProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::WAF::AclRule``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosAclRule, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="domain")
    def domain(self) -> builtins.str:
        """
        :Property: domain: Domain name.
        """
        return jsii.get(self, "domain")

    @domain.setter # type: ignore
    def domain(self, value: builtins.str) -> None:
        jsii.set(self, "domain", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rules")
    def rules(self) -> builtins.str:
        """
        :Property: rules: Detailed information of precise access control rules, expressed in JSON format strings.
        """
        return jsii.get(self, "rules")

    @rules.setter # type: ignore
    def rules(self, value: builtins.str) -> None:
        jsii.set(self, "rules", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="region")
    def region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        """
        return jsii.get(self, "region")

    @region.setter # type: ignore
    def region(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "region", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="ruleId")
    def rule_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ruleId: Precise access control rule ID
        """
        return jsii.get(self, "ruleId")

    @rule_id.setter # type: ignore
    def rule_id(self, value: typing.Optional[jsii.Number]) -> None:
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
        domain: builtins.str,
        instance_id: builtins.str,
        rules: builtins.str,
        region: typing.Optional[builtins.str] = None,
        rule_id: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::WAF::AclRule``.

        :param domain: 
        :param instance_id: 
        :param rules: 
        :param region: 
        :param rule_id: 
        """
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
    def domain(self) -> builtins.str:
        """
        :Property: domain: Domain name.
        """
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def rules(self) -> builtins.str:
        """
        :Property: rules: Detailed information of precise access control rules, expressed in JSON format strings.
        """
        result = self._values.get("rules")
        assert result is not None, "Required property 'rules' is missing"
        return result

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        """
        result = self._values.get("region")
        return result

    @builtins.property
    def rule_id(self) -> typing.Optional[jsii.Number]:
        """
        :Property: ruleId: Precise access control rule ID
        """
        result = self._values.get("rule_id")
        return result

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
    """A ROS template type:  ``ALIYUN::WAF::Domain``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::WAF::Domain``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDomain, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrClusterType")
    def attr_cluster_type(self) -> typing.Any:
        """
        :Attribute: ClusterType: Cluster type
        """
        return jsii.get(self, "attrClusterType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> typing.Any:
        """
        :Attribute: Cname: CNAME assigned by WAF instance
        """
        return jsii.get(self, "attrCname")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrDomainName")
    def attr_domain_name(self) -> typing.Any:
        """
        :Attribute: DomainName: Domain name
        """
        return jsii.get(self, "attrDomainName")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttp2Port")
    def attr_http2_port(self) -> typing.Any:
        """
        :Attribute: Http2Port: Http2 port configuration
        """
        return jsii.get(self, "attrHttp2Port")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpPort")
    def attr_http_port(self) -> typing.Any:
        """
        :Attribute: HttpPort: Http port configuration
        """
        return jsii.get(self, "attrHttpPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpsPort")
    def attr_https_port(self) -> typing.Any:
        """
        :Attribute: HttpsPort: Https port configuration
        """
        return jsii.get(self, "attrHttpsPort")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpsRedirect")
    def attr_https_redirect(self) -> typing.Any:
        """
        :Attribute: HttpsRedirect: Https forced redirect configuration
        """
        return jsii.get(self, "attrHttpsRedirect")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrHttpToUserIp")
    def attr_http_to_user_ip(self) -> typing.Any:
        """
        :Attribute: HttpToUserIp: Http back to source
        """
        return jsii.get(self, "attrHttpToUserIp")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance id
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrIsAccessProduct")
    def attr_is_access_product(self) -> typing.Any:
        """
        :Attribute: IsAccessProduct: Is there a seven-layer agency before WAF
        """
        return jsii.get(self, "attrIsAccessProduct")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLoadBalancing")
    def attr_load_balancing(self) -> typing.Any:
        """
        :Attribute: LoadBalancing: Load balancing configuration
        """
        return jsii.get(self, "attrLoadBalancing")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrLogHeaders")
    def attr_log_headers(self) -> typing.Any:
        """
        :Attribute: LogHeaders: Domain traffic tagging
        """
        return jsii.get(self, "attrLogHeaders")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> typing.Any:
        """
        :Attribute: ResourceGroupId: Resource group Id
        """
        return jsii.get(self, "attrResourceGroupId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSourceIps")
    def attr_source_ips(self) -> typing.Any:
        """
        :Attribute: SourceIps: Back to source IP configuration
        """
        return jsii.get(self, "attrSourceIps")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrVersion")
    def attr_version(self) -> typing.Any:
        """
        :Attribute: Version: Optimistic lock version
        """
        return jsii.get(self, "attrVersion")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="domainName")
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Domain name
        """
        return jsii.get(self, "domainName")

    @domain_name.setter # type: ignore
    def domain_name(self, value: builtins.str) -> None:
        jsii.set(self, "domainName", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: Instance id
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="isAccessProduct")
    def is_access_product(self) -> builtins.str:
        """
        :Property: isAccessProduct: Is there a seven-layer agency before WAF
        """
        return jsii.get(self, "isAccessProduct")

    @is_access_product.setter # type: ignore
    def is_access_product(self, value: builtins.str) -> None:
        jsii.set(self, "isAccessProduct", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceIps")
    def source_ips(self) -> typing.List[builtins.str]:
        """
        :Property: sourceIps: Back to source IP configuration
        """
        return jsii.get(self, "sourceIps")

    @source_ips.setter # type: ignore
    def source_ips(self, value: typing.List[builtins.str]) -> None:
        jsii.set(self, "sourceIps", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="clusterType")
    def cluster_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterType: Cluster type
        """
        return jsii.get(self, "clusterType")

    @cluster_type.setter # type: ignore
    def cluster_type(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "clusterType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="connectionTime")
    def connection_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: connectionTime: Connection timeout
        """
        return jsii.get(self, "connectionTime")

    @connection_time.setter # type: ignore
    def connection_time(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "connectionTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="http2Port")
    def http2_port(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: http2Port: Http2 port configuration
        """
        return jsii.get(self, "http2Port")

    @http2_port.setter # type: ignore
    def http2_port(self, value: typing.Optional[typing.List[builtins.str]]) -> None:
        jsii.set(self, "http2Port", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="httpPort")
    def http_port(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: httpPort: Http port configuration
        """
        return jsii.get(self, "httpPort")

    @http_port.setter # type: ignore
    def http_port(self, value: typing.Optional[typing.List[builtins.str]]) -> None:
        jsii.set(self, "httpPort", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="httpsPort")
    def https_port(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: httpsPort: Https port configuration
        """
        return jsii.get(self, "httpsPort")

    @https_port.setter # type: ignore
    def https_port(self, value: typing.Optional[typing.List[builtins.str]]) -> None:
        jsii.set(self, "httpsPort", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="httpsRedirect")
    def https_redirect(self) -> typing.Optional[builtins.str]:
        """
        :Property: httpsRedirect: Https forced redirect configuration
        """
        return jsii.get(self, "httpsRedirect")

    @https_redirect.setter # type: ignore
    def https_redirect(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "httpsRedirect", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="httpToUserIp")
    def http_to_user_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: httpToUserIp: Http back to source
        """
        return jsii.get(self, "httpToUserIp")

    @http_to_user_ip.setter # type: ignore
    def http_to_user_ip(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "httpToUserIp", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="loadBalancing")
    def load_balancing(self) -> typing.Optional[builtins.str]:
        """
        :Property: loadBalancing: Load balancing configuration
        """
        return jsii.get(self, "loadBalancing")

    @load_balancing.setter # type: ignore
    def load_balancing(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "loadBalancing", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="logHeaders")
    def log_headers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosDomain.LogHeadersProperty", ros_cdk_core.IResolvable]]]]:
        """
        :Property: logHeaders: Domain traffic tagging
        """
        return jsii.get(self, "logHeaders")

    @log_headers.setter # type: ignore
    def log_headers(
        self,
        value: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union["RosDomain.LogHeadersProperty", ros_cdk_core.IResolvable]]]],
    ) -> None:
        jsii.set(self, "logHeaders", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="readTime")
    def read_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: readTime: Read connection timeout period
        """
        return jsii.get(self, "readTime")

    @read_time.setter # type: ignore
    def read_time(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "readTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="resourceGroupId")
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group Id
        """
        return jsii.get(self, "resourceGroupId")

    @resource_group_id.setter # type: ignore
    def resource_group_id(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "resourceGroupId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="writeTime")
    def write_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: writeTime: Write connection timeout period
        """
        return jsii.get(self, "writeTime")

    @write_time.setter # type: ignore
    def write_time(self, value: typing.Optional[jsii.Number]) -> None:
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
            k: typing.Optional[builtins.str] = None,
            v: typing.Optional[builtins.str] = None,
        ) -> None:
            """
            :param k: 
            :param v: 
            """
            self._values: typing.Dict[str, typing.Any] = {}
            if k is not None:
                self._values["k"] = k
            if v is not None:
                self._values["v"] = v

        @builtins.property
        def k(self) -> typing.Optional[builtins.str]:
            """
            :Property: k: The field name of the traffic tag of the domain name
            """
            result = self._values.get("k")
            return result

        @builtins.property
        def v(self) -> typing.Optional[builtins.str]:
            """
            :Property: v: The value of the traffic tag of the domain name
            """
            result = self._values.get("v")
            return result

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
    """A ROS template type:  ``ALIYUN::WAF::DomainConfig``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosDomainConfigProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::WAF::DomainConfig``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosDomainConfig, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrCname")
    def attr_cname(self) -> typing.Any:
        """
        :Attribute: Cname: CNAME assigned by WAF instance.
        """
        return jsii.get(self, "attrCname")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrProtocolType")
    def attr_protocol_type(self) -> typing.Any:
        """
        :Attribute: ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
        """
        return jsii.get(self, "attrProtocolType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="domain")
    def domain(self) -> builtins.str:
        """
        :Property: domain: Domain name.
        """
        return jsii.get(self, "domain")

    @domain.setter # type: ignore
    def domain(self, value: builtins.str) -> None:
        jsii.set(self, "domain", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="isAccessProduct")
    def is_access_product(self) -> jsii.Number:
        """
        :Property:

        isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
        0: none.
        1: expressed.
        """
        return jsii.get(self, "isAccessProduct")

    @is_access_product.setter # type: ignore
    def is_access_product(self, value: jsii.Number) -> None:
        jsii.set(self, "isAccessProduct", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="protocols")
    def protocols(self) -> builtins.str:
        """
        :Property:

        protocols: The domain supports access protocols, values:
        http: expressed support for the HTTP protocol.
        https: support for HTTPS protocol.
        http, https: supports HTTP, HTTPS protocol.
        """
        return jsii.get(self, "protocols")

    @protocols.setter # type: ignore
    def protocols(self, value: builtins.str) -> None:
        jsii.set(self, "protocols", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="httpPort")
    def http_port(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
        Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        """
        return jsii.get(self, "httpPort")

    @http_port.setter # type: ignore
    def http_port(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "httpPort", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="httpsPort")
    def https_port(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        """
        return jsii.get(self, "httpsPort")

    @https_port.setter # type: ignore
    def https_port(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "httpsPort", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="httpsRedirect")
    def https_redirect(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        httpsRedirect: HTTPS is turned forcefully jump the argument:
        0: off (default)
        1: Turn
        Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        """
        return jsii.get(self, "httpsRedirect")

    @https_redirect.setter # type: ignore
    def https_redirect(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "httpsRedirect", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="httpToUserIp")
    def http_to_user_ip(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
        0: off (default)
        1: Turn
        Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
        """
        return jsii.get(self, "httpToUserIp")

    @http_to_user_ip.setter # type: ignore
    def http_to_user_ip(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "httpToUserIp", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="loadBalancing")
    def load_balancing(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        loadBalancing: Back to the source load balancing policy values:
        0: IP Hash way.
        1: represents a polling mode.
        """
        return jsii.get(self, "loadBalancing")

    @load_balancing.setter # type: ignore
    def load_balancing(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "loadBalancing", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="region")
    def region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        """
        return jsii.get(self, "region")

    @region.setter # type: ignore
    def region(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "region", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rsType")
    def rs_type(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        rsType: Back to the source address type the domain name values:
        0: back to the source to IP.
        1: Indicates the domain name back to the source.
        """
        return jsii.get(self, "rsType")

    @rs_type.setter # type: ignore
    def rs_type(self, value: typing.Optional[jsii.Number]) -> None:
        jsii.set(self, "rsType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="sourceIps")
    def source_ips(self) -> typing.Optional[builtins.str]:
        """
        :Property: sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
        """
        return jsii.get(self, "sourceIps")

    @source_ips.setter # type: ignore
    def source_ips(self, value: typing.Optional[builtins.str]) -> None:
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
        domain: builtins.str,
        instance_id: builtins.str,
        is_access_product: jsii.Number,
        protocols: builtins.str,
        http_port: typing.Optional[builtins.str] = None,
        https_port: typing.Optional[builtins.str] = None,
        https_redirect: typing.Optional[jsii.Number] = None,
        http_to_user_ip: typing.Optional[jsii.Number] = None,
        load_balancing: typing.Optional[jsii.Number] = None,
        region: typing.Optional[builtins.str] = None,
        rs_type: typing.Optional[jsii.Number] = None,
        source_ips: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::WAF::DomainConfig``.

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
        """
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
    def domain(self) -> builtins.str:
        """
        :Property: domain: Domain name.
        """
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def is_access_product(self) -> jsii.Number:
        """
        :Property:

        isAccessProduct: The domain before WAF is configured with seven agents (eg, high defense, CDN, etc.), the value of:
        0: none.
        1: expressed.
        """
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return result

    @builtins.property
    def protocols(self) -> builtins.str:
        """
        :Property:

        protocols: The domain supports access protocols, values:
        http: expressed support for the HTTP protocol.
        https: support for HTTPS protocol.
        http, https: supports HTTP, HTTPS protocol.
        """
        result = self._values.get("protocols")
        assert result is not None, "Required property 'protocols' is missing"
        return result

    @builtins.property
    def http_port(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        httpPort: HTTP protocol configuration port. When specifying a plurality of HTTP port "," separated. Example values: [80].
        Configure the HTTP protocol, this parameter is required. The default value is 80. HttpPort HttpsPort with at least two parameters need to fill a request.
        """
        result = self._values.get("http_port")
        return result

    @builtins.property
    def https_port(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        httpsPort: HTTPS protocol configuration port. When specifying a plurality HTTPS port, using the "," separated. Example values: [443].
        Configure the protocol is HTTPS, this parameter is required. The default value is 443. HttpPort HttpsPort with at least two parameters need to fill a request.
        """
        result = self._values.get("https_port")
        return result

    @builtins.property
    def https_redirect(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        httpsRedirect: HTTPS is turned forcefully jump the argument:
        0: off (default)
        1: Turn
        Description required to complete the request parameters using only HTTPS access protocol. After opening force will show a jump HTTP request is HTTPS, a default jump to 443.
        """
        result = self._values.get("https_redirect")
        return result

    @builtins.property
    def http_to_user_ip(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        httpToUserIp: Whether to open HTTPS access request is forwarded back to the source station via the HTTP protocol, the value of:
        0: off (default)
        1: Turn
        Note If your site does not support HTTPS back to the source, open source HTTP return (default back to the source port is port 80) function key, can be realized by WAF HTTPS access.
        """
        result = self._values.get("http_to_user_ip")
        return result

    @builtins.property
    def load_balancing(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        loadBalancing: Back to the source load balancing policy values:
        0: IP Hash way.
        1: represents a polling mode.
        """
        result = self._values.get("load_balancing")
        return result

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        """
        result = self._values.get("region")
        return result

    @builtins.property
    def rs_type(self) -> typing.Optional[jsii.Number]:
        """
        :Property:

        rsType: Back to the source address type the domain name values:
        0: back to the source to IP.
        1: Indicates the domain name back to the source.
        """
        result = self._values.get("rs_type")
        return result

    @builtins.property
    def source_ips(self) -> typing.Optional[builtins.str]:
        """
        :Property: sourceIps: Source station IP, supports a plurality of specified IP. Example values: [ "1.1.1.1"].
        """
        result = self._values.get("source_ips")
        return result

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
        domain_name: builtins.str,
        instance_id: builtins.str,
        is_access_product: builtins.str,
        source_ips: typing.List[builtins.str],
        cluster_type: typing.Optional[builtins.str] = None,
        connection_time: typing.Optional[jsii.Number] = None,
        http2_port: typing.Optional[typing.List[builtins.str]] = None,
        http_port: typing.Optional[typing.List[builtins.str]] = None,
        https_port: typing.Optional[typing.List[builtins.str]] = None,
        https_redirect: typing.Optional[builtins.str] = None,
        http_to_user_ip: typing.Optional[builtins.str] = None,
        load_balancing: typing.Optional[builtins.str] = None,
        log_headers: typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosDomain.LogHeadersProperty, ros_cdk_core.IResolvable]]]] = None,
        read_time: typing.Optional[jsii.Number] = None,
        resource_group_id: typing.Optional[builtins.str] = None,
        write_time: typing.Optional[jsii.Number] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::WAF::Domain``.

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
        """
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
    def domain_name(self) -> builtins.str:
        """
        :Property: domainName: Domain name
        """
        result = self._values.get("domain_name")
        assert result is not None, "Required property 'domain_name' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property: instanceId: Instance id
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def is_access_product(self) -> builtins.str:
        """
        :Property: isAccessProduct: Is there a seven-layer agency before WAF
        """
        result = self._values.get("is_access_product")
        assert result is not None, "Required property 'is_access_product' is missing"
        return result

    @builtins.property
    def source_ips(self) -> typing.List[builtins.str]:
        """
        :Property: sourceIps: Back to source IP configuration
        """
        result = self._values.get("source_ips")
        assert result is not None, "Required property 'source_ips' is missing"
        return result

    @builtins.property
    def cluster_type(self) -> typing.Optional[builtins.str]:
        """
        :Property: clusterType: Cluster type
        """
        result = self._values.get("cluster_type")
        return result

    @builtins.property
    def connection_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: connectionTime: Connection timeout
        """
        result = self._values.get("connection_time")
        return result

    @builtins.property
    def http2_port(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: http2Port: Http2 port configuration
        """
        result = self._values.get("http2_port")
        return result

    @builtins.property
    def http_port(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: httpPort: Http port configuration
        """
        result = self._values.get("http_port")
        return result

    @builtins.property
    def https_port(self) -> typing.Optional[typing.List[builtins.str]]:
        """
        :Property: httpsPort: Https port configuration
        """
        result = self._values.get("https_port")
        return result

    @builtins.property
    def https_redirect(self) -> typing.Optional[builtins.str]:
        """
        :Property: httpsRedirect: Https forced redirect configuration
        """
        result = self._values.get("https_redirect")
        return result

    @builtins.property
    def http_to_user_ip(self) -> typing.Optional[builtins.str]:
        """
        :Property: httpToUserIp: Http back to source
        """
        result = self._values.get("http_to_user_ip")
        return result

    @builtins.property
    def load_balancing(self) -> typing.Optional[builtins.str]:
        """
        :Property: loadBalancing: Load balancing configuration
        """
        result = self._values.get("load_balancing")
        return result

    @builtins.property
    def log_headers(
        self,
    ) -> typing.Optional[typing.Union[ros_cdk_core.IResolvable, typing.List[typing.Union[RosDomain.LogHeadersProperty, ros_cdk_core.IResolvable]]]]:
        """
        :Property: logHeaders: Domain traffic tagging
        """
        result = self._values.get("log_headers")
        return result

    @builtins.property
    def read_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: readTime: Read connection timeout period
        """
        result = self._values.get("read_time")
        return result

    @builtins.property
    def resource_group_id(self) -> typing.Optional[builtins.str]:
        """
        :Property: resourceGroupId: Resource group Id
        """
        result = self._values.get("resource_group_id")
        return result

    @builtins.property
    def write_time(self) -> typing.Optional[jsii.Number]:
        """
        :Property: writeTime: Write connection timeout period
        """
        result = self._values.get("write_time")
        return result

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
    """A ROS template type:  ``ALIYUN::WAF::Instance``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosInstanceProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::WAF::Instance``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosInstance, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrEndDate")
    def attr_end_date(self) -> typing.Any:
        """
        :Attribute: EndDate: Due date of the instance
        """
        return jsii.get(self, "attrEndDate")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInDebt")
    def attr_in_debt(self) -> typing.Any:
        """
        :Attribute: InDebt: Instance is overdue
        """
        return jsii.get(self, "attrInDebt")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrInstanceId")
    def attr_instance_id(self) -> typing.Any:
        """
        :Attribute: InstanceId: Instance ID
        """
        return jsii.get(self, "attrInstanceId")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrRemainDay")
    def attr_remain_day(self) -> typing.Any:
        """
        :Attribute: RemainDay: Number of available days for WAF Trial version
        """
        return jsii.get(self, "attrRemainDay")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrSubscriptionType")
    def attr_subscription_type(self) -> typing.Any:
        """
        :Attribute: SubscriptionType: Subscription type of the instance
        """
        return jsii.get(self, "attrSubscriptionType")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="attrTrial")
    def attr_trial(self) -> typing.Any:
        """
        :Attribute: Trial: Trial version
        """
        return jsii.get(self, "attrTrial")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="bigScreen")
    def big_screen(self) -> builtins.str:
        """
        :Property: bigScreen:
        """
        return jsii.get(self, "bigScreen")

    @big_screen.setter # type: ignore
    def big_screen(self, value: builtins.str) -> None:
        jsii.set(self, "bigScreen", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="exclusiveIpPackage")
    def exclusive_ip_package(self) -> builtins.str:
        """
        :Property: exclusiveIpPackage:
        """
        return jsii.get(self, "exclusiveIpPackage")

    @exclusive_ip_package.setter # type: ignore
    def exclusive_ip_package(self, value: builtins.str) -> None:
        jsii.set(self, "exclusiveIpPackage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="extBandwidth")
    def ext_bandwidth(self) -> builtins.str:
        """
        :Property: extBandwidth:
        """
        return jsii.get(self, "extBandwidth")

    @ext_bandwidth.setter # type: ignore
    def ext_bandwidth(self, value: builtins.str) -> None:
        jsii.set(self, "extBandwidth", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="extDomainPackage")
    def ext_domain_package(self) -> builtins.str:
        """
        :Property: extDomainPackage:
        """
        return jsii.get(self, "extDomainPackage")

    @ext_domain_package.setter # type: ignore
    def ext_domain_package(self, value: builtins.str) -> None:
        jsii.set(self, "extDomainPackage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="logStorage")
    def log_storage(self) -> builtins.str:
        """
        :Property: logStorage:
        """
        return jsii.get(self, "logStorage")

    @log_storage.setter # type: ignore
    def log_storage(self, value: builtins.str) -> None:
        jsii.set(self, "logStorage", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="logTime")
    def log_time(self) -> builtins.str:
        """
        :Property: logTime:
        """
        return jsii.get(self, "logTime")

    @log_time.setter # type: ignore
    def log_time(self, value: builtins.str) -> None:
        jsii.set(self, "logTime", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="packageCode")
    def package_code(self) -> builtins.str:
        """
        :Property: packageCode:
        """
        return jsii.get(self, "packageCode")

    @package_code.setter # type: ignore
    def package_code(self, value: builtins.str) -> None:
        jsii.set(self, "packageCode", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="prefessionalService")
    def prefessional_service(self) -> builtins.str:
        """
        :Property: prefessionalService:
        """
        return jsii.get(self, "prefessionalService")

    @prefessional_service.setter # type: ignore
    def prefessional_service(self, value: builtins.str) -> None:
        jsii.set(self, "prefessionalService", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="subscriptionType")
    def subscription_type(self) -> builtins.str:
        """
        :Property: subscriptionType: Subscription type of the instance
        """
        return jsii.get(self, "subscriptionType")

    @subscription_type.setter # type: ignore
    def subscription_type(self, value: builtins.str) -> None:
        jsii.set(self, "subscriptionType", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="wafLog")
    def waf_log(self) -> builtins.str:
        """
        :Property: wafLog:
        """
        return jsii.get(self, "wafLog")

    @waf_log.setter # type: ignore
    def waf_log(self, value: builtins.str) -> None:
        jsii.set(self, "wafLog", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="period")
    def period(self) -> typing.Optional[builtins.str]:
        """
        :Property: period:
        """
        return jsii.get(self, "period")

    @period.setter # type: ignore
    def period(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "period", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="renewalStatus")
    def renewal_status(self) -> typing.Optional[builtins.str]:
        """
        :Property: renewalStatus:
        """
        return jsii.get(self, "renewalStatus")

    @renewal_status.setter # type: ignore
    def renewal_status(self, value: typing.Optional[builtins.str]) -> None:
        jsii.set(self, "renewalStatus", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="renewPeriod")
    def renew_period(self) -> typing.Optional[builtins.str]:
        """
        :Property: renewPeriod:
        """
        return jsii.get(self, "renewPeriod")

    @renew_period.setter # type: ignore
    def renew_period(self, value: typing.Optional[builtins.str]) -> None:
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
        big_screen: builtins.str,
        exclusive_ip_package: builtins.str,
        ext_bandwidth: builtins.str,
        ext_domain_package: builtins.str,
        log_storage: builtins.str,
        log_time: builtins.str,
        package_code: builtins.str,
        prefessional_service: builtins.str,
        subscription_type: builtins.str,
        waf_log: builtins.str,
        period: typing.Optional[builtins.str] = None,
        renewal_status: typing.Optional[builtins.str] = None,
        renew_period: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::WAF::Instance``.

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
        """
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
    def big_screen(self) -> builtins.str:
        """
        :Property: bigScreen:
        """
        result = self._values.get("big_screen")
        assert result is not None, "Required property 'big_screen' is missing"
        return result

    @builtins.property
    def exclusive_ip_package(self) -> builtins.str:
        """
        :Property: exclusiveIpPackage:
        """
        result = self._values.get("exclusive_ip_package")
        assert result is not None, "Required property 'exclusive_ip_package' is missing"
        return result

    @builtins.property
    def ext_bandwidth(self) -> builtins.str:
        """
        :Property: extBandwidth:
        """
        result = self._values.get("ext_bandwidth")
        assert result is not None, "Required property 'ext_bandwidth' is missing"
        return result

    @builtins.property
    def ext_domain_package(self) -> builtins.str:
        """
        :Property: extDomainPackage:
        """
        result = self._values.get("ext_domain_package")
        assert result is not None, "Required property 'ext_domain_package' is missing"
        return result

    @builtins.property
    def log_storage(self) -> builtins.str:
        """
        :Property: logStorage:
        """
        result = self._values.get("log_storage")
        assert result is not None, "Required property 'log_storage' is missing"
        return result

    @builtins.property
    def log_time(self) -> builtins.str:
        """
        :Property: logTime:
        """
        result = self._values.get("log_time")
        assert result is not None, "Required property 'log_time' is missing"
        return result

    @builtins.property
    def package_code(self) -> builtins.str:
        """
        :Property: packageCode:
        """
        result = self._values.get("package_code")
        assert result is not None, "Required property 'package_code' is missing"
        return result

    @builtins.property
    def prefessional_service(self) -> builtins.str:
        """
        :Property: prefessionalService:
        """
        result = self._values.get("prefessional_service")
        assert result is not None, "Required property 'prefessional_service' is missing"
        return result

    @builtins.property
    def subscription_type(self) -> builtins.str:
        """
        :Property: subscriptionType: Subscription type of the instance
        """
        result = self._values.get("subscription_type")
        assert result is not None, "Required property 'subscription_type' is missing"
        return result

    @builtins.property
    def waf_log(self) -> builtins.str:
        """
        :Property: wafLog:
        """
        result = self._values.get("waf_log")
        assert result is not None, "Required property 'waf_log' is missing"
        return result

    @builtins.property
    def period(self) -> typing.Optional[builtins.str]:
        """
        :Property: period:
        """
        result = self._values.get("period")
        return result

    @builtins.property
    def renewal_status(self) -> typing.Optional[builtins.str]:
        """
        :Property: renewalStatus:
        """
        result = self._values.get("renewal_status")
        return result

    @builtins.property
    def renew_period(self) -> typing.Optional[builtins.str]:
        """
        :Property: renewPeriod:
        """
        result = self._values.get("renew_period")
        return result

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosInstanceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosWafSwitch(
    ros_cdk_core.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-waf.RosWafSwitch",
):
    """A ROS template type:  ``ALIYUN::WAF::WafSwitch``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "RosWafSwitchProps",
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        """Create a new ``ALIYUN::WAF::WafSwitch``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(RosWafSwitch, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        """
        :param props: -
        """
        return jsii.invoke(self, "renderProperties", [props])

    @jsii.python.classproperty # type: ignore
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        """The resource type name for this resource class."""
        return jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return jsii.get(self, "rosProperties")

    @builtins.property # type: ignore
    @jsii.member(jsii_name="domain")
    def domain(self) -> builtins.str:
        """
        :Property: domain: Domain name.
        """
        return jsii.get(self, "domain")

    @domain.setter # type: ignore
    def domain(self, value: builtins.str) -> None:
        jsii.set(self, "domain", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        """A factory method that creates a new instance of this class from an object
containing the properties of this ROS resource."""
        return jsii.get(self, "enableResourcePropertyConstraint")

    @enable_resource_property_constraint.setter # type: ignore
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="instanceId")
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        """
        return jsii.get(self, "instanceId")

    @instance_id.setter # type: ignore
    def instance_id(self, value: builtins.str) -> None:
        jsii.set(self, "instanceId", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="serviceOn")
    def service_on(self) -> jsii.Number:
        """
        :Property:

        serviceOn: Web attack protection switch, the value of:
        0: closed.
        1: indicate on.
        """
        return jsii.get(self, "serviceOn")

    @service_on.setter # type: ignore
    def service_on(self, value: jsii.Number) -> None:
        jsii.set(self, "serviceOn", value)

    @builtins.property # type: ignore
    @jsii.member(jsii_name="region")
    def region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        """
        return jsii.get(self, "region")

    @region.setter # type: ignore
    def region(self, value: typing.Optional[builtins.str]) -> None:
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
        domain: builtins.str,
        instance_id: builtins.str,
        service_on: jsii.Number,
        region: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::WAF::WafSwitch``.

        :param domain: 
        :param instance_id: 
        :param service_on: 
        :param region: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "service_on": service_on,
        }
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def domain(self) -> builtins.str:
        """
        :Property: domain: Domain name.
        """
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def service_on(self) -> jsii.Number:
        """
        :Property:

        serviceOn: Web attack protection switch, the value of:
        0: closed.
        1: indicate on.
        """
        result = self._values.get("service_on")
        assert result is not None, "Required property 'service_on' is missing"
        return result

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        """
        result = self._values.get("region")
        return result

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
    """A ROS resource type:  ``ALIYUN::WAF::WafSwitch``."""

    def __init__(
        self,
        scope: ros_cdk_core.Construct,
        id: builtins.str,
        props: "WafSwitchProps",
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        """Create a new ``ALIYUN::WAF::WafSwitch``.

        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        """
        jsii.create(WafSwitch, self, [scope, id, props, enable_resource_property_constraint])


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
        domain: builtins.str,
        instance_id: builtins.str,
        service_on: jsii.Number,
        region: typing.Optional[builtins.str] = None,
    ) -> None:
        """Properties for defining a ``ALIYUN::WAF::WafSwitch``.

        :param domain: 
        :param instance_id: 
        :param service_on: 
        :param region: 
        """
        self._values: typing.Dict[str, typing.Any] = {
            "domain": domain,
            "instance_id": instance_id,
            "service_on": service_on,
        }
        if region is not None:
            self._values["region"] = region

    @builtins.property
    def domain(self) -> builtins.str:
        """
        :Property: domain: Domain name.
        """
        result = self._values.get("domain")
        assert result is not None, "Required property 'domain' is missing"
        return result

    @builtins.property
    def instance_id(self) -> builtins.str:
        """
        :Property:

        instanceId: WAF instance ID.
        Description Interface You can view your current WAF instance ID by calling DescribePayInfo.
        """
        result = self._values.get("instance_id")
        assert result is not None, "Required property 'instance_id' is missing"
        return result

    @builtins.property
    def service_on(self) -> jsii.Number:
        """
        :Property:

        serviceOn: Web attack protection switch, the value of:
        0: closed.
        1: indicate on.
        """
        result = self._values.get("service_on")
        assert result is not None, "Required property 'service_on' is missing"
        return result

    @builtins.property
    def region(self) -> typing.Optional[builtins.str]:
        """
        :Property:

        region: Examples of areas where the WAF. Value:
        cn: China mainland (default)
        cn-hongkong: China HongKong and other overseas
        """
        result = self._values.get("region")
        return result

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
    "RosAclRule",
    "RosAclRuleProps",
    "RosDomain",
    "RosDomainConfig",
    "RosDomainConfigProps",
    "RosDomainProps",
    "RosInstance",
    "RosInstanceProps",
    "RosWafSwitch",
    "RosWafSwitchProps",
    "WafSwitch",
    "WafSwitchProps",
]

publication.publish()
