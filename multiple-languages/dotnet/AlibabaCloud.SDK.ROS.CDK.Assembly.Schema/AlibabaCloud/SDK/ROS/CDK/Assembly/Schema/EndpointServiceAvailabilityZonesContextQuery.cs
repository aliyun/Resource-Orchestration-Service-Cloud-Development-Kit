using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Query to endpoint service context provider.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery")]
    public class EndpointServiceAvailabilityZonesContextQuery : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IEndpointServiceAvailabilityZonesContextQuery
    {
        /// <summary>Query account.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}")]
        public string Account
        {
            get;
            set;
        }

        /// <summary>Query region.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
        public string Region
        {
            get;
            set;
        }

        /// <summary>Query service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        public string ServiceName
        {
            get;
            set;
        }
    }
}
