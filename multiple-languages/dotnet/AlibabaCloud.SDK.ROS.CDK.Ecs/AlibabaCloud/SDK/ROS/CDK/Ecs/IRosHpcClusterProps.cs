using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::HpcCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IRosHpcClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosHpcClusterProps")]
    public interface IRosHpcClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The name of the HPC cluster. The name must be 2 to 128 characters in length. It must
        /// start with a letter but cannot start with http:// or https://. It can contain letters,
        /// digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the HPC cluster. The description must be 2 to 256 characters in
        /// length. It cannot start with http:// or https://. Default value: empty string.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::HpcCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosHpcClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosHpcClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosHpcClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the HPC cluster. The name must be 2 to 128 characters in length. It must
            /// start with a letter but cannot start with http:// or https://. It can contain letters,
            /// digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the HPC cluster. The description must be 2 to 256 characters in
            /// length. It cannot start with http:// or https://. Default value: empty string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
