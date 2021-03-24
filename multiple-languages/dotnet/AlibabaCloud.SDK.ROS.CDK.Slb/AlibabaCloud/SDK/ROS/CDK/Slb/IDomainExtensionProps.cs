using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::DomainExtension`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainExtensionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.DomainExtensionProps")]
    public interface IDomainExtensionProps
    {
        /// <summary>Property domain: The domain name.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}")]
        string Domain
        {
            get;
        }

        /// <summary>Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.</summary>
        /// <remarks>
        /// Valid value:
        /// 1-65535
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}")]
        double ListenerPort
        {
            get;
        }

        /// <summary>Property loadBalancerId: The ID of Server Load Balancer instance.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
        string LoadBalancerId
        {
            get;
        }

        /// <summary>Property serverCertificateId: The ID of the certificate corresponding to the domain name.</summary>
        [JsiiProperty(name: "serverCertificateId", typeJson: "{\"primitive\":\"string\"}")]
        string ServerCertificateId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SLB::DomainExtension`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomainExtensionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.DomainExtensionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IDomainExtensionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domain: The domain name.</summary>
            [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}")]
            public string Domain
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.</summary>
            /// <remarks>
            /// Valid value:
            /// 1-65535
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}")]
            public double ListenerPort
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property loadBalancerId: The ID of Server Load Balancer instance.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
            public string LoadBalancerId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property serverCertificateId: The ID of the certificate corresponding to the domain name.</summary>
            [JsiiProperty(name: "serverCertificateId", typeJson: "{\"primitive\":\"string\"}")]
            public string ServerCertificateId
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
