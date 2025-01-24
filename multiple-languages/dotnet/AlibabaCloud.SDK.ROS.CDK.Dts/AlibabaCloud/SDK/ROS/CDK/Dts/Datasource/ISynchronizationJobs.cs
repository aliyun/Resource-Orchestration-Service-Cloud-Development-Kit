using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts.Datasource
{
    /// <summary>Represents a `SynchronizationJobs`.</summary>
    [JsiiInterface(nativeType: typeof(ISynchronizationJobs), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.ISynchronizationJobs")]
    public interface ISynchronizationJobs : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DtsInstanceIds: The list of dts instance IDs.</summary>
        [JsiiProperty(name: "attrDtsInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDtsInstanceIds
        {
            get;
        }

        /// <summary>Attribute SynchronizationInstances: The list of synchronization instances.</summary>
        [JsiiProperty(name: "attrSynchronizationInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSynchronizationInstances
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.SynchronizationJobsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.ISynchronizationJobsProps Props
        {
            get;
        }

        /// <summary>Represents a `SynchronizationJobs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISynchronizationJobs), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.ISynchronizationJobs")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.ISynchronizationJobs
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DtsInstanceIds: The list of dts instance IDs.</summary>
            [JsiiProperty(name: "attrDtsInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDtsInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SynchronizationInstances: The list of synchronization instances.</summary>
            [JsiiProperty(name: "attrSynchronizationInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSynchronizationInstances
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.SynchronizationJobsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.ISynchronizationJobsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.ISynchronizationJobsProps>()!;
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
