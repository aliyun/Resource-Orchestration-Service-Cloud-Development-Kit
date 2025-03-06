using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms.Datasource
{
    /// <summary>Represents a `SyntheticTasks`.</summary>
    [JsiiInterface(nativeType: typeof(ISyntheticTasks), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.ISyntheticTasks")]
    public interface ISyntheticTasks : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute SyntheticTasks: The list of synthetic tasks.</summary>
        [JsiiProperty(name: "attrSyntheticTasks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSyntheticTasks
        {
            get;
        }

        /// <summary>Attribute TaskIds: The list of task IDs.</summary>
        [JsiiProperty(name: "attrTaskIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.SyntheticTasksProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.ISyntheticTasksProps Props
        {
            get;
        }

        /// <summary>Represents a `SyntheticTasks`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISyntheticTasks), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.ISyntheticTasks")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.ISyntheticTasks
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute SyntheticTasks: The list of synthetic tasks.</summary>
            [JsiiProperty(name: "attrSyntheticTasks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSyntheticTasks
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskIds: The list of task IDs.</summary>
            [JsiiProperty(name: "attrTaskIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.SyntheticTasksProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.ISyntheticTasksProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.ISyntheticTasksProps>()!;
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
