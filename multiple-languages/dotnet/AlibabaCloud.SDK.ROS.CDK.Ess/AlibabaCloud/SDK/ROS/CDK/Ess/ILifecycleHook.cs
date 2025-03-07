using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Represents a `LifecycleHook`.</summary>
    [JsiiInterface(nativeType: typeof(ILifecycleHook), fullyQualifiedName: "@alicloud/ros-cdk-ess.ILifecycleHook")]
    public interface ILifecycleHook : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute LifecycleHookId: The lifecycle hook ID.</summary>
        [JsiiProperty(name: "attrLifecycleHookId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLifecycleHookId
        {
            get;
        }

        /// <summary>Attribute ScalingGroupId: The id of the scaling group to which the lifecycle hook belongs.</summary>
        [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingGroupId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ess.LifecycleHookProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ess.ILifecycleHookProps Props
        {
            get;
        }

        /// <summary>Represents a `LifecycleHook`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILifecycleHook), fullyQualifiedName: "@alicloud/ros-cdk-ess.ILifecycleHook")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.ILifecycleHook
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute LifecycleHookId: The lifecycle hook ID.</summary>
            [JsiiProperty(name: "attrLifecycleHookId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLifecycleHookId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScalingGroupId: The id of the scaling group to which the lifecycle hook belongs.</summary>
            [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ess.LifecycleHookProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ess.ILifecycleHookProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ess.ILifecycleHookProps>()!;
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
