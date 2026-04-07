using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Represents a `ScheduledPreloadExecution`.</summary>
    [JsiiInterface(nativeType: typeof(IScheduledPreloadExecution), fullyQualifiedName: "@alicloud/ros-cdk-esa.IScheduledPreloadExecution")]
    public interface IScheduledPreloadExecution : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute EndTime: The end time of the prefetch plan.</summary>
        [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndTime
        {
            get;
        }

        /// <summary>Attribute Interval: The time interval between each batch execution.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInterval
        {
            get;
        }

        /// <summary>Attribute ScheduledPreloadExecutionId: The ID of the prefetch plan.</summary>
        [JsiiProperty(name: "attrScheduledPreloadExecutionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduledPreloadExecutionId
        {
            get;
        }

        /// <summary>Attribute ScheduledPreloadJobId: The ID of the prefetch task.</summary>
        [JsiiProperty(name: "attrScheduledPreloadJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduledPreloadJobId
        {
            get;
        }

        /// <summary>Attribute SliceLen: The number of URLs prefetched in each batch.</summary>
        [JsiiProperty(name: "attrSliceLen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSliceLen
        {
            get;
        }

        /// <summary>Attribute StartTime: The start time of the prefetch plan.</summary>
        [JsiiProperty(name: "attrStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStartTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.ScheduledPreloadExecutionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Esa.IScheduledPreloadExecutionProps Props
        {
            get;
        }

        /// <summary>Represents a `ScheduledPreloadExecution`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScheduledPreloadExecution), fullyQualifiedName: "@alicloud/ros-cdk-esa.IScheduledPreloadExecution")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IScheduledPreloadExecution
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute EndTime: The end time of the prefetch plan.</summary>
            [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Interval: The time interval between each batch execution.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "attrInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInterval
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScheduledPreloadExecutionId: The ID of the prefetch plan.</summary>
            [JsiiProperty(name: "attrScheduledPreloadExecutionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduledPreloadExecutionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScheduledPreloadJobId: The ID of the prefetch task.</summary>
            [JsiiProperty(name: "attrScheduledPreloadJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduledPreloadJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SliceLen: The number of URLs prefetched in each batch.</summary>
            [JsiiProperty(name: "attrSliceLen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSliceLen
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StartTime: The start time of the prefetch plan.</summary>
            [JsiiProperty(name: "attrStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-esa.ScheduledPreloadExecutionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Esa.IScheduledPreloadExecutionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Esa.IScheduledPreloadExecutionProps>()!;
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
