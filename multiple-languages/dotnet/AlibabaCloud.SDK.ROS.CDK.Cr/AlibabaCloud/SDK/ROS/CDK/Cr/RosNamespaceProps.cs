using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::Namespace`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.RosNamespaceProps")]
    public class RosNamespaceProps : AlibabaCloud.SDK.ROS.CDK.Cr.IRosNamespaceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: namespace: domain name
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Namespace
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoCreate: whether auto create repository
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoCreate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoCreate
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultVisibility: repository default visibility, public or private
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "defaultVisibility", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DefaultVisibility
        {
            get;
            set;
        }
    }
}
