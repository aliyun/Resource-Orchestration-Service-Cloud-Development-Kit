using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Represents a missing piece of context.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.MissingContext")]
    public class MissingContext : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMissingContext
    {
        /// <summary>The missing context key.</summary>
        [JsiiProperty(name: "key", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Key
        {
            get;
            set;
        }

        /// <summary>A set of provider-specific options.</summary>
        [JsiiProperty(name: "props", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AmiContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AvailabilityZonesContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.HostedZoneContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.SSMParameterContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.VpcContextQuery\"},{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery\"}]}}", isOverride: true)]
        public object Props
        {
            get;
            set;
        }

        /// <summary>The provider from which we expect this context key to be obtained.</summary>
        [JsiiProperty(name: "provider", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ContextProvider\"}", isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.ContextProvider Provider
        {
            get;
            set;
        }
    }
}
