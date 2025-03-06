using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    /// <summary>Represents a `Schedule`.</summary>
    [JsiiInterface(nativeType: typeof(ISchedule), fullyQualifiedName: "@alicloud/ros-cdk-fnf.ISchedule")]
    public interface ISchedule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute FlowName: Flow name.</summary>
        [JsiiProperty(name: "attrFlowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFlowName
        {
            get;
        }

        /// <summary>Attribute ScheduleId: Schedule Id.</summary>
        [JsiiProperty(name: "attrScheduleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduleId
        {
            get;
        }

        /// <summary>Attribute ScheduleName: Schedule name.</summary>
        [JsiiProperty(name: "attrScheduleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduleName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fnf.ScheduleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Fnf.IScheduleProps Props
        {
            get;
        }

        /// <summary>Represents a `Schedule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISchedule), fullyQualifiedName: "@alicloud/ros-cdk-fnf.ISchedule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.ISchedule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute FlowName: Flow name.</summary>
            [JsiiProperty(name: "attrFlowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFlowName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScheduleId: Schedule Id.</summary>
            [JsiiProperty(name: "attrScheduleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScheduleName: Schedule name.</summary>
            [JsiiProperty(name: "attrScheduleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduleName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fnf.ScheduleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Fnf.IScheduleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fnf.IScheduleProps>()!;
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
