using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::DomainExtension`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.DomainExtensionProps")]
    public class DomainExtensionProps : AlibabaCloud.SDK.ROS.CDK.Slb.IDomainExtensionProps
    {
        /// <summary>Property domain: The domain name.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Domain
        {
            get;
            set;
        }

        /// <summary>Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.</summary>
        /// <remarks>
        /// Valid value:
        /// 1-65535
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double ListenerPort
        {
            get;
            set;
        }

        /// <summary>Property loadBalancerId: The ID of Server Load Balancer instance.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LoadBalancerId
        {
            get;
            set;
        }

        /// <summary>Property serverCertificateId: The ID of the certificate corresponding to the domain name.</summary>
        [JsiiProperty(name: "serverCertificateId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServerCertificateId
        {
            get;
            set;
        }
    }
}
