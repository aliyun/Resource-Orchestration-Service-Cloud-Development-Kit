using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `ALIYUN::DTS::SubscriptionInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.SubscriptionInstanceProps")]
    public class SubscriptionInstanceProps : AlibabaCloud.SDK.ROS.CDK.Dts.ISubscriptionInstanceProps
    {
        /// <summary>Property configuration: Subscription configuration.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSubscriptionInstance.ConfigurationProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? Configuration
        {
            get;
            set;
        }

        /// <summary>Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle.</summary>
        /// <remarks>
        /// Default: MySQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? SourceEndpointInstanceType
        {
            get;
            set;
        }
    }
}
