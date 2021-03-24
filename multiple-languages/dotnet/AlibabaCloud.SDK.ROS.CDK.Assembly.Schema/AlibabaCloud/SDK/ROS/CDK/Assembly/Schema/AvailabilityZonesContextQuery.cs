using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Query to availability zone context provider.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.AvailabilityZonesContextQuery")]
    public class AvailabilityZonesContextQuery : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAvailabilityZonesContextQuery
    {
        /// <summary>Query account.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Account
        {
            get;
            set;
        }

        /// <summary>Query region.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Region
        {
            get;
            set;
        }
    }
}
