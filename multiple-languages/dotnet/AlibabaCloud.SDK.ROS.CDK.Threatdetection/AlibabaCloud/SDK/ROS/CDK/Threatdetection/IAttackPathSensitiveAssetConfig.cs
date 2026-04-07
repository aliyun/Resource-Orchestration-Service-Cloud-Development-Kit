using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `AttackPathSensitiveAssetConfig`.</summary>
    [JsiiInterface(nativeType: typeof(IAttackPathSensitiveAssetConfig), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IAttackPathSensitiveAssetConfig")]
    public interface IAttackPathSensitiveAssetConfig : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AttackPathAssetList: The attack path sensitive asset configuration list.</summary>
        [JsiiProperty(name: "attrAttackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttackPathAssetList
        {
            get;
        }

        /// <summary>Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.</summary>
        [JsiiProperty(name: "attrAttackPathSensitiveAssetConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttackPathSensitiveAssetConfigId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.AttackPathSensitiveAssetConfigProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAttackPathSensitiveAssetConfigProps Props
        {
            get;
        }

        /// <summary>Represents a `AttackPathSensitiveAssetConfig`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAttackPathSensitiveAssetConfig), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IAttackPathSensitiveAssetConfig")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAttackPathSensitiveAssetConfig
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AttackPathAssetList: The attack path sensitive asset configuration list.</summary>
            [JsiiProperty(name: "attrAttackPathAssetList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttackPathAssetList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AttackPathSensitiveAssetConfigId: Attack path sensitive asset configuration ID.</summary>
            [JsiiProperty(name: "attrAttackPathSensitiveAssetConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttackPathSensitiveAssetConfigId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.AttackPathSensitiveAssetConfigProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAttackPathSensitiveAssetConfigProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IAttackPathSensitiveAssetConfigProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
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
