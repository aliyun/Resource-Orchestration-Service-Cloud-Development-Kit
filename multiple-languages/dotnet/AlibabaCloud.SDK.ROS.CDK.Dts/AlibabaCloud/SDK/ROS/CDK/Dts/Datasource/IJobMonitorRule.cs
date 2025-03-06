using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts.Datasource
{
    /// <summary>Represents a `JobMonitorRule`.</summary>
    [JsiiInterface(nativeType: typeof(IJobMonitorRule), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.IJobMonitorRule")]
    public interface IJobMonitorRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DelayRuleTime: The threshold that triggers the alert.</summary>
        [JsiiProperty(name: "attrDelayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDelayRuleTime
        {
            get;
        }

        /// <summary>Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.</summary>
        [JsiiProperty(name: "attrDtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDtsJobId
        {
            get;
        }

        /// <summary>Attribute Period: The statistical period for incremental validation tasks, in minutes.</summary>
        [JsiiProperty(name: "attrPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeriod
        {
            get;
        }

        /// <summary>Attribute Phone: The mobile phone numbers that receive alert notifications.</summary>
        /// <remarks>
        /// Multiple mobile numbers are separated by commas (,).
        /// </remarks>
        [JsiiProperty(name: "attrPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPhone
        {
            get;
        }

        /// <summary>Attribute State: Indicates whether the monitoring rule is enabled.</summary>
        [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrState
        {
            get;
        }

        /// <summary>Attribute Times: The number of cycles for the incremental validation task.</summary>
        [JsiiProperty(name: "attrTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTimes
        {
            get;
        }

        /// <summary>Attribute Type: The type of the monitoring rule.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.JobMonitorRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `JobMonitorRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IJobMonitorRule), fullyQualifiedName: "@alicloud/ros-cdk-dts.datasource.IJobMonitorRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DelayRuleTime: The threshold that triggers the alert.</summary>
            [JsiiProperty(name: "attrDelayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDelayRuleTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DtsJobId: The ID of the data migration, data synchronization, or change tracking task.</summary>
            [JsiiProperty(name: "attrDtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDtsJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Period: The statistical period for incremental validation tasks, in minutes.</summary>
            [JsiiProperty(name: "attrPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Phone: The mobile phone numbers that receive alert notifications.</summary>
            /// <remarks>
            /// Multiple mobile numbers are separated by commas (,).
            /// </remarks>
            [JsiiProperty(name: "attrPhone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPhone
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute State: Indicates whether the monitoring rule is enabled.</summary>
            [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrState
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Times: The number of cycles for the incremental validation task.</summary>
            [JsiiProperty(name: "attrTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTimes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: The type of the monitoring rule.</summary>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.datasource.JobMonitorRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dts.Datasource.IJobMonitorRuleProps>()!;
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
