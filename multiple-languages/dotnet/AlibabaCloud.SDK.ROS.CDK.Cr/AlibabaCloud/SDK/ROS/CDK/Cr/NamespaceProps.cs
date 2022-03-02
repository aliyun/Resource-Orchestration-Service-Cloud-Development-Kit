using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::Namespace`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.NamespaceProps")]
    public class NamespaceProps : AlibabaCloud.SDK.ROS.CDK.Cr.INamespaceProps
    {
        /// <summary>Property namespace: The name of the namespace.</summary>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Namespace
        {
            get;
            set;
        }

        /// <summary>Property autoCreate: Specifies whether to automatically create an image repository.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoCreate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoCreate
        {
            get;
            set;
        }

        /// <summary>Property defaultVisibility: The default type of the repository that is automatically created.</summary>
        /// <remarks>
        /// Valid values: PUBLIC, PRIVATE.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "defaultVisibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DefaultVisibility
        {
            get;
            set;
        }

        /// <summary>Property instanceId: The ID of the enterprise edition instance which namespace belongs to.</summary>
        /// <remarks>
        /// If not provided, will use personal edition instance as default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceId
        {
            get;
            set;
        }
    }
}
