using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `RosIngress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosIngressProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosIngressProps")]
    public interface IRosIngressProps
    {
        /// <remarks>
        /// <strong>Property</strong>: defaultRule: The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
        /// </remarks>
        [JsiiProperty(name: "defaultRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosIngress.DefaultRuleProperty\"}]}}")]
        object DefaultRule
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The name of the routing rule.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerPort: The listener port of the SLB instance. You must specify a vacant port.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceId: The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation.
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NamespaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: rules: The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
        /// </remarks>
        [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosIngress.RulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Rules
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
        /// </remarks>
        [JsiiProperty(name: "slbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlbId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
        /// If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
        /// </remarks>
        [JsiiProperty(name: "certId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
        /// </remarks>
        [JsiiProperty(name: "certIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertIds
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerProtocol: The protocol that is used to forward requests.
        /// </remarks>
        [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ListenerProtocol
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalanceType: The type of the SLB instance based on the processing capabilities. The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
        /// </remarks>
        [JsiiProperty(name: "loadBalanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoadBalanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosIngress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-ingress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosIngressProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosIngressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.IRosIngressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultRule: The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.
            /// </remarks>
            [JsiiProperty(name: "defaultRule", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosIngress.DefaultRuleProperty\"}]}}")]
            public object DefaultRule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The name of the routing rule.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerPort: The listener port of the SLB instance. You must specify a vacant port.
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceId: The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation.
            /// </remarks>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: rules: The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
            /// </remarks>
            [JsiiProperty(name: "rules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosIngress.RulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Rules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: slbId: The Server Load Balancer (SLB) instance that is used by the routing rule.
            /// </remarks>
            [JsiiProperty(name: "slbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlbId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: certId: The ID of the certificate that is associated with the Classic Load Balancer (CLB) instance.
            /// If LoadBalanceType is set to clb, specify this parameter to configure a certificate for the HTTP listener.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: certIds: The IDs of the certificates that are associated with the Application Load Balancer (ALB) instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? CertIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerProtocol: The protocol that is used to forward requests.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "listenerProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ListenerProtocol
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalanceType: The type of the SLB instance based on the processing capabilities. The instance type can be specified only when you create a routing rule. You cannot change the instance type when you update the routing rule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loadBalanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoadBalanceType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
