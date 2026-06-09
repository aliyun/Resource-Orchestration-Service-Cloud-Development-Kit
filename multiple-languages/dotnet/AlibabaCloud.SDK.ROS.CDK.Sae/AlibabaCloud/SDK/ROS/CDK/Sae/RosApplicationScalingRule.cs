using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>This class is a base encapsulation around the ROS resource type `ALIYUN::SAE::ApplicationScalingRule`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class does not contain additional functions, so it is recommended to use the `ApplicationScalingRule` class instead of this class for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-applicationscalingrule
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosApplicationScalingRule : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosApplicationScalingRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Sae.IRosApplicationScalingRuleProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Sae.IRosApplicationScalingRuleProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosApplicationScalingRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosApplicationScalingRule(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleName: The name of the scaling rule.
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrScalingRuleName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: appId: The ID of the application.
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AppId
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleName: The name of the auto scaling policy. The name must start with a lowercase letter, and can contain lowercase letters, digits, and hyphens (-).The name must be 1 to 32 characters in length.
        /// </remarks>
        [JsiiProperty(name: "scalingRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ScalingRuleName
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleType: The type of the auto scaling policy. Valid values: timer: Timed scaling. metric: Custom metric scaling.mix: mix scaling
        /// </remarks>
        [JsiiProperty(name: "scalingRuleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ScalingRuleType
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: minReadyInstanceRatio: The minimum percentage of surviving instances. The value description is as follows:-1: Initialization value, indicating that the percentage is not used.0~100: The unit is a percentage, rounded up. For example, if it is set to 50%, if there are currently 5 instances, the minimum number of surviving instances is 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "minReadyInstanceRatio", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MinReadyInstanceRatio
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: minReadyInstances: Minimum number of surviving instances. The value is as follows:If set to 0, the application will be interrupted during the upgrade process.If set to **-1**, the minimum number of surviving instances will use the system recommended value, which is 25% of the existing number of instances. If there are currently 5 instances, 5×25%=1.25, after rounding up, the minimum number of surviving instances is 2.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "minReadyInstances", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MinReadyInstances
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleEnable: Whether to enable the scaling rule.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ScalingRuleEnable
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleMetric: Configuration of monitoring indicator elasticity policy. This parameter is required when you select monitoring indicator elasticity policy setting.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleMetric", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleMetricProperty\"}]}}", isOptional: true)]
        public virtual object? ScalingRuleMetric
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScalingRuleMetricProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScalingRuleMetricProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleTimer: The configuration of the timer scaling policy.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleTimer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleTimerProperty\"}]}}", isOptional: true)]
        public virtual object? ScalingRuleTimer
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScalingRuleTimerProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScalingRuleTimerProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(IMetricsProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.MetricsProperty")]
        public interface IMetricsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: metricTargetAverageUtilization: According to different metricTypes, set the target value of the corresponding monitoring indicator.CPU usage target value, in percentage.Memory usage target value, in percentage.QPS, in seconds.Response time, in milliseconds.Average number of active TCP connections, in pieces\/second.Public network SLB QPS, in seconds.Public network SLB response time, in milliseconds.Private network SLB QPS, in seconds.Private network SLB response time, in milliseconds.
            /// </remarks>
            [JsiiProperty(name: "metricTargetAverageUtilization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object MetricTargetAverageUtilization
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: metricType: CPU: CPU usage.MEMORY: Memory usage.QPS: Average QPS of a single instance of a JAVA application within 1 minute.RT: Average RT value of all service of a JAVA application within 1 minute.tcpActiveConn: Average number of active TCP connections of a single instance within 30 seconds.SLB_QPS: Average public network SLB QPS of a single instance within 15 seconds.SLB_RT: Average response time of public network SLB within 15 seconds.INTRANET_SLB_QPS: Average private network SLB QPS of a single instance within 15 seconds.INTRANET_SLB_RT: Average response time of private network SLB within 15 seconds.
            /// </remarks>
            [JsiiProperty(name: "metricType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object MetricType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: slbId: The ID of the SLB instance.
            /// </remarks>
            [JsiiProperty(name: "slbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlbId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slbLogstore: The name of the log store of the SLS project for SLB instance.
            /// </remarks>
            [JsiiProperty(name: "slbLogstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlbLogstore
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: slbProject: The project ID of the  SLS project for SLB instance.
            /// </remarks>
            [JsiiProperty(name: "slbProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SlbProject
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: vport: The port of the SLB instance.
            /// </remarks>
            [JsiiProperty(name: "vport", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Vport
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMetricsProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.MetricsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IMetricsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: metricTargetAverageUtilization: According to different metricTypes, set the target value of the corresponding monitoring indicator.CPU usage target value, in percentage.Memory usage target value, in percentage.QPS, in seconds.Response time, in milliseconds.Average number of active TCP connections, in pieces\/second.Public network SLB QPS, in seconds.Public network SLB response time, in milliseconds.Private network SLB QPS, in seconds.Private network SLB response time, in milliseconds.
                /// </remarks>
                [JsiiProperty(name: "metricTargetAverageUtilization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object MetricTargetAverageUtilization
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: metricType: CPU: CPU usage.MEMORY: Memory usage.QPS: Average QPS of a single instance of a JAVA application within 1 minute.RT: Average RT value of all service of a JAVA application within 1 minute.tcpActiveConn: Average number of active TCP connections of a single instance within 30 seconds.SLB_QPS: Average public network SLB QPS of a single instance within 15 seconds.SLB_RT: Average response time of public network SLB within 15 seconds.INTRANET_SLB_QPS: Average private network SLB QPS of a single instance within 15 seconds.INTRANET_SLB_RT: Average response time of private network SLB within 15 seconds.
                /// </remarks>
                [JsiiProperty(name: "metricType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object MetricType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: slbId: The ID of the SLB instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SlbId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slbLogstore: The name of the log store of the SLS project for SLB instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slbLogstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SlbLogstore
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: slbProject: The project ID of the  SLS project for SLB instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "slbProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SlbProject
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: vport: The port of the SLB instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "vport", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Vport
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.MetricsProperty")]
        public class MetricsProperty : AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IMetricsProperty
        {
            private object _metricTargetAverageUtilization;

            /// <remarks>
            /// <strong>Property</strong>: metricTargetAverageUtilization: According to different metricTypes, set the target value of the corresponding monitoring indicator.CPU usage target value, in percentage.Memory usage target value, in percentage.QPS, in seconds.Response time, in milliseconds.Average number of active TCP connections, in pieces\/second.Public network SLB QPS, in seconds.Public network SLB response time, in milliseconds.Private network SLB QPS, in seconds.Private network SLB response time, in milliseconds.
            /// </remarks>
            [JsiiProperty(name: "metricTargetAverageUtilization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MetricTargetAverageUtilization
            {
                get => _metricTargetAverageUtilization;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _metricTargetAverageUtilization = value;
                }
            }

            private object _metricType;

            /// <remarks>
            /// <strong>Property</strong>: metricType: CPU: CPU usage.MEMORY: Memory usage.QPS: Average QPS of a single instance of a JAVA application within 1 minute.RT: Average RT value of all service of a JAVA application within 1 minute.tcpActiveConn: Average number of active TCP connections of a single instance within 30 seconds.SLB_QPS: Average public network SLB QPS of a single instance within 15 seconds.SLB_RT: Average response time of public network SLB within 15 seconds.INTRANET_SLB_QPS: Average private network SLB QPS of a single instance within 15 seconds.INTRANET_SLB_RT: Average response time of private network SLB within 15 seconds.
            /// </remarks>
            [JsiiProperty(name: "metricType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MetricType
            {
                get => _metricType;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _metricType = value;
                }
            }

            private object? _slbId;

            /// <remarks>
            /// <strong>Property</strong>: slbId: The ID of the SLB instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlbId
            {
                get => _slbId;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _slbId = value;
                }
            }

            private object? _slbLogstore;

            /// <remarks>
            /// <strong>Property</strong>: slbLogstore: The name of the log store of the SLS project for SLB instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbLogstore", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlbLogstore
            {
                get => _slbLogstore;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _slbLogstore = value;
                }
            }

            private object? _slbProject;

            /// <remarks>
            /// <strong>Property</strong>: slbProject: The project ID of the  SLS project for SLB instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slbProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlbProject
            {
                get => _slbProject;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _slbProject = value;
                }
            }

            private object? _vport;

            /// <remarks>
            /// <strong>Property</strong>: vport: The port of the SLB instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vport", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Vport
            {
                get => _vport;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _vport = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IScaleDownRulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleDownRulesProperty")]
        public interface IScaleDownRulesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: step: The elastic expansion or reduction step size. The maximum number of instances that can be expanded or reduced in a unit of time.
            /// </remarks>
            [JsiiProperty(name: "step", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Step
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: disabled: Whether to disable the scaling rule. Default value: false
            /// </remarks>
            [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Disabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stabilizationWindowSeconds: The number of seconds that the scaling rule waits before it can be executed again.
            /// </remarks>
            [JsiiProperty(name: "stabilizationWindowSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StabilizationWindowSeconds
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IScaleDownRulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleDownRulesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScaleDownRulesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: step: The elastic expansion or reduction step size. The maximum number of instances that can be expanded or reduced in a unit of time.
                /// </remarks>
                [JsiiProperty(name: "step", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Step
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: disabled: Whether to disable the scaling rule. Default value: false
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Disabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stabilizationWindowSeconds: The number of seconds that the scaling rule waits before it can be executed again.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stabilizationWindowSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? StabilizationWindowSeconds
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleDownRulesProperty")]
        public class ScaleDownRulesProperty : AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScaleDownRulesProperty
        {
            private object _step;

            /// <remarks>
            /// <strong>Property</strong>: step: The elastic expansion or reduction step size. The maximum number of instances that can be expanded or reduced in a unit of time.
            /// </remarks>
            [JsiiProperty(name: "step", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Step
            {
                get => _step;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _step = value;
                }
            }

            private object? _disabled;

            /// <remarks>
            /// <strong>Property</strong>: disabled: Whether to disable the scaling rule. Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Disabled
            {
                get => _disabled;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _disabled = value;
                }
            }

            private object? _stabilizationWindowSeconds;

            /// <remarks>
            /// <strong>Property</strong>: stabilizationWindowSeconds: The number of seconds that the scaling rule waits before it can be executed again.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stabilizationWindowSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StabilizationWindowSeconds
            {
                get => _stabilizationWindowSeconds;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _stabilizationWindowSeconds = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IScaleUpRulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleUpRulesProperty")]
        public interface IScaleUpRulesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: step: The elastic expansion or reduction step size. The maximum number of instances that can be expanded or reduced in a unit of time.
            /// </remarks>
            [JsiiProperty(name: "step", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Step
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: disabled: Whether to disable the scaling rule. Default value: false
            /// </remarks>
            [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Disabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stabilizationWindowSeconds: The number of seconds that the scaling rule waits before it can be executed again.
            /// </remarks>
            [JsiiProperty(name: "stabilizationWindowSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StabilizationWindowSeconds
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IScaleUpRulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleUpRulesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScaleUpRulesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: step: The elastic expansion or reduction step size. The maximum number of instances that can be expanded or reduced in a unit of time.
                /// </remarks>
                [JsiiProperty(name: "step", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Step
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: disabled: Whether to disable the scaling rule. Default value: false
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Disabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stabilizationWindowSeconds: The number of seconds that the scaling rule waits before it can be executed again.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stabilizationWindowSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? StabilizationWindowSeconds
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleUpRulesProperty")]
        public class ScaleUpRulesProperty : AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScaleUpRulesProperty
        {
            private object _step;

            /// <remarks>
            /// <strong>Property</strong>: step: The elastic expansion or reduction step size. The maximum number of instances that can be expanded or reduced in a unit of time.
            /// </remarks>
            [JsiiProperty(name: "step", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Step
            {
                get => _step;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _step = value;
                }
            }

            private object? _disabled;

            /// <remarks>
            /// <strong>Property</strong>: disabled: Whether to disable the scaling rule. Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Disabled
            {
                get => _disabled;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _disabled = value;
                }
            }

            private object? _stabilizationWindowSeconds;

            /// <remarks>
            /// <strong>Property</strong>: stabilizationWindowSeconds: The number of seconds that the scaling rule waits before it can be executed again.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stabilizationWindowSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StabilizationWindowSeconds
            {
                get => _stabilizationWindowSeconds;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _stabilizationWindowSeconds = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IScalingRuleMetricProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleMetricProperty")]
        public interface IScalingRuleMetricProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: maxReplicas: The maximum number of application instances that can be automatically scaled up.
            /// </remarks>
            [JsiiProperty(name: "maxReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object MaxReplicas
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: metrics: The configuration of the monitoring indicator.
            /// </remarks>
            [JsiiProperty(name: "metrics", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.MetricsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object Metrics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: minReplicas: The minimum number of application instances that can be automatically scaled down.
            /// </remarks>
            [JsiiProperty(name: "minReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object MinReplicas
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: scaleDownRules: Application scale down rules
            /// </remarks>
            [JsiiProperty(name: "scaleDownRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleDownRulesProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ScaleDownRules
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: scaleUpRules: Application scale up rules
            /// </remarks>
            [JsiiProperty(name: "scaleUpRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleUpRulesProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ScaleUpRules
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IScalingRuleMetricProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleMetricProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScalingRuleMetricProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: maxReplicas: The maximum number of application instances that can be automatically scaled up.
                /// </remarks>
                [JsiiProperty(name: "maxReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object MaxReplicas
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: metrics: The configuration of the monitoring indicator.
                /// </remarks>
                [JsiiProperty(name: "metrics", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.MetricsProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object Metrics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: minReplicas: The minimum number of application instances that can be automatically scaled down.
                /// </remarks>
                [JsiiProperty(name: "minReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object MinReplicas
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: scaleDownRules: Application scale down rules
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "scaleDownRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleDownRulesProperty\"}]}}", isOptional: true)]
                public object? ScaleDownRules
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: scaleUpRules: Application scale up rules
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "scaleUpRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleUpRulesProperty\"}]}}", isOptional: true)]
                public object? ScaleUpRules
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleMetricProperty")]
        public class ScalingRuleMetricProperty : AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScalingRuleMetricProperty
        {
            private object _maxReplicas;

            /// <remarks>
            /// <strong>Property</strong>: maxReplicas: The maximum number of application instances that can be automatically scaled up.
            /// </remarks>
            [JsiiProperty(name: "maxReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MaxReplicas
            {
                get => _maxReplicas;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _maxReplicas = value;
                }
            }

            private object _metrics;

            /// <remarks>
            /// <strong>Property</strong>: metrics: The configuration of the monitoring indicator.
            /// </remarks>
            [JsiiProperty(name: "metrics", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.MetricsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Metrics
            {
                get => _metrics;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IMetricsProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IMetricsProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IMetricsProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _metrics = value;
                }
            }

            private object _minReplicas;

            /// <remarks>
            /// <strong>Property</strong>: minReplicas: The minimum number of application instances that can be automatically scaled down.
            /// </remarks>
            [JsiiProperty(name: "minReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MinReplicas
            {
                get => _minReplicas;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _minReplicas = value;
                }
            }

            private object? _scaleDownRules;

            /// <remarks>
            /// <strong>Property</strong>: scaleDownRules: Application scale down rules
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scaleDownRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleDownRulesProperty\"}]}}", isOptional: true)]
            public object? ScaleDownRules
            {
                get => _scaleDownRules;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScaleDownRulesProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScaleDownRulesProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _scaleDownRules = value;
                }
            }

            private object? _scaleUpRules;

            /// <remarks>
            /// <strong>Property</strong>: scaleUpRules: Application scale up rules
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scaleUpRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScaleUpRulesProperty\"}]}}", isOptional: true)]
            public object? ScaleUpRules
            {
                get => _scaleUpRules;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScaleUpRulesProperty cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScaleUpRulesProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _scaleUpRules = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IScalingRuleTimerProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleTimerProperty")]
        public interface IScalingRuleTimerProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: period: The period for executing the scheduled elastic scaling policy. The value description is as follows:* * *: Execute the scheduled policy at a specified time every day.* * Fri,Mon: Execute the scheduled policy at a specified time on a specified day of the week. Multiple selections are supported. GMT+8 time zone. The value description is as follows:Sun: SundayMon: MondayTue: TuesdayWed: WednesdayThu: ThursdayFri: FridaySat: Saturday1,2,3,28,31 * *: Execute the scheduled policy at a specified time on a specified date of each month. Multiple selections are supported. The value range is [1,31]. If there is no 31st day in the month, skip that day and execute the scheduled policy.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Period
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: schedules: The time when the elastic scaling policy is triggered, and the number of application instances that need to be maintained during this time period. A maximum of 20 time points are supported.
            /// </remarks>
            [JsiiProperty(name: "schedules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.SchedulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            object Schedules
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: beginDate: The start time of the scaling policy. The start time must be in the future. The start time must be in the format of YYYY-MM-DD.When all values are null, it indicates long-term execution, which is the default value.
            /// </remarks>
            [JsiiProperty(name: "beginDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? BeginDate
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: endDate: The end time of the scaling policy. The end time must be in the future. The end time must be in the format of YYYY-MM-DD.When all values are null, it indicates long-term execution, which is the default value.
            /// </remarks>
            [JsiiProperty(name: "endDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EndDate
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IScalingRuleTimerProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleTimerProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScalingRuleTimerProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: period: The period for executing the scheduled elastic scaling policy. The value description is as follows:* * *: Execute the scheduled policy at a specified time every day.* * Fri,Mon: Execute the scheduled policy at a specified time on a specified day of the week. Multiple selections are supported. GMT+8 time zone. The value description is as follows:Sun: SundayMon: MondayTue: TuesdayWed: WednesdayThu: ThursdayFri: FridaySat: Saturday1,2,3,28,31 * *: Execute the scheduled policy at a specified time on a specified date of each month. Multiple selections are supported. The value range is [1,31]. If there is no 31st day in the month, skip that day and execute the scheduled policy.
                /// </remarks>
                [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Period
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: schedules: The time when the elastic scaling policy is triggered, and the number of application instances that need to be maintained during this time period. A maximum of 20 time points are supported.
                /// </remarks>
                [JsiiProperty(name: "schedules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.SchedulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
                public object Schedules
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: beginDate: The start time of the scaling policy. The start time must be in the future. The start time must be in the format of YYYY-MM-DD.When all values are null, it indicates long-term execution, which is the default value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "beginDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? BeginDate
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: endDate: The end time of the scaling policy. The end time must be in the future. The end time must be in the format of YYYY-MM-DD.When all values are null, it indicates long-term execution, which is the default value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "endDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EndDate
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.ScalingRuleTimerProperty")]
        public class ScalingRuleTimerProperty : AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.IScalingRuleTimerProperty
        {
            private object _period;

            /// <remarks>
            /// <strong>Property</strong>: period: The period for executing the scheduled elastic scaling policy. The value description is as follows:* * *: Execute the scheduled policy at a specified time every day.* * Fri,Mon: Execute the scheduled policy at a specified time on a specified day of the week. Multiple selections are supported. GMT+8 time zone. The value description is as follows:Sun: SundayMon: MondayTue: TuesdayWed: WednesdayThu: ThursdayFri: FridaySat: Saturday1,2,3,28,31 * *: Execute the scheduled policy at a specified time on a specified date of each month. Multiple selections are supported. The value range is [1,31]. If there is no 31st day in the month, skip that day and execute the scheduled policy.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Period
            {
                get => _period;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _period = value;
                }
            }

            private object _schedules;

            /// <remarks>
            /// <strong>Property</strong>: schedules: The time when the elastic scaling policy is triggered, and the number of application instances that need to be maintained during this time period. A maximum of 20 time points are supported.
            /// </remarks>
            [JsiiProperty(name: "schedules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sae.RosApplicationScalingRule.SchedulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Schedules
            {
                get => _schedules;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.ISchedulesProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.ISchedulesProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.ISchedulesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _schedules = value;
                }
            }

            private object? _beginDate;

            /// <remarks>
            /// <strong>Property</strong>: beginDate: The start time of the scaling policy. The start time must be in the future. The start time must be in the format of YYYY-MM-DD.When all values are null, it indicates long-term execution, which is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "beginDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BeginDate
            {
                get => _beginDate;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _beginDate = value;
                }
            }

            private object? _endDate;

            /// <remarks>
            /// <strong>Property</strong>: endDate: The end time of the scaling policy. The end time must be in the future. The end time must be in the format of YYYY-MM-DD.When all values are null, it indicates long-term execution, which is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndDate
            {
                get => _endDate;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _endDate = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ISchedulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.SchedulesProperty")]
        public interface ISchedulesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: atTime: The time when the scheduled scaling policy is executed. The time must be in the format of HH:mm. The time must be in the range of 00:00 to 23:59.
            /// </remarks>
            [JsiiProperty(name: "atTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object AtTime
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetReplicas: The number of application instances that need to be maintained during this time period.
            /// </remarks>
            [JsiiProperty(name: "targetReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object TargetReplicas
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ISchedulesProperty), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.SchedulesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.ISchedulesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: atTime: The time when the scheduled scaling policy is executed. The time must be in the format of HH:mm. The time must be in the range of 00:00 to 23:59.
                /// </remarks>
                [JsiiProperty(name: "atTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object AtTime
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: targetReplicas: The number of application instances that need to be maintained during this time period.
                /// </remarks>
                [JsiiProperty(name: "targetReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object TargetReplicas
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-sae.RosApplicationScalingRule.SchedulesProperty")]
        public class SchedulesProperty : AlibabaCloud.SDK.ROS.CDK.Sae.RosApplicationScalingRule.ISchedulesProperty
        {
            private object _atTime;

            /// <remarks>
            /// <strong>Property</strong>: atTime: The time when the scheduled scaling policy is executed. The time must be in the format of HH:mm. The time must be in the range of 00:00 to 23:59.
            /// </remarks>
            [JsiiProperty(name: "atTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AtTime
            {
                get => _atTime;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _atTime = value;
                }
            }

            private object _targetReplicas;

            /// <remarks>
            /// <strong>Property</strong>: targetReplicas: The number of application instances that need to be maintained during this time period.
            /// </remarks>
            [JsiiProperty(name: "targetReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetReplicas
            {
                get => _targetReplicas;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case double cast_cd4240:
                                break;
                            case byte cast_cd4240:
                                break;
                            case decimal cast_cd4240:
                                break;
                            case float cast_cd4240:
                                break;
                            case int cast_cd4240:
                                break;
                            case long cast_cd4240:
                                break;
                            case sbyte cast_cd4240:
                                break;
                            case short cast_cd4240:
                                break;
                            case uint cast_cd4240:
                                break;
                            case ulong cast_cd4240:
                                break;
                            case ushort cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _targetReplicas = value;
                }
            }
        }
    }
}
