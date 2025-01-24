using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Represents a `PatchBaselines`.</summary>
    [JsiiInterface(nativeType: typeof(IPatchBaselines), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.IPatchBaselines")]
    public interface IPatchBaselines : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute PatchBaselineNames: The list of patch baseline names.</summary>
        [JsiiProperty(name: "attrPatchBaselineNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPatchBaselineNames
        {
            get;
        }

        /// <summary>Attribute PatchBaselines: The list of patch baselines.</summary>
        [JsiiProperty(name: "attrPatchBaselines", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPatchBaselines
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.datasource.PatchBaselinesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IPatchBaselinesProps Props
        {
            get;
        }

        /// <summary>Represents a `PatchBaselines`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPatchBaselines), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.IPatchBaselines")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IPatchBaselines
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute PatchBaselineNames: The list of patch baseline names.</summary>
            [JsiiProperty(name: "attrPatchBaselineNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPatchBaselineNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PatchBaselines: The list of patch baselines.</summary>
            [JsiiProperty(name: "attrPatchBaselines", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPatchBaselines
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.datasource.PatchBaselinesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IPatchBaselinesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IPatchBaselinesProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
