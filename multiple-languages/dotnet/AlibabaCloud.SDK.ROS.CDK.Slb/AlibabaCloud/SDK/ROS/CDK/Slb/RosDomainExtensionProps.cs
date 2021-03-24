using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::DomainExtension`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosDomainExtensionProps")]
    public class RosDomainExtensionProps : AlibabaCloud.SDK.ROS.CDK.Slb.IRosDomainExtensionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domain: The domain name.
        /// </remarks>
        [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Domain
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
        /// 1-65535
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double ListenerPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of Server Load Balancer instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LoadBalancerId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serverCertificateId: The ID of the certificate corresponding to the domain name.
        /// </remarks>
        [JsiiProperty(name: "serverCertificateId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServerCertificateId
        {
            get;
            set;
        }
    }
}
