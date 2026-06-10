using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Represents a `JobMonitorRule`.</summary>
    [JsiiInterface(nativeType: typeof(IJobMonitorRule), fullyQualifiedName: "@alicloud/ros-cdk-dts.IJobMonitorRule")]
    public interface IJobMonitorRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DelayRuleTime: Trigger delay alarm threshold, which is measured in seconds.</summary>
        [JsiiProperty(name: "attrDelayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDelayRuleTime
        {
            get;
        }

        /// <summary>Attribute DtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.</summary>
        [JsiiProperty(name: "attrDtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDtsJobId
        {
            get;
        }

        /// <summary>Attribute Period: The statistical period of the incremental verification task.</summary>
        /// <remarks>
        /// Unit: minutes.
        /// </remarks>
        [JsiiProperty(name: "attrPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPeriod
        {
            get;
        }

        /// <summary>Attribute Phones: The alarm is triggered after notification of the contact phone number, A plurality of phone numbers between them with a comma (,) to separate.</summary>
        [JsiiProperty(name: "attrPhones", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPhones
        {
            get;
        }

        /// <summary>Attribute State: Whether to enable monitoring rules, return value:.</summary>
        [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrState
        {
            get;
        }

        /// <summary>Attribute Times: The number of cycles of the incremental verification task.</summary>
        [JsiiProperty(name: "attrTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTimes
        {
            get;
        }

        /// <summary>Attribute Type: Monitoring rules of type, the return value:.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.JobMonitorRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dts.IJobMonitorRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `JobMonitorRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IJobMonitorRule), fullyQualifiedName: "@alicloud/ros-cdk-dts.IJobMonitorRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IJobMonitorRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DelayRuleTime: Trigger delay alarm threshold, which is measured in seconds.</summary>
            [JsiiProperty(name: "attrDelayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDelayRuleTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.</summary>
            [JsiiProperty(name: "attrDtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDtsJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Period: The statistical period of the incremental verification task.</summary>
            /// <remarks>
            /// Unit: minutes.
            /// </remarks>
            [JsiiProperty(name: "attrPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPeriod
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Phones: The alarm is triggered after notification of the contact phone number, A plurality of phone numbers between them with a comma (,) to separate.</summary>
            [JsiiProperty(name: "attrPhones", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPhones
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute State: Whether to enable monitoring rules, return value:.</summary>
            [JsiiProperty(name: "attrState", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrState
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Times: The number of cycles of the incremental verification task.</summary>
            [JsiiProperty(name: "attrTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTimes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: Monitoring rules of type, the return value:.</summary>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dts.JobMonitorRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dts.IJobMonitorRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dts.IJobMonitorRuleProps>()!;
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
