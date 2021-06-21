using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CEN::TransitRouter`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cen.RosTransitRouterProps")]
    public class RosTransitRouterProps : AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: CenId
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CenId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterDescription: TransitRouterDescription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterName: TransitRouterName
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "transitRouterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TransitRouterName
        {
            get;
            set;
        }
    }
}
