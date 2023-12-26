using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `RosDomainExtension`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDomainExtensionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosDomainExtensionProps")]
    public interface IRosDomainExtensionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domain: The domain name.
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Domain
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        /// 1-65535
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of Server Load Balancer instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serverCertificateId: The ID of the certificate corresponding to the domain name.
        /// </remarks>
        [JsiiProperty(name: "serverCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServerCertificateId
        {
            get;
        }

        /// <summary>Properties for defining a `RosDomainExtension`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-domainextension
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainExtensionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosDomainExtensionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IRosDomainExtensionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domain: The domain name.
            /// </remarks>
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Domain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
            /// 1-65535
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The ID of Server Load Balancer instance.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverCertificateId: The ID of the certificate corresponding to the domain name.
            /// </remarks>
            [JsiiProperty(name: "serverCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerCertificateId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
