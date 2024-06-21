using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ddospro
{
    /// <summary>Properties for defining a `RosWebRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-webrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWebRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.RosWebRuleProps")]
    public interface IRosWebRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domain: The domain name of the website that you want to add to the instance.
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Domain
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: rsType: The address type of the origin server. Valid values:
        /// 0: IP address
        /// 1: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
        /// </remarks>
        [JsiiProperty(name: "rsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RsType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: rules: The details of the forwarding rule. The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
        /// ProxyRules: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields: ProxyPort: the port number. This field is required and must be an integer; RealServers: the IP address. This field is required and must be a string array.
        /// ProxyType: the protocol type. This field is required and must be a string. Valid values: http, https, websocket, and websockets.
        /// </remarks>
        [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Rules
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: defenseId: The ID of the associated defense. This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
        /// </remarks>
        [JsiiProperty(name: "defenseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefenseId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: httpsExt: The advanced HTTPS settings. This parameter takes effect only when the value of the ProxyType parameter includes https. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
        /// Http2https: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0. If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
        /// Https2http: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0. If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
        /// Http2: specifies whether to turn on Enable HTTP\/2. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP\/2 is turned off. The value 1 indicates that Enable HTTP\/2 is turned on. The default value is 0. After you turn on Enable HTTP\/2, the protocol type is HTTP\/2.
        /// </remarks>
        [JsiiProperty(name: "httpsExt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpsExt
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceIds: An array consisting of the IDs of instances that you want to associate.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosWebRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-webrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWebRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-ddospro.RosWebRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ddospro.IRosWebRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domain: The domain name of the website that you want to add to the instance.
            /// </remarks>
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Domain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: rsType: The address type of the origin server. Valid values:
            /// 0: IP address
            /// 1: domain name The domain name of the origin server is returned if you deploy proxies, such as Web Application Firewall (WAF), between the origin server and the instance. In this case, the address of the proxy, such as the CNAME provided by WAF, is returned.
            /// </remarks>
            [JsiiProperty(name: "rsType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RsType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: rules: The details of the forwarding rule. The value is a string that consists of JSON arrays. Each element in a JSON array is a JSON struct that contains the following fields:
            /// ProxyRules: the information about the origin server. The information includes the port number and IP address. This field is required and must be a JSON array. Each element in a JSON array is a JSON struct that contains the following fields: ProxyPort: the port number. This field is required and must be an integer; RealServers: the IP address. This field is required and must be a string array.
            /// ProxyType: the protocol type. This field is required and must be a string. Valid values: http, https, websocket, and websockets.
            /// </remarks>
            [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Rules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: defenseId: The ID of the associated defense. This parameter applies to scenarios in which other cloud services, such as Object Storage Service (OSS), are integrated with Anti-DDoS Pro or Anti-DDoS Premium.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defenseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefenseId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: httpsExt: The advanced HTTPS settings. This parameter takes effect only when the value of the ProxyType parameter includes https. The value is a string that consists of a JSON struct. The JSON struct contains the following fields:
            /// Http2https: specifies whether to turn on Enforce HTTPS Routing. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enforce HTTPS Routing is turned off. The value 1 indicates that Enforce HTTPS Routing is turned on. The default value is 0. If your website supports both HTTP and HTTPS, this feature meets your business requirements. If you enable this feature, all HTTP requests to access the website are redirected to HTTPS requests on the standard port 443.
            /// Https2http: specifies whether to turn on Enable HTTP. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP is turned off. The value 1 indicates that Enable HTTP is turned on. The default value is 0. If your website does not support HTTPS, this feature meets your business requirements If this feature is enabled, all HTTPS requests are redirected to HTTP requests and forwarded to origin servers. This feature can redirect WebSockets requests to WebSocket requests. Requests are redirected over the standard port 80.
            /// Http2: specifies whether to turn on Enable HTTP\/2. This field is optional and must be an integer. Valid values: 0 and 1. The value 0 indicates that Enable HTTP\/2 is turned off. The value 1 indicates that Enable HTTP\/2 is turned on. The default value is 0. After you turn on Enable HTTP\/2, the protocol type is HTTP\/2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpsExt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HttpsExt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceIds: An array consisting of the IDs of instances that you want to associate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? InstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
