using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Imm
{
    /// <summary>Properties for defining a `ALIYUN::IMM::Project`.</summary>
    [JsiiInterface(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-imm.ProjectProps")]
    public interface IProjectProps
    {
        /// <summary>Property project: The name of project.</summary>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Project
        {
            get;
        }

        /// <summary>Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS).</summary>
        /// <remarks>
        /// The default value is AliyunIMMDefaultRole.
        /// </remarks>
        [JsiiProperty(name: "serviceRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceRole
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::IMM::Project`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-imm.ProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Imm.IProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property project: The name of project.</summary>
            [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Project
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS).</summary>
            /// <remarks>
            /// The default value is AliyunIMMDefaultRole.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceRole
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
