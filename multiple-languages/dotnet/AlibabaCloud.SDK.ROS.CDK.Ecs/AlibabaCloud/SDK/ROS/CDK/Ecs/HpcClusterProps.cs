using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::HpcCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.HpcClusterProps")]
    public class HpcClusterProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IHpcClusterProps
    {
        /// <summary>Property name: The name of the HPC cluster.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It must
        /// start with a letter but cannot start with http:// or https://. It can contain letters,
        /// digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the HPC cluster.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in
        /// length. It cannot start with http:// or https://. Default value: empty string.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
