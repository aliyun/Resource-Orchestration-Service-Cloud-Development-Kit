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
        /// <strong>Property</strong>: namespace: The name of the namespace.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Namespace
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoCreate: Specifies whether to automatically create an image repository.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoCreate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoCreate
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "defaultVisibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DefaultVisibility
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
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
