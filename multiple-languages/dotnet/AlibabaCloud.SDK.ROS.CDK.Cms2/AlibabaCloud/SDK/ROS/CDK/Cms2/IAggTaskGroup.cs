using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2
{
    /// <summary>Represents a `AggTaskGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IAggTaskGroup), fullyQualifiedName: "@alicloud/ros-cdk-cms2.IAggTaskGroup")]
    public interface IAggTaskGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AggTaskGroupConfigHash: The config hash of the agg task group.</summary>
        [JsiiProperty(name: "attrAggTaskGroupConfigHash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAggTaskGroupConfigHash
        {
            get;
        }

        /// <summary>Attribute AggTaskGroupId: The ID of the agg task group.</summary>
        [JsiiProperty(name: "attrAggTaskGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAggTaskGroupId
        {
            get;
        }

        /// <summary>Attribute AggTaskGroupName: The name of the agg task group.</summary>
        [JsiiProperty(name: "attrAggTaskGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAggTaskGroupName
        {
            get;
        }

        /// <summary>Attribute SourcePrometheusId: The ID of the source Prometheus instance of the agg task group.</summary>
        [JsiiProperty(name: "attrSourcePrometheusId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourcePrometheusId
        {
            get;
        }

        /// <summary>Attribute Status: The current status of the agg task group.</summary>
        [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStatus
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms2.AggTaskGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cms2.IAggTaskGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `AggTaskGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAggTaskGroup), fullyQualifiedName: "@alicloud/ros-cdk-cms2.IAggTaskGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms2.IAggTaskGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AggTaskGroupConfigHash: The config hash of the agg task group.</summary>
            [JsiiProperty(name: "attrAggTaskGroupConfigHash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAggTaskGroupConfigHash
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AggTaskGroupId: The ID of the agg task group.</summary>
            [JsiiProperty(name: "attrAggTaskGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAggTaskGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AggTaskGroupName: The name of the agg task group.</summary>
            [JsiiProperty(name: "attrAggTaskGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAggTaskGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourcePrometheusId: The ID of the source Prometheus instance of the agg task group.</summary>
            [JsiiProperty(name: "attrSourcePrometheusId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourcePrometheusId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Status: The current status of the agg task group.</summary>
            [JsiiProperty(name: "attrStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms2.AggTaskGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cms2.IAggTaskGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms2.IAggTaskGroupProps>()!;
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
