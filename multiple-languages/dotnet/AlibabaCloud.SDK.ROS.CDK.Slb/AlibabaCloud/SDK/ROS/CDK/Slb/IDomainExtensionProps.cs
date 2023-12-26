using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `DomainExtension`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDomainExtensionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.DomainExtensionProps")]
    public interface IDomainExtensionProps
    {
        /// <summary>Property domain: The domain name.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Domain
        {
            get;
        }

        /// <summary>Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.</summary>
        /// <remarks>
        /// Valid value:
        /// 1-65535
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerPort
        {
            get;
        }

        /// <summary>Property loadBalancerId: The ID of Server Load Balancer instance.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property serverCertificateId: The ID of the certificate corresponding to the domain name.</summary>
        [JsiiProperty(name: "serverCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServerCertificateId
        {
            get;
        }

        /// <summary>Properties for defining a `DomainExtension`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDomainExtensionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.DomainExtensionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IDomainExtensionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domain: The domain name.</summary>
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Domain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.</summary>
            /// <remarks>
            /// Valid value:
            /// 1-65535
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property loadBalancerId: The ID of Server Load Balancer instance.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serverCertificateId: The ID of the certificate corresponding to the domain name.</summary>
            [JsiiProperty(name: "serverCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerCertificateId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
