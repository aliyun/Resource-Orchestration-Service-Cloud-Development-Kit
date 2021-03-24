using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ACM::Namespace`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-acm.RosNamespaceProps")]
    public class RosNamespaceProps : AlibabaCloud.SDK.ROS.CDK.Acm.IRosNamespaceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: Namespace name
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }
    }
}
