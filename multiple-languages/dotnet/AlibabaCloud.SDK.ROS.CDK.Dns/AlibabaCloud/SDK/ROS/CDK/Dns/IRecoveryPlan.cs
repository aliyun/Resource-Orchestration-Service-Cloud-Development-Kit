using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    /// <summary>Represents a `RecoveryPlan`.</summary>
    [JsiiInterface(nativeType: typeof(IRecoveryPlan), fullyQualifiedName: "@alicloud/ros-cdk-dns.IRecoveryPlan")]
    public interface IRecoveryPlan : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute RecoveryPlanId: The ID of the recovery plan.</summary>
        [JsiiProperty(name: "attrRecoveryPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRecoveryPlanId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dns.RecoveryPlanProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dns.IRecoveryPlanProps Props
        {
            get;
        }

        /// <summary>Represents a `RecoveryPlan`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRecoveryPlan), fullyQualifiedName: "@alicloud/ros-cdk-dns.IRecoveryPlan")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.IRecoveryPlan
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute RecoveryPlanId: The ID of the recovery plan.</summary>
            [JsiiProperty(name: "attrRecoveryPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRecoveryPlanId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dns.RecoveryPlanProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dns.IRecoveryPlanProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dns.IRecoveryPlanProps>()!;
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
