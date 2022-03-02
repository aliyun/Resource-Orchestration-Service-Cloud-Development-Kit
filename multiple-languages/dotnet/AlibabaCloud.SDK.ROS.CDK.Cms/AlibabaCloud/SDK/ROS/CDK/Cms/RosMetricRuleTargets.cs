using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>A ROS template type:  `ALIYUN::CMS::MetricRuleTargets`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTargets), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTargets", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTargetsProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosMetricRuleTargets : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::CMS::MetricRuleTargets`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosMetricRuleTargets(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.IRosMetricRuleTargetsProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMetricRuleTargets(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMetricRuleTargets(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTargets))!;

        /// <remarks>
        /// <strong>Attribute</strong>: Arns: The ARN list of targets
        /// </remarks>
        [JsiiProperty(name: "attrArns", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrArns
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Ids: The ID list of targets
        /// </remarks>
        [JsiiProperty(name: "attrIds", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrIds
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleId: The ID of the alert rule.
        /// </remarks>
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object RuleId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: targets: undefined
        /// </remarks>
        [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTargets.TargetsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object Targets
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ITargetsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTargets.TargetsProperty")]
        public interface ITargetsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: arn: The resource description in the format of acs:{Service name abbreviation}:{regionId}:{userId}:/{Message resource type}/{Resource
            /// name}/message. Example: acs:mns:cn-hangzhou:111:/queues/test/message.
            /// {Service name abbreviation}: the abbreviation of the service name. Set this value
            /// to mns.
            /// {regionId}: the region ID of the message queue or topic.
            /// {userId}: the account ID of the user.
            /// {Message resource type}: the type of the message resource. Valid values: queues and
            /// topics.
            /// {Resource name}: the name of a queue if the resource type is queues, or the name of
            /// a topic if the type is topics.
            /// </remarks>
            [JsiiProperty(name: "arn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Arn
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: id: The ID of the message resource. The ID must be unique in the alert rule.
            /// </remarks>
            [JsiiProperty(name: "id", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Id
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: level: The alert level, which is a JSON array. For example: ["INFO", "WARN", "CRITICAL"]. Valid values:
            /// INFO
            /// WARN
            /// CRITICAL
            /// </remarks>
            [JsiiProperty(name: "level", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Level
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITargetsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMetricRuleTargets.TargetsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTargets.ITargetsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: arn: The resource description in the format of acs:{Service name abbreviation}:{regionId}:{userId}:/{Message resource type}/{Resource
                /// name}/message. Example: acs:mns:cn-hangzhou:111:/queues/test/message.
                /// {Service name abbreviation}: the abbreviation of the service name. Set this value
                /// to mns.
                /// {regionId}: the region ID of the message queue or topic.
                /// {userId}: the account ID of the user.
                /// {Message resource type}: the type of the message resource. Valid values: queues and
                /// topics.
                /// {Resource name}: the name of a queue if the resource type is queues, or the name of
                /// a topic if the type is topics.
                /// </remarks>
                [JsiiProperty(name: "arn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Arn
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: id: The ID of the message resource. The ID must be unique in the alert rule.
                /// </remarks>
                [JsiiProperty(name: "id", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Id
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: level: The alert level, which is a JSON array. For example: ["INFO", "WARN", "CRITICAL"]. Valid values:
                /// INFO
                /// WARN
                /// CRITICAL
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "level", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Level
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMetricRuleTargets.TargetsProperty")]
        public class TargetsProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosMetricRuleTargets.ITargetsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: arn: The resource description in the format of acs:{Service name abbreviation}:{regionId}:{userId}:/{Message resource type}/{Resource
            /// name}/message. Example: acs:mns:cn-hangzhou:111:/queues/test/message.
            /// {Service name abbreviation}: the abbreviation of the service name. Set this value
            /// to mns.
            /// {regionId}: the region ID of the message queue or topic.
            /// {userId}: the account ID of the user.
            /// {Message resource type}: the type of the message resource. Valid values: queues and
            /// topics.
            /// {Resource name}: the name of a queue if the resource type is queues, or the name of
            /// a topic if the type is topics.
            /// </remarks>
            [JsiiProperty(name: "arn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Arn
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: id: The ID of the message resource. The ID must be unique in the alert rule.
            /// </remarks>
            [JsiiProperty(name: "id", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Id
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: level: The alert level, which is a JSON array. For example: ["INFO", "WARN", "CRITICAL"]. Valid values:
            /// INFO
            /// WARN
            /// CRITICAL
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "level", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Level
            {
                get;
                set;
            }
        }
    }
}
