using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource
{
    /// <summary>Represents a `Schedule`.</summary>
    [JsiiInterface(nativeType: typeof(ISchedule), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.ISchedule")]
    public interface ISchedule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The time when the time-based schedule was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute CronExpression: The CRON expression of the time-based schedule to be created.</summary>
        [JsiiProperty(name: "attrCronExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCronExpression
        {
            get;
        }

        /// <summary>Attribute Description: The description of the time-based schedule to be created.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute LastModifiedTime: The time when the time-based schedule was last updated.</summary>
        [JsiiProperty(name: "attrLastModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLastModifiedTime
        {
            get;
        }

        /// <summary>Attribute Payload: The trigger message of the time-based schedule to be created.</summary>
        [JsiiProperty(name: "attrPayload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPayload
        {
            get;
        }

        /// <summary>Attribute ScheduleId: The ID of the time-based schedule.</summary>
        [JsiiProperty(name: "attrScheduleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduleId
        {
            get;
        }

        /// <summary>Attribute ScheduleName: The name of the time-based schedule to be created.</summary>
        [JsiiProperty(name: "attrScheduleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScheduleName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fnf.datasource.ScheduleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.IScheduleProps Props
        {
            get;
        }

        /// <summary>Represents a `Schedule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISchedule), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.ISchedule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.ISchedule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The time when the time-based schedule was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CronExpression: The CRON expression of the time-based schedule to be created.</summary>
            [JsiiProperty(name: "attrCronExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCronExpression
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the time-based schedule to be created.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LastModifiedTime: The time when the time-based schedule was last updated.</summary>
            [JsiiProperty(name: "attrLastModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLastModifiedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Payload: The trigger message of the time-based schedule to be created.</summary>
            [JsiiProperty(name: "attrPayload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPayload
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScheduleId: The ID of the time-based schedule.</summary>
            [JsiiProperty(name: "attrScheduleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ScheduleName: The name of the time-based schedule to be created.</summary>
            [JsiiProperty(name: "attrScheduleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScheduleName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-fnf.datasource.ScheduleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.IScheduleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.IScheduleProps>()!;
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
