using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `AutoSnapshotPolicies`.</summary>
    [JsiiInterface(nativeType: typeof(IAutoSnapshotPolicies), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IAutoSnapshotPolicies")]
    public interface IAutoSnapshotPolicies : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AutoSnapshotPolicies: The list of auto snapshot policies.</summary>
        [JsiiProperty(name: "attrAutoSnapshotPolicies", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoSnapshotPolicies
        {
            get;
        }

        /// <summary>Attribute AutoSnapshotPolicyIds: The list of auto snapshot policy ids.</summary>
        [JsiiProperty(name: "attrAutoSnapshotPolicyIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoSnapshotPolicyIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPoliciesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IAutoSnapshotPoliciesProps Props
        {
            get;
        }

        /// <summary>Represents a `AutoSnapshotPolicies`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAutoSnapshotPolicies), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IAutoSnapshotPolicies")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IAutoSnapshotPolicies
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AutoSnapshotPolicies: The list of auto snapshot policies.</summary>
            [JsiiProperty(name: "attrAutoSnapshotPolicies", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoSnapshotPolicies
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoSnapshotPolicyIds: The list of auto snapshot policy ids.</summary>
            [JsiiProperty(name: "attrAutoSnapshotPolicyIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoSnapshotPolicyIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.AutoSnapshotPoliciesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IAutoSnapshotPoliciesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IAutoSnapshotPoliciesProps>()!;
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
