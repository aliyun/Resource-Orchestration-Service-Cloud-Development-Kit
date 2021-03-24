using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::HpcCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IHpcClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.HpcClusterProps")]
    public interface IHpcClusterProps
    {
        /// <summary>Property name: The name of the HPC cluster.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It must
        /// start with a letter but cannot start with http:// or https://. It can contain letters,
        /// digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <summary>Property description: The description of the HPC cluster.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in
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
        [JsiiTypeProxy(nativeType: typeof(IHpcClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.HpcClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IHpcClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: The name of the HPC cluster.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. It must
            /// start with a letter but cannot start with http:// or https://. It can contain letters,
            /// digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: The description of the HPC cluster.</summary>
            /// <remarks>
            /// The description must be 2 to 256 characters in
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
