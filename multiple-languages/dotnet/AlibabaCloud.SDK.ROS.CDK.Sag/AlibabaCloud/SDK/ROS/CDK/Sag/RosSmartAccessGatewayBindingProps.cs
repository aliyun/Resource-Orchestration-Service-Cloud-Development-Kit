using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::SmartAccessGatewayBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosSmartAccessGatewayBindingProps")]
    public class RosSmartAccessGatewayBindingProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosSmartAccessGatewayBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ccnId: The ID of the CCN instance to bind.
        /// </remarks>
        [JsiiProperty(name: "ccnId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CcnId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: The ID of the Smart Access Gateway instance.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SmartAgId
        {
            get;
            set;
        }
    }
}
