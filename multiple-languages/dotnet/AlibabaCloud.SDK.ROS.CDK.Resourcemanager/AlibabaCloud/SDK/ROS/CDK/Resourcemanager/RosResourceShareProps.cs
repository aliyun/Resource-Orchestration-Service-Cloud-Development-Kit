using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ResourceManager::ResourceShare`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-resourcemanager.RosResourceShareProps")]
    public class RosResourceShareProps : AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosResourceShareProps
    {
        /// <remarks>
        /// <strong>Property</strong>: resourceShareName: The name of the resource share.
        /// The name must be 1 to 50 characters in length.
        /// It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "resourceShareName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ResourceShareName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resources:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.RosResourceShare.ResourcesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Resources
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: targets: The shared target.
        /// A shared target shares the resources of resource owners. You can share your resources
        /// only with the member accounts in your resource directory. A shared target is indicated
        /// by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Targets
        {
            get;
            set;
        }
    }
}
