using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource
{
    /// <summary>Represents a `Schedules`.</summary>
    [JsiiInterface(nativeType: typeof(ISchedules), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.ISchedules")]
    public interface ISchedules : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ScheduleNames: The list of schedule names.</summary>
        [JsiiProperty(name: "attrScheduleNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduleNames
        {
            get;
        }

        /// <summary>Attribute Schedules: The queried time-based schedules.</summary>
        [JsiiProperty(name: "attrSchedules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSchedules
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fnf.datasource.SchedulesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.ISchedulesProps Props
        {
            get;
        }

        /// <summary>Represents a `Schedules`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISchedules), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.ISchedules")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.ISchedules
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ScheduleNames: The list of schedule names.</summary>
            [JsiiProperty(name: "attrScheduleNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduleNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Schedules: The queried time-based schedules.</summary>
            [JsiiProperty(name: "attrSchedules", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSchedules
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fnf.datasource.SchedulesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.ISchedulesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.ISchedulesProps>()!;
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
