using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    [JsiiInterface(nativeType: typeof(IAssemblyBuildOptions), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.AssemblyBuildOptions")]
    public interface IAssemblyBuildOptions
    {
        /// <summary>Include the specified runtime information (module versions) in manifest.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - if this option is not specified, runtime info will not be included
        /// </remarks>
        [JsiiProperty(name: "runtimeInfo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.RuntimeInfo\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Cxapi.IRuntimeInfo? RuntimeInfo
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IAssemblyBuildOptions), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.AssemblyBuildOptions")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cxapi.IAssemblyBuildOptions
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Include the specified runtime information (module versions) in manifest.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - if this option is not specified, runtime info will not be included
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "runtimeInfo", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.RuntimeInfo\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cxapi.IRuntimeInfo? RuntimeInfo
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.IRuntimeInfo?>();
            }
        }
    }
}
