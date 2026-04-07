using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `CycleTask`.</summary>
    [JsiiInterface(nativeType: typeof(ICycleTask), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.ICycleTask")]
    public interface ICycleTask : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConfigId: Configuration ID.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigId
        {
            get;
        }

        /// <summary>Attribute Enable: Specifies whether to enable the task.</summary>
        [JsiiProperty(name: "attrEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnable
        {
            get;
        }

        /// <summary>Attribute FirstDateStr: The first time when the task is performed.</summary>
        [JsiiProperty(name: "attrFirstDateStr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFirstDateStr
        {
            get;
        }

        /// <summary>Attribute IntervalPeriod: The interval at which the task is run.</summary>
        [JsiiProperty(name: "attrIntervalPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIntervalPeriod
        {
            get;
        }

        /// <summary>Attribute Param: The additional information.</summary>
        [JsiiProperty(name: "attrParam", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParam
        {
            get;
        }

        /// <summary>Attribute PeriodUnit: The unit of the scan interval.</summary>
        [JsiiProperty(name: "attrPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeriodUnit
        {
            get;
        }

        /// <summary>Attribute TargetEndTime: The time when the task ends.</summary>
        /// <remarks>
        /// Unit: hours.
        /// </remarks>
        [JsiiProperty(name: "attrTargetEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetEndTime
        {
            get;
        }

        /// <summary>Attribute TargetStartTime: The time when the task is started.</summary>
        /// <remarks>
        /// Unit: hours.
        /// </remarks>
        [JsiiProperty(name: "attrTargetStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetStartTime
        {
            get;
        }

        /// <summary>Attribute TaskName: The task name.</summary>
        [JsiiProperty(name: "attrTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskName
        {
            get;
        }

        /// <summary>Attribute TaskType: The type of the task.</summary>
        [JsiiProperty(name: "attrTaskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTaskType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.CycleTaskProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICycleTaskProps Props
        {
            get;
        }

        /// <summary>Represents a `CycleTask`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICycleTask), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.ICycleTask")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICycleTask
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConfigId: Configuration ID.</summary>
            [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Enable: Specifies whether to enable the task.</summary>
            [JsiiProperty(name: "attrEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FirstDateStr: The first time when the task is performed.</summary>
            [JsiiProperty(name: "attrFirstDateStr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFirstDateStr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IntervalPeriod: The interval at which the task is run.</summary>
            [JsiiProperty(name: "attrIntervalPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIntervalPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Param: The additional information.</summary>
            [JsiiProperty(name: "attrParam", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParam
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PeriodUnit: The unit of the scan interval.</summary>
            [JsiiProperty(name: "attrPeriodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeriodUnit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetEndTime: The time when the task ends.</summary>
            /// <remarks>
            /// Unit: hours.
            /// </remarks>
            [JsiiProperty(name: "attrTargetEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetStartTime: The time when the task is started.</summary>
            /// <remarks>
            /// Unit: hours.
            /// </remarks>
            [JsiiProperty(name: "attrTargetStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskName: The task name.</summary>
            [JsiiProperty(name: "attrTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TaskType: The type of the task.</summary>
            [JsiiProperty(name: "attrTaskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTaskType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.CycleTaskProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICycleTaskProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.ICycleTaskProps>()!;
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
