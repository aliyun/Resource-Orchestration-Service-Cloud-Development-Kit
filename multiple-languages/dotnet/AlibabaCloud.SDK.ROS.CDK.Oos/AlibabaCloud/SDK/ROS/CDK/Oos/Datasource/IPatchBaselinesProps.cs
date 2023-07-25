using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::OOS::PatchBaselines`.</summary>
    [JsiiInterface(nativeType: typeof(IPatchBaselinesProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.PatchBaselinesProps")]
    public interface IPatchBaselinesProps
    {
        /// <summary>Property operationSystem: Operating system type.</summary>
        [JsiiProperty(name: "operationSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OperationSystem
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property patchBaselineName: The name of the patch baseline.</summary>
        [JsiiProperty(name: "patchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PatchBaselineName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property shareType: Patch baseline sharing type.</summary>
        [JsiiProperty(name: "shareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ShareType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::OOS::PatchBaselines`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPatchBaselinesProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.PatchBaselinesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IPatchBaselinesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property operationSystem: Operating system type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "operationSystem", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OperationSystem
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property patchBaselineName: The name of the patch baseline.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "patchBaselineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PatchBaselineName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property shareType: Patch baseline sharing type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "shareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShareType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
