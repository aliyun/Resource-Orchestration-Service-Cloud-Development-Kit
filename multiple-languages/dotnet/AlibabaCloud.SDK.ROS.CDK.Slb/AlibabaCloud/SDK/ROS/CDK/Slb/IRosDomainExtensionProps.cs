using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::DomainExtension`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDomainExtensionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosDomainExtensionProps")]
    public interface IRosDomainExtensionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domain: The domain name.
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}")]
        string Domain
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        /// 1-65535
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}")]
        double ListenerPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of Server Load Balancer instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
        string LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serverCertificateId: The ID of the certificate corresponding to the domain name.
        /// </remarks>
        [JsiiProperty(name: "serverCertificateId", typeJson: "{\"primitive\":\"string\"}")]
        string ServerCertificateId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SLB::DomainExtension`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainExtensionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosDomainExtensionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IRosDomainExtensionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domain: The domain name.
            /// </remarks>
            [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}")]
            public string Domain
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
            /// 1-65535
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}")]
            public double ListenerPort
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The ID of Server Load Balancer instance.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
            public string LoadBalancerId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverCertificateId: The ID of the certificate corresponding to the domain name.
            /// </remarks>
            [JsiiProperty(name: "serverCertificateId", typeJson: "{\"primitive\":\"string\"}")]
            public string ServerCertificateId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
