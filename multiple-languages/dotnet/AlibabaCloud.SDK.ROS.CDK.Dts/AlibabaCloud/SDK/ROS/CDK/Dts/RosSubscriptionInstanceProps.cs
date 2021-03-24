using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSubscriptionInstanceProps")]
    public class RosSubscriptionInstanceProps : AlibabaCloud.SDK.ROS.CDK.Dts.IRosSubscriptionInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configuration: Subscription configuration.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionInstance.ConfigurationProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Configuration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle. Default: MySQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceEndpointInstanceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SourceEndpointInstanceType
        {
            get;
            set;
        }
    }
}
