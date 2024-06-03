using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    /// <summary>Construction properties for CloudAssemblyBuilder.</summary>
    [JsiiInterface(nativeType: typeof(ICloudAssemblyBuilderProps), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.CloudAssemblyBuilderProps")]
    public interface ICloudAssemblyBuilderProps
    {
        /// <summary>Use the given asset output directory.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Same as the manifest outdir
        /// </remarks>
        [JsiiProperty(name: "assetOutdir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AssetOutdir
        {
            get
            {
                return null;
            }
        }

        /// <summary>If this builder is for a nested assembly, the parent assembly builder.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - This is a root assembly
        /// </remarks>
        [JsiiProperty(name: "parentBuilder", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssemblyBuilder? ParentBuilder
        {
            get
            {
                return null;
            }
        }

        /// <summary>Construction properties for CloudAssemblyBuilder.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICloudAssemblyBuilderProps), fullyQualifiedName: "@alicloud/ros-cdk-cxapi.CloudAssemblyBuilderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cxapi.ICloudAssemblyBuilderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Use the given asset output directory.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Same as the manifest outdir
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "assetOutdir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AssetOutdir
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>If this builder is for a nested assembly, the parent assembly builder.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - This is a root assembly
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parentBuilder", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssemblyBuilder? ParentBuilder
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssemblyBuilder?>();
            }
        }
    }
}
